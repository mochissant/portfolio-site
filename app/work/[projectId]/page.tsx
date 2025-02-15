
import ProjectDetail from '../../pages/ProjectDetail';

type Props = {
  params: {
    projectId: string;
  };
};

export default async function ProjectDetailPage({ params }: Props) {
  return <ProjectDetail projectId={params.projectId} />;
}
