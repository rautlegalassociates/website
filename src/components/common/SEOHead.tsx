import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { MAJOR_DISTRICTS_SERVED } from '../../data/districts';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  districtFocus?: string;
  articleMeta?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    section: string;
  };
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  breadcrumbItems?: Array<{ label: string; path?: string }>;
}

const DEFAULT_KEYWORDS = [
  'law firm Kathmandu',
  'lawyers in Nepal',
  'Raut Legal Associates',
  'advocates in Kathmandu',
  'कानूनी सल्लाह काठमाडौं',
  'नेपालका वकिलहरू',
  'legal counsel Nepal',
  'corporate law Nepal',
  'civil litigation Kathmandu',
  'Tokha law chamber',
  'property dispute Nepal',
  'Supreme Court advocate Nepal',
  'initial consultation fee NPR 500',
  'Muluki Civil Code 2074',
  'Companies Act 2063 Nepal',
  'Kathmandu District Court',
  'High Court Patan',
  'Pokhara lawyers',
  'Chitwan advocates',
  'Butwal legal services',
  'Biratnagar advocates',
  'Birgunj law firm',
];

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  ogType = 'website',
  ogImage = '/og-image.svg',
  ogImageAlt = 'Raut Legal Associates — Official Emblem & Monogram',
  districtFocus,
  articleMeta,
  jsonLd,
  breadcrumbItems,
}) => {
  const location = useLocation();

  // Smart title formatting: ensure concise branded title within 30-60 characters
  let fullTitle = title.trim();
  if (!fullTitle.includes('Raut Legal') && !fullTitle.includes('RLA')) {
    if (fullTitle.length + 24 <= 60) {
      fullTitle = `${fullTitle} | Raut Legal Associates`;
    } else if (fullTitle.length + 12 <= 60) {
      fullTitle = `${fullTitle} | RLA Nepal`;
    } else {
      fullTitle = `${fullTitle.slice(0, 45)}... | RLA`;
    }
  }

  // Ensure description is within optimal 120-160 characters
  let cleanDescription = description.trim();
  if (cleanDescription.length > 165) {
    cleanDescription = `${cleanDescription.slice(0, 160).trim()}...`;
  }

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://rautlegalassociates.com';
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${origin}${currentPath === '/' ? '' : currentPath}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`;

  // Find optional district focus or fallback to Kathmandu chamber
  const focusedDistrict =
    districtFocus
      ? MAJOR_DISTRICTS_SERVED.find(
          (d) =>
            d.id.toLowerCase() === districtFocus.toLowerCase() ||
            d.name.toLowerCase().includes(districtFocus.toLowerCase())
        )
      : null;

  // Build breadcrumb JSON-LD if breadcrumb items provided
  const autoBreadcrumb =
    breadcrumbItems && breadcrumbItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${origin}/`,
            },
            ...breadcrumbItems.map((item, idx) => ({
              '@type': 'ListItem',
              position: idx + 2,
              name: item.label,
              item: item.path ? `${origin}${item.path}` : canonicalUrl,
            })),
          ],
        }
      : null;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={cleanDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={articleMeta?.author || 'Raut Legal Associates'} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="language" content="English, Nepali" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Primary Regional Nepal Geo-targeting Tags */}
      <meta
        name="geo.region"
        content={focusedDistrict ? focusedDistrict.isoRegion : 'NP-BA'}
      />
      <meta
        name="geo.placename"
        content={
          focusedDistrict
            ? `${focusedDistrict.name}, ${focusedDistrict.headquarters}`
            : 'Kathmandu, Tokha'
        }
      />
      <meta
        name="geo.position"
        content={
          focusedDistrict
            ? `${focusedDistrict.coordinates.latitude};${focusedDistrict.coordinates.longitude}`
            : '27.7511;85.3262'
        }
      />
      <meta
        name="ICBM"
        content={
          focusedDistrict
            ? `${focusedDistrict.coordinates.latitude}, ${focusedDistrict.coordinates.longitude}`
            : '27.7511, 85.3262'
        }
      />

      {/* Individual Location-Based Meta Tags for Major Districts Served in Nepal */}
      <meta
        name="district:kathmandu"
        content="Kathmandu District, Bagmati Province (NP-BA) - Lat: 27.7172, Lon: 85.3240 - Supreme Court & Kathmandu District Court"
      />
      <meta
        name="district:lalitpur"
        content="Lalitpur District, Bagmati Province (NP-BA) - Lat: 27.6644, Lon: 85.3188 - High Court Patan & Lalitpur District Court"
      />
      <meta
        name="district:bhaktapur"
        content="Bhaktapur District, Bagmati Province (NP-BA) - Lat: 27.6710, Lon: 85.4298 - Bhaktapur District Court"
      />
      <meta
        name="district:kaski"
        content="Kaski District (Pokhara), Gandaki Province (NP-GA) - Lat: 28.2096, Lon: 83.9856 - High Court Pokhara & Kaski District Court"
      />
      <meta
        name="district:chitwan"
        content="Chitwan District (Bharatpur), Bagmati Province (NP-BA) - Lat: 27.6833, Lon: 84.4333 - Chitwan District Court"
      />
      <meta
        name="district:rupandehi"
        content="Rupandehi District (Butwal / Bhairahawa), Lumbini Province (NP-LU) - Lat: 27.5042, Lon: 83.4542 - High Court Tulsipur Butwal Bench & Rupandehi District Court"
      />
      <meta
        name="district:morang"
        content="Morang District (Biratnagar), Koshi Province (NP-KO) - Lat: 26.4525, Lon: 87.2718 - High Court Biratnagar & Morang District Court"
      />
      <meta
        name="district:parsa"
        content="Parsa District (Birgunj), Madhesh Province (NP-MA) - Lat: 27.0104, Lon: 84.8774 - High Court Janakpur Birgunj Bench & Parsa District Court"
      />
      <meta
        name="district:kavre"
        content="Kavrepalanchok District (Dhulikhel / Banepa), Bagmati Province (NP-BA) - Lat: 27.6253, Lon: 85.5561 - Kavrepalanchok District Court"
      />
      <meta
        name="district:dhanusha"
        content="Dhanusha District (Janakpurdham), Madhesh Province (NP-MA) - Lat: 26.7288, Lon: 85.9244 - High Court Janakpur & Dhanusha District Court"
      />

      {/* Aggregate Regional & National Jurisdiction Meta Tags */}
      <meta
        name="nepal:districts_served"
        content="Kathmandu, Lalitpur, Bhaktapur, Kaski (Pokhara), Chitwan (Bharatpur), Rupandehi (Butwal), Morang (Biratnagar), Parsa (Birgunj), Kavrepalanchok (Dhulikhel), Dhanusha (Janakpur)"
      />
      <meta
        name="nepal:districts_served:ne"
        content="काठमाडौं, ललितपुर, भक्तपुर, कास्की (पोखरा), चितवन (भरतपुर), रूपन्देही (बुटवल), मोरङ (विराटनगर), पर्सा (वीरगञ्ज), काभ्रेपलाञ्चोक (धुलिखेल), धनुषा (जनकपुरधाम)"
      />
      <meta
        name="nepal:courts"
        content="Supreme Court of Nepal, High Court Patan, High Court Pokhara, High Court Biratnagar, High Court Janakpur, High Court Tulsipur Butwal Bench, Kathmandu District Court, Lalitpur District Court, Bhaktapur District Court, Debt Recovery Tribunal, Labor Court, Revenue Tribunal"
      />
      <meta
        name="jurisdiction"
        content="Nepal nationwide; Supreme Court, High Courts, District Courts, Debt Recovery Tribunal, Labor Court, Special Court, Revenue Tribunal"
      />
      <meta
        name="coverage"
        content="Kathmandu Valley & Major Commercial Districts across Nepal (National Jurisdiction)"
      />
      <meta name="target_country" content="NP" />
      <meta name="geo.country" content="Nepal" />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={cleanDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Raut Legal Associates" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ne_NP" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rautlegal" />
      <meta name="twitter:creator" content="@rautlegal" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={cleanDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Optional Article Metadata */}
      {articleMeta && (
        <>
          <meta property="article:published_time" content={articleMeta.publishedTime} />
          <meta property="article:modified_time" content={articleMeta.modifiedTime} />
          <meta property="article:author" content={articleMeta.author} />
          <meta property="article:section" content={articleMeta.section} />
        </>
      )}

      {/* Auto Breadcrumb Schema */}
      {autoBreadcrumb && (
        <script type="application/ld+json">{JSON.stringify(autoBreadcrumb)}</script>
      )}

      {/* Dynamic JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
