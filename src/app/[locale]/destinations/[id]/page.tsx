import { notFound } from "next/navigation";
import Link from "next/link";
import { T, Num, Currency, DateTime } from "gt-next";
import { getDestination } from "@/data/destinations";
import { launches } from "@/data/launches";
import {
  getTranslatedDestinationNames,
  getTranslatedDestinationDescriptions,
  getTranslatedItinerarySteps,
  getTranslatedItineraryDescriptions,
  getTranslatedCabinNames,
  getTranslatedCabinFeatures,
  getTranslatedIncludedItems,
} from "@/data/serverTranslations";

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dest = getDestination(id);
  if (!dest) notFound();

  const destNames = await getTranslatedDestinationNames();
  const destDescs = await getTranslatedDestinationDescriptions();
  const stepNames = await getTranslatedItinerarySteps();
  const stepDescs = await getTranslatedItineraryDescriptions();
  const cabinNames = await getTranslatedCabinNames();
  const cabinFeatures = await getTranslatedCabinFeatures();
  const includedItems = await getTranslatedIncludedItems();

  const upcomingLaunches = launches
    .filter((l) => l.destinationId === id)
    .sort((a, b) => new Date(a.launchDate).getTime() - new Date(b.launchDate).getTime());

  const cabins = ["economy", "business", "first", "suite"] as const;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className={`h-48 sm:h-64 rounded-2xl bg-gradient-to-br ${dest.gradient} mb-8 opacity-80`} />
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{destNames[id]}</h1>
      <p className="text-neutral-400 text-lg mb-8 max-w-2xl">{destDescs[id]}</p>
      <T>
        <div className="flex flex-wrap gap-6 mb-12 text-sm">
          <div className="bg-space-card border border-space-border rounded-lg px-4 py-3">
            <div className="text-neutral-500">Distance</div>
            <div className="text-white font-bold"><Num>{dest.distance}</Num> km</div>
          </div>
          <div className="bg-space-card border border-space-border rounded-lg px-4 py-3">
            <div className="text-neutral-500">Travel Time</div>
            <div className="text-white font-bold"><Num>{dest.travelTime}</Num> days</div>
          </div>
          <div className="bg-space-card border border-space-border rounded-lg px-4 py-3">
            <div className="text-neutral-500">Gravity</div>
            <div className="text-white font-bold"><Num>{dest.gravity}</Num>g</div>
          </div>
        </div>
      </T>

      {/* Itinerary */}
      <T>
        <h2 className="text-2xl font-bold text-white mb-6">Mission Itinerary</h2>
      </T>
      <div className="relative border-l-2 border-space-purple/30 ml-4 mb-12 space-y-6">
        {dest.itinerary.map((item, i) => (
          <div key={i} className="pl-8 relative">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-space-purple border-2 border-space-bg" />
            <div className="text-sm text-space-cyan"><T>Day <Num>{item.day}</Num></T></div>
            <div className="text-white font-bold">{stepNames[item.step]}</div>
            <div className="text-neutral-400 text-sm">{stepDescs[item.description]}</div>
          </div>
        ))}
      </div>

      {/* Cabin Classes */}
      <T>
        <h2 className="text-2xl font-bold text-white mb-6">Cabin Classes</h2>
      </T>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {cabins.map((c) => (
          <div key={c} className="bg-space-card border border-space-border rounded-xl p-5">
            <h3 className="text-lg font-bold text-white mb-2">{cabinNames[c]}</h3>
            <div className="text-space-purple text-2xl font-bold mb-4">
              <Currency currency="USD">{dest.cabinPrices[c]}</Currency>
            </div>
            <ul className="space-y-2 text-sm text-neutral-400">
              {dest.cabinFeatures[c].map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-space-cyan mt-0.5">&#8226;</span>
                  {cabinFeatures[f]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* What's Included */}
      <T>
        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
      </T>
      <div className="bg-space-card border border-space-border rounded-xl p-6 mb-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {dest.included.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-neutral-300">
              <span className="text-space-cyan">&#10003;</span>
              {includedItems[item]}
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Launches */}
      {upcomingLaunches.length > 0 && (
        <>
          <T>
            <h2 className="text-2xl font-bold text-white mb-6">Upcoming Launch Windows</h2>
          </T>
          <div className="space-y-3 mb-12">
            {upcomingLaunches.map((l) => (
              <div key={l.id} className="bg-space-card border border-space-border rounded-lg px-5 py-3 flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{l.missionName}</div>
                  <div className="text-sm text-neutral-400"><DateTime>{new Date(l.launchDate)}</DateTime></div>
                </div>
                <Num>{l.cabinAvailability.economy + l.cabinAvailability.business + l.cabinAvailability.first + l.cabinAvailability.suite}</Num>
              </div>
            ))}
          </div>
        </>
      )}

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/booking"
          className="inline-block px-8 py-3 bg-space-purple rounded-lg text-white font-bold text-lg hover:bg-space-purple/80 transition-colors"
        >
          <T>Book Now</T>
        </Link>
      </div>
    </div>
  );
}
