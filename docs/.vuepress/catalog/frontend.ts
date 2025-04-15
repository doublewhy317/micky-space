import { defineNoteConfig } from "vuepress-theme-plume";

// 前端基础
const fundamental = defineNoteConfig({
  dir: "frontend",
  link: "/frontend/fundamental",
  sidebar: [
    {
      text: "前端基础",
      icon: "/icon/technology/React.svg",
      items: [
        { text: "React 笔记", link: "/frontend/fundamental/7fG9hR2q/" },
      ],
    },
  ],
});


// 前端架构
const architect = defineNoteConfig({
  dir: "frontend",
  link: "/frontend/architect",
  sidebar: [
    // {
    //   text: "css工程化",
    //   icon: "/icon/technology/css.svg",
    //   items: [{ text: "视觉格式化模型", link: "FSkkoLgn/" }],
    // },
    {
      text: "前端工具链",
      icon: "/icon/tools/tools-fn.svg",
      items: [
        { text: "prettier", link: "/frontend/architect/FsaGZl5f/" },
        { text: "ESLint", link: "/frontend/architect/8mHZ3usA/" },
        { text: "Babel", link: "/frontend/architect/qDiyjcfT/" },
        { text: "others", link: "/frontend/architect/Uj7e58rP/" },
      ],
    },
  ],
});
export const frontendCatalog = [fundamental, architect];
