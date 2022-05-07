<template>
  <div>
    <select
      name="langs"
      id="langs"
      v-model="currentLang"
      @change="redirectLanguage()"
    >
      <option
        v-for="lang in langs"
        :value="lang"
        :selected="currentLang == lang"
      >
        {{ lang }}
      </option>
    </select>
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
    };
  },
  mounted() {
    this.determineLang();
  },
  methods: {
    redirectLanguage() {
      let pathname = window.location.pathname;

      pathname = pathname.split("/");
      pathname[1] = this.currentLang;
      window.location = pathname.join("/");
    },
    determineLang() {
      let paths = window.location.pathname.split("/");

      if (!configs.available_languages.includes(paths[1])) {
        this.currentLang = "en";
        return;
      }

      this.currentLang = paths[1];
    },
  },
};
</script>

<style></style>
