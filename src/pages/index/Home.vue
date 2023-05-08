<template>
  <div class="home">
    <section class="home-section-1">
      <div class=" flex justify-around mx-2 pt-10">
        <img
          class="w-16 h-16 md:w-32 md:h-32"
          :src="require('@/assets/images/logo/logo-bitgainz.png')"
          alt="BO"
        />
        <div class="flex items-center" v-if="!isLoginUser">
          <div class="py-3 px-5 font-bold bg-yellow-light rounded mr-3 cursor-pointer" @click="RegisterUrl">{{$t('Sign Up')}}</div>
          <div class="py-3 px-5 font-bold bg-yellow-light rounded mr-3 cursor-pointer" @click="LoginUrl">{{$t('Sign In')}}</div>




          <div
            class="flex"
            @click="popupActiveCaiDat = true"
          >
            <div class="img-nav flex my-auto ml-3">
              <img
                :src="require('@/assets/images/home-page/icon-setting.png')"
                alt=""
              />
            </div>
            <!--            <div class="text-item-nav xl:text-lg">{{$t('Settings')}}</div>-->
            <vs-popup
              class="setting"
              title="Settings"
              :active.sync="popupActiveCaiDat"
              @keyup.esc = "popupActiveCaiDat = false"
            >
              <div class="wrap flex flex-col relative justify-center">
                <div
                  class="line line-language-pc line-pc flex align-center pb-2 ml-32"
                >
                  <div class="type flex-1 flex align-center mr-16 mt-3">
                    <div class="flex items-center">
                      <svg
                        width="36"
                        height="34"
                        viewBox="0 0 36 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.844727 17.1823C0.844727 12.7403 2.68249 8.48016 5.95372 5.33917C9.22495 2.19818 13.6617 0.433594 18.2879 0.433594C22.9141 0.433594 27.3509 2.19818 30.6221 5.33917C33.8933 8.48016 35.7311 12.7403 35.7311 17.1823C35.7311 21.6243 33.8933 25.8844 30.6221 29.0254C27.3509 32.1664 22.9141 33.931 18.2879 33.931C13.6617 33.931 9.22495 32.1664 5.95372 29.0254C2.68249 25.8844 0.844727 21.6243 0.844727 17.1823ZM17.1977 2.68839C15.7368 3.11548 14.2869 4.40513 13.0833 6.57199C12.6868 7.29238 12.3457 8.0397 12.0629 8.80794H17.1977V2.68839ZM9.76255 8.80794C10.126 7.69586 10.593 6.61749 11.158 5.58591C11.535 4.90142 11.9704 4.24808 12.4597 3.63259C9.7582 4.70833 7.4339 6.5042 5.76152 8.80794H9.76255ZM8.49356 16.1355C8.55897 14.2994 8.79446 12.5387 9.17385 10.9015H4.49471C3.68168 12.5451 3.19653 14.3204 3.06437 16.1355H8.49356ZM11.4131 10.9015C10.9843 12.6178 10.7373 14.3714 10.6761 16.1355H17.1977V10.9015H11.4131ZM19.3781 10.9015V16.1355H25.8975C25.8371 14.3715 25.5909 12.6179 25.1627 10.9015H19.3781ZM10.6783 18.2291C10.7388 19.9931 10.985 21.7466 11.4131 23.463H17.1977V18.2291H10.6783ZM19.3781 18.2291V23.463H25.1627C25.5704 21.8614 25.8299 20.0966 25.8997 18.2291H19.3781ZM12.0629 25.5566C12.3638 26.3647 12.7061 27.1143 13.0833 27.7926C14.2869 29.9594 15.739 31.247 17.1977 31.6762V25.5566H12.0629ZM12.4597 30.732C11.9704 30.1165 11.535 29.4632 11.158 28.7787C10.593 27.7471 10.126 26.6687 9.76255 25.5566H5.76152C7.43381 27.8604 9.75814 29.6563 12.4597 30.732ZM9.17385 23.463C8.77955 21.7422 8.55182 19.9901 8.49356 18.2291H3.06437C3.19956 20.0924 3.69887 21.8573 4.49471 23.463H9.17385ZM24.1161 30.732C26.8177 29.6563 29.142 27.8604 30.8143 25.5566H26.8133C26.4498 26.6687 25.9828 27.7471 25.4178 28.7787C25.0409 29.4632 24.6055 30.1165 24.1161 30.732ZM19.3781 25.5566V31.6762C20.839 31.2491 22.2889 29.9594 23.4925 27.7926C23.8697 27.1143 24.212 26.3647 24.5129 25.5566H19.3781ZM27.402 23.463H32.0811C32.8769 21.8573 33.3763 20.0924 33.5114 18.2291H28.0823C28.024 19.9901 27.7963 21.7422 27.402 23.463ZM33.5114 16.1355C33.3792 14.3204 32.8941 12.5451 32.0811 10.9015H27.402C27.7814 12.5387 28.0168 14.2994 28.0823 16.1355H33.5114ZM25.4178 5.58591C25.9564 6.55733 26.4252 7.63762 26.8133 8.80794H30.8143C29.142 6.50412 26.8177 4.70823 24.1161 3.63259C24.5914 4.22717 25.0275 4.88456 25.4178 5.58591ZM24.5129 8.80794C24.2301 8.03969 23.8891 7.29237 23.4925 6.57199C22.2889 4.40513 20.839 3.11757 19.3781 2.68839V8.80794H24.5129Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="text-2xl white font-normal ml-2 ">Language</div>
                  </div>
                  <div class="control flex-1 flex align-center">
                    <!--              <i18n class="i18n-class" />-->
                    <i18n class="i18n-class" />
                  </div>
                </div>
                <div class="line mb-3 mt-4 flex items-end pb-4 ml-32">
                  <div class="type flex-1 flex items-center mr-16">
                    <svg
                      width="37"
                      height="29"
                      viewBox="0 0 37 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.322 9.99318C25.322 9.99318 28.0056 11.2693 28.0056 14.4595C28.0056 17.6497 25.322 18.9258 25.322 18.9258M28.0056 2.33664C33.3727 4.88882 36.0563 8.71709 36.0563 14.4595C36.0563 20.2019 33.3727 24.0302 28.0056 26.5824M1.16992 8.71709V20.2019H7.87884L18.6131 27.8584V1.06055L7.87884 8.71709H1.16992Z"
                        stroke="white"
                        stroke-width="1.74432"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div class="text-2xl font-normal flex items-center ml-2 white">Sound</div>
                  </div>
                  <div class="control flex-1 flex align-center">
                    <div class="toggleButtonWrapper items-center flex">
                      <div class="text-2xl font-normal mr-4 white uppercase">Off</div>
                      <vs-switch
                        color="success"
                        style="border: 1px solid #4e4e4e; min-width: 60px"
                        v-model="switchAmThanh"
                        @change="OnOffSound"
                      />
                      <div class="text-2xl font-normal ml-4 white uppercase">On</div>
                    </div>
                  </div>
                </div>
              </div>
            </vs-popup>
          </div>

        </div>
      </div>
      <div class="text-white text-xl md:text-6xl font-bold text-center mt-32 md:mt-0">{{$t('Great trading experience')}}</div>
      <div class="text-normal text-[#b6afaf] text-[16px] max-w-md mx-auto text-center my-5">{{$t('Bitgainz is a trading platform developed using advanced technology and the latest innovations to provide a great trading experience for traders.')}}</div>
      <div class="p-5 bg-yellow-light w-48 text-center mx-auto text-black font-bold rounded mt-5 mb-32 md:mb-0 cursor-pointer" @click="RegisterUrl">{{$t('START FOR FREE')}}</div>
      <div class="text-center mt-32 md:mt-5">
        <img class="w-1/2 md:w-2/5 xl:w-1/3" src="@/assets/images/landing_v2/screen_tablet.png" alt="" srcset="">
      </div>
    </section>
