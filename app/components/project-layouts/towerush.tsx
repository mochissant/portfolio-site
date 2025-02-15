import Image from "next/image";
import Link from "next/link";
import { Project } from "../../data/projects";
import projectImages from "../../data/projectImages";
import { motion } from "framer-motion";

// TOWERUSHのプロジェクトページ
// 背景色や画像の配置を自由に変更できます
export default function TowerushLayout({ project }: { project: Project }) {
  return (
    <div className="mainContainer">
      <div className="">
        <Link href="/work" className="">
          ← プロジェクト一覧に戻る
        </Link>

        <div className="projectDetailContainer">
          <h1 className="">{project.title}</h1>

          <div className="projectDetailImage">
            {project.image !== null ? (
              <motion.img
                src={projectImages[project.slug]}
                alt={project.title}
                width={300}
                height={200}
                layoutId={`project-image-${project.slug}`}
              />
            ) : (
              <div className="projectCardImagePlaceholder"></div>
            )}
          </div>

          <div className="">
            <p className="">{project.description}</p>

            <div className="">
              <p>
                制作年月: {project.year}年{project.month}月
              </p>
              <p>クライアント: {project.client}</p>
            </div>

            {project.url && (
              <div className="">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  サイトを見る →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
