
import { projects } from '../../data/projects';
import dynamic from 'next/dynamic';

type PageProps = {
  params: { projectId: string };
};

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find(p => p.slug === params.projectId);
  if (!project) return <div>プロジェクトが見つかりません</div>;

  // 動的にレイアウトファイルを読み込む
  const CustomLayout = dynamic(
    () => import(`../../components/project-layouts/${project.slug}`),
    { 
      loading: () => <div>Loading...</div>,
      ssr: true 
    }
  );

  return <CustomLayout project={project} />;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.slug
  }));
}
