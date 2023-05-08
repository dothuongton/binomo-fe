<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Đức Nguyễn
  Author Telegram:  @skydnz
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
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>CHI TIẾT THÀNH VIÊN ĐẠI LÝ</h4>
      <feather-icon
        icon="XIcon"
        @click.stop="isSidebarActiveLocal = false"
        class="cursor-pointer"
      ></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>
    <VuePerfectScrollbar>
      <div class="affiliatePage pt-8">
        <div class="w-full">
          <vs-tabs alignment="center">
            <vs-tab
              label="General"
              @click="(showGobal = true), (showCom = false), (showqlHt = false)"
            >
            </vs-tab>
            <vs-tab
              label="Profit commission"
              @click="
              chiTietLoiNhuanHoaHong,
                (showGobal = false),
                (showCom = true),
                (showqlHt = false)
            "
            >
            </vs-tab>
            <vs-tab
              label="System Management"
              @click="(showGobal = false), (showCom = false), (showqlHt = true)"
            >
            </vs-tab>
          </vs-tabs>
          <div class="m-6">
            <div class="gobal" :class="{ block: showGobal }">
                <div class="dashboard-page dashboard-page--pc mt-4">
                  <div class="vx-row">
                    <div class="vx-col w-full lg:w-1/3 mb-4">
                      <div class="boxBasic bgSecondary borderSecondary">
                        <div
                          class="heading flex items-center mb-3 pb-3 borderBtSecondary"
                        >
                          <div class="flex boxRank items-center">
                            <div class="rank-number">
                              <div
                                class="backgroundImd iconRank"
                                :class="`rank${useDataAgencyDetail.level_vip}`"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div class="body">
                          <h5
                            class="nextRankCondition colorSecondary text-center mb-3"
                          >
                            Level Condition

                          </h5>
                          <span v-if="useDataAgencyDetail.level_vip == 5" class=" lv5-notifi text-center md:text-center text-xs italic">* Conditions to maintain the level</span>

                          <div class="vx-row">
                            <div class="vx-col w-2/3">
                              <p class="text-base white-50 mb-2 name">
                                F1 total (This week)
                              </p>
                              <p
                                class="text-xl font-size-18 colorPrimary m-0 value"
                              >
                              <span class="colorSecondary"
                              >{{ useDataGetNguoiGioiThieuAdmin.hhttisMe }} /
                              </span>
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 1"
                                >2,500</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 2"
                                >5,000</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 3"
                                >8,000</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 4"
                                >16,000</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 5"
                                >16,000</span
                                >
                                <!-- <span class="colorGray" v-if="vip_lv == 6"
                                  >64,000</span
                                >
                                <span class="colorGray" v-if="vip_lv >= 7"
                                  >128,000</span
                                > -->
                              </p>
                            </div>
                            <div class="vx-col w-1/3">
                              <p class="text-base white-50 mb-2 name">
                                F1 Dealer
                              </p>
                              <p class="text-xl font-size-18 m-0 value">
                              <span class="colorSecondary"
                              >{{ useDataGetNguoiGioiThieuAdmin.tsdlisMe }} /
                              </span>
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 1"
                                >3</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 2"
                                >4</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 3"
                                >5</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 4"
                                >6</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 5"
                                >6</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip == 6"
                                >8</span
                                >
                                <span class="colorGray" v-if="useDataAgencyDetail.level_vip >= 7"
                                >9</span
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 mb-4">
                      <div class="affiliateInfo bgSecondary borderSecondary">
                        <div class="referralSponsor">
                          <p class="mb-0">
                          <span class="text-xs colorSecondary mb-2"
                          >Presenter
                          </span>
                          </p>
                          <p>
                          <span class="text-2xl colorSecondary mb-2 value">{{
                              useDataGetNguoiGioiThieuAdmin.nick != "" ? useDataGetNguoiGioiThieuAdmin.nick : "-----"
                            }}</span>
                          </p>
                        </div>
                        <hr class="borderBottom" />
                        <div class="linkGroup m-0">
                          <div class="vx-row">
                            <div class="vx-col w-1/2 mb-2">
                              <p class="text-xs colorSecondary2 mb-2">
                                Total number of traders
                              </p>
                              <p class="totalReferral colorSuccess text-2xl">
                                {{ useDataGetNguoiGioiThieuAdmin.tsngd }}
                              </p>
                            </div>
                            <div class="vx-col w-1/2 mb-2">
                              <p class="text-xs colorSecondary2 mb-2">
                                Total Agents
                              </p>
                              <p class="totalAgency colorPrimary text-2xl">
                                {{ useDataGetNguoiGioiThieuAdmin.tsdl }}
                              </p>
                            </div>
                            <div class="vx-col w-1/2">
                              <p class="text-xs colorSecondary2 mb-2">
                                Trading Commissions
                              </p>
                              <p class="colorDanger text-2xl m-0">
                                {{ useDataGetNguoiGioiThieuAdmin.hhgd }}
                              </p>
                            </div>
                            <div class="vx-col w-1/2">
                              <p class="text-xs colorSecondary2 mb-2">
                                Agent's Commission
                              </p>
                              <p class="colorPrimary text-2xl m-0">
                                {{ useDataGetNguoiGioiThieuAdmin.hhdl }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 mb-4">
                      <div class="affiliateInfo bgSecondary borderSecondary">
                        <p
                          class="text-base font-bold white mb-3 affiliateInfo-title"
                          style="vertical-align: middle"
                        >
                          <svg
                            id="unlink"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 15.885 15.885"
                            class="mr-1"
                          >
                            <path
                              id="Path_34840"
                              data-name="Path 34840"
                              d="M13.347,9.63l1.191-1.191a4.961,4.961,0,0,0,1.39-3.475,4.657,4.657,0,0,0-1.489-3.475A4.657,4.657,0,0,0,10.964,0,4.657,4.657,0,0,0,7.489,1.489L6.3,2.581a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0L8.879,2.78a3.063,3.063,0,0,1,4.17,0,3.08,3.08,0,0,1,.894,2.184,2.7,2.7,0,0,1-.894,2.085L11.957,8.24a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0Z"
                              transform="translate(-0.043)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34841"
                              data-name="Path 34841"
                              d="M8.24,11.957,7.049,13.148a3.063,3.063,0,0,1-4.17,0,3.08,3.08,0,0,1-.894-2.184,2.7,2.7,0,0,1,.894-2.085L3.971,7.688a.96.96,0,0,0,0-1.39.96.96,0,0,0-1.39,0L1.489,7.489A4.657,4.657,0,0,0,0,10.964a4.657,4.657,0,0,0,1.489,3.475,4.657,4.657,0,0,0,3.475,1.489,4.657,4.657,0,0,0,3.475-1.489L9.63,13.247a.951.951,0,1,0-1.39-1.291Z"
                              transform="translate(0 -0.043)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34842"
                              data-name="Path 34842"
                              d="M9.368,5.2,5.2,9.368a.96.96,0,0,0,0,1.39,1.072,1.072,0,0,0,.695.3,1.072,1.072,0,0,0,.695-.3l4.17-4.17A.983.983,0,1,0,9.368,5.2Z"
                              transform="translate(-0.035 -0.035)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34843"
                              data-name="Path 34843"
                              d="M2.283,3.673a.9.9,0,0,0,.695.3.9.9,0,0,0,.695-.3.96.96,0,0,0,0-1.39L1.688.3A.96.96,0,0,0,.3.3a.96.96,0,0,0,0,1.39Z"
                              transform="translate(0 0)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34844"
                              data-name="Path 34844"
                              d="M13.688,12.3a.983.983,0,1,0-1.39,1.39l1.986,1.986a.96.96,0,0,0,1.39,0,.96.96,0,0,0,0-1.39Z"
                              transform="translate(-0.087 -0.087)"
                              fill="#2a74f9"
                            ></path>
                          </svg>

                          {{$t("Sign Up Link")}}
                        </p>
                        <div class="groupButton flex mb-4 relative">
                          <div class="leftControl">
                            <input
                              type="text"
                              readonly="readonly"
                              v-model="linkDk"
                              class="form-control w-full text-base pl-2"
                            />
                          </div>
                          <div class="rightControl">
                            <button
                              class="btn button cursor-pointer"
                              v-clipboard:copy="linkDk"
                              @click="saoChep"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                        <p
                          class="text-base font-bold white mb-3 affiliateInfo-title"
                          style="vertical-align: middle"
                        >
                          <svg
                            id="unlink"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 15.885 15.885"
                            class="mr-1"
                          >
                            <path
                              id="Path_34840"
                              data-name="Path 34840"
                              d="M13.347,9.63l1.191-1.191a4.961,4.961,0,0,0,1.39-3.475,4.657,4.657,0,0,0-1.489-3.475A4.657,4.657,0,0,0,10.964,0,4.657,4.657,0,0,0,7.489,1.489L6.3,2.581a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0L8.879,2.78a3.063,3.063,0,0,1,4.17,0,3.08,3.08,0,0,1,.894,2.184,2.7,2.7,0,0,1-.894,2.085L11.957,8.24a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0Z"
                              transform="translate(-0.043)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34841"
                              data-name="Path 34841"
                              d="M8.24,11.957,7.049,13.148a3.063,3.063,0,0,1-4.17,0,3.08,3.08,0,0,1-.894-2.184,2.7,2.7,0,0,1,.894-2.085L3.971,7.688a.96.96,0,0,0,0-1.39.96.96,0,0,0-1.39,0L1.489,7.489A4.657,4.657,0,0,0,0,10.964a4.657,4.657,0,0,0,1.489,3.475,4.657,4.657,0,0,0,3.475,1.489,4.657,4.657,0,0,0,3.475-1.489L9.63,13.247a.951.951,0,1,0-1.39-1.291Z"
                              transform="translate(0 -0.043)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34842"
                              data-name="Path 34842"
                              d="M9.368,5.2,5.2,9.368a.96.96,0,0,0,0,1.39,1.072,1.072,0,0,0,.695.3,1.072,1.072,0,0,0,.695-.3l4.17-4.17A.983.983,0,1,0,9.368,5.2Z"
                              transform="translate(-0.035 -0.035)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34843"
                              data-name="Path 34843"
                              d="M2.283,3.673a.9.9,0,0,0,.695.3.9.9,0,0,0,.695-.3.96.96,0,0,0,0-1.39L1.688.3A.96.96,0,0,0,.3.3a.96.96,0,0,0,0,1.39Z"
                              transform="translate(0 0)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34844"
                              data-name="Path 34844"
                              d="M13.688,12.3a.983.983,0,1,0-1.39,1.39l1.986,1.986a.96.96,0,0,0,1.39,0,.96.96,0,0,0,0-1.39Z"
                              transform="translate(-0.087 -0.087)"
                              fill="#2a74f9"
                            ></path>
                          </svg>

                          Referral code
                        </p>
                        <div class="groupButton flex mb-3">
                          <div class="leftControl">
                            <input
                              type="text"
                              readonly="readonly"
                              v-model="useDataAgencyDetail.ref"
                              class="form-control w-full text-base pl-2"
                            />
                          </div>
                          <div class="rightControl">
                            <button
                              class="btn button cursor-pointer"
                              v-clipboard:copy="useDataAgencyDetail.ref"
                              @click="saoChep"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="vx-col w-full lg:w-2/3 mb-4">
                      <div
                        class="wrap-chart bgSecondary borderSecondary recent-statistics"
                      >
                        <vs-tabs>
                          <vs-tab
                            label="This month"
                            @click="(showTN = true), (showTT = false)"
                          >
                          </vs-tab>
                          <vs-tab
                            label="Last month"
                            @click="(showTT = true), (showTN = false)"
                          >
                          </vs-tab>
                        </vs-tabs>
                        <div class="p-2">
                          <div
                            class="tn"
                            :class="{ block: showTN, hidden: !showTN }"
                          >
                            <div class="content">
                              <div class="vx-row">
                                <div class="vx-col w-full lg:w-1/3">
                                  <p
                                    class="text-xl font-bold white my-4 recent-statistics-title"
                                  >
                                    Recent figures
                                  </p>
                                  <p class="totalReferral colorSuccess mb-4">
                                    Total number of new traders ({{ useDataGetNguoiGioiThieuAdmin.ttngdTN }})
                                  </p>
                                  <p class="totalAgency colorBlue mb-4">
                                    Total number of new dealers ({{ useDataGetNguoiGioiThieuAdmin.tsdlmtn }})
                                  </p>
                                  <p class="colorDanger">
                                    Total new commissions ({{
                                      useDataGetNguoiGioiThieuAdmin.tshhmtn.toFixed(3)
                                    }})
                                  </p>
                                </div>
                                <div class="vx-col w-full lg:w-2/3">
                                  <div class="wrap-chart bgPrimary">
                                    <highcharts
                                      ref="chartSpline"
                                      :options="optionsSpline"
                                    ></highcharts>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tt"
                            :class="{ show: showTT, hidden: !showTT }"
                          >
                            <div class="content">
                              <div class="vx-row">
                                <div class="vx-col w-full lg:w-1/3">
                                  <p
                                    class="text-xl font-bold white my-4 recent-statistics-title"
                                  >
                                    Recent figures
                                  </p>
                                  <p class="totalReferral colorSuccess mb-4">
                                    Total number of new traders ({{ useDataGetNguoiGioiThieuAdmin.tslgdmtt  }})
                                  </p>
                                  <p class="totalAgency colorBlue mb-4">
                                    Total number of new dealers ({{ useDataGetNguoiGioiThieuAdmin.tsdlmtt }})
                                  </p>
                                  <p class="colorDanger">
                                    Total new commissions ({{ useDataGetNguoiGioiThieuAdmin.tshhmtt }})
                                  </p>
                                </div>
                                <div class="vx-col w-full lg:w-2/3">
                                  <div class="wrap-chart bgPrimary">
                                    <highcharts
                                      ref="chartSplineTwo"
                                      :options="optionsSpline2"
                                    ></highcharts>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 mb-4">
                      <div class="networkVolumeStats bgSecondary borderSecondary">
                        <div class="cardHeader flex items-center">
                          <svg
                            id="b-chart"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            class="mr-2"
                          >
                            <rect
                              id="Rectangle_4604"
                              data-name="Rectangle 4604"
                              width="24"
                              height="2"
                              transform="translate(0 18)"
                              fill="#2a74f9"
                            ></rect>
                            <path
                              id="Path_34533"
                              data-name="Path 34533"
                              d="M4,18H6a1,1,0,0,0,1-1V8A1,1,0,0,0,6,7H4A1,1,0,0,0,3,8v9A1,1,0,0,0,4,18Z"
                              transform="translate(0 -2)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34534"
                              data-name="Path 34534"
                              d="M11,18h2a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V17A1,1,0,0,0,11,18Z"
                              transform="translate(0 -2)"
                              fill="#2a74f9"
                            ></path>
                            <path
                              id="Path_34535"
                              data-name="Path 34535"
                              d="M17,12v5a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H18A1,1,0,0,0,17,12Z"
                              transform="translate(0 -2)"
                              fill="#2a74f9"
                            ></path>
                          </svg>
                          <span
                            class="text-xl white font-bold networkVolumeStats-title"
                          >Subordinate Trading Volume</span
                          >
                          <vs-dropdown vs-custom-content vs-trigger-click>
                            <a class="flex items-center" href.prevent>
                              <feather-icon
                                icon="HelpCircleIcon"
                                svgClasses="h-6 w-6 ml-1 c-question"
                              />
                            </a>
                            <vs-dropdown-menu class="dropdown-question">
                              <p class="m-0 text-sm">
                                Total trading volume of 5 tiers per month.
                              </p>
                            </vs-dropdown-menu>
                          </vs-dropdown>
                        </div>
                        <div class="cardBody">
                          <div
                            class="vx-row head border-bottom border-top"
                            style="width: 360px"
                          >
                            <div class="vx-col lg:w-5/12">
                              <p class="m-0 texthead text-sm capitalize">Month</p>
                            </div>
                            <div class="vx-col lg:w-7/12">
                              <p class="m-0 texthead text-sm capitalize">
                                Summary
                              </p>
                            </div>
                          </div>
                          <div class="dataContent">
                            <div
                              class="vx-row border-bottom"
                              style="
                              margin-left: -5px;
                              margin-right: -5px;
                              width: 360px;
                            "
                            >
                              <div class="vx-col lg:w-5/12">
                                <p class="m-0">{{ formatDateAff(useDataGetNguoiGioiThieuAdmin.t1) }}</p>
                              </div>
                              <div class="vx-col lg:w-7/12">
                                <p class="m-0">${{ formatPrice(useDataGetNguoiGioiThieuAdmin.tslgdCD1, 2) }}</p>
                              </div>
                            </div>
                            <div
                              class="vx-row border-bottom"
                              style="
                              margin-left: -5px;
                              margin-right: -5px;
                              width: 360px;
                            "
                            >
                              <div class="vx-col lg:w-5/12">
                                <p class="m-0">{{ formatDateAff(useDataGetNguoiGioiThieuAdmin.t2) }}</p>
                              </div>
                              <div class="vx-col lg:w-7/12">
                                <p class="m-0">${{ formatPrice(useDataGetNguoiGioiThieuAdmin.tslgdCD2, 2) }}</p>
                              </div>
                            </div>
                            <div
                              class="vx-row border-bottom"
                              style="
                              margin-left: -5px;
                              margin-right: -5px;
                              width: 360px;
                            "
                            >
                              <div class="vx-col lg:w-5/12">
                                <p class="m-0">{{ formatDateAff(useDataGetNguoiGioiThieuAdmin.t3) }}</p>
                              </div>
                              <div class="vx-col lg:w-7/12">
                                <p class="m-0">${{ formatPrice(useDataGetNguoiGioiThieuAdmin.tslgdCD3, 2) }}</p>
                              </div>
                            </div>
                            <div
                              class="vx-row"
                              style="
                              margin-left: -5px;
                              margin-right: -5px;
                              width: 360px;
                            "
                            >
                              <div class="vx-col lg:w-5/12">
                                <p class="m-0">{{ formatDateAff(useDataGetNguoiGioiThieuAdmin.t4) }}</p>
                              </div>
                              <div class="vx-col lg:w-7/12">
                                <p class="m-0">${{ formatPrice(useDataGetNguoiGioiThieuAdmin.tslgdCD4, 2) }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="cardFooter">
                          <div class="vx-row">
                            <div class="vx-col lg:w-5/12">
                              <p class="m-0"><b>Summary</b></p>
                            </div>
                            <div class="vx-col lg:w-7/12">
                              <p class="m-0">
                                <b
                                >${{
                                    formatPrice(
                                      useDataGetNguoiGioiThieuAdmin.tslgdCD1 +useDataGetNguoiGioiThieuAdmin.tslgdCD2 +useDataGetNguoiGioiThieuAdmin.tslgdCD3 +useDataGetNguoiGioiThieuAdmin.tslgdCD4,
                                      2
                                    )
                                  }}</b
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="commission" :class="{ block: showCom }">
              <div class="wraperContent">
                <div
                  class="headerContent flex lg:flex-row flex-col justify-between items-center mb-4"
                >
                  <h1
                    class="text-2xl white font-bold text-capitalize pointer affiliateCommission-title"
                  >
                    Profit commission
                    <span class="q">
                    <feather-icon
                      icon="HelpCircleIcon"
                      svgClasses="h-6 w-6 ml-1 c-question"
                    />
                  </span>
                  </h1>
                  <div class="affCommissionControl items-end flex flex-wrap">
                    <div class="blockLine flex flex-col mr-3 mt-5">
                      <span class="type my-5">Type of Commission Profit</span>
                      <v-select
                        style="width: 15rem!important"
                        class="relative"
                        v-model="selectedHoaHong"
                        :options="optionsHoaHong"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                      />
                    </div>
                    <div class="blockLine flex flex-col mr-8 relative mt-5">
                      <div class="dateRange">
                        <datepicker
                          class="customeTradeHistory startDate"
                          :format="formatDate"
                          v-model="startDate"
                        ></datepicker>
                        <span class="seperate">-</span>
                        <datepicker
                          class="customeTradeHistory endDate"
                          :format="formatDate"
                          v-model="endDate"
                        ></datepicker>
                      </div>
                    </div>
                    <vs-button
                      class="w-32 mt-5"
                      color="rgb(62, 201, 214)"
                      type="filled"
                      @click="clickSearchDateTimeHoaHong"
                    >Search</vs-button
                    >
                  </div>
                </div>
                <div class="notice-comission mb-4">
                  <p>
                    <span style="color: #f02769">Note: </span>
                    <span style="color: #8d97a0"
                    >You will receive trading commission from your downline
                    immediately.</span
                    >
                  </p>
                </div>
                <div class="body vx-row">
                  <!-- <div class="vx-col w-full lg:w-4/12 lg:mb-5 lg:pr-0">Mỗi ngày mới, bạn sẽ nhận hoa hồng giao dịch từ tuyến dưới của ngày hôm trước.
                                          <div class="wrap-chart bgSecondary boxShadowDashBoard commission-chart">
                                              <div class="header">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="19.135" height="16.02" viewBox="0 0 19.135 16.02"><g id="edit-curves" transform="translate(0 -2)"><path id="Path_29616" data-name="Path 29616" d="M5,13.9C14.346,13.9,9.673,3,19.02,3" transform="translate(-0.885 0)" fill="none" stroke="#2a74f9" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><path id="Path_29617" data-name="Path 29617" d="M18.135,17.02H1V3" transform="translate(0 0)" fill="none" stroke="#2a74f9" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
                                                  <span class="colorSecondary text-lg font-bold mb-0 ml-2 header-title">Biểu đồ Hoa hồng Giao dịch</span>
                                                  <div class="control flex items-center">

                                                  </div>
                                              </div>
                                              <div class="wrap-chart-below bgPrimary">
                                                  <div id="chartCommisst" class="chart-instance chartHight">
                                                      <highcharts ref="chartSplineThree" :options="optionsSpline3"></highcharts>
                                                  </div>
                                              </div>
                                          </div>
                                      </div> -->
                  <div class="vx-col w-full lg:mt-0 mt-4">
                    <div
                      class="tableBackground bgSecondary trading-detail relative"
                      v-if="selectedHoaHong.id == 1"
                    >
                      <table
                        class="table table-dark w-full tableComission bgSecondary"
                        :class="{ 'ld-loading': isLoading }"
                      >
                        <thead>
                        <tr>
                          <th colspan="5">
                            <div class="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="14"
                                viewBox="0 0 11 14"
                                class="mr-2"
                              >
                                <g
                                  id="single-copy-06"
                                  transform="translate(-1.278)"
                                >
                                  <rect
                                    id="Rectangle_4166"
                                    data-name="Rectangle 4166"
                                    width="10"
                                    height="11"
                                    transform="translate(1.778 2.5)"
                                    stroke-width="1"
                                    stroke="#2a74f9"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    fill="none"
                                  ></rect>
                                  <line
                                    id="Line_1332"
                                    data-name="Line 1332"
                                    x2="6"
                                    transform="translate(3.778 0.5)"
                                    fill="none"
                                    stroke="#2a74f9"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1"
                                  ></line>
                                </g></svg
                              ><span
                              class="white text-lg font-bold trading-detail-title"
                            >Trading Profit Details</span
                            >
                            </div>
                          </th>
                        </tr>
                        </thead>
                        <thead>
                        <tr>
                          <th class="colorSecondary2 text-center text-normal md:text-lg">Time</th>
                          <th class="colorSecondary2 text-center text-normal md:text-lg">Profit commission received</th>
                          <th class="colorSecondary2 text-center text-normal md:text-lg">
                            Number of Transactions
                          </th>
                          <!--<th class="colorSecondary2">Số nhà Giao dịch</th>-->
                          <th class="colorSecondary2 text-center text-normal md:text-lg">Trading Volume</th>
                        </tr>
                        </thead>
                        <tbody
                          class="text-center table-content"
                          v-if="listChiTietKLGD.length == 0"
                        >
                        <tr>
                          <td colspan="5" style="font-size: 1rem"><span>No data</span></td>
                        </tr>
                        </tbody>
                        <tbody class="table-content" v-else>
                        <tr
                          :key="indextr"
                          v-for="(tr, indextr) in listChiTietKLGD"
                        >
                          <td class="colorSecondary" style="font-size: 1rem">
                            {{ formatDateAff2(tr.dt) }}
                          </td>
                          <td class="colorSecondary" style="font-size: 1rem">
                            {{ formatPrice(tr.thanhtoan, 2) }}
                          </td>
                          <td class="colorSecondary" style="font-size: 1rem">{{ tr.soluongGD }}</td>
                          <!--<td class="colorSecondary">{{ tr.soluongGD }}</td>-->
                          <td class="colorSecondary" style="font-size: 1rem">
                            {{ formatPrice(tr.klgd, 2) }}
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--<vs-pagination v-if="countPageHH > 0" class="mt-4 mb-2" :total="countPageHH" v-model="currentxHH"  @input="clickPageHH"></vs-pagination>
                                              -->
                    </div>
                    <div
                      class="tableBackground bgSecondary trading-detail relative"
                      v-else
                    >
                      <table
                        class="table table-dark w-full tableComission bgSecondary"
                        :class="{ 'ld-loading': isLoading }"
                      >
                        <thead>
                        <tr>
                          <th colspan="5">
                            <div class="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="14"
                                viewBox="0 0 11 14"
                                class="mr-2"
                              >
                                <g
                                  id="single-copy-06"
                                  transform="translate(-1.278)"
                                >
                                  <rect
                                    id="Rectangle_4166"
                                    data-name="Rectangle 4166"
                                    width="10"
                                    height="11"
                                    transform="translate(1.778 2.5)"
                                    stroke-width="1"
                                    stroke="#2a74f9"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    fill="none"
                                  ></rect>
                                  <line
                                    id="Line_1332"
                                    data-name="Line 1332"
                                    x2="6"
                                    transform="translate(3.778 0.5)"
                                    fill="none"
                                    stroke="#2a74f9"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1"
                                  ></line>
                                </g></svg
                              ><span
                              class="white text-lg font-bold trading-detail-title"
                            >Trading Profit Details</span
                            >
                            </div>
                          </th>
                        </tr>
                        </thead>
                        <thead>
                        <tr>
                          <th class="colorSecondary2 text-center text-normal md:text-lg md:font-bold">Time</th>
                          <th class="colorSecondary2 text-center text-normal md:text-lg md:font-bold">Pay</th>
                          <th class="colorSecondary2 text-center text-normal md:text-lg md:font-bold">Sales</th>
                        </tr>
                        </thead>
                        <tbody
                          class="text-center table-content"
                          v-if="listChiTietKLVip.length == 0"
                        >
                        <tr>
                          <td colspan="5" style="font-size: 1rem"><span>No data</span></td>
                        </tr>
                        </tbody>
                        <tbody class="table-content" v-else>
                        <tr
                          :key="indextr"
                          v-for="(tr, indextr) in listChiTietKLVip"
                        >
                          <td class="colorSecondary" style="font-size: 1rem">
                            {{ formatDateAff2(tr.dt) }}
                          </td>
                          <td class="colorSecondary" style="font-size: 1rem">
                            {{ formatPrice(100, 2) }}
                          </td>
                          <td class="colorSecondary" style="font-size: 1rem">{{ tr.doanhso }}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="qlht" :class="{ block: showqlHt }">
              <div class="w-full lg:pl-0 px-0">
                <div>
                  <div class="filterDiv">
                    <h1 class="text-2xl white font-bold capitalize mb-4">
                      {{$t('Management agent')}}
                    </h1>
                    <div class="flex flex-wrap">
                      <div class="relative colFirst lg:mr-5 align-middle">
                        <p class="color-white-50 mb-1 aff-test-type">Search by</p>
                        <button
                          class="btn search btnSearchType lg:mr-3 button cursor-pointer"
                          :class="{ active: showActiveLv, primary: showActiveLv }"
                          @click="(showActiveLv = true), (showActiveBD = false)"
                        >
                          Referral
                        </button>
                        <button
                          class="btn search btnSearchType button cursor-pointer"
                          :class="{ active: showActiveBD, primary: showActiveBD }"
                          @click="(showActiveBD = true), (showActiveLv = false)"
                        >
                          Nickname
                        </button>
                      </div>
                      <div class="md:w-1/2 align-middle">
                        <div class="lg:ml-8">
                          <div class="color-white-50 mb-1 aff-text-type">
                            Watch Friend Referred By
                            {{ showActiveLv ? "Rank" : "Name" }}
                          </div>
                          <div class="flex">
                            <v-select
                              :class="{
                              block: showActiveLv,
                              hidden: showActiveBD,
                            }"
                              class="w-1/2 relative mr-7"
                              v-model="selectedLevel"
                              :options="optionsLevel"
                              :dir="$vs.rtl ? 'rtl' : 'ltr'"
                            />
                            <vs-input
                              :class="{
                              block: showActiveBD,
                              hidden: showActiveLv,
                            }"
                              class="inputx mr-4 TnD color-white-50"
                              placeholder="Enter username"
                              v-model="EnterNameUser"
                            />
                            <vs-button
                              v-if="showActiveLv"
                              color="rgb(62, 201, 214)"
                              type="filled"
                              @click="searchCapBac"
                            >Search</vs-button
                            >
                            <vs-button
                              v-else
                              color="rgb(62, 201, 214)"
                              type="filled"
                              @click="searchName"
                            >Search</vs-button
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="paddingResult">
                    <div class="mb-3 flex flex-wrap">
                      <h1 class="text-2xl white font-bold capitalize">
                        Search Results
                      </h1>
                      <div
                        class="ml-auto flex flex-wrap scrollRange items-center"
                      >
                        <span class="textTime mr-4">Range time:</span>
                        <button
                          class="btn btnTime mr-3 cursor-pointer"
                          :class="{ 'button primary active': oneday }"
                          @click="changeDateSelect(1)"
                        >
                          Yesterday
                        </button>
                        <button
                          class="btn btnTime mr-3 cursor-pointer"
                          :class="{ 'button primary active': twoday }"
                          @click="changeDateSelect(7)"
                        >
                          The last 7 days
                        </button>
                        <button
                          class="btn btnTime mr-3 cursor-pointer"
                          :class="{ 'button primary active': threeday }"
                          @click="changeDateSelect(30)"
                        >
                          Last 30 days
                        </button>
                        <button
                          class="btn btnTime cursor-pointer"
                          :class="{ 'button primary active': allday }"
                          @click="changeDateSelect(0)"
                        >
                          All
                        </button>
                      </div>
                    </div>
                    <div class="search-result">
                      <div class="table-responsive table-pc relative">
                        <table
                          class="table w-full text-center overflow-hidden table-bordered mb-0"
                          :class="{ 'ld-loading': isLoading }"
                        >

                          <thead>
                          <tr>
                            <th>Nickname</th>
                            <th>Rank</th>
                            <th>Total trading volume</th>
                            <th>Profit commission received</th>
                          </tr>
                          </thead>
                          <tbody v-if="datalistAgency.length == 0">
                          <tr>
                            <td colspan="4" class="textSize"><span>No data</span></td>
                          </tr>
                          </tbody>
                          <tbody v-else>
                          <tr :key="itr" v-for="(tr, itr) in datalistAgency">
                            <td class="textSize">
                              <a href.prevent class="color-yellow underline">{{
                                  tr.nick_name
                                }}</a>
                            </td>
                            <td class="textSize">{{ tr.level_vip }}</td>
                            <td class="textSize">{{ formatPrice(tr.tklgd, 2) }}</td>
                            <td class="textSize">{{ formatPrice(tr.thhn, 4) }}</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--        <vs-popup title="Rank" :active.sync="popupActiveRank">-->
