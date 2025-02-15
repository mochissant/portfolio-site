// このファイルはカスタマイズされたプロジェクト詳細ページのレイアウトを提供します
import Image from 'next/image'
import { Project } from '../../data/projects'
import projectImages from '../../data/projectImages'

type CustomLayoutProps = {
  project: Project
}

export function CustomLayout({ project }: CustomLayoutProps) {
  const projectImage = project.slug in projectImages ? projectImages[project.slug] : null

  return (
    <div>
      <div>
        <div>
          <div>
            <a href="/work">
              ← 作品一覧に戻る
            </a>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div>
              {project.tag.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                プロジェクトを見る
              </a>
            )}
          </div>
          <div>
            {projectImage ? (
              <Image
                src={projectImage}
                alt={project.title}
                fill
                priority
              />
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Assumed StandardLayout component
export function StandardLayout({ project }: { project: Project }) {
  const projectImage = project.slug in projectImages ? projectImages[project.slug] : null;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="relative w-full h-[300px]"> {/* Placeholder for image */}
            {projectImage ? (
              <Image
                src={projectImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-100" />
            )}
          </div>
          <p className="text-lg mt-4">{project.description}</p>
          {/* ...rest of the content... */}
        </div>
      </div>
    </div>
  );
}