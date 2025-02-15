
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/projects';
import projectImages from '../data/projectImages';

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <Link
          href={`/work/${project.slug}`}
          key={project.slug}
          className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          {project.image && (
            <div className="relative h-48 w-full">
              <Image
                src={projectImages[project.slug]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={project.slug === 'nazosui'}
              />
            </div>
          )}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tag.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
