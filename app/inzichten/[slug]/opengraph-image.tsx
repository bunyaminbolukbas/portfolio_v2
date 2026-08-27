import { ogContentType, ogSize, renderOg } from '@/lib/og';
import { getInzicht, inzichtSlugs } from '@/lib/inzichten';

export const dynamic = 'force-static';
export const alt = 'thebunyaminn.';
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return inzichtSlugs.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = await getInzicht(slug);
  return renderOg({ eyebrow: a?.category ?? 'Inzichten', title: a?.title ?? 'Inzichten' });
}
