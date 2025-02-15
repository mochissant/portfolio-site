
'use client'

import { projects, Project } from '../../data/projects';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId as string;
  console.log("params:", params);
  
  const project = projects.find(p => p.slug === projectId);
  
  if (!project) {
    notFound();
  }

  const ProjectLayout = dynamic(
    () => import(`../../components/project-layouts/${projectId}`),
    { 
      loading: () => <div>Loading...</div>,
      ssr: true 
    }
  ) as React.ComponentType<{project: Project}>;

  return <ProjectLayout project={project} />;
}
