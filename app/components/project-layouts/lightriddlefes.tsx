
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../data/projects';
import projectImages from '../../data/projectImages';

// ライトリドルフェスのプロジェクトページ
// 背景色や画像の配置を自由に変更できます
export default function LightRiddleFesLayout({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/work" className="inline-block mb-8 text-purple-600 hover:opacity-70">
          ← プロジェクト一覧に戻る
        </Link>

        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-center">{project.title}</h1>
          
          {project.image && (
            <div className="relative w-full aspect-video max-w-2xl">
              <Image
                src={projectImages[project.slug]}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          )}

          <div className="max-w-2xl">
            <p className="text-lg mb-6 text-center">{project.description}</p>
            
            <div className="flex justify-center gap-8 text-gray-600">
              <p>制作年月: {project.year}年{project.month}月</p>
              <p>クライアント: {project.client}</p>
            </div>

            {project.url && (
              <div className="text-center mt-8">
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-purple-600 text-white rounded hover:opacity-80"
                >
                  サイトを見る →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
