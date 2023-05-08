<template>
  <div
    class="the-navbar__user-meta flex items-center text-acc"
    v-if="activeUserInfo.displayName != ''"
  >
    <!--<div class="the-navbar__user-meta flex items-center"> -->
    <!-- <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.displayName }}</p>
     <small>Available</small>
    </div> -->
<!--    <div class="streak">-->
<!--      <div class="nav-streak-rewards">-->
<!--        <span class="nav-streak-rewards-label d-block lg:text-sm md:text-base">-->
<!--          Prize Pool-->
<!--        </span>-->
<!--        <span class="nav-streak-rewards-value d-block lg:text-sm md:text-base">-->
<!--          &lt;!&ndash; <img-->
<!--            :src="require('@/assets/images/landing_v2/icon-usdt.png')"-->
<!--            alt=""-->
<!--            width="20"-->
<!--          /> &ndash;&gt;-->
<!--          $ 267.63K-->
<!--        </span>-->
<!--      </div>-->
<!--    </div>-->

    <div class="info-money lg:ml-6 md:text-sm px-7 py-5 !text-[24px] !leading-[28px] mr-3">
       <div class="font-bold !text-[24px] text-white">
<!--         đ {{ blObj.blLive}}-->
<!--         đ {{this.formatPrice(balanceVND)}}-->
         đ{{this.formatPrice(blObj.blLive)}}
       </div>
    </div>
