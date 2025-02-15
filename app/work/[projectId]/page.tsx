import ProjectDetail from "../../pages/ProjectDetail";

type PageProps = {
  params: { projectId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 🔹 generateStaticParams を追加（Next.js に動的ルートの情報を明示）
export async function generateStaticParams() {
  return [{ projectId: "example-id" }]; // 本番ではAPIからデータを取得する
}

export default async function ProjectDetailPage({ params }: PageProps) {
  console.log("params:", params); // デバッグ用（Vercel のログで確認）

  const resolvedParams = await params; // 非同期処理の可能性に備える
  return <ProjectDetail projectId={resolvedParams.projectId} />;
}
