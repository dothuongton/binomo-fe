<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  Item Name:
  Author: Ares DN
  Author URL:
========================================================================================== -->

<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-12 flex items-center justify-between px-20">
      <h4 class="text-3xl font-normal">{{$t("PROFILE")}}</h4>
      <feather-icon
        icon="XIcon"
        @click.stop="isSidebarActiveLocal = false"
        class="cursor-pointer"
      ></feather-icon>
    </div>

    <!-- <vs-divider class="mb-0"></vs-divider> -->

    <VuePerfectScrollbar
      style="height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 10px)"
      class="scroll-area--data-list-add-new"
    >
      <div class="p-16 pt-12">
        <div class="vx-vx-row mb-3">
          <div class="vx-col w-full">
            <div class="flex flex-wrap items-center mb-base avatar">
              <vs-avatar
                v-if="!avatar"
                :src="require('@/assets/images/avatar/df.jpg')"
                size="112px"
                class="mr-10"
              />
<!--              <vs-avatar v-else-if="url_avatar!=''" :src="url_avatar" size="80px" class="mr-4" />-->
              <vs-avatar
                v-else-if="!!avatar"
                :src="`${dm}api/auth/me/photo/${avatar}`"
                size="80px"
                class="mr-10"
                :alt="avatar"
              />
