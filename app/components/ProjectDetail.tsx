
// プロジェクト詳細を表示するコンポーネント
import Image from 'next/image';
import Link from 'next/link';
import { Project, projects } from '../data/projects';
import projectImages from '../data/projectImages';

type ProjectDetailProps = {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  // プロジェクトIDに対応するプロジェクト情報を取得
  const project = projects.find(p => p.slug === projectId);
  if (!project) return <div>プロジェクトが見つかりません</div>;

  return (
    <div>
      {/* 戻るリンク */}
      <Link href="/work">
        ← プロジェクト一覧に戻る
      </Link>
      
      {/* プロジェクトのメイン情報 */}
      <h1>{project.title}</h1>
      
      {/* プロジェクト画像 */}
      {project.image && (
        <div>
          <Image
            src={projectImages[project.slug]}
            alt={project.title}
            fill
            priority
          />
        </div>
      )}
      
      {/* プロジェクトの詳細情報 */}
      <div>
        <p>{project.description}</p>
        <p>制作年月: {project.year}年{project.month}月</p>
        <p>クライアント: {project.client}</p>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            プロジェクトを見る →
          </a>
        )}
      </div>
    </div>
  );
}
