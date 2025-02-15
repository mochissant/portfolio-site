
'use client'

// プロジェクト一覧を表示するコンポーネント
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { projects } from '../data/projects';
import projectImages from '../data/projectImages';

const allTags = [... new Set(projects.flatMap((project) => project.tag))];

export default function ProjectsList() {
  const [selectedTag, setSelectedTag]= useState (null);
  const toggleTag = (tag : string) => {selectedTag == tag ? setSelectedTag(null) : setSelectedTag(tag)};
  const filteredProjects = selectedTag == 0 ? projects : projects.filter(project => project.tag.includes(selectedTag));
  const sortedProjects =filteredProjects.sort((a,b) =>{
    if(a.year !== b.year){
      b.year - a.year;
    }
    if(a.month !== b.month){
      b.month - a.month;
    }
    return a.slug.localeCompare(b.slug)
  });
  
  return (
    <div className="flex flex-col space-y-6">
      <div>
        {allTags.map((tag)=>(<button key={tag} onClick={()=>toggleTag(tag)}>{tag}</button>))}
      </div>
      {projects.map((project) => (
        // 各プロジェクトのカード
        <Link href={`/work/${project.slug}`} key={project.slug}>
          {project.image && (
            // プロジェクトのサムネイル画像
            <div>
              <Image
                src={projectImages[project.slug]}
                alt={project.title}
                fill
                sizes="(max-height: 100px)"
                priority={project.slug === 'nazosui'}
              />
            </div>
          )}
          <div>
            {/* プロジェクトのタイトル */}
            <h2>{project.title}</h2>
            {/* プロジェクトの説明文 */}
            <p>{project.description}</p>
            {/* プロジェクトのタグ一覧 */}
            <div>
              {project.tag.map((tag) => (
                <span key={tag}>
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
