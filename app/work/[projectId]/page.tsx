import { projects } from '../../data/projects';
import StandardLayout from '../../components/project-layouts/StandardLayout';
import dynamic from 'next/dynamic';

type PageProps = {
  params: { projectId: string };
};

export default function ProjectDetailPage({ params }: PageProps) {
  console.log("params:", params); // デバッグ用（Vercel のログ確認）

  const project = projects.find(p => p.slug === params.projectId);
  if (!project) return <div>プロジェクトが見つかりません</div>;

  if (project.layout === 'special') {
    try {
      const SpecialLayout = dynamic(() => import(`../../components/project-layouts/${project.slug}`));
      return <SpecialLayout project={project} />;
    } catch (error) {
      console.error("Failed to load layout:", error);
      return <div>カスタムレイアウトの読み込みに失敗しました</div>;
    }
  }

  return <StandardLayout project={project} />;
}

// `generateStaticParams` の戻り値の型を明示
export function generateStaticParams(): { projectId: string }[] {
  return projects.map((project) => ({
    projectId: project.slug
  }));
}
