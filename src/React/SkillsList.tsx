import { useState } from "react";

const sections = [
  {
    title: "About",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 7h5l2 2h11v10H3z" />
        <path d="M3 7V5h7l2 2" />
      </svg>
    ),
  },
  {
    title: "More",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="w-full text-left pt-3 md:pt-9">
      <h2 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        More to explore
      </h2>
      <ul className="space-y-4 mt-4 text-lg">
        {sections.map(({ title, icon }) => {
          const isOpen = openItem === title;
          const panelId = `section-${title.toLowerCase()}`;

          return (
            <li key={title} className="w-full">
              <div className="w-full bg-[#1414149c] rounded-2xl text-left border border-[var(--white-icon-tr)] overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenItem(isOpen ? null : title)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-[var(--sec)]">{icon}</span>
                  <span className="flex-grow text-[var(--white)] text-lg">
                    {title}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className={`w-6 h-6 text-[var(--white)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="px-4 pb-4 text-sm text-[var(--white-icon)]"
                >
                  Details coming soon.
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
