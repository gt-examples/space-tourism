"use client";

import { useState } from "react";
import { T, Var, Num, Currency, Plural, DateTime } from "gt-next";
import { useGT } from "gt-next/client";
import { destinations } from "@/data/destinations";
import { launches } from "@/data/launches";
import { useTranslatedDestinationNames, useTranslatedCabinNames, useTranslatedCabinFeatures } from "@/data/clientTranslations";

const cabinClasses = ["economy", "business", "first", "suite"] as const;
type CabinClass = (typeof cabinClasses)[number];

export default function BookingWizard() {
  const gt = useGT();
  const destNames = useTranslatedDestinationNames();
  const cabinNames = useTranslatedCabinNames();
  const cabinFeatureNames = useTranslatedCabinFeatures();
  const [step, setStep] = useState(1);
  const [destinationId, setDestinationId] = useState("");
  const [cabin, setCabin] = useState<CabinClass>("economy");
  const [passengers, setPassengers] = useState(1);
  const [launchId, setLaunchId] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const selectedDest = destinations.find((d) => d.id === destinationId);
  const availableLaunches = launches.filter((l) => l.destinationId === destinationId);
  const selectedLaunch = launches.find((l) => l.id === launchId);

  const basePrice = selectedDest ? selectedDest.cabinPrices[cabin] : 0;
  const subtotal = basePrice * passengers;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  if (confirmed) {
    const ref = "SV-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    return (
      <div className="text-center py-12">
        <T>
          <div className="text-space-cyan text-6xl mb-6">&#10003;</div>
          <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed</h2>
          <p className="text-neutral-400 mb-2">Your booking reference is:</p>
        </T>
        <p className="text-2xl font-mono text-space-purple font-bold mb-6">{ref}</p>
        <T>
          <p className="text-neutral-500 text-sm">
            This is a demonstration. No actual booking has been made.
          </p>
        </T>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              s <= step ? "bg-space-purple text-white" : "bg-space-border text-neutral-500"
            }`}>
              {s}
            </div>
            {s < 4 && <div className={`w-8 h-0.5 ${s < step ? "bg-space-purple" : "bg-space-border"}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <T>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Select Your Destination</h2>
          </T>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {destinations.map((d) => (
              <button
                key={d.id}
                onClick={() => { setDestinationId(d.id); setStep(2); }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  destinationId === d.id
                    ? "border-space-purple bg-space-purple/10"
                    : "border-space-border bg-space-card hover:border-space-purple/50"
                }`}
              >
                <div className={`h-20 rounded-lg bg-gradient-to-br ${d.gradient} mb-3`} />
                <div className="font-bold text-white">{destNames[d.id]}</div>
                <div className="text-sm text-neutral-400 mt-1">
                  <T><Num>{d.travelTime}</Num> days</T> &middot; <Currency currency="USD">{d.cabinPrices.economy}</Currency>+
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <T>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Cabin Class</h2>
          </T>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cabinClasses.map((c) => (
              <button
                key={c}
                onClick={() => { setCabin(c); setStep(3); }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  cabin === c
                    ? "border-space-purple bg-space-purple/10"
                    : "border-space-border bg-space-card hover:border-space-purple/50"
                }`}
              >
                <div className="font-bold text-white">{cabinNames[c]}</div>
                {selectedDest && (
                  <div className="text-space-cyan font-bold mt-2">
                    <Currency currency="USD">{selectedDest.cabinPrices[c]}</Currency>
                  </div>
                )}
                {selectedDest && (
                  <ul className="text-xs text-neutral-400 mt-2 space-y-1">
                    {selectedDest.cabinFeatures[c].slice(0, 2).map((f, i) => (
                      <li key={i}>{cabinFeatureNames[f]}</li>
                    ))}
                  </ul>
                )}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(1)} className="mt-4 text-sm text-neutral-500 hover:text-white">
            <T>Back</T>
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <T>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Trip Details</h2>
          </T>
          <div className="bg-space-card border border-space-border rounded-xl p-6 space-y-6">
            <div>
              <T>
                <label className="block text-sm text-neutral-400 mb-2">Passengers</label>
              </T>
              <div className="flex items-center gap-4">
                <button onClick={() => setPassengers(Math.max(1, passengers - 1))} className="w-10 h-10 rounded-lg bg-space-border text-white hover:bg-space-purple/50">-</button>
                <span className="text-xl font-bold text-white">{passengers}</span>
                <button onClick={() => setPassengers(Math.min(8, passengers + 1))} className="w-10 h-10 rounded-lg bg-space-border text-white hover:bg-space-purple/50">+</button>
              </div>
            </div>
            <div>
              <T>
                <label className="block text-sm text-neutral-400 mb-2">Launch Date</label>
              </T>
              <select
                value={launchId}
                onChange={(e) => setLaunchId(e.target.value)}
                className="w-full bg-space-bg border border-space-border rounded-lg px-4 py-2 text-white"
              >
                <option value="">{gt("Select a launch date")}</option>
                {availableLaunches.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.missionName} — {new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(l.launchDate))}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="px-4 py-2 text-sm text-neutral-400 hover:text-white">
                <T>Back</T>
              </button>
              <button
                onClick={() => launchId && setStep(4)}
                disabled={!launchId}
                className="flex-1 px-4 py-2 bg-space-purple rounded-lg text-white font-bold disabled:opacity-50"
              >
                <T>Continue</T>
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 4 && selectedDest && selectedLaunch && (
        <div>
          <T>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Booking Summary</h2>
          </T>
          <div className="bg-space-card border border-space-border rounded-xl p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400"><T>Destination</T></span>
              <span className="text-white">{destNames[selectedDest.id]}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400"><T>Cabin</T></span>
              <span className="text-white">{cabinNames[cabin]}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400"><T>Launch</T></span>
              <span className="text-white">{selectedLaunch.missionName} — <DateTime>{new Date(selectedLaunch.launchDate)}</DateTime></span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">
                <T>
                  <Plural
                    n={passengers}
                    singular={<><Num>{passengers}</Num> passenger</>}
                    plural={<><Num>{passengers}</Num> passengers</>}
                  />
                </T>
              </span>
              <span className="text-white"><Currency currency="USD">{subtotal}</Currency></span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400"><T>Tax</T></span>
              <span className="text-white"><Currency currency="USD">{tax}</Currency></span>
            </div>
            <div className="border-t border-space-border pt-3 flex justify-between">
              <span className="font-bold text-white"><T>Total</T></span>
              <span className="font-bold text-space-purple text-xl"><Currency currency="USD">{total}</Currency></span>
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={() => setStep(3)} className="px-4 py-2 text-sm text-neutral-400 hover:text-white">
                <T>Back</T>
              </button>
              <button
                onClick={() => setConfirmed(true)}
                className="flex-1 px-4 py-2 bg-space-purple rounded-lg text-white font-bold hover:bg-space-purple/80"
              >
                <T>Confirm Booking</T>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
