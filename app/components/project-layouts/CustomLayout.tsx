// このファイルはカスタマイズされたプロジェクト詳細ページのレイアウトを提供します
import Image from 'next/image'
import Link from 'next/link';
import { Project } from '../../data/projects'
import projectImages from '../../data/projectImages'

type CustomLayoutProps = {
  project: Project
}

export default function CustomLayout({ project }: { project: Project }) {
  const projectImage = project.slug in projectImages ? projectImages[project.slug] : null;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <Link href="/work" className="backLink">
            ← Back to Projects
          </Link>
          <div className="relative w-full h-[300px]">
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
        </div>
      </div>
    </div>
  );
}

// Assumed StandardLayout component
export function StandardLayout({ project }: { project: Project }) {
  const projectImage = project.slug in projectImages ? projectImages[project.slug] : null;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="relative w-full h-[300px]">
            {projectImage ? (
              <div className="relative w-full h-full">
                <Image
                  src={projectImage}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                  style={{ position: 'absolute' }}
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gray-100 rounded-lg" />
            )}
          </div>
          <p className="text-lg mt-4">{project.description}</p>
          {/* ...rest of the content... */}
        </div>
      </div>
    </div>
  );
}