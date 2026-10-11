import { FIRM_DETAILS, CORE_VALUES, CONSULTATION_STEPS } from './firm';
import { LAWYERS } from './lawyers';
import { PRACTICE_AREAS } from './practiceAreas';
import { ARTICLES } from './articles';

export const CHATBOT_KNOWLEDGE_BASE = {
  firm: {
    ...FIRM_DETAILS,
    coreValues: CORE_VALUES,
    consultationSteps: CONSULTATION_STEPS,
  },
  lawyers: LAWYERS.map((l) => ({
    name: l.name,
    designation: l.designation,
    title: l.title,
    practiceAreas: l.practiceAreas,
    languages: l.languages,
    officeLocation: l.officeLocation,
    shortBio: l.shortBio,
    fullBio: l.fullBio.join(' '),
  })),
  practiceAreas: PRACTICE_AREAS.map((p) => ({
    title: p.title,
    slug: p.slug,
    shortDescription: p.shortDescription,
    overview: p.overview,
    commonIssues: p.commonIssues,
    howWeAssist: p.howWeAssist,
    processSteps: p.processSteps,
    documentChecklist: p.documentChecklist || [],
    faqs: p.faqs,
  })),
  articles: ARTICLES.map((a) => ({
    title: a.title,
    slug: a.slug,
    category: a.category,
    summary: a.summary,
    keyTakeaways: a.keyTakeaways,
  })),
  legalStatutesSummary: [
    {
      statute: 'Companies Act, 2063 (कम्पनी ऐन, २०६३)',
      notes: 'Private/public company registration at OCR, MOA/AOA, share transfers, shareholder deadlocks, FDI approval.',
    },
    {
      statute: 'Muluki Civil Code, 2074 (मुलुकी देवानी संहिता, २०७४)',
      notes: 'Contracts, property ownership, partition (Angsha Banda), mutual consent and contested divorce, promissory notes (Tamsuk), succession.',
    },
    {
      statute: 'Muluki Civil Procedure Code, 2074 (मुलुकी देवानी कार्यविधि संहिता, २०७४)',
      notes: 'Plaint (Firdi), written statement (Pratiyuttar), interim orders (Antarim Aadesh), decree execution, court fees.',
    },
    {
      statute: 'Muluki Criminal Code, 2074 & Criminal Procedure Code, 2074 (मुलुकी अपराध व फौजदारी कार्यविधि संहिता, २०७४)',
      notes: 'FIR (Jaheri), detention remand (Mhyad Thap), bail (Dharauti/Thuna), trial defense, appeals before High Court.',
    },
    {
      statute: 'Banking Offence and Punishment Act, 2064 (बैंकिङ्ग कसूर तथा सजाय ऐन, २०६४)',
      notes: 'Cheque bounce (dishonored cheques), banking fraud, account freeze, penal prosecution.',
    },
    {
      statute: 'Labour Act, 2074 & Labour Rules, 2075 (श्रम ऐन, २०७४)',
      notes: 'Employment contracts, workplace bylaws (Biniyamawali), disciplinary actions, termination, Social Security Fund (SSF) enrollment.',
    },
    {
      statute: 'Patent, Design and Trademark Act, 2022',
      notes: 'Trademark registration at Department of Industry (DOI), 7-year validity, opposition hearings, cease-and-desist notices.',
    },
    {
      statute: 'Arbitration Act, 2055 & NEPCA Rules (मध्यस्थता ऐन, २०५५)',
      notes: 'Commercial arbitration, tribunal hearings, compromise deeds (Milapatra), foreign award enforcement.',
    },
    {
      statute: 'Right to Privacy Act, 2075 & Constitution of Nepal Art. 28',
      notes: 'Client data protection, confidentiality, statutory exceptions.',
    },
    {
      statute: 'Nepal Evidence Act, 2031 (Section 45)',
      notes: 'Advocate-client privileged communications and non-disclosure obligations.',
    },
  ],
  nepaleseCourtsAndTribunals: [
    'Supreme Court of Nepal (सर्वोच्च अदालत, Ramshah Path, Kathmandu)',
    'High Court Patan (उच्च अदालत पाटन, Lalitpur)',
    'Kathmandu District Court (काठमाडौं जिल्ला अदालत, Babarmahal)',
    'Lalitpur District Court & Bhaktapur District Court',
    'Debt Recovery Tribunal (ऋण पुनरुद्धार अधिकरण, DRT)',
    'Labour Court (श्रम अदालत, Kathmandu)',
    'Revenue Tribunal (राजस्व न्यायाधिकरण, Kathmandu)',
    'Special Court (विशेष अदालत, Babarmahal - anti-corruption)',
  ],
  consultationFramework: {
    fee: 'NPR 500 fixed initial consultation fee',
    duration: '30–45 minutes preliminary matter assessment and document review',
    mode: 'In-person at Basundhara-5, Tokha chamber or Online via Google Meet / WhatsApp / Phone call',
    schedulingConfirmation: 'A chamber clerk calls the client to confirm timing and assign the appropriate advocate',
    relationshipDisclaimer: 'Initial chat inquiries and consultation fee submission do not constitute formal advocate-client representation until a formal Vakalatnama / Warisnama is executed.',
    outcomeDisclaimer: 'In accordance with Rule 3 of the Nepal Bar Council Code of Conduct 2051, advocates do not guarantee specific court outcomes or judicial decrees.',
  },
};

