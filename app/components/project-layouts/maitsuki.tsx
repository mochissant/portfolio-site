
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../data/projects';
import projectImages from '../../data/projectImages';

export default function MaitsukiLayout({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-purple-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link 
          href="/work" 
          className="inline-block mb-12 text-purple-600 hover:text-purple-800 transition-colors"
        >
          ← プロジェクト一覧に戻る
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-purple-900">{project.title}</h1>
            <p className="text-lg leading-relaxed mb-8">{project.description}</p>
            
            <div className="space-y-4 text-gray-600">
              <p>制作年月: {project.year}年{project.month}月</p>
              <p>クライアント: {project.client}</p>
            </div>

            <div className="flex flex-wrap gap-2 my-8">
              {project.tag.map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                プロジェクトを見る →
              </a>
            )}
          </div>

          <div className="relative">
            <div className="sticky top-8">
              <div className="relative w-full aspect-square">
                <Image
                  src={projectImages[project.slug]}
                  alt={project.title}
                  className="rounded-lg object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