<!--&lt;!&ndash;          <img width="100%" :src="require('@/assets/images/sky/update-rank-new.png')" />&ndash;&gt;-->
<!--        </vs-popup>-->
<!--      </div>-->
    </VuePerfectScrollbar>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import config from "@/config.json";
import AuthenticationService from "@/services/AuthenticationService";
import VueApexCharts from "vue-apexcharts";
import Datepicker from "vuejs-datepicker";
import vSelect from "vue-select";
import moment from "moment";

import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import More from "highcharts/highcharts-more";

More(Highcharts);

const chartOne = {
  chart: {
    type: "areaspline",
    backgroundColor: "transparent",
    height: "250px",
  },
  title: {
    text: "",
  },
  legend: {
    enabled: false,
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
  },
  xAxis: {
    categories: ["Week one", "Week two", "Week three", "Week four"],
    plotBands: [
      {
        // visualize the weekend
        from: 4.5,
        to: 6.5,
        color: "rgba(68, 170, 213, .2)",
      },
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
    grid: {
      cellHeight: 10,
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " ",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      color: "#31baa0",
      name: " ",
      data: [0, 0, 0, 0],
    },
    {
      color: "#00b6ff",
      name: " ",
      data: [0, 0, 0, 0],
    },
    // {
    //   color: "#f46273",
    //   name: " ",
    //   data: [0, 0, 0, 0],
    // },
  ],
};

const chartTwo = {
  chart: {
    type: "areaspline",
    backgroundColor: "transparent",
    height: "250px",
  },
  title: {
    text: "",
  },
  legend: {
    enabled: false,
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
  },
  xAxis: {
    categories: ["Week one", "Week two", "Week three", "Week four"],
    plotBands: [
      {
        // visualize the weekend
        from: 4.5,
        to: 6.5,
        color: "rgba(68, 170, 213, .2)",
      },
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " ",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      color: "#31baa0",
      name: " ",
      data: [0, 0, 0, 0],
    },
    {
      color: "#00b6ff",
      name: " ",
      data: [0, 0, 0, 0],
    },
    // {
    //   color: "#f46273",
    //   name: " ",
    //   data: [0, 0, 0, 0],
    // },
  ],
};

const chartThree = {
  chart: {
    type: "areaspline",
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  legend: {
    enabled: false,
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
  },
  xAxis: {
    categories: ["Week one", "Week two", "Week three", "Week four"],
    plotBands: [
      {
        // visualize the weekend
        from: 4.5,
        to: 6.5,
        color: "rgba(68, 170, 213, .2)",
      },
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " ",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      color: "#31baa0",
      name: " ",
      data: [0, 0, 0, 0],
    },
    {
      color: "#00b6ff",
      name: " ",
      data: [0, 0, 0, 0],
    },
    // {
    //   color: "#f46273",
    //   name: " ",
    //   data: [0, 0, 0, 0],
    // },
  ],
};
export default {

  props: {
    useSidebarAgencyDataActive: {
      type: Boolean,
      // required: true,
    },
    useCrurrentIdAgent:{
      type: Number,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
    useDataAgencyDetail:{
      type: Object,
      default: () => {},
    },
    useDataGetNguoiGioiThieuAdmin:{
      type: Object,
      default: () => {},
    }
  },
  watch: {
    useSidebarAgencyDataActive(val) {
      if (!val) return;
      if (Object.entries(this.data).length === 0) {
        this.initValues();
        this.$validator.reset();
      } else {
        let {
          email,
          id,
          nick_name,
          first_name,
          last_name,
          money_vn,
          money_btc,
          money_eth,
          money_usdt,
          profile_image,
          type,
          vip_user,
          super_user,
          level_vip,
        } = JSON.parse(JSON.stringify(this.data));

        this.dataId = id;
        this.dataEmail = email;
        this.dataNick = nick_name;
        this.dataFirstName = first_name;
        this.dataLastName = last_name;
        this.dataMoneyVN = money_vn;
        this.dataMoneyBTC = this.formatPrice(money_btc, 6);
        this.dataMoneyETH = this.formatPrice(money_eth, 4);
        this.dataMoneyUSDT = this.formatPrice(money_usdt, 2);
        this.dataImg = profile_image;
        this.dataPassword = "";
        this.dataPermission = vip_user;
        this.superUser = super_user;
        this.dataType = type;
        this.addDataMoneyVN = 0;
        this.addDataMoneyBTC = this.formatPrice(0, 6);
        this.addDataMoneyETH = this.formatPrice(0, 4);
        this.addDataMoneyUSDT = this.formatPrice(0, 2);
        this.isLevelVIP = level_vip;
        this.initValues();
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    },

    useDataGetNguoiGioiThieuAdmin(val){
      if(val){
        try {
          let cS1 = this.$refs.chartSpline.chart;
          let cS2 = this.$refs.chartSplineTwo.chart;
          let TSNGDM = cS1.series[0]; // Total number of new traders
          let pA0 = TSNGDM.points[0];
          let pA1 = TSNGDM.points[1];
          let pA2 = TSNGDM.points[2];
          let pA3 = TSNGDM.points[3];
          pA0.update({ y: val.tttngdT1 }, true);
          pA1.update({ y: val.tttngdT2 }, true);
          pA2.update({ y: val.tttngdT3 }, true);
          pA3.update({ y: val.tttngdT4 }, true);

          if (val.tsdlMoi0) {
            let TSTTVM = cS1.series[1]; // Tổng số đại lý mới
            let pB0 = TSTTVM.points[0];
            let pB1 = TSTTVM.points[1];
            let pB2 = TSTTVM.points[2];
            let pB3 = TSTTVM.points[3];
            pB0.update({ y: val.tsdlMoi0 }, true);
            pB1.update({ y: val.tsdlMoi1 }, true);
            pB2.update({ y: val.tsdlMoi2 }, true);
            pB3.update({ y: val.tsdlMoi3 }, true);
          }

          // if (d.tshhMoi0) {
          //   let TSHHM = cS1.series[2]; // Tổng số hoa hồng mới
          //   let pC0 = TSHHM.points[0];
          //   let pC1 = TSHHM.points[1];
          //   let pC2 = TSHHM.points[2];
          //   let pC3 = TSHHM.points[3];
          //   pC0.update({ y: d.tshhMoi0 }, true);
          //   pC1.update({ y: d.tshhMoi1 }, true);
          //   pC2.update({ y: d.tshhMoi2 }, true);
          //   pC3.update({ y: d.tshhMoi3 }, true);
          // }

          //================================

          if (val.tsngdTTMoi0) {
            let TSNGTTDM = cS2.series[0]; // Total number of new traders
            let nA0 = TSNGTTDM.points[0];
            let nA1 = TSNGTTDM.points[1];
            let nA2 = TSNGTTDM.points[2];
            let nA3 = TSNGTTDM.points[3];
            nA0.update({ y: val.tsngdTTMoi0 }, true);
            nA1.update({ y: val.tsngdTTMoi1 }, true);
            nA2.update({ y: val.tsngdTTMoi2 }, true);
            nA3.update({ y: val.tsngdTTMoi3 }, true);
          }

          if (val.tsdlTTMoi0) {
            let TSTTTTVM = cS2.series[1]; // Tổng số đại lý mới
            let nB0 = TSTTTTVM.points[0];
            let nB1 = TSTTTTVM.points[1];
            let nB2 = TSTTTTVM.points[2];
            let nB3 = TSTTTTVM.points[3];
            nB0.update({ y: val.tsdlTTMoi0 }, true);
            nB1.update({ y: val.tsdlTTMoi1 }, true);
            nB2.update({ y: val.tsdlTTMoi2 }, true);
            nB3.update({ y: val.tsdlTTMoi3 }, true);
          }

          // if (d.tshhTTMoi0) {
          //   let TSTTHHM = cS2.series[2]; // Tổng số hoa hồng mới
          //   let nC0 = TSTTHHM.points[0];
          //   let nC1 = TSTTHHM.points[1];
          //   let nC2 = TSTTHHM.points[2];
          //   let nC3 = TSTTHHM.points[3];
          //   nC0.update({ y: d.tshhTTMoi0 }, true);
          //   nC1.update({ y: d.tshhTTMoi1 }, true);
          //   nC2.update({ y: d.tshhTTMoi2 }, true);
          //   nC3.update({ y: d.tshhTTMoi3 }, true);
          // }
        } catch (e) {
          console.log(e);
        }
      }
    },
    useCrurrentIdAgent(val){
      if(val){
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth();
        var year = currentDate.getFullYear();

        var last_week = new Date(year, currentDate.getMonth(), day - 7);

        this.startDate = moment(String(last_week)).format("MM/DD/YYYY");

        let end_date = new Date(year, month, day);

        this.endDate = moment(String(end_date)).format("MM/DD/YYYY");
        this.searchCapBac()
        this.clickSearchDateTimeHoaHong()
      }
    }


  },
  data() {
    return {
      currentIdAgencyLocal: null,
      hostName: window.location.hostname,
      showGobal: true,
      showCom: false,
      showqlHt: false,
      showTT: false,
      showTN: true,

      optionsSpline: chartOne,
      optionsSpline2: chartTwo,
      optionsSpline3: chartThree,

      isLoading: false,

      popupThongBao: false,
      loading: false,
      // linkDk: "",
      codeGioiThieu: "",
      isDongY: false,
      dongYMua: false,
      popupBuyThamGiaVip: false,
      isVip: false,
      showActiveLv: true,
      showActiveBD: false,
      EnterNameUser: "",
      currentxHH: 1,
      currentxHHVip: 1,
      f1cuaminh: "-------",
      optionsLevel: [
        // { id: 0, label: "Rank 0" },
        { id: 1, label: "Referral 1" },
        { id: 2, label: "Referral 2" },
        { id: 3, label: "Referral 3" },
        { id: 4, label: "Referral 4" },
        { id: 5, label: "Referral 5" },
        // { id: 6, label: "Rank 6" },
        // { id: 7, label: "Rank 7" },
        // { id: 8, label: "Rank 8" },
      ],
      selectedLevel: { id: 1, label: "Referral 1" },
      optionsHoaHong: [
        { id: 1, label: "Trading Commissions" },
        { id: 2, label: "VIP profit commission" },
      ],
      selectedHoaHong: { id: 1, label: "Trading Commissions" },
      popupActiveRank: false,
      formatDate: "dd/MM/yyyy",
      startDate: null,
      endDate: null,

      hhMeF1isWeek: 0,
      totalDlisMe: 0,

      totalDaiLy: 0,
      vip_lv: 1,
      pen_commiss: 0,
      totalNGD: 0,
      commissGD: 0,

      klgdtc1: 0,
      klgdtc2: 0,
      klgdtc3: 0,
      klgdtc4: 0,

      t1: "",
      t2: "",
      t3: "",
      t4: "",

      tslgdmtn: 0,
      tshhmtn: 0,
      tslgdmtt: 0,
      tshhmtt: 0,
      tsdlmtn: 0,
      tsdlmtt: 0,

      listChiTietKLGD: [],
      listChiTietKLVip: [],
      countPageHH: 0,
      countPageHHVip: 0,

      dateListDLSearch: 0,

      oneday: false,
      twoday: false,
      threeday: true,
      allday: false,

      datalistAgency: [],

      showhhGD: true,
      domain:
        config.domainRealName.charAt(0).toUpperCase() +
        config.domainRealName.slice(1),
      config,
      dm: config.domain,

      superUser: 0,

      dataId: null,
      dataEmail: "",
      dataNick: "",
      dataFirstName: "",
      dataLastName: "",
      dataMoneyVN: 0,
      dataMoneyBTC: 0,
      dataMoneyETH: 0,
      dataMoneyUSDT: 0,
      dataImg: null,
      dataPassword: "",
      dataPermission: 0,
      dataType: null,
      addDataMoneyVN: 0,
      addDataMoneyBTC: 0,
      addDataMoneyETH: 0,
      addDataMoneyUSDT: 0,
      summaryTradingVolume: 0,
      category_choices: [
        //{text:'Quản trị viên',value: 1},
        { text: "Đại lý ( VIP )", value: 1 },
        { text: "Thành viên", value: 0 },
      ],

      category_level: [
        { text: "Cấp 0", value: 0 },
        { text: "Cấp 1", value: 1 },
        { text: "Cấp 2", value: 2 },
        { text: "Cấp 3", value: 3 },
        { text: "Cấp 4", value: 4 },
        { text: "Cấp 5", value: 5 },
        { text: "Cấp 6", value: 6 },
        { text: "Cấp 7", value: 7 },
        { text: "Cấp 8", value: 8 },
      ],

      isLevelVIP: 0,

      //   order_status_choices: [
      //     {text:'Pending',value:'pending'},
      //     {text:'Canceled',value:'canceled'},
      //     {text:'Delivered',value:'delivered'},
      //     {text:'On Hold',value:'on_hold'}
      //   ],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  //   filters: {
  //     currencydecimal (val) {
  //       if(val == 'BTC') return val.toFixed(6)
  //       if(val == 'ETH') return val.toFixed(4)
  //       return val.toFixed(2)
  //     }
  //   },
  computed: {
    linkDk (){
      return window.location.origin + "/register?r=" + this.useDataAgencyDetail.ref
    },
    isRequired(){
      if(Object.entries(this.data).length == 0){
        return true
      }else{
        return false
      }
    },
    isSidebarActiveLocal: {
      get() {
        return this.useSidebarAgencyDataActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebarAgencyData");
        }
      },
    },
  },
  methods: {
    initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.dataEmail = "";
      this.dataNick = "";
      this.dataFirstName = "";
      this.dataLastName = "";
      this.dataMoneyVN = 0;
      this.dataMoneyBTC = 0;
      this.dataMoneyETH = 0;
      this.dataMoneyUSDT = 0;
      this.superUser = 0;
      this.dataImg = null;
      this.dataPassword = "";
      this.dataPermission = 0;
      this.dataType = null;
      this.addDataMoneyVN = 0;
      this.addDataMoneyBTC = 0;
      this.addDataMoneyETH = 0;
      this.addDataMoneyUSDT = 0;
    },
    saoChep() {
      return this.$vs.notify({
        text: "Copied to memory",
        color: "success",
        position: "top-right",
        iconPack: "feather",
        icon: "icon-check",
      });
    },


    // f1ForUser() {
    //   this.loading = true;
    //   AuthenticationService.getNguoiGioiThieuAdmin(this.useCrurrentIdAgent).then((res) => {
    //     console.log("sdskdjskdj",res)
    //     this.loading = false;
    //     if (res.data.success) {
    //       let d = res.data.data;
    //
    //       // this.hhMeF1isWeek = d.hhttisMe;
    //       this.f1cuaminh = d.nick;
    //       this.totalDaiLy = d.tsdl;
    //       this.totalNGD = d.tsngd;
    //       this.commissGD = d.hhgd;
    //       this.pen_commiss = d.hhdl;
    //
    //       this.totalDlisMe = d.tsdlisMe;
    //
    //       this.klgdtc1 = d.tslgdCD1;
    //       this.klgdtc2 = d.tslgdCD2;
    //       this.klgdtc3 = d.tslgdCD3;
    //       this.klgdtc4 = d.tslgdCD4;
    //
    //       this.t1 = d.t1;
    //       this.t2 = d.t2;
    //       this.t3 = d.t3;
    //       this.t4 = d.t4;
    //
    //       this.tslgdmtn = d.tslgdmtn ? d.tslgdmtn : 0;
    //       this.tshhmtn = d.tshhmtn ? d.tshhmtn : 0;
    //       this.tslgdmtt = d.tslgdmtt ? d.tslgdmtt : 0;
    //       this.tshhmtt = d.tshhmtt ? d.tshhmtt : 0;
    //
    //       this.tsdlmtn = d.tsdlmtn ? d.tsdlmtn : 0;
    //       this.tsdlmtt = d.tsdlmtt ? d.tsdlmtt : 0;
    //
    //       try {
    //         let cS1 = this.$refs.chartSpline.chart;
    //         let cS2 = this.$refs.chartSplineTwo.chart;
    //
    //         if (d.tsngdMoi0) {
    //           let TSNGDM = cS1.series[0]; // Total number of new traders
    //           let pA0 = TSNGDM.points[0];
    //           let pA1 = TSNGDM.points[1];
    //           let pA2 = TSNGDM.points[2];
    //           let pA3 = TSNGDM.points[3];
    //           pA0.update({ y: d.tsngdMoi0 }, true);
    //           pA1.update({ y: d.tsngdMoi1 }, true);
    //           pA2.update({ y: d.tsngdMoi2 }, true);
    //           pA3.update({ y: d.tsngdMoi3 }, true);
    //         }
    //
    //         if (d.tsdlMoi0) {
    //           let TSTTVM = cS1.series[1]; // Tổng số đại lý mới
    //           let pB0 = TSTTVM.points[0];
    //           let pB1 = TSTTVM.points[1];
    //           let pB2 = TSTTVM.points[2];
    //           let pB3 = TSTTVM.points[3];
    //           pB0.update({ y: d.tsdlMoi0 }, true);
    //           pB1.update({ y: d.tsdlMoi1 }, true);
    //           pB2.update({ y: d.tsdlMoi2 }, true);
    //           pB3.update({ y: d.tsdlMoi3 }, true);
    //         }
    //
    //         if (d.tshhMoi0) {
    //           let TSHHM = cS1.series[2]; // Tổng số hoa hồng mới
    //           let pC0 = TSHHM.points[0];
    //           let pC1 = TSHHM.points[1];
    //           let pC2 = TSHHM.points[2];
    //           let pC3 = TSHHM.points[3];
    //           pC0.update({ y: d.tshhMoi0 }, true);
    //           pC1.update({ y: d.tshhMoi1 }, true);
    //           pC2.update({ y: d.tshhMoi2 }, true);
    //           pC3.update({ y: d.tshhMoi3 }, true);
    //         }
    //
    //         //================================
    //
    //         if (d.tsngdTTMoi0) {
    //           let TSNGTTDM = cS2.series[0]; // Total number of new traders
    //           let nA0 = TSNGTTDM.points[0];
    //           let nA1 = TSNGTTDM.points[1];
    //           let nA2 = TSNGTTDM.points[2];
    //           let nA3 = TSNGTTDM.points[3];
    //           nA0.update({ y: d.tsngdTTMoi0 }, true);
    //           nA1.update({ y: d.tsngdTTMoi0 }, true);
    //           nA2.update({ y: d.tsngdTTMoi0 }, true);
    //           nA3.update({ y: d.tsngdTTMoi0 }, true);
    //         }
    //
    //         if (d.tsdlTTMoi0) {
    //           let TSTTTTVM = cS2.series[1]; // Tổng số đại lý mới
    //           let nB0 = TSTTTTVM.points[0];
    //           let nB1 = TSTTTTVM.points[1];
    //           let nB2 = TSTTTTVM.points[2];
    //           let nB3 = TSTTTTVM.points[3];
    //           nB0.update({ y: d.tsdlTTMoi0 }, true);
    //           nB1.update({ y: d.tsdlTTMoi1 }, true);
    //           nB2.update({ y: d.tsdlTTMoi2 }, true);
    //           nB3.update({ y: d.tsdlTTMoi3 }, true);
    //         }
    //
    //         // if (d.tshhTTMoi0) {
    //         //   let TSTTHHM = cS2.series[2]; // Tổng số hoa hồng mới
    //         //   let nC0 = TSTTHHM.points[0];
    //         //   let nC1 = TSTTHHM.points[1];
    //         //   let nC2 = TSTTHHM.points[2];
    //         //   let nC3 = TSTTHHM.points[3];
    //         //   nC0.update({ y: d.tshhTTMoi0 }, true);
    //         //   nC1.update({ y: d.tshhTTMoi1 }, true);
    //         //   nC2.update({ y: d.tshhTTMoi2 }, true);
    //         //   nC3.update({ y: d.tshhTTMoi3 }, true);
    //         // }
    //       } catch (e) {
    //         console.log(e);
    //       }
    //
    //       //let cS3 = this.$refs.chartSplineThree.chart
    //     }
    //   });
    // },

    chiTietLoiNhuanHoaHong() {
      this.isLoading = true;
      AuthenticationService.chiTietLoiNhuanHoaHongAdmin(this.useCrurrentIdAgent).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.listChiTietKLGD = res.data.data;
          let c = (res.data.count / 10).toString();
          this.countPageHH = Number(c.split(".")[0]);
        }
      });
    },

    clickPageHH(page) {
      this.isLoading = true;
      AuthenticationService.chiTietLoiNhuanHoaHongPage(page).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.listChiTietKLGD = res.data.data;
        }
      });
    },

    // clickPageHHVip(page) {
    //   this.isLoading = true;
    //   AuthenticationService.chiTietLoiNhuanHoaHongPageAdmin(page).then((res) => {
    //     this.isLoading = false;
    //     if (res.data.success) {
    //       this.listChiTietKLVip = res.data.data;
    //     }
    //   });
    // },

    clickSearchDateTimeHoaHong() {
      this.isLoading = true;

      let start = this.formatDateHis(this.startDate);
      let end = this.formatDateHis(this.endDate);

      let t = this.selectedHoaHong.id;
      let id = this.useCrurrentIdAgent
      let obj = {
        t: t,
        s: start,
        e: end,
      };
      console.log("id", id)
      console.log("obj", obj)

      AuthenticationService.getSeachListChiTietHHAdmin(id, obj).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          if (t == 1) {
            this.listChiTietKLGD = res.data.data;
          } else {
            this.listChiTietKLVip = res.data.data;
          }
        }
      });
    },

    changeDateSelect(val) {
      if (val == 30) {
        this.oneday = false;
        this.twoday = false;
        this.threeday = true;
        this.allday = false;
      } else if (val == 7) {
        this.oneday = false;
        this.twoday = true;
        this.threeday = false;
        this.allday = false;
      } else if (val == 1) {
        this.oneday = true;
        this.twoday = false;
        this.threeday = false;
        this.allday = false;
      } else if (val == 0) {
        this.oneday = false;
        this.twoday = false;
        this.threeday = false;
        this.allday = true;
      }

      this.dateListDLSearch = val;
    },

    searchCapBac() {
      let id = this.selectedLevel.id;
      this.isLoading = true;

      let obj = {
        id: id,
        kc: this.dateListDLSearch,
      };

      AuthenticationService.getSeachListLvAgencyAdmin(this.useCrurrentIdAgent, obj).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.datalistAgency = res.data.data;
        } else {
          this.datalistAgency = [];
        }
      });
    },

    searchName() {
      let n = this.EnterNameUser;
      this.isLoading = true;

      let obj = {
        name: n,
        kc: this.dateListDLSearch,
      };

      AuthenticationService.getSeachListNameAgencyAdmin(this.useCrurrentIdAgent ,obj).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.datalistAgency = res.data.data;
        } else {
          this.datalistAgency = [];
        }
      });
    },

    formatDateHis(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },

    formatDateAff(value) {
      if (value) {
        return moment(String(value)).format("MM-YYYY");
      }
    },

    formatDateAff2(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

  },


   created() {

  },
  components: {
    VuePerfectScrollbar,
    highcharts: Chart,
    VueApexCharts,
    Datepicker,
    "v-select": vSelect,
  },
};
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 99999;
  }

  ::v-deep .vs-sidebar {
    z-index: 99999;
    max-width: 80vw;

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
  //height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
@media only screen and (max-width: 768px){
  .tb-policy-index{
    border-spacing: 2px!important;
  }
  .tb-policy-index th{
    font-size: 0.9rem!important;
  }
  .policy-text{
    font-size: 1.2rem!important;
    margin-top: 3rem!important;
  }
  .tb-policy-index td{
    font-size: 0.9rem;
    border: 2px !important;
    padding: 0px!important;
  }

  .tb-policy-index th{
    font-size: 9px!important;
    padding: 0px!important;
  }
  .policy-note{
    font-size: 1rem!important;
  }
  .title-policy-note{
    font-size: 1.4rem!important;
  }
  [dir=ltr] .customeTradeHistory, [dir=ltr] .customeAffiliateCommission{
    background-size: 23px !important;
  }
  ::v-deep .vs-tabs--li button.vs-tabs--btn {
    font-size: 1rem!important;

  }
}
@media only screen and (max-width:640px){
  ::v-deep button.vs-tabs--btn{
    font-size: 1rem!important;
  }
}
//.membership-policy{
//  background: url("../../../assets/images/sky/championship/bg_agency_policy.jpg");
//  background-size: cover;
//  background-position: center;
//  background-repeat: no-repeat;
//}
.policy-text{
  color: rgb(207, 220, 40);
  font-size: 50px;
  font-weight: bold;
  text-shadow: 3px 2px 3px #02142b;
  text-align: center;
  margin-bottom: 3rem;
  padding: 5px!important;
}
.tb-policy-index{
  align-items: center;
  margin: 0 auto;
  width: 100%;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 3rem;
  border-spacing: 10px;
}
.tb-policy-index  th,tr, td{
  font-size: 26px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 10px !important;

}
.tb-policy-index th{
  font-size: 1.7rem;
  background-color: rgb(0, 108, 159);
  padding: 20px;
  border-radius: 5px;
  border: 5px solid rgb(7, 116, 175)
}
.tb-policy-index td{
  background-color: rgb(12, 141, 179);
  padding: 20px;
  border-radius: 5px;
  border: 5px solid rgb(17, 167, 168)
}
.policy-note{
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
}
.title-policy-note{
  color: rgb(24, 91, 44);
  font-size: bold;

}
/*#AffiliatePage{
    margin: -2.2rem;
}*/

.affiliatePage .gobal,
.affiliatePage .commission,
.affiliatePage .qlht {
  display: none;
}


.contentWrapper .header {
  padding: 1rem;
  text-align: center;
}

.lsHH {
  display: none;
}

.contentWrapper .body {
  padding: 2rem 3rem;
  text-align: center;
}

.contentWrapper .body .imgShake {
  width: 211px;
  height: 205px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("~@/assets/images/sky/shake.svg");
}

.icon {
  width: 52px;
  height: 55px;
  margin-right: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
}

.borderSubBanner {
  margin: auto;
  width: 90px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.19);
}

