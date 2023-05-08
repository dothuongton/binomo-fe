<template>
  <div class="box-fix">
    <div
      class="box-authentication"
      :class="{ show: activeSlide }"
      v-if="activeLogin"
    >
      <div
        class="content-authentication bg-primary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <!-- <a href="/" class="logo-login mb-0 router-link-active">BOTrade</a> -->
            <a href="/">
              <img
                class="logo-login md:w-[15%]"
                @click="(activeRegister = !activeRegister), redirectHome()"
                alt=""
                :src="require('@/assets/images/logo/logo-bitgainz.png')"
            /></a>
            <div class="close-page">
              <img
                class="cursor-pointer"
                @keyup.esc ="(activeRegister = !activeRegister), redirectHome()"
                @click="(activeRegister = !activeRegister), redirectHome()"
                alt=""
                :src="require('@/assets/images/landing_v2/icon-close.png')"
              />
              <!-- <feather-icon icon="XIcon" class="cursor-pointer" /> -->
            </div>
          </div>
          <div class="formWapper w-full">
            <div class="loginForm login-acc white mt-0" v-if="!isG2FA">
              <h2 class="lg:mb-5 md:" >{{$t('Sign in to your Account')}}</h2>
              <div class="centerx labelx">
                <div class="mb-3">
                  <label class="label_custom" for="input-bvxi30l9g"
                    >{{$t('Username')}} *</label
                  >
                  <input
                    type="text"
                    class="w-full input-bvxi30l9g"
                    v-model="nickName"
                  />
                </div>
                <div class="mb-3 relative">
                  <label class="label_custom" for="input-bvxi30l9g"
                    >{{$t('Password')}} *</label
                  >
                  <input
                    :type="passTypeLog"
                    class="w-full input-bvxi30l9g"
                    v-model="password"
                  />
                  <feather-icon
                    icon="EyeOffIcon"
                    svgClasses="w-12"
                    :class="{ hidden: !activeL1, 'inline-block': activeL1 }"
                    @click="
                      (activeL1 = false), (activeL2 = true), showPassLogin()
                    "
                    class="viewPass cursor-pointer"
                  />

                  <feather-icon
                    icon="EyeIcon"
                    svgClasses="w-12"
                    :class="{ 'inline-block': activeL2, hidden: !activeL2 }"
                    @click="
                      (activeL1 = true), (activeL2 = false), showPassLogin()
                    "
                    class="viewPass cursor-pointer"
                  />
                </div>

                <div>
                  <router-link
                    to="/forgot-password"
                    class="inline-block float-right cursor-pointer forgot-password"
                    >{{$t('Forgot password')}}?</router-link
                  >
                  <vs-button
                    style="
                      background: #eec40d !important;
                      color: #000 !important;                    "
                    class="w-full btn-login"
                    type="filled"
                    :disabled="!disabledLogin"
                    @click="loginForm"
                    >{{$t('Login')}}</vs-button
                  >
                </div>
              </div>
            </div>
            <div class="loginForm white mt-0" v-else>
              <h2 class="mt5m font-24 white font-bold lg:mb-5 mb-3">
                {{$t('Security verification')}}
              </h2>
              <div class="centerx labelx">
                <div class="mb-3">
                  <vs-input
                    class="w-full"
                    :label="$t('Code Google Authentication')"
                    v-model="G2FACodeEnter"
                  />
                </div>
                <div>
                  <vs-button
                    color="success"
                    class="w-full"
                    type="filled"
                    :disabled="!disabledLogin"
                    @click="loginFormAuthG2FA"
                    >{{ $t('Send') }}</vs-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div slot="footer" class="footer-form">
            <p class="mb-2">
              {{$t('Need an account')}} {{ domain }}?
              <router-link to="/register" class="cursor-pointer"
                >{{$t('Register')}}</router-link
              >
            </p>
            <div class="">
              <span class="text-center"
                >{{$t('Did not receive confirmation email')}}?</span
              >
              <router-link
                to="/register-resend-verify-email"
                class="cursor-pointer"
              >
                {{$t('New confirmation request')}}.</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="box-authentication"
      :class="{ show: activeSlide }"
      v-if="activeRegister"
    >
      <div
        class="content-authentication bg-primary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <!-- <a href="/" class="logo-login mb-0 router-link-active">BoTrade</a> -->
            <a href="/">
              <img
                class="logo-login"
                @click="(activeRegister = !activeRegister), redirectHome()"
                alt=""
                :src="require('@/assets/images/logo/logo-bitgainz.png')"
            /></a>
            <div class="close-page">
              <img
                class="cursor-pointer"
                @click="(activeRegister = !activeRegister), redirectHome()"
                alt=""
                :src="require('@/assets/images/landing_v2/icon-close.png')"
              />
              <!-- <feather-icon
                icon="XIcon"
                @click="(activeRegister = !activeRegister), redirectHome()"
                class="cursor-pointer"
              /> -->
            </div>
          </div>
          <div class="formWapper w-full">
            <div class="regFrom login-acc white mt-0" v-if="!isSubmitReg">
              <h2 class="des-form">{{$t('Create Bitgainz account')}}</h2>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEmReg != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >{{$t('Email Address')}} *</label
                  >
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="emailReg"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgEmReg }}
                  </small>
                </div>

                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgNickName != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >{{$t('Username')}} *</label
                  >
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="nickName"
                    v-validate="'required|min:3|max:20|alpha_dash'"
                    maxlength="20"
                  />

                  <small class="md-error text-danger text-sm">
                    {{ msgNickName }}
                  </small>
                  <span class="md-count float-right text-xs italic"
                    >{{ countNickNameReg }} / 20</span
                  >
                </div>

                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgPassReg != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >{{$t('Password')}} *</label
                  >
                  <input
                    v-validate="'required|min:6|max:20'"
                    maxlength="20"
                    :type="passTypeReg"
                    class="w-full input-bvxi30l9g"
                    v-model="passwordReg"
                  />

                  <feather-icon
                    icon="EyeOffIcon"
                    svgClasses="w-12"
                    :class="{ hidden: !activeE1, 'inline-block': activeE1 }"
                    @click="
                      (activeE1 = false), (activeE2 = true), showPassReg()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <feather-icon
                    icon="EyeIcon"
                    svgClasses="w-12"
                    :class="{ 'inline-block': activeE2, hidden: !activeE2 }"
                    @click="
                      (activeE1 = true), (activeE2 = false), showPassReg()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgPassReg }}
                  </small>
                  <span class="md-count float-right text-xs italic"
                    >{{ countPassReg }} / 20</span
                  >
                </div>

                <div
                  class="mb-5 relative"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >{{$t('Repeat Password')}} *</label
                  >
                  <input
                    type="password"
                    class="w-full input-bvxi30l9g"
                    v-model="repeatPassword"
                    v-validate="'required|min:3|max:20|alpha_dash'"
                    maxlength="20"
                  />

                </div>



