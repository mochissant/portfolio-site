'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import styles from "../styles/top.module.css";
import { projects } from "../data/projects";
import IconButton from "./IconButton";

export type UpdateInfo = {
    year: number;
    month: number;
    day: number;
    message:string;
};

export type Slug ={
    slug:string;
};

export default function Top() {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();

    const updateInfo: UpdateInfo[] = [
        {
            year: 2025,
            month: 3,
            day: 28,
            message:"ポートフォリオサイトを公開しました",
        },
    ];

    const topProjects: Slug[] = [
        {slug: "nazosui"},
    ]

    const displayedProjects = projects.filter(proj => 
        topProjects.some(topProj => topProj.slug === proj.slug)
    );

    useEffect(() => {
        // ページロード後にアニメーションを実行
        const timer = setTimeout(() => setIsExpanded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const handleProjectClick = (slug: string) => {
        router.push(`/work/project/${slug}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.top}>
                    <div className={`${styles.topBox} ${isExpanded ? styles.expanded : ''}`} />
                    <span className={`${styles.design} ${isExpanded ? styles.expanded : ''}`}>design</span>
                </div>
                <div className={`${styles.message} ${isExpanded ? styles.expanded : ''}`}>
                    <span className={styles.mainMessage}>体験全てのデザインを。</span>
                    ここに本文。ここに本文
                </div>
                <div className={`${styles.update} ${isExpanded ? styles.expanded : ''}`}>
                    UPDATE!!
                    <div className={styles.updateInner}>
                        <div className={styles.latestUpdate}>
                            {`${updateInfo[0].year}.${updateInfo[0].month}.${updateInfo[0].day} - ${updateInfo[0].message}`}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.workContainer}>
                <h2 className={styles.title}>WORK</h2>
                <div className={styles.workItemContainer}>
                {displayedProjects.length > 0 ? (
                        displayedProjects.map((project) => (
                            <div key={project.slug} className={styles.workItem}>
                                <div className={styles.workImage}>
                                    <Image 
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="80vw"
                                        placeholder="blur"
                                    />
                                </div>
                                <div className={styles.workItemCard}>
                                    <div className={styles.workItemNum}>
                                        001
                                    </div>
                                    <div className={styles.workItemDiscription}>
                                        <div className={styles.leftItem}>
                                            <span className={styles.workTitle}>{project.title}</span>  
                                            <div className={styles.workTag}>
                                                {project.tag.join(' / ')}
                                            </div> 
                                        </div>
                                        <div className={styles.rightItem}>
                                            <IconButton variant="none" iconType="right"  onClick={() => handleProjectClick(project.slug)}/>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>該当するプロジェクトが見つかりませんでした。</div>
                    )}
                </div>
            </div>
            <div className={styles.aboutContainer}>
                <h2 className={styles.title}>ABOUT</h2>
                <div className={styles.profile}>
                    <Image 
                        src="/images/profile.jpg" 
                        alt="プロフィール写真" 
                        width={120} 
                        height={120}
                        />
                    1999年生まれ、東京都在住。大学時代に謎解き制作サークルに所属し、印刷物デザインを担当。就職後もデザイナーとして働く傍ら、謎解きイベントの企画・運営・デザインに携わる。
                </div>
            </div>
            <div className={styles.qaContainer}>
                <h2 className={styles.title}>Q&A</h2>
            </div>
        </div>   
    );
}
