"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { T } from "gt-next";
import { useGT, LocaleSelector } from "gt-next/client";

function GitHubIcon() {
  return (
    <a
      href="https://github.com/gt-examples/space-tourism"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors"
      aria-label="GitHub"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>
  );
}

const navItems = [
  { href: "/", labelKey: "Home" },
  { href: "/destinations", labelKey: "Destinations" },
  { href: "/booking", labelKey: "Book a Trip" },
  { href: "/schedule", labelKey: "Launch Schedule" },
];

export default function Navigation() {
  const gt = useGT();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const segments = pathname.split("/").filter(Boolean);
  const pathWithoutLocale = segments.length > 1 ? "/" + segments.slice(1).join("/") : "/";

  return (
    <nav className="bg-space-card/80 backdrop-blur-md border-b border-space-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-bold text-space-cyan">
              <T>SpaceVoyager</T>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathWithoutLocale === "/"
                    : pathWithoutLocale.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-space-purple/20 text-space-purple"
                        : "text-neutral-300 hover:bg-space-border/50 hover:text-white"
                    }`}
                  >
                    {gt(item.labelKey)}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LocaleSelector />
            <GitHubIcon />
            <button
              className="md:hidden text-neutral-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden flex flex-col gap-1 pb-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathWithoutLocale === "/"
                  : pathWithoutLocale.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-space-purple/20 text-space-purple"
                      : "text-neutral-400 hover:bg-space-border/50"
                  }`}
                >
                  {gt(item.labelKey)}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
