"use client";

import { useGT } from "gt-next/client";

export function useTranslatedDestinationNames() {
  const gt = useGT();
  return {
    moon: gt("Moon"),
    mars: gt("Mars"),
    station: gt("Orbital Space Station"),
    asteroid: gt("Asteroid Belt"),
  } as Record<string, string>;
}

export function useTranslatedCabinNames() {
  const gt = useGT();
  return {
    economy: gt("Economy"),
    business: gt("Business"),
    first: gt("First Class"),
    suite: gt("Suite"),
  } as Record<string, string>;
}

export function useTranslatedCabinFeatures() {
  const gt = useGT();
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