<!--    <section class="sec&#45;&#45;01">-->
<!--      <header class="h-header-custom">-->

<!--        <img-->
<!--          width="150"-->
<!--          :src="require('@/assets/images/logo/logo-bitgainz.png')"-->
<!--          alt="BO"-->
<!--        />-->
<!--        <div class="header&#45;&#45;btn" v-if="!isLoginUser">-->
<!--          <div class="header&#45;&#45;btn_register " @click="RegisterUrl">{{$t('Sign Up')}}</div>-->
<!--          <div class="header&#45;&#45;btn_login mr-10" @click="LoginUrl">{{$t('Sign In')}}</div>-->




<!--          <div-->
<!--            class="con-img mr-12 lg:mr-6 md:mr-3 cursor-pointer msetting flex"-->
<!--            @click="popupActiveCaiDat = true"-->
<!--          >-->
<!--            <div class="img-nav flex my-auto">-->
<!--              <img-->
<!--                :src="require('@/assets/images/home-page/icon-setting.png')"-->
<!--                alt=""-->
<!--              />-->
<!--            </div>-->
<!--&lt;!&ndash;            <div class="text-item-nav xl:text-lg">{{$t('Settings')}}</div>&ndash;&gt;-->
<!--            <vs-popup-->
<!--              class="setting"-->
<!--              title="Settings"-->
<!--              :active.sync="popupActiveCaiDat"-->
<!--              @keyup.esc = "popupActiveCaiDat = false"-->
<!--            >-->
<!--              <div class="wrap flex flex-col relative justify-center">-->
<!--                <div-->
<!--                  class="line line-language-pc line-pc flex align-center pb-2 ml-32"-->
<!--                >-->
<!--                  <div class="type flex-1 flex align-center mr-16 mt-3">-->
<!--                    <div class="flex items-center">-->
<!--                      <svg-->
<!--                        width="36"-->
<!--                        height="34"-->
<!--                        viewBox="0 0 36 34"-->
<!--                        fill="none"-->
<!--                        xmlns="http://www.w3.org/2000/svg"-->
<!--                      >-->
<!--                        <path-->
<!--                          d="M0.844727 17.1823C0.844727 12.7403 2.68249 8.48016 5.95372 5.33917C9.22495 2.19818 13.6617 0.433594 18.2879 0.433594C22.9141 0.433594 27.3509 2.19818 30.6221 5.33917C33.8933 8.48016 35.7311 12.7403 35.7311 17.1823C35.7311 21.6243 33.8933 25.8844 30.6221 29.0254C27.3509 32.1664 22.9141 33.931 18.2879 33.931C13.6617 33.931 9.22495 32.1664 5.95372 29.0254C2.68249 25.8844 0.844727 21.6243 0.844727 17.1823ZM17.1977 2.68839C15.7368 3.11548 14.2869 4.40513 13.0833 6.57199C12.6868 7.29238 12.3457 8.0397 12.0629 8.80794H17.1977V2.68839ZM9.76255 8.80794C10.126 7.69586 10.593 6.61749 11.158 5.58591C11.535 4.90142 11.9704 4.24808 12.4597 3.63259C9.7582 4.70833 7.4339 6.5042 5.76152 8.80794H9.76255ZM8.49356 16.1355C8.55897 14.2994 8.79446 12.5387 9.17385 10.9015H4.49471C3.68168 12.5451 3.19653 14.3204 3.06437 16.1355H8.49356ZM11.4131 10.9015C10.9843 12.6178 10.7373 14.3714 10.6761 16.1355H17.1977V10.9015H11.4131ZM19.3781 10.9015V16.1355H25.8975C25.8371 14.3715 25.5909 12.6179 25.1627 10.9015H19.3781ZM10.6783 18.2291C10.7388 19.9931 10.985 21.7466 11.4131 23.463H17.1977V18.2291H10.6783ZM19.3781 18.2291V23.463H25.1627C25.5704 21.8614 25.8299 20.0966 25.8997 18.2291H19.3781ZM12.0629 25.5566C12.3638 26.3647 12.7061 27.1143 13.0833 27.7926C14.2869 29.9594 15.739 31.247 17.1977 31.6762V25.5566H12.0629ZM12.4597 30.732C11.9704 30.1165 11.535 29.4632 11.158 28.7787C10.593 27.7471 10.126 26.6687 9.76255 25.5566H5.76152C7.43381 27.8604 9.75814 29.6563 12.4597 30.732ZM9.17385 23.463C8.77955 21.7422 8.55182 19.9901 8.49356 18.2291H3.06437C3.19956 20.0924 3.69887 21.8573 4.49471 23.463H9.17385ZM24.1161 30.732C26.8177 29.6563 29.142 27.8604 30.8143 25.5566H26.8133C26.4498 26.6687 25.9828 27.7471 25.4178 28.7787C25.0409 29.4632 24.6055 30.1165 24.1161 30.732ZM19.3781 25.5566V31.6762C20.839 31.2491 22.2889 29.9594 23.4925 27.7926C23.8697 27.1143 24.212 26.3647 24.5129 25.5566H19.3781ZM27.402 23.463H32.0811C32.8769 21.8573 33.3763 20.0924 33.5114 18.2291H28.0823C28.024 19.9901 27.7963 21.7422 27.402 23.463ZM33.5114 16.1355C33.3792 14.3204 32.8941 12.5451 32.0811 10.9015H27.402C27.7814 12.5387 28.0168 14.2994 28.0823 16.1355H33.5114ZM25.4178 5.58591C25.9564 6.55733 26.4252 7.63762 26.8133 8.80794H30.8143C29.142 6.50412 26.8177 4.70823 24.1161 3.63259C24.5914 4.22717 25.0275 4.88456 25.4178 5.58591ZM24.5129 8.80794C24.2301 8.03969 23.8891 7.29237 23.4925 6.57199C22.2889 4.40513 20.839 3.11757 19.3781 2.68839V8.80794H24.5129Z"-->
<!--                          fill="white"-->
<!--                        />-->
<!--                      </svg>-->
<!--                    </div>-->
<!--                    <div class="text-2xl white font-normal ml-2 ">Language</div>-->
<!--                  </div>-->
<!--                  <div class="control flex-1 flex align-center">-->
<!--                    &lt;!&ndash;              <i18n class="i18n-class" />&ndash;&gt;-->
<!--                    <i18n class="i18n-class" />-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="line mb-3 mt-4 flex items-end pb-4 ml-32">-->
<!--                  <div class="type flex-1 flex items-center mr-16">-->
<!--                    <svg-->
<!--                      width="37"-->
<!--                      height="29"-->
<!--                      viewBox="0 0 37 29"-->
<!--                      fill="none"-->
<!--                      xmlns="http://www.w3.org/2000/svg"-->
<!--                    >-->
<!--                      <path-->
<!--                        d="M25.322 9.99318C25.322 9.99318 28.0056 11.2693 28.0056 14.4595C28.0056 17.6497 25.322 18.9258 25.322 18.9258M28.0056 2.33664C33.3727 4.88882 36.0563 8.71709 36.0563 14.4595C36.0563 20.2019 33.3727 24.0302 28.0056 26.5824M1.16992 8.71709V20.2019H7.87884L18.6131 27.8584V1.06055L7.87884 8.71709H1.16992Z"-->
<!--                        stroke="white"-->
<!--                        stroke-width="1.74432"-->
<!--                        stroke-linecap="round"-->
<!--                        stroke-linejoin="round"-->
<!--                      />-->
<!--                    </svg>-->

