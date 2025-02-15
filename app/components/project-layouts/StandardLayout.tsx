
// このファイルは標準的なプロジェクト詳細ページのレイアウトを提供します
// プロジェクトの基本情報（タイトル、画像、説明文など）を表示します

import Image from "next/image";
import Link from "next/link";
import { Project } from "../../data/projects";
import projectImages from "../../data/projectImages";

export default function StandardLayout({ project }: { project: Project }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 戻るリンク */}
      <Link href="/work" className="inline-block mb-8 hover:opacity-70">
        ← プロジェクト一覧に戻る
      </Link>

      {/* プロジェクトタイトル */}
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      {/* プロジェクト画像 */}
      {project.image && (
        <div className="mb-8 aspect-video relative">
          <Image
            src={projectImages[project.slug]}
            alt={project.title}
            className="rounded-lg object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      )}

      {/* プロジェクト情報 */}
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">{project.description}</p>

        <div className="grid gap-4 text-gray-600">
          <p>制作年月: {project.year}年{project.month}月</p>
          <p>クライアント: {project.client}</p>
        </div>

        {/* タグ */}
        <div className="flex flex-wrap gap-2">
          {project.tag.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* プロジェクトリンク */}
        {project.url && (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:opacity-80"
          >
            プロジェクトを見る →
          </a>
        )}
      </div>
    </div>
  );
}
