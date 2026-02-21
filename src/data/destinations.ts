export interface Destination {
  id: string;
  name: string;
  distance: number;
  travelTime: number;
  gravity: number;
  description: string;
  cabinPrices: { economy: number; business: number; first: number; suite: number };
  itinerary: { step: string; description: string; day: number }[];
  cabinFeatures: { economy: string[]; business: string[]; first: string[]; suite: string[] };
  included: string[];
  gradient: string;
}

export const destinations: Destination[] = [
  {
    id: "moon",
    name: "Moon",
    distance: 384400,
    travelTime: 3,
    gravity: 0.16,
    description: "Experience the iconic lunar landscape, walk in the footsteps of pioneers, and witness Earthrise from the Sea of Tranquility.",
    cabinPrices: { economy: 125000, business: 250000, first: 500000, suite: 1000000 },
    itinerary: [
      { step: "Departure", description: "Launch from Spaceport Alpha", day: 1 },
      { step: "Transit", description: "Cruise through cislunar space", day: 2 },
      { step: "Arrival", description: "Lunar orbit insertion and landing", day: 3 },
      { step: "Exploration", description: "Surface excursions and habitat stay", day: 4 },
      { step: "Return", description: "Trans-Earth injection and splashdown", day: 7 },
    ],
    cabinFeatures: {
      economy: ["Standard seat", "Shared viewing port", "Basic meal package", "Carry-on storage"],
      business: ["Reclining pod", "Personal viewing port", "Premium meals", "Extra luggage allowance"],
      first: ["Private cabin", "Panoramic window", "Gourmet dining", "Priority excursions"],
      suite: ["Luxury suite", "Floor-to-ceiling viewport", "Personal chef", "Private EVA session"],
    },
    included: ["Spacesuit rental", "Life support systems", "Medical monitoring", "Communication link to Earth", "Commemorative flight certificate"],
    gradient: "from-gray-400 via-gray-300 to-gray-500",
  },
  {
    id: "mars",
    name: "Mars",
    distance: 225000000,
    travelTime: 180,
    gravity: 0.38,
    description: "Journey to the Red Planet and explore vast canyons, towering volcanoes, and the frontier of human colonization.",
    cabinPrices: { economy: 500000, business: 1200000, first: 2500000, suite: 5000000 },
    itinerary: [
      { step: "Departure", description: "Launch from Spaceport Alpha", day: 1 },
      { step: "Transit", description: "Hohmann transfer orbit cruise", day: 90 },
      { step: "Arrival", description: "Mars orbit insertion and descent", day: 180 },
      { step: "Exploration", description: "Surface habitat and rover tours", day: 181 },
      { step: "Return", description: "Return transfer window departure", day: 360 },
    ],
    cabinFeatures: {
      economy: ["Shared berth", "Common lounge access", "Standard nutrition", "Exercise rotation"],
      business: ["Semi-private berth", "Priority lounge", "Enhanced meals", "Dedicated exercise slot"],
      first: ["Private stateroom", "Observatory access", "Chef-prepared meals", "Personal trainer"],
      suite: ["Grand stateroom", "Private observatory", "Bespoke dining", "Concierge service"],
    },
    included: ["Spacesuit rental", "Radiation shielding", "Medical bay access", "Virtual reality entertainment", "Mars surface rover tour"],
    gradient: "from-red-700 via-orange-600 to-red-800",
  },
  {
    id: "station",
    name: "Orbital Space Station",
    distance: 408,
    travelTime: 1,
    gravity: 0.0,
    description: "Float in microgravity aboard the orbital station, enjoy breathtaking views of Earth, and experience life as an astronaut.",
    cabinPrices: { economy: 50000, business: 120000, first: 250000, suite: 500000 },
    itinerary: [
      { step: "Departure", description: "Launch from Spaceport Alpha", day: 1 },
      { step: "Arrival", description: "Docking with the station", day: 1 },
      { step: "Stay", description: "Microgravity activities and Earth observation", day: 2 },
      { step: "Farewell", description: "Station crew farewell ceremony", day: 5 },
      { step: "Return", description: "Undocking and atmospheric re-entry", day: 5 },
    ],
    cabinFeatures: {
      economy: ["Sleep pod", "Shared cupola access", "Standard provisions", "Group activities"],
      business: ["Private sleep pod", "Scheduled cupola time", "Upgraded meals", "Spacewalk viewing"],
      first: ["Crew quarter", "Priority cupola access", "Gourmet provisions", "Science lab tour"],
      suite: ["Commander suite", "Private cupola session", "Personal chef", "Private spacewalk"],
    },
    included: ["Spacesuit rental", "Zero-g orientation", "Earth observation sessions", "Astronaut training certificate", "Communication link to Earth"],
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
  },
  {
    id: "asteroid",
    name: "Asteroid Belt",
    distance: 478000000,
    travelTime: 270,
    gravity: 0.02,
    description: "Venture into the asteroid belt for the ultimate deep-space expedition. Mine rare minerals and witness the raw beauty of space rocks.",
    cabinPrices: { economy: 800000, business: 1800000, first: 3500000, suite: 7000000 },
    itinerary: [
      { step: "Departure", description: "Launch from Spaceport Alpha", day: 1 },
      { step: "Mars Flyby", description: "Gravity assist past Mars", day: 120 },
      { step: "Arrival", description: "Asteroid belt approach and station", day: 270 },
      { step: "Exploration", description: "Asteroid surface walks and mining demos", day: 271 },
      { step: "Return", description: "Begin long-haul return journey", day: 400 },
    ],
    cabinFeatures: {
      economy: ["Hibernation pod", "Shared recreation", "Nutritional rations", "Exercise schedule"],
      business: ["Enhanced pod", "Private recreation time", "Improved cuisine", "Priority exercise"],
      first: ["Stateroom", "Observation deck pass", "Full-service dining", "Personal schedule"],
      suite: ["Grand suite", "Private observation deck", "Personal steward", "Custom itinerary"],
    },
    included: ["Spacesuit rental", "Deep-space radiation protection", "Asteroid sample collection", "Hibernation support", "Documentary filming rights"],
    gradient: "from-amber-700 via-stone-500 to-amber-800",
  },
];

export function getDestination(id: string): Destination | undefined {
  return destinations.find((d) => d.id === id);
}
