"use client";

import { useState } from "react";
import { T, DateTime, Num } from "gt-next";
import { useGT } from "gt-next/client";
import { launches } from "@/data/launches";
import { destinations } from "@/data/destinations";
import CountdownTimer from "./CountdownTimer";

export default function LaunchTable() {
  const gt = useGT();
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? launches : launches.filter((l) => l.destinationId === filter);
  const sorted = [...filtered].sort((a, b) => new Date(a.launchDate).getTime() - new Date(b.launchDate).getTime());

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            filter === "all" ? "bg-space-purple text-white" : "bg-space-card text-neutral-400 hover:text-white border border-space-border"
          }`}
        >
          <T>All Destinations</T>
        </button>
        {destinations.map((d) => (
          <button
            key={d.id}
            onClick={() => setFilter(d.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filter === d.id ? "bg-space-purple text-white" : "bg-space-card text-neutral-400 hover:text-white border border-space-border"
            }`}
          >
            {gt(d.name)}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-space-border text-neutral-500">
              <T>
                <th className="text-left py-3 px-4 font-medium">Mission</th>
                <th className="text-left py-3 px-4 font-medium">Destination</th>
                <th className="text-left py-3 px-4 font-medium">Launch Date</th>
                <th className="text-left py-3 px-4 font-medium">Countdown</th>
                <th className="text-right py-3 px-4 font-medium">Seats Available</th>
              </T>
            </tr>
          </thead>
          <tbody>
            {sorted.map((launch) => {
              const dest = destinations.find((d) => d.id === launch.destinationId);
              const totalSeats = launch.cabinAvailability.economy + launch.cabinAvailability.business + launch.cabinAvailability.first + launch.cabinAvailability.suite;
              return (
                <tr key={launch.id} className="border-b border-space-border/50 hover:bg-space-card/50">
                  <td className="py-3 px-4 text-white font-medium">{launch.missionName}</td>
                  <td className="py-3 px-4 text-neutral-300">{dest && gt(dest.name)}</td>
                  <td className="py-3 px-4 text-neutral-300">
                    <DateTime>{new Date(launch.launchDate)}</DateTime>
                  </td>
                  <td className="py-3 px-4">
                    <CountdownTimer targetDate={launch.launchDate} compact />
                  </td>
                  <td className="py-3 px-4 text-right text-neutral-300">
                    <Num>{totalSeats}</Num>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
