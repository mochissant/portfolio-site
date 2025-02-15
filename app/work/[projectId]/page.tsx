import ProjectDetail from '../../pages/ProjectDetail';

type PageProps = {
  params: { projectId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { projectId } = params as { projectId: string }; // 型を明示

  return <ProjectDetail projectId={projectId} />;
}
