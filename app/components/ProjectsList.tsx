"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { projects } from "../data/projects";
import projectImages from "../data/projectImages";
import { motion } from "framer-motion";

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
    <motion.div
      className="mainContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Work</h1>
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

      <div className="projectListContainer">
        {sortedProjects.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            key={project.slug}
            className="projectCard"
          >
            <div className="projectCardContents">
              <div className="projectCardImage">
                {project.image !== null ? (
                  <motion.img
                    src={projectImages[project.slug]}
                    alt={project.title}
                    width={300}
                    height={200}
                    layoutId={`project-image-${project.slug}`}
                  />
                ) : (
                  <motion.div
                    className="projectCardImagePlaceholder"
                    layoutId={`project-image-${project.slug}`}
                  ></motion.div>
                )}
              </div>
              <div className="projectCardTItleArea">
                <h2 className="projectCardTitle">{project.title}</h2>
                <div className="projectCardTagArea">
                  {project.tag.map((tag) => (
                    <span key={tag} className="projectCardTag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
