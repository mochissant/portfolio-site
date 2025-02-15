"use client";

import { useState } from 'react';
import { projects } from '../data/projects';
import Link from 'next/link';

const allTags = [...new Set(projects.flatMap((proj) => proj.tag))];

export default function ProjectsList() {
  const [selectedTag, setSelectedTag] = useState<string | false>(false);

  const toggleTag = (tag: string) => {
    setSelectedTag((prev) => prev === tag ? false : tag);
  };

  const filteredProjects = selectedTag == false ? projects : projects.filter((proj) => proj.tag.includes(selectedTag));

  const sortedProjects = filteredProjects.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    if (a.month !== b.month) {
      return b.month - a.month;
    }
    return a.slug.localeCompare(b.slug);
  });

  return (
    <div>
      <h1>作品一覧</h1>
      <div className="tags">
        {allTags.map((tag) => (
          <button key={tag} onClick={() => toggleTag(tag)}>{tag}</button>
        ))}
      </div>
      <div>
        {sortedProjects.map((project) => (
          <Link href={`/work/${project.slug}`} key={project.slug}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
              {project.tag.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}