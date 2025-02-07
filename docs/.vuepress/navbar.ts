import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  {
    text: "前端",
    items: [
      {
        text: "前端架构",
        icon: "/icon/comm/pen.svg",
        link: "/frontend/architect/3fG7hK9p/",
      },
    ],
  },
  // { text: "标签", link: "/blog/tags/" },
  // { text: "归档", link: "/blog/archives/" },
  {
    text: "笔记",
    items: [
      {
        text: "随笔",
        icon: "/icon/comm/pen.svg",
        link: "/record/notebook/1elrsik1/",
      },
      {
        text: "知识碎片",
        icon: "/icon/comm/knowledge.svg",
        link: "/record/fragment/mph76ljp/",
      },
      {
        text: "面试题",
        icon: "/icon/comm/interview.svg",
        link: "/record/interviewTopic/im1e12ti/",
      },
      {
        text: "备忘录",
        icon: "/icon/comm/memo.svg",
        link: "/record/memo/0jg3eb43/",
      },
      {
        text: "工具",
        icon: "/icon/tools/tools-fn.svg",
        link: "/record/utilityFunc/iodlr0ut/",
      },
    ],
  },
  {
    text: "收藏夹",
    items: [
      {
        text: "技术文档",
        icon: "/icon/comm/technology.svg",
        items: [
          {
            text: "Vue.js",
            icon: "/icon/technology/Vue.svg",
            link: "https://cn.vuejs.org/guide/introduction.html",
          },
          {
            text: "React",
            icon: "/icon/technology/React.svg",
            link: "https://react.docschina.org/learn",
          },
        ],
      },
      {
        text: "学习中心",
        icon: "/icon/comm/knowledge.svg",
        items: [
          {
            text: "渡一基础课目录",
            icon: "/icon/comm/pen.svg",
            link: "https://duyiedu.yuque.com/hghs2q/ybli0a/kgbr16?singleDoc#",
          },
        ],
      },
    ],
  },
]);
