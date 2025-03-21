'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';
import styles from "../styles/top.module.css";
import { projects } from "../data/projects";

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
                <div className={styles.title}>WORK</div>
                <div className={styles.workItem}>
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
                            </div>
                        ))
                    ) : (
                        <div>該当するプロジェクトが見つかりませんでした。</div>
                    )}
                </div>
            </div>
        </div>   
    );
}
