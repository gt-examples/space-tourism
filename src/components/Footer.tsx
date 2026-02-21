import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="bg-space-card border-t border-space-border py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <T>
          <p className="text-sm text-neutral-500 text-center">
            This is an example application built with{" "}
            <a
              href="https://generaltranslation.com"
              className="text-space-cyan hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              General Translation
            </a>{" "}
            to demonstrate internationalization. It is not a real space travel service.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-neutral-600">
            <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">
              NASA
            </a>
            <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">
              SpaceX
            </a>
            <a href="https://www.esa.int" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">
              ESA
            </a>
          </div>
        </T>
      </div>
    </footer>
  );
}