<!--                <div-->
<!--                  class="mb-5 relative"-->
<!--                  :class="{ 'md-invalid': msgPhoneReg != '' }"-->
<!--                >-->
<!--                  <label class="label_custom" for="input-bvxi30l9g"-->
<!--                    >{{$t('Phone number')}} *</label-->
<!--                  >-->
<!--                  <input-->
<!--                    type="email"-->
<!--                    class="w-full input-bvxi30l9g"-->
<!--                    v-model="phoneNumber"-->
<!--                    v-validate="'required|min:10|max:10|alpha_dash'"-->
<!--                    maxlength="20"-->
<!--                  />-->
<!--                </div>-->



                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgPhoneReg != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                  >{{$t('Phone number')}} *</label
                  >
                  <input
                    type="number"
                    class="w-full input-bvxi30l9g"
                    v-model="phoneNumber"
                    required
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgPhoneReg }}
                  </small>
                </div>



                <div
                  class="mb-5 relative"
                  :class="{ 'mt-10': msgNickName != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{$t('Referral Code / Promo Code')}}</label
                  >
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="codeRef"
                  />
                </div>

                <div
                  class="mb-5 relative"
                  :class="{ 'mt-10': msgAgeReg != '' }"
                >

                  <div class="flex">
                    <div>
                      <vs-checkbox v-model="checkAge">
                      </vs-checkbox>
                    </div>
                    <div class="mx-auto w-3/4">
                      {{$t('I certify that I am over 18 years of age and that all activities on this website do not violate the laws of the country in which I live. I also accept all related rules and regulations and privacy statement in this application.')}}
                    </div>
                  </div>
                  <small class="md-error text-danger text-sm">
                    {{ msgAgeReg }}
                  </small>


                </div>

                <div>
                  <vs-button
                    style="
                      background: #eec40d !important;
                      color: #000 !important;
                    "
                    class="w-full button-register"
                    type="filled"
                    @click="submitFormReg"
                    >{{$t('Register')}}</vs-button
                  >
                </div>
              </div>
            </div>
            <div v-if="isSubmitReg" class="login-acc">
              <h2 class="mb-6">{{$t('ACTIVE ACCOUNT')}}</h2>
              <!--<p class="colorSecondary">
                              Để được kích hoạt tài khoản: <a :href="`mailto:${emailReg}`" class="colorBlue4">{{ emailReg }}</a><br><br>
                              - B1: Tải ứng dụng Telegram về trên App Store (IOS) hoặc CH Play (Android).<br>
                              - B2: Nếu đã có ứng dụng (Bỏ qua Bước 1) Nhấp vào nút KÍCH HOẠT bên dưới 👇🏻 để mở App Telegram.<br>
                              - B3: Nhấp lệnh start (Bắt đầu) và làm theo hướng dẫn.<br>
                            </p>-->
              <!-- <p class="colorSecondary">
                               Một liên kết xác nhận đã được gửi tới
                                Vui lòng xác nhận email: <a :href="`mailto:${emailReg}`" class="colorBlue4">{{ emailReg }}</a> qua TELEGRAM BOT để kích hoạt tài khoản<a target="_blank" href="https://t.me/ares_idefibo_bot">NHẤP VÀO ĐÂY</a>
                            </p> -->
              <p class="colorSecondary des-confirm-mail">
                {{$t('A confirmation link has been sent to')}}
                <a :href="`mailto:${emailReg}`" class="colorBlue4">{{
                  emailReg
                }}</a>

                {{$t('Please wait a few minutes to receive a confirmation link and activate your account')}} .<br />
                <!-- Nếu không nhận được email xin vui lòng dùng TELEGRAM BOT để kích hoạt tài khoản: <a target="_blank" href="https://t.me/ares_idefibo_bot">Nhấp vào đây</a>-->
              </p>

              <p>
                <!-- <button class="btn btn-resendemail w-full mt-4" @click="openSite">NHẤP VÀO ĐÂY 🤝KÍCH HOẠT🤝</button> -->
                <button
                  id="button-with-loading"
                  class="btn btn-resendemail w-full"
                  :disabled="disSendMail"
                  @click="reSendMail"
                >
                  {{ ssDownSend }}
                </button>
              </p>
              <p class="colorSecondary"></p>
            </div>
          </div>
          <!-- <div slot="footer">
            <p class="color-white mb-2">
              Có tài khoản {{ domain }}?
              <router-link to="/login" class="cursor-pointer">
                Sign in to your Account.</router-link
              >
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div
      class="box-authentication"
      :class="{ show: activeSlide }"
      v-if="activeResendVerifyEmail"
    >
      <div
        class="content-authentication bg-primary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <!-- <a href="/" class="logo-login mb-0 router-link-active">BoTrade</a> -->
            <a href="/">
              <img
                class="logo-login"
                @click="(activeRegister = !activeRegister), redirectHome()"
                alt=""
                :src="require('@/assets/images/logo/logo-bitgainz.png')"
            /></a>
            <div class="close-page">
              <feather-icon
                icon="XIcon"
                @click="
                  (activeResendVerifyEmail = !activeResendVerifyEmail),
                    redirectHome()
                "
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="formWapper w-full">
            <div
              class="login-acc white mt-0"
              :class="{ block: hideTbResend, hidden: !hideTbResend }"
            >
              <h2 class="title-confirm-mail">{{$t('Resend the confirmation email')}}</h2>
              <p class="mb-6 des-confirm-mail">
                {{$t('Please enter your email address to resend the confirmation email.')}}
              </p>
              <div class="centerx labelx">
                <div
                  class="relative"
                  :class="{ 'md-invalid': msgEmailResend != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >{{$t('Email Address')}} *</label
                  >
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="emailResend"
                  />

                  <small class="md-error text-danger text-sm">
                    {{ msgEmailResend }}
                  </small>
                </div>

                <div>
                  <vs-button
                    style="
                      background: #eec40d !important;
                      color: #000 !important;                    "
                    class="w-full btn-send font-bold"
                    type="filled"
                    @click="submitFormResendActive"
                    >{{$t('Resend')}}</vs-button
                  >
                </div>
              </div>
            </div>
            <div
              class="login-acc"
              :class="{ hidden: hideTbResend, block: !hideTbResend }"
            >
              <h2 class="mb-6">{{$t('Confirmation email sent')}}!</h2>
              <p class="des-confirm-mail">
                {{$t('A confirmation link has been sent to your registered email')}}.
              </p>
              <!--<p class="white">
                                Nếu không nhận được email xin vui lòng dùng TELEGRAM BOT để kích hoạt tài khoản: <a target="_blank" href="https://t.me/ares_idefibo_bot">Nhấp vào đây</a>
                            </p> -->
            </div>
          </div>
          <!-- <div slot="footer">
            <p class="color-white-50">
              Đã có tài khoản?
              <router-link to="/login" class="cursor-pointer">
                Sign in to your Account.</router-link
              >
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div
      class="box-authentication"
      :class="{ show: activeSlide }"
      v-if="activeFogotPass"
    >
      <div
        class="content-authentication bg-primary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <!-- <a href="/" class="logo-login mb-0 router-link-active">BoTrade</a> -->
            <a href="/">
              <img
                class="logo-login"
                @click="(activeRegister = !activeRegister), redirectHome()"
                alt=""
                :src="require('@/assets/images/logo/logo-bitgainz.png')"
            /></a>
            <div class="close-page">
              <feather-icon
                icon="XIcon"
                @click="(activeFogotPass = !activeFogotPass), redirectHome()"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="formWapper w-full">
            <div
              class="fotgot-form white mt-0 login-acc"
              :class="{ block: hideTbForgot, hidden: !hideTbForgot }"
            >
              <h2 class="">{{$t('Forgot password')}}</h2>
              <p class="color-white-50 mb-3"></p>
              <div class="centerx labelx">
                <div
                  class="mb-10 relative"
                  :class="{ 'md-invalid': msgEmailForgot != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >Email Address *</label
                  >
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="emailForgot"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgEmailForgot }}
                  </small>
                </div>

                <div>
                  <vs-button
                    color="success"
                    class="w-full btn-login btn-forgot"
                    type="filled"
                    @click="submitFormForgot"
                    >{{$t("Send")}}</vs-button
                  >
                </div>
              </div>
            </div>
            <div :class="{ hidden: hideTbForgot, block: !hideTbForgot }">
              <h2 class="font-bold mb-5 white titleHeader">
                {{$t('New password request successful')}}!
              </h2>
              <p class="white">
                {{$t('A confirmation link has been sent to your email')}}.<br />
                {{$t('Please wait a few minutes to receive the link to reset your password')}}.
              </p>
              <!-- <p class="white">
                                Nếu không nhận được email xin vui lòng dùng TELEGRAM BOT để đặt lại mật khẩu: <a target="_blank" href="https://t.me/ares_idefibo_bot">Nhấp vào đây</a>
                            </p> -->
            </div>
          </div>
          <!-- <div slot="footer">
            <p class="color-white-50">
              Đã có tài khoản?
              <router-link to="/login" class="cursor-pointer">
                Sign in to your Account.</router-link
              >
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div
      class="box-authentication"
      :class="{ show: activeSlide }"
      v-if="activeResetPass"
    >
      <div
        class="content-authentication bg-primary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <!-- <a href="/" class="logo-login mb-0 router-link-active">BoTrade</a> -->
            <a href="/">
              <img
                class="logo-login"
                @click="(activeRegister = !activeRegister), redirectHome()"
                alt=""
                :src="require('@/assets/images/logo/logo-bitgainz.png')"
            /></a>
            <div class="close-page">
              <feather-icon
                icon="XIcon"
                @click="(activeResetPass = !activeResetPass), redirectHome()"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="formWapper w-full">
            <div
              class="fotgot-form white mt-0"
              :class="{ block: hideTbForgot, hidden: !hideTbForgot }"
            >
              <h2 class="mt5m font-24 white font-bold lg:mb-5 mb-5">
                Reset Password
              </h2>
              <p class="color-white-50 mb-3">
                Enter a new password and don't forget it
              </p>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEmReset != '' }"
                >
                  <vs-input
                    type="email"
                    disabled="disabled"
                    class="w-full"
                    label="Email Address *"
                    v-model="emailReset"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgEmReset }}
                  </small>
                </div>
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgPassReset != '' }"
                >
                  <vs-input
                    class="w-full"
                    maxlength="20"
                    :type="passTypeReset"
                    label="Mật khẩu mới *"
                    v-model="passwordReset"
                  />
                  <feather-icon
                    icon="EyeOffIcon"
                    svgClasses="w-12"
                    :class="{ hidden: !activeRs1, 'inline-block': activeRs1 }"
                    @click="
                      (activeRs1 = false), (activeRs2 = true), showPassReset()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <feather-icon
                    icon="EyeIcon"
                    svgClasses="w-12"
                    :class="{ 'inline-block': activeRs2, hidden: !activeRs2 }"
                    @click="
                      (activeRs1 = true), (activeRs2 = false), showPassReset()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgPassReset }}
                  </small>
                  <span class="md-count float-right text-xs italic"
                    >{{ countPassReset }} / 20</span
                  >
                </div>
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgPassReReset != '' }"
                >
                  <vs-input
                    class="w-full"
                    maxlength="20"
                    :type="passTypeReReset"
                    label="Xác nhận mật khẩu *"
                    v-model="passwordReReset"
                  />
                  <feather-icon
                    icon="EyeOffIcon"
                    svgClasses="w-12"
                    :class="{ hidden: !activeRss1, 'inline-block': activeRss1 }"
                    @click="
                      (activeRss1 = false),
                        (activeRss2 = true),
                        showPassReReset()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <feather-icon
                    icon="EyeIcon"
                    svgClasses="w-12"
                    :class="{ 'inline-block': activeRss2, hidden: !activeRss2 }"
                    @click="
                      (activeRss1 = true),
                        (activeRss2 = false),
                        showPassReReset()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgPassReReset }}
                  </small>
                  <span class="md-count float-right text-xs italic"
                    >{{ countPassReReset }} / 20</span
                  >
                </div>
                <!-- <div class="mb-5 relative">
                                    <vs-input class="w-full" maxlength="10" label="Mã 2FA * (Nếu đã bật vui lòng nhập mã 2FA)" v-model="codeReset"/>
                                </div> -->
                <div class="mt-2">
                  <vs-button
                    color="success"
                    class="w-full"
                    type="filled"
                    @click="submitFormResetPass"
                    >Reset Password
                  </vs-button>
                </div>
              </div>
            </div>
            <div :class="{ hidden: hideTbForgot, block: !hideTbForgot }">
              <h2 class="font-bold mb-5 white titleHeader">
                {{$t('New password request successful')}}!
              </h2>
              <p class="white">
                {{$t('A confirmation link has been sent to your email')}}.<br />
                {{$t('Please wait a few minutes to receive the link to reset your password')}}.
              </p>
            </div>
          </div>
          <div slot="footer">
            <p class="color-white-50">
              {{$t('Already have an account')}}?
              <router-link to="/login" class="cursor-pointer">
                {{$t('Sign in to your Account')}}.</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import getData from "@/pages/trade/navbar/components/data.json";
