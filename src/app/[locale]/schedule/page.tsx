import { T } from "gt-next";
import LaunchTable from "@/components/LaunchTable";

export default function SchedulePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <T>
        <h1 className="text-4xl font-bold text-white text-center mb-2">Launch Schedule</h1>
        <p className="text-neutral-400 text-center mb-12">
          View upcoming missions, check seat availability, and watch the countdown to launch.
        </p>
      </T>
      <LaunchTable />
    </div>
  );
}
