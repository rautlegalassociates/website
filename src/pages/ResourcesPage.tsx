import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { LegalDisclaimer } from "../components/common/LegalDisclaimer";
import { ConsultationBanner } from "../components/common/ConsultationBanner";
import { ARTICLES } from "../data/articles";
import { RESOURCES_PAGE_FAQS, getResourcesFAQSchema } from "../data/faqs";
import {
  Search,
  ArrowRight,
  BookOpen,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = [
    "All",
    "Corporate Law",
    "Commercial Contracts",
    "Litigation & Courts",
    "Property Law",
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat =
      selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const resourcesStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://rautlegalassociates.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Legal Resources",
          item: "https://rautlegalassociates.com/resources",
        },
      ],
    },
    getResourcesFAQSchema(),
  ];

  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title="Legal Guides & Articles | Raut Legal Associates Nepal"
        description="Read expert legal guides on Nepalese company registration, contract risks, property due diligence, and court litigation under the Muluki Codes."
        canonicalPath="/resources"
        keywords={[
          "legal articles Nepal",
          "company registration Nepal guide",
          "Muluki Civil Code articles",
          "land due diligence Kathmandu",
          "cheque bounce law Nepal",
          "divorce law Nepal",
          "Nepal law insights",
        ]}
        jsonLd={resourcesStructuredData}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Legal Resources" }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-2">
            Legal Articles & Guides · Nepal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#101C2C]">
            Legal Insights & Publications
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
            Educational articles and procedural overviews of Nepalese corporate,
            civil, property, and dispute resolution jurisprudence.
          </p>
        </div>

        {/* Draft Legal Review Banner */}
        <div className="mb-10 p-4 bg-[#EDE8DD] border border-[#C7A56A]/50 rounded-sm flex items-start gap-3 text-xs text-slate-700">
          <AlertTriangle className="w-4 h-4 text-[#B38E51] shrink-0 mt-0.5" />
          <div>
            <strong>Editorial & Statutory Review Notice:</strong> All published
            articles are prepared for educational guidance and represent draft
            overviews subject to ongoing legislative updates under Nepalese law.
            Consult a licensed advocate for individual case assessments.
          </div>
        </div>

        {/* Controls: Search and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EDE8DD]/60 rounded-sm border border-[#E2DBCD]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#101C2C] text-[#F7F5F0] shadow-xs"
                    : "text-slate-700 hover:text-[#101C2C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title or keyword..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-sm text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C7A56A] focus:ring-1 focus:ring-[#C7A56A]"
              />
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-8 flex flex-col justify-between hover:border-[#C7A56A] hover:shadow-md transition-all group"
            >
              <div>
                {/* Clean unboxed metadata with bullet separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="text-[#B38E51] font-semibold">
                    {art.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{art.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-2xl font-bold text-[#101C2C] mb-3 leading-snug group-hover:text-[#B38E51] transition-colors">
                  <Link to={`/resources/${art.slug}`}>{art.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {art.summary}
                </p>

                {/* Key takeaways snippet */}
                <div className="p-3 bg-white border border-slate-200 rounded-sm mb-6 text-xs text-slate-700">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Key Focus:
                  </div>
                  <p className="line-clamp-2 text-slate-600">
                    {art.keyTakeaways[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE8DD] flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  By {art.author}
                </span>
                <Link
                  to={`/resources/${art.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm mb-16">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#101C2C] mb-1">
              No matching articles found
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Try adjusting your search criteria or resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs text-[#B38E51] font-semibold underline"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Section: Common Legal Questions & Statutory FAQs in Nepal (JSON-LD FAQPage backed) */}
        <section className="mb-16 pt-10 border-t border-[#E2DBCD]">
          <div className=" mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B38E51] font-semibold mb-2">
              <HelpCircle className="w-4 h-4 text-[#C7A56A]" />
              <span>
                Statutory & Procedural FAQ · नेपालका प्रचलित कानूनी सवालहरू
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#101C2C]">
              Common Legal Questions in Nepal
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed font-light">
              Authoritative answers to frequently searched statutory questions
              covering company incorporation, property transfer deeds, cheque
              bounce prosecution, divorce grounds, digital evidence, and
              limitation periods.
            </p>
          </div>

          <div className="space-y-4">
            {RESOURCES_PAGE_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2DBCD] rounded-sm transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B38E51] block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#101C2C] leading-snug">
                        {faq.question}
                      </h3>
                      {faq.questionNepali && (
                        <p className="text-xs text-slate-500 font-light mt-1">
                          {faq.questionNepali}
                        </p>
                      )}
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#EDE8DD] flex items-center justify-center shrink-0 mt-0.5 text-[#101C2C] transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#101C2C] text-[#C7A56A]" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-[#FAF8F5]/60">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mb-12">
          <LegalDisclaimer />
        </div>
      </div>

      <ConsultationBanner />
    </div>
  );
};