.icon.iconCommission {
  background-image: url("~@/assets/images/sky/affi/3.svg");
}

.icon.iconSign {
  background-image: url("~@/assets/images/sky/affi/2.svg");
}

.icon.iconInvite {
  background-image: url("~@/assets/images/sky/affi/1.svg");
}

.affiliatePage .subBanner {
  color: #fff;
  height: 120px;
}

.affiliatePage .banner .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.affiliatePage .banner {
  background-image: url("~@/assets/images/landing_v2/banner-vip.png");
}
@media only screen and( max-width: 768px) {
  .affiliatePage .banner {
    background-image: url("~@/assets/images/landing_v2/banner-vip.png");
    height: 1200px!important;
  }
}

.affiliatePage .banner {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: calc(100vh - 120px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}

.color-yellow {
  color: #2a74f9;
}

.table-bordered td {
  border-color: #2a74f9;
}

.table-bordered thead th {
  color: hsla(0, 0%, 100%, 0.5);
  font-weight: 400;
  border-bottom-width: 1px;
  border-color: #2a74f9;
}

.btnTime.active {
  background-color: #2a74f9;
  color: #fff;
  border-color: #2a74f9;
}

.btnTime {
  padding: 5px 11px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid #2a74f9;
  color: #2a74f9;
  background-color: transparent;
  white-space: nowrap;
}

.textTime {
  color: #2a74f9;
}

.v-select .vs__dropdown-toggle {
  background: transparent;
}

.btnSearchType {
  background-color: #414141;
  color: #fff;
  border: 1px solid #2a74f9;
  border-radius: 10px;
  min-width: 162px;
  padding: 9px 0;
}

.filterDiv .colFirst:before {
  content: "";
  background-color: #41416f;
  width: 1px;
  height: 45px;
  position: absolute;
  z-index: 898888;
  right: -25px;
  top: 22px;
  opacity: 0.6;
}

.filterDiv {
  background-color: #13263e;
  padding: 37px 42px;
  margin-bottom: 33px;
}

.tableBackground .table-dark td:first-child:after {
  width: calc(100% - 1.5rem);
  left: 1.5rem;
}

.tableBackground .table-dark td:last-child:after {
  width: calc(100% - 1.5rem);
  right: 1.5rem;
  left: auto;
}

.tableBackground .table-dark td,
.tableBackground .table-dark th {
  position: relative;
  border: none;
  padding: 0.75rem 1.5rem;
}

.tableBackground .table-dark td:after,
.tableBackground .table-dark th:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #2a74f9;
}

