import { defineNoteConfig } from "vuepress-theme-plume";

const notebookNote = defineNoteConfig({
  dir: "record",
  link: "/record/notebook",
  sidebar: [
    {
      text: "2024年",
      icon: "/icon/tools/tools-fn.svg",
      items: [
        { text: "生日快乐", link: "/record/notebook/2024/uxd4da4g/" },
        { text: "日记", link: "/record/notebook/2024/7wcis77b/" },
      ],
    },
  ],
});
const fragmentNote = defineNoteConfig({
  dir: "record",
  link: "/record/fragment",
  sidebar: [
    {
      text: "js",
      icon: "/icon/technology/JavaScript.svg",
      items: [{ text: "js", link: "/record/fragment/js/6hucugpj/" }],
    },
    {
      text: "ts",
      icon: "/icon/technology/TypeScript.svg",
      items: [
        { text: "常见类型", link: "/record/fragment/ts/jb6d7o0u/" },
        { text: "随手记", link: "/record/fragment/ts/ndiq8atb/" },
      ],
    },
  ],
});
const memoNote = defineNoteConfig({
  dir: "record",
  link: "/record/memo",
  sidebar: [
    { text: "备忘录", link: "/record/memo/0jg3eb43/" },
    { text: "租号记录", link: "/record/memo/f6jh127a/" },
  ],
});
const interviewTopicNote = defineNoteConfig({
  dir: "record",
  link: "/record/interviewTopic",
  sidebar: [
    {
      text: "技术相关",
      icon: "/icon/comm/technology.svg",
      items: [
        { text: "Js 面试题", link: "/record/interviewTopic/tech/c5rp0tr1/" },
        { text: "React 面试题", link: "/record/interviewTopic/tech/btkmkqra/" },
      ],
    },
    // {
    //   text: "项目亮点",
    //   icon: "/icon/TypeScript.svg",
    //   items: [
    //     { text: "常见类型", link: "jb6d7o0u/" },
    //     { text: "随手记", link: "ndiq8atb/" },
    //   ],
    // },
  ],
});
const utilityFuncNote = defineNoteConfig({
  dir: "record",
  link: "/record/utilityFunc",
  sidebar: [
    {
      text: "tools",
      icon: "/icon/tools/tools-fn.svg",
      items: [
        { text: "工具函数", link: "/record/utilityFunc/jsFn/mzoijdbo/" },
        { text: "工具函数2", link: "/record/utilityFunc/jsFn/i0q1ukvp/" },
      ],
    },
    {
      text: "css",
      icon: "/icon/technology/css.svg",
      items: [{ text: "视觉格式化模型", link: "/record/utilityFunc/css/5o3uvhmp/" }],
    },
  ],
});
export const recordCatalog = [
  notebookNote,
  fragmentNote,
  memoNote,
  interviewTopicNote,
  utilityFuncNote,
];
