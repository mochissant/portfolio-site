import Image from "next/image";
import Link from "next/link";
import { Project } from "../../data/projects";
import projectImages from "../../data/projectImages";

export default function StandardLayout({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/work"
          className="inline-block mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← プロジェクト一覧に戻る
        </Link>

        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

        {project.image && (
          <div className="relative mb-8">
            <div className="relative w-full aspect-video">
              <Image
                src={projectImages[project.slug]}
                alt={project.title}
                className="rounded-lg object-cover"
                fill
                sizes="(max-height: 10px)"
                priority
              />
            </div>
          </div>
        )}

        <div className="space-y-8">
          <p className="text-lg leading-relaxed">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <p>
              制作年月: {project.year}年{project.month}月
            </p>
            <p>クライアント: {project.client}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tag.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
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
              className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              プロジェクトを見る →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
