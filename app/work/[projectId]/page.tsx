
import ProjectDetail from '../../pages/ProjectDetail';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface PageProps {
  params: Params & {
    projectId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  return <ProjectDetail projectId={params.projectId} />;
}
