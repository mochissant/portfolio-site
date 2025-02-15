
// プロジェクト詳細を表示するコンポーネント
import Image from 'next/image';
import Link from 'next/link';
import { Project, projects } from '../data/projects';
import projectImages from '../data/projectImages';

type ProjectDetailProps = {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = projects.find(p => p.slug === projectId);
  if (!project) return <div>プロジェクトが見つかりません</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/work" className="inline-block mb-8 text-gray-600 hover:text-gray-900 transition-colors">
        ← プロジェクト一覧に戻る
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      
      {project.image && (
        <div className="relative w-full h-[400px] mb-8">
          <div className="relative w-full h-full">
            <Image
              src={projectImages[project.slug]}
              alt={project.title}
              className="object-cover rounded-lg"
              style={{ position: 'absolute' }}
              fill
              priority
            />
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">{project.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
          <p>制作年月: {project.year}年{project.month}月</p>
          <p>クライアント: {project.client}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tag.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        {project.url && (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            プロジェクトを見る →
          </a>
        )}
      </div>
    </div>
  );
}
