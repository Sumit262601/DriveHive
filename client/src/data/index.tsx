import Image from "@/assets/icons/image.svg";
import Video from "@/assets/icons/video.svg";
import Audio from "@/assets/icons/audio.svg";
import Document from "@/assets/icons/document.svg";

interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
    data: string;
    url: string;
  };
}

const formatDataSize = (size: number): string => {
  if (size >= 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(2)} GB`;
  } else if (size >= 1024) {
    return `${(size / 1024).toFixed(2)} MB`;
  } else if (size >= 1) {
    return `${size.toFixed(2)} KB`;
  } else {
    return `${(size * 1024)} Bytes`;
  }
};

const n = 1024; // Example value in MB

export const chartConfig: ChartConfig = {
  image: {
    label: 'Image',
    color: 'hsl(var(--chart-1))',
    data: formatDataSize(125),
    url: Image,
  },
  video: {
    label: 'Video',
    color: 'hsl(var(--chart-2))',
    data: formatDataSize(60),
    url: Video,
  },
  audio: {
    label: 'Audio',
    color: 'hsl(var(--chart-3))',
    data: formatDataSize(24),
    url: Audio,
  },
  document: {
    label: 'Document',
    color: 'hsl(var(--chart-4))',
    data: formatDataSize(n * 1),
    url: Document,
  },
};

export const barCharData = [
    { month: "January", image: 10, video: 50, audio: 70, document: 50 },
    { month: "February", image: 10, video: 30, audio: 0, document: 0 },
    { month: "March", image: 20, video: 0, audio: 0, document: 50 },
    { month: "April", image: 60, video: 50, audio: 0, document: 0 },
    { month: "May", image: 30, video: 0, audio: 50, document: 0 },
    { month: "June", image: 5, video: 0, audio: 0, document: 0 },
    { month: "July", image: 40, video: 0, audio: 0, document: 0 },
    { month: "August", image: 9, video: 0, audio: 50, document: 0 },
    { month: "September", image: 80, video: 0, audio: 0, document: 0 },
    { month: "October", image: 10, video: 0, audio: 0, document: 0 },
    { month: "November", image: 90, video: 0, audio: 0, document: 0 },
    { month: "December", image: 40, video: 0, audio: 0, document: 0 },
];

export const areaCharData = [
    { date: "2024-07-15", image: 450, audio: 300, video: 250, document: 150 },
    { date: "2024-07-16", image: 380, audio: 420, video: 250, document: 150 },
    { date: "2024-07-17", image: 520, audio: 120, video: 250, document: 150 },
    { date: "2024-07-18", image: 140, audio: 550, video: 250, document: 150 },
    { date: "2024-07-19", image: 600, audio: 350, video: 250, document: 150 },
    { date: "2024-07-20", image: 480, audio: 400, video: 250, document: 150 },
];

export const piaCharData = [
    { item: "image", datapack: 50, fill: "var(--color-image)" },
    { item: "video", datapack: 20, fill: "var(--color-video)" },
    { item: "audio", datapack: 60, fill: "var(--color-audio)" },
    { item: "document", datapack: 10, fill: "var(--color-document)" },
];

