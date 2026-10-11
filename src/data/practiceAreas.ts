import { PracticeArea } from "../types";

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corporate-commercial",
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    shortDescription:
      "Company registration, compliance under the Companies Act 2063, shareholder agreements, FDI advisory, and joint ventures in Nepal.",
    overview:
      "Raut Legal Associates provides strategic counsel to entrepreneurs, private limited companies, public corporations, and foreign investors navigating Nepal’s corporate regulatory framework. From incorporation at the Office of the Company Registrar (OCR) to complex shareholder dispute resolution and Department of Industry compliance, we ensure strict legal soundness.",
    iconName: "Building2",
    commonIssues: [
      "Company incorporation & Memorandum/Articles of Association (MOA/AOA) drafting",
      "Foreign Direct Investment (FDI) approvals via Department of Industry / Nepal Rastra Bank",
      "Share transfers, capital expansion, and annual statutory compliance filing",
      "Shareholder agreements, board resolutions, and deadlock resolution",
      "Corporate winding-up, liquidation, and insolvency proceedings",
    ],
    howWeAssist: [
      "Drafting bespoke MOA, AOA, and founder equity agreements",
      "Liaising with the Office of Company Registrar (OCR) and Department of Industry",
      "Structuring commercial transactions with enforceable risk covenants",
      "Providing routine corporate secretarial and regulatory audit checks",
    ],
    processSteps: [
      {
        title: "Initial Corporate Assessment",
        description:
          "Reviewing entity structure, capital thresholds, and business objective requirements.",
      },
      {
        title: "Statutory Drafting",
        description:
          "Formulating tailored MOA, AOA, and founder covenants under Companies Act 2063.",
      },
      {
        title: "Filing & Approvals",
        description:
          "Submitting applications to OCR, Inland Revenue Department (PAN/VAT), and local ward.",
      },
      {
        title: "Ongoing Governance",
        description:
          "Advising on statutory annual general meetings (AGMs), register maintenance, and filings.",
      },
    ],
    documentChecklist: [
      "Citizenship certificates / Passports of all promoters & directors",
      "Proposed company name and registered office ward address",
      "Draft objectives clause and equity shareholding ratio breakdown",
      "Board resolution of any holding promoter company (if corporate shareholder)",
    ],
    faqs: [
      {
        question:
          "How long does it take to register a private limited company in Nepal?",
        answer:
          "With proper documentation, company registration through the Office of Company Registrar generally takes between 3 to 7 working days, followed by ward business registration and PAN/VAT issuance.",
      },
      {
        question: "What is the minimum capital required for FDI in Nepal?",
        answer:
          "Under current regulatory directives, the minimum foreign investment threshold is set by the Department of Industry. We provide case-specific advisory based on latest statutory notifications.",
      },
    ],
  },
  {
    id: "civil-litigation",
    slug: "civil-litigation-dispute-resolution",
    title: "Civil Litigation & Dispute Resolution",
    shortDescription:
      "Representation before Kathmandu District Court, High Court Patan, and Supreme Court under the Muluki Civil Code 2074.",
    overview:
      "Our advocates handle complex civil lawsuits, declaratory title claims, partition lawsuits (angsha mudda), recovery of dues, and injunction applications across all tiers of the Nepalese court system. We combine meticulous case study, evidence curation, and courtroom advocacy.",
    iconName: "Scale",
    commonIssues: [
      "Partition of ancestral property (Angsha Banda)",
      "Recovery of money, promissory notes (Tamsuk), and commercial debts",
      "Declaration of ownership, land easement, and boundary disputes",
      "Breach of contract claims and damages assessment",
      "Interim injunctions (Antarim Aadesh) to safeguard assets pending verdict",
    ],
    howWeAssist: [
      "Evidence analysis and formulation of precise plaints (Firdi-patra)",
      "Filing written statements (Pratiyuttar-patra) and interlocutory motions",
      "Cross-examination and representation during oral arguments (Bahas)",
      "Execution of court decrees (Faisala Karyannawayan)",
    ],
    processSteps: [
      {
        title: "Case Merit Evaluation",
        description:
          "Reviewing deed evidence, limitation periods (Haddmyad), and jurisdictional venue.",
      },
      {
        title: "Plaint & Defense Filing",
        description:
          "Preparing legally sound plaints or counter-statements under Muluki Civil Procedure Code 2074.",
      },
      {
        title: "Hearing & Pleadings",
        description:
          "Advocacy before the Bench across interim relief and final argument stages.",
      },
      {
        title: "Decree Execution",
        description:
          "Enforcing the final judgment through court execution departments.",
      },
    ],
    documentChecklist: [
      "Original or verified copies of contracts, promissory notes, or deeds",
      "Notices exchanged between parties and postal receipts",
      "Citizenship certificate of the plaintiff or defendant",
      "Power of attorney (Warisnama) if represented in absentia",
    ],
    faqs: [
      {
        question:
          "What is the limitation period (Haddmyad) for filing a civil suit?",
        answer:
          "Limitation periods in Nepal vary strictly by claim type under the Muluki Civil Code 2074—ranging from 6 months for certain transactions to several years for land title claims. Timely consultation is critical.",
      },
    ],
  },
  {
    id: "criminal-defense",
    slug: "criminal-law-and-defense",
    title: "Criminal Law & Defense",
    shortDescription:
      "Strategic defense, bail applications, police investigation representation, and appellate advocacy under the Muluki Criminal Code 2074.",
    overview:
      "Raut Legal Associates provides dedicated criminal defense representation, safeguarding constitutional liberties from the initial detention or investigation stage through trial and appellate proceedings. We defend white-collar charges, banking offences, cyber violations, and general criminal complaints with utmost rigor.",
    iconName: "ShieldAlert",
    commonIssues: [
      "Bail hearings (Dharauti/Thuna) before District and High Courts",
      "Banking offence charges under Banking Offence and Punishment Act 2064 (cheque bounce)",
      "Electronic Transactions Act offences (cyber crime & online fraud)",
      "Fraud (Thagi), forgery (Kirte), and property embezzlement",
      "Appeals against conviction and sentence reduction petitions",
    ],
    howWeAssist: [
      "Assistance during police remand and detention questioning",
      "Formulating robust bail applications grounded in statutory criteria",
      "Scrutinizing charge sheets (Abhiyog-patra) and evidentiary forensics",
      "Vigorous trial court defense and High Court/Supreme Court appeals",
    ],
    processSteps: [
      {
        title: "Detention & Remand Phase",
        description:
          "Immediate legal counsel during custody and detention extensions (Mhyad Thap).",
      },
      {
        title: "Bail Arguments",
        description:
          "Submitting evidence demonstrating non-flight risk and merits for release on recognizance/bail.",
      },
      {
        title: "Trial Pleadings",
        description:
          "Challenging prosecution evidence, witness testimony, and procedural infirmities.",
      },
      {
        title: "Appellate Recourse",
        description:
          "Filing appeals within statutory deadlines against adverse rulings.",
      },
    ],
    documentChecklist: [
      "Police FIR (Jaheri Darkhwast) copy or charge sheet (Abhiyog-patra)",
      "Detention orders or court remand slips",
      "Medical reports, financial audit records, or digital correspondence (if applicable)",
      "Guarantor identification documents for bail processing",
    ],
    faqs: [
      {
        question: "How are cheque bounce cases prosecuted in Nepal?",
        answer:
          "Cheque bounce cases can be prosecuted either under the Negotiable Instruments Act 2034 as a civil-recovery matter or under the Banking Offence and Punishment Act 2064 with criminal state prosecution. Our advocates advise on the appropriate legal pathway.",
      },
    ],
  },
  {
    id: "family-law",
    slug: "family-and-matrimonial-law",
    title: "Family & Matrimonial Law",
    shortDescription:
      "Divorce proceedings, child custody, alimony, maintenance, property partition, and court marriage registration under Nepalese civil law.",
    overview:
      "Family disputes require compassionate guidance balanced with decisive legal protection. Our team assists clients with mutual consent and contested divorce, custody arrangements, maintenance rights, court marriages, and adoption in compliance with the Muluki Civil Code 2074.",
    iconName: "Users",
    commonIssues: [
      "Divorce by mutual consent (Manjuripari Sambandha Bichhed)",
      "Contested divorce filings and statutory reconciliation periods",
      "Child custody (Sanrakhyan) and parental visitation rights",
      "Spousal maintenance and alimony determination",
      "Court marriage registration for domestic and foreign nationals",
    ],
    howWeAssist: [
      "Facilitating court-mandated mediation with dignity",
      "Drafting legally binding settlement and property division deeds",
      "Representing spouses in District Court divorce petitions",
      "Assisting international couples with legal marriage certification",
    ],
    processSteps: [
      {
        title: "Consultation & Mediation",
        description:
          "Exploring amicable settlement options or delineating contested grounds.",
      },
      {
        title: "Petition Drafting",
        description: "Filing the petition before the competent District Court.",
      },
      {
        title: "Reconciliation Phase",
        description:
          "Navigating the statutory 1-year contemplation period (where applicable).",
      },
      {
        title: "Final Decree",
        description:
          "Securing the divorce certificate, custody orders, and property settlement.",
      },
    ],
    documentChecklist: [
      "Original marriage registration certificate or wedding evidence",
      "Citizenship certificates of both parties",
      "Children’s birth certificates (if custody/maintenance involved)",
      "Property ownership documents (if partition or maintenance claimed)",
    ],
    faqs: [
      {
        question: "Can a husband directly file for divorce in Nepal?",
        answer:
          "Yes. Under the Muluki Civil Code 2074, both husband and wife have the legal right to file for divorce directly in the District Court on grounds specified by statute.",
      },
    ],
  },
  {
    id: "property-land",
    slug: "property-land-and-real-estate-law",
    title: "Property, Land & Real Estate Law",
    shortDescription:
      "Title search, Land Revenue Office (Malpot) procedures, cadastral map verification, developer contracts, and tenancy disputes.",
    overview:
      "Land transactions and ownership disputes in Kathmandu and across Nepal demand precise scrutiny of historical land records, Guthi status, and municipal approvals. We perform rigorous due diligence, represent parties before Land Revenue Offices (Malpot), and litigate land boundary encroachment and fraudulent transfer cases.",
    iconName: "Home",
    commonIssues: [
      "Title verification and land record search (Sresta/Tiro check at Malpot)",
      "Encroachment of boundaries and cadastral survey (Napi) disputes",
      "Sale deeds, deed of transfer (Rajinama), and mortgage registration (Dhitobhandhak)",
      "Guthi land title conversion and Mohi (tenant farmer) rights",
      "Apartment ownership acts, joint venture agreements, and builder disputes",
    ],
    howWeAssist: [
      "Conducting comprehensive Malpot and Ward due diligence",
      "Drafting bulletproof deeds of sale, lease agreements, and construction pacts",
      "Representing clients in land partition and cancellation of fraudulent sales",
      "Resolving commercial tenancy conflicts and eviction notices",
    ],
    processSteps: [
      {
        title: "Title & Sresta Audit",
        description:
          "Verifying historical chain of ownership and checking for encumbrances (Rokka).",
      },
      {
        title: "Drafting Contracts",
        description:
          "Creating comprehensive deeds specifying payment milestones and possession transfer.",
      },
      {
        title: "Execution at Malpot",
        description:
          "Accompanying parties to the Land Revenue Office for formal deed endorsement.",
      },
      {
        title: "Post-Registration Record",
        description:
          "Ensuring municipal Dakhil Kharej (ownership transfer in tax registry).",
      },
    ],
    documentChecklist: [
      "Lalpurja (Land Ownership Certificate)",
      "Cadastral trace map (Napi naksha) and field book copy",
      "Citizenship certificates of buyers and sellers",
      "Recent property tax clearance receipts from the local ward",
    ],
    faqs: [
      {
        question:
          'What is a "Rokka" check and why is it vital before buying land in Nepal?',
        answer:
          "A Rokka check verifies whether a property has been frozen by a bank, tax authority, or court order. Our due diligence verifies that the title is free and clear before any financial commitment is made.",
      },
    ],
  },
  {
    id: "contract-drafting",
    slug: "contract-drafting-and-review",
    title: "Contract Drafting & Review",
    shortDescription:
      "Commercial agreements, employment contracts, NDAs, MoUs, and partnership deeds designed to withstand legal scrutiny in Nepal.",
    overview:
      "Clear contracts prevent costly litigation. Raut Legal Associates crafts and audits commercial agreements, vendor pacts, non-disclosure agreements, and loan arrangements tailored to Nepalese contract jurisprudence. We ensure every clause is unambiguous, balanced, and fully enforceable in court.",
    iconName: "FileText",
    commonIssues: [
      "Ambiguous dispute resolution clauses and governing law loopholes",
      "Breach of payment terms and unfair indemnity liabilities",
      "Intellectual property ownership ambiguities in vendor agreements",
      "Non-compete and confidentiality clauses under Nepalese law",
      "Termination notice rights and liquidated damage clauses",
    ],
    howWeAssist: [
      "Auditing third-party contracts to flag legal risks before signing",
      "Drafting bilingual (English and Nepali) agreements adhering to Muluki Civil Code",
      "Structuring milestone payment protections and penalty provisions",
      "Negotiating terms directly with opposing legal counsel",
    ],
    processSteps: [
      {
        title: "Deal Terms Review",
        description:
          "Clarifying the commercial understanding, deliverables, and risk tolerance.",
      },
      {
        title: "Drafting Clauses",
        description:
          "Crafting balanced terms, representations, warranties, and jurisdiction clauses.",
      },
      {
        title: "Client Redlining",
        description:
          "Reviewing revisions and advising on high-risk negotiation points.",
      },
      {
        title: "Final Execution",
        description:
          "Guiding formal signature, witness requirements, and stamping protocols.",
      },
    ],
    documentChecklist: [
      "Summary of negotiated terms / Term Sheet",
      "Identity or corporate details of all contracting parties",
      "Technical specifications or schedules of service deliverables",
      "Existing prior agreements or correspondence",
    ],
    faqs: [
      {
        question:
          "Are contracts written in English legally enforceable in Nepalese courts?",
        answer:
          "Yes, commercial contracts drafted in English are valid and enforceable in Nepal, provided they comply with contract formation standards under the Muluki Civil Code 2074. Court pleadings require certified Nepali translations if litigated.",
      },
    ],
  },
  {
    id: "legal-advisory",
    slug: "legal-advisory-and-consultation",
    title: "Legal Advisory & Consultation",
    shortDescription:
      "Initial legal assessments, risk audits, legal opinions, and regulatory guidance for individuals, startups, and institutions.",
    overview:
      "Our legal advisory service provides an accessible, high-value starting point for any legal question. For a structured consultation fee of NPR 500, prospective clients can review documents, understand their statutory standing, and decide upon an informed course of action.",
    iconName: "Briefcase",
    commonIssues: [
      "Deciding whether an issue warrants court litigation or out-of-court settlement",
      "Reviewing official government notices and drafting appropriate responses",
      "Startup legal roadmaps covering incorporation, licensing, and taxation",
      "Estate planning, wills, and deed transfers for families",
      "Second legal opinions on ongoing court cases in Kathmandu",
    ],
    howWeAssist: [
      "Direct one-on-one session with a licensed advocate in Tokha or online",
      "Objective evaluation of risks, statutory remedies, and procedural costs",
      "Reviewing preliminary documents and highlighting legal red flags",
      "Providing actionable recommendations for formal representation",
    ],
    processSteps: [
      {
        title: "Request Appointment",
        description:
          "Book online selecting your preferred time and consultation mode (NPR 500 fee).",
      },
      {
        title: "Document Submission",
        description:
          "Share background facts and relevant notices before the session.",
      },
      {
        title: "Advocate Consultation",
        description:
          "Comprehensive 30–45 minute legal discussion and case analysis.",
      },
      {
        title: "Next Steps Roadmap",
        description:
          "Clear roadmap detailing recommended procedures and next steps.",
      },
    ],
    documentChecklist: [
      "Any notices, letters, or summons received",
      "Relevant contracts or draft agreements",
      "Brief written chronology of facts and key dates",
      "Personal identification",
    ],
    faqs: [
      {
        question: "What does the NPR 500 consultation fee include?",
        answer:
          "The NPR 500 fee covers an initial 30–45 minute consultation with an advocate to review your documents and explain your legal options. It does not include court appearances, drafting formal plaints, or ongoing representation.",
      },
    ],
  },
  {
    id: "banking-finance",
    slug: "banking-and-financial-disputes",
    title: "Banking & Financial Disputes",
    shortDescription:
      "Loan documentation, Debt Recovery Tribunal (DRT) litigation, collateral auction disputes, and NRB compliance advisory.",
    overview:
      "Financial and banking matters demand an intricate understanding of Nepal Rastra Bank (NRB) directives, the Bank and Financial Institutions Act (BAFIA) 2073, and the Debt Recovery Act. We advise borrowers and lenders on debt restructuring, mortgage disputes, and representation before the Debt Recovery Tribunal.",
    iconName: "Landmark",
    commonIssues: [
      "Challenging unlawful 35-day auction notices published in national dailies",
      "Representation before the Debt Recovery Tribunal (Rin Punaruddhar Adhikaran)",
      "Blacklisting (Kalo Suchi) disputes at the Credit Information Bureau (CIB)",
      "Loan consortium agreements and project finance legal audits",
      "Negotiation of debt restructuring and one-time settlement (OTS) packages",
    ],
    howWeAssist: [
      "Injunction petitions against premature or irregular collateral sales",
      "Defending borrowers before the Debt Recovery Tribunal and Appellate Tribunal",
      "Liaising with commercial banks on restructuring and collateral release",
      "Advising on compliance with Nepal Rastra Bank prudential regulations",
    ],
    processSteps: [
      {
        title: "Loan Facility Audit",
        description:
          "Reviewing sanction letters, mortgage deeds, and bank statement of accounts.",
      },
      {
        title: "Notice Response",
        description:
          "Issuing formal legal replies to bank demand letters within statutory notice periods.",
      },
      {
        title: "Tribunal Advocacy",
        description:
          "Submitting defense statements and counter-claims before the Debt Recovery Tribunal.",
      },
      {
        title: "Settlement Formulation",
        description:
          "Drafting legally verified debt workout or collateral redemption pacts.",
      },
    ],
    documentChecklist: [
      "Bank loan sanction letter and mortgage deed (Dhitobhandhak)",
      "Account statements showing interest calculations and penal rates",
      "Auction notice published in newspaper or demand letters",
      "Borrower entity registration and tax clearance",
    ],
    faqs: [
      {
        question:
          "Can a bank auction property without court intervention in Nepal?",
        answer:
          "Under BAFIA and the Mortgage Act, banks can proceed with auction after statutory 35-day public notices if loan covenants are breached. However, irregular procedures or unfair valuations can be challenged before the High Court through writ jurisdiction.",
      },
    ],
  },
  {
    id: "employment-labour",
    slug: "employment-and-labour-law",
    title: "Employment & Labour Law",
    shortDescription:
      "Workplace compliance under Labour Act 2074, Social Security Fund (SSF) rules, termination procedures, and labour court litigation.",
    overview:
      "Balancing corporate agility with Nepal’s worker protection laws is crucial for sustainable enterprise. We assist employers and executives with employment contracts, human resource bylaws (Biniyamawali), retrenchment procedures, Social Security Fund (SSF) integration, and Labour Court representation.",
    iconName: "FileCheck2",
    commonIssues: [
      "Employment contracts and executive service agreements",
      "Drafting internal service rules (Biniyamawali) and Labour Office approval",
      "Lawful termination, misconduct investigations, and disciplinary inquiries",
      "Social Security Fund (SSF) and gratuity compliance obligations",
      "Labour disputes before the Labour Office and Labour Court",
    ],
    howWeAssist: [
      "Structuring HR policies aligned with Labour Act 2074 and Rules 2075",
      "Conducting impartial domestic inquiries to protect against wrongful termination claims",
      "Representing businesses and employees in conciliation proceedings",
      "Managing workforce downsizing and voluntary retirement schemes (VRS)",
    ],
    processSteps: [
      {
        title: "HR Policy Audit",
        description:
          "Benchmarking existing employee handbooks against mandatory statutory requirements.",
      },
      {
        title: "Contract Formulation",
        description:
          "Drafting compliant fixed-term, permanent, and outsourced employment agreements.",
      },
      {
        title: "Disciplinary Advisory",
        description:
          "Guiding show-cause notices and domestic inquiries strictly following due process.",
      },
      {
        title: "Conciliation & Court",
        description:
          "Representing clients at local Labour Offices and the Labour Court.",
      },
    ],
    documentChecklist: [
      "Current employment agreement and appointment letters",
      "Company HR bylaws / Internal service rules",
      "Disciplinary correspondence and written explanations (Spastikaran)",
      "Attendance and payroll documentation",
    ],
    faqs: [
      {
        question:
          "Is enrollment in the Social Security Fund (SSF) mandatory in Nepal?",
        answer:
          "Yes, formal sector enterprises in Nepal are legally obligated to enroll their employees into the Social Security Fund under the Labour Act 2074 and Social Security Act 2074.",
      },
    ],
  },
  {
    id: "intellectual-property",
    slug: "intellectual-property-and-trademark",
    title: "Intellectual Property & Trademarks",
    shortDescription:
      "Trademark registration at Department of Industry, trademark opposition, patent filings, and copyright infringement enforcement.",
    overview:
      "Your brand name, logo, and proprietary innovations represent vital corporate assets. Raut Legal Associates manages trademark applications, conducts prior-art searches, defends against unauthorized brand copying, and files opposition petitions at the Department of Industry (DOI) in Kathmandu.",
    iconName: "ShieldCheck",
    commonIssues: [
      "Trademark search, filing, and registration at the Department of Industry",
      "Filing trademark opposition against confusingly similar brand applications",
      "Counterfeit product enforcement and police coordination",
      "Copyright registration for software, publications, and creative works",
      "IP licensing and brand franchise agreements in Nepal",
    ],
    howWeAssist: [
      "Conducting comprehensive pre-filing trademark availability audits",
      "Drafting and filing trademark applications under Patent, Design and Trademark Act",
      "Formulating opposition statements and arguing before the Director General of DOI",
      "Issuing Cease and Desist notices against infringing competitors",
    ],
    processSteps: [
      {
        title: "Search & Classification",
        description:
          "Checking international Nice Classification classes and conflicting registered marks.",
      },
      {
        title: "Application Submission",
        description:
          "Submitting trademark dossier and specimen labels to Department of Industry.",
      },
      {
        title: "Examination & Gazette",
        description:
          "Responding to office queries and monitoring official IP Gazette publication.",
      },
      {
        title: "Registration Certificate",
        description:
          "Securing the final trademark registration certificate and managing renewals.",
      },
    ],
    documentChecklist: [
      "High-resolution trademark logo/specimen in JPEG format",
      "Company registration certificate and PAN of the applicant company",
      "Specification of goods and services according to Nice Classification",
      "Power of attorney signed by authorized director",
    ],
    faqs: [
      {
        question:
          "How long does a trademark registration remain valid in Nepal?",
        answer:
          "A trademark registration in Nepal remains valid for 7 years from the date of registration and can be renewed indefinitely for consecutive 7-year periods upon payment of statutory renewal fees.",
      },
    ],
  },
  {
    id: "regulatory-administrative",
    slug: "administrative-and-regulatory-matters",
    title: "Administrative & Regulatory Matters",
    shortDescription:
      "Government licensing, municipal permits, tax tribunal disputes, and High Court writ petitions against public authorities.",
    overview:
      "When arbitrary or unlawful decisions by administrative departments, ministries, or local governments impact your rights, legal recourse through administrative tribunals or High Court constitutional writ petitions (Mandamus, Certiorari, Prohibition) becomes essential. We provide decisive administrative advocacy.",
    iconName: "Gavel",
    commonIssues: [
      "Challenging arbitrary license cancellations or regulatory penalties",
      "Filing Writ Petitions (Certiorari, Mandamus) under Constitution of Nepal",
      "Revenue and tax assessment appeals before Revenue Tribunal (Rajaswa Tribunal)",
      "Public procurement bid disputes before Public Procurement Monitoring Office (PPMO)",
      "Local Ward and Municipality building permit / zoning controversies",
    ],
    howWeAssist: [
      "Drafting urgent constitutional writ petitions before High Court or Supreme Court",
      "Representing contractors in public procurement complaints and blacklisting appeals",
      "Appealing arbitrary tax assessments before the Revenue Tribunal",
      "Advising on compliance with specialized sector regulators (NEA, NTA, CAAN)",
    ],
    processSteps: [
      {
        title: "Administrative Order Review",
        description:
          "Examining the legality, jurisdiction, and procedural fairness of the government order.",
      },
      {
        title: "Administrative Remedy",
        description:
          "Exhausting departmental review procedures or issuing statutory demand notices.",
      },
      {
        title: "Writ Formulation",
        description:
          "Drafting constitutional petitions citing fundamental rights violations.",
      },
      {
        title: "Bench Pleading",
        description:
          "Advocating for stay orders (Sthagan Aadesh) and final quashing of administrative orders.",
      },
    ],
    documentChecklist: [
      "Original administrative decision letter, cancellation notice, or tax order",
      "Proof of statutory filings and prior departmental correspondence",
      "Applicant identity and registration certificates",
      "Chronological factual brief",
    ],
    faqs: [
      {
        question: "What is a Writ of Certiorari in Nepal?",
        answer:
          "A Writ of Certiorari (Utprekshan) is filed before the High Court or Supreme Court to quash an unlawful or ultra-vires order passed by a lower court, tribunal, or government authority that acted outside its legal jurisdiction.",
      },
    ],
  },
  {
    id: "adr-mediation",
    slug: "mediation-negotiation-adr",
    title: "Mediation & Alternative Dispute Resolution",
    shortDescription:
      "Commercial arbitration, court-referred mediation, structured negotiation, and out-of-court settlement deeds.",
    overview:
      "Formal court litigation in Nepal can take years. Raut Legal Associates assists corporate and individual clients in resolving high-stakes conflicts efficiently through institutional arbitration under NEPCA (Nepal Council of Arbitration) rules or mediated compromise deeds (Milapatra).",
    iconName: "Handshake",
    commonIssues: [
      "Arbitration proceedings under the Arbitration Act 2055",
      "Court-mandated mediation under Civil Procedure Code",
      "Contractual dispute settlement negotiations before filing formal lawsuits",
      "Drafting legally binding compromise deeds (Milapatra) endorsed by court",
      "Enforcement of domestic and foreign arbitral awards in Nepal",
    ],
    howWeAssist: [
      "Representing parties before sole arbitrators or 3-member arbitral tribunals",
      "Facilitating confidential negotiation sessions between conflicting parties",
      "Drafting clear, non-appealable settlement deeds that formally end disputes",
      "Filing applications for appointment or challenge of arbitrators in court",
    ],
    processSteps: [
      {
        title: "Clause Invocation",
        description:
          "Invoking the contractual arbitration clause and issuing formal notice of dispute.",
      },
      {
        title: "Tribunal Constitution",
        description:
          "Appointing qualified arbitrators or applying to the High Court under Section 7.",
      },
      {
        title: "Pleadings & Hearings",
        description:
          "Submitting Statement of Claim, defense, counterclaims, and oral pleadings.",
      },
      {
        title: "Award & Execution",
        description:
          "Securing the arbitral award and filing for execution through the District Court.",
      },
    ],
    documentChecklist: [
      "Contract containing the arbitration or dispute resolution clause",
      "Formal notice of dispute and proof of dispatch",
      "Summary of financial claims and documentary evidence",
      "Prior mediation correspondence",
    ],
    faqs: [
      {
        question: "Is an arbitral award enforceable in Nepalese courts?",
        answer:
          "Yes. Under the Arbitration Act 2055, an arbitral award has the force of a court decree and can be directly executed through the concerned District Court.",
      },
    ],
  },
];
