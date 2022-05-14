<template>
  <div class="flex justify-between">
    <div v-for="(lang, index) in langs" :key="index">
      <a
        :href="getRedirectLink(lang)"
        class="text-black no-underline"
        :class="{
          'text-blue font-bold': currentLang == lang,
          'pointer-events-none': currentLang == lang,
        }"
        @click="rememberLanguage(lang)"
        >{{ lang }}</a
      >
      <span v-if="index !== langs.length - 1">&nbsp;|&nbsp;</span>
    </div>
  </div>
</template>

<script>
import configs from "../configs/app.json";

export default {
  name: "LangSwitcher",
  data() {
    return {
      langs: configs.available_languages,
      currentLang: configs.available_languages[0],
      getRedirectLink: () => {},
    };
  },
  mounted() {
    this.determineLang();

    this.getRedirectLink = this.linkRedirector;
  },
  methods: {
    linkRedirector(lang) {
      let pathname = window.location.pathname;

      pathname = pathname.split("/");
      pathname[1] = lang;
      return pathname.join("/");
    },
    determineLang() {
      let paths = window.location.pathname.split("/");

      if (!configs.available_languages.includes(paths[1])) {
        this.currentLang = "en";
        return;
      }

      this.currentLang = paths[1];
    },
    rememberLanguage(lang) {
      window.localStorage.setItem("chosen_lang", lang);
    },
  },
};
</script>

<style>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