<!--    <div class="info-money lg:ml-6 md:text-sm">-->
<!--      <vs-dropdown vs-custom-content vs-trigger-click>-->
<!--        <div class="money-i">-->
<!--          <div class="wrapper-money">-->
<!--            <p class="title">-->
<!--              {{ isAcc ? $t('Real Account') : $t('Practice Account') }}-->
<!--            </p>-->
<!--            <div class="text-money lg:text-lg md:text-lg">-->
<!--              &lt;!&ndash; <img-->
<!--                :src="require('@/assets/images/landing_v2/icon-usdt.png')"-->
<!--                alt=""-->
<!--                width="20"-->
<!--              /> &ndash;&gt;-->
<!--              $-->
<!--              {{-->
<!--                isAcc-->
<!--                  ? this.nFormatter(blObj.blLive, 2)-->
<!--                  : this.nFormatter(blObj.blDemo, 2)-->
<!--              }}-->
<!--            </div>-->
<!--          </div>-->
<!--          <img-->
<!--            class="image"-->
<!--            :src="require('@/assets/images/landing_v2/icon-dropdown.png')"-->
<!--          />-->
<!--        </div>-->
<!--        <vs-dropdown-menu class="dropdown-account">-->
<!--          <div class="accLive" @click="changeAccount(1)">-->
<!--            <div class="left">-->
<!--              <span class="title">{{$t('Real Account')}}</span>-->
<!--              <span class="text">$ {{ formatPrice(blObj.blLive, 2) }}</span>-->
<!--            </div>-->
<!--            <div class="right">-->
<!--              <img-->
<!--                @click="clickShowPopTrans()"-->
<!--                :src="require('@/assets/images/landing_v2/icon-trans.png')"-->
<!--                alt=""-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--&lt;!&ndash;          <hr style="border-color: #111c35" />&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="accDemo" @click.stop="changeAccount(0)">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="left">&ndash;&gt;-->
<!--&lt;!&ndash;              <span class="title">{{$t("Practice_account")}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;              <span class="text">$ {{ formatPrice(blObj.blDemo, 2) }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="right" @click.stop="reloadBalanceDemo()">&ndash;&gt;-->
<!--&lt;!&ndash;              <svg&ndash;&gt;-->
<!--&lt;!&ndash;                data-v-b495ff56=""&ndash;&gt;-->
<!--&lt;!&ndash;                xmlns="http://www.w3.org/2000/svg"&ndash;&gt;-->
<!--&lt;!&ndash;                width="17.795"&ndash;&gt;-->
<!--&lt;!&ndash;                height="18.488"&ndash;&gt;-->
<!--&lt;!&ndash;                viewBox="0 0 17.795 18.488"&ndash;&gt;-->
<!--&lt;!&ndash;                id="refill-balance"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                <g&ndash;&gt;-->
<!--&lt;!&ndash;                  data-v-b495ff56=""&ndash;&gt;-->
<!--&lt;!&ndash;                  id="refresh-01"&ndash;&gt;-->
<!--&lt;!&ndash;                  transform="translate(-1 0.081)"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <path&ndash;&gt;-->
<!--&lt;!&ndash;                    data-v-b495ff56=""&ndash;&gt;-->
<!--&lt;!&ndash;                    id="Path_26259"&ndash;&gt;-->
<!--&lt;!&ndash;                    data-name="Path 26259"&ndash;&gt;-->
<!--&lt;!&ndash;                    d="M18.8,7.366,17.555-.081,14.993,2.481a8.8,8.8,0,1,0,2.9,10.641.8.8,0,0,0-1.468-.642,7.215,7.215,0,1,1-2.573-8.854l-2.5,2.5Z"&ndash;&gt;-->
<!--&lt;!&ndash;                    fill="#fff"&ndash;&gt;-->
<!--&lt;!&ndash;                  ></path>&ndash;&gt;-->
<!--&lt;!&ndash;                </g>&ndash;&gt;-->
<!--&lt;!&ndash;              </svg>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--        </vs-dropdown-menu>-->
<!--      </vs-dropdown>-->
<!--    </div>-->

<!--    <div class="maddmoney con-im lg:mr-6 lg:ml-6 md:mr-3 md:ml-3">-->
<!--      <vs-button-->
<!--        class="add-money"-->
<!--        @click="(popupActiveNapNhanh = true), getBalanceWalletClick()"-->
<!--      >-->
<!--        <span class="nowrap md:text-lg">{{ isMobile ? $t("Deposit") : $t("Deposit") }}</span>-->
<!--      </vs-button>-->
<!--      &lt;!&ndash; <vs-button type="line" icon-pack="feather" :color="colorNT" icon="icon-dollar-sign" @click.stop="viewNapTien()">Nạp nhanh</vs-button> &ndash;&gt;-->
<!--    </div>-->
    <!--<div class="con-img ml-3">
      <vs-button type="line" icon-pack="feather" :color="colorRT" icon="icon-dollar-sign" @click.stop="viewRutTien()">Rút tiền</vs-button>
    </div> -->
    <div
      class="con-img mr-12 lg:mr-6 md:mr-3 cursor-pointer msetting "
      @click="popupActiveCaiDat = true"
    >
      <div class="img-nav">
        <img
          :src="require('@/assets/images/landing_v2/icon-setting.png')"
          alt=""
        />
      </div>
      <div class="text-item-nav xl:text-lg md:text-base">{{$t("Settings") }}</div>
      <vs-popup
        class="setting"
        :title="$t('Settings')"
        :active.sync="popupActiveCaiDat"
      >
        <div class="wrap flex flex-col relative justify-center">
          <div
            class="line line-language-pc line-pc flex align-center pb-2 ml-32"
          >
            <div class="type flex-1 flex align-center mr-16">
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
              <div class="text-2xl white font-normal ml-2 ">{{$t("Language")}}</div>
            </div>
            <div class="control flex-1 flex align-center">
              <i18n class="i18n-class" />
            </div>
          </div>
          <div class="line mb-3 flex items-end pb-4 ml-32">
            <div class="type flex-1 flex align-center mr-16">
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

              <div class="text-2xl font-normal ml-2 white">{{$t("Sound")}}</div>
            </div>
            <div class="control flex-1 flex align-center">
              <div class="toggleButtonWrapper items-center flex">
                <div class="text-2xl font-normal mr-4 white uppercase">{{$t("Off")}}</div>
                <vs-switch
                  color="success"
                  style="border: 1px solid #4e4e4e; min-width: 60px"
                  v-model="switchAmThanh"
                  @change="OnOffSound"
                />
                <div class="text-2xl font-normal ml-4 white uppercase">{{$t("On")}}</div>
              </div>
            </div>
          </div>
        </div>
      </vs-popup>
    </div>
    <div
      class="con-img mr-12 lg:mr-6 md:mr-3 cursor-pointer mhoso"
      @click.stop="viewHoSo()"
    >
      <div class="img-nav">
        <img
          :src="require('@/assets/images/landing_v2/icon-user.png')"
          alt=""
        />
      </div>

      <div class="text-item-nav xl:text-lg md:text-base">{{$t("Profile")}}</div>
    </div>
    <div class="con-img mr-3 text-center relative cursor-pointer mTT">
      <notification-drop-down />
    </div>
    <!-- <div class="con-img ml-3 mr-3 cursor-pointer mhelper" @click.stop="viewHelp()">
      <svg class="block text-center h-5" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_17_2)">
        <path d="M10.506 18.428H14.467C14.7792 18.4281 15.0883 18.3667 15.3768 18.2473C15.6652 18.1279 15.9273 17.9528 16.1481 17.7321C16.3688 17.5113 16.5439 17.2492 16.6633 16.9608C16.7827 16.6723 16.8441 16.3632 16.844 16.051V13.675" stroke="#C1C5DB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
        <path d="M4.961 9.71399H1V13.675C1 14.0951 1.16689 14.498 1.46394 14.795C1.761 15.0921 2.1639 15.259 2.584 15.259H4.961V9.71399Z" stroke="#C1C5DB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
        <path d="M16.844 9.71399H12.883V15.259H15.26C15.6801 15.259 16.083 15.0921 16.3801 14.795C16.6771 14.498 16.844 14.0951 16.844 13.675V9.71399Z" stroke="#C1C5DB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
        <path d="M16.844 9.714V8.922C16.844 7.88167 16.6391 6.85152 16.241 5.89038C15.8429 4.92924 15.2593 4.05593 14.5237 3.3203C13.7881 2.58467 12.9148 2.00114 11.9536 1.60303C10.9925 1.20491 9.96233 1 8.922 1C6.82095 1 4.80596 1.83464 3.3203 3.3203C1.83464 4.80596 1 6.82095 1 8.922V9.714" stroke="#C1C5DB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
        </g>
        <defs>
        <clipPath id="clip0_17_2">
        <rect width="17.844" height="19.428" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <span>Trợ giúp</span>
    </div> -->

    <div
      v-if="$route.name.trim() === 'client-index'"
      class="mDatLenh con-img ml-3 mr-3 cursor-pointer mdot"
      @click.stop="toggleDataSidebarHisOrder()"
    >
      <div class="btn-dot">
        <svg
          v-if="!$store.state.isOpenSideBar"
          class="block text-center h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          width="3.331"
          height="14.434"
          viewBox="0 0 3.331 14.434"
        >
          <g id="menu" transform="translate(0 -61)">
            <g
              id="Group_13136"
              data-name="Group 13136"
              transform="translate(0 61)"
            >
              <g id="Group_13135" data-name="Group 13135">
                <path
                  id="Path_29631"
                  data-name="Path 29631"
                  d="M1.665,61a1.665,1.665,0,1,0,1.665,1.665A1.667,1.667,0,0,0,1.665,61Z"
                  transform="translate(0 -61)"
                  fill="#fff"
                ></path>
              </g>
            </g>
            <g
              id="Group_13138"
              data-name="Group 13138"
              transform="translate(0 66.551)"
            >
              <g id="Group_13137" data-name="Group 13137">
                <path
                  id="Path_29632"
                  data-name="Path 29632"
                  d="M1.665,211a1.665,1.665,0,1,0,1.665,1.665A1.667,1.667,0,0,0,1.665,211Z"
                  transform="translate(0 -211)"
                  fill="#fff"
                ></path>
              </g>
            </g>
            <g
              id="Group_13140"
              data-name="Group 13140"
              transform="translate(0 72.103)"
            >
              <g id="Group_13139" data-name="Group 13139">
                <path
                  id="Path_29633"
                  data-name="Path 29633"
                  d="M1.665,361a1.665,1.665,0,1,0,1.665,1.665A1.667,1.667,0,0,0,1.665,361Z"
                  transform="translate(0 -361)"
                  fill="#fff"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <svg
          v-else
          class="block text-center h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          width="18.949"
          height="14.434"
          viewBox="0 0 18.949 14.434"
        >
          <g id="menu" transform="translate(0 -61)">
            <g
              id="Group_13130"
              data-name="Group 13130"
              transform="translate(4.441 61)"
            >
              <g id="Group_13129" data-name="Group 13129">
                <path
                  id="Path_29628"
                  data-name="Path 29628"
                  d="M132.842,61H121.665a1.665,1.665,0,0,0,0,3.331h11.177a1.665,1.665,0,0,0,0-3.331Z"
                  transform="translate(-120 -61)"
                  fill="#fff"
                ></path>
              </g>
            </g>
            <g
              id="Group_13132"
              data-name="Group 13132"
              transform="translate(4.441 66.551)"
            >
              <g id="Group_13131" data-name="Group 13131">
                <path
                  id="Path_29629"
                  data-name="Path 29629"
                  d="M132.842,211H121.665a1.665,1.665,0,0,0,0,3.331h11.177a1.665,1.665,0,0,0,0-3.331Z"
                  transform="translate(-120 -211)"
                  fill="#fff"
                ></path>
              </g>
            </g>
            <g
              id="Group_13134"
              data-name="Group 13134"
              transform="translate(4.441 72.103)"
            >
              <g id="Group_13133" data-name="Group 13133">
                <path
                  id="Path_29630"
                  data-name="Path 29630"
                  d="M132.842,361H121.665a1.665,1.665,0,0,0,0,3.331h11.177a1.665,1.665,0,1,0,0-3.331Z"
                  transform="translate(-120 -361)"
                  fill="#fff"
                ></path>
              </g>
            </g>
            <g
              id="Group_13136"
              data-name="Group 13136"
              transform="translate(0 61)"
            >
              <g id="Group_13135" data-name="Group 13135">
                <path
                  id="Path_29631"
                  data-name="Path 29631"
                  d="M1.665,61a1.665,1.665,0,1,0,1.665,1.665A1.667,1.667,0,0,0,1.665,61Z"
                  transform="translate(0 -61)"
                  fill="#fff"
                ></path>
              </g>
            </g>
            <g
              id="Group_13138"
              data-name="Group 13138"
              transform="translate(0 66.551)"
            >
              <g id="Group_13137" data-name="Group 13137">
                <path
                  id="Path_29632"
                  data-name="Path 29632"
                  d="M1.665,211a1.665,1.665,0,1,0,1.665,1.665A1.667,1.667,0,0,0,1.665,211Z"
                  transform="translate(0 -211)"
                  fill="#fff"
                ></path>
              </g>
            </g>
            <g
              id="Group_13140"
              data-name="Group 13140"
              transform="translate(0 72.103)"
            >
              <g id="Group_13139" data-name="Group 13139">
                <path
                  id="Path_29633"
                  data-name="Path 29633"
                  d="M1.665,361a1.665,1.665,0,1,0,1.665,1.665A1.667,1.667,0,0,0,1.665,361Z"
                  transform="translate(0 -361)"
                  fill="#fff"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <span v-if="countEnterOrder" class="count">{{ countEnterOrder }}</span>
      </div>
    </div>

    <!-- <div class="menuMobileTopMobile">
        <div class="icon" @click="isMenuMobie = !isMenuMobie">
          <feather-icon icon="ListIcon" svgClasses="w-8 h-8"/>
        </div>
    </div>
    <div class="tabMenuMobileTOP flex items-center justify-center" :class="{'open': isMenuMobie}">
      <div class="con-img ml-3 mr-3 cursor-pointer" @click="popupActiveCaiDat = true">
        <feather-icon icon="SettingsIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
        <span>Settings</span>
      </div>
      <div class="con-img ml-3 mr-3 cursor-pointer" @click.stop="viewHoSo()">
        <feather-icon icon="UserIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
        <span>Profile</span>
      </div>
    </div> -->

    <ho-so-user-info
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <his-order-bet
      v-if="
        $route.name.trim() === 'client-index' &&
        $store.state.isRenderdTradeIndex &&
        $store.state.isOpenSideBar
      "
      :isSidebarActive="$store.state.isOpenSideBar"
      @closeSidebar="toggleDataSidebarHisOrder"
    />

    <!-- <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <feather-icon icon="UserIcon" svgClasses="w-8 h-8" />
        <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/login/profile').catch(() => {})">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})">HisOrderBet
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
          </li>

          <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Đăng xuất</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>-->
<!--    <vs-popup-->
<!--      class="qDeposit"-->
<!--      :title="$t('Deposit')"-->
<!--      :active.sync="popupActiveNapNhanh"-->
<!--    >-->
<!--      <div class="relative p-8">-->
<!--        <div class="btn-dropdown" @click="showPopWalSL = !showPopWalSL">-->
<!--          <div class="flex items-center">-->
<!--            <span class="icon-price text-3xl font-bold white mr-4">T</span>-->
<!--            <span class="white text-2xl font-normal">{{ balanceUSDT }}</span>-->
<!--          </div>-->
<!--          <feather-icon-->
<!--            class="material-icons right-0"-->
<!--            icon="ChevronDownIcon"-->
<!--            svgClasses="w-8 h-8"-->
<!--          />-->
<!--        </div>-->
<!--        <div class="listWallShow w-full" :class="{ block: showPopWalSL }">-->
<!--          <span-->
<!--            class="drop cursor-pointer w-full block flex items-center"-->
<!--            @click="selectWallet('usdt')"-->
<!--          >-->
<!--            <span class="icon-price text-3xl font-bold white mr-4">T</span>-->
<!--            <span class="white">{{ balanceUSDT }}</span>-->
<!--          </span>-->
<!--        </div>-->
<!--        <p class="white mt-4 mb-2 text-xl font-normal mb-4">{{$t('Deposits')}}</p>-->
<!--        <div class="relative">-->
<!--          <vs-input-->
<!--            class="w-full"-->
<!--            :placeholder="$t('Please enter deposit')"-->
<!--            @keyup="ttThucNhan"-->
<!--            v-model="enterMoneyDeposit"-->
<!--          />-->
<!--          <span class="allIn cursor-pointer" @click="allEnterWallet()">-->
<!--            <span class="uppercase text-xl font-bold" style="color: #5fe349"-->
<!--              >{{$t('All')}}</span-->
<!--            >-->
<!--          </span>-->
<!--        </div>-->

<!--        <p class="noticeDeposit mt-4 mb-4 text-right">-->
<!--          <small class="text-md flex items-center justify-end"-->
<!--            >{{$t('The minimum deposit value is')}}-->
<!--            &lt;!&ndash; <img-->
<!--              :src="require('@/assets/images/landing_v2/icon-usdt.png')"-->
<!--              alt=""-->
<!--              width="16"-->
<!--              class="mx-1"-->
<!--            /> &ndash;&gt;-->
<!--            $ 11</small-->
<!--          >-->
<!--        </p>-->
<!--        <div class="sizeLarge">-->
<!--          <p class="white mb-2 title">*{{$t('Total will receive')}}</p>-->
<!--          <p title="0.00" class="receiveAmount white mb-2 text-3xl ml-4">-->
<!--            &lt;!&ndash; <img-->
<!--              :src="require('@/assets/images/landing_v2/icon-usdt.png')"-->
<!--              alt=""-->
<!--              width="24"-->
<!--            /> &ndash;&gt;-->
<!--            $ {{ ttNhan }}-->
<!--          </p>-->
<!--        </div>-->

<!--        <div-->
<!--          class="btn-naptien"-->
<!--          @click="(popupActiveNapNhanh = false), submitDeposit()"-->
<!--        >-->
<!--          {{$t('Recharge now')}}-->
<!--        </div>-->

<!--        <p class="noticeDeposit text-center mt-2">-->
<!--          <small>*{{$t('Prices are subject to change')}}</small>-->
<!--        </p>-->
<!--      </div>-->
<!--    </vs-popup>-->
<!--    <vs-popup-->
<!--      class="text-center"-->
<!--      :title="$t('Transfers money')"-->
<!--      :active.sync="popupTransferActive"-->
<!--    >-->
<!--      <div class="header flex">-->
<!--        <div class="leftHeader flex flex-col items-center">-->
<!--          <span-->
<!--            class="text-sm mb-2 font-bold white"-->
<!--            v-html="textWalletHtml"-->
<!--          ></span>-->
<!--          <span class="text-2xl font-bold">{{-->
<!--            formatPrice(amountAcc, 2)-->
<!--          }}</span>-->
<!--        </div>-->
<!--        <div class="rightHeader flex flex-col items-center">-->
<!--          <span-->
<!--            class="text-sm mb-2 font-bold white"-->
<!--            v-html="$t(`${textAccLive}`)"-->
<!--          ></span>-->
<!--          <span class="text-2xl font-bold">{{-->
<!--            formatPrice(amountAccLive, 2)-->
<!--          }}</span>-->
<!--        </div>-->
<!--        <div @click="changeTransMoney" class="changeAmount cursor-pointer">-->
<!--          <svg-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--            width="30"-->
<!--            height="30"-->
<!--            viewBox="0 0 30 30"-->
<!--            class="iconTransfer"-->
<!--          >-->
<!--            <g-->
<!--              id="Group_10897"-->
<!--              data-name="Group 10897"-->
<!--              transform="translate(-559.431 -202.553)"-->
<!--            >-->
<!--              <g-->
<!--                id="Group_4613"-->
<!--                data-name="Group 4613"-->
<!--                transform="translate(559.431 202.553)"-->
<!--              >-->
<!--                <g-->
<!--                  id="Rectangle_2919"-->
<!--                  data-name="Rectangle 2919"-->
<!--                  transform="translate(0)"-->
<!--                  fill="#e9f0fa"-->
<!--                  stroke="#e5e5e5"-->
<!--                  stroke-width="1"-->
<!--                >-->
<!--                  <rect width="30" height="30" rx="15" stroke="none"></rect>-->
<!--                  <rect-->
<!--                    x="0.5"-->
<!--                    y="0.5"-->
<!--                    width="29"-->
<!--                    height="29"-->
<!--                    rx="14.5"-->
<!--                    fill="none"-->
<!--                  ></rect>-->
<!--                </g>-->
<!--              </g>-->
<!--              <g id="conversion" transform="translate(567.976 210.905)">-->
<!--                <path-->
<!--                  id="Path_13963"-->
<!--                  data-name="Path 13963"-->
<!--                  d="M13.474,6.51H1V5.376H12.1l-3.4-3.4.8-.8,4.37,4.37a.567.567,0,0,1-.4.968Z"-->
<!--                  transform="translate(-1 -1.172)"-->
<!--                  fill="#031219"-->
<!--                ></path>-->
<!--                <path-->
<!--                  id="Path_13964"-->
<!--                  data-name="Path 13964"-->
<!--                  d="M5.536,33.338l-4.37-4.37a.567.567,0,0,1,.4-.968H14.041v1.134H2.936l3.4,3.4Z"-->
<!--                  transform="translate(-1 -20.395)"-->
<!--                  fill="#031219"-->
<!--                ></path>-->
<!--              </g>-->
<!--            </g>-->
<!--          </svg>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="content flex flex-col items-center">-->
<!--        <div class="inputGroup mb-3 w-3/4 relative">-->
<!--          <vs-input-->
<!--            class="inputx text-left w-full"-->
<!--            placeholder="Enter the amount"-->
<!--            v-model="enterAmount"-->
<!--          />-->
<!--          <div class="input-append" style="margin-top:18px">-->
<!--            <button-->
<!--              type="button"-->
<!--              class="btn cursor-pointer"-->
<!--              @click="enterAllMoney"-->
<!--            >-->
<!--              All-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--        <vs-button @click="clickTransMoney" color="#2569F8" type="filled"-->
<!--          >Transfers money</vs-button-->
<!--        >-->
<!--      </div>-->
<!--    </vs-popup>-->
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import HoSoUserInfo from "@/pages/trade/slidebar/HoSoUser";
import HisOrderBet from "@/pages/trade/slidebar/HisOrderBet.vue";
import getData from "./data.json";
import AuthenticationService from "@/services/AuthenticationService";
import I18n from "./i18n";
import NotificationDropDown from "@/pages/user/NotifiDropDown.vue";
import NotificationDropDownOld from "@/pages/user/NotifiDropDownOld.vue";
//import { gsap } from "gsap"

export default {
  components: {
    I18n,
    HoSoUserInfo,
    NotificationDropDown,
    NotificationDropDownOld,
    HisOrderBet,
  },
  data() {
    return {
      popupTransferActive: false,
      textWalletHtml:
        '<span class="mr-1 color-blue uppercase green">USDT</span> <span>Wallet</span>',
      textAccLive: "Real Account",
      amountAcc: 0,
      amountAccLive: 0,
      enterAmount: "",

      isMenuMobie: false,
      switchAmThanh: true,
      popupActiveCaiDat: false,
      popupActiveNapNhanh: false,
      numberTween: 1000,
      counter: false,
      isAcc: 0,
      blObj: getData,
      colorNT: "#0094ff",
      colorRT: "#fff",

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      interval: false,
      showPopWalSL: false,
      walletIsSelect: "usdt",
      balanceUSDT: 0,
      enterMoneyDeposit: "",
      ttNhan: 0.0,
      isMobile,
      countEnterOrder: 0,
      getBalanceVND:0,
      balanceVND:0
    };
  },
  props: {
    number: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    activeUserInfo() {
      return getData.displayName;
    },
  },
  watch: {
    number() {
      clearInterval(this.counter);
      if (this.number === this.numberTween) {
        return;
      }
      this.counter = setInterval(
        function () {
          if (Math.floor(this.numberTween) !== Math.floor(this.number)) {
            var change = (this.number - this.numberTween) / 5;
            change = change >= 0 ? Math.ceil(change) : Math.floor(change);
            this.numberTween = this.numberTween + change;
          } else {
            this.numberTween = this.number;
            clearInterval(this.counter);
          }
        }.bind(this),
        20
      );
    },
    balanceVND:{
      handler(val){
        if(val){
          this.balanceVND = val
        }
      },
    }
  },
  methods: {
    getBalanceRealAccount(){
      AuthenticationService.getInfoUser()
        .then(res=>{
         let balance = res.data.data
          this.balanceVND = balance.order[1].balance
        })
    },
    clickShowPopTrans() {
      $(".money-i").click()
      this.popupTransferActive = true;
      this.amountAcc = getData.balance;
      this.amountAccLive = getData.blLive;
    },

    clickTransMoney() {
      let amount = this.enterAmount.toString();
      amount = this.replaceAll(amount, ",", "");
      // amount = this.replaceAll(amount.toString(), "-", "");

      if (!this.isNumber(amount) || amount <= 0) {
        return this.$vs.notify({
          text: "Invalid value",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (this.typeChange) {
        // nếu true thì live to wallet

        // gửi tiền từ live tới tài khoản chính
        let obj = {
          email: getData.email,
          m: amount,
        };

        AuthenticationService.sendMoneyLiveToUsdt(obj).then((res) => {
          if (res.data.success) {
            getData.blLive -= amount;
            getData.balance += amount;

            this.amountAcc = getData.blLive;
            this.amountAccLive = getData.balance;

            // reload lại lịch sử
            //this.getListHisTradeWGD();

            return this.$vs.notify({
              text: "Successful transfer",
              color: "success",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-check",
            });
          } else {
            return this.$vs.notify({
              text: "Your balance is not enough",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      } else {
        // wallet to live

        // gửi tiền từ tài khoản chính tới live
        let obj = {
          email: getData.email,
          m: amount,
        };

        AuthenticationService.sendMoneyUsdtToLive(obj).then((res) => {
          if (res.data.success) {
            getData.blLive = parseFloat(getData.blLive) + amount;
            getData.balance = getData.balance - amount;

            this.amountAcc = getData.balance;
            this.amountAccLive = getData.blLive;

            // reload lại lịch sử
            // this.getListHisTradeWGD();

            return this.$vs.notify({
              text: "Successful transfer",
              color: "success",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-check",
            });
          } else {
            return this.$vs.notify({
              text: "Your balance is not enough",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      }
    },

    changeTransMoney() {
      if (this.typeChange) {
        // Live to Wallet
        this.typeChange = false;

        let b = this.textWalletHtml;
        let a = this.textAccLive;
        let d = getData.balance;
        let c = getData.blLive;

        this.textAccLive = b;
        this.textWalletHtml = a;
        this.amountAcc = d;
        this.amountAccLive = c;
      } else {
        // Live to Wallet
        this.typeChange = true;

        let a = this.textWalletHtml;
        let b = this.textAccLive;
        let c = getData.balance;
        let d = getData.blLive;

        this.textAccLive = a;
        this.textWalletHtml = b;
        this.amountAcc = d;
        this.amountAccLive = c;
      }
    },

    enterAllMoney() {
      if (this.typeChange) {
        // nếu true thì live to wallet

        this.enterAmount = getData.blLive;
      } else {
        // wallet to live

        this.enterAmount = getData.balance;
      }
    },

    // numberTo(start, end, duration, currency = false){

    //   console.log()
    //   this.blanceStart = end

    //   clearInterval(mm);
    //   var range = end - start;
    //   var minTimer = 50;
    //   var stepTime = Math.abs(Math.floor(duration / range));
    //   stepTime = Math.max(stepTime, minTimer);
    //   var startTime = new Date().getTime();
    //   var endTime = startTime + duration;

    //   var mm = setInterval(() => {
    //       var now = new Date().getTime();
    //       var remaining = Math.max((endTime - now) / duration, 0);
    //       var value = (end - (remaining * range))>>0;
    //       var blance = currency ? this.formatPrice(value, 2) : value;
    //       this.isAcc ? getData.blLive = blance : getData.blDemo = blance
    //       if (value == end) {
    //         clearInterval(mm);
    //       }
    //   }, stepTime);
    // },

    OnOffSound() {
      if (this.switchAmThanh) {
        localStorage.setItem("SOUND", true);
      } else {
        localStorage.setItem("SOUND", false);
      }
    },

    ttThucNhan(e) {
      let amount = e.currentTarget.value;
      amount = this.replaceAll(amount, ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");

      if (!this.isNumber(amount) || amount <= 0) {
        return this.$vs.notify({
          text: "Invalid value",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      this.ttNhan = this.formatPrice(amount, 2);
    },

    submitDeposit() {
      let amount = this.ttNhan;

      amount = this.replaceAll(amount.toString(), ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");

      if (amount <= 0) {
        return this.$vs.notify({
          text: "Invalid value",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (amount < 11) {
        return this.$vs.notify({
          text: "The minimum amount is not enough",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      let obj = {
        money: amount,
        id: getData.uidLive,
      };

      AuthenticationService.depositWallet(obj).then((res) => {
        if (res.data.success == 1) {
          getData.balance -= amount;
          getData.blLive += amount;

          this.$vs.notify({
            text: "Recharge successful.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        } else if (res.data.success == 3) {
          this.$vs.notify({
            text: "Your balance is not enough.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        } else {
          this.$vs.notify({
            text: "Invalid value",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      });
    },

    allEnterWallet() {
      this.ttNhan = this.formatPrice(getData.balance, 2);
      this.enterMoneyDeposit = this.formatPrice(getData.balance, 2);
    },

    selectWallet(val) {
      this.walletIsSelect = val;
      this.showPopWalSL = false;
    },

    reloadBalanceDemo() {
      $(".dropdown-account").hide();
      AuthenticationService.reloadMoneyDemo().then((res) => {
        if (res.data.success) {
          getData.blDemo = 1000;

          this.$vs.notify({
            text: "Practice Account loaded.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        }
      });
    },

    getBalanceWalletClick() {
      AuthenticationService.getBalanceWallet().then((res) => {
        if (res.data.success) {
          let mU = res.data.data.usdt;
          this.balanceUSDT = this.formatPrice(mU, 2);
        }
      });
    },

    changeAccount(val) {
      if (val) {
        localStorage.setItem("BO_BALANCE_TYPE", "LIVE");
        this.isAcc = getData.isAccount = 1;
      } else {
        localStorage.setItem("BO_BALANCE_TYPE", "DEMO");
        this.isAcc = getData.isAccount = 0;
      }
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    nFormatter(num, digits) {
      const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "K" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" },
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var item = lookup
        .slice()
        .reverse()
        .find(function (item) {
          return num >= item.value;
        });
      return item
        ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
        : "0";
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

    viewHoSo() {
      this.toggleDataSidebar(true);
      this.$store.commit("TOGGLE_IS_OPEN_SIDEBAR", false);

    },

    viewHelp() {
      this.$router.push("/ho-tro").catch(() => {});
    },

    toggleDataSidebarHisOrder() {
      this.$store.commit("TOGGLE_IS_OPEN_SIDEBAR");
      this.$store.commit("IS_OPEN_NOTIFY_DROPDOWN", false);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
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
      localStorage.removeItem("tokenUser");

      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push("/login").catch(() => {});
    },
  },
  created() {
    let checkSound = localStorage.hasOwnProperty("SOUND");
    if (!checkSound) {
      localStorage.setItem("SOUND", true);
    } else {
      let getS = localStorage.getItem("SOUND");
      if (getS === "false") {
        this.switchAmThanh = false;
      }
    }

    this.blanceStart = this.isAcc ? getData.blLive : getData.blDemo;

    let acc = localStorage.getItem("BO_BALANCE_TYPE");
    if (acc == "LIVE") {
      this.isAcc = getData.isAccount = 1;
    } else {
      this.isAcc = getData.isAccount = 0;
    }
    let that = this;

    document.addEventListener('keyup', function (evt) {
      if (evt.keyCode === 27) {
        if(that.popupActiveCaiDat == true){
          that.popupActiveCaiDat = false
        }else if(that.popupActiveNapNhanh == true){
          that.popupActiveNapNhanh = false
        }else if(that.popupTransferActive == true){
          that.popupTransferActive = !that.popupTransferActive
        }
      }
    });
    this.getBalanceRealAccount()
  },
  mounted() {
    let stateOpen = localStorage.getItem("stateOpen");
    if (stateOpen) {
      const list = JSON.parse(stateOpen);
      if (list) {
        this.countEnterOrder = list.l.bet[0].items.length;
      } else {
        this.countEnterOrder = 0;
      }
    }

    window.addEventListener("stateOpen-localstorage-changed", (event) => {
      if (!event.detail.storage) {
        this.countEnterOrder = 0;
        return;
      }
      const list = JSON.parse(event.detail.storage);
      if (list) {
        this.countEnterOrder = list.l.bet[0].items.length;
      } else {
        this.countEnterOrder = 0;
      }
    });
  },
};
</script>

<style scoped lang="scss">
@media only screen and(min-width:768px) and (max-width: 840px){
  // .text-item-nav{
  //   font-size: 1.1rem!important;
  // }
  .img-nav img{
    height: 30px;
  }
}
.accLive,
.accDemo {
  min-width: 140px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left,
  .right {
    padding: 0.75rem !important;

    .title {
      color: #ffffff80;
      font-size: 12px;
    }

    .text {
      color: #fff;
      font-weight: 700;
      font-size: 18px;
    }
  }

  .left {
    display: flex;
    flex-direction: column;
  }

  svg {
    cursor: pointer;
    path {
      fill: #fff;
    }
  }
}

.streak {
  .nav-streak-rewards {
    padding: 10px 20px 12px 84px;
    border-radius: 10px;
    background: #876e97;
    text-align: left;
    position: relative;

    @media only screen and (max-width: 490px) {
      padding: 10px 20px 12px 60px;
      .nav-streak-rewards-label {
        font-size: 14px;
      }

      .nav-streak-rewards-value {
        font-size: 14px;
      }
    }
    @media only screen and(min-width:768px) and (max-width: 840px){
      padding: 12px 8px 12px 72px;
    }
    &::before {
      content: "";
      display: block;
      width: 40px;
      height: 42px;
      background: url("~@/assets/images/landing_v2/icon-price.png") no-repeat;
      position: absolute;
      background-size: cover;
      top: 50%;
      transform: translateY(-50%);
      left: 24px;
      @media only screen and (max-width: 490px) {
        left: 10px;
      }
      @media only screen and(min-width:768px) and (max-width: 840px){
        height: 30px;
        width: 30px;;
      }
    }
  }
  @media only screen and (min-width: 1000px) and (max-width: 1050px) {
    .nav-streak-rewards{

    margin-left: 45px!important;
  }
  .vx-navbar-wrapper .vx-navbar .vs-con-items{
    width: 101%!important;
  }
}

  .nav-streak-rewards-label {
    white-space: nowrap;
    font-size: 18px;

    line-height: 1;
    color: #fff;
    margin-bottom: 3px;
    display: block !important;
  }

  .nav-streak-rewards-value {
    font-size: 18px;
    font-weight: 700;
    line-height: 16px;
    color: #fff;
    white-space: nowrap;
    display: flex !important;
    align-items: center;
    img {
      margin-right: 4px;
    }
  }
}

.nowrap {
  white-space: nowrap;
}

.reloadBalance {
  right: 10px;
  background: #fc5f5f;
  width: 40px;
  height: 25px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
}

.menuMobileTopMobile {
  display: none;
}

.tabMenuMobileTOP {
  visibility: hidden;
  position: fixed;
  height: 60px;
  left: 0;
  right: 0;
  top: -60px;
  background: #02142b;
  z-index: 999;
  transform: translate3d(0, 0, 0);
  transition-property: -webkit-transform visibility;
  transition-property: transform visibility;
  transition-property: transform visibility, -webkit-transform visibility;
  transition-duration: 0.2s;
}

.notification-dropdown-button-number {
  position: absolute;
  top: -7px;
  left: calc(50% + 2px);
  display: inline-block;
  overflow: hidden;
  background: #e22a67;
  color: #fff;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 9px;
  border: 2px solid #02142b;
  padding: 0 2px;
}

.toggleButtonWrapper span {
  display: inline-block;
  line-height: 25px;
  padding-left: 5px;
  padding-right: 5px;
}

.setting .wrap .line .type svg,
.setting .wrap .line .control svg {
  margin-right: 5px;
}

.setting .wrap .line-language-pc {
  padding: 15px;
  border-bottom: 1px solid #4a3c6f;
}

.setting .wrap .line {
  padding: 15px;
}

.qDeposit .allIn {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  color: #00ffe9;
}
.qDeposit .receiveAmount {
  display: flex;
  align-items: center;
  img {
    margin-right: 4px;
  }
}

.qDeposit .listWallShow {
  position: absolute;
  z-index: 1000;
  display: none;
  background-color: #38495d;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.qDeposit .listWallShow .drop {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
}

.icon.USDT {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogIDxpbWFnZSBpZD0iXzgyNSIgZGF0YS1uYW1lPSI4MjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FNQUFBQkVwSXJHQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTE5VRXhVUlV4cGNTYWdlaVdnZWdBQUFDYWdleVdnZWxXcXFpYWhleWFnZWxXcVZTV2ZlUUIvZjM5L2Z3Q3FWUzZrZndELy95dW5nU2VwZ1FDcXFpYWdlMUN2a1pIYXRpV2dlalNuaEQycmlDcWpmZ0QvQUM2cWd5K3FnMUN1a3k2b2d5K3FnMysvcjArcmp5V2llemFyaUNXaWZFMnhsQ3lrZmkrbGdDdWpmemVyaUN1bWdWZTFtVENuZ1Rhc2lEU3JoV084cGwyN216U25oQ3VtZ0dhL21UU25oQzZsZ0Mra2dDYWhlaTJrZ0N1amZpdWtmbTdIcGpXcmhpK3BnMDJ4a2k2bWdWZTJtUytsZ1RDbWdqZW5obEswbGkrbGdTV2hlbFd2a1RHcWhUQ3FoWm15c3ArL3Z6R3BoRFdsaERhb2hGQzFrelduaEN1bmdWbTRtWisvbnoydWl6MnhqaXVuZ1N5aWZUeXFpVGFvaEVtdWpGVzNsa0d5amtheWtqV3NpQzZvZ1RDbmdqV3FoaTJuZ2ordmppK25naWFoZS8vLy95V2hleW1pZlNPZ2Vkdnc2U2VoZkNhbGZpV2dlaWlpZkNlaGV5bXVoU2l0aENhcGdTbW9nU0tmZVRHbWdUU25neDJkZGlXaWZDZXBnU1dqZkNhamZCcWNkUDcvL2htYmN5U2dlc3ZvM3grZWR6R21ndS80OVNXaGVoYWFjZTc0OVJlYWNoNmRkdXYyOHlDZmVDK2xnU1dtZmlhcGdDYW5meVNoZWlhamZTYWtmU21wZ1NLZmVCZWJjak9uZzNEQnFDZWlmS25heTJLN29QMysvaWlpZlRpcGhrcXhrUnFiYzZ6YnpDeWtmeGFhY3UzNDlPcjI4b2pMdGtpd2tLSFd4b2pNdDludjZCdWNkRkcwbG4vSXNYSENxVHVxaUpIUHZNN3E0V3kvcFNHZmQ4am8zUk9aYiszMzlNcm8zMlc4b1dPOG9HRzduMTY2bllMSnMvRDU5dkw1OXkya2YvNy8vL1Q2K0h6SHNDbXVoRE9uZ3FyYXl5aXRnekNtZ2QveDdOenc2cXZiekwvajJmTDY5Mk83b0hQQ3FyL2oyQ2FnZXltaWZHL0JwNFRLdERlb2hST1liNGJMdFNTZ2VXSzduL3I5L0dpK28vdjkvWUhKc2hPWWNFT3RqQmliY3l1amZtcStwQ3VqZlVDc2lpMmxmeWFoZWhtY2MvajgrK24xOG5qRXJYZkVyTzczOWQveTdQYjcraUtnZU56djZuL0hzVVF3dEUwQUFBQmxkRkpPVXdEKyt3SDgvUVArK3dQN0FnSUQvZ0g2L2dQK013ZjZwbC9zQWV2b0p1cnJDQ1Q4aXZ3azc5YnVoK2N0MUpla0Z4U1krUlNhL2Z6OTArM3JGNkhMSWM4anpzK0pJdEg2TTgzTENnaktpWWNtaWZzb0NGOWY5KzFkcFNZblhTaVU2TkdVNTEzUktIWXZ3d0FBQXVsSlJFRlVPTXR0VS9WYlZFRVVuUzNlZ3NTcXBJQ0VvQklpaW9xQzNkM2ROY05iMkY1Z2lRMldFRnhRQkJXbEpFd2FwVlRDN3U3dXpyL0JlYkdyZkhKK21ybm5mSFB2ekp3REFJMStmUUFZdWpRa2VMQzkvZURna0dWREFlakRBLy9BRm9DZ0lZSHFSRW1DVkpvZ1NWUUhEZ21paTJaWWdka0RSTW84QVo5RFFFaHcrSUk4cFdpQU43RCt5M3ZPVktSeiswSUwrbkxUejQzenhBUU5hK0RvdnNPWmdOMUFURmQ1T1RKbjJBSi85eHdoL0EvQ0hLK0oxQndPZGs3VGR2VEFZNFZxZ3BPZEF6NWxuc0tHMmtkMUExV3hVU3pFTkcveElsOENrdnE3MGNlaUxUZ1dmVk5QUXNKUHRBYS94Z2dsRjBJeXN3WjF3NzFNRWtLdWNnUUFvVzY3OEFYSWl1ZDBYVmRVcEtNWER5dXdnRWgyQ3dPdWFnRnVWMXoxTk9WRVNrdkRFNFNlTmJUZ1pXTlZNUzRMOGwyQlMyOCtOVkNNd1dUTSt2amhJRUtWcE41b05CbmtWSlhmMndVTWtuRHdTaWJWR01WdjM3OXJScWo5WmVkcnNWRWpsZUV5UnpJYURFekFJOGkwNWRXbjJscFB2bW52NnVwb1BObmFkcXE2WElzVlJOSVlZQy9Gdk9iRzBjTjEyYVNwOHh0Q0hka21NcnZ1OEtIQ0xLeVFqcVFGWk1iVld5V0dWeGxOUDMrZE9mTTkvVVdtM2xCeTdVSUdTUXZvRmpDMllIL1prZnJUWDgvK3Jqbjc1WFQ5a2JMOUJic2gwNElaRXU3UnBwWStyajMwQTZGUFIyc0xTK08wZXlBN0pIdE5VaWJXSEdnNi9obWg1a2NQRG1qRU1wSzU1aXJnbWk5Z2YyL2ZIUmkvSGFGdDkyK1QrOWlTUUwwU2hORlBUVU11anFNRThiRXhadGNrcndnRllCajFXVDBMdU1waEFQQVdpSHdKaStDZ1RsZHBFUkIrdy8xNTJKaFRHTVBRZ2pTRXJsc0VOb3I1bU1hV202d1Nzb0pMVjlMU0xwOW5CVUxWSkc5c09kQUxUTzIva3pXbFBIWHYzbFE1YThtZC9jZGprckc5aDRxMXZSaUQ2ZStzOHBoaGpvNFY4Sm1saUJKU3dZbkJvSUlqakZMTTlURUhoenBqU2NCd1paS0FIMDVGTDV3dlNMcTRQR0RPMytoUmM0QjE2emZqOENibjVpYmo4RzdZdEJvdy9jMmc0aCs1WmV6V2lGR2pJamFPWFJ1SjQ5K1BZZjRBS2NwYTNSVHNiVzBBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-position: center;
}

.icon.ETH {
  background: url("~@/assets/images/sky/eth.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

.icon.BTC {
  background: url("~@/assets/images/sky/bitcoin.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

.mhelper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mhelper span {
  text-align: center;
  white-space: nowrap;
}

.msetting svg,
.mhoso svg {
  margin: auto;
  stroke: #fff;
}

@media screen and (max-width: 600px) {
  .msetting,
  .mhoso,
  .ttM,
  .mhelper,
  .maddmoney,
  .mDatLenh {
    display: none !important;
  }

  .mTT svg {
    width: 1.7rem !important;
    height: 1.7rem !important;
  }

  .mTT .notification-dropdown-button-number {
    top: -10px;
    min-width: 22px;
    height: 22px;
    line-height: 18px;
    font-size: 12px;
  }

  .menuMobileTopMobile {
    position: fixed;
    right: 0;
    top: 60px;
    background: #02142b;
    padding: 0px 10px;
    border-bottom-left-radius: 20px;
    display: block;
    cursor: pointer;
  }

  .tabMenuMobileTOP.open {
    visibility: visible;
    transform: translate3d(0, 100%, 0);
  }
}

@media screen and (max-width: 425px) {
  .text-acc {
    zoom: 0.9;
    padding-right: 0 !important;
  }
}

.text-acc {
}

@media screen and (max-width: 376px) {
  .text-acc {
    zoom: 0.8;
    padding-right: 0 !important;
  }
  .text-down {
    width: 1.2rem !important;
    height: 1.2rem !important;
  }
  .vs-tabs--li button.vs-tabs--btn {
    font-size: 12px;
  }
}

.content .inputGroup .input-append button {
  width: 60px;
  height: 38px;
  background: transparent;
  border: none;
}

.content .inputGroup .input-append {
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}

.content {
  padding: 2rem;
}

.header {
  position: relative;
  background-color: #181c21;
}

.header .leftHeader {
  border-right: 1px solid rgba(255, 255, 255, 0.17);
}

.header .leftHeader,
.header .rightHeader {
  padding: 2rem;
  flex: 1 auto;
  max-width: 50%;
}

.header .iconTransfer {
  width: 40px;
  height: 40px;
}

.header .changeAmount {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

@media (max-width: 1024.98px) {
  .info-money {
    border-radius: 3px !important;
    height: 40px;
    display: flex;
    align-items: center;
  }
}

.info-money {
  background-color: #ffffff1f !important;
  border-radius: 10px;
  padding: 0 20px;
  margin-left: 26px;
  border: 1px solid #dcdcdc;
  font-size: 1rem!important;
  @media only screen and (max-width: 490px) {
    padding: 24px 10px;
    margin-left: 6px;
  }
  @media only screen and (min-width: 768px) and(max-width:840px) {
    padding: 28px 10px;
    margin-left: 12px;
  }
  & > * {
    cursor: pointer;
  }

  .title {
    white-space: nowrap;
    line-height: normal;
    color: #fff;
    font-size: 16px;
    text-align: left !important;
    font-family: "Sarabun", Helvetica, Arial, sans-serif;
    @media only screen and (max-width: 490px) {
      font-size: 14px;
    }
  }

  .text-money {
    font-size: 24px;
    color: #fff;
    font-family: "Sarabun", Helvetica, Arial, sans-serif;
    line-height: 1;
    display: flex;
    align-items: center;
    img {
      margin-right: 4px;
    }
    @media only screen and (max-width: 490px) {
      font-size: 16px;
    }
  }
  .money-i {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 490px) {
      .image {
        display: none !important;
      }
    }
  }

  .arr_down {
    width: 25px;
    height: 25px;
    background-color: #8b8d96;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-left: 4px;
  }

  .wrapper-money {
    padding: 2px 0 8px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media only screen and (max-width: 490px) {
      margin-right: 8px;
    }
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1100px) {
  .info-money{
    padding: 29px 20px!important;
    border-radius: 7px!important;
  }
}
</style>
<style lang="scss">
.content .inputGroup input {
  background: #fff;
  color: #545454;
}

@media screen and (max-width: 376px) {
  .vs-tabs--li button.vs-tabs--btn {
    font-size: 12px;
  }
}
@media screen and (max-width: 968px) {
  .navbar-floating .vx-navbar {
    height: 56px !important;
    display: flex;
    align-items: center;
  }
}

.navbar-floating .vx-navbar {
  height: 120px;
  padding: 2px 0;
  background: #000 !important;
}

.setting .vs-popup {
  width: 390px !important;
}

.qDeposit .vs-popup {
  width: 300px !important;
}
.qDeposit .vs-button--text {
  width: 100%;
}
.qDeposit .vs-button--text > span.icon,
.qDeposit .listWallShow .drop > span.icon {
  width: 20px;
  height: 20px;
  overflow: hidden;
  margin-right: 4px;
}

.qDeposit .vs-button--text > span,
.qDeposit .listWallShow .drop > span {
  line-height: 20px;
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
}

.vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {
  padding: 0.75rem 1rem;
}
.arrow-down-custom {
  margin-top: 7px;
}

.btn-dot {
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #444a5f;
  border-radius: 6px;
  margin-bottom: 5px;
  position: relative;
}

.btn-dot .count {
  position: absolute;
  top: -7px;
  left: calc(50% + 2px);
  display: inline-block;
  overflow: hidden;
  background: #e22a67;
  color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 22px;
  height: 22px;
  line-height: 14px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 9px;
  border: 2px solid #02142b;
  padding: 0 2px;
}

@media screen and (max-width: 600px) {
  .btn-dot .count {
    top: -10px;
    line-height: 18px;
    font-size: 12px;
  }
}
.maddmoney {
  margin: 0 32px 0 68px;
}
.add-money {
  background: #eec40d !important;
  color: #000 !important;
  font-weight: 700;
  border-radius: 10px;
  font-size: 24px;
  padding: 12px 20px 14px !important;
}
@media only screen and(min-width:768px) and (max-width: 840px){
  .add-money{
    padding: 10px 12px 12px !important;
  }
}
.img-nav {
  height: 40px;
  text-align: center;
}
.text-item-nav {
  font-size: 24px;
  color: #fff;
  line-height: 1;
}
[dir] .theme-dark .con-vs-popup .vs-popup {
  background: #000000 !important;
}
.vuesax-app-is-ltr .vs-popup--content {
  padding: 0;
}
[dir] .setting .wrap .line-language-pc[data-v-69cf3c30] {
  padding: 15px;
  border-bottom: 0;
}
.con-vs-popup .vs-popup--content {
  padding: 0;
}
[dir] .setting .wrap .line-language-pc[data-v-69cf3c30] {
  padding: 15px;
  // padding-left: 36px;
  border-bottom: 0;
}
[dir] .setting .wrap .line[data-v-69cf3c30] {
  padding: 15px;
  // padding-left: 36px;
}
.i18n-class .i18n-locale {
  img {
    height: 34px !important;
    width: 50px !important;
    border-radius: 4px;
  }
  span {
    margin-top: 1rem !important;
    font-size: 1.25rem;
    color: #fff;
    white-space: nowrap;
  }
}
.vs-switch--circle {
  width: 37px;
  height: 37px;
  left: -11px;
  top: -4px;
}
[dir] .theme-dark .vs-switch.vs-switch-success.vs-switch-active {
  background: #5fe349;
}
[dir] .theme-dark .vs-switch {
  height: 30px;
  width: 80px;
}
[dir] .theme-dark .con-vs-popup .vs-popup .vs-popup--header {
  background: #494949 !important;
}
.setting .vs-popup {
  width: 56vw !important;
}
[dir] .theme-dark .con-vs-popup .vs-popup .vs-popup--header {
  height: 64px;
  h3 {
    font-size: 29px;
    font-weight: 400;
    margin-left: 36px;
  }
}
.vs-popup--close {
  top: -20px;
}
.qDeposit .vs-popup {
  width: 50vw !important;
}
@media only screen and(max-width:768px){
  .qDeposit .vs-popup {
    width: 100vw !important;
    height: 100vh;
  }
}

.btn-naptien {
  background: #5fe349;
  height: 63px;
  width: 100%;
  margin: auto;
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
}
.btn-dropdown {
  width: 100%;
  height: 81px;
  border-radius: 10px;
  padding: 20px;
  background-color: #494949;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.icon-price {
  height: 40px;
  width: 40px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4fd1d9;
}
.dropdown-account {
  /deep/.vs-dropdown--custom,
  .vs-dropdown--menu {
    background: #595959 !important;
    box-shadow: 0px -0.8225805759429932px 6.580644607543945px 2.4677417278289795px
      #ffffff4d inset;
  }
}
</style>
