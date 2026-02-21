import { T, Num } from "gt-next";
import { Tx } from "gt-next/server";
import Link from "next/link";
import StarField from "@/components/StarField";
import CountdownTimer from "@/components/CountdownTimer";
import { destinations } from "@/data/destinations";
import { launches } from "@/data/launches";

export default function HomePage() {
  const nextLaunch = [...launches].sort(
    (a, b) => new Date(a.launchDate).getTime() - new Date(b.launchDate).getTime()
  ).find((l) => new Date(l.launchDate) > new Date());

  return (
    <div>
      <StarField />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4">
        <div className="relative z-10 max-w-3xl">
          <T>
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
              Your Journey to the Stars Begins Here
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 mb-8 max-w-xl mx-auto">
              Book your passage to the Moon, Mars, orbital stations, and beyond.
              The cosmos awaits.
            </p>
          </T>
          <Link
            href="/booking"
            className="inline-block px-8 py-3 bg-space-purple rounded-lg text-white font-bold text-lg hover:bg-space-purple/80 transition-colors"
          >
            <T>Book Your Trip</T>
          </Link>
        </div>
      </section>

      {/* Destination Highlights */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <T>
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Popular Destinations
          </h2>
        </T>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <Link
              key={d.id}
              href={`/destinations/${d.id}`}
              className="bg-space-card border border-space-border rounded-xl p-5 hover:border-space-purple/50 transition-all group"
            >
              <div className={`h-24 rounded-lg bg-gradient-to-br ${d.gradient} mb-4 opacity-80 group-hover:opacity-100 transition-opacity`} />
              <h3 className="text-lg font-bold text-white"><Tx>{d.name}</Tx></h3>
              <T>
                <div className="flex gap-4 mt-2 text-xs text-neutral-400">
                  <span><Num>{d.travelTime}</Num> days</span>
                  <span><Num>{d.distance}</Num> km</span>
                </div>
              </T>
            </Link>
          ))}
        </div>
      </section>

      {/* Next Launch Countdown */}
      {nextLaunch && (
        <section className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center">
          <T>
            <h2 className="text-2xl font-bold text-white mb-2">Next Launch</h2>
          </T>
          <p className="text-neutral-400 mb-8">{nextLaunch.missionName}</p>
          <CountdownTimer targetDate={nextLaunch.launchDate} />
        </section>
      )}
    </div>
  );
}
