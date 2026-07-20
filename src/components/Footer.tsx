import { site } from "../data/site";
import { contactChannels } from "../data/contact";

export default function Footer() {
  const github = contactChannels.find((c) => c.id === "github");

  return (
    <footer className="border-t border-border py-7 sm:py-8">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-2 px-5 text-[12.5px] text-muted sm:flex-row sm:justify-between sm:px-8 sm:text-[13px]">
        <span>© {new Date().getFullYear()} {site.name}</span>
        {github && (
          <a
            href={github.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink"
          >
            {github.value}
          </a>
        )}
      </div>
    </footer>
  );
}
