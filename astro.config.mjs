import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import turbolinks from "@astrojs/turbolinks";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.elanode.com",
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [vue(), tailwind(), sitemap(), turbolinks()],
});