<!--                    <div class="text-2xl font-normal flex items-center ml-2 white">Sound</div>-->
<!--                  </div>-->
<!--                  <div class="control flex-1 flex align-center">-->
<!--                    <div class="toggleButtonWrapper items-center flex">-->
<!--                      <div class="text-2xl font-normal mr-4 white uppercase">Off</div>-->
<!--                      <vs-switch-->
<!--                        color="success"-->
<!--                        style="border: 1px solid #4e4e4e; min-width: 60px"-->
<!--                        v-model="switchAmThanh"-->
<!--                        @change="OnOffSound"-->
<!--                      />-->
<!--                      <div class="text-2xl font-normal ml-4 white uppercase">On</div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </vs-popup>-->
<!--          </div>-->

<!--        </div>-->
<!--      </header>-->
<!--      <div class="text-white text-xl md:text-6xl font-bold text-center">{{$t('Great trading experience')}}</div>-->
<!--      <div class="text-normal text-[#b6afaf] text-[16px] max-w-md text-center mx-auto">{{$t('Bitgainz is a trading platform developed using advanced technology and the latest innovations to provide a great trading experience for traders.')}}</div>-->
<!--      <div class="btn-start-for-free my-5">{{$t('START FOR FREE')}}</div>-->
<!--      <div class="text-center">-->
<!--        <img src="@/assets/images/landing_v2/screen_tablet.png" alt="" srcset="">-->
<!--      </div>-->
<!--    </section>-->

    <log-reg-for-get />
    <div class="md:grid grid-cols-2">
      <section class="bg-white">
        <div class="block bg-white py-5">
          <div class="gap-y-5 grid grid-cols-1">
            <div class="text-3xl text-center my-5 text-black font-bold">
              {{$t('Trade anytime anywhere')}}
            </div>
            <div class="group-platform grid grid-cols-3 gap-y-3 text-center">
              <div class="platform-item">
                <img class="md:w-24 md:h-24 md:my-3" src="@/assets/images/home-page/platform/apple.png" alt="" srcset="">
                <div class="name-platform">
                  Appstore
                </div>
              </div>
              <div class="platform-item">
                <img class="md:w-24 md:h-24 md:my-3" src="@/assets/images/home-page/platform/android.png" alt="" srcset="">
                <div class="name-platform">
                  Android
                </div>
              </div>
              <div class="platform-item">
                <img class="md:w-24 md:h-24 md:my-3" src="@/assets/images/home-page/platform/googleplay.png" alt="" srcset="">
                <div class="name-platform">
                  GooglePlay
                </div>
              </div>
              <div class="platform-item">
                <img class="md:w-24 md:h-24 md:my-3" src="@/assets/images/home-page/platform/macos.png" alt="" srcset="">
                <div class="name-platform">
                  Macos
                </div>
              </div>
              <div class="platform-item">
                <img class="md:w-24 md:h-24 md:my-3" src="@/assets/images/home-page/platform/window.png" alt="" srcset="">
                <div class="name-platform">
                  Windows
                </div>
              </div>
              <div class="platform-item">
                <img class="md:w-24 md:h-24 md:my-3" src="@/assets/images/home-page/platform/api.png" alt="" srcset="">
                <div class="name-platform">
                  Api
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white">
        <div class="relative bg-white py-32 md:py-0">
          <img class="mx-auto w-full text-center md:w-2/3 md:my-10 md:mx-32  md:text-center" src="@/assets/images/home-page/screen-platform-web.png" alt="">
          <img class="w-2/3 absolute mt-24 left-0 md:w-1/3 md:bottom-0 md:ml-24" src="@/assets/images/home-page/screen-platform-macos.png" alt="">
          <img class="w-1/6 absolute right-0 bottom-0 md:mr-20" src="@/assets/images/home-page/screen-platform-mobile.png" alt="">
        </div>
      </section>
    </div>

    <section>
      <div class="why-choose-group">
        <div class="text-2xl font-bold text-black text-center py-5 md:text-4xl">
          {{$t('Why choose us?')}}
        </div>
