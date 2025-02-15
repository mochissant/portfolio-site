"use client";

// プロジェクト一覧を表示するコンポーネント
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { projects } from "../data/projects";
import projectImages from "../data/projectImages";

const allTags = [...new Set(projects.flatMap((project) => project.tag))];

export default function ProjectsList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const toggleTag = (tag: string) =>
    setSelectedTag(selectedTag === tag ? null : tag);
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tag.includes(selectedTag))
    : projects;
  const sortedProjects = filteredProjects.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    if (a.month !== b.month) return b.month - a.month;
    return a.slug.localeCompare(b.slug);
  });

  return (
    <div>
      {/* タグフィルター */}
      <div className="tagButtonContainer">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`tagButton
              ${
                selectedTag === tag
                  ? "tagButtonSelected"
                  : "bg-white text-gray-800 border-gray-300 hover:border-gray-800"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* プロジェクトリスト */}
      <div className="projectListContainer">
        {sortedProjects.map((project) => (
          <Link href={`/work/${project.slug}`} key={project.slug}>
            <div className="projectCard">
              {project.image && (
                <div>
                  <Image
                    src={projectImages[project.slug]}
                    alt={project.title}
                    width={300}
                    height={200}
                    priority={project.slug === "nazosui"}
                  />
                </div>
              )}
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div>
                  {project.tag.map((tag) => (
                    <span key={tag}>{tag}</span>
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
