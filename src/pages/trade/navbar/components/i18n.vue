<template>
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <span class="cursor-pointer flex items-center i18n-locale">
      <img class="h-4 w-8" :src="i18n_locale_img" :alt="$i18n.locale" />
      <span class="sm:block ml-2">{{ getCurrentLocaleData.lang }}</span>
    </span>
    <vs-dropdown-menu class="w-48 i18n-dropdown vx-navbar-dropdown">
      <!--      <vs-dropdown-item @click="updateLocale('vi')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/vi.png" alt="vi" /> &nbsp;Tiếng Việt</vs-dropdown-item>-->
      <div id="dropdown_language">
        <vs-dropdown-item
        @click="updateLocale(item.code)"
        v-for="item in multiLanguage"
        :key="item.code"
      >
        <Flags :code="item.key" />
        &nbsp;{{ item.label }}</vs-dropdown-item
      >
      </div>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
import Flags from "./Flags";
export default {
  components: { Flags },
  data() {
    return {
      multiLanguage: [
        {
          code: "vi",
          key: "vn",
          label: "Vietnamese",
        },
        {
          code: "en-UK",
          key: "gb",
          label: "English",
        },
        {
          code: "de",
          key: "de",
          label: "German",
        },
        {
          code: "fr",
          key: "fr",
          label: "French",
        },
        {
          code: "en-US",
          key: "us",
          label: "American",
        },
        {
          code: "zh",
          key: "cn",
          label: "Chinese",
        },
        {
          code: "en-AU",
          key: "au",
          label: "Australian",
        },
        {
          code: "ja",
          key: "jp",
          label: "Japanese",
        },
        {
          code: "kr",
          key: "kr",
          label: "Korean",
        },

        {
          code: "en-SG",
          key: "sg",
          label: "Singaporean",
        },
        {
          code: "en-CA",
          key: "ca",
          label: "Canadian",
        },
        {
          code: "mx",
          key: "mx",
          label: "Mexican",
        },
        {
          code: "cz",
          key: "cz",
          label: "Czech",
        },
        {
          code: "ru",
          key: "ru",
          label: "Russian",
        },
        {
          code: "gr ",
          key: "gr",
          label: "Greece",
        },
        {
          code: "	th",
          key: "th",
          label: "Thailand",
        },
        {
          code: "lo",
          key: "la",
          label: "Lao",
        },
        {
          code: "hi",
          key: "in",
          label: "Hindi",
        },
      ],
    };
  },
  computed: {
    i18n_locale_img() {
      const locale = this.$i18n.locale;
      const data = this.multiLanguage.find((item) => item.code == locale);
      return require(`@/assets/images/flags/${data.key}.svg`);
    },
    getCurrentLocaleData() {
      const locale = this.$i18n.locale;
      const data = this.multiLanguage.find((item) => item.code == locale);
      return { flag: data.key, lang: data.label };
    },
  },
  methods: {
    updateLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem('locale', locale);
    },
  },
};
</script>

<style scoped>
.con-vs-dropdown--menu {
  z-index: 99999;
  -webkit-overflow-scrolling: touch;

}
#dropdown_language{
  height: 300px;
  overflow-y: auto;
  position: relative;
  /* background-color: red; */
}
</style>