<!--        <div class="title-why-choose mb-5">-->
<!--          Why choose us?-->
<!--        </div>-->
        <div class="grid grid-cols-1 md:grid-cols-4">
          <div class="why-choose-item md:block">
            <div class="my-auto">
              <img src="@/assets/images/home-page/why-choose-item1.png" alt="" srcset="">
              <div class="title-box-item md:mx-auto md:h-12 md:text-center">
                {{$t('Comprehensive security and legal fund')}}
              </div>
            </div>
            <div class="des-why-box-item md:h-64 md:mx-auto">
              {{$t('Bitgainz protects your funds with both centralized and decentralized methods. It is also the first trading platform to invest millions of dollars into security and regulatory funds to enhance the protection of your assets.')}}
            </div>
          </div>

          <div class="why-choose-item md:block">
            <div class="my-auto">
              <img src="@/assets/images/home-page/why-choose-item2.png" alt="" srcset="">
              <div class="title-box-item md:mx-auto md:h-12">
                {{$t('Efficient trading with instant deposits/withdrawals')}}
              </div>
            </div>
            <div class="des-why-box-item md:h-64 md:mx-auto">
              {{$t('As a trading platform established with advanced technology, Intertraderbitcoin provides an efficient and convenient trading system as well as instant deposit and withdrawal services.')}}

            </div>
          </div>

          <div class="why-choose-item md:block">
            <div class="my-auto">
              <img src="@/assets/images/home-page/why-choose-item3.png" alt="" srcset="">
              <div class="title-box-item md:mx-auto md:h-12">
                {{
                  $t('Stable and reliable since 2013')
                }}
              </div>
            </div>
            <div class="des-why-box-item md:h-64 md:mx-auto">
              {{$t('For 10 years, Intertraderbitcoin has operated stably and reliably. By continuously exploring innovative technologies, we strive to bring you the best trading experience.')}}
            </div>
          </div>

          <div class="why-choose-item md:block">
            <div class="my-auto">
              <img src="@/assets/images/home-page/why-choose-item4.png" alt="" srcset="">
              <div class="title-box-item md:mx-auto md:h-12">
                {{$t('The exchange that meets your expectations')}}
              </div>
            </div>
            <div class="des-why-box-item md:h-64 md:mx-auto">
              {{$t('As one of the earliest and largest cryptocurrency trading platforms, Intertraderbitcoin always strictly adheres to regulations and never allows market manipulation. We are always committed to being open, transparent, and collaborative.')}}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-white reward-group md:grid md:grid-cols-4">
        <div class="reward-item md:my-auto">
          <img class="md:w-1/4 md:mx-auto md:my-auto" src="@/assets/images/home-page/reward/reward-1.png" alt="" srcset="">
          <div class="title-reward md:text-xl">IAIR Award</div>
        </div>
        <div class="reward-item md:my-auto">
          <img class="md:w-1/4 md:mx-auto md:my-auto" src="@/assets/images/home-page/reward/reward-2.png" alt="" srcset="">
          <div class="title-reward md:text-xl">FE Awards</div>
        </div>
        <div class="reward-item md:my-auto">
          <img class="md:w-1/4 md:mx-auto md:my-auto" src="@/assets/images/home-page/reward/reward-3.png" alt="" srcset="">
          <div class="title-reward md:text-xl">Financial Commission Category A</div>
        </div>
        <div class="reward-item md:my-auto">
          <img class="md:w-1/4  md:mx-auto md:my-auto" src="@/assets/images/home-page/reward/reward-4.png" alt="" srcset="">
          <div class="title-reward md:text-xl">Quotes from leading global media agencies</div>
        </div>
      </div>

    </section>
    <section>
      <div class="data-static grid grid-cols-1 py-5 gap-y-3 md:grid-cols-3">
        <div class="data-static-item">
          <div class="flex justify-center">
            <div class="amount-data-static my-auto">
              986 248
            </div>
            <span>
            <img src="@/assets/images/home-page/icon-data-trade.png" alt="" srcset="">
            </span>
          </div>
          <div class="sub-title-data">
            {{$t('The trader is operating daily')}}
          </div>
        </div>
        <div class="data-static-item">
          <div class="flex justify-center">
            <div class="amount-data-static my-auto">
              135
            </div>
            <span>
              <img src="@/assets/images/home-page/icon-data-country.png" alt="" srcset="">
            </span>
          </div>
          <div class="sub-title-data">
            {{$t('Our country is in operation')}}
          </div>
        </div>
        <div class="data-static-item">
          <div class="flex justify-center">
            <div class="amount-data-static my-auto">
              35 575 647
            </div>
            <img src="@/assets/images/home-page/icon-data-order.png" alt="" srcset="">
          </div>
          <div class="sub-title-data">
            {{$t('Trading orders were successful')}}
            <br>
            {{$t('in the past week')}}
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-white px-5 py-24">
        <img
          width="150"
          :src="require('@/assets/images/logo/logo-bitgainz.png')"
          alt="BO"
        />
        <div class="text-black font-medium">
          © 2021 Bitgainz all rights reserved.
        </div>
        <hr class="w-full bg-black">
        <div class="text-black font-medium">
          {{$t('Risk warning: Trading and investing in digital options involves significant risks and may not be suitable for all customers. Please ensure that you carefully consider your investment objectives, level of experience, and risk appetite before buying or selling any digital assets. You should be aware of and fully understand all risks associated with trading and investing in digital assets; you should not invest funds thatyou cannot afford to lose. You are granted non-exclusive limited rights to use the intellectual property on this website for personal, non-commercial,non-transferable use related to the services provided on the website.')}}
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped lang="scss">


