// このファイルは標準的なプロジェクト詳細ページのレイアウトを提供します
import Image from 'next/image'
import Link from 'next/link';
import { Project } from '../../data/projects'
import projectImages from '../../data/projectImages'

// 型定義
type StandardLayoutProps = {
  project: Project
}

export default function StandardLayout({ project }: StandardLayoutProps) {
  const projectImage = project.image ? projectImages[project.image] : null;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-8">
        <Link href="/work" className="inline-block mb-6 text-gray-600 hover:text-gray-900">
          ← 作品一覧に戻る
        </Link>

        {/* プロジェクト画像 */}
        <div className="mb-8">
          {projectImage ? (
            <Image
              src={projectImage}
              alt={project.title}
              width={800}
              height={400}
              priority
              className="w-full object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-[400px] bg-gray-100 rounded-lg" />
          )}
        </div>

        {/* プロジェクト情報 */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg">{project.description}</p>

        {/* タグリスト */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tag.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* プロジェクトURL */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            プロジェクトを見る
          </a>
        )}
      </div>
    </div>
  );
}