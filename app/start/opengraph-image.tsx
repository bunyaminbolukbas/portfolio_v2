import { ogContentType, ogSize, renderOg } from '@/lib/og';

export const dynamic = 'force-static';
export const alt = 'thebunyaminn.';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: 'Start', title: 'Vertel me wat je wilt bereiken.' });
}