<!--              <img v-if="!!avatar" src="https://worldtradeib.com/api/auth/me/photo/f652b1b71d720aa2afe4d4fb0202a726.png" alt="">-->
<!--              {{`${dm}api/auth/me/photo/${avatar}`}}-->
              <div>
                <input
                  type="file"
                  class="hidden"
                  name="image"
                  ref="update_avatar_input"
                  @change="update_avatar($event.target.files)"
                  accept="image/png, image/jpg, image/jpeg"
                />
                <button
                  class="mr-4 btn-change-av"
                  @click="$refs.update_avatar_input.click()"
                >
                  {{$t("Change avatar")}}
                </button>
              </div>
            </div>
            <!--<div class="flex items-start flex-col sm:flex-vx-row">

                <div>
                  <p class="text-lg font-medium mb-2 mt-4 sm:mt-0"></p>
                  <input type="file" class="hidden" ref="update_avatar_input" accept="image/*">

                  <vs-button class="mt-4 mr-4 mb-4">Thay đổi</vs-button>
                  <p>Mã bảo mật: {{ num_secury }}
                  </p>
                  <span class="italic" style="font-size: 10px;">Vui lòng giữ mã này an toàn để khôi phục mật khẩu</span>
                  <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button>
                </div>
              </div>-->
          </div>
        </div>

        <div class="flex items-center px-16 mb-8">
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 14.3884C30 6.44524 23.28 0 15 0C6.72 0 0 6.44524 0 14.3884C0 18.7632 2.07 22.706 5.31 25.3525C5.34 25.3813 5.37 25.3813 5.37 25.4101C5.64 25.6117 5.91 25.8134 6.21 26.015C6.36 26.1014 6.48 26.2149 6.63 26.3301C9.10888 27.9438 12.0351 28.8062 15.03 28.8056C18.0249 28.8062 20.9511 27.9438 23.43 26.3301C23.58 26.2437 23.7 26.1302 23.85 26.042C24.12 25.8422 24.42 25.6405 24.69 25.4389C24.72 25.4101 24.75 25.4101 24.75 25.3813C27.93 22.7042 30 18.7632 30 14.3884ZM15 26.9926C12.18 26.9926 9.6 26.1284 7.47 24.69C7.5 24.4595 7.56 24.2309 7.62 24.0004C7.79876 23.3759 8.06094 22.7762 8.4 22.2163C8.73 21.669 9.12 21.1793 9.6 20.7472C10.05 20.3151 10.59 19.9136 11.13 19.5968C11.7 19.2799 12.3 19.0495 12.96 18.8766C13.6251 18.7045 14.3111 18.6179 15 18.6192C17.045 18.6053 19.0148 19.3585 20.49 20.7184C21.18 21.3809 21.72 22.1587 22.11 23.0498C22.32 23.5683 22.47 24.1157 22.56 24.69C20.346 26.1845 17.7064 26.9885 15 26.9926ZM10.41 13.67C10.1457 13.0889 10.0127 12.4606 10.02 11.8265C10.02 11.1946 10.14 10.5608 10.41 9.98473C10.68 9.40861 11.04 8.89191 11.49 8.45983C11.94 8.02775 12.48 7.68388 13.08 7.42463C13.68 7.16538 14.34 7.05016 15 7.05016C15.69 7.05016 16.32 7.16538 16.92 7.42463C17.52 7.68388 18.06 8.02955 18.51 8.45983C18.96 8.89191 19.32 9.41041 19.59 9.98473C19.86 10.5608 19.98 11.1946 19.98 11.8265C19.98 12.489 19.86 13.0939 19.59 13.6682C19.3294 14.2358 18.9635 14.7531 18.51 15.1949C18.0497 15.6297 17.511 15.9805 16.92 16.2301C15.6803 16.7193 14.2897 16.7193 13.05 16.2301C12.459 15.9805 11.9203 15.6297 11.46 15.1949C11.0059 14.7596 10.6487 14.2402 10.41 13.6682V13.67ZM24.33 23.2227C24.33 23.1651 24.3 23.1363 24.3 23.0787C24.0049 22.1774 23.5701 21.3241 23.01 20.5474C22.4494 19.7649 21.7605 19.0748 20.97 18.504C20.3663 18.0679 19.7119 17.7006 19.02 17.4094C19.3348 17.21 19.6264 16.9788 19.89 16.7198C20.3373 16.2958 20.7301 15.822 21.06 15.3084C21.7244 14.2602 22.0676 13.0534 22.05 11.8265C22.0593 10.9182 21.8755 10.0177 21.51 9.17997C21.1491 8.37277 20.6296 7.63987 19.98 7.02135C19.3313 6.40929 18.5679 5.9206 17.73 5.58108C16.8561 5.23072 15.917 5.05491 14.97 5.06438C14.0229 5.05548 13.0838 5.2319 12.21 5.58288C11.3649 5.92168 10.5996 6.42073 9.96 7.05016C9.32258 7.67234 8.81361 8.40478 8.46 9.20878C8.09447 10.0465 7.91072 10.947 7.92 11.8553C7.92 12.489 8.01 13.0939 8.19 13.6682C8.37 14.2732 8.61 14.8205 8.94 15.3372C9.24 15.8557 9.66 16.3165 10.11 16.7486C10.38 17.0079 10.68 17.2365 11.01 17.4382C10.3159 17.7371 9.66135 18.1142 9.06 18.5616C8.28 19.1377 7.59 19.8272 7.02 20.5762C6.45424 21.3497 6.0189 22.2039 5.73 23.1075C5.7 23.1651 5.7 23.2227 5.7 23.2515C3.33 20.9488 1.86 17.8414 1.86 14.3884C1.86 7.45344 7.77 1.78414 15 1.78414C22.23 1.78414 28.14 7.45344 28.14 14.3884C28.1361 17.7009 26.7662 20.8772 24.33 23.2227Z"
              fill="white"
            />
          </svg>
          <div class="text-2xl ml-2 text-white">{{$t("Personal information")}}</div>
        </div>

        <div class="vx-vx-row px-16">
          <div class="vx-col w-full">
            <vs-input
              label="Email"
              v-model="email"
              class="mt-2 w-full"
              disabled="disabled"
            />
          </div>

          <div class="vx-col w-full">
            <vs-input
              :label="$t('Username')"
              v-model="nickName"
              class="mt-8 w-full"
              disabled="disabled"
            />
          </div>

          <!-- <div class="vx-col lg:w-1/2 w-full">
                  <vs-input label="Họ" maxlength="8" v-model="frist_n" class="mt-2 w-full" />
              </div>

              <div class="vx-col lg:w-1/2 w-full">
                  <vs-input label="Tên" maxlength="8" v-model="last_n" class="mt-2 w-full" />

              </div> -->
        </div>
      </div>

      <div class="px-32 mb-5">
        <div class="mb-8">
          <div class="text-2xl ml-2 text-white">{{$t("Account verification")}}</div>
        </div>
        <span class="d-flex mt-5" style="font-size: 12px">
          {{$t('To ensure the safety of your assets, we need to verify your identity count. Please fill in the information correctly, when the identity verification is complete The information will no longer be editable.')}}
        </span>
        <p class="clearfix"></p>
        <div
          v-if="getDataJson.verify == 0"
          class="mb-2 mt-8 float-right btn-warning"
          @click.stop="showHoSoSetting()"
        >
          {{$t('Confirmation')}}
        </div>
        <span v-else-if="getDataJson.verify == 2" class="lightyellow italic"
          >* {{$t('Account is under review')}}</span
        >
