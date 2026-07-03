export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  title: string;
  heroVideo: string;
  heroPoster?: string;
};

export type ProjectVideo = {
  title: string;
  file: string;
  poster: string;
  orientation: "portrait" | "landscape";
};

export type Project = {
  slug: string;
  name: string;
  logo?: string;
  direction: "left" | "right";
  videos: ProjectVideo[];
};

export type ClientLogo = {
  slug: string;
  name: string;
  image: string;
  mode?: "contain" | "cover";
};

export type PortfolioItem = {
  title: string;
  category: string;
  duration: string;
  summary: string;
  image: string;
};

export const navItems: NavItem[] = [
  { label: "Работы", href: "#projects" },
  { label: "Клиенты", href: "#clients" },
];

export const heroContent: HeroContent = {
  title: "Портфолио студии далее",
  heroVideo: "/assets/video/hero-main.mp4",
  heroPoster: "/assets/projects/studio-dalee/poster.jpg",
};

export const projects: Project[] = [
  {
    slug: "studio-dalee",
    name: "Студия Далее",
    direction: "left",
    videos: [
      {
        title: "Wedding Reels 01",
        file: "/assets/projects/studio-dalee/video-01.mp4",
        poster: "/assets/projects/studio-dalee/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Wedding Reels 02",
        file: "/assets/projects/studio-dalee/video-02.mp4",
        poster: "/assets/projects/studio-dalee/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Wedding Reels 03",
        file: "/assets/projects/studio-dalee/video-03.mp4",
        poster: "/assets/projects/studio-dalee/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Перевёртыш",
        file: "/assets/projects/studio-dalee/video-04.mp4",
        poster: "/assets/projects/studio-dalee/poster.jpg",
        orientation: "landscape",
      },
      {
        title: "Рилс Далее",
        file: "/assets/projects/studio-dalee/video-05.mp4",
        poster: "/assets/projects/studio-dalee/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Рилс хлопки",
        file: "/assets/projects/studio-dalee/video-06.mp4",
        poster: "/assets/projects/studio-dalee/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Wedding Reels 07",
        file: "/assets/projects/studio-dalee/video-07.mp4",
        poster: "/assets/projects/studio-dalee/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Wedding Reels 08",
        file: "/assets/projects/studio-dalee/video-08.mp4",
        poster: "/assets/projects/studio-dalee/poster.jpg",
        orientation: "portrait",
      },
    ],
  },
  {
    slug: "dale-service",
    name: "Дале Сервис",
    logo: "/assets/projects/dale-service/logo.png",
    direction: "right",
    videos: [
      {
        title: "Для Telegram",
        file: "/assets/projects/dale-service/video-01.mp4",
        poster: "/assets/projects/dale-service/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Жора и пистолет",
        file: "/assets/projects/dale-service/video-02.mp4",
        poster: "/assets/projects/dale-service/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Инста / YouTube",
        file: "/assets/projects/dale-service/video-03.mp4",
        poster: "/assets/projects/dale-service/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Как пришла идея",
        file: "/assets/projects/dale-service/video-04.mp4",
        poster: "/assets/projects/dale-service/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Дале Сервис 05",
        file: "/assets/projects/dale-service/video-05.mp4",
        poster: "/assets/projects/dale-service/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Дале Сервис 06",
        file: "/assets/projects/dale-service/video-06.mp4",
        poster: "/assets/projects/dale-service/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Дале Сервис 07",
        file: "/assets/projects/dale-service/video-07.mp4",
        poster: "/assets/projects/dale-service/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Дале Сервис 08",
        file: "/assets/projects/dale-service/video-08.mp4",
        poster: "/assets/projects/dale-service/poster.jpg",
        orientation: "portrait",
      },
    ],
  },
  {
    slug: "domian",
    name: "Домиан",
    logo: "/assets/projects/domian/logo.jpg",
    direction: "left",
    videos: [
      {
        title: "Горы",
        file: "/assets/projects/domian/video-01.mp4",
        poster: "/assets/projects/domian/poster.jpg",
        orientation: "landscape",
      },
      {
        title: "Домиан 02",
        file: "/assets/projects/domian/video-02.mp4",
        poster: "/assets/projects/domian/poster.jpg",
        orientation: "landscape",
      },
      {
        title: "Домиан 03",
        file: "/assets/projects/domian/video-03.mp4",
        poster: "/assets/projects/domian/poster.jpg",
        orientation: "landscape",
      },
      {
        title: "Домиан 04",
        file: "/assets/projects/domian/video-04.mp4",
        poster: "/assets/projects/domian/poster.jpg",
        orientation: "landscape",
      },
      {
        title: "Домиан 05",
        file: "/assets/projects/domian/video-05.mp4",
        poster: "/assets/projects/domian/poster-alt.jpg",
        orientation: "landscape",
      },
    ],
  },
  {
    slug: "haski",
    name: "БК Хаски",
    logo: "/assets/projects/haski/logo.jpg",
    direction: "right",
    videos: [
      {
        title: "Хаски 01",
        file: "/assets/projects/haski/video-01.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 02",
        file: "/assets/projects/haski/video-02.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 03",
        file: "/assets/projects/haski/video-03.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 04",
        file: "/assets/projects/haski/video-04.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 05",
        file: "/assets/projects/haski/video-05.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 06",
        file: "/assets/projects/haski/video-06.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 07",
        file: "/assets/projects/haski/video-07.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 08",
        file: "/assets/projects/haski/video-08.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 09",
        file: "/assets/projects/haski/video-09.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 10",
        file: "/assets/projects/haski/video-10.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 11",
        file: "/assets/projects/haski/video-11.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 12",
        file: "/assets/projects/haski/video-12.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
      {
        title: "Хаски 13",
        file: "/assets/projects/haski/video-13.mp4",
        poster: "/assets/projects/haski/poster.jpg",
        orientation: "portrait",
      },
    ],
  },
];

export const clientLogos: ClientLogo[] = [
  {
    slug: "dale-service",
    name: "Дале Сервис",
    image: "/assets/projects/dale-service/logo.png",
    mode: "contain",
  },
  {
    slug: "dale-yug",
    name: "ООО Дале Юг",
    image: "/assets/projects/dale-yug/logo.png",
    mode: "contain",
  },
  {
    slug: "domian",
    name: "Домиан",
    image: "/assets/projects/domian/logo.jpg",
    mode: "contain",
  },
  {
    slug: "haski",
    name: "БК Хаски",
    image: "/assets/projects/haski/logo.jpg",
    mode: "contain",
  },
];
