# Raut Legal Associates — Law Firm Website

A production-grade, responsive website for **Raut Legal Associates**, an established legal counsel and advocacy practice based in Basundhara-5, Tokha, Kathmandu, Nepal.

## 1. Firm Details & Positioning
- **Firm Name**: Raut Legal Associates
- **Primary Phone**: `+977 9706410516` (Clickable `tel:+9779706410516`)
- **Chamber Address**: Basundhara-5, Tokha, Kathmandu, Nepal
- **Initial Consultation Fee**: `NPR 500` per matter evaluation (30–45 min)
- **Jurisdiction**: Nepal (District Courts, High Court Patan, Supreme Court of Nepal, and Specialized Tribunals)
- **Advocate Team**:
  - Adv. Sahil Raut Gaddi
  - Adv. Avishek Raut
  - Adv. Bishwanath Das

---

## 2. Technology Stack
- **Framework**: React 19 with Vite & TypeScript (Strict Type Checking)
- **Styling**: Tailwind CSS v4 with bespoke editorial theme tokens
- **Routing**: React Router v7 (`react-router-dom`)
- **SEO & Metadata**: `react-helmet-async` for route-level dynamic head & OpenGraph management
- **State Management**: Redux Toolkit & RTK Query with `fetchBaseQuery`
- **Form Validation**: React Hook Form with Zod schemas
- **Icons**: Lucide React
- **Typography**: Cormorant Garamond (Editorial serif) & Plus Jakarta Sans (Body sans-serif)

---

## 3. Brand Identity & Visual System
- **RLA Serif Monogram**: Bespoke minimalist Roman serif interlocking RLA crest with dual hairline circular frames and scales of justice axis.
- **Deep Navy**: `#101C2C` (Canvas & authoritative structures)
- **Midnight Blue**: `#17283F` (Structural accents and hero gradients)
- **Antique Gold**: `#C7A56A` (Refined highlights, CTA buttons, and emblems)
- **Warm Ivory**: `#F7F5F0` (Editorial body background)
- **Charcoal**: `#24282D` (Primary typography)
- **Muted Gray**: `#737780` (Secondary metadata)

---

## 4. Website Route Structure
- `/` — Homepage (Hero, Chamber intro, 12 Practice Areas, Why Choose Us, Legal Team, Consultation Process, NPR 500 Fee Banner, Client Commitment, Legal Insights, Contact CTA)
- `/about` — About the Firm (Firm profile, Mission & Vision, Problem-solving approach, Team introduction)
- `/services` — All 12 Practice Areas with dynamic search & filtering
- `/services/:slug` — Individual Service Detail with procedural roadmap, document checklists, FAQs, and booking CTA
- `/team` — Advocate & Legal Team overview
- `/team/:slug` — Detailed Advocate Profile with practice focus, qualifications, bar registration placeholder, and booking CTA
- `/appointments` — Dedicated Online Appointment Booking System (React Hook Form + Zod, NPR 500 fee notice, Nepalese phone validation, pending confirmation status)
- `/resources` — Legal Resources & Articles with search and category filters
- `/resources/:slug` — Article Detail with statutory takeaways and draft review notices
- `/contact` — Contact page with verified address, office hours, and contact form
- `/privacy-policy` — Privacy Policy & Professional Privilege Notice
- `/terms` — Terms of Use & Consultation Framework
- `*` — Custom 404 Page

---

## 5. RTK Query API Contract & Demo Mode

The application is structured to connect seamlessly to any REST backend or run in an isolated client demo mode.

### API Base Configuration:
- Base URL is read from `VITE_API_BASE_URL` (in `.env`).
- If `VITE_API_BASE_URL` is empty or not provided, the application runs in a clearly identified **Demo Mode** with realistic latency (~700ms), Zod client validation, and local session persistence for the client's own submitted appointment.

### Endpoints:
1. **`POST /appointments`**
   - **Request Payload**:
     ```json
     {
       "fullName": "Sita Sharma",
       "phone": "+977 9841234567",
       "email": "sita@example.com",
       "serviceCategory": "Corporate & Commercial Law",
       "preferredDate": "2026-10-20",
       "preferredTime": "11:30 AM",
       "consultationMode": "in-person",
       "notes": "Discussion regarding private limited company registration and share allocation.",
       "agreedToPrivacy": true,
       "feeAmount": 500
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "referenceCode": "RLA-2026-4819",
       "message": "Appointment request received. Pending advocate review and confirmation.",
       "appointment": { ... }
     }
     ```

2. **`GET /appointments/:id`**
   - Retrieves the status of the user's specific appointment reference. Public enumeration of other clients' cases is prohibited.

3. **`POST /contact`**
   - Submits a general inquiry message with confirmation feedback.

---

## 6. Installation & Development

```bash
# Install dependencies
npm install

# Run development server (runs on port 3000)
npm run dev

# Run TypeScript linting check
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 7. Legal Disclaimer & Ethical Compliance
In compliance with legal ethics in Nepal, all content on this website is for informational guidance only and does not establish an advocate-client relationship. Unverifiable lawyer qualifications or fabricated client reviews have been omitted in favor of genuine commitments and editable placeholders.
