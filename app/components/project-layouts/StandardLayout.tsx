import Image from "next/image";
import Link from "next/link";
import { Project } from "../../data/projects";
import projectImages from "../../data/projectImages";

export default function StandardLayout({ project }: { project: Project }) {
  return (
    <div>
      <div className="projectDetailContainer">
        <Link href="/work">← プロジェクト一覧に戻る</Link>

        <h1>{project.title}</h1>

        {project.image && (
          <div className="projectDetailImage">
            <Image
              src={projectImages[project.slug]}
              alt={project.title}
              fill
            />
          </div>
        )} 

        <div>
          <p>{project.description}</p>

          <div>
            <p>
              制作年月: {project.year}年{project.month}月
            </p>
            <p>クライアント: {project.client}</p>
          </div>

          <div>
            {project.tag.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              プロジェクトを見る →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
