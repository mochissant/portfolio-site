import { StaticImageData } from "next/image";

export interface ProjectImage {
  [key: string]: StaticImageData;
}

export type Project = {
  slug: string;
  title: string;
  description: string;
  tag: string[];
  image: StaticImageData | null;
  layout: string;
  year: number;
  month: number;
  url?: string;
  client: string;
};

export const projects: Project[] = [
  {
    slug: "nazosui",
    title: "ナゾスイ",
    description: "川崎水族館での謎解き",
    tag: ["nazo", "editorial"],
    image: "nazosui.jpg",
    layout: "standard",
    year: 2023,
    month: 4,
    url: "http://nazosui.kawa-sui.com/",
    client: "RIDDLER",
  },
  {
    slug: "maitsuki",
    title: "毎月謎コン",
    description:
      "毎月謎コン様のメインビジュアルやロゴなどのグラフィックデザインを担当しました！</ br>「毎月、面白かった謎解きを集めよう」といったカジュアルな企画なため、グラフィックも親しみを持てるような温かい配色にしたり、「いかにも謎解き公演に居そう」な人たちを描いてみたりしています。",
    tag: ["logo", "graphic"],
    image: "maitsuki.jpg",
    layout: "custom",
    year: 2023,
    month: 4,
    url: "https://x.com/nazocontest",
    client: "毎月謎コン",
  },
  {
    slug: "towerush",
    title: "TOWERUSH",
    description: "東京タワーでのイベント",
    tag: ["logo", "graphic", "event"],
    image: null,
    layout: "standard",
    year: 2023,
    month: 12,
    url: "https://x.com/towerush_q",
    client: "TOWERUSH",
  },
  {
    slug: "lightriddlefes",
    title: "ライト謎解きフェス ロゴ",
    description: "東京タワーでのイベント",
    tag: ["logo"],
    image: "lightriddlefes.jpg",
    layout: "standard",
    year: 2024,
    month: 7,
    url: "https://x.com/lightriddlefes",
    client: "TOWERUSH",
  },
];
