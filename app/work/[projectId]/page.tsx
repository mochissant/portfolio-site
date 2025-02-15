import ProjectDetail from '../../pages/ProjectDetail';

type PageProps = {
  params: { projectId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ProjectDetailPage({ params }: PageProps) {
  console.log("params:", params); // Vercelのログで確認
  return <ProjectDetail projectId={params.projectId} />;
}

// 🔹 generateStaticParams を追加（Next.js に動的ルートの情報を明示）
export async function generateStaticParams() {
  return [{ projectId: "example-id" }]; // 本番ではAPIからデータを取得する
}
