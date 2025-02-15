
// プロジェクト一覧を表示するコンポーネント
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/projects';
import projectImages from '../data/projectImages';

export default function ProjectsList() {
  return (
    <div>
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
