import { LuNetwork, LuWorkflow } from "react-icons/lu";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

import type { IconType } from "react-icons";
import type { TechId } from "@/content/types";

// Logo por tecnología en Stack (docs/BLUEPRINT.md §10). Simple Icons cubre casi todo; `cicd` no
// es una marca (usa el icono genérico Lucide `Workflow`) y `aws` no está en Simple Icons (Font
// Awesome sí lo tiene); `grpc` tampoco está en Simple Icons (usa el genérico Lucide `Network`).
// Se pintan en `currentColor`, sin el color oficial de cada marca.
export const techIcons = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  react: SiReact,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  mui: SiMui,
  tailwind: SiTailwindcss,
  shadcnui: SiShadcnui,
  bootstrap: SiBootstrap,
  reactNative: SiReact,
  expo: SiExpo,
  nodejs: SiNodedotjs,
  express: SiExpress,
  nestjs: SiNestjs,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  cicd: LuWorkflow,
  aws: FaAws,
  git: SiGit,
  github: SiGithub,
  gitlab: SiGitlab,
  html: SiHtml5,
  css: SiCss,
  grpc: LuNetwork,
  rabbitmq: SiRabbitmq,
  prisma: SiPrisma,
  socketio: SiSocketdotio,
  nginx: SiNginx,
} as const satisfies Record<TechId, IconType>;
