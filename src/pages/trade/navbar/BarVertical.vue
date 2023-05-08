<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="relative">
    <div class="vx-navbar-wrapper" :class="classObj">
      <vs-navbar
        class="vx-navbar navbar-custom navbar-skelton xl:px-20 xl:mt-0 md:mt-3"
        :color="navbarColorLocal"
        :class="textColor"
      >
        <!-- SM - OPEN SIDEBAR BUTTON -->
        <!-- <feather-icon class="sm:inline-flex xl:hidden cursor-pointer p-2" icon="MenuIcon" @click.stop="showSidebar" /> -->
        <svg
          @click.stop="showSidebar"
          class="xl:hidden ml-5 cursor-pointer"
          data-v-b495ff56=""
          xmlns="http://www.w3.org/2000/svg"
          width="23.944"
          height="19.953"
          viewBox="0 0 23.944 19.953"
        >
          <g data-v-b495ff56="" id="menu-4" transform="translate(0 -1)">
            <path
              data-v-b495ff56=""
              id="Path_29261"
              data-name="Path 29261"
              d="M21.949,5H2A2,2,0,0,0,2,8.991H21.949a2,2,0,1,0,0-3.991Z"
              transform="translate(0 3.981)"
              fill="#fff"
            ></path>
            <path
              data-v-b495ff56=""
              id="Path_29262"
              data-name="Path 29262"
              d="M21.949,1H2A2,2,0,0,0,2,4.991H21.949a2,2,0,1,0,0-3.991Z"
              fill="#fff"
            ></path>
            <path
              data-v-b495ff56=""
              id="Path_29263"
              data-name="Path 29263"
              d="M9.977,9H2a2,2,0,0,0,0,3.991H9.977A2,2,0,1,0,9.977,9Z"
              transform="translate(0 7.963)"
              fill="#fff"
            ></path>
          </g>
        </svg>

        <router-link tag="div" class="vx-logo cursor-pointer" to="/">
          <!-- <logo class="w-full fill-current text-primary" /> -->
          <img
            :src="require('@/assets/images/logo/logo-bitgainz.png')"
            alt=""
            class="new-logo"
          />
        </router-link>
        <SwitchTabMobile v-if="isTouchMobile" />
        <SwitchTab v-else />
        <vs-spacer />
        <!--<span style="font-size: 14px;">Ứng dụng chỉ mục đích nghiên cứu và học hỏi, tôi sẽ không chịu trách nhiệm về nội dung hoặc có ai sử dụng với mục đích khác!</span>-->
        <!-- <i18n /> -->

        <!--<notification-drop-down />-->

        <profile />
      </vs-navbar>
    </div>
  </div>
</template>

<script>
//import I18n                 from "@/layouts/components/navbar/components/I18n.vue"
//import NotificationDropDown from "@/layouts/components/navbar/components/NotificationDropDown.vue"
//import NotificationDropDown from "@/login/user/navbar/NotifiDropDown.vue"
import Profile from "./components/Profile";
import Logo from "./Logo.vue";
import SwitchTab from "@/components/SwitchTab";
import SwitchTabMobile from "@/components/SwitchTabMobile";
export default {
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    SwitchTab,
    SwitchTabMobile,
    //I18n,
    //NotificationDropDown,
    Profile,
    Logo,
  },
  computed: {
    navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff"
        ? "#02142b"
        : this.navbarColor;
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    textColor() {
      return {
        "text-white":
          (this.navbarColor != "#02142b" &&
            this.$store.state.theme === "dark") ||
          (this.navbarColor != "#fff" && this.$store.state.theme !== "dark"),
      };
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth == "default") return "navbar-default";
      else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced";
      else if (this.verticalNavMenuWidth) return "navbar-full";
    },
    isPc() {
      return !this.isMobile;
    },
    isTouchMobile() {
      return window.innerWidth < 800;
    },
  },
  methods: {
    showSidebar() {
      this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
    },
  },
};
</script>
<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
}
.vx-logo {
  width: 95px;
}
.navbar-custom {
  @media (min-width: 1024px) {
    padding: 0 30px;
  }
}
.new-logo {
  width: 120px;
  height: 120px;
  margin-left: -50px;
}
</style>

<style>
@media screen and (max-width: 968px) {
  .vx-logo {
    display: none;
    /*visibility: hidden;
    width: 0px;*/
  }

}
@media only screen and (min-width: 1000px) and (max-width: 1100px) {
  .new-logo{
    width: 90px!important;
    height: 90px!important;
    margin-left: 45px!important;
  }
}
</style>
