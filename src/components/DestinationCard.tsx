import Link from "next/link";
import { T, Num, Currency } from "gt-next";
import type { Destination } from "@/data/destinations";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.id}`}
      className="group block bg-space-card border border-space-border rounded-xl overflow-hidden hover:border-space-purple/50 transition-all hover:shadow-lg hover:shadow-space-purple/10"
    >
      <div className={`h-40 bg-gradient-to-br ${destination.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
      <div className="p-5">
        <T>
          <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
          <p className="text-neutral-400 text-sm mb-4">{destination.description}</p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <div className="text-space-cyan font-bold"><Num>{destination.travelTime}</Num>d</div>
              <div className="text-neutral-500">Travel</div>
            </div>
            <div>
              <div className="text-space-cyan font-bold"><Num>{destination.distance}</Num> km</div>
              <div className="text-neutral-500">Distance</div>
            </div>
            <div>
              <div className="text-space-cyan font-bold"><Num>{destination.gravity}</Num>g</div>
              <div className="text-neutral-500">Gravity</div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-space-border text-sm">
            <span className="text-neutral-500">From </span>
            <span className="text-space-purple font-bold"><Currency currency="USD">{destination.cabinPrices.economy}</Currency></span>
          </div>
        </T>
      </div>
    </Link>
  );
}