import config from "@/config";

export default {
  data() {
    return {
      checkAge:false,
      repeatPassword:"",
      phoneNumber:"",
      activeSlide: false,
      ssDownSend: "30s",
      disSendMail: false,
      isSubmitReg: false,
      isG2FA: 0,
      hideTbResend: true,
      hideTbForgot: true,
      ldFrom: false,
      activeL1: true,
      activeL2: false,
      activeE1: true,
      activeE2: false,
      activeRs1: true,
      activeRs2: false,
      activeRss1: true,
      activeRss2: false,
      activeLogin: false,
      activeRegister: false,
      activeResendVerifyEmail: false,
      activeFogotPass: false,
      activeResetPass: false,
      passTypeReg: "password",
      passTypeLog: "password",
      passTypeReset: "password",
      passTypeReReset: "password",
      emailResend: "",
      emailForgot: "",
      emailReg: "",
      emailReset: "",
      email: "",
      password: "",
      passwordReg: "",
      passwordReset: "",
      passwordReReset: "",
      codeReset: "",
      codeRef: "",
      nickName: "",
      error: null,
      domain: "",
      msgEmReg: "",
      msgPassReg: "",
      msgPhoneReg:"",
      msgNickName: "",
      msgEmailForgot: "",
      msgEmailResend: "",
      msgEmReset: "",
      msgPassReset: "",
      msgPassReReset: "",
      msgCoSeReset: "",
      msgAgeReg:"",

      saveToken: "",
      G2FACodeEnter: "",
      colorLoading: "#fff",

      config,
    };
  },
  computed: {
    disabledLogin() {
      if (
        this.nickName !== "" &&
        // this.checkReg(this.email) &&
        this.password !== ""
      ) {
        return true;

      }
    },

    countPassReg() {
      return this.passwordReg.length;
    },

    countNickNameReg() {
      return this.nickName.length;
    },

    countPassReset() {
      return this.passwordReset.length;
    },
    countPassReReset() {
      return this.passwordReReset.length;
    },
  },
  watch: {
    $route() {
      let path = this.$router.currentRoute.path;
      this.activeSlide = false;
      // console.log(path)
      if (path == "/login") {
        this.activeLogin = true;
        this.activeRegister = false;
        this.activeFogotPass = false;
        this.activeResendVerifyEmail = false;
        this.slepShowSlide();
      }

      if (path == "/register") {
        this.activeRegister = true;
        this.activeLogin = false;
        this.activeFogotPass = false;
        this.activeResendVerifyEmail = false;
        this.slepShowSlide();
      }

      if (path == "/forgot-password") {
        this.activeFogotPass = true;
        this.activeLogin = false;
        this.activeRegister = false;
        this.activeResendVerifyEmail = false;
        this.slepShowSlide();
      }

      if (path == "/register-resend-verify-email") {
        this.activeResendVerifyEmail = true;
        this.activeLogin = false;
        this.activeRegister = false;
        this.activeFogotPass = false;
        this.slepShowSlide();
      }
    },
  },
  methods: {
    replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, "g"), replace);
    },

    openSite() {
      let e = this.replaceAll(this.emailReg, "@", "ACONG");
      let a = this.replaceAll(e, /\./g, "DOT");
      window.open("https://t.me/ares_idefibo_bot?start=BOREG_" + a);
    },

    slepShowSlide() {
      setTimeout(() => {
        this.activeSlide = true;
      }, 100);
    },

    countDownResendMail() {
      this.$vs.loading({
        //background: this.backgroundLoading,
        color: this.colorLoading,
        container: "#button-with-loading",
        scale: 0.45,
      });
      let giay = 30;
      let countD = setInterval(() => {
        this.ssDownSend = giay + "s";
        this.disSendMail = true;
        if (giay == 0) {
          this.disSendMail = false;
          this.$vs.loading.close("#button-with-loading > .con-vs-loading");
          this.ssDownSend = "Request a new email";
          clearInterval(countD);
        }
        giay--;
      }, 1000);
    },

    reSendMail() {
      this.emailResend = this.emailReg;
      this.submitFormResendActive();
      this.countDownResendMail();
    },

    checkReg(vl) {
      let reg = /\S+@\S+\.\S+/;
      return reg.test(vl);
    },
    showPassLogin() {
      this.passTypeLog = this.passTypeLog === "password" ? "text" : "password";
    },

    showPassReg() {
      this.passTypeReg = this.passTypeReg === "password" ? "text" : "password";
    },

    showPassReset() {
      this.passTypeReset =
        this.passTypeReset === "password" ? "text" : "password";
    },

    showPassReReset() {
      this.passTypeReReset =
        this.passTypeReReset === "password" ? "text" : "password";
    },

    submitFormResetPass() {
      let isActive = true;

      if (this.emailReset === "" || !this.checkReg(this.emailReset)) {
        this.msgEmReset = "Email address is not valid. Please try again.";
        return;
      } else {
        isActive = true;
        this.msgEmReset = "";
      }

      if (this.passwordReset.length < 6 || this.passwordReset.length > 20) {
        this.msgPassReset =
          "Your password must be at least 6 characters and less than 20 characters.";
        return;
      } else {
        isActive = true;
        this.msgPassReset = "";
      }

      if (this.passwordReReset.length < 6 || this.passwordReReset.length > 20) {
        this.msgPassReReset =
          "Your password must be at least 6 characters and less than 20 characters.";
        return;
      } else {
        isActive = true;
        this.msgPassReReset = "";
      }

      if (this.passwordReset != this.passwordReReset) {
        this.msgPassReReset = "Your password does not match.";
        return;
      } else {
        isActive = true;
        this.msgPassReReset = "";
      }

      // if(this.codeReset == ''){
      //     this.msgCoSeReset = 'Mã bảo vệ không được rỗng.'
      //     isActive = false
      // }else{
      //     isActive = true
      //     this.msgCoSeReset = ''
      // }

      if (isActive) {
        this.ldFrom = true;

        let obj = {
          email: this.emailReset,
          password: this.passwordReset,
          //code_secure: this.codeReset
        };

        AuthenticationService.changePassword(obj).then((res) => {
          if (res.data.success == 1) {
            this.$vs.notify({
              text: "Password has been changed successfully.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
            });
            window.location.href = window.location.origin + "/login";
          } else if (res.data.success == 2) {
            this.$vs.notify({
              text: "The 2FA code is incorrect.",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "danger",
            });
          }
        });
      }
    },

    submitFormReg() {
      if (this.emailReg === "" || !this.checkReg(this.emailReg)) {
        this.msgEmReg = "Email address is not valid. Please try again.";
        return;
      } else {
        this.msgEmReg = "";
      }

      if (
        this.passwordReg === "" ||
        this.passwordReg.length < 6 ||
        this.passwordReg.length > 20
      ) {
        this.msgPassReg =
          "Your password must be at least 6 characters and less than 20 characters..";
        return;
      } else {
        this.msgPassReg = "";
      }
      if (
         this.phoneNumber === null || this.phoneNumber === "" ||  this.phoneNumber.length > 10 ||this.phoneNumber.length <10
      ) {
        this.msgPhoneReg =
          "Your phone number must be 10 characters and start with 0 ";
        return;
      } else {
        this.msgPhoneReg = "";
      }
      if(this.checkAge === false){
        this.msgAgeReg = "Please make sure you are 18 years old and press confirm"
      }else{
        this.msgAgeReg = ""
      }


      const regex = /^[a-zA-Z0-9-_]+$/;

      if (
        this.nickName === "" ||
        this.nickName.length < 6 ||
        this.nickName.length > 20 ||
        !regex.test(this.nickName)
      ) {
        this.msgNickName =
          "Nicknames must be between 6 and 20 characters, begin with a letter, and contain no special characters.";
        return;
      } else {
        this.msgNickName = "";
      }

      let isActive = true;

      if (isActive) {
        this.ldFrom = true;

        let obj = {
          email: this.emailReg,
          password: this.passwordReg,
          nick_name: this.nickName,
          upline_id: this.codeRef,
          phone: this.phoneNumber
        };

        //

        AuthenticationService.registerUser(obj).then((res) => {
          this.ldFrom = false;
          if (res.data.success == 1) {

            // this.isSubmitReg = true;
            setTimeout(() => {
              this.countDownResendMail();
            }, 500);

            this.$vs.notify({
              title: "Sign Up Success",
              // text: "We have sent an activation link to your account.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
            });
            this.$router.push('/')
          } else if (res.data.success == 2) {
            this.$vs.notify({
              text: "This email already exists",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "warning",
            });
          } else if (res.data.success == 3) {
            this.$vs.notify({
              text: "This nickname already exists",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "warning",
            });
          }
        });
      }
    },

    submitFormForgot() {
      let isActive = true;

      if (this.emailForgot === "" || !this.checkReg(this.emailForgot)) {
        this.msgEmailForgot = "Email address is not valid. Please try again.";
        isActive = false;
      } else {
        isActive = true;
        this.msgEmailForgot = "";
      }

      if (isActive) {
        this.ldFrom = true;

        let obj = {
          email: this.emailForgot,
        };

        AuthenticationService.forgotPassUser(obj).then((res) => {
          this.ldFrom = false;
          if (res.data.success) {
            this.hideTbForgot = false;
          }
        });
      }
    },

    submitFormResendActive() {
      let isActive = true;

      if (this.emailResend === "" || !this.checkReg(this.emailResend)) {
        this.msgEmailResend = "Email address is not valid. Please try again.";
        isActive = false;
      } else {
        this.msgEmailResend = "";
        isActive = true;
      }

      if (isActive) {
        this.ldFrom = true;

        let obj = {
          email: this.emailResend,
        };
        AuthenticationService.resendConfirUser(obj).then((res) => {
          this.ldFrom = false;
          if (res.data.success) {
            this.hideTbResend = false;
          }
        });
      }
    },

    getInfoLogin() {
      AuthenticationService.getInfoUser().then((res) => {
        if (res.data.success == 1) {
          let dt = res.data.data;

          getData.uid = dt.id;
          getData.email = dt.email;
          getData.profile_image = dt.profile_image;
          getData.displayName = dt.nick_name;
          getData.uidLive = dt.order[1].u_id;
          getData.uidDemo = (dt.order[0] || {}).u_id || 0;
          getData.am_usdt = dt.b;
          getData.vip = dt.vip;
          getData.vip_lv = dt.level_vip;
          getData.pen_commiss = dt.pending_commission;
          getData.ref = dt.ref;
          getData.upid = dt.upid;
          getData.c2fa = dt.fa2;
          getData.id_front = dt.id_front;
          (getData.id_back = dt.id_back), (getData.first_name = dt.first_name);
          getData.last_name = dt.last_name;
          getData.verify = dt.verify;
          getData.num_secu = dt.num_secury;
          getData.country = dt.c;
          getData.so_cmnd = dt.so_cmnd;

          getData.blLive = dt.order[1].balance;
          getData.blDemo = (dt.order[0] || {}).balance || 0;
          getData.balance = dt.balance;

          localStorage.setItem("INFO", JSON.stringify(dt));
          //localStorage.removeItem('isLog')

          this.$router.push("/trading").catch(() => {});
        }
      });
    },

    loginForm() {
      this.ldFrom = true;

      AuthenticationService.loginUser({
        nick_name: this.nickName,
        password: this.password,
      }).then((res) => {
        this.ldFrom = false;
        let g = res.data;
        if (g.success == 1) {
          // this.$vs.notify({
          //     text: 'Đăng nhập thành công.',
          //     iconPack: 'feather',
          //     icon: 'icon-check',
          //     color: 'success'
          // });

          // let gData = d.data;

          // getData.uid= gData.id,
          // getData.email= gData.email,
          // getData.profile_image= gData.profile_image,
          // getData.displayName= gData.nick_name,
          // getData.uidLive= gData.order[1].u_id,
          // getData.uidDemo= gData.order[0].u_id,
          // getData.vip= gData.vip,
          // getData.vip_lv= gData.level_vip,
          // getData.pen_commiss= gData.pending_commission,
          // getData.ref= gData.ref,
          // getData.c2fa= gData.fa2,
          // getData.id_front= gData.id_front,
          // getData.id_back= gData.id_back,
          // getData.first_name= gData.first_name,
          // getData.last_name= gData.last_name,
          // getData.verify= gData.verify,
          // getData.num_secu= gData.num_secury,
          // getData.country= gData.c,
          // getData.blLive = gData.order[1].balance
          // getData.blDemo = gData.order[0].balance
          // getData.balance = gData.balance,
          // getData.mkt = gData.mkt

          if (g.g_2fa) {
            this.isG2FA = g.g_2fa;
            this.saveToken = g.token;
            return;
          }
          localStorage.setItem("tokenUser", g.token);

          this.activeLogin = false;

          this.getInfoLogin();

          //this.$router.push('/user/affiliate/general').catch(() => {})
          //window.location.href = window.location.origin + '/user/affiliate/general';
        } else if (res.data.success == 0) {
          this.$vs.notify({
            text: "Email or password is incorrect. Please re-enter",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        } else if (res.data.success == 3) {
          this.$vs.notify({
            text: "Account not activated yet!",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        }
      });
    },

    loginFormAuthG2FA() {
      let obj = {
        code: this.G2FACodeEnter,
        token: this.saveToken,
      };
      AuthenticationService.loginGG2FA(obj).then((res) => {
        if (res.data.success == 1) {
          localStorage.setItem("tokenUser", this.saveToken);

          this.activeLogin = false;

          this.getInfoLogin();
          //this.$router.push('/trading').catch(() => {})
          //this.$router.push('/user/affiliate/general').catch(() => {})
          //window.location.href = window.location.origin + '/user/affiliate/general';
        } else if (res.data.success == 6) {
          return this.$vs.notify({
            text: "The login code is invalid or has expired.",
            iconPack: "feather",
            icon: "icon-check",
            color: "warning",
          });
        }
      });
    },

    redirectHome() {
      this.activeSlide = false;
      this.$router.push("/");
    },
  },
  created() {
    let path = this.$router.currentRoute.path;

    if (path == "/login") {
      this.activeLogin = true;
      this.slepShowSlide();

      let at = this.$route.query.a;

      if (at != undefined) {
        let obj = {
          token: at,
        };
        AuthenticationService.getTokenActive(obj).then((res) => {
          if (res.data.success) {
            this.$vs.notify({
              text: "Your account has been activated.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
            });
          }
        });
      }
    }
    if (path == "/register") {
      this.activeRegister = true;
      this.slepShowSlide();
      let gr = this.$route.query.r;
      if (gr != undefined) {
        this.codeRef = gr;
      }
    }

    if (path == "/reset-password") {
      this.activeResetPass = true;
      this.slepShowSlide();
      let gr = this.$route.query.e;
      if (gr != undefined) {
        this.emailReset = gr;
      }
    }

    let that = this;

    document.addEventListener('keyup', function (evt) {
      if (evt.keyCode === 27) {
        if(that.activeRegister == true){
          that.activeRegister = false
          that.$router.push("/");
        }
        else if(that.activeLogin == true){
          that.activeLogin = false
          that.$router.push("/");
        }
        else if(that.activeResetPass == true){
          that.activeResetPass = false
          that.$router.push("/");
        }
        else if(that.hideTbResend == true){
          that.hideTbResend = false
          that.$router.push("/");
        }

      }
    });
  },
};
</script>

<style lang="scss">
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>

<style scoped lang="scss">
.color-white {
  color: #fff !important;
  font-size: 14px;
}

.login-acc {
  h2 {
    color: #fff !important;
    font-size: 36px;
    font-weight: 700 !important;
    margin: 52px 0 40px;
    line-height: 1;
    @media only screen and (max-width: 490px) {
      margin: 20px 0 10px;
    }
    @media screen and (max-width: 768px){
      font-size: 24px;
      margin: 10px;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1600px) {
      margin: 20px 20px;
      font-size: 30px;
    }
  }
  .title-confirm-mail {
    margin-bottom: 12px;
  }
  .des-confirm-mail {
    font-size: 18px;
    color: #b1b1b1;
    margin-bottom: 28px;
    a {
      color: #eec40d !important;
      font-size: 18px;
    }
  }
}

.label_custom {
  color: #fff !important;
  font-size: 20px;
  padding: 0 12px;
}

.input-bvxi30l9g {
  margin-top: 0.5rem;
  background-color: transparent !important;
  border: 2px solid #b0b0b0 !important;
  color: #fff !important;
  font-size: 20px !important;
  height: 60px !important;
  line-height: 60px !important;
  border-radius: 10px !important;
  padding-left: 10px;
  &::placeholder {
    color: #6b6f8b !important;
  }
}

.box-fix .box-authentication .bg-primary {
  background-color: #2e2e2e !important;
}

.box-fix .box-authentication .content-authentication {
  position: relative;
  margin-left: auto;
  max-width: 760px;
  height: 100%;
  padding: 2rem;
  -webkit-transform: translateX(760px);
  transform: translateX(760px);
  -webkit-transition: -webkit-transform 0.3s ease 0.3s;
  transition: -webkit-transform 0.3s ease 0.3s;
  transition: transform 0.3s ease 0.3s;
  transition: transform 0.3s ease 0.3s, -webkit-transform 0.3s ease 0.3s;
  overflow-y: auto;
}

.box-fix .box-authentication.show .content-authentication {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.box-fix .box-authentication {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  -webkit-transition: opacity 0.3s ease 0.3s, left 0s ease 0.7s;
  transition: opacity 0.3s ease 0.3s, left 0s ease 0.7s;
  @media  only screen and (min-width: 1200px) and (max-width: 1600px){
    width: 40%!important;
  }
}

.box-fix .box-authentication.show {
  right: 0;
}

/*.box-fix {
    height: 100vh!important;
    overflow: hidden;
}*/

.btn-resendemail {
  padding: 14px !important;
  color: #000;
  font-weight: 700;
  opacity: 1;
  background: #eec40d;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-size: 20px;
}
.formWapper {

  padding: 0 50px;
  @media only screen and (max-width: 490px) {
    padding: 0 10px;
  }
}
.formWapper {
  .button-register {
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    padding: 14px !important;
    margin-top: 40px;
  }
  .forgot-password {
    font-size: 20px;
    color: #fff !important;
    margin: 16px 0 44px;
  }
  .btn-login {
    opacity: 1;
    font-size: 20px;
    border-radius: 10px;
    padding: 14px !important;
    //margin-bottom: 120px;
    margin-bottom: 50px;
    @media only screen and (max-width: 490px) {
      margin-bottom: 40px;
    }
  }
  .btn-send {
    font-size: 20px;
    border-radius: 10px;
    padding: 14px !important;
    margin-top: 40px;
  }
  .btn-forgot {
    color: #000;
    font-weight: bold;
    margin-bottom: 0;
  }
}
.formWapper .md-error {
  display: block !important;
  opacity: 0;
  transform: translate3d(0, -8px, 0);
  left: 7px;
  font-style: italic;
}

.formWapper .md-invalid .md-error {
  opacity: 1;
  transform: translateZ(0);
}
.md-error {
  top: 100%;
  max-width: 335px;
}

.viewPass {
  position: absolute !important;
  right: 20px;
  top: calc(50% + 20px);
  transform: translateY(-50%);
  color: #c7c7c7;
}

.header-sidebar {
  padding: 0 80px;
  @media only screen and (max-width: 490px) {
    padding: 0 20px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1600px) {
    padding: 0px;
  }
}

.logo-login {
  display: block;
  height: auto;
  width: 140px;
}
.close-page {
  position: absolute;
  top: 0;
  right: 38px;
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  z-index: 999;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }
}
.footer-form {
  width: 100%;
  padding: 0 50px;
  font-size: 20px;
  color: #fff;
  @media only screen and (max-width: 490px) {
    padding: 0 20px;
    font-size: 14px;
    a {
      font-size: 14px;
    }
  }
  a {
    color: #eec40d !important;
    font-size: 20px;
  }
}
a {
  color: #2a74f9 !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
</style>

<style>
.content-authentication input {
  background: transparent;
}

.pagle .vs-sidebar {
  max-width: 428px !important;
}
</style>
