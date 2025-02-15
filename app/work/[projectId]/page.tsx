
import ProjectDetail from '../../components/ProjectDetail';

export default function ProjectDetailPage({
  params,
}: {
  params: { projectId: string }
}) {
  return <ProjectDetail projectId={params.projectId} />;
}

export function generateStaticParams() {
  const projects = require('../../data/projects').projects;
  return projects.map((project) => ({
    projectId: project.slug
  }));
}
