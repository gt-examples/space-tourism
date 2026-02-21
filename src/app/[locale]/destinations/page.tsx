import { T } from "gt-next";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";

export default function DestinationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <T>
        <h1 className="text-4xl font-bold text-white text-center mb-4">Explore Destinations</h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12">
          From the familiar glow of the Moon to the distant reaches of the asteroid belt,
          discover the destinations that await you.
        </p>
      </T>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </div>
  );
}
