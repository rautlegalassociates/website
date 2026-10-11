export interface LegalFAQItem {
  question: string;
  questionNepali?: string;
  answer: string;
  category: string;
}

export const SERVICES_PAGE_FAQS: LegalFAQItem[] = [
  {
    question:
      "What is the initial consultation fee for legal advice at Raut Legal Associates in Kathmandu?",
    questionNepali:
      "राउत लीगल एसोसिएट्समा प्रारम्भिक कानूनी परामर्श शुल्क कति लाग्छ?",
    answer:
      "Our initial matter consultation fee is fixed at NPR 500. This covers a dedicated 30 to 45 minute structured session with a licensed advocate to evaluate your case facts, scrutinize relevant deeds or court summons, and outline actionable legal pathways before you commit to formal representation. Consultations are available in-person at our Basundhara-5 chamber in Tokha, Kathmandu or online via video conference.",
    category: "Consultation & Fees",
  },
  {
    question:
      "Which courts and tribunals in Nepal does Raut Legal Associates appear before?",
    questionNepali:
      "राउत लीगल एसोसिएट्सका वकिलहरूले नेपालका कुन कुन अदालतहरूमा बहस पैरवी गर्नुहुन्छ?",
    answer:
      "Our advocates are licensed by the Nepal Bar Council to practice nationwide. We regularly appear before the Supreme Court of Nepal (सर्वोच्च अदालत), High Court Patan (उच्च अदालत पाटन), Kathmandu District Court (काठमाडौं जिल्ला अदालत), Lalitpur District Court, Bhaktapur District Court, and specialized forums including the Debt Recovery Tribunal (ऋण पुनरुद्धार न्यायाधीकरण), Labor Court (श्रम अदालत), Revenue Tribunal (राजस्व न्यायाधीकरण), and Special Court (विशेष अदालत).",
    category: "Court Jurisdiction",
  },
  {
    question:
      "How do I retain a corporate lawyer for company registration or FDI compliance in Nepal?",
    questionNepali:
      "नेपालमा कम्पनी दर्ता वा वैदेशिक लगानी (FDI) का लागि वकिल कसरी नियुक्ति गर्ने?",
    answer:
      "You can schedule a consultation with our corporate practice team. We conduct an initial corporate assessment, draft bespoke Memorandum and Articles of Association (MOA/AOA) tailored to the Companies Act 2063, file your application with the Office of the Company Registrar (OCR), assist with Department of Industry approvals for Foreign Direct Investment (FDI), and complete tax registration (PAN/VAT) at the Inland Revenue Department.",
    category: "Corporate Law",
  },
  {
    question:
      "How are land disputes and property partition (Angsha Banda) handled under Nepalese law?",
    questionNepali:
      "नेपालको कानून अनुसार जग्गा विवाद र अंशबण्डा कसरी समाधान गरिन्छ?",
    answer:
      "Property partition and land title disputes are governed by the Muluki Civil Code 2074. Our property advocates assist with preliminary title and Sresta searches at the Land Revenue Office (Malpot Karyalaya), verify cadastral survey trace maps (Napi), draft family partition deeds (Angsha Chhotpatra), and represent co-parceners in partition lawsuits (Angsha Mudda) and boundary dispute litigation in District Courts.",
    category: "Property & Civil Litigation",
  },
  {
    question:
      "Can Nepalese citizens living abroad (NRNs) obtain legal representation without travelling to Nepal?",
    questionNepali:
      "विदेशमा रहेका गैरआवासीय नेपाली (NRN) ले नेपाल नआई कानूनी प्रतिनिधित्व लिन सक्छन्?",
    answer:
      "Yes. Overseas clients and Non-Resident Nepalis (NRNs) can execute an official Power of Attorney (अधिकृत वारिसनामा - Warisnama) authenticated by the relevant Embassy of Nepal or Consulate General abroad. Once received, our chamber advocates can represent you in court hearings, property transactions, corporate share transfers, and administrative departments without requiring your physical travel.",
    category: "International & NRN Services",
  },
  {
    question:
      "What documents should I bring to my initial legal consultation in Kathmandu?",
    questionNepali:
      "प्रारम्भिक कानूनी परामर्शका लागि आउँदा के कस्ता कागजातहरू ल्याउनुपर्छ?",
    answer:
      "Please bring original or legible copies of your Nepali Citizenship Certificate (नागरिकता) or passport, any contracts, promissory notes (तमसुक), land ownership certificates (लालपुर्जा), police reports (जाहेरी), or court notices/summons (म्याद) received, along with a brief chronological timeline of events to maximize consultation efficiency.",
    category: "Case Preparation",
  },
  {
    question:
      "What are the chamber office hours and emergency contact details for Raut Legal Associates?",
    questionNepali:
      "राउत लीगल एसोसिएट्सको कार्यालय समय र सम्पर्क नम्बर के के हुन्?",
    answer:
      "Our chamber at Basundhara-5, Tokha, Kathmandu is open Sunday through Friday from 8:00 AM to 6:00 PM (closed on Saturdays). You can book an appointment online or contact our chamber directly via phone or WhatsApp at +977 9706410516 or by email at rautlegalassociates@gmail.com.",
    category: "Chamber Information",
  },
];

