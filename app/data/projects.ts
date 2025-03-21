import { StaticImageData } from "next/image";
import nazosuiImage from "@/public/images/nazosui.jpg"; // 実際のパスに合わせて変更

export interface ProjectImage {
    [key: string]: StaticImageData;
}

export type Project = {
    slug: string;
    title: string;
    tag: string[];
    image: StaticImageData; // 型を StaticImageData に変更
    year: number;
    month: number;
    url?: string;
    client: string;
}

export const projects: Project[] = [
    {
        slug: "nazosui",
        title: "ナゾスイ",
        tag: ["graphic"],
        image: nazosuiImage, // インポートした画像を使用
        year: 2023,
        month: 4,
        url: "http://nazosui.kawa-sui.com/",
        client: "RIDDLER",
    }
];
