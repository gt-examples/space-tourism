import { getGT } from "gt-next/server";

export async function getTranslatedDestinationNames() {
  const gt = await getGT();
  return {
    moon: gt("Moon"),
    mars: gt("Mars"),
    station: gt("Orbital Space Station"),
    asteroid: gt("Asteroid Belt"),
  } as Record<string, string>;
}

export async function getTranslatedDestinationDescriptions() {
  const gt = await getGT();
  return {
    moon: gt("Experience the iconic lunar landscape, walk in the footsteps of pioneers, and witness Earthrise from the Sea of Tranquility."),
    mars: gt("Journey to the Red Planet and explore vast canyons, towering volcanoes, and the frontier of human colonization."),
    station: gt("Float in microgravity aboard the orbital station, enjoy breathtaking views of Earth, and experience life as an astronaut."),
    asteroid: gt("Venture into the asteroid belt for the ultimate deep-space expedition. Mine rare minerals and witness the raw beauty of space rocks."),
  } as Record<string, string>;
}

export async function getTranslatedItinerarySteps() {
  const gt = await getGT();
  return {
    "Departure": gt("Departure"),
    "Transit": gt("Transit"),
    "Arrival": gt("Arrival"),
    "Exploration": gt("Exploration"),
    "Return": gt("Return"),
    "Stay": gt("Stay"),
    "Farewell": gt("Farewell"),
    "Mars Flyby": gt("Mars Flyby"),
  } as Record<string, string>;
}

export async function getTranslatedItineraryDescriptions() {
  const gt = await getGT();
  return {
    "Launch from Spaceport Alpha": gt("Launch from Spaceport Alpha"),
    "Cruise through cislunar space": gt("Cruise through cislunar space"),
    "Lunar orbit insertion and landing": gt("Lunar orbit insertion and landing"),
    "Surface excursions and habitat stay": gt("Surface excursions and habitat stay"),
    "Trans-Earth injection and splashdown": gt("Trans-Earth injection and splashdown"),
    "Hohmann transfer orbit cruise": gt("Hohmann transfer orbit cruise"),
    "Mars orbit insertion and descent": gt("Mars orbit insertion and descent"),
    "Surface habitat and rover tours": gt("Surface habitat and rover tours"),
    "Return transfer window departure": gt("Return transfer window departure"),
    "Docking with the station": gt("Docking with the station"),
    "Microgravity activities and Earth observation": gt("Microgravity activities and Earth observation"),
    "Station crew farewell ceremony": gt("Station crew farewell ceremony"),
    "Undocking and atmospheric re-entry": gt("Undocking and atmospheric re-entry"),
    "Gravity assist past Mars": gt("Gravity assist past Mars"),
    "Asteroid belt approach and station": gt("Asteroid belt approach and station"),
    "Asteroid surface walks and mining demos": gt("Asteroid surface walks and mining demos"),
    "Begin long-haul return journey": gt("Begin long-haul return journey"),
  } as Record<string, string>;
}

export async function getTranslatedCabinNames() {
  const gt = await getGT();
  return {
    economy: gt("Economy"),
    business: gt("Business"),
    first: gt("First Class"),
    suite: gt("Suite"),
  } as Record<string, string>;
}