export const RESOURCES_PAGE_FAQS: LegalFAQItem[] = [
  {
    question:
      "What is the step-by-step procedure to register a private limited company in Nepal under Companies Act 2063?",
    questionNepali:
      "नेपालमा कम्पनी ऐन २०६३ बमोजिम प्राइभेट लिमिटेड कम्पनी दर्ता गर्ने प्रक्रिया के हो?",
    answer:
      "The registration process comprises four key steps: (1) Applying for name approval and reservation via the OCR online portal; (2) Preparing and signing the Memorandum of Association (Prabandha Patra) and Articles of Association (Niyamawali); (3) Submitting promoter citizenship documents, company charter, and paying the statutory government fee at the Office of the Company Registrar; (4) Post-incorporation registration with the local municipal Ward Office and obtaining a PAN/VAT certificate from the Inland Revenue Office within 30 days.",
    category: "Company Registration",
  },
  {
    question:
      "What is the difference between an Agreement to Sell (Baina Patra) and a registered Land Deed (Rajinama) in Nepal?",
    questionNepali:
      "नेपालमा बैनापट्टा (Baina Patra) र रजिष्ट्रेशन लिखत (Rajinama) बीच के फरक छ?",
    answer:
      "An Agreement to Sell (बैनापट्टा) is an enforceable executory contract setting payment terms and deadlines for land transfer, but it does NOT convey legal title. Legal ownership only passes upon execution and registration of an official Deed of Sale (राजीनामा लिखत) before the Land Revenue Officer (Malpot Adhikrit) and endorsement on the Land Ownership Certificate (लालपुर्जा). Always conduct a Rokka and Sresta verification before paying advance earnest money.",
    category: "Real Estate & Property",
  },
  {
    question:
      "How is cheque bounce prosecuted under Nepal’s Banking Offenses and Punishment Act 2064?",
    questionNepali:
      "बैंकिङ कसूर तथा सजाय ऐन २०६४ अन्तर्गत चेक बाउन्स मुद्दा कसरी चल्छ?",
    answer:
      "When a bank returns a cheque unpaid due to insufficient funds, the holder must secure a bank dishonor slip. The payee can either file a civil recovery suit under the Negotiable Instruments Act 2034 within 5 years or initiate criminal proceedings under the Banking Offenses and Punishment Act 2064 (बैंकिङ कसूर तथा सजाय ऐन २०६४) by lodging a police FIR within the statutory limitation period. Criminal convictions can result in recovery of the cheque amount, an equivalent fine, and imprisonment.",
    category: "Banking & Criminal Law",
  },
  {
    question:
      "What are the statutory grounds for divorce (Bibaha Bichhed) under the Muluki Civil Code 2074?",
    questionNepali:
      "मुलुकी देवानी संहिता २०७४ अनुसार सम्बन्ध विच्छेदका कानूनी आधारहरू के के हुन्?",
    answer:
      "Under Sections 94 and 95 of the Muluki Civil Code 2074, divorce can be initiated either by mutual consent (मञ्जुरीपारी) or on statutory grounds. Spousal grounds include continuous separation for 3 or more consecutive years without consent, physical or severe mental cruelty, adultery, or incurable communicable diseases. Either spouse can file a divorce petition directly in the concerned District Court, where the court first facilitates a mandatory conciliation process.",
    category: "Family Law",
  },
  {
    question:
      "Are digital records, emails, and WhatsApp messages admissible as evidence in Nepalese courts?",
    questionNepali:
      "के डिजिटल प्रमाण, इमेल र ह्वाट्सएप म्यासेज नेपालका अदालतमा प्रमाण लाग्छन्?",
    answer:
      "Yes. Under the Electronic Transactions Act 2063 (विद्युतीय कारोबार ऐन २०६३) and Section 3 of the Evidence Act 2031, electronic records, computer-generated data, email correspondence, and authenticated digital communications are admissible as documentary evidence before Nepalese courts, provided their integrity, transmission chain, and authenticity are substantiated during pleadings.",
    category: "Evidence & Cyber Law",
  },
  {
    question:
      "What is the limitation period (Haddmyad) for filing a civil lawsuit in Nepal?",
    questionNepali:
      "नेपालमा देवानी मुद्दा दायर गर्नका लागि हदम्याद (Limitation) कति हुन्छ?",
    answer:
      "Limitation periods (हदम्याद) vary strictly by cause of action under the Muluki Civil Code 2074: for breach of contract, claims must typically be instituted within 2 years from the date of breach; for partition (अंशबण्डा), claims can be brought within 1 year from the occurrence of dispute; and for recovery of debt on written promissory notes (तमसुक), claims must adhere strictly to statutory ceilings. Missing the statutory limitation permanently bars court remedy.",
    category: "Civil Procedure & Limitations",
  },
  {
    question:
      "How long is a trademark registration valid in Nepal, and what are the renewal terms?",
    questionNepali:
      "नेपालमा ट्रेडमार्क दर्ता कति समयका लागि मान्य हुन्छ र नवीकरण कसरी गरिन्छ?",
    answer:
      "Under the Patent, Design and Trademark Act 2022, a registered trademark remains valid for 7 years from the registration date. It can be renewed indefinitely for successive 7-year terms by applying to the Department of Industry (उद्योग विभाग) within statutory renewal windows along with the prescribed government renewal fees.",
    category: "Intellectual Property",
  },
];

/**
 * Returns JSON-LD FAQPage Schema for the Services Page
 */
export function getServicesFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SERVICES_PAGE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Returns JSON-LD FAQPage Schema for the Resources Page
 */
export function getResourcesFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: RESOURCES_PAGE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
