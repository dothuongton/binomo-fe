<template>
  <div
    class="the-navbar__user-meta flex items-center"
    v-if="activeUserInfo.displayName"
  >
    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.displayName }}</p>
      <small>Available</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <div class="con-img ml-3">
        <img
          v-if="activeUserInfo.photoURL"
          key="onlineImg"
          :src="activeUserInfo.photoURL"
          alt="user-img"
          width="40"
          height="40"
          class="rounded-full shadow-md cursor-pointer block"
        />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="showChangePass"
          >
            <feather-icon icon="LockIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Change Password </span>
          </li>
          <!-- @click="$router.push('/login/profile').catch(() => {})"
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})">
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})">
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li>-->

          <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout"
          >
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Log out </span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>

    <vs-prompt title="" :active.sync="popupChangPass" :buttons-hidden="true">
      <div class="vx-row">
        <div class="vx-col w-full mb-base">
          <div class="centerx labelx mb-4">
            <vs-input class="w-full" label="New password" v-model="newpass" />
          </div>
          <div class="centerx labelx mb-4">
            <vs-input
              class="w-full"
              label="Enter a new password"
              v-model="reNewPass"
            />
          </div>
        </div>
        <vs-button
          type="filled"
          @click.prevent="changPass()"
          class="mt-5 m-auto"
          >Agree</vs-button
        >
      </div>
    </vs-prompt>
  </div>
</template>

<script>
//import firebase from 'firebase/app'
//import 'firebase/auth'

import AuthenticationService from "@/services/AuthenticationService";

export default {
  components: {},

  data() {
    return {
      popupChangPass: false,
      newpass: "",
      reNewPass: "",
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  methods: {
    showChangePass() {
      this.popupChangPass = true;
    },
    changPass() {
      if (this.newpass == "" || this.reNewPass == "") {
        return this.$vs.notify({
          text: "Các trường không được rỗng!",
          color: "warning",
          iconPack: "feather",
          icon: "icon-check",
        });
      }

      let obj = {
        pass: this.newpass,
      };

      this.popupChangPass = false;

      AuthenticationService.changePassAdmin(obj).then((res) => {
        let d = res.data;

        if (!d.success) {
          localStorage.removeItem("token");
          this.$router.push("/login/login").catch(() => {});
        } else {
          localStorage.removeItem("token");
          this.$router.push("/login/login").catch(() => {});
          return this.$vs.notify({
            text: "Thay đổi mật khẩu thành công",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        }
      });
    },

    logout() {
      // // if user is logged in via auth0
      // if (this.$auth.profile) this.$auth.logOut();

      // // if user is logged in via firebase
      // const firebaseCurrentUser = firebase.auth().currentUser

      // if (firebaseCurrentUser) {
      //     firebase.auth().signOut().then(() => {
      //         this.$router.push('/login/login').catch(() => {})
      //     })
      // }
      // // If JWT login
      // if(localStorage.getItem("accessToken")) {
      //   localStorage.removeItem("accessToken")
      //   this.$router.push('/login/login').catch(() => {})
      // }

      // // Change role on logout. Same value as initialRole of acj.js
      // this.$acl.change('admin')
      // localStorage.removeItem('userInfo')
      localStorage.removeItem("token");

      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push("/login/login").catch(() => {});
    },
  },
};
</script>