export async function getTranslatedCabinFeatures() {
  const gt = await getGT();
  return {
    "Standard seat": gt("Standard seat"),
    "Shared viewing port": gt("Shared viewing port"),
    "Basic meal package": gt("Basic meal package"),
    "Carry-on storage": gt("Carry-on storage"),
    "Reclining pod": gt("Reclining pod"),
    "Personal viewing port": gt("Personal viewing port"),
    "Premium meals": gt("Premium meals"),
    "Extra luggage allowance": gt("Extra luggage allowance"),
    "Private cabin": gt("Private cabin"),
    "Panoramic window": gt("Panoramic window"),
    "Gourmet dining": gt("Gourmet dining"),
    "Priority excursions": gt("Priority excursions"),
    "Luxury suite": gt("Luxury suite"),
    "Floor-to-ceiling viewport": gt("Floor-to-ceiling viewport"),
    "Personal chef": gt("Personal chef"),
    "Private EVA session": gt("Private EVA session"),
    "Shared berth": gt("Shared berth"),
    "Common lounge access": gt("Common lounge access"),
    "Standard nutrition": gt("Standard nutrition"),
    "Exercise rotation": gt("Exercise rotation"),
    "Semi-private berth": gt("Semi-private berth"),
    "Priority lounge": gt("Priority lounge"),
    "Enhanced meals": gt("Enhanced meals"),
    "Dedicated exercise slot": gt("Dedicated exercise slot"),
    "Private stateroom": gt("Private stateroom"),
    "Observatory access": gt("Observatory access"),
    "Chef-prepared meals": gt("Chef-prepared meals"),
    "Personal trainer": gt("Personal trainer"),
    "Grand stateroom": gt("Grand stateroom"),
    "Private observatory": gt("Private observatory"),
    "Bespoke dining": gt("Bespoke dining"),
    "Concierge service": gt("Concierge service"),
    "Sleep pod": gt("Sleep pod"),
    "Shared cupola access": gt("Shared cupola access"),
    "Standard provisions": gt("Standard provisions"),
    "Group activities": gt("Group activities"),
    "Private sleep pod": gt("Private sleep pod"),
    "Scheduled cupola time": gt("Scheduled cupola time"),
    "Upgraded meals": gt("Upgraded meals"),
    "Spacewalk viewing": gt("Spacewalk viewing"),
    "Crew quarter": gt("Crew quarter"),
    "Priority cupola access": gt("Priority cupola access"),
    "Gourmet provisions": gt("Gourmet provisions"),
    "Science lab tour": gt("Science lab tour"),
    "Commander suite": gt("Commander suite"),
    "Private cupola session": gt("Private cupola session"),
    "Private spacewalk": gt("Private spacewalk"),
    "Hibernation pod": gt("Hibernation pod"),
    "Shared recreation": gt("Shared recreation"),
    "Nutritional rations": gt("Nutritional rations"),
    "Exercise schedule": gt("Exercise schedule"),
    "Enhanced pod": gt("Enhanced pod"),
    "Private recreation time": gt("Private recreation time"),
    "Improved cuisine": gt("Improved cuisine"),
    "Priority exercise": gt("Priority exercise"),
    "Stateroom": gt("Stateroom"),
    "Observation deck pass": gt("Observation deck pass"),
    "Full-service dining": gt("Full-service dining"),
    "Personal schedule": gt("Personal schedule"),
    "Grand suite": gt("Grand suite"),
    "Private observation deck": gt("Private observation deck"),
    "Personal steward": gt("Personal steward"),
    "Custom itinerary": gt("Custom itinerary"),
  } as Record<string, string>;
}

export async function getTranslatedIncludedItems() {
  const gt = await getGT();
  return {
    "Spacesuit rental": gt("Spacesuit rental"),
    "Life support systems": gt("Life support systems"),
    "Medical monitoring": gt("Medical monitoring"),
    "Communication link to Earth": gt("Communication link to Earth"),
    "Commemorative flight certificate": gt("Commemorative flight certificate"),
    "Radiation shielding": gt("Radiation shielding"),
    "Medical bay access": gt("Medical bay access"),
    "Virtual reality entertainment": gt("Virtual reality entertainment"),
    "Mars surface rover tour": gt("Mars surface rover tour"),
    "Zero-g orientation": gt("Zero-g orientation"),
    "Earth observation sessions": gt("Earth observation sessions"),
    "Astronaut training certificate": gt("Astronaut training certificate"),
    "Deep-space radiation protection": gt("Deep-space radiation protection"),
    "Asteroid sample collection": gt("Asteroid sample collection"),
    "Hibernation support": gt("Hibernation support"),
    "Documentary filming rights": gt("Documentary filming rights"),
  } as Record<string, string>;
}