/**
 * Compiles a rich textual context suitable for LLM system instructions or intelligent offline matching.
 */
export function generateSystemPromptContext(): string {
  const firm = CHATBOT_KNOWLEDGE_BASE.firm;
  const lawyersText = CHATBOT_KNOWLEDGE_BASE.lawyers
    .map(
      (l) =>
        `- ${l.name} (${l.designation}): Specializes in ${l.practiceAreas.join(
          ', '
        )}. Languages: ${l.languages.join(', ')}. Bio summary: ${l.shortBio}`
    )
    .join('\n');

  const practicesText = CHATBOT_KNOWLEDGE_BASE.practiceAreas
    .map(
      (p) =>
        `### ${p.title} (${p.slug})
Overview: ${p.overview}
Key issues handled: ${p.commonIssues.join('; ')}
Step-by-step procedure: ${p.processSteps.map((s) => `${s.title}: ${s.description}`).join(' -> ')}
Required documents checklist: ${p.documentChecklist.join(', ') || 'Case specific'}
Top FAQs: ${p.faqs.map((f) => `Q: ${f.question} A: ${f.answer}`).join(' | ')}`
    )
    .join('\n\n');

  const statutesText = CHATBOT_KNOWLEDGE_BASE.legalStatutesSummary
    .map((s) => `- ${s.statute}: ${s.notes}`)
    .join('\n');

  const articlesText = CHATBOT_KNOWLEDGE_BASE.articles
    .map((a) => `- "${a.title}" (${a.category}): ${a.summary}`)
    .join('\n');

  return `
OFFICIAL CONTEXT FOR RAUT LEGAL ASSOCIATES (RLA):
Chamber Name: ${firm.name} (${firm.shortName})
Motto: "${firm.motto}"
Location & Address: ${firm.address}
Phone & WhatsApp: ${firm.phoneDisplay}
Email: ${firm.email}
Office Hours: ${firm.officeHours}
Initial Consultation Fee: ${firm.consultationFeeNPR} NPR (${firm.consultationDuration})
Jurisdiction: ${firm.jurisdiction}

ADVOCATES & LEGAL TEAM:
${lawyersText}

CORE PRACTICE AREAS:
${practicesText}

KEY NEPALESE STATUTES & REGULATIONS:
${statutesText}

COURTS & FORUMS COVERED:
${CHATBOT_KNOWLEDGE_BASE.nepaleseCourtsAndTribunals.join(', ')}

LEGAL RESOURCES & ARTICLES AVAILABLE ON SITE:
${articlesText}

CONSULTATION & ETHICS FRAMEWORK:
- Fixed fee: NPR 500 for initial 30–45 min legal analysis in Tokha chamber or online.
- Representation: Chat or initial consultation does not form advocate-client privilege until formal Vakalatnama / Warisnama is executed.
- Ethical Rule: In accordance with Rule 3 of the Nepal Bar Council Code of Conduct 2051, advocates strictly do not guarantee specific court outcomes or judicial decrees.
- Step-by-Step Appointment Booking in Chat: Users can book an appointment directly through this chatbot or via /appointments. If a user asks to book or schedule, warmly invite them to book step-by-step or use the interactive booking flow.
`.trim();
}
