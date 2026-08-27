import { ogContentType, ogSize, renderOg } from '@/lib/og';

export const dynamic = 'force-static';
export const alt = 'thebunyaminn.';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: 'Inzichten', title: 'De vragen die ondernemers mij stellen.' });
}
