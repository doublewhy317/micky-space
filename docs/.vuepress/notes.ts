import { defineNotesConfig } from "vuepress-theme-plume";
import { recordCatalog } from "./catalog/record";
import { frontendCatalog } from "./catalog/frontend";

export const notes = defineNotesConfig({
  dir: "/notes/",
  link: "/",
  notes: [...recordCatalog, ...frontendCatalog],
});
