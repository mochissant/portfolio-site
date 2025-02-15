
import { projects } from '../../data/projects';
import dynamic from 'next/dynamic';

type Props = {
  params: {
    projectId: string
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.projectId);
  console.log("params:", params); // ここで params の型を確認
  if (!project) return <div>プロジェクトが見つかりません</div>;

  const ProjectLayout = dynamic(
    () => import(`../../components/project-layouts/${params.projectId}`), 
    { ssr: true }
  );

  return <ProjectLayout project={project} />;
}

export function generateStaticParams() {
  return projects.map(project => ({
    projectId: project.slug,
  }));
}
