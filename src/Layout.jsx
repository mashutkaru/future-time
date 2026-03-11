import { Link } from "react-router-dom";

const NAV = [
  { label: "Participants", page: "Participants" },
  { label: "About", page: "About" },
];

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      <nav className="sticky top-0 z-50 bg-[#1a2980] shadow-lg">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <span className="select-none text-lg font-black tracking-widest text-white">
            FUTURE<span className="text-[#f5b800]">TIME</span>
          </span>

          <div className="flex gap-1">
            {NAV.map(({ label, page }) => {
              const isActive = currentPageName === page;
              return (
                <Link
                  key={page}
                  to={`/${page === "Participants" ? "" : page}`}
                  className="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? { background: "#f5b800", color: "#1a2980" }
                      : { color: "rgba(255,255,255,0.75)" }
                  }
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
}
