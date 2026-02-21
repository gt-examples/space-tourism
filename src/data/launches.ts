export interface Launch {
  id: string;
  missionName: string;
  destinationId: string;
  launchDate: string;
  cabinAvailability: { economy: number; business: number; first: number; suite: number };
}

export const launches: Launch[] = [
  { id: "l1", missionName: "Artemis Express", destinationId: "moon", launchDate: "2026-04-15T10:00:00Z", cabinAvailability: { economy: 24, business: 12, first: 6, suite: 2 } },
  { id: "l2", missionName: "Olympus Pioneer", destinationId: "mars", launchDate: "2026-05-20T08:00:00Z", cabinAvailability: { economy: 40, business: 16, first: 8, suite: 2 } },
  { id: "l3", missionName: "Horizon Shuttle", destinationId: "station", launchDate: "2026-03-10T14:00:00Z", cabinAvailability: { economy: 30, business: 10, first: 4, suite: 1 } },
  { id: "l4", missionName: "Ceres Voyager", destinationId: "asteroid", launchDate: "2026-06-01T06:00:00Z", cabinAvailability: { economy: 20, business: 8, first: 4, suite: 1 } },
  { id: "l5", missionName: "Luna Serenity", destinationId: "moon", launchDate: "2026-07-22T12:00:00Z", cabinAvailability: { economy: 24, business: 12, first: 6, suite: 2 } },
  { id: "l6", missionName: "Red Horizon", destinationId: "mars", launchDate: "2026-08-18T09:00:00Z", cabinAvailability: { economy: 36, business: 14, first: 6, suite: 2 } },
  { id: "l7", missionName: "Orbital Dawn", destinationId: "station", launchDate: "2026-04-05T16:00:00Z", cabinAvailability: { economy: 28, business: 10, first: 4, suite: 1 } },
  { id: "l8", missionName: "Vesta Pathfinder", destinationId: "asteroid", launchDate: "2026-09-12T07:00:00Z", cabinAvailability: { economy: 18, business: 6, first: 3, suite: 1 } },
  { id: "l9", missionName: "Tycho Express", destinationId: "moon", launchDate: "2026-10-30T11:00:00Z", cabinAvailability: { economy: 20, business: 10, first: 5, suite: 2 } },
  { id: "l10", missionName: "Zenith Station", destinationId: "station", launchDate: "2026-05-15T13:00:00Z", cabinAvailability: { economy: 32, business: 12, first: 4, suite: 1 } },
];
