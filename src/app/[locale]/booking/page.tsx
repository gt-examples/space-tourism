import { T } from "gt-next";
import BookingWizard from "@/components/BookingWizard";

export default function BookingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <T>
        <h1 className="text-4xl font-bold text-white text-center mb-2">Book Your Journey</h1>
        <p className="text-neutral-400 text-center mb-12">
          Select your destination, cabin class, and launch date to reserve your seat among the stars.
        </p>
      </T>
      <BookingWizard />
    </div>
  );
}
