<template>
  <div class="m-10 gg" v-if="!isActive2FA">
    <p class="description">
      {{$t('Google Authenticator is enabled. To deactivate, enter the Google code Authenticator and press Deactivate.')}}
    </p>
    <div class="qrcode">
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
      <div class="mb-5 mb-sm-4 ccQR flex">
        <div class="md:w-4/12 qr-code-wrap mb-3 mb-md-0">
          <div class="qr-200">
            <img
              height="170"
              width="170"
              :src="linkBase64Img"
              style="height: 170px; width: 170px"
            />
          </div>
        </div>
        <div class="md:w-8/12">
          <p class="desc ml-6 mb-0">
            <small class="description">
              <div class="noted red">
                {{$t('Open your Google Authenticator app and scan the QR code below or enter the key into the app. This key is used to restore Authentication Your Google when you change or lose your phone. Please back up this key before activating Google Authentication.')}}
              </div>
            </small>
          </p>
        </div>
      </div>
      <div class="backupkey">
        <div class="flex">
          <div class="md:w-2/12 label">{{$t('Backup')}}:</div>
          <div class="md:w-10/12 key pl-0 pr-lg-3 pr-0">
            <div class="grouplabel">
              <div class="input-group relative">
                <vs-input
                  class="w-full"
                  readonly="readonly"
                  icon-pack="feather"
                  icon="icon-copy"
                  icon-after
                  placeholder="icon-after"
                  v-model="MSLuu"
                />
                <div class="input-group-append">
                  <a href.parent class="input-group-addon" @click="copyMSL"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full relative">
          <vs-input
            class="w-full"
            type="password"
            :label="$t('Password')"
            v-model="passwordSend"
          />
        </div>

        <div class="w-full">
          <div class="relative">
            <vs-input
              class="w-full"
              :label="$t('Code Active In Gmail')"
              v-model="codeActive"
            />
            <!--<span class="paste">Paste</span>-->
          </div>
          <div class="flex justify-end">
            <div class="w-1/5" style="margin-top: 1rem">
              <!-- Không nhận được mail: <a href="https://t.me/ares_idefibo_bot" target="_blank">Click</a> -->
              <vs-button
                id="button-with-loading"
                class="vs-con-loading__container"
                :disabled="disSendCode"
                color="success"
                type="filled"
                @click.stop="sendCodeSecure()"
                >{{ ssDownSend }}</vs-button
              >
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="relative">
            <vs-input
              class="w-full"
              :label="$t('Code In Google Authenticator')"
              v-model="code2FA"
            />
            <!--<span class="paste">Paste</span>-->
          </div>
        </div>
        <div
          class="w-full flex justify-center btn-turnon"
          style="margin-top: 1rem"
        >
          <vs-button
            class="w-64"
            color="rgb(62, 201, 214)"
            type="filled"
            @click="clickVerify()"
            >{{$t('Turn On')}}</vs-button
          >
        </div>
      </div>
    </div>
  </div>
  <div class="m-10 gg" v-else>
    <p class="description color-white-50 text-center mb-2">
      {{$t('Google Authenticator is enabled. To deactivate, enter the Google code Authenticator and press Deactivate.')}}
    </p>
    <div class="qrcode">
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
      <div class="backupkey">
        <div class="w-full relative">
          <vs-input
            class="w-full"
            type="password"
            :label="$t('Password')"
            v-model="passwordSend"
          />
        </div>

        <div class="w-full flex items-end gap-3">
          <div class="relative w-5/6">
            <vs-input
              class="w-full"
              :label="$t('Code Active In Gmail')"
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
        <div class="w-full">
          <div class="relative">
            <vs-input
              class="w-full"
              :label="$t('Code In Google Authenticator')"
              v-model="code2FA"
            />
            <!--<span class="paste">Paste</span>-->
          </div>
        </div>
        <div class="w-full text-center" style="margin-top: 1rem">
          <vs-button
            class="w-64"
            color="rgb(62, 201, 214)"
            type="filled"
            @click="clickUnVerify()"
            >Cancel</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import getData from "@/pages/trade/navbar/components/data.json";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      isActive2FA: false,
      disSendCode: false,
      MSLuu: "",
      linkBase64Img: "",
      code2FA: "",
      codeActive: "",
      passwordSend: "",
      ssDownSend: "Send",
      backgroundLoading: "primary",
      colorLoading: "#fff",
    };
  },
  methods: {
    ...mapMutations("tab", { setPopupActive2FA: "SET_POPUP_ACTIVE_2FA" }),
    copyMSL() {
      const thisIns = this;

      this.$copyText(this.MSLuu).then(
        function () {
          thisIns.$vs.notify({
            text: "Copied to memory",
            color: "success",
            iconPack: "feather",
            position: "top-right",
            icon: "icon-check-circle",
          });
        },
        function () {
          thisIns.$vs.notify({
            text: "Copy error",
            color: "danger",
            iconPack: "feather",
            position: "top-right",
            icon: "icon-alert-circle",
          });
        }
      );
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
          this.ssDownSend = "Gửi mã";
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

    clickVerify() {
      let secret = this.MSLuu;

      if (
        secret == "" ||
        this.code2FA == "" ||
        this.codeActive == "" ||
        this.passwordSend == ""
      ) {
        return this.$vs.notify({
          text: "Fields cannot be empty.",
          iconPack: "feather",
          icon: "icon-check",
          position: "top-right",
          color: "danger",
        });
      }
      this.popupActive = false;
      let obj = {
        s: secret,
        t: this.code2FA,
        c: this.codeActive,
        p: this.passwordSend,
      };
      AuthenticationService.activeGG2FA(obj).then((res) => {
        if (res.data.success == 1) {
          this.code2FA = "";
          this.codeActive = "";
          this.passwordSend = "";
          getData.c2fa = 1;
          window.location.reload()
          this.setPopupActive2FA(false);
          return this.$vs.notify({
            text: "Enable Google 2FA successfully.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "success",
          });
        } else if (res.data.success == 0) {
          return this.$vs.notify({
            text: "Wrong password or verification code.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        } else if (res.data.success == 2) {
          return this.$vs.notify({
            text: "The 2FA code is incorrect.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        } else if (res.data.success == 4) {
          localStorage.removeItem("INFO");
          localStorage.removeItem("tokenUser");
          window.location.href = window.location.origin + "/login";
        }
      });
    },

    clickUnVerify() {
      if (
        this.code2FA == "" ||
        this.codeActive == "" ||
        this.passwordSend == ""
      ) {
        return this.$vs.notify({
          text: "Fields cannot be empty.",
          iconPack: "feather",
          icon: "icon-check",
          position: "top-right",
          color: "danger",
        });
      }

      let obj = {
        t: this.code2FA,
        c: this.codeActive,
        p: this.passwordSend,
      };

      AuthenticationService.unActiveGG2FA(obj).then((res) => {
        if (res.data.success == 1) {
          this.code2FA = "";
          this.codeActive = "";
          this.passwordSend = "";
          window.location.reload()

          getData.c2fa = 0;

          this.isActive2FA = false;
          //khởi tạo lại 2FA
          this.createQRCode2FA();
          this.setPopupActive2FA(false)
          return this.$vs.notify({
            text: "Turn off Google 2FA successfully.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "success",
          });
        } else if (res.data.success == 0) {
          return this.$vs.notify({
            text: "Wrong password or verification code.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        } else if (res.data.success == 2) {
          return this.$vs.notify({
            text: "The 2FA code is incorrect.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        } else if (res.data.success == 4) {
          localStorage.removeItem("INFO");
          localStorage.removeItem("tokenUser");
          window.location.href = window.location.origin + "/login";
        }
      });
      this.$emit("close");
    },

    createQRCode2FA() {
      AuthenticationService.createGG2FA().then((res) => {
        if (res.data.success) {
          this.MSLuu = res.data.s;
          this.linkBase64Img = res.data.qr;
        }
        if (res.data.success == 4) {
          localStorage.removeItem("INFO");
          localStorage.removeItem("tokenUser");
          window.location.href = window.location.origin + "/login";
        }
      });
    },
  },
  created() {
    if (!getData.c2fa) {
      this.createQRCode2FA();
    } else {
      this.isActive2FA = true;
    }
  },
};
</script>

<style scoped>
.description {
  color: #fff;
  text-align: left;
  margin-bottom: 20px;
}
.description .noted {
  font-size: 12px;
  margin-top: 12px;
}
.backupkey {
  line-height: 34px;
  margin-top: 0;
  margin-bottom: 10px;
}
.backupkey .label {
  font-size: 16px !important;
  color: #fff !important;
}

.backupkey .input-group-append {
  position: absolute;
  right: 10px;
  top: 5px;
  z-index: 999;
}
.backupkey .input-group-append a {
  width: 20px;
  height: 20px;
  display: inline-block;
  cursor: pointer;
}

.qrcode .paste {
  position: absolute;
  right: 10px;
  top: 70%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #2177ff;
  cursor: pointer;
}

@media screen and (max-width: 768px) {

  .gg {
    overflow-x: auto;
    overflow-y: auto;
    height: 90vh;
    margin: 0 !important;
    padding: 2rem;
  }
  .ccQR {
    justify-content: center;
  }
}
</style>
<style>
.qrcode input {
  border-color: #737373 !important;
}
.backupkey label {
  font-size: 16px !important;
  color: #fff !important;
  padding-left: 12px;
}
.backupkey button {
  padding: 10px 22px !important;
  background: #5fe349 !important;
  color: #000;
  font-weight: 700;
  font-size: 16px;
}
.backupkey .btn-turnon button {
  background: #49e3ac !important;
}
.backupkey .vs-con-input-label .vs-con-input {
  margin-top: 0;
}
</style>
