/**
 * Pill-knop voor socials: donkere afgeronde knop met het officiële
 * platform-icoon in merkkleur en de handle als label.
 */

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8Z"
      />
      <path fill="#fff" d="M9.6 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <defs>
        <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="#fff" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.1 9.2H4.6V19h2.5V9.2ZM5.9 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19.5 13.6c0-2.8-1.5-4.1-3.5-4.1-1.6 0-2.3.9-2.7 1.5V9.2h-2.5V19h2.5v-5.2c0-1.4.6-2.2 1.8-2.2 1.1 0 1.7.8 1.7 2.2V19h2.7v-5.4Z"
      />
    </svg>
  );
}

const icons = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
} as const;

export function SocialPill({
  platform,
  handle,
  href,
}: {
  platform: keyof typeof icons;
  handle: string;
  href: string;
}) {
  const Icon = icons[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
    >
      <Icon />
      {handle}
    </a>
  );
}