.tableBackground .table-dark thead th {
  font-weight: 400;
  font-size: 0.75rem;
  color: #2a74f9;
}

.tableBackground {
  border-radius: 20px;
  border: 1px solid #2a74f9;
  height: 100%;
  overflow: hidden;
}

.wrap-chart .chartHight {
  height: 400px;
}

.wrap-chart .chart-instance {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.wrap-chart-below {
  border: none;
}

.c-question,
.c-mail {
  stroke: #2a74f9;
}

.elipText {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.getIntouch .cardBody {
  padding: 1.25rem 1.25rem 1rem;
}

.getIntouch .cardHeader {
  padding: 1rem 1.25rem;
}

.getIntouch {
  border-radius: 20px;
  height: 100%;
}

.networkVolumeStats .cardFooter p {
  line-height: 45px;
  font-size: 18px;
}

.networkVolumeStats .cardFooter {
  background-color: #2a74f9;
  color: #000;
}

.networkVolumeStats .cardFooter {
  padding: 0 1.25rem;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.networkVolumeStats .cardBody p {
  line-height: 40px;
}

.networkVolumeStats .cardBody .dataContent {
  margin-right: -10px;
  margin-left: -10px;
  color: #fff;
}

.networkVolumeStats .texthead {
  color: #2a74f9;
}

.networkVolumeStats .cardBody .head p {
  line-height: 26px;
}

.networkVolumeStats .cardBody .border-bottom,
.networkVolumeStats .cardBody .border-top {
  border-color: #2a74f9 !important;
}

.networkVolumeStats .cardBody {
  padding: 0 1.25rem 1rem;
  height: 205px;
  overflow: hidden;
}

.networkVolumeStats .cardHeader {
  padding: 1rem 1.25rem;
}

.networkVolumeStats {
  background-color: #000;
  border-radius: 20px;
  height: 100%;
  position: relative;
  padding-bottom: 45px;
}

.wrap-chart {
  border-radius: 20px;
}

.wrap-chart {
  z-index: 2;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: none;
  box-shadow: none;
  position: relative;
  border: 1px solid #2a74f9;
}

.wrap-chart .header {
  padding: 15px;
  border-bottom: 1px solid #2a74f9;
}

.groupButton .leftControl {
  width: 90%;
}

.groupButton .rightControl {
  width: auto;
}
.groupButton .rightControl button {
  background: #eec40d;
  color: #000;
  font-family: "Sarabun", Helvetica, Arial, sans-serif;
}
.groupButton .form-control {
  color: #333;
  font-size: 0.875rem;
  background-color: #fafafa;
  border: 1px solid;
  border-radius: 8px 0 0 8px;
  border-color: #2a74f9;
  height: 40px;
  line-height: 40px;
}

.button.primary,
.button.primary:hover {
  background-color: #2a74f9 !important;
  color: #fff !important;
}

.groupButton .btn {
  line-height: 37px;
  height: 100%;
  border-radius: 0 3px 3px 0;
  border: none;
  width: 90px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  white-space: nowrap;
}

.colorSuccess {
  color: #31baa0;
}

.colorDanger {
  color: #f46273;
}

.colorPrimary {
  color: #2a74f9;
}

.affiliatePage .affiliateInfo {
  padding: 20px 30px;
  border-radius: 18px;
  height: 100%;
  overflow: hidden;
  background: #000;
  box-shadow: 0px -1px 8px 3px #ffffff80 inset;
}
.affiliatePage .title-vip {
  font-size: 26px;
  max-width: 400px;
}
.affiliatePage button {
  font-weight: 700;
}
.borderBottom {
  border-color: #2a74f9;
}

.white-50 {
  color: hsla(0, 0%, 100%, 0.5) !important;
}

.colorSecondary {
  color: #fff !important;
}

.boxBasic .heading .textRank .q {
  vertical-align: middle;
  display: inline-block;
}

.bgPrimary-hover:hover,
.bgPrimary {
  background-color: #000 !important;
}

.boxBasic .heading .textRank {
  font-size: 17px;
  color: #2a74f9;
  border: 1px solid #2a74f9;
  border-radius: 14px;
  padding: 1rem 1rem 1rem 80px;
  margin-bottom: 0;
  min-width: 220px;
  width: 100%;
  max-width: 250px;
}

.boxBasic .heading .textRank .text {
  vertical-align: middle;
}

.rank-text {
  margin-left: -62px;
  width: auto !important;
}

.bgSecondary {
  background-color: #02142b !important;
}

.borderSecondary {
  border: 1px solid;
  border-color: #2a74f9;
}

.boxRank {
  margin: 0 auto;
}

.borderBtSecondary {
  border-bottom: 1px solid;
  border-color: #2a74f9;
}

.boxBasic .heading {
  position: relative;
  height: 100px;
  text-align: center;
}

.boxBasic {
  width: 100%;
  padding: 1.25rem;
  border-radius: 20px;
}

.iconRank {
  position: relative;
  height: 100px;
  width: 100px;
  z-index: 1;
}

.iconRank.rank8 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank8.png");
}

.iconRank.rank7 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank7.png");
}

.iconRank.rank6 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank6.png");
}

