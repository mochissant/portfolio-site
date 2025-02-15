
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../data/projects';
import projectImages from '../../data/projectImages';

// TOWERUSHのプロジェクトページ
// 背景色や画像の配置を自由に変更できます
export default function TowerushLayout({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link href="/work" className="inline-block mb-8 text-orange-600 hover:opacity-70">
          ← プロジェクト一覧に戻る
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <p className="text-lg mb-6">{project.description}</p>
            
            <div className="space-y-4 text-gray-600">
              <p>制作年月: {project.year}年{project.month}月</p>
              <p>クライアント: {project.client}</p>
            </div>

            {project.url && (
              <div className="mt-8">
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-orange-600 text-white rounded hover:opacity-80"
                >
                  サイトを見る →
                </a>
              </div>
            )}
          </div>

          <div>
            {project.image && (
              <div className="relative aspect-square">
                <Image
                  src={projectImages[project.slug]}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
