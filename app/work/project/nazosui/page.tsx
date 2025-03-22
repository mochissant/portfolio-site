import { Metadata } from 'next';
import {projects} from "../../../data/projects";
import Image from 'next/image';
import styles from "../../../styles/nazosui.module.css";

const project = projects.find (p=> p.slug ==='nazosui');

export const metadata: Metadata = {
    title: project ? project.title : 'ナゾスイ - Not Found',
  };

export default function NazosuiPage() {
    if (!project) {
        return <div>プロジェクトが見つかりませんでした。</div>;
      }
    
    return(
        <div className={styles.container}>
             <Image 
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                />
        </div>
    );
}