.iconRank.rank5 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank5.png");
}

.iconRank.rank4 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank4.png");
}

.iconRank.rank3 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank3.png");
}

.iconRank.rank2 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank2.png");
}

.iconRank.rank1 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank1.png");
}

.dateRange {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 300px;
}

.dateRange > span {
  text-align: center;
}

.dateRange > span {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40px;
  flex: 0 0 40px;
  line-height: 40px;
  color: #fff;
}
@media only screen and (max-width: 646px) {
  .btnSearchType {
    width: 100%;
    margin-bottom: 5px;
  }
  .filterDiv .colFirst:before {
    right: 0;
    opacity: 0;
  }
}
</style>

<style>
 .TnD input {
   color: #000;
   background: #fff;
 }

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table-bordered,
.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
  text-align: center;
}

.vs--single .vs__selected {
  position: absolute;
  z-index: 111;
}

.vs__dropdown-toggle input {
  background: transparent;
}

.vdp-datepicker input {
  padding: 11px !important;
}

.v-select .vs__dropdown-toggle {
  border: 0;
  border-bottom: 1px solid #fff;
  border-radius: 5px;
}

.vs__dropdown-option--highlight {
  background: #363b56;
}

.con-vs-popup .vs-popup {
  width: 800px;
}

.vs-popup--content {
  padding: 0;
  margin: 0;
  width: calc(100%);
}

.colorBlue {
  color: #00b6ff;
}

.content .inputGroup input {
  background: #fff;
  color: #545454;
}

.dateRange input {
  background: transparent;
  border-bottom: 1px solid #fff !important;
}
.boxContent{
  margin-bottom: 60px;
}
.h-full{
  height: 95%!important;
}
.lv5-notifi{
  color: #f2ba49;
  text-align: center
}
 [dir] .theme-dark .add-new-data-sidebar input{
   /*color: white;*/
 }
 .textSize{
   font-size: 1rem!important;
 }
</style>
