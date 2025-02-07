import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import { notes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "/personal/head.jpg",

  appearance: true,

  profile: {
    avatar: "/personal/head.jpg",
    name: "Micky",
    description: "Micky`s Space",
    circle: true,
    location: "四川 - 成都",
    // organization: '',
  },

  navbar,
  notes,
  social: [{ icon: "github", link: "/" }],
  footer: { message: "我在黄昏中垂钓夕阳，试图拉起我模糊的记忆", copyright: "Copyright © Micky" },
});
