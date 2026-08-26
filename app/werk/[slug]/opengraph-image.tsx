import { ogContentType, ogSize, renderOg } from '@/lib/og';
import { getProject, projects } from '@/lib/projects';

export const dynamic = 'force-static';
export const alt = 'thebunyaminn.';
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOg({
    eyebrow: project?.category ?? 'Case',
    title: project ? `${project.name}: ${project.outcome ?? project.summary}` : 'Case',
  });
}
