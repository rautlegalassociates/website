import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { generateSystemPromptContext, CHATBOT_KNOWLEDGE_BASE } from './src/data/chatbotKnowledge.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini Client server-side
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
}

// In-memory appointments list for demo/session persistence
const registeredAppointments: Array<{
  id: string;
  referenceCode: string;
  fullName: string;
  phone: string;
  email?: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTime: string;
  consultationMode: string;
  notes?: string;
  feeAmount: number;
  status: string;
  createdAt: string;
}> = [];

// Appointment Booking Endpoint
app.post('/api/appointments', (req: Request, res: Response) => {
  const {
    fullName,
    phone,
    email,
    serviceCategory,
    preferredDate,
    preferredTime,
    consultationMode,
    notes,
    agreedToPrivacy,
  } = req.body;

  if (!fullName || !phone || !serviceCategory || !preferredDate || !preferredTime) {
    return res.status(400).json({
      success: false,
      error: 'Full name, phone, service category, date, and time are required.',
    });
  }

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const referenceCode = `RLA-2026-${randomNum}`;
  const newAppointment = {
    id: `apt_${Date.now()}`,
    referenceCode,
    fullName: String(fullName).trim(),
    phone: String(phone).trim(),
    email: email ? String(email).trim() : undefined,
    serviceCategory: String(serviceCategory).trim(),
    preferredDate: String(preferredDate).trim(),
    preferredTime: String(preferredTime).trim(),
    consultationMode: consultationMode || 'in-person',
    notes: notes ? String(notes).trim() : '',
    feeAmount: 500,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  registeredAppointments.push(newAppointment);

  return res.json({
    success: true,
    referenceCode,
    message: 'Your legal consultation request has been successfully registered. Our chamber clerk will contact you to confirm the time slot.',
    appointment: newAppointment,
  });
});

// AI Legal Chatbot Assistant Endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'A valid message string is required.' });
  }

  const websiteContext = generateSystemPromptContext();

  const systemInstruction = `You are the official, articulate, empathetic, and trustworthy AI Legal Assistant for Raut Legal Associates (RLA), an established law firm based in Basundhara-5, Tokha, Kathmandu, Nepal.

YOUR OBJECTIVE & PERSONA:
1. Provide accurate, practical, and respectful information grounded in Nepalese law (Muluki Civil Code 2074, Muluki Criminal Code 2074, Companies Act 2063, Banking Offence Act 2064, Labour Act 2074, etc.).
2. You have exhaustive knowledge of the entire website, our advocates, all 10 practice areas, article summaries, location, office hours, and consultation fee structure.
3. Speak with refined professional legal composure. When explaining complex legal processes, use clean bullet points or numbered steps.
4. Keep answers focused, clear, and reassuring. Always highlight what documents the client should prepare.
5. If the user asks to book an appointment, schedule a consultation, or meet with an advocate:
   - Enthusiastically inform them that they can book an initial consultation right here in this chat or via the website form.
   - Mention the initial consultation fee is fixed at NPR 500 for a 30–45 minute matter analysis (in Tokha chamber or online).
   - If they are in the interactive booking mode, guide them through the details.
6. MANDATORY ETHICAL & LEGAL DISCLAIMERS:
   - Remind the user that your replies are informative and educational under Nepalese law and do not constitute a formal advocate-client relationship until a formal Vakalatnama or Warisnama is executed.
   - Under Rule 3 of the Nepal Bar Council Code of Conduct 2051, advocates strictly do not guarantee specific court outcomes or judicial decrees.

EXHAUSTIVE WEBSITE KNOWLEDGE BASE:
${websiteContext}`;

  try {
    if (aiClient) {
      const contentsPayload = [
        ...(Array.isArray(history)
          ? history.map((item: { role: string; text: string }) => ({
              role: item.role === 'user' ? 'user' : 'model',
              parts: [{ text: item.text }],
            }))
          : []),
        { role: 'user', parts: [{ text: message }] },
      ];

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: contentsPayload,
        config: {
          systemInstruction,
          temperature: 0.3,
          maxOutputTokens: 900,
        },
      });

      const replyText =
        response.text ||
        'Thank you for contacting Raut Legal Associates. You can book an initial consultation (NPR 500) directly here in chat or call our chamber at +977 9706410516.';

      return res.json({ reply: replyText });
    } else {
      // Comprehensive Knowledge Fallback Engine when GEMINI_API_KEY is not configured
      const lower = message.toLowerCase();
      let fallback = '';

      if (
        lower.includes('book') ||
        lower.includes('appointment') ||
        lower.includes('schedule') ||
        lower.includes('consultation') ||
        lower.includes('meeting') ||
        lower.includes('reserve')
      ) {
        fallback = `You can easily book a legal consultation with an advocate right now:\n\n• Fee: NPR 500 (30–45 min matter & document review)\n• Consultation Modes: In-person at our Basundhara-5 Tokha chamber, or Online (Google Meet / Phone)\n• Days & Hours: Sunday – Friday, 10:00 AM – 5:00 PM\n\nTo schedule directly in this chat, click the "Book in Chat" button or type "Start booking". You can also visit our /appointments page or call +977 9706410516.`;
      } else if (
        lower.includes('lawyer') ||
        lower.includes('advocate') ||
        lower.includes('team') ||
        lower.includes('sahil') ||
        lower.includes('avishek') ||
        lower.includes('bishwanath')
      ) {
        fallback = `Our legal team at Raut Legal Associates includes:\n\n1. Adv. Sahil Raut Gaddi – Advocate focusing on Corporate & Commercial Law, Civil Litigation, and Contract Review.\n2. Adv. Avishek Raut – Advocate specializing in Property, Land & Real Estate Law, Labour Law, and Alternative Dispute Resolution (ADR).\n3. Adv. Bishwanath Das – Advocate handling Civil Litigation, Criminal Defense & Bail, and Banking Disputes.\n\nAll advocates represent clients before District Courts, High Court Patan, and Supreme Court. Initial consultation fee: NPR 500.`;
      } else if (
        lower.includes('fee') ||
        lower.includes('cost') ||
        lower.includes('npr') ||
        lower.includes('price') ||
        lower.includes('charge')
      ) {
        fallback = `Our initial consultation fee is fixed at NPR 500.\n\n• What it covers: Comprehensive 30–45 minute matter analysis, document review, and explanation of viable legal pathways under Nepalese statutes.\n• Formats: In-person at our Basundhara-5, Tokha chamber or virtual consultation via Google Meet/Phone.\n• Representation & Court Fees: Court filings, plaint drafting, and ongoing representation are determined transparently based on case complexity upon executing a formal Vakalatnama.`;
      } else if (
        lower.includes('company') ||
        lower.includes('corporate') ||
        lower.includes('ocr') ||
        lower.includes('business') ||
        lower.includes('moa') ||
        lower.includes('aoa') ||
        lower.includes('fdi')
      ) {
        fallback = `Under the Companies Act 2063, our Corporate & Commercial Law practice handles:\n\n1. Company name reservation and digital incorporation at the Office of Company Registrar (OCR) (typical timeframe: 3–7 working days).\n2. Drafting customized Memorandum of Association (MOA) and Articles of Association (AOA).\n3. Foreign Direct Investment (FDI) approvals via Department of Industry & Nepal Rastra Bank recording.\n4. Ward business registration and PAN/VAT issuance at Inland Revenue Office.\n5. Share transfers, annual filings, and shareholder dispute resolution.`;
      } else if (
        lower.includes('land') ||
        lower.includes('property') ||
        lower.includes('malpot') ||
        lower.includes('napi') ||
        lower.includes('lalpurja') ||
        lower.includes('rokka') ||
        lower.includes('sresta') ||
        lower.includes('rajinama')
      ) {
        fallback = `For Property & Real Estate in Nepal, we provide rigorous title due diligence and litigation:\n\n1. Sresta & Tiro verification at Land Revenue Offices (Malpot).\n2. Cadastral map checks (Napi naksha) for boundary encroachment.\n3. Rokka verification (checking for bank mortgages, court freezes, or revenue holds).\n4. Drafting deeds of transfer (Rajinama), mortgage deeds (Dhitobhandhak), and tenancy contracts.\n5. Handling Guthi land conversion, Mohi tenant claims, and partition (Angsha Banda).\n\nInitial consultation fee: NPR 500.`;
      } else if (
        lower.includes('divorce') ||
        lower.includes('marriage') ||
        lower.includes('family') ||
        lower.includes('custody') ||
        lower.includes('alimony') ||
        lower.includes('angsha')
      ) {
        fallback = `Under the Muluki Civil Code 2074, our Family & Matrimonial Law practice handles:\n\n1. Mutual consent divorce (Manjuripari Sambandha Bichhed) – streamlined through court.\n2. Contested divorce petitions by husband or wife directly at District Court.\n3. Child custody (Sanrakhyan) and parental visitation rights.\n4. Spousal alimony and partition of matrimonial property (Angsha).\n5. Court marriage registration for Nepali citizens and foreign nationals.\n\nAll consultations are strictly confidential (NPR 500).`;
      } else if (
        lower.includes('bail') ||
        lower.includes('criminal') ||
        lower.includes('police') ||
        lower.includes('dharauti') ||
        lower.includes('fir') ||
        lower.includes('jaheri') ||
        lower.includes('arrest')
      ) {
        fallback = `Under the Muluki Criminal Code & Procedure Code 2074, our criminal defense advocates provide:\n\n1. Immediate custody assistance during police remand extensions (Mhyad Thap).\n2. Bail hearings (Dharauti / Thuna) before District and High Courts.\n3. Defense against fraud (Thagi), forgery (Kirte), and cybercrime.\n4. Appellate advocacy before High Court Patan and Supreme Court.\n\nFor urgent custody or detention assistance, call +977 9706410516 immediately.`;
      } else if (
        lower.includes('cheque') ||
        lower.includes('bank') ||
        lower.includes('drt') ||
        lower.includes('auction') ||
        lower.includes('blacklisting') ||
        lower.includes('bafia')
      ) {
        fallback = `For Banking & Financial disputes in Nepal, we handle:\n\n1. Cheque bounce cases under the Banking Offence and Punishment Act 2064 or Negotiable Instruments Act 2034.\n2. Injunctions against 35-day public auction notices published in newspapers.\n3. Representation before the Debt Recovery Tribunal (DRT - Rin Punaruddhar Adhikaran).\n4. Credit Information Bureau (CIB) blacklisting disputes and loan restructuring advisory.`;
      } else if (
        lower.includes('labour') ||
        lower.includes('labor') ||
        lower.includes('employment') ||
        lower.includes('ssf') ||
        lower.includes('termination')
      ) {
        fallback = `Under the Labour Act 2074 and Social Security Act 2074:\n\n1. Mandatory enrollment in the Social Security Fund (SSF) for formal employees.\n2. Drafting employment contracts, non-compete clauses, and HR internal bylaws (Biniyamawali).\n3. Guidance on legal domestic inquiries, show-cause notices (Spastikaran), and lawful termination.\n4. Representation before local Labour Offices and the Labour Court.`;
      } else if (
        lower.includes('trademark') ||
        lower.includes('copyright') ||
        lower.includes('ip') ||
        lower.includes('patent') ||
        lower.includes('doi')
      ) {
        fallback = `For Intellectual Property in Nepal:\n\n1. Trademark search and registration at the Department of Industry (DOI) in Tripureshwor, Kathmandu.\n2. Validity: Trademark registration lasts 7 years and can be renewed indefinitely.\n3. Trademark opposition against copycat applicants during official IP Gazette publication.\n4. Cease and desist notices and anti-counterfeiting enforcement.`;
      } else if (
        lower.includes('writ') ||
        lower.includes('certiorari') ||
        lower.includes('mandamus') ||
        lower.includes('administrative')
      ) {
        fallback = `Under the Constitution of Nepal, our advocates file Constitutional Writ Petitions before High Court Patan and the Supreme Court:\n\n• Certiorari (Utprekshan): To quash illegal or ultra-vires government/tribunal orders.\n• Mandamus (Paramadesh): To compel a public authority to execute their statutory duty.\n• Tax assessment appeals before the Revenue Tribunal (Rajaswa Tribunal).\n• Public procurement bid appeals before PPMO.`;
      } else if (
        lower.includes('address') ||
        lower.includes('location') ||
        lower.includes('where') ||
        lower.includes('tokha') ||
        lower.includes('hours') ||
        lower.includes('contact') ||
        lower.includes('phone')
      ) {
        fallback = `Raut Legal Associates Chamber Information:\n\n• Location: Basundhara-5, Tokha, Kathmandu, Nepal\n• Office Hours: Sunday – Friday: 10:00 AM – 5:00 PM (Saturday Closed)\n• Phone & WhatsApp: +977 9706410516\n• Email: contact@rautlegal.com.np\n• Consultation: Available in-person at Tokha or online via Google Meet/Phone (NPR 500).`;
      } else {
        fallback = `Namaste! Welcome to Raut Legal Associates in Kathmandu, Nepal. Our advocates Adv. Sahil Raut Gaddi, Adv. Avishek Raut, and Adv. Bishwanath Das provide counsel in Corporate, Civil Litigation, Criminal Defense, Property/Land, Family Law, Banking, and Labour matters.\n\n• Consultation Fee: NPR 500 (30–45 min matter analysis)\n• Chamber: Basundhara-5, Tokha, Kathmandu\n• Phone & WhatsApp: +977 9706410516\n\nYou can ask any legal question, or click "Book in Chat" to schedule an appointment with our advocates!`;
      }

      return res.json({ reply: fallback });
    }
  } catch (error) {
    console.error('Gemini chat generation error:', error);
    return res.status(500).json({
      error: 'Our AI assistant is temporarily unavailable. Please call or WhatsApp our chamber directly at +977 9706410516.',
    });
  }
});

// Vite middleware in development vs Static files in production
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Raut Legal Associates server running on http://localhost:${port}`);
  });
}

startServer();
