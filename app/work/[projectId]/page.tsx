
import ProjectDetail from '../../pages/ProjectDetail';

type PageProps = {
  params: { projectId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProjectDetailPage({ params }: PageProps) {
  return <ProjectDetail projectId={params.projectId} />;
}
