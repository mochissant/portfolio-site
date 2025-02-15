
'use client'

// プロジェクト一覧を表示するコンポーネント
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { projects } from '../data/projects';
import projectImages from '../data/projectImages';

const allTags = [... new Set(projects.flatMap((project) => project.tag))];

export default function ProjectsList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const toggleTag = (tag: string) => setSelectedTag(selectedTag === tag ? null : tag);
  const filteredProjects = selectedTag ? projects.filter(project => project.tag.includes(selectedTag)) : projects;
  const sortedProjects = filteredProjects.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    if (a.month !== b.month) return b.month - a.month;
    return a.slug.localeCompare(b.slug);
  });
  
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 py-6 gap-6">
      {/* タグフィルター */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 text-sm rounded-full border transition-colors
              ${selectedTag === tag 
                ? 'bg-gray-800 text-white border-gray-800' 
                : 'bg-white text-gray-800 border-gray-300 hover:border-gray-800'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
      
      {/* プロジェクトリスト */}
      <div className="grid grid-cols-1 gap-6">
        {sortedProjects.map((project) => (
          <Link 
            href={`/work/${project.slug}`} 
            key={project.slug}
            className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              {project.image && (
                <div className="relative w-full md:w-48 h-48 md:h-auto">
                  <Image
                    src={projectImages[project.slug]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={project.slug === 'nazosui'}
                  />
                </div>
              )}
              <div className="flex flex-col p-4 flex-grow">
                <h2 className="text-xl font-bold mb-2 group-hover:text-gray-600">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tag.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
