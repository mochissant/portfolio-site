
import { projects } from '../../data/projects';
import StandardLayout from '../../components/project-layouts/StandardLayout';
import dynamic from 'next/dynamic';

export default function ProjectDetailPage({
  params,
}: {
  params: { projectId: string }
}) {
  const project = projects.find(p => p.slug === params.projectId);
  if (!project) return <div>プロジェクトが見つかりません</div>;
  
  if (project.layout === 'special') {
    const SpecialLayout = dynamic(() => import(`../../components/project-layouts/${project.slug}`));
    return <SpecialLayout project={project} />;
  }
  
  return <StandardLayout project={project} />;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.slug
  }));
}