@font-face {
  font-family: "utm-avo";
  src: url("/src/assets/fonts/umt-avo.ttf");
}
@font-face {
  font-family: "utm-bold";
  src: url("/src/assets/fonts/utm-avo-bold.ttf");
}

//.btn-start-for-free{
//  margin: 0 auto;
//  background-color: yellow;
//  color: black;
//  font-weight: bold;
//  font-size: 2rem;
//  padding: 30px 40px;
//  border-radius: 10px;
//  width: 300px;
//  text-align: center;
//  line-height: 28px;
//}

.name-device-platform{
  font-size: 1rem;
  color: black;
}

.title-box-item{
  color: black;
  font-weight: bold;
  font-size: 20px;
  max-width: 300px;
  margin: 20px 0;
}
.des-why-box-item{
  max-width: 300px;
  border: 5px solid #00aeef;
  background-color: white;
  border-radius: 10px;
  color: black;
  padding: 15px;
}

.sub-title-data{
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;

}
.amount-data-static{
  font-weight: bold;
  font-size: 48px!important;
  color: white;
  margin-right: 10px;
}
.data-static{
  background: url("~@/assets/images/home-page/bg-data-trade.png");
}

.reward-item img{
  margin-right: 10px;
}
.title-why-choose{
  font-size: 40px;
  color: black;
  font-weight: bold;
  height: 100px;
}
.why-choose-group{
  background: url("~@/assets/images/home-page/bg-why-choose.png"), no-repeat;
  background-size: cover;
}

