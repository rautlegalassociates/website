export interface DistrictCoverage {
  id: string;
  name: string;
  nepaliName: string;
  province: string;
  isoRegion: string;
  headquarters: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  primaryCourts: string[];
  coverageDetails: string;
}

export const MAJOR_DISTRICTS_SERVED: DistrictCoverage[] = [
  {
    id: "kathmandu",
    name: "Kathmandu District",
    nepaliName: "काठमाडौं जिल्ला",
    province: "Bagmati Province",
    isoRegion: "NP-BA",
    headquarters: "Kathmandu / Babarmahal",
    coordinates: {
      latitude: 27.7172,
      longitude: 85.324,
    },
    primaryCourts: [
      "Supreme Court of Nepal (सर्वोच्च अदालत)",
      "Kathmandu District Court (काठमाडौं जिल्ला अदालत, बबरमहल)",
      "Debt Recovery Tribunal (ऋण पुनरुद्धार न्यायाधीकरण)",
      "Special Court (विशेष अदालत)",
      "Labor Court (श्रम अदालत)",
      "Revenue Tribunal (राजस्व न्यायाधीकरण)",
    ],
    coverageDetails:
      "Chamber headquarters in Basundhara-5, Tokha. Full-spectrum corporate, civil, criminal defense, property, and writ litigation across Kathmandu Valley.",
  },
  {
    id: "lalitpur",
    name: "Lalitpur District",
    nepaliName: "ललितपुर जिल्ला",
    province: "Bagmati Province",
    isoRegion: "NP-BA",
    headquarters: "Patan",
    coordinates: {
      latitude: 27.6644,
      longitude: 85.3188,
    },
    primaryCourts: [
      "High Court Patan (उच्च अदालत पाटन)",
      "Lalitpur District Court (ललितपुर जिल्ला अदालत)",
    ],
    coverageDetails:
      "High Court Patan appellate pleadings, commercial arbitration, corporate compliance, and Lalitpur District Court civil and matrimonial litigation.",
  },
  {
    id: "bhaktapur",
    name: "Bhaktapur District",
    nepaliName: "भक्तपुर जिल्ला",
    province: "Bagmati Province",
    isoRegion: "NP-BA",
    headquarters: "Bhaktapur",
    coordinates: {
      latitude: 27.671,
      longitude: 85.4298,
    },
    primaryCourts: ["Bhaktapur District Court (भक्तपुर जिल्ला अदालत)"],
    coverageDetails:
      "Land title verification, ancestral partition, real estate due diligence at Malpot, and civil contract enforcement in Bhaktapur.",
  },
  {
    id: "kaski",
    name: "Kaski District (Pokhara)",
    nepaliName: "कास्की जिल्ला (पोखरा)",
    province: "Gandaki Province",
    isoRegion: "NP-GA",
    headquarters: "Pokhara",
    coordinates: {
      latitude: 28.2096,
      longitude: 83.9856,
    },
    primaryCourts: [
      "High Court Pokhara (उच्च अदालत पोखरा)",
      "Kaski District Court (कास्की जिल्ला अदालत)",
    ],
    coverageDetails:
      "Hospitality and tourism enterprise advisory, foreign investment (FDI) approvals, land transactions, and High Court Pokhara appellate advocacy.",
  },
  {
    id: "chitwan",
    name: "Chitwan District (Bharatpur)",
    nepaliName: "चितवन जिल्ला (भरतपुर)",
    province: "Bagmati Province",
    isoRegion: "NP-BA",
    headquarters: "Bharatpur",
    coordinates: {
      latitude: 27.6833,
      longitude: 84.4333,
    },
    primaryCourts: ["Chitwan District Court (चितवन जिल्ला अदालत)"],
    coverageDetails:
      "Commercial agro-industrial contracts, land revenue and parcel dispute resolution, medical enterprise advisory, and civil claims in Bharatpur.",
  },
  {
    id: "rupandehi",
    name: "Rupandehi District (Butwal / Bhairahawa)",
    nepaliName: "रुपन्देही जिल्ला (बुटवल / भैरहवा)",
    province: "Lumbini Province",
    isoRegion: "NP-LU",
    headquarters: "Siddharthanagar (Bhairahawa)",
    coordinates: {
      latitude: 27.5042,
      longitude: 83.4542,
    },
    primaryCourts: [
      "High Court Tulsipur - Butwal Bench (उच्च अदालत तुलसीपुर - बुटवल इजलास)",
      "Rupandehi District Court (रुपन्देही जिल्ला अदालत)",
    ],
    coverageDetails:
      "Cross-border customs and trade regulations, industrial corridor contract drafting, banking disputes, and High Court Butwal Bench proceedings.",
  },
  {
    id: "morang",
    name: "Morang District (Biratnagar)",
    nepaliName: "मोरङ जिल्ला (विराटनगर)",
    province: "Koshi Province",
    isoRegion: "NP-KO",
    headquarters: "Biratnagar",
    coordinates: {
      latitude: 26.4525,
      longitude: 87.2718,
    },
    primaryCourts: [
      "High Court Biratnagar (उच्च अदालत विराटनगर)",
      "Morang District Court (मोरङ जिल्ला अदालत)",
    ],
    coverageDetails:
      "Eastern industrial zone manufacturing compliance, labor disputes, commercial contract recovery, and High Court Biratnagar representation.",
  },
  {
    id: "parsa",
    name: "Parsa District (Birgunj)",
    nepaliName: "पर्सा जिल्ला (वीरगञ्ज)",
    province: "Madhesh Province",
    isoRegion: "NP-MA",
    headquarters: "Birgunj",
    coordinates: {
      latitude: 27.0104,
      longitude: 84.8774,
    },
    primaryCourts: [
      "High Court Janakpur - Birgunj Bench (उच्च अदालत जनकपुर - वीरगञ्ज इजलास)",
      "Parsa District Court (पर्सा जिल्ला अदालत)",
    ],
    coverageDetails:
      "Import-export customs compliance, dry port logistics dispute resolution, corporate cross-border debt recovery, and Birgunj commercial bench litigation.",
  },
  {
    id: "kavre",
    name: "Kavrepalanchok District (Dhulikhel / Banepa)",
    nepaliName: "काभ्रेपलाञ्चोक जिल्ला (धुलिखेल / बनेपा)",
    province: "Bagmati Province",
    isoRegion: "NP-BA",
    headquarters: "Dhulikhel",
    coordinates: {
      latitude: 27.6253,
      longitude: 85.5561,
    },
    primaryCourts: [
      "Kavrepalanchok District Court (काभ्रेपलाञ्चोक जिल्ला अदालत)",
    ],
    coverageDetails:
      "Highway corridor real estate transactions, institutional university / health contracts, and civil partition suits in Kavre.",
  },
  {
    id: "dhanusha",
    name: "Dhanusha District (Janakpurdham)",
    nepaliName: "धनुषा जिल्ला (जनकपुरधाम)",
    province: "Madhesh Province",
    isoRegion: "NP-MA",
    headquarters: "Janakpurdham",
    coordinates: {
      latitude: 26.7288,
      longitude: 85.9244,
    },
    primaryCourts: [
      "High Court Janakpur (उच्च अदालत जनकपुर)",
      "Dhanusha District Court (धनुषा जिल्ला अदालत)",
    ],
    coverageDetails:
      "Provincial administrative disputes, High Court Janakpur writ petitions, Guthi and trust land title disputes, and civil litigation.",
  },
];

/**
 * Generates Schema.org areaServed entities for all major districts
 */
export function getDistrictsAreaServedSchema() {
  return [
    {
      "@type": "Country",
      name: "Nepal",
      alternateName: "नेपाल",
    },
    ...MAJOR_DISTRICTS_SERVED.map((d) => ({
      "@type": "AdministrativeArea",
      name: d.name,
      alternateName: d.nepaliName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: d.province,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: d.coordinates.latitude,
        longitude: d.coordinates.longitude,
      },
    })),
  ];
}
