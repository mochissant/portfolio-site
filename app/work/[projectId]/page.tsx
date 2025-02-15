
import ProjectDetail from '../../pages/ProjectDetail';
import { Metadata } from 'next';

type Props = {
  params: {
    projectId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ProjectDetailPage({ params }: Props) {
  return <ProjectDetail projectId={params.projectId} />;
}