<!--        <span v-else class="green italic">* {{$t('Verified account')}}</span>-->
      </div>

      <p class="clearfix"></p>
      <div class="px-32">
        <div class="mb-3 flex items-center" style="font-weight: blod">
          <svg
            width="30"
            height="33"
            viewBox="0 0 30 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29572 3.27149C7.25484 3.81156 5.22782 4.39881 3.21644 5.03274C3.03277 5.08986 2.86951 5.19537 2.74524 5.33724C2.62098 5.47911 2.54071 5.65164 2.51358 5.83518C1.32644 14.3884 4.06929 20.6289 7.34143 24.7398C8.72682 26.4978 10.3787 28.0465 12.2421 29.3343C12.9836 29.8364 13.6393 30.1985 14.1557 30.431C14.4129 30.5483 14.6229 30.6265 14.7836 30.6738C14.8539 30.6975 14.9263 30.7147 15 30.7252C15.0728 30.7139 15.1445 30.6967 15.2143 30.6738C15.3771 30.6265 15.5871 30.5483 15.8443 30.431C16.3586 30.1985 17.0164 29.8343 17.7579 29.3343C19.6212 28.0464 21.2732 26.4978 22.6586 24.7398C25.9307 20.6309 28.6736 14.3884 27.4864 5.83518C27.4595 5.65156 27.3794 5.47892 27.2551 5.33701C27.1308 5.1951 26.9674 5.08965 26.7836 5.03274C25.3886 4.59448 23.0336 3.88052 20.7043 3.27354C18.3257 2.65422 16.1379 2.19539 15 2.19539C13.8643 2.19539 11.6743 2.65422 9.29572 3.27354V3.27149ZM8.72572 1.15222C11.0507 0.545248 13.5214 0 15 0C16.4786 0 18.9493 0.545248 21.2743 1.15222C23.6529 1.76948 26.0507 2.49991 27.4607 2.94228C28.0502 3.12921 28.5729 3.47202 28.9686 3.93134C29.3643 4.39066 29.6171 4.94784 29.6978 5.53889C30.975 14.7505 28.0114 21.5774 24.4157 26.0937C22.8909 28.0257 21.0728 29.727 19.0221 31.1408C18.313 31.6301 17.5618 32.0603 16.7764 32.4268C16.1764 32.6984 15.5314 32.9206 15 32.9206C14.4686 32.9206 13.8257 32.6984 13.2236 32.4268C12.4382 32.0603 11.6869 31.6301 10.9779 31.1408C8.92721 29.727 7.10911 28.0256 5.58429 26.0937C1.98858 21.5774 -0.974988 14.7505 0.302154 5.53889C0.382913 4.94784 0.635675 4.39066 1.0314 3.93134C1.42713 3.47202 1.94978 3.12921 2.5393 2.94228C4.58613 2.29788 6.64888 1.70102 8.72572 1.15222Z"
              fill="white"
            />
            <path
              d="M18.2142 13.3742C18.2146 14.0127 18.0087 14.6356 17.6249 15.1571C17.2411 15.6785 16.6983 16.0728 16.0714 16.2857L16.8964 20.3802C16.9264 20.5291 16.9217 20.6825 16.8827 20.8295C16.8437 20.9765 16.7714 21.1134 16.6708 21.2304C16.5703 21.3474 16.444 21.4416 16.3011 21.5063C16.1582 21.5709 16.0022 21.6044 15.8442 21.6044H14.1556C13.9978 21.6041 13.8421 21.5704 13.6994 21.5056C13.5568 21.4408 13.4308 21.3466 13.3305 21.2296C13.2302 21.1127 13.158 20.9759 13.1191 20.829C13.0803 20.6822 13.0757 20.5289 13.1056 20.3802L13.9285 16.2857C13.373 16.0971 12.8821 15.7655 12.5096 15.3272C12.1371 14.8889 11.8972 14.3606 11.8162 13.8003C11.7352 13.2399 11.8161 12.6689 12.0502 12.1497C12.2843 11.6305 12.6625 11.1831 13.1435 10.8564C13.6245 10.5296 14.1898 10.3361 14.7776 10.2969C15.3654 10.2578 15.953 10.3746 16.4764 10.6344C16.9998 10.8943 17.4387 11.2873 17.7452 11.7705C18.0516 12.2537 18.2139 12.8085 18.2142 13.3742Z"
              fill="white"
            />
          </svg>
          <div class="text-2xl ml-2" style="color: #fff">{{$t("Security")}}</div>
        </div>
        <span class="d-flex" style="font-size: 12px; margin-bottom: 5px">
          {{$t('Do you want to change your password? Click the button below to change.')}}
        </span>
        <p class="clearfix"></p>
        <div
          class="btn-warning mb-2 mt-8 float-right"
          @click="popupActiveChangePass = true"
        >
          {{$t("Change")}}
        </div>
        <p class="clearfix"></p>
        <span class="d-flex" style="font-size: 12px; margin-bottom: 5px"
          >{{$t('Required to enable 2FA for withdrawals or security updates.')}}</span
        >
        <p class="clearfix"></p>
        <div class="mt-1 float-right">
          <div class="mb-2 text-white font-bold">On 2FA</div>
          <vs-switch type="checkbox"
            color="success"
            v-model="swi2Fa"
            @click.stop="on2FA"
            icon-pack="feather"
            vs-icon="icon-check"
          />

        </div>
      </div>

      <vs-popup
        background-color="rgba(0,0,0,.6)"
        :background-color-popup="colorxChangePass"
        class=""
        title="Change password"
        :active.sync="popupActiveChangePass"
      >
        <div class="vx-vx-row">
          <div class="vx-col w-full">
            <vs-input
              type="password"
              label="Old password"
              maxlength="20"
              v-model="passOld"
              name="passOld"
              class="mt-2 w-full"
            />
          </div>

          <div class="vx-col w-full">
            <vs-input
              type="password"
              label="New password"
              maxlength="20"
              v-model="passNew"
              name="passNew"
              class="mt-2 w-full"
            />
          </div>

          <div class="vx-col w-full">
            <vs-input
              type="password"
              label="Enter a new password"
              maxlength="20"
              v-model="passRenew"
              name="passReNew"
              class="mt-2 w-full"
            />
          </div>
          <div class="flex items-end gap-3">
            <div class="relative w-5/6">
              <vs-input
                class="w-full"
                label="Code Active In Gmail"
                v-model="codeActive"
              />
              <!--<span class="paste">Paste</span>-->
            </div>
            <div class="w-1/6">
              <!-- Không nhận được mail: <a href="https://t.me/ares_idefibo_bot" target="_blank">Click</a> -->
              <vs-button
                id="button-with-loading-send"
                class="vs-con-loading__container"
                :disabled="disSendCode"
                color="success"
                type="filled"
                @click.stop="sendCodeSecure()"
                >{{ ssDownSend }}</vs-button
              >
            </div>
          </div>

          <div class="vx-col w-full mt-5">
            <small class="red italic" v-if="!getDataJson.c2fa"
              >* {{$t('You must enable 2FA to tune in')}}</small
            >
            <vs-button
              v-else
              color="success"
              type="border"
              :disabled="disableChangePass"
              @click="ChangeNewPass()"
              >{{$t('Agree')}}</vs-button
            >
          </div>
        </div>
      </vs-popup>

      <ho-so-setting
        :isSidebarActive="SidebarHSSetting"
        @closeSidebar="toggleDataSidebar"
      />

      <vs-prompt
        title="Confirm Google"
        @close="closeGG2FA"
        @closeModal="closeGG2FA"
        :active="popupActive2FA"
        :buttons-hidden="true"
      >
        <google-auth />
      </vs-prompt>
    </VuePerfectScrollbar>
    <!--<div class="flex flex-wrap items-center p-6" slot="footer">
        <vs-button class="mt-5 w-full" color="danger" type="border" icon-pack="feather" icon="icon-log-out" @click="logOutUser">Đăng xuất</vs-button>
    </div>-->
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import HoSoSetting from "@/pages/trade/slidebar/HoSoSetting.vue";
import AuthenticationService from "@/services/AuthenticationService";
import getData from "@/pages/trade/navbar/components/data.json";
import GoogleAuth from "@/pages/trade/slidebar/2FAGoogle";
import config from "@/config.json";
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
import { get } from "https";

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    VuePerfectScrollbar,
    HoSoSetting,
    GoogleAuth,
  },
  watch: {
    isSidebarActive(val) {
      if (!val) return;
      if (Object.entries(this.data).length === 0) {
        //this.initValues()
        this.$validator.reset();
      } else {
        let { token } = JSON.parse(JSON.stringify(this.data));
        this.token = token;
        //this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    },
  },
  data() {
    return {
      getDataJson: getData,
      dm: config.domain,
      disableChangePass: false,
      passOld: "",
      passNew: "",
      passRenew: "",
      avatar: "df.jpg",
      url_avatar: "",
      nickName: "",
      email: "",
      frist_n: "",
      last_n: "",
      swi2Fa: false,
      num_secury: 0,
      colorxChangePass: "#def1d1",
      popupActiveChangePass: false,
      // Data Sidebar
      SidebarHSSetting: false,
      sidebarDataSetting: {},
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
      codeActive: "",
      ssDownSend: "Send",
      disSendCode: false,
    };
  },
  //   filters: {
  //     currencydecimal (val) {
  //       if(val == 'BTC') return val.toFixed(6)
  //       if(val == 'ETH') return val.toFixed(4)
  //       return val.toFixed(2)swi2Fa
  //     }
  //   },
  computed: {
    ...mapGetters("tab", { popupActive2FA: "getPopupActive2FA" }),
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          // this.$validator.reset()
          // this.initValues()
        }
      },
    },

  },
  mounted() {},


  methods: {
    ...mapMutations("tab", { setPopupActive2FA: "SET_POPUP_ACTIVE_2FA" }),
    closeGG2FA() {
      this.swi2Fa = !!getData.c2fa;
      this.setPopupActive2FA(false);
      AuthenticationService.getInfoUser().then(res=>{
        res.data.fa2 = this.swi2Fa
      })
    },

    showHoSoSetting() {
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.SidebarHSSetting = val;
    },
    sendCodeSecure() {
      this.disSendCode = true;

      this.$vs.loading({
        //background: this.backgroundLoading,
        color: this.colorLoading,
        container: ".vs-con-loading__container",
        scale: 0.45,
      });
      let giay = 60;
      let countD = setInterval(() => {
        this.ssDownSend = giay + "s";
        if (giay == 0) {
          giay = 60;
          this.disSendCode = false;
          this.$vs.loading.close("#button-with-loading > .con-vs-loading");
          this.ssDownSend = "Send";
          clearInterval(countD);
        }
        giay--;
      }, 1000);
      this.Send2FACode();
      return;
    },

    Send2FACode() {
      AuthenticationService.sendGG2FA();
      return this.$vs.notify({
        text: "Verification code sent.",
        iconPack: "feather",
        icon: "icon-check",
        position: "top-right",
        color: "success",
      });
    },
    logOutUser() {
      localStorage.removeItem("tokenUser");
      localStorage.removeItem("INFO");
      getData.Notify = 0;
      localStorage.removeItem("stateOpen");

      window.location.href = window.location.origin + "/login";
    },

    ChangeNewPass() {
      this.disableChangePass = true;

      if (this.passOld == "" || this.passNew == "" || this.passRenew == "") {
        return this.$vs.notify({
          text: "Password cannot be empty.",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
          position: "top-right",
        });
      }

      if (this.passNew != this.passRenew) {
        return this.$vs.notify({
          text: "Your new password does not match.",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
          position: "top-right",
        });
      }
      if (this.codeActive == "") {
        return this.$vs.notify({
          text: "Haven't entered the secure code.",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
          position: "top-right",
        });
      }

      let obj = {
        email: this.email,
        passOld: this.passOld,
        password: this.passNew,
        code_secure: this.codeActive,
      };

      AuthenticationService.changePassword2(obj).then((res) => {
        this.disableChangePass = false;
        if (res.data.success == 1) {
          this.popupActiveChangePass = false;
          return this.$vs.notify({
            text: "Password has been changed successfully.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "success",
          });
        } else if (res.data.success == 0) {
          return this.$vs.notify({
            text: "The old password is incorrect.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        } else if (res.data.success == 3) {
          return this.$vs.notify({
            text: "Password change failed.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        }
      });
    },

    on2FA() {
      this.swi2Fa ? (this.swi2Fa = false) : (this.swi2Fa = true);
      // bật 2Fa
      this.setPopupActive2FA(true);
    },

    async update_avatar(file) {
      // evt.preventDefault()
      this.urlPassFront = URL.createObjectURL(file[0]);

      const formData = new FormData();
      formData.append("image", file[0]);
      formData.append("nick", getData.displayName);

      AuthenticationService.uploadAvatar(formData).then((res) => {
        if (res.data.success) {
          return this.$vs.notify({
            text: "Ảnh đại diện thay đổi thành công.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "success",
          });
        }
      });
    },
  },

  created() {
    AuthenticationService.getInfoUser().then(res=>{
      this.swi2Fa = res.data.data.fa2
    })
    this.nickName = getData.displayName;
    this.avatar = getData.profile_image;
    this.email = getData.email;
    this.frist_n = getData.first_name;
    this.last_n = getData.last_name;

    this.num_secury = getData.num_secu;
    let that = this;

    document.addEventListener('keyup', function (evt) {
      if (evt.keyCode === 27) {
        that.isSidebarActiveLocal = false
      }
    });
  },
};
</script>

<style lang="scss" scoped>

.pro-c-avatar__content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.pro-c-avatar_size_extra-large .pro-c-avatar__placeholder {
  padding: 1rem;
}
.pro-c-avatar__placeholder {
  fill: currentColor;
  box-sizing: border-box;
  height: 100%;
  padding: 0.5rem;
  width: 100%;
}
.vs-sidebar--background {
  background: rgba(0, 0, 0, 0.5);
}
.theme-dark .vs-sidebar {
  background-color: #000000;
}
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 678px;
    max-width: 100vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
.btn-change-av {
  padding: 14px 36px;
  border-radius: 8px;
  border: 1px solid #acacac;
  color: #fff;
  font-size: 20px;
  background: transparent;
  font-weight: 400;
  cursor: pointer;
}
.btn-warning {
  padding: 14px 22px;
  border-radius: 8px;
  border: 1px solid #eec40d;
  color: #eec40d;
  font-size: 12px;
  background: transparent;
  font-weight: 400;
  cursor: pointer;
}
</style>

<style lang="scss">
.avatar img {
  object-fit: cover;
}

.theme-dark .con-vs-dialog .vs-dialog input,
.theme-dark .con-vs-dialog .vs-dialog .vs-con-textarea {
  background: transparent;
}
.vs-dialog {
  max-width: 600px !important;
  margin-top: 10vh;
  overflow-y: auto;
  @media screen and (max-width: 600px){
    margin-top: 45vh!important;
  }

}
[dir] .theme-dark .con-vs-dialog .vs-dialog{
  overflow: hidden!important;
}



.con-vs-dialog {
  overflow-y: auto;
  z-index: 99999;
}
[dir] .theme-dark .vs-sidebar {
  background-color: #1e1e1e;
}
.vuesax-app-is-ltr .vs-input--label {
  font-size: 16px;
  color: #ffffff;
}
.vs-con-input-label .vs-con-input {
  margin-top: 18px;
  //padding-left: 10px;
}

[dir] .theme-dark .add-new-data-sidebar input {
  height: 50px;
  background-color: #4d4d4d;
  border-radius: 5px;
}
[dir] .vs-con-input .vs-inputx{
  border: 1px solid rgba(255, 255, 255, 0.2)!important;
     }
</style>