.home-section-1{
  background: url("~@/assets/images/landing_v2/bg_home_top1.png"), no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
}


.name-platform{
  font-weight: bold;
  color: black;
}


.sec--01 {
  overflow-x: hidden;
  // font-family: "utm-avo", sans-serif;
  header {
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.4s;
    @media (max-width: 1440px) {
      padding: 32px 86px;
    }
    .header--btn {
      display: flex;

      &_login,
      &_register {
        border-radius: 8px;
        padding: 14px 16px;
        font-weight: 700;
        font-size: 22px;
        color: #000;
        cursor: pointer;
        min-width: 160px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s linear;
      }

      &_login {
        background: #fff9c1ed;
      }

      &_register {
        background: #eec40d;
        margin-right: 60px;
        &:hover {
          background: #fff9c1ed;
        }
      }
    }
  }
  background: url("~@/assets/images/landing_v2/bg_home_top1.png"), no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;

  .content {
    padding-left: 180px;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    @media (max-width: 1440px) {
      padding-left: 86px;
    }
    .title {
      font-size: 60px;
      line-height: 1;
      color: #fff;
      font-weight: 700;
      max-width: 965px;
      margin-bottom: 32px;
      // font-family: "utm-bold";
    }

    .des {
      font-size: 22px;
      color: #fff;
      line-height: 24px;
      margin-bottom: 24px;
      max-width: 760px;


    }

    .btn {
      cursor: pointer;
      background-color: #eec40d;
      color: #000;
      text-transform: uppercase;
      text-align: center;
      padding: 20px;
      border-radius: 8px !important;
      display: inline-block;
      transition: 0.2s linear;
      font-weight: 700;
      font-size: 24px;
      min-width: 320px;
      &:hover {
        background: #fff9c1ed;
      }
    }
  }
}



