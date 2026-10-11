import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LegalDisclaimer } from '../components/common/LegalDisclaimer';
import { ARTICLES } from '../data/articles';
import { FIRM_DETAILS } from '../data/firm';
import { Clock, Calendar, User, AlertTriangle, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const ResourceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  // Related articles
  const relatedArticles = ARTICLES.filter(
    (a) => a.id !== article.id && (article.relatedSlugs?.includes(a.slug) || a.category === article.category)
  ).slice(0, 2);

  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title={`${article.title} | Raut Legal Associates`}
        description={article.summary}
        canonicalPath={`/resources/${article.slug}`}
        ogType="article"
        articleMeta={{
          publishedTime: article.publishedDate,
          modifiedTime: article.updatedDate,
          author: article.author,
          section: article.category,
        }}
        keywords={[
          article.title.toLowerCase(),
          article.category.toLowerCase(),
          'Nepal law guide',
          'legal analysis Kathmandu',
          'Raut Legal Associates'
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              'headline': article.title,
              'description': article.summary,
              'author': {
                '@type': 'Organization',
                'name': article.author,
                'url': 'https://rautlegalassociates.com/'
              },
              'publisher': {
                '@type': 'LegalService',
                'name': 'Raut Legal Associates',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://rautlegalassociates.com/og-image.svg'
                }
              },
              'datePublished': article.publishedDate,
              'dateModified': article.updatedDate,
              'mainEntityOfPage': `https://rautlegalassociates.com/resources/${article.slug}`
            },
            {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://rautlegalassociates.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Legal Resources', 'item': 'https://rautlegalassociates.com/resources' },
                { '@type': 'ListItem', 'position': 3, 'name': article.title, 'item': `https://rautlegalassociates.com/resources/${article.slug}` }
              ]
            }
          ]
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Legal Resources', path: '/resources' },
            { label: article.title },
          ]}
        />

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-[#E2DBCD]">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
            <span className="text-[#B38E51] font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>Published {article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {article.updatedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-semibold text-[#101C2C] leading-tight text-balance mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
            {article.summary}
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
            <User className="w-4 h-4 text-[#C7A56A]" />
            <span>Authored by: <strong className="text-slate-800">{article.author}</strong></span>
          </div>
        </header>

        {/* Draft Notice */}
        {article.isDraftReviewRequired && (
          <div className="mb-10 p-4 bg-[#EDE8DD] border border-[#C7A56A]/50 rounded-sm flex items-start gap-3 text-xs text-slate-700">
            <AlertTriangle className="w-4 h-4 text-[#B38E51] shrink-0 mt-0.5" />
            <div>
              <strong>Editorial Notice:</strong> This article is an educational summary intended to guide readers on statutory principles in Nepal. It is undergoing periodic review and should not be construed as individualized legal counsel.
            </div>
          </div>
        )}

        {/* Key Takeaways Box */}
        <div className="mb-12 p-6 sm:p-8 bg-[#FAF8F5] border border-[#C7A56A]/40 rounded-sm">
          <h2 className="font-serif text-xl font-bold text-[#101C2C] mb-4">
            Key Statutory Takeaways
          </h2>
          <ul className="space-y-3">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        <article className="prose prose-slate max-w-none space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed">
          {article.content.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-[#101C2C] pt-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>

        {/* In-Article Consultation CTA */}
        <div className="my-14 p-8 bg-[#101C2C] text-white rounded-sm border border-[#C7A56A]/40 shadow-sm">
          <span className="text-xs uppercase tracking-widest text-[#C7A56A] font-semibold block mb-2">
            Professional Advice · Kathmandu, Nepal
          </span>
          <h3 className="font-serif text-2xl font-bold text-white mb-3">
            Have Questions Regarding This Legal Topic?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mb-6">
            Book an initial consultation (NPR {FIRM_DETAILS.consultationFeeNPR}) with our legal team to review your relevant deeds, contracts, or notices.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/appointments"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#C7A56A] text-[#101C2C] hover:bg-[#D8B983] transition-colors rounded-sm inline-flex items-center gap-2"
            >
              <span>Schedule Consultation (NPR 500)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`tel:${FIRM_DETAILS.phone}`}
              className="px-6 py-3 text-xs font-medium border border-slate-700 text-slate-300 hover:text-white rounded-sm"
            >
              Call {FIRM_DETAILS.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="pt-12 border-t border-[#E2DBCD]">
            <h3 className="font-serif text-2xl font-bold text-[#101C2C] mb-6">
              Related Legal Publications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="p-6 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm hover:border-[#C7A56A] transition-colors"
                >
                  <span className="text-[11px] text-[#B38E51] font-semibold block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#101C2C] mb-2 leading-snug">
                    <Link to={`/resources/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {rel.summary}
                  </p>
                  <Link
                    to={`/resources/${rel.slug}`}
                    className="text-xs font-semibold text-[#101C2C] hover:text-[#B38E51] inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 text-[#C7A56A]" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legal Disclaimer */}
        <div className="mt-12">
          <LegalDisclaimer />
        </div>
      </div>
    </div>
  );
};
