
// このファイルは毎月謎コンプロジェクトのカスタムレイアウトを提供します
import Image from 'next/image';
import { Project } from '../../data/projects';
import projectImages from '../../data/projectImages';

export default function MaitsukiLayout({ project }: { project: Project }) {
  const projectImage = project.slug in projectImages ? projectImages[project.slug] : null;

  return (
    <div className="projectDetailPage">
      <div className="projectDetailContainer">
        <a href="/work" className="backLink">
          ← Back to Projects
        </a>
        <div className="projectHeader">
          <h1 className="projectTitle">{project.title}特別</h1>
          {projectImage && (
            <div className="projectMainImage">
              <Image
                src={projectImage}
                alt={project.title}
                width={800}
                height={400}
                priority
                className="projectImage"
              />
            </div>
          )}
        </div>
        <div className="projectContent">
          <p className="projectDescription">{project.description}</p>
          <div className="projectMetadata">
            <div className="projectTagList">
              {project.tag.map((tag) => (
                <span key={tag} className="projectDetailTag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="projectInfo">
              <p>制作時期: {project.year}年{project.month}月</p>
              <p>クライアント: {project.client}</p>
            </div>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