</style>

<style lang="scss">
.swiper-pagination-bullet {
  background: unset !important;
  width: unset !important;
  height: unset !important;

  .clients-say-name {
    font-size: 24px;
    color: #fff;
    margin: 0 0 24px;
    transform: translate(50%, -50%);
    white-space: nowrap;
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -56px;
    font-weight: 700;
  }

  .block-row {
    display: flex;
  }
}

.swiper-pagination-bullet-active .clients-say-name {
  display: block;
  margin: auto;
}

.c-active {
  background-color: #02102c !important;
  border-bottom: none !important;
  padding: 10px 90px !important;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.des {
  text-align: justify;
}
</style>
<style scoped>
.why-choose-item{
  @apply grid grid-cols-2 text-center mx-5 gap-x-3 mb-3
}
.title-box-item{
  @apply text-xl
}
.why-choose-item img{
  @apply w-24 h-24
}
.reward-group{
  @apply grid grid-cols-2 p-5
}

.reward-group img{
  @apply w-12
}
.title-reward{
  @apply text-sm text-center text-black font-bold
}
.reward-item{
  @apply text-center
}
.platform-item img{
  @apply w-10 h-10
}
</style>
<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import config from "@/config.json";
import LogRegForGet from "@/pages/user/LogRegForGet";
import I18n from "@/pages/trade/navbar/components/i18n";



export default {
  data() {
    return {
      popupActiveCaiDat: false,
      switchAmThanh: true,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 120,
        centeredSlides: true,
        loop: true,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            if (index === 0) {
              return `<div class="wrapper ${className}" >
                                    <div  class="clients-say-name text-center">
                                    —Robert Carter—
                                    </div>
                                    <img src="/landing/img/client-1.png" alt="">
                                </div>`;
            }
            if (index === 1) {
              return `<div class="wrapper ${className}" >
                                    <div  class="clients-say-name text-center">
                                        —Britney Bradley—
                                    </div>
                                    <img src="/landing/img/client-2.png" alt="">
                                </div>`;
            }
            if (index === 2) {
              return `<div class="wrapper ${className}" >
                                    <div  class="clients-say-name text-center">
                                        —Clifford Mccarthy—
                                    </div>
                                    <img src="/landing/img/client-3.png" alt="">
                                </div>`;
            }
          },
        },
      },
      domain: config.domainRealName,
      mail: config.support.mail,
      listWhyChooseUs:[
        {
          img:"@/assets/images/home-page/why-choose-item1.png",
          title:"title",
          des:"des"
        }
      ]
    };
  },

  computed: {
    isLoginUser() {
      return localStorage.hasOwnProperty("tokenUser");
    },
  },
  methods: {
    OnOffSound() {
      if (this.switchAmThanh) {
        localStorage.setItem("SOUND", true);
      } else {
        localStorage.setItem("SOUND", false);
      }
    },
    agencyDocs(){
      if(this.$i18n.locale !="vi"){
        window.open("https://docs.google.com/document/d/1O_PFIc9dXfJEexT-7-kVUMy7vuv4iq0Sel2oAa43ApY/edit?usp=sharing")

      }else{
        window.open("https://docs.google.com/document/d/1-XLyvL2C5mVWz1QH1FVVQWSKEp6dRZSjhpdBesViiAg/edit#")

      }
    },
    LoginUrl() {
      this.$router.push({ path: "/login" });
    },
    RegisterUrl() {
      this.$router.push({ path: "/register" });
    },
    onWindowLoad() {
      let path = this.$router.currentRoute.path;
      let checkTK = localStorage.hasOwnProperty("tokenUser");
      this.$vs.loading.close();
      if (path == "/" && checkTK) {
        this.$router.push({ path: "/trading" });
      }
    },
  },
  components: {
    I18n,
    swiper,
    swiperSlide,
    LogRegForGet,
  },
  mounted() {
    this.$vs.loading({
      type: "radius",
      background: "#111",
      color: "#ffffff",
    });
    setTimeout(() => {
      this.$vs.loading.close();
    }, 1000);
  },
  created() {
    const locale = localStorage.getItem('locale');

    if (locale) {
      this.$i18n.locale = locale;
    }

    window.addEventListener("load", this.onWindowLoad);
    window.addEventListener("scroll", function () {
      // eslint-disable-next-line no-undef
      if ($(this).scrollTop() !== 0) {
        // eslint-disable-next-line no-undef
        $(".h-header-custom").addClass("c-active");
      } else {
        // eslint-disable-next-line no-undef
        $(".h-header-custom").removeClass("c-active");
      }
    });
    let that = this;

    document.addEventListener('keyup', function (evt) {
      if (evt.keyCode === 27) {
        if(that.popupActiveCaiDat == true){
          that.popupActiveCaiDat = false
        }
      }
    });
  },
};
</script>
