<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Ares
  Author Telegram: @skydnz
========================================================================================== -->

<template>
  <div
    id="tradePage"
    v-scroll-lock="$store.state.isScrollTrading"
    class="trade-container"
  >
    <PopupTransferMoney class="absolute right-[50%] " />

    <div class="vx-row m-0 wrapper">
      <div :class="['vx-col w-full relative trans']" id="left-content">
        <div class="h-full">
          <div
            class="relative chartBox"
            id="chartBoxId"
            :class="{ binomo: getCoinTab.id == 2 }"
          >
            <ChartIndex
              :timeBetFuture="chosenTime"
              class="wap-chart trans"
              :timeTick="timeTick"
              @onChartTimeTickChange="onChartTimeTickChange"
              :lineData="lineData"
              :updateData="updateData"
              v-if="getCoinTab.id == 2"
            />
            <highcharts
              ref="chartStock"
              class="wap-chart trans"
              :constructor-type="'stockChart'"
              :options="chartOptionsStock"
              v-show="getCoinTab.id !== 2"
            />

            <div class="titleChartCandle flex items-center">
              <span class="iconBTC"></span>
              <span class="textPrice">BTC/USDT</span>
            </div>
            <div class="slider sidebarMobile" style="height: 454px">
              <div class="slidercontent">
                <div
                  class="backgroundOverlay"
                  :style="`background-image: url(${require('@/assets/images/sky/overlay_left.svg')});`"
                ></div>
                <div
                  class="flex flex-col justify-between"
                  style="height: 400px; margin-left: 0px;"
                >
                  <span class="font-12 zIndex99" style="color: #ea6a65"
                    >{{ CSSELL }}%</span
                  >
                  <vs-progress
                    style="width: 354px; background: #ea6a65 !important"
                    class="bg-red progress"
                    :height="4"
                    :percent="CSBUY"
                    color="success"
                  ></vs-progress>
                  <span class="font-12 zIndex99" style="color: #5eb7a1"
                    >{{ CSBUY }}%</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            id="analysis-wrapper"
            class="analysis-wrapper relative "
            v-show="getCoinTab.id !== 2"
          >
            <TimeChartDropdown
              v-if="true"
              :isShow="true"
              :timeTick="timeTick"
              @onChartTimeTickChange="onChartTimeTickChange"
            />
            <vs-tabs>
              <vs-tab
                :label="$t('INDICATORS')"
                @click="(activeGau = true), (activeHis = true)"
              >
              </vs-tab>
              <vs-tab
                :label="$t('LAST RESULTS')"
                @click="(activeGau = true), (activeHis = false)"
              >
              </vs-tab>
            </vs-tabs>
            <div class="overviewInfo flex items-center">
              <span class="badgeItem">
                <span class="color-green uppercase font-bold">{{$t('BUY')}}</span>
                <span> {{ totalBuyStatic }}</span>
              </span>
              <span class="badgeItem ml-2">
                <span class="color-red uppercase font-bold">{{$t('SELL')}}</span>
                <span> {{ totalSellStatic }}</span>
              </span>
            </div>
          </div>
          <div
            class="wrap-gauge-meter"
            :class="{ active: activeGau, hidden: !activeHis }"
          >
            <div class="wrap-gauge-meter-inner">
              <div class="gauge-meter">
                <div class="gauge-meter-sub gauge-meter--os">
                  <div class="v-popover gauge-meter-popover">
                    <div class="trigger inline-block">
                      <h3 class="gauge-meter-title">
                        Oscillators
                        <span class="gauge-meter-title-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                          >
                            <g
                              id="c-question"
                              transform="translate(3.068 -8.774)"
                            >
                              <g
                                id="Ellipse_1825"
                                data-name="Ellipse 1825"
                                transform="translate(-2.068 9.774)"
                                fill="none"
                                stroke="#fefefe"
                                stroke-linecap="square"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              >
                                <circle
                                  cx="10"
                                  cy="10"
                                  r="10"
                                  stroke="none"
                                ></circle>
                                <circle
                                  cx="10"
                                  cy="10"
                                  r="10.5"
                                  fill="none"
                                ></circle>
                              </g>
                              <g
                                id="question"
                                transform="translate(3.497 13.43)"
                              >
                                <path
                                  id="Path_30768"
                                  data-name="Path 30768"
                                  d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                  transform="translate(-5.694 -1)"
                                  fill="#fefefe"
                                ></path>
                                <ellipse
                                  id="Ellipse_1827"
                                  data-name="Ellipse 1827"
                                  cx="1.363"
                                  cy="1.284"
                                  rx="1.363"
                                  ry="1.284"
                                  transform="translate(2.252 11.56)"
                                  fill="#fefefe"
                                ></ellipse>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </h3>
                    </div>
                  </div>
                  <h4 class="gauge-meter-sub-title">{{ textTitleOs }}</h4>
                  <div class="gauge-meter-border">
                    <div class="gauge-meter-background rank-2"></div>
                    <ul class="gauge-meter-label-list">
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--strong-sell"
                      >
                        strong<br />sell
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--sell active"
                      >
                        sell
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--neutral"
                      >
                        neutral
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--buy"
                      >
                        buy
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--strong-buy"
                      >
                        strong<br />buy
                      </li>
                    </ul>
                    <ul class="gauge-meter-status-list">
                      <li class="gauge-meter-status-item">
                        <span
                          class="gauge-meter-status-value gauge-meter-status-value--sell"
                          >{{ NumOscSELL }}</span
                        >
                        <span class="gauge-meter-status-text">Sell</span>
                      </li>
                      <li class="gauge-meter-status-item">
                        <span
                          class="gauge-meter-status-value gauge-meter-status-value--neutral"
                          >{{ NumOscNeutral }}</span
                        >
                        <span class="gauge-meter-status-text">Neutral</span>
                      </li>
                      <li class="gauge-meter-status-item">
                        <span
                          class="gauge-meter-status-value gauge-meter-status-value--buy"
                          >{{ NumOscBUY }}</span
                        >
                        <span class="gauge-meter-status-text">Buy</span>
                      </li>
                    </ul>
                    <highcharts
                      ref="chartOs"
                      class="gauge-meter-pane"
                      :options="optionsOs"
                    ></highcharts>
                  </div>
                </div>
                <div class="gauge-meter-sub gauge-meter--su">
                  <div class="v-popover gauge-meter-popover">
                    <div class="trigger" style="display: inline-block">
                      <h3 class="gauge-meter-title">
                        Summary
                        <span class="gauge-meter-title-icon"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                          >
                            <g
                              id="c-question"
                              transform="translate(3.068 -8.774)"
                            >
                              <g
                                id="Ellipse_1825"
                                data-name="Ellipse 1825"
                                transform="translate(-2.068 9.774)"
                                fill="none"
                                stroke="#fefefe"
                                stroke-linecap="square"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              >
                                <circle
                                  cx="10"
                                  cy="10"
                                  r="10"
                                  stroke="none"
                                ></circle>
                                <circle
                                  cx="10"
                                  cy="10"
                                  r="10.5"
                                  fill="none"
                                ></circle>
                              </g>
                              <g
                                id="question"
                                transform="translate(3.497 13.43)"
                              >
                                <path
                                  id="Path_30768"
                                  data-name="Path 30768"
                                  d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                  transform="translate(-5.694 -1)"
                                  fill="#fefefe"
                                ></path>
                                <ellipse
                                  id="Ellipse_1827"
                                  data-name="Ellipse 1827"
                                  cx="1.363"
                                  cy="1.284"
                                  rx="1.363"
                                  ry="1.284"
                                  transform="translate(2.252 11.56)"
                                  fill="#fefefe"
                                ></ellipse>
                              </g>
                            </g></svg
                        ></span>
                      </h3>
                    </div>
                  </div>
                  <h4 class="gauge-meter-sub-title">{{ textTitleSu }}</h4>
                  <div class="gauge-meter-border">
                    <div class="gauge-meter-background rank-3"></div>
                    <ul class="gauge-meter-label-list">
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--strong-sell"
                      >
                        strong
                        <br />sell
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--sell"
                      >
                        sell
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--neutral active"
                      >
                        neutral
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--buy"
                      >
                        buy
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--strong-buy"
                      >
                        strong
                        <br />buy
                      </li>
                    </ul>
                    <ul class="gauge-meter-status-list">
                      <li class="gauge-meter-status-item">
                        <span
                          class="gauge-meter-status-value gauge-meter-status-value--sell"
                          >{{ NumSumSELL }}</span
                        >
                        <span class="gauge-meter-status-text">Sell</span>
                      </li>
                      <li class="gauge-meter-status-item">
                        <span
                          class="gauge-meter-status-value gauge-meter-status-value--neutral"
                          >{{ NumSumNeutral }}</span
                        >
                        <span class="gauge-meter-status-text">Neutral</span>
                      </li>
                      <li class="gauge-meter-status-item">
                        <span
                          class="gauge-meter-status-value gauge-meter-status-value--buy"
                          >{{ NumSumBUY }}</span
                        >
                        <span class="gauge-meter-status-text">Buy</span>
                      </li>
                    </ul>
                    <!--  -->
                    <highcharts
                      class="gauge-meter-pane"
                      :options="optionsSu"
                      ref="chartSu"
                    ></highcharts>
                    <!--  -->
                  </div>
                </div>
                <div class="gauge-meter-sub gauge-meter--ma">
                  <div class="v-popover gauge-meter-popover">
                    <div class="trigger" style="display: inline-block">
                      <h3 class="gauge-meter-title">
                        Moving Averages
                        <span class="gauge-meter-title-icon"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                          >
                            <g
                              id="c-question"
                              transform="translate(3.068 -8.774)"
                            >
                              <g
                                id="Ellipse_1825"
                                data-name="Ellipse 1825"
                                transform="translate(-2.068 9.774)"
                                fill="none"
                                stroke="#fefefe"
                                stroke-linecap="square"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              >
                                <circle
                                  cx="10"
                                  cy="10"
                                  r="10"
                                  stroke="none"
                                ></circle>
                                <circle
                                  cx="10"
                                  cy="10"
                                  r="10.5"
                                  fill="none"
                                ></circle>
                              </g>
                              <g
                                id="question"
                                transform="translate(3.497 13.43)"
                              >
                                <path
                                  id="Path_30768"
                                  data-name="Path 30768"
                                  d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                  transform="translate(-5.694 -1)"
                                  fill="#fefefe"
                                ></path>
                                <ellipse
                                  id="Ellipse_1827"
                                  data-name="Ellipse 1827"
                                  cx="1.363"
                                  cy="1.284"
                                  rx="1.363"
                                  ry="1.284"
                                  transform="translate(2.252 11.56)"
                                  fill="#fefefe"
                                ></ellipse>
                              </g>
                            </g></svg
                        ></span>
                      </h3>
                    </div>
                  </div>
                  <h4 class="gauge-meter-sub-title">{{ textTitleMa }}</h4>
                  <div class="gauge-meter-border">
                    <div class="gauge-meter-background rank-3"></div>
                    <ul class="gauge-meter-label-list">
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--strong-sell"
                      >
                        strong
                        <br />sell
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--sell"
                      >
                        sell
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--neutral active"
                      >
                        neutral
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--buy"
                      >
                        buy
                      </li>
                      <li
                        class="gauge-meter-label-item gauge-meter-label-item--strong-buy"
                      >
                        strong
                        <br />buy
                      </li>
                    </ul>
                    <ul class="gauge-meter-status-list">
                      <li class="gauge-meter-status-item">
                        <span
                          class="gauge-meter-status-value gauge-meter-status-value--sell"
                          >{{ NumMovSELL }}</span
                        >
                        <span class="gauge-meter-status-text">Sell</span>
                      </li>
                      <li class="gauge-meter-status-item">
                        <span
                          class="gauge-meter-status-value gauge-meter-status-value--neutral"
                          >{{ NumMovNeutral }}</span
                        >
                        <span class="gauge-meter-status-text">Neutral</span>
                      </li>
                      <li class="gauge-meter-status-item">
                        <span
                          class="gauge-meter-status-value gauge-meter-status-value--buy"
                          >{{ NumMovBUY }}</span
                        >
                        <span class="gauge-meter-status-text">Buy</span>
                      </li>
                    </ul>
                    <highcharts
                      class="gauge-meter-pane"
                      :options="optionsMa"
                      ref="chartMa"
                    ></highcharts>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="historyBox"
            :class="{ active: !activeGau, hidden: activeHis }"
          >
            <div class="ct flex justify-center">
              <div class="vx-row history-column">
                <div class="vx-col w-18 list1">
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                </div>
                <div class="vx-col w-18 list2">
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                </div>
                <div class="vx-col w-18 list3">
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                </div>
                <div class="vx-col w-18 list4">
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                </div>
                <div class="vx-col w-18 list5">
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-1 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-2 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-3 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-4 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                  <span
                    class="gridcs-5 inline-flex m-1 item rounded-full empty"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="vx-col w-full rightBar c-desktop trans"
        id="right-content"
        v-if="!conditionFeatureBinomo"
      >
        <div class="pc block right-side-bar flex flex-col">
          <div>

<!--            <div class="flex items-center">-->
<!--              <div class="item-col font-bold font-w md:w-3/12">-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer num1 operator"-->
<!--                  @click="truBetAmount"-->
<!--                  >-</span-->
<!--                >-->
<!--              </div>-->
<!--              <div class="item-col font-bold font-w md:w-6/12 num1 value-price">-->
<!--                <vs-input-->
<!--                  @keyup="nhapBetAmount"-->
<!--                  class="w-full inp"-->
<!--                  icon-pack="feather"-->
<!--                  icon="icon-dollar-sign"-->
<!--                  placeholder="10"-->
<!--                  v-model="betAmount"-->
<!--                  icon-no-border-->
<!--                />-->
<!--                &lt;!&ndash; <img-->
<!--                  :src="require('@/assets/images/landing_v2/icon-usdt.png')"-->
<!--                  alt=""-->
<!--                  width="20"-->
<!--                /> &ndash;&gt;-->
<!--              </div>-->
<!--              <div class="item-col font-bold font-w md:w-3/12">-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer num1 operator"-->
<!--                  @click="congBetAmount"-->
<!--                  >+</span-->
<!--                >-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="vx-row m-0 mt-2">-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-5/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span class="w-full bpF cursor-pointer h-12" @click="clickCT(50000)"-->
<!--                  >+50000</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-5/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(100000)"-->
<!--                  >+100000</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-5/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(500000)"-->
<!--                >+500000</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-4/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(1000000)"-->
<!--                  >+1M</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-4/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(5000000)"-->
<!--                  >+5M</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-4/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(10000000)"-->
<!--                  >+10M</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-4/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(20000000)"-->
<!--                >+20M</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-4/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(50000000)"-->
<!--                >+50M</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-4/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(100000000)"-->
<!--                >+100M</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-4/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(200000000)"-->
<!--                >+200M</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-4/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span-->
<!--                  class="w-full bpF cursor-pointer h-12"-->
<!--                  @click="clickCT(300000000)"-->
<!--                >+300M</span-->
<!--                >-->
<!--              </div>-->
<!--              <div-->
<!--                class="item-col font-bold font-w md:w-4/12 w-full text-center mt-2"-->
<!--              >-->
<!--                <span class="w-full bpF cursor-pointer h-12" @click="clickCT(0)"-->
<!--                  >{{$t('All')}}</span-->
<!--                >-->
<!--              </div>-->
<!--            </div>-->
            <div class="color-red font-bold text-xl">
              {{getTimeCurrentSession}}
            </div>
            <div class="mt-2 mb-2 text-xl text-white">{{$t("Amount")}}</div>
            <select class="w-full rounded h-10 px-3 selectBoxBetValue"  v-model="betAmount" name="" id="">

              <option v-for="(value, i) in listBetValue" :key="i" :value=value.value>
                {{ value.text }}
              </option>
            </select>
          </div>
          <TimerBet @chooseTime="chooseTimeBet" v-if="conditionFeatureBinomo" />
          <div class="lg:relative">
            <div class="text-center">
              <div class="profitPercent color-light-yellow text-2xl mb-2">
                {{$t("Profit")}} <span>90%</span>
              </div>
              <div class="profitValue color-green text-3xl font-bold">
                +đ {{ loiNhuan }}
                <!-- <img
                  :src="require('@/assets/images/landing_v2/icon-usdt.png')"
                  alt=""
                  width="36"
                /> -->
              </div>
            </div>
          </div>
          <div class="lg:relative text-center">
            <div class="text-center">{{$t("Psychological_Indicator")}}</div>
            <vs-progress
              class="bg-green"
              :height="7"
              :percent="CSBUY"
              color="danger"
            ></vs-progress>
            <div class="block">
              <span class="color-red float-left"> {{ CSBUY }}% </span>
              <span class="color-green float-right"> {{ CSSELL }}% </span>
            </div>
          </div>

          <div class="lg:relative">
            <div class="h-6"></div>
            <div
              @click="BetBuySell('buy')"
              :class="`btn_dat_cuoc tang ${!isBet ? 'disabled' : ''}`"
            >
              {{$t('BUY')}}
              <feather-icon
                icon="TrendingUpIcon"
                svgClasses="w-6 h-5"
              ></feather-icon>
            </div>

            <div
              class="mt-2 col-md-12 col-4 bet-box-time btn_dat_cuoc"
              style="
                border: 1px solid #fc5f5f;
                border-radius: 4px;
                background-color: #727272;
              "
              v-if="conditionBetBinomo"
            >
              <a
                class="btn btn-trade-time btnTransparent w-100 flex flex-col justify-center items-center"
                style="height: 37px; color: #fff"
              >
                <div
                  class="font-14 mb-0"
                  style="line-height: normal; font-size: 0.875rem"
                >
                  {{ textTimeDown }}
                </div>
                <div
                  class="mb-0 font-bold ml-1 timer_counter second"
                  style="line-height: normal; font-size: 1.125rem"
                >
                  {{ seconDown  }}s
                </div>
              </a>
            </div>

            <div
              @click="BetBuySell('sell')"
              class="mt-2"
              :class="`btn_dat_cuoc giam ${!isBet ? 'disabled' : ''}`"
            >
              {{$t('SELL')}}
              <feather-icon
                icon="TrendingDownIcon"
                svgClasses="w-6 h-5"
              ></feather-icon>
            </div>
          </div>
        </div>
        <div class="mobile hidden">
          <div class="sidebarPC relative">
            <vs-progress
              class="bg-red"
              :height="4"
              :percent="CSBUY"
              color="success"
            ></vs-progress>
            <div class="block">
              <span class="color-green float-left"> {{ CSBUY }}% </span>
              <span class="color-red float-right"> {{ CSSELL }}% </span>
            </div>
          </div>
          <div class="relative">
            <select class="w-full rounded h-10 px-3 selectBoxBetValue !mx-24"  v-model="betAmount" name="" id="">
              <option v-for="(value, i) in listBetValue" :key="i" :value=value.value

              >{{ value.text }}</option>
            </select>
            <div class="mt-1 text-center c-loinhuan">
              Profit
              <span class="profitPercent color-light-yellow mb-2 mr-3">90%</span>
              <span class="profitValue color-green text-2xl font-bold"
                >+đ{{ loiNhuan }}</span
              >
            </div>
          </div>
<!--          <div class="relative">-->
<!--            <div class="flex">-->
<!--              <div class="flex w-full mr-2">-->
<!--                <div @click="truBetAmount" class="operator_mobile w-full">-->
<!--                  <svg-->
<!--                    viewBox="0 0 24 24"-->
<!--                    width="24"-->
<!--                    height="24"-->
<!--                    stroke="currentColor"-->
<!--                    stroke-width="2"-->
<!--                    fill="none"-->
<!--                    stroke-linecap="round"-->
<!--                    stroke-linejoin="round"-->
<!--                    class="css-i6dzq1"-->
<!--                  >-->
<!--                    <line x1="5" y1="12" x2="19" y2="12"></line>-->
<!--                  </svg>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="flex relative" style="width: 55rem">-->
<!--                <vs-input-->
<!--                  readonly="readonly"-->
<!--                  @click.stop="showMobileMenu = !showMobileMenu"-->
<!--                  class="w-full betInput"-->
<!--                  icon-pack="feather"-->
<!--                  icon="icon-dollar-sign"-->
<!--                  placeholder="10"-->
<!--                  v-model="betAmount"-->
<!--                  icon-no-border-->
<!--                />-->
<!--              </div>-->
<!--              <div class="flex w-full ml-2">-->
<!--                <div @click="congBetAmount" class="operator_mobile w-full">-->
<!--                  <svg-->
<!--                    viewBox="0 0 24 24"-->
<!--                    width="24"-->
<!--                    height="24"-->
<!--                    stroke="currentColor"-->
<!--                    stroke-width="2"-->
<!--                    fill="none"-->
<!--                    stroke-linecap="round"-->
<!--                    stroke-linejoin="round"-->
<!--                    class="css-i6dzq1"-->
<!--                  >-->
<!--                    <line x1="12" y1="5" x2="12" y2="19"></line>-->
<!--                    <line x1="5" y1="12" x2="19" y2="12"></line>-->
<!--                  </svg>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <div class="relative mb-5 mt-3">
            <div class="flex justify-between">
              <div
                @click="BetBuySell('sell')"
                :class="`btn_dat_cuoc_m giam ${!isBet ? 'disabled' : ''}`"
              >
                {{$t('SELL')}}
              </div>
              <div
                class="font-bold btn_dat_cuoc_m time"
                v-if="conditionBetBinomo"
              >
                <div>{{ textTimeDown }}</div>
                <div class="display-remain-time timer_counter second">
                  {{ seconDown }}s
                </div>
              </div>
              <div
                @click="BetBuySell('buy')"
                :class="`btn_dat_cuoc_m tang ${!isBet ? 'disabled' : ''}`"
              >
                {{$t('BUY')}}
              </div>
            </div>
          </div>
          <div class="keyboard-input-wrap" :class="{ active: showMobileMenu }">
            <div
              class="numKeyboardInput"
              @click="showMobileMenu = !showMobileMenu"
            ></div>
            <div class="keyboard" :class="{ hiddenKey: !showMobileMenu }">
              <div id="amountWrapper" class="amountWrapper">
<!--                <div class="headerAmount">-->
<!--                  <span>Khối lượng giao dịch</span>-->
<!--                </div>-->
<!--                <div class="groupButtonMobile flex">-->
<!--                  <div class="flex w-full mr-2">-->
<!--                    <vs-button-->
<!--                      @click="truBetAmount"-->
<!--                      class="w-full"-->
<!--                      type="border"-->
<!--                      icon-pack="feather"-->
<!--                      icon="icon-minus"-->
<!--                    ></vs-button>-->
<!--                  </div>-->
<!--                  <div class="flex relative" style="width: 55rem">-->
<!--                    <vs-input-->
<!--                      readonly="readonly"-->
<!--                      @keyup="nhapBetAmount"-->
<!--                      class="w-full betInput"-->
<!--                      icon-pack="feather"-->
<!--                      icon="icon-dollar-sign"-->
<!--                      placeholder="10"-->
<!--                      v-model="betAmount"-->
<!--                      icon-no-border-->
<!--                    />-->
<!--                    <feather-icon-->
<!--                      @click="clearBAmount()"-->
<!--                      style="-->
<!--                        right: 5px;-->
<!--                        top: 7px;-->
<!--                        position: absolute !important;-->
<!--                      "-->
<!--                      class="cursor-pointer"-->
<!--                      icon="XCircleIcon"-->
<!--                      svgClasses="w-6 h-6 text-grey"-->
<!--                    ></feather-icon>-->
<!--                  </div>-->
<!--                  <div class="flex w-full ml-2">-->
<!--                    <vs-button-->
<!--                      @click="congBetAmount"-->
<!--                      class="w-full"-->
<!--                      type="border"-->
<!--                      icon-pack="feather"-->
<!--                      icon="icon-plus"-->
<!--                    ></vs-button>-->
<!--                  </div>-->
<!--                </div>-->
                <div class="relative">
                  <div class="mt-2 mb-2 text-center">
                    Profit
                    <span class="profitPercent color-light-yellow mb-2"
                      >90%</span
                    >
                    <span class="profitValue color-green text-3xl font-bold"
                      >+đ{{ loiNhuan }}</span
                    >
                  </div>
                </div>
              </div>
<!--              <table id="keyboardLandscape" style="height: calc(100% - 160px)">-->
<!--                <tbody>-->
<!--                  <tr class="suggestion">-->
<!--                    <td @click="clickCT(5)">+5</td>-->
<!--                    <td @click="clickCT(10)">+10</td>-->
<!--                    <td @click="clickCT(50)">+50</td>-->
<!--                    <td @click="clickCT(100)">+100</td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td @click="writeBetAmountKey(1)">1</td>-->
<!--                    <td @click="writeBetAmountKey(2)">2</td>-->
<!--                    <td @click="writeBetAmountKey(3)">3</td>-->
<!--                    <td rowspan="2" @click="clickCT(0)"><span>Tất cả</span></td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td @click="writeBetAmountKey(4)">4</td>-->
<!--                    <td @click="writeBetAmountKey(5)">5</td>-->
<!--                    <td @click="writeBetAmountKey(6)">6</td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td @click="writeBetAmountKey(7)">7</td>-->
<!--                    <td @click="writeBetAmountKey(8)">8</td>-->
<!--                    <td @click="writeBetAmountKey(9)">9gghg</td>-->
<!--                    <td rowspan="2" @click="showMobileMenu = !showMobileMenu">-->
<!--                      Complete-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td @click="writeBetAmountKey('.')">.</td>-->
<!--                    <td @click="writeBetAmountKey(0)">0</td>-->
<!--                    <td @click="deleteString">-->
<!--                      <feather-icon-->
<!--                        class="cursor-pointer"-->
<!--                        icon="DeleteIcon"-->
<!--                        svgClasses="w-6 h-6 text-grey"-->
<!--                      ></feather-icon>-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                </tbody>-->
<!--              </table>-->
            </div>
          </div>
        </div>
      </div>
      <div
        class="vx-col w-full rightBar c-desktop trans binomo-tab"
        id="right-content-binomo"
        v-else
      >
<!-- mobile -->
        <div class="mobile mt-10 hidden">
          <div class="flex">
            <TimerBet
            @chooseTime="chooseTimeBet"
            v-if="conditionFeatureBinomo"
            class="mr-5 w-full"
            />
            <PriceBet
              :betAmount="betAmount"
              :maxBetAmount="maxBetAmount"
              @choosePrice="choosePrice"
              class="w-full"
            />
          </div>

          <div class="profit-container flex  justify-center text-center">
            <div class="mt-2 mb-2 flex  text-center">
              <div class="title mt-5 mr-5 text-2xl">Profit</div>
              <div class="profit-percent mr-5">+90%</div>
              <span class="profit-value mt-4">+${{ loiNhuan }}</span>
            </div>
          </div>
          <BetBuySell
            @betType="BetBuySellBinomo"
            :betAmount="betAmount"
            :CSBUY="CSBUY"
            :CSSELL="CSSELL"
          />
        </div>

<!-- end mobile -->

        <div class="pc block">
          <TimerBet
            @chooseTime="chooseTimeBet"
            v-if="conditionFeatureBinomo"
            class="mt-10"
          />
          <PriceBet
            :betAmount="betAmount"
            :maxBetAmount="maxBetAmount"
            @choosePrice="choosePrice"
          />
          <div class="profit-container relative">
            <div class="mt-2 mb-2 text-center">
              <div class="title">Profit</div>
              <div class="profit-percent">+90%</div>
              <span class="profit-value">+${{ loiNhuan }}</span>
            </div>
          </div>
          <BetBuySell
            @betType="BetBuySellBinomo"
            :betAmount="betAmount"
            :CSBUY="CSBUY"
            :CSSELL="CSSELL"
          />
        </div>
      </div>
      <div
        :class="['c-body trans']"
        :style="`${isOpenSideBar && !isTablet ? 'width: 230px' : ''}`"
      ></div>
    </div>
    <PopupCongratulation
      class="popupCongratulation"
      :isWinPop="isWinPop"
      :blObj="blObj"
      :moneyWin="moneyWin"
    />
    <PopupOrderBet
      :isOpenOrderBetPopup="isOpenOrderBetPopup"
      :useDataOrderBet = "dataOrderBet"
      :usePriceBO = usePriceBO
      @update:isOpenOrderBetPopup="isOpenOrderBetPopup = $event"
      :confirmBetOrder="confirmBetOrder"
      @update:confirmBetOrder="confirmBetOrder = $event"
    />
  </div>
</template>
<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import More from "highcharts/highcharts-more";
import stockInit from "highcharts/modules/stock";
import loadIndicatorsAll from "highcharts/indicators/indicators";
import { isMobile, isTablet } from "mobile-device-detect";
import getData from "@/pages/trade/navbar/components/data.json";
// import config from "@/config.json";
import Vue from "vue";
import AuthenticationService from "@/services/AuthenticationService";
import VScrollLock from "v-scroll-lock";
import TimerBet from "@/components/trading/TimerBet";
import { mapGetters } from "vuex";
import constants from "@/constants/index";
Vue.use(VScrollLock);
import TimeChartDropdown from "../../components/dropdown/TimeChartDropdown.vue";
import PopupCongratulation from "./PopupCongratulation";
import PopupTransferMoney from "./PopupTransferMoney";
import PopupOrderBet from "./PopupOrderBet"
More(Highcharts);
stockInit(Highcharts);
loadIndicatorsAll(Highcharts);

let timer = null;

function convertTextValueMeter(t) {
  return t >= -90 && t <= -54
    ? { cl: "rank-1", text: "Strong sell", index: 1 }
    : t > -54 && t <= -18
    ? { cl: "rank-2", text: "Sell", index: 2 }
    : t > -18 && t <= 17
    ? { cl: "rank-3", text: "Neutral", index: 3 }
    : t > 17 && t <= 53
    ? { cl: "rank-4", text: "Buy", index: 4 }
    : t > 53
    ? { cl: "rank-5", text: "Strong Buy", index: 5 }
    : void 0;
}

var UP_COLOR = "#2BB196",
  DOWN_COLOR = "#FC5454",
  deviceVersion = "pc";

var progressBar = $(".e-c-progress");
var lengthp = Math.PI * 2 * 100;
progressBar.css("stroke-dasharray", lengthp);

//circle ends
//let wholeTime = 30; // manage this to set the whole time

if (isMobile) {
  deviceVersion = "mobile";
} else if (isTablet) {
  deviceVersion = "tablet";
}

var listData = [],
  ohlcStock = [],
  volumeStock = [];

var connected = false;

const stockChart = {
  chart: {
    panning: false,
    followTouchMove: false,
    zoomType: "",
    backgroundColor: "transparent",
    plotBackgroundImage: require("@/assets/images/sky/world_map.svg"),
    marginLeft: 0,
    marginRight: "pc" !== deviceVersion ? 60 : 80,
    marginBottom: "pc" !== deviceVersion ? 20 : 30,
    events: {},
  },
  rangeSelector: {
    enabled: false,
    selected: 4,
  },
  credits: {
    enabled: false,
  },
  scrollbar: {
    enabled: false,
  },
  navigator: {
    enabled: false,
  },
  stockTools: {
    gui: {
      enabled: false,
    },
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    candlestick: {
      groupPadding: 0,
      lineColor: DOWN_COLOR,
      upLineColor: UP_COLOR,
      pointWidth: "pc" !== deviceVersion ? 10 : 8,
      maxPointWidth: "pc" !== deviceVersion ? 9 : 8,
    },
    column: {
      minPointLength: 2,
      pointWidth: "pc" !== deviceVersion ? 10 : 8,
      maxPointWidth: "pc" !== deviceVersion ? 9 : 8,
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0,
    },
    series: {
      zIndex: 2,

      states: {
        inactive: {
          opacity: 1,
        },
      },
      allowPointSelect: false,
      point: {
        events: {
          click() {},
        },
      },
    },
  },
  tooltip: {
    split: false,
    enabled: true,
    label: false,
    animation: false,
    backgroundColor: "#081a34",

    borderColor: "transparent",
    borderWidth: 0,
    shadow: false,
    stroke: "transparent",
    useHTML: true,
    style: {
      color: "#fff",
      fontSize: "10px",
      stroke: "transparent",
      opacity: 0.2 ,
    },
    formatter() {
      return "BTC/USDT" === this.series.name
        ? '\n<span style="margin-right: 10px;"><b>O</b>: ' +
            this.point.open +
            '</span>\n<span style="margin-right: 10px;"><b>C</b>: ' +
            this.point.close +
            '</span>\n<span>&nbsp;</span>\n<br/>\n<span style="margin-right: 10px;"><b>H</b>: ' +
            this.point.high +
            '</span>\n<span style="margin-right: 10px;"><b>L</b>: ' +
            this.point.low +
            "</span>\n<span><b>Vol</b>: " +
            this.point.vol +
            "</span>"
        : "Volume" === this.series.name
        ? "<b>Vol</b>: " + this.y
        : "";
    },
    positioner() {
      var t = 20,
        e = "pc" !== deviceVersion ? 50 : 60;
      return {
        x: t,
        y: e,
      };
    },
  },
  xAxis: {
    type: "datetime",

    labels: {
      enabled: true,
      formatter: function () {
        const date = this.value;
        let hours = new Date(date).getHours();
        if(hours < 10) hours = "0" + hours;
        let minutes = new Date(date).getMinutes();
        if(minutes < 10) minutes = "0" + minutes;
        // const second = new Date(date).getSeconds();
        return `${hours}:${minutes}`;
        //return `${hours}:${minutes}:${second}:`;
      },
      style: {
        fontSize: 10,
        color: "#707070",
      },
    },
    plotLines: [
      {
        value: 0,
        color: "#ffffff",
        width: 0.75,
        id: "current-pricex",
        zIndex: 1e3,
        dashStyle: "LongDash",
      },
    ],
    lineWidth: 0,
    minorGridLineWidth: 0,
    lineColor: "transparent",
    minorTickLength: 0,
    tickLength: 0,
  },
  yAxis: [
    {
      gridLineColor: "#35275B",
      labels: {
        align: "right",
        x: "pc" !== deviceVersion ? 45 : 50,
        style: {
          color: "#fff",
          fontSize: "11px",
        },
      },
      height: "90%",
      top: 0,
      plotLines: [
        {
          value: 0,
          color: "#ffffff",
          width: 0.75,
          id: "current-price",
          zIndex: 100,
          label: {
            useHTML: true,
            text: 0,
            x: "pc" !== deviceVersion ? 60 : 70,
            align: "right",
            style: {
              color: "#fff",
              fontSize: "11px",
              background: "transparent",
              borderRadius: "4px",
            },
          },
        },
      ],
      lineWidth: 0,
      resize: {
        enabled: true,
      },
    },
    {
      gridLineColor: "",
      visible: false,
      title: {
        align: "high",
        text: null,
        rotation: 0,
        y: 0,
        useHTML: true,
      },
      top: "pc" == deviceVersion ? "83.4%" : "85%",
      height: "15%",
      lineWidth: 0,
      offset: 0,
    },
  ],
  series: [
    {
      id: "aapl",
      type: "candlestick",
      name: "BTC/USDT",
      color: DOWN_COLOR,
      upColor: UP_COLOR,
      data: ohlcStock,
    },
    {
      type: "column",
      name: "Volume",
      data: volumeStock,
      yAxis: 1,
    },
    {
      name: "sma1",
      id: "sma1",
      type: "sma",
      linkedTo: "aapl",
      color: "#2177FF",
      lineWidth: 2,
      marker: false,
      zIndex: 3,
      visible: true,
      enableMouseTracking: false,
      params: {
        index: "0",
        period: 10,//10
      },
      allowPointSelect: false,
      point: {
        events: {
          // click: function(t) {
          //     setTimeout(function() {}, 500)
          // }
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    {
      name: "sma2",
      id: "sma2",
      type: "sma",
      linkedTo: "aapl",
      color: "#E22A67",
      lineWidth: 2,
      marker: false,
      zIndex: 3,
      visible: true,
      enableMouseTracking: false,
      params: {
        index: "1",
        period: 20,//5
      },
      allowPointSelect: false,
      point: {
        events: {
          // click: function(t) {
          //     setTimeout(function() {}, 500)
          // }
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  ],
};

const gaugeMeterOs = {
  chart: {
    type: "gauge",
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    height: 70,
    spacingBottom: 0,
    spacingTop: 0,
    spacingLeft: 0,
    spacingRight: 0,
    events: {
      render(t) {
        let td = t.target.series[0].points[0].y;
        let n = convertTextValueMeter(td);
        $(".gauge-meter--os .gauge-meter-background")
          .removeClass("rank-1 rank-2 rank-3 rank-4 rank-5")
          .addClass(n.cl);
        $(".gauge-meter--os .gauge-meter-label-item").removeClass("active");
        $(
          ".gauge-meter--os .gauge-meter-label-item:nth-child(" + n.index + ")"
        ).addClass("active");
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutBounce",
    },
  },

  title: {
    text: "",
  },

  pane: [
    {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "105%"],
      size: 140,
    },
  ],

  credits: {
    enabled: false,
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  yAxis: [
    {
      min: -90,
      max: 90,
      minorTickPosition: "outside",
      tickPosition: "outside",
      labels: {
        rotation: "auto",
        distance: 0,
        style: {
          color: "rgba(0,0,0,0)",
        },
      },
      pane: 0,
      title: "",
      minorTickColor: "rgba(0,0,0,0)",
      lineColor: "rgba(0,0,0,0)",
      tickColor: "rgba(0,0,0,0)",
    },
  ],

  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: false,
      },
      dial: {
        radius: "85%",
        baseLength: "1%",
        rearLength: 0,
        backgroundColor: {
          linearGradient: {
            x1: 1,
            y1: 0,
            x2: 0,
            y2: 0,
          },
          stops: [
            [0, "#fff"],
            [1, "#000"],
          ],
        },
        baseWidth: 6,
        topWidth: 3,
      },
    },
  },

  series: [
    {
      name: "Oscillator",
      data: [10],
      yAxis: 0,
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 71,
        },
        chartOptions: {
          chart: {
            height: 35,
          },
          pane: [
            {
              size: 70,
            },
          ],
        },
      },
    ],
  },
};

const gaugeMeterSu = {
  chart: {
    type: "gauge",
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    height: 88,
    spacingBottom: 0,
    spacingTop: 0,
    spacingLeft: 0,
    spacingRight: 0,
    events: {
      render(t) {
        let td = t.target.series[0].points[0].y;
        let n = convertTextValueMeter(td);
        $(".gauge-meter--su .gauge-meter-background")
          .removeClass("rank-1 rank-2 rank-3 rank-4 rank-5")
          .addClass(n.cl);
        $(".gauge-meter--su .gauge-meter-label-item").removeClass("active");
        $(
          ".gauge-meter--su .gauge-meter-label-item:nth-child(" + n.index + ")"
        ).addClass("active");
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutBounce",
    },
  },

  title: {
    text: "",
  },

  pane: [
    {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "105%"],
      size: 176,
    },
  ],

  credits: {
    enabled: false,
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  yAxis: [
    {
      min: -90,
      max: 90,
      minorTickPosition: "outside",
      tickPosition: "outside",
      labels: {
        rotation: "auto",
        distance: 0,
        style: {
          color: "rgba(0,0,0,0)",
        },
      },
      pane: 0,
      title: "",
      minorTickColor: "rgba(0,0,0,0)",
      lineColor: "rgba(0,0,0,0)",
      tickColor: "rgba(0,0,0,0)",
    },
  ],

  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: false,
      },
      dial: {
        radius: "85%",
        baseLength: "1%",
        rearLength: 0,
        backgroundColor: {
          linearGradient: {
            x1: 1,
            y1: 0,
            x2: 0,
            y2: 0,
          },
          stops: [
            [0, "#fff"],
            [1, "#000"],
          ],
        },
        baseWidth: 6,
        topWidth: 3,
      },
    },
  },

  series: [
    {
      name: "Summary",
      data: [10],
      yAxis: 0,
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 89,
        },
        chartOptions: {
          chart: {
            height: 44,
          },
          pane: [
            {
              size: 88,
            },
          ],
        },
      },
    ],
  },
};

const gaugeMeterMa = {
  chart: {
    type: "gauge",
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    height: 70,
    spacingBottom: 0,
    spacingTop: 0,
    spacingLeft: 0,
    spacingRight: 0,
    events: {
      render(t) {
        let td = t.target.series[0].points[0].y;
        let n = convertTextValueMeter(td);
        $(".gauge-meter--ma .gauge-meter-background")
          .removeClass("rank-1 rank-2 rank-3 rank-4 rank-5")
          .addClass(n.cl);
        $(".gauge-meter--ma .gauge-meter-label-item").removeClass("active");
        $(
          ".gauge-meter--ma .gauge-meter-label-item:nth-child(" + n.index + ")"
        ).addClass("active");
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutBounce",
    },
  },

  title: {
    text: "",
  },

  pane: [
    {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "105%"],
      size: 140,
    },
  ],

  credits: {
    enabled: false,
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  yAxis: [
    {
      min: -90,
      max: 90,
      minorTickPosition: "outside",
      tickPosition: "outside",
      labels: {
        rotation: "auto",
        distance: 0,
        style: {
          color: "rgba(0,0,0,0)",
        },
      },
      pane: 0,
      title: "",
      minorTickColor: "rgba(0,0,0,0)",
      lineColor: "rgba(0,0,0,0)",
      tickColor: "rgba(0,0,0,0)",
    },
  ],

  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: false,
      },
      dial: {
        radius: "85%",
        baseLength: "1%",
        rearLength: 0,
        backgroundColor: {
          linearGradient: {
            x1: 1,
            y1: 0,
            x2: 0,
            y2: 0,
          },
          stops: [
            [0, "#fff"],
            [1, "#000"],
          ],
        },
        baseWidth: 6,
        topWidth: 3,
      },
    },
  },

  series: [
    {
      name: "ma",
      data: [10],
      yAxis: 0,
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 71,
        },
        chartOptions: {
          chart: {
            height: 35,
          },
          pane: [
            {
              size: 70,
            },
          ],
        },
      },
    ],
  },
};
import ChartIndex from "../../components/chart/ChartIndex";
import BetBuySell from "@/components/trading/BetBuySell";
import PriceBet from "@/components/trading/PriceBet";

export default {
  components: {
    PopupTransferMoney,
    PriceBet,
    BetBuySell,
    TimerBet,
    highcharts: Chart,
    TimeChartDropdown,
    ChartIndex,
    PopupCongratulation,
    PopupOrderBet
  },
  data() {
    return {
      getTimeCurrentSession:0,
      currentTypeBetBuySell:"",
      getCurrentSession:0,
      confirmBetOrder:false,
      dataOrderBet:[],
      isOpenOrderBetPopup:false,
      listBetValue:[
        {
          text:'50K',
          value:'50000'
        },
        {
          text:'100K',
          value:'100000'
        },
        {
          text:'500K',
          value:'500000'
        },
        {
          text:'1M',
          value:'1000000'
        },
        {
          text:'5M',
          value:'5000000'
        },
        {
          text:'10M',
          value:'10000000'
        },
        {
          text:'20M',
          value:'20000000'
        },
        {
          text:'50M',
          value:'50000000'
        },
        {
          text:'100M',
          value:'100000000'
        },
        {
          text:'200M',
          value:'200000000'
        },
        {
          text:'300M',
          value:'300000000'
        }
      ],
      updateData: null,
      timeTick: { value: 30, type: "seconds", unit: "s" },
      lineData: [],
      thisIDPlayer: 0,
      totalBuyStatic: 0,
      totalSellStatic: 0,

      //Moving
      NumMovBUY: 0,
      NumMovSELL: 0,
      NumMovNeutral: 0,
      textTitleMa: "NEUTRAL",

      //Oscillators
      NumOscBUY: 0,
      NumOscSELL: 0,
      NumOscNeutral: 0,
      textTitleOs: "NEUTRAL",

      //Summary
      NumSumBUY: 0,
      NumSumSELL: 0,
      NumSumNeutral: 0,
      textTitleSu: "NEUTRAL",

      moneyWin: 0,
      isWinPop: false,
      blObj: getData,
      isBet: true,
      CSBUY: 0,
      CSSELL: 0,
      isOrder: true,
      activeGau: false,
      activeHis: true,
      balanceForuser: 0,
      showMobileMenu: false,
      betAmount: 50000,
      loiNhuan: 45000,
      optionsOs: gaugeMeterOs,
      optionsSu: gaugeMeterSu,
      optionsMa: gaugeMeterMa,
      // chartOptions: {
      //     series: [{
      //         data: [1,2,3] // sample data
      //         }]
      // }
      chartOptionsStock: stockChart,
      betOpen: {
        s: 0,
        l: {
          bet: [
            {
              items: [],
            },
          ],
        },
      },
      betOpenBinomo: {
        s: 0,
        l: {
          bet: [
            {
              items: [],
            },
          ],
        },
      },
      isTablet,
      chosenTime: "",
      currentSession: true,
      boPriceClose: "",
      usePriceBO:"",
      baseUrlSocket: process.env.VUE_APP_BASE_URL_SOCKET,
      urlSocketPopupTransfer:process.env.VUE_APP_BASE_URL_SOCKET_NOTIFY,
      currentGamePlay: "",
    };
  },
  computed: {
    ...mapGetters("tab", ["getCoinTab"]),
    currentTimeTickThreshold() {
      // fix 45s va s60
      let result = [];
      for (let i = 0; i < 60; i++) {
            if (i === 45 || i === 0) result.push(i);
          }
          return result;
      // const timeTick = this.timeTick;
      // if (timeTick.unit == "m") {
      //   return [0];
      // }
      // if (timeTick.unit == "s") {
      //   let result = [];
      //   for (let i = 0; i < 60; i++) {
      //     if (i % timeTick.value == 1) result.push(i);
      //   }
      //   return result;
      // }
    },
    maxBetAmount() {
      return this.blObj.isAccount ? this.blObj.blLive : this.blObj.blDemo;
    },
    conditionBetBinomo() {
      return this.conditionFeatureBinomo ? this.currentSession : true;
    },
    conditionFeatureBinomo() {
      return this.getCoinTab.id
        ? this.getCoinTab.id === constants.COIN_TAB.BINOMO
        : false;
    },
    timeStep() {
      const rangeUnit = {
        s: 1,
        m: 60,
      };
      const timeStep =
        this.timeTick.value * rangeUnit[this.timeTick.unit] * 1000;

      // this.timeTick.value * rangeUnit[this.timeTick.unit] * 1000;
      return timeStep;
    },
    seconDown() {
      let timeDown = Number(getData.countDown);
      let result = timeDown < 10?`0${timeDown}`:timeDown;
      return result;
    },
    textTimeDown() {
      return getData.textTimeDown;
    },
    isOpenSideBar() {
      const isOpenSideBarStore = this.$store.state.isOpenSideBar;
      return isOpenSideBarStore;
    },
  },
  watch: {
    confirmBetOrder:{
      handler(val){
        if(val==true){
          this.playAudio("order");
          this.sendMessage({ type: "bet", data: this.dataOrderBet })
          this.HandleBetBuySell(this.currentTypeBetBuySell)
          this.confirmBetOrder = false
        }
      }
    },
    betAmount:{
      handler(val){
        if(val){
          this.tinhloinhuan(val)
        }
      }
    },
    getCoinTab: {
      handler(val) {
        this.connection.close();

        if (val.id === constants.COIN_TAB.WEFINEX) {
          this.currentGamePlay = null;
          this.handleSocket(null, false);
        } else if (val.id === constants.COIN_TAB.BINOMO) {
          this.currentGamePlay = "binomo";
          this.handleSocket("binomo", false);
        }
      },
      deep: true,
    },
    timeTick: {
      handler() {
        this.updateConfigChart();
      },
      deep: true,
    },
    showMobileMenu: function (newVal) {
      if (!newVal) {
        window.scrollTo(0, 0);
      }
    },
    "oscillators.meter.numberValue": function () {
      this.redrawGaugeMeter("oscillators"), this.redrawGaugeMeter("summary");
    },
    "movingAverages.meter.numberValue": function () {
      this.redrawGaugeMeter("movingAverages"), this.redrawGaugeMeter("summary");
    },
    isOpenSideBar: function (isOpenSideBarStore) {
      const tradeView = document.querySelector(".highcharts-container");
      const cDesktop = document.querySelector(".c-desktop");
      const left_content = document.querySelector(".overviewInfo ")
      if (isTablet || isMobile) return isOpenSideBarStore;
      if (isOpenSideBarStore) {
        if (tradeView) {
          tradeView.style.transform = `translateX(-230px)`;
        }
        if (cDesktop) {
          cDesktop.style.transform = `translateX(-230px)`;
          left_content.style.transform = `translateX(-230px)`;
        }
      } else {
        if (tradeView) {
          tradeView.style.transform = `translateX(0px)`;
        }
        if (cDesktop) {
          cDesktop.style.transform = `translateX(0px)`;
          left_content.style.transform = `translateX(0px)`;
        }
      }
    },
  },
  beforeDestroy() {
    this.$store.commit("TOGGLE_IS_OPEN_SIDEBAR", false);
    const tradeView = document.querySelector(".highcharts-container");
    if (tradeView) {
      tradeView.style.transform = `translateX(0px)`;
    }
  },
  methods: {

    getDefaultListByTimeTick(tick) {
      const data = { type: "getListData", data: { timeScope: tick } };
      this.connection.send(JSON.stringify(data));
    },
    choosePrice(price) {
      this.betAmount = price;
      this.tinhloinhuan(this.betAmount);
    },
    updateConfigChart() {
      const vm = this;
      const initTimeStamp = this.roundedDateString(
        JSON.parse(JSON.stringify(listData[0].date))
      );
      let nextTimeStamp = initTimeStamp + this.timeStep;
      let result = [];
      let temp = null;
      listData.forEach((boPrice) => {
        if (temp == null) {
          temp = boPrice;
        }
        if (
          this.roundedDateString(boPrice.date) <
          this.roundedDateString(nextTimeStamp)
        ) {
          // gộp data
          if (boPrice.low <= temp.low) {
            temp.low = boPrice.low;
          }
          if (boPrice.high >= temp.high) {
            temp.high = boPrice.high;
          }
          temp.close = boPrice.close;
        } else {
          result.push(vm.convertRawToCandle(temp));
          nextTimeStamp = nextTimeStamp + this.timeStep;
          temp = null;
        }
      });
      const begin = result.length - 60 > 0 ? result.length - 114 : 0;
      stockChart.series[0].data = result.slice(-begin);
      const columnData = result.map((item) => {
        return {
          x: item.x, // the date
          y: item.vol, // the volume
          color: item.open < item.close ? UP_COLOR : DOWN_COLOR,
        };
      });
      stockChart.series[1].data = columnData.slice(-begin);
      const lineData = result.map((item) => {
        return {
          x: item.x, // the date
          y: item.close, // the volume
        };
      });
      this.lineData = lineData;
    },
    convertRawToCandle(boPrice) {
      var color = this.getColor(boPrice.open, boPrice.close);
      let result;
      try {
        result = {
          x: this.roundedDateString(boPrice.date),
          open: boPrice.open.toFixed(2) * 1,
          high: boPrice.high.toFixed(2) * 1,
          low: boPrice.low.toFixed(2) * 1,
          close: boPrice.close.toFixed(2) * 1,
          vol: boPrice.volume.toFixed(2) * 1,
          color: color,
        };
      } catch (e) {
        console.log("convertRawToCandle Error: " + e);
      }

      return result;
    },
    onChartTimeTickChange(option) {
      //update config chart with time option
      this.timeTick = option;
      this.getDefaultListByTimeTick(option.value + option.unit);
    },
    disabledBet() {
      return (this.isBet = !this.isBet ? true : false);
    },
    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    changeBlance(v) {
      if (getData.isAccount) {
        getData.blLive = getData.blLive - v;
      } else {
        getData.blDemo = getData.blDemo - v;
      }

      this.balanceForuser = getData.blDemo;
    },

    checkBet(v) {
      // lấy tổng số dư của tài khoản
      let sodu =   getData.blLive ;

      this.balanceForuser = sodu;
      if (sodu < v) return true;
    },

    BetBuySell(v) {
      if (!this.isBet) {
        // console.log("cancel order");
        return;
      }
      // console.log("make order");
      // this.playAudio("order");
      let gAmount = this.betAmount.toString();
      gAmount = this.replaceAll(gAmount, ",", "");

      if (this.checkBet(gAmount)) {
        return this.$vs.notify({
          text: "Your balance is not enough.",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      let email = getData.email;
      let typeAccount = 1;
      let uidLive = getData.uidLive;
      let uidDemo = getData.uidDemo;
      let uidAcc = 0;
      let expired_at = "";
      if (this.chosenTime) {
        let today = new Date();
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        let hours = this.chosenTime.substring(0, 2);
        let minutes = this.chosenTime.substring(3, 5);
        let currentChosenDay = this.chosenTime === "00:00" ? tomorrow : today;
        expired_at = new Date(
          currentChosenDay.setHours(Number(hours), Number(minutes), 0)
        ).toString();
      }

      this.changeBlance(gAmount);

      if (typeAccount == 1) {
        uidAcc = uidLive;
      } else {
        uidAcc = uidDemo;
      }

      let obj = {
        email: email,
        uid: uidAcc,
        ref: getData.ref,
        UpId: getData.upid,
        typeAccount: 1, // 0: demo: 0 , 1: live
        betAmount: gAmount,
        type: v,
        mkt: getData.mkt,
        // forceWin: this.$store.state.forceWin,
        //idPlayer: this.thisIDPlayer
      };
      if (expired_at && this.getCoinTab.id === constants.COIN_TAB.BINOMO) {
        obj.expired_at = expired_at;
      }

      this.isOpenOrderBetPopup = true
      this.dataOrderBet = obj
      this.usePriceBO = this.boPriceClose
      this.currentTypeBetBuySell = v

      // let ss = this.$store.session;
      // let timeGet = new Date().getTime();
      //
      // this.betOpen.s = ss;
      // let itp = {
      //   ss: ss,
      //   time: timeGet,
      //   amt: gAmount,
      //   type: v,
      //   acc_type: 1,
      //   currencyType: "BTC/USD",
      //   classIcon: "iconBitcoin",
      // };
      // if (expired_at && this.getCoinTab.id === constants.COIN_TAB.BINOMO) {
      //   itp.expired_at = expired_at;
      // }
      //
      // this.betOpen.l.bet[0].items.push(itp);
      //
      // localStorage.setItem("stateOpen", JSON.stringify(this.betOpen));
      //
      // window.dispatchEvent(
      //   new CustomEvent("stateOpen-localstorage-changed", {
      //     detail: {
      //       storage: localStorage.getItem("stateOpen"),
      //     },
      //   })
      // );
      //
      // getData.Notify = this.betOpen.l.bet[0].items.length;
      // this.clearBAmount();
    },
    HandleBetBuySell(v) {
      if (!this.isBet) {
        return;
      }
      let gAmount = this.betAmount.toString();
      gAmount = this.replaceAll(gAmount, ",", "");

      if (this.checkBet(gAmount)) {
        return this.$vs.notify({
          text: "Your balance is not enough.",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      let email = getData.email;
      let typeAccount = 1;
      let uidLive = getData.uidLive;
      let uidDemo = getData.uidDemo;
      let uidAcc = 0;
      let expired_at = "";
      if (this.chosenTime) {
        let today = new Date();
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        let hours = this.chosenTime.substring(0, 2);
        let minutes = this.chosenTime.substring(3, 5);
        let currentChosenDay = this.chosenTime === "00:00" ? tomorrow : today;
        expired_at = new Date(
          currentChosenDay.setHours(Number(hours), Number(minutes), 0)
        ).toString();
      }

      this.changeBlance(gAmount);

      if (typeAccount == 1) {
        uidAcc = uidLive;
      } else {
        uidAcc = uidDemo;
      }

      let obj = {
        email: email,
        uid: uidAcc,
        ref: getData.ref,
        UpId: getData.upid,
        typeAccount: 1, // 0: demo: 0 , 1: live
        betAmount: gAmount,
        type: v,
        mkt: getData.mkt,
      };
      if (expired_at && this.getCoinTab.id === constants.COIN_TAB.BINOMO) {
        obj.expired_at = expired_at;
      }

      // this.isOpenOrderBetPopup = true
      // this.dataOrderBet = obj
      // this.usePriceBO = this.boPriceClose

      let ss = this.$store.session;
      let timeGet = new Date().getTime();

      this.betOpen.s = ss;
      let itp = {
        ss: ss,
        time: timeGet,
        amt: gAmount,
        type: v,
        acc_type: 1,
        currencyType: "BTC/USD",
        classIcon: "iconBitcoin",
      };
      if (expired_at && this.getCoinTab.id === constants.COIN_TAB.BINOMO) {
        itp.expired_at = expired_at;
      }

      this.betOpen.l.bet[0].items.push(itp);

      localStorage.setItem("stateOpen", JSON.stringify(this.betOpen));

      window.dispatchEvent(
        new CustomEvent("stateOpen-localstorage-changed", {
          detail: {
            storage: localStorage.getItem("stateOpen"),
          },
        })
      );

      getData.Notify = this.betOpen.l.bet[0].items.length;
      this.clearBAmount();
    },
    BetBuySellBinomo(type) {
      // if (!this.isBet) {
      //   return this.$vs.notify({
      //     text: "Bet time hasn't come yet.",
      //     color: "danger",
      //     position: "top-right",
      //     iconPack: "feather",
      //     icon: "icon-x-circle",
      //   });
      // }

      this.sendInfoUserBinomo();
      this.playAudio("order");
      // if(type=="buy"){
      //   //add line
      //
      // }else{
      //
      // }
      let gAmount = this.betAmount.toString();
      gAmount = this.replaceAll(gAmount, ",", "");

      if (this.checkBet(gAmount)) {
        return this.$vs.notify({
          text: "Your balance is not enough.",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      let email = getData.email;
      let typeAccount = 1;
      let uidLive = getData.uidLive;
      let uidDemo = getData.uidDemo;
      let uidAcc = 0;
      let expired_at = "";
      if (this.chosenTime) {
        let today = new Date();
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        let hours = this.chosenTime.substring(0, 2);
        let minutes = this.chosenTime.substring(3, 5);
        let currentChosenDay = this.chosenTime === "00:00" ? tomorrow : today;
        expired_at = new Date(
          currentChosenDay.setHours(Number(hours), Number(minutes), 0, 0)
        ).getTime();
      }
      this.changeBlance(gAmount);

      if (typeAccount == 1) {
        uidAcc = uidLive;
      } else {
        uidAcc = uidDemo;
      }

      let obj = {
        email: email,
        uid: uidAcc,
        ref: getData.ref,
        UpId: getData.upid,
        typeAccount: 1, // 0: demo: 0 , 1: live
        betAmount: gAmount,
        type: type,
        mkt: getData.mkt,
        forceWin: this.$store.state.forceWin,
      };
      if (expired_at && this.getCoinTab.id === constants.COIN_TAB.BINOMO) {
        obj.expired_at = expired_at
      }

      this.sendMessage({ type: "bet_binomo", data: obj });

      let ss = this.$store.session;
      let timeGet = new Date().getTime();

      this.betOpen.s = ss;
      let itp = {
        ss: ss,
        time: timeGet,
        amt: gAmount,
        type: type,
        acc_type: 1,
        currencyType: "BTC/USD",
        classIcon: "iconBitcoin",
      };
      if (expired_at && this.getCoinTab.id === constants.COIN_TAB.BINOMO) {
        itp.expired_at = expired_at;
      }

      this.betOpenBinomo.l.bet[0].items.push(itp);

      localStorage.setItem("stateOpen", JSON.stringify(this.betOpen));

      window.dispatchEvent(
        new CustomEvent("stateOpen-localstorage-changed", {
          detail: {
            storage: localStorage.getItem("stateOpen"),
          },
        })
      );

      getData.Notify = this.betOpen.l.bet[0].items.length;

      // this.clearBAmount();
    },

    // deleteString() {
    //   let getAmount = this.betAmount.toString();
    //   let total = getAmount.slice(0, -1);
    //   let sl = total.split(".");
    //   let check = sl.length - 1;
    //   if (check == 1) {
    //     let g = this.replaceAll(total, ",", "");
    //     this.betAmount = this.formatPrice(g, sl[1].length);
    //     this.tinhloinhuan(g);
    //     return;
    //   }
    //   let g = this.getOnlyNumberInString(total, ",", "");
    //   this.betAmount = this.formatPrice(g, 0);
    //   this.tinhloinhuan(g);
    // },

    // writeBetAmountKey(v) {
    //   let getAmount = this.betAmount.toString() + v;
    //   let sl = getAmount.split(".");
    //   let check = sl.length - 1;
    //   if (v == ".") {
    //     this.betAmount = getAmount;
    //     return;
    //   }
    //   if (check > 1) return;
    //   if (check == 1) {
    //     let g = this.replaceAll(getAmount, ",", "");
    //     this.betAmount = this.formatPrice(g, sl[1].length);
    //     this.tinhloinhuan(g);
    //     return;
    //   }
    //   let a = this.getOnlyNumberInString(getAmount);
    //   this.betAmount = this.formatPrice(a, 0);
    //   this.tinhloinhuan(a);
    // },

    // congBetAmount() {
    //   let getAmount = this.betAmount.toString();
    //   let sl = getAmount.split(".");
    //   let check = sl.length - 1;
    //   if (check > 1) return;
    //   let tt = 0;
    //   if (check == 1) {
    //     tt = this.replaceAll(getAmount, ",", "");
    //     let kq = tt * 2;
    //     this.betAmount = this.formatPrice(kq, sl[1].length);
    //     this.tinhloinhuan(kq);
    //     return;
    //   }
    //   let a = this.getOnlyNumberInString(getAmount);
    //   tt = a * 2;
    //   this.tinhloinhuan(tt);
    //   this.betAmount = this.formatPrice(tt, 0);
    // },
    //
    // truBetAmount() {
    //   let getAmount = this.betAmount.toString();
    //   let sl = getAmount.split(".");
    //   let check = sl.length - 1;
    //   if (check > 1) return;
    //   let tt = 0;
    //   if (check == 1) {
    //     tt = this.replaceAll(getAmount, ",", "");
    //     let kq = tt / 2;
    //     this.betAmount = this.formatPrice(kq, sl[1].length);
    //     this.tinhloinhuan(kq);
    //     return;
    //   }
    //   let a = this.getOnlyNumberInString(getAmount);
    //   tt = a / 2;
    //   this.tinhloinhuan(tt);
    //   this.betAmount = this.formatPrice(tt, 0);
    // },
    //
    // nhapBetAmount(e) {
    //   let g = e.target.value;
    //   let check = g.split(".").length - 1;
    //   if (check > 1) return;
    //
    //   if (check == 1) {
    //     g = this.replaceAll(g, ",", "");
    //     this.tinhloinhuan(g);
    //     return;
    //   }
    //   g = this.getOnlyNumberInString(g);
    //   this.betAmount = this.formatPrice(g, 0);
    //   this.tinhloinhuan(g);
    // },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    tinhloinhuan(m) {
      let lb = Number(m);
      lb = (lb * 90) / 100;
      // tính lợi nhuận 95%
      this.loiNhuan = this.formatPrice(lb);
    },

    getOnlyNumberInString(t) {
      let e = t.match(/\d+/g);

      return e ? Number(e.join("")) : 0;
    },

    clearBAmount() {
      this.tinhloinhuan(this.betAmount);
      this.betAmount = this.betAmount;
    },

    // clickCT(amount) {
    //   let getAmount = this.betAmount.toString();
    //   getAmount = this.betAmount.toString();
    //
    //   if (amount == 0) {
    //     getAmount = getData.isAccount
    //       ? getData.blLive.toString()
    //       : getData.blDemo.toString();
    //   }
    //
    //   let check = getAmount.split(".").length - 1;
    //   if (check > 1) return;
    //
    //   if (check == 1) {
    //     getAmount = this.replaceAll(getAmount, ",", "");
    //     let tt = getAmount + amount;
    //     this.tinhloinhuan(tt);
    //     // this.betAmount = this.formatPrice(tt, 2);
    //     this.betAmount = tt
    //     return;
    //   }
    //   let aB = this.getOnlyNumberInString(getAmount);
    //   let tt = aB + amount;
    //   this.betAmount = this.formatPrice(tt, 0);
    //   this.tinhloinhuan(tt);
    // },

    editUser() {
      //this.sidebarData = data
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },

    updateBarChart(_d) {
      const { update, data } = _d;
      let chartInstance = this.$refs.chartStock.chart;
      let lastCandle =
        chartInstance.series[1].points[
          chartInstance.series[1].points.length - 1
        ];

      const o = {
        x: data.x,
        y: data.vol,
        color: data.color,
      };
      if (update == false) {
        chartInstance.series[1].addPoint(o, true, true);
      }
      if (update == true) {
        //update old candle
        lastCandle.update(o, true);
      }
    },

    updateCandleData(boPrice) {
      let isUpdate;
      let chartInstance = this.$refs.chartStock.chart;
      const seriesData = chartInstance.series[0].points;
      var lastCandle = seriesData[seriesData.length - 1];

      let o = {
        x: this.roundedDateString(boPrice.date),
        open: boPrice.open.toFixed(2) * 1,
        high: boPrice.high.toFixed(2) * 1,
        low: boPrice.low.toFixed(2) * 1,
        close: boPrice.close.toFixed(2) * 1,
        vol: boPrice.volume.toFixed(2) * 1,
        color: null,
        finalClose: null,
        candleClose: boPrice.candleClose,
      };
      const threshold = this.currentTimeTickThreshold;
      const second = new Date(boPrice.date).getSeconds();

      for (let i = 0; i < threshold.length; i++) {
        if (Number(second) == Number(threshold[i]) - 1) {
          o.finalClose = boPrice.close.toFixed(2) * 1;
        }
      }
      if (!threshold.includes(second)) {
        o.open = lastCandle.open;
        o.x = this.roundedDateString(lastCandle.x);
        o.color = this.getColor(o.open, o.close);
        if (o.low > lastCandle.low) {
          o.low = lastCandle.low;
        }
        if (o.high > lastCandle.high) {
          o.high = lastCandle.high;
        }
        isUpdate = true;
      } else {
        o.open = lastCandle.close;
        o.color = this.getColor(o.open, o.close);
        listData.push(o);
        isUpdate = false;
      }
      return { update: isUpdate, data: o };
    },
    updateCandleStickChart(_d, candleClose, dataType) {
      let chartInstance = this.$refs.chartStock.chart;
      var lastCandle =
        chartInstance.series[0].points[
          chartInstance.series[0].points.length - 1
        ];

      try {
        const { update, data } = _d;
        if (update == true) {
          //update old data
          lastCandle.update(data, true);
        } else {
          //add new data
          chartInstance.series[0].addPoint(data, true, true);
          // listData.push(data);
          this.updateChartStickExtreme(chartInstance);
        }
        var counter = Number(candleClose);
        this.updateCandlePlotLine({
          chartInstance,
          data,
          candleClose,
          counter,
        });

        this.updateOrderStatus(dataType, counter);

        // eslint-disable-next-line no-empty
      } catch {}
    },
    updateCandlePlotLine({ chartInstance, data, counter }) {
      chartInstance.xAxis[0].options.plotLines[0].value = data.x;
      chartInstance.yAxis[0].options.plotLines[0].value = data.finalClose
        ? data.finalClose
        : data.close;
      this.boPriceClose = data.close;

      let f = chartInstance.yAxis[0].plotLinesAndBands[0];

      f.label &&
        f.label.attr({
          text:
            '<div class="plotlineChart flex flex-col"><span class="price">' +
            data.close +
            '</span><span class="time self-end">00:' +
            (counter > 9 ? counter : "0" + counter) +
            "</span></div>",
        });
    },
    updateOrderStatus(dataType, counter) {
      if (!this.currentSession) {
        this.isOrder = true;
        this.isBet = true;
      } else {
        if (dataType === "order") {
          this.isOrder = true;
          this.isBet = true;
          if(this.$i18n.locale =="vi"){
            getData.textTimeDown = "Hãy đặt lệnh"
          }else{
            getData.textTimeDown = "Place an order";
          }
        } else {
          this.isOrder = false;
          this.isBet = false;
          if(this.$i18n.locale =="vi"){
            getData.textTimeDown = "Chờ kết quả"
          }else{
            getData.textTimeDown = "Waiting for results";
          }
        }
      }
      getData.countDown = counter > 9 ? counter : "0" + counter;
    },
    updateChartStickExtreme() {
      const chartInstance = this.$refs.chartStock.chart;
      if (!chartInstance) {
        return;
      }
      let begin = 0;
      const { dataMax } = chartInstance.xAxis[0].getExtremes();
      if (deviceVersion !== "pc") {
        begin = this.setSizeStock(listData);
        chartInstance.xAxis[0].setExtremes(
          listData[begin + 40]["date"],
          dataMax,
          false
        );
        chartInstance.redraw();
      } else {
        let c = listData.length;
        chartInstance.xAxis[0].setExtremes(
          listData[c - 90]["date"],
          dataMax,
          false
        );
        chartInstance.redraw();
      }
    },
    getColor(openPrice, closePrice) {
      return openPrice < closePrice ? UP_COLOR : DOWN_COLOR;
    },

    onReceiveSocketData(_boPrice) {
      const boPrice = _boPrice;
      boPrice.date = this.roundedDateString(_boPrice.date);
      this.updateLineData(_boPrice);
      const data = this.updateCandleData(_boPrice);
      this.updateCandleStickChart(data, boPrice.candleClose, boPrice.type);
      this.updateBarChart(data);
      const currentSc = new Date(_boPrice.date).getSeconds();
      if (currentSc == 1 || currentSc == 31) {
        //this.onChartTimeTickChange(this.timeTick);
      }
    },
    updateLineData(_boPrice) {
      const data = {
        x: this.roundedDateString(_boPrice.date),
        y: _boPrice.close,
        marker: { enabled: true, lineWidth: 5, radius: 5 },
      };
      this.updateData = data;
      const currentSecond = new Date(data.x).getSeconds();
      if (currentSecond % 5 == 0) {
        //update every x5 seconds
        this.lineData[this.lineData.length - 1].marker = null;
        this.lineData.push(data);
      } else {
        this.lineData[this.lineData.length - 1].y = _boPrice.close;
      }
    },
    StaOscillators(e) {
      try {
        let chart = this.$refs.chartOs.chart;

        let left = chart.series[0].points[0],
          leftVal;
        //Oscillators
        this.NumOscBUY = e.b;
        this.NumOscSELL = e.s;
        this.NumOscNeutral = e.m;

        if ((e.m > e.s && e.m > e.b) || (e.m === e.s && e.m === e.b)) {
          this.textTitleOs = "NEUTRAL";
          left.update(0, true);
          chart.redraw();
        }
        if (e.s > e.b) {
          leftVal = -35;
          this.textTitleOs = "SELL";
          if (e.s >= 5) (leftVal = -70), (this.textTitleOs = "STRONG SELL");
          left.update(leftVal, true);
          chart.redraw();
        } else if (e.s < e.b) {
          leftVal = 35;
          this.textTitleOs = "BUY";
          if (e.b >= 5) (leftVal = 70), (this.textTitleOs = "STRONG BUY");
          left.update(leftVal, true);
          chart.redraw();
        }
        // eslint-disable-next-line no-empty
      } catch {}
    },

    StaSummary(e) {
      try {
        let chart = this.$refs.chartSu.chart;

        let left = chart.series[0].points[0],
          leftVal;

        //Summary
        this.NumSumBUY = e.b;
        this.NumSumSELL = e.s;
        this.NumSumNeutral = e.m;

        if ((e.m > e.s && e.m > e.b) || (e.m === e.s && e.m === e.b)) {
          this.textTitleSu = "NEUTRAL";
          left.update(0, true);
          chart.redraw();
          return;
        }
        if (e.s > e.b) {
          leftVal = -35;
          this.textTitleSu = "SELL";
          if (e.s >= 5) (leftVal = -70), (this.textTitleSu = "STRONG SELL");
          left.update(leftVal, true);
          chart.redraw();
        } else if (e.s < e.b) {
          leftVal = 35;
          this.textTitleSu = "BUY";
          if (e.b >= 5) (leftVal = 70), (this.textTitleSu = "STRONG BUY");
          left.update(leftVal, true);
          chart.redraw();
        }
        // eslint-disable-next-line no-empty
      } catch {}
    },

    StaMovingAverages(e) {
      try {
        let chart = this.$refs.chartMa.chart;
        let left = chart.series[0].points[0],
          leftVal;
        //Moving

        this.NumMovBUY = e.b;
        this.NumMovSELL = e.s;
        this.NumMovNeutral = e.m;

        if ((e.m > e.s && e.m > e.b) || (e.m === e.s && e.m === e.b)) {
          this.textTitleMa = "NEUTRAL";
          left.update(0, true);
          chart.redraw();
          return;
        }
        if (e.s > e.b) {
          leftVal = -35;
          this.textTitleMa = "SELL";
          if (e.s >= 5) (leftVal = -70), (this.textTitleMa = "STRONG SELL");
          left.update(leftVal, true);
          chart.redraw();
        } else if (e.s < e.b) {
          leftVal = 35;
          this.textTitleMa = "BUY";
          if (e.b >= 5) (leftVal = 70), (this.textTitleMa = "STRONG BUY");
          left.update(leftVal, true);
          chart.redraw();
        }
        // eslint-disable-next-line no-empty
      } catch {}
    },

    setSizeStock(data) {
      let chartWidth = 0;
      chartWidth = document.getElementById("chartBoxId").offsetWidth;
      let numBar = Math.floor((chartWidth - 90) / 19.44); //90 17.44 13.44
      if (numBar < data.length) {
        return data.length - numBar - 40;
      }
    },
    roundedDateString(num) {
      return Math.floor(num / 1000) * 1000;
    },
    getDataDefaultGet(get) {
      let data = get;
      (ohlcStock = []), (volumeStock = []);

      var begin = 0;

      if (deviceVersion !== "pc") {
        begin = this.setSizeStock(data);
      } else {
        let getWidth = parseInt($("body").width());
        if (getWidth >= 1260 && getWidth <= 1500) {
          begin = 65;
        }
        if (getWidth >= 1500 && getWidth <= 1600) {
          begin = 45;
        }
        if (getWidth >= 820 && getWidth <= 1260) {
          begin = 75;
        }
        if (getWidth > 1500) {
          begin = 35;
        }
      }
      const _lineData = [];
      for (var i = begin; i < data.length; i++) {
        var _o = {
          x: this.roundedDateString(data[i].date), // the date
          open: data[i].open, // open
          high: data[i].high, // high
          low: data[i].low, // low
          close: data[i].close, // close
          vol: data[i].volume, // volume
        };
        let _line = {
          x: this.roundedDateString(data[i].date),
          y: data[i].close,
        };
        _lineData.push(_line);
        ohlcStock.push(_o);

        volumeStock.push({
          x: data[i].date, // the date
          y: data[i].volume, // the volume
          color: data[i].open < data[i].close ? UP_COLOR : DOWN_COLOR,
        });
      }
      this.lineData = _lineData;
      //IMPORTANT: function to convert data
      stockChart.series[0].data = ohlcStock;
      stockChart.series[1].data = volumeStock;
      this.chartOptionsStock = stockChart;
    },

    setChartHeight() {
      if (window.innerWidth > 768) {
        deviceVersion = "pc";
      } else {
        deviceVersion = "mobile";
      }

      let setS = setInterval(() => {
        const chartBox = document.getElementById("chartBoxId");
        let w = null;
        w = chartBox.offsetWidth;
        let h = null;
        h = chartBox.offsetHeight;
        if (!this.$refs.chartStock) {
          return;
        }
        let c = this.$refs.chartStock.chart;
        if (!c) {
          return;
        }
        if (!!w && !!h) {
          let cH = c.chartHeight;
          if (c) {
            this.updateChartStickExtreme();
          }
          if (cH !== h) {
            const _chartBox = document.getElementById("chartBoxId");
            let chartInstance = this.$refs.chartStock.chart;
            let _w = _chartBox.offsetWidth;
            let _h = _chartBox.offsetHeight;
            chartInstance.setSize(_w, _h, true);
          } else {
            clearInterval(setS);
          }
        }
      }, 600);
    },
    handleSocket(gamePlay = null, getUserInfo = true) {
      this.connection = new WebSocket(this.baseUrlSocket);
      this.connection.onopen = function () {
        this.onWindowLoad(gamePlay);
        if(getUserInfo) {
          this.getUserInfo();
        }
      }.bind(this);

      this.connection.onmessage = function (event) {
        let data = JSON.parse(event.data);
        let dl = data.data;

        if (data.type === "getListDauTien") {
          let chartInstance = this.$refs.chartStock.chart;
          if (dl) {
            listData = dl;
            this.getDataDefaultGet(dl);
            this.updateChartStickExtreme(chartInstance);
            this.updateChartStickExtreme(chartInstance);
            this.updateConfigChart();
          }
        }
        if (data.type === "getidPlayer") {
          this.thisIDPlayer = data.data;
        }
        if (data.type === "getSession") {
          this.getCurrentTime()
          // this.getCurrentSession = data.data;
        }
        if (data.type === "allData") {
          this.onReceiveSocketData(dl);
          if(dl.candleClose === "00" && dl.type === "watting"){
            this.getCurrentTime()
          }
        }
        if (data.type === "transVolum") {
          if (dl.nbuy) {
            this.CSBUY = dl.ptbuy;
            this.CSSELL = dl.ptsell;
          }
        }
        if (data.type === "checkBet" || data.type === "checkBet_binomo") {
          this.isBet = true;

          return this.$vs.notify({
            text: "Order placed successfully",
            color: "success",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-check",
          });
        }
        if (data.type === "kq" || data.type === "kq_binomo") {
          // if (this.$store.state.forceWin || dl.kq == "win") {
            if (dl.kq == "win") {

              let mn = dl.money;
            this.playAudio("sound_win");
            if (data.data.typeAccount === "1") {
              getData.blLive = getData.blLive + mn;
            } else {
              getData.blDemo = getData.blDemo + mn;
            }
            this.moneyWin = this.formatPrice(mn, 2);
            this.isWinPop = true;
            setTimeout(() => {
              this.isWinPop = false;
            }, 3000);
          } else {
            this.playAudio("lose");
          }
          // xóa notice = 0
          getData.Notify = 0;
          this.betOpen.l.bet[0].items = [];
          localStorage.removeItem("stateOpen");
          window.dispatchEvent(
            new CustomEvent("stateOpen-localstorage-changed", {
              detail: {
                storage: undefined,
              },
            })
          );
        }
        if (data.type === "mess" || data.type === "mess_binomo") {
          if (dl.type == "bet" || dl.type == "bet_binomo") {
            return this.$vs.notify({
              text: dl.mess,
              color: dl.style,
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }

          if (dl.type === "disAccount") {
            // đăng xuất tài khoản
            setTimeout(() => {
              localStorage.removeItem("tokenUser");
              localStorage.removeItem("INFO");
              getData.Notify = 0;
              localStorage.removeItem("stateOpen");
              window.location.href = window.location.origin + "/login";
            }, 3000);
            return this.$vs.notify({
              text: dl.mess,
              color: dl.style,
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }

          if (dl.type === "reloadAccount") {
            location.reload();
          }
        }
        if (data.type === "static") {
          this.getCurrentSession = data.data.ss;
          this.onUpdateSummarySection(data, dl);
        }
      }.bind(this);

      this.connection.onclose = () => {
        // xóa notice = 0
        getData.Notify = 0;
        this.betOpen.l.bet[0].items = [];
        localStorage.removeItem("stateOpen");
      };
    },
    onUpdateSummarySection(data) {
      const dl = data.data;
      if (data.type === "static") {
        let indicato = data.load;

        this.StaOscillators(indicato.Oscillators);
        this.StaSummary(indicato.Summary);
        this.StaMovingAverages(indicato.Moving);
        let sta = dl.static;

        let stl = sta.length;
        let istart = 0;
        this.totalBuyStatic = this.totalSellStatic = 0;
        if (isMobile && stl > 60) {
          let sl = 0;
          if (stl > 60 && stl <= 80) {
            sl = 20;
          } else if (stl > 80) {
            sl = 40;
          }
          for (let x = 0; x < sl; x++) {
            sta.shift();
          }
          stl = sta.length;
        }
        let list = $(".historyBox");
        $(".historyBox .item").removeClass("bg-green bg-red");
        for (let i = istart; i < stl; i++) {
          let item = i;
          if (i < 20) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
          if (i > 19 && i < 40) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
          if (i > 39 && i < 60) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
          if (i > 59 && i < 80) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
          if (i > 79 && i < 100) {
            if (sta[i] == "buy") {
              list.find(".item:eq(" + item + ")").addClass("bg-green");
              this.totalBuyStatic++;
            } else if (sta[i] == "sell") {
              list.find(".item:eq(" + item + ")").addClass("bg-red");
              this.totalSellStatic++;
            }
          }
        }
      }
    },
    updateWaterDrop() {},
    onWindowLoad(gamePlay = null) {
      let uidLive = getData.uidLive;
      let uidDemo = getData.uidDemo;
      let uidAcc = 0;
      let message;
      let infoUserBinomo;

      let acc = localStorage.getItem("BO_BALANCE_TYPE");
      if (acc == "LIVE") {
        getData.isAccount = 1;
      } else {
        getData.isAccount = 0;
      }

      getData.isAccount ? (uidAcc = uidLive) : (uidAcc = uidDemo);

      if (gamePlay == null)
      {
        message = {
          type: "accountDetail",
          data: { uid: uidAcc, email: getData.email },
        }
      } else {
        message = {
          type: "accountDetail",
          data: { uid: uidAcc, email: getData.email, gamePlay: gamePlay },
        }
      }
      this.sendMessage(message);

      if (gamePlay == "binomo") {
        this.sendInfoUserBinomo(uidAcc, gamePlay);
      }

      let notify = JSON.parse(localStorage.getItem("stateOpen"));
      if (notify) {
        getData.Notify = notify.l.bet[0].items.length;
      }
    },

    sendInfoUserBinomo(uidAcc, gamePlay) {
      let infoUserBinomo;

      infoUserBinomo = {
        type: "infoUserBinomo",
        data: { uid: uidAcc, email: getData.email, gamePlay: gamePlay },
      }

      this.sendMessage(infoUserBinomo);
    },

    playAudio(soundName) {
      let checkSound = localStorage.getItem("SOUND");
      if (checkSound === "false") return;
      let audio = new Audio(require(`@/assets/sounds/${soundName}.mp3`)); // path to file
      audio.addEventListener("canplaythrough", () => {
        /* the audio is now playable; play it if permissions allow */
        audio.play(); // the audio now can be played
      });
    },

    getUserInfo() {
      AuthenticationService.getInfoUser().then((res) => {
        if (res.data.success == 1) {
          let gData = res.data.data;

          (getData.uid = gData.id),
            (getData.email = gData.email),
            (getData.profile_image = gData.profile_image),
            (getData.displayName = gData.nick_name),
            (getData.uidLive = gData.order[1].u_id),
            // (getData.uidDemo = gData.order[0].u_id),
            (getData.vip = gData.vip),
            (getData.vip_lv = gData.level_vip),
            (getData.pen_commiss = gData.pending_commission),
            (getData.ref = gData.ref),
            (getData.c2fa = gData.fa2),
            (getData.id_front = gData.id_front),
            (getData.id_back = gData.id_back),
            (getData.first_name = gData.first_name),
            (getData.last_name = gData.last_name),
            (getData.verify = gData.verify),
            (getData.num_secu = gData.num_secury),
            (getData.country = gData.c),
            (getData.blLive = gData.order[1].balance);
          // getData.blDemo = gData.order[0].balance;
          (getData.balance = gData.balance), (getData.mkt = gData.mkt);

          localStorage.setItem("INFO", JSON.stringify(gData));
        } else {
          window.location.href = window.location.origin + "/login";
        }
      });
    },
    chooseTimeBet(time) {
      this.chosenTime = time.valueTime;
      this.currentSession = time.currentSession;
      if (!this.currentSession) {
        this.isOrder = true;
        this.isBet = true;
      }
      if (this.currentGamePlay === "binomo")
      {
        let uidLive = getData.uidLive;
        let uidDemo = getData.uidDemo;
        let uidAcc = 0;

        let acc = localStorage.getItem("BO_BALANCE_TYPE");

        if (acc == "LIVE") {
          getData.isAccount = 1;
        } else {
          getData.isAccount = 0;
        }

        getData.isAccount ? (uidAcc = uidLive) : (uidAcc = uidDemo);

        this.sendInfoUserBinomo(uidAcc, "binomo")
      }
    },
    getStaticData() {
      const data = { type: "getStatic" };
      this.connection.send(JSON.stringify(data));
    },
    getCurrentTime(){
      const now = new Date();
      const hours = ("0" + now.getHours()).slice(-2);
      const minutes = ("0" + now.getMinutes()).slice(-2);
      const day = ("0" + now.getDate()).slice(-2);
      const month = ("0" + (now.getMonth() + 1)).slice(-2);
      const year = now.getFullYear();
      return this.getTimeCurrentSession =  `${year}${month}${day}${hours}${minutes}`
    },
  },
  created() {
    const locale = localStorage.getItem('locale');
    if (locale) {
      this.$i18n.locale = locale;
    }
    const h = new Date().getHours();
    const m = new Date().getMinutes() + 1;
    this.chosenTime = `${h}:${m}`;
    let acc = localStorage.getItem("BO_BALANCE_TYPE");
    if (acc == "LIVE") {
      getData.isAccount = 1;
    } else {
      getData.isAccount = 0;
    }
    document.addEventListener("visibilitychange", this.getStaticData);
    // lấy tổng số dư của tài khoản
    this.balanceForuser = getData.isAccount ? getData.blLive : getData.blDemo;
    if (!connected) {
      connected = true;
      this.handleSocket();
    } else if (typeof this.connection === "undefined") {
      this.handleSocket();
    }
  },
  mounted() {
    window.addEventListener("resize", this.setChartHeight);
    const vm = this;
    this.$nextTick(() => {
      vm.setChartHeight();
    });
    this.$store.commit("SET_IS_RENDER_TRADE_INDEX", true);
  },
  destroyed() {
    document.removeEventListener("visibilitychange", this.getStaticData);
    if (timer) {
      clearInterval(timer);
    }
    this.$store.commit("SET_IS_RENDER_TRADE_INDEX", false);
    this.connection.close();
    window.removeEventListener("resize", this.setChartHeight);
  },
};
</script>

<style scoped lang="scss">
#tradePage {
  background: #2c2c2c;
  box-shadow: 0px 3px 10px 3px #ffffff59 inset;
  border-radius: 10px;
}
.btn_dat_cuoc_m {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 47px;
  font-weight: bold;
  width: calc(100% / 3 - 10px);
  font-size: 0.7rem;
  .second {
    color: #fff !important;
  }
}

.btn_dat_cuoc_m.tang {
  margin-right: 10px;
}

.btn_dat_cuoc_m.giam {
  margin-left: 10px;
}

.btn_dat_cuoc {
  border-radius: 10px !important;
  color: #fff;
  height: 60px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: none !important;
}

.btn_dat_cuoc_m.time {
  background: #1d233b;
  color: #fff !important;
  flex-direction: column;
}

.btn_dat_cuoc_m.tang,
.btn_dat_cuoc.tang {
  background: #31baa0;
}

.btn_dat_cuoc_m.giam,
.btn_dat_cuoc.giam {
  background: #fc5f5f;
}

.btn_dat_cuoc_m.disabled,
.btn_dat_cuoc.disabled {
  background-color: #384b6b !important;
  cursor: no-drop;
}

.operator_mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d233b;
  cursor: pointer;
  border-radius: 2px;
}

@media screen and (min-width: 986px) {
  .wrapper {
    display: flex;

    #left-content {
      flex: 0 0 calc(100% - 210px);
      max-width: calc(100% - 210px);
      padding: 0 2px;
    }

    #right-content {
      flex: 0 0 210px;
      max-width: 210px;
    }
    #right-content-binomo {
      flex: 0 0 210px;
      max-width: 210px;
      background: rgb(38, 46, 67) !important;
    }
  }
}

.trans {
  transition: 0.4s all;
}
@media screen and (max-width: 768px) {
  .overviewInfo {
    display: none !important;
  }
}

.overviewInfo {
  font-weight: 700;
  font-size: 16px;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
}

.overviewInfo .badgeItem {
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
}

@media screen and (max-width: 960px) {
  .titleChartCandle {
    top: 24px !important;
    left: 0 !important;
  }
}

.titleChartCandle {
  position: absolute;
  top: 0;
  left: 10px;
  padding: 7px 10px;
  border-radius: 10px !important;
  background-color: #21355f !important;
}

.titleChartCandle .iconBTC {
  display: inline-flex;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAABHNCSVQICAgIfAhkiAAABQtJREFUWIXVmV1sFFUUx393Zvaj7QJFILbQUgopKBIBGykRaEsiiobESPRBEoxRjIkJUR81ELaxj2pieFLUB40kfgQjiYkxwVYsAYmEWhSBSGlLwfLRb2j38x4fZna7UyrdnTbpcl9+OzNn5/zv2XPvOTOrcEZ8f0l9EvYpUWuUoYpFBKUUM0mEAVHSakKDb3dPM4ACGN1fEjaU2oc4Z/KQGmko2N0TVqP7S+oVqgkRUIp8pig2G4iERQSAfCciYUtrWa0MeyKo/KRSoAVEZLUBFM905CajTkVYUWwI7pP5TBHBEJn5CGZPsEAQUYDG3kPymTgRdtJi2hiYTdGuNoJPfwyBOZPYq+wpYOewOLkyTbTK61ChUqzKLejIIGbpOgpfOklwy4cT2OusKQiGiEwpoqqoBGvFs6jQwvR5s3wDAInLvwKCubgWo7gSY94DU/vlRLDE/uS5alpLn6Tg8fftGw5fJXH1BNai9Y7gY7aTxXXpCaSLgIchgJUSS6rhUCqnTd2YXZa+oZq1EN+K7enjYN27BNa9gQoUAxDvarF9eY2OCKrvvbnep5wxgjVvUbBx711t9MAlom2fEzl9ABIjnvzYOTwN+2Si+/g4ce3EO5vQw91jzoorKajdx+wdP6IKF3jyY4yVPz0lmotqXIIjZ79i+Jvt9H+0iqGDT5C8cSZ9zVywilnPHQJl5uTHFpyegZoSfeWbXILjXS3p6/ErJxk4+BQy2psh+iF8Vdty80MqJQDRegpU+MoeG1ObjBK/fNxtFx0m2d/umpRRdD8izvUsiAiGXZrFWfXeaJasBSs4prf/IubcSpedVVaDVVrtEpzouwjkkMMIlr2TCVo7facHFpRvdAkx569k7q5TJHsvoEeuo8yALVYZY2Kv/0ns0k9j/W4WfgAswW5+Uk2yF1pOZRs/zHnLMectH3dWiF/5jcHDL+fsx650U46wwp8pWCe4+dl6jNBCCle/SGDZVpQ/lJHfMUZOf0pi8HLO/tIRdkqdt92hdK1LUPzf30ncPAe954l1/AxWgFmb9lJU86YT9gBzth0AZTB65stxFXZyGqnSnMtqzaSvzJ0O0c6j7t0hHmGoaQ+R89+77EIb3s55NyKz+VFOxLJhoGoboerXiHafoHDl8y4hsc6WCb8X6z5BcMUzY/ldXJG1vzTtXcJ+06JFZ83Qo6/jX1yLf8nmOxaaliRYQXR8NG1vhkooXPuKyy7R949jn71fO4cz2r2s9kMzgI4OIfERlK/wDsHzd/wAySixa39AIgqGD3/pI2D63anT0eSpl1BdjUFRXlo9w0+gYhMFy7YSqn4VzMAd4v93JKP0HFhHou9CTn4FnEXnHOTEZIxI+xEGmsPp6A0ceYfbbV/cXayOc+PbF0j0XiD142ZL16LzOoJL6gCFxG4xdPwD/KXVFD28E4Cbh3Zi3bcUZfgAIX79LyIdv6Aj/envS460UvU+tQpzZbCiHoBI51H7eEktAPFrbdw++7Xn+05IO8KCEoVGo8idt859hySjRHtaQSBQYQse7WgGAbuXmx6San5QTuUid0a7jhHtaiG1MoZPfUK8r52R84c93e+uFFDtDZZ4fCKcAXLvvVvLeKbLfzpvfvTgZMYzH1mHWg8aIrSCOOImpuQLhVZD3UP/cSiRsFHVSLNoaRCdenrOUyZ1Q1UjzQpn/L2HehRhJaxBMWem/1RUSiFaBkXRihB+sJFmgP8A0ZjYaQV3l3UAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.titleChartCandle .textPrice {
  font-size: 12px;
  color: #fff;
  font-weight: 700;
}

.popupCongratulation {
  display: none;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
}

.popupCongratulation .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
}

.popupCongratulation .popupCongratulationContent {
  display: block;
  overflow: unset;
  border-radius: 8px;
  width: 450px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.winLive .wrapNotify {
  border-radius: unset !important;
  background-color: unset !important;
  height: 210px !important;
  width: 368px;
  background-image: url("~@/assets/images/sky/notify.png");
  background-repeat: no-repeat;
  background-size: 100% 215px;
}

.wrapNotify.congratulation {
  background-color: red;
}

.winLive .wrapNotify .iconWin {
  position: absolute;
  left: 49%;
  bottom: 89%;
  -webkit-transform: translate(-50%, 30%);
  -ms-transform: translate(-50%, 30%);
  -moz-transform: translate(-50%, 30%);
  transform: translate(-50%, 30%);
  width: 257px;
}

.winLive .wrapNotify .badgeDemo {
  position: absolute;
  top: 34px;
  right: 57px;
  color: #fff;
  font-weight: bold;
  background: #2177ff;
  border-radius: 4px;
  padding: 0 8px;
}

.winLive .wrapNotify .titleWin {
  font-size: 1.95rem;
  font-weight: bold;
  margin: 15px 0;
  color: #fff;
}

.winLive .wrapNotify .message {
  color: #23c15f;
}

.winLive .wrapNotify .iconClose {
  color: #fff;
  position: absolute;
  right: -30px;
  top: 15px;
}

.winDemo .wrapNotify {
  border-radius: 5px;
  background-color: #12013e;
  height: 340px !important;
  width: 400px;
}

.winDemo .wrapNotify .iconWin {
  position: absolute;
  top: -25px;
  left: 50%;
  -webkit-transform: translate(-50%, 30%);
  -ms-transform: translate(-50%, 30%);
  -moz-transform: translate(-50%, 30%);
  transform: translate(-50%, 30%);
  width: 120px;
  height: 120px;
}

.boxContent .message_money {
  color: #00c48c;
}

.winDemo .wrapNotify .boxContent {
  padding: 0;
}

.boxContent {
  margin-top: 4.5rem !important;
}

.winDemo .wrapNotify .boxContent .contentPopup {
  margin-top: 140px;
}

.winDemo .wrapNotify .boxContent .titleWin {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
  line-height: 1.5;
}

.winDemo .wrapNotify .boxContent .message {
  color: #1ebf75;
  font-size: 2.2rem !important;
  line-height: 1;
}

.winDemo .wrapNotify .boxContent .btnDeposit {
  max-width: 340px;
  width: 100%;
  padding: 10px 0;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  background-color: #1ebf75;
}

.winDemo .wrapNotify .iconClose {
  color: #fff;
  position: absolute;
  right: -30px;
  top: 0;
}

.analysis-wrapper {
  display: flex;
  padding-left: 47px;
  @media only screen and (max-width: 490px) {
    padding: 15px;
    gap: 15px;
  }
}
.analysis-wrapper {
  /deep/.con-ul-tabs {
    margin-left: 48px;
    span {
      font-size: 20px;
      font-weight: 700;
    }
    .line-vs-tabs {
      background: #5fe349 !important;
    }
    @media only screen and (max-width: 490px) {
      margin-left: 0;
    }
  }
  /deep/.con-slot-tabs {
    margin-left: 48px;
    @media only screen and (max-width: 490px) {
      margin-left: 0;
    }
  }
}
.analysis-wrapper .wrap-gauge-meter.active,
.analysis-wrapper #historyBox.active {
  opacity: 1;
  z-index: 1;
}

.wrap-gauge-meter {
  //position: absolute;
  //width: 100%;
  //height: 100%;
  //left: 0;
  //top: 0;
  //padding-top: 20px;
  @media only screen and (max-width: 490px) {
    height: 90px;
  }
}
@media only screen and (max-width: 490px) {
  .wrap-gauge-meter,
  .historyBox {
    height: 90px;
  }
}
.wrap-gauge-meter-inner {
  height: 100%;
}

.historyBox {
  margin-top: 30px;
}

.historyBox .item {
  width: 1.8rem;
  height: 1.8rem;
  margin: 2px !important;
}
@media screen and (max-width: 1600px) {
  .historyBox{
    transform: translateX(-10%);
  }
  .historyBox .item {
    width: 1.2rem;
    height: 1.2rem;
    margin: 2px !important;
  }
}
.sidebarMobile {
  display: none;
}

.list1,
.list2,
.list3,
.list4,
.list5 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row dense;
  grid-gap: 0rem;
}

.gridcs-1 {
  grid-column-start: 1;
}
.gridcs-2 {
  grid-column-start: 2;
}
.gridcs-3 {
  grid-column-start: 3;
}
.gridcs-4 {
  grid-column-start: 4;
}
.gridcs-5 {
  grid-column-start: 5;
}

@media (max-width: 1024.98px) {
  .history-column {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .sidebarPC {
    display: none;
  }
  .sidebarMobile {
    display: block;
    position: absolute;
    top: 60px;
    left: 0;
    width: 50px;
  }
  .sidebarMobile .slidercontent {
    height: 100%;
    position: relative;
    width: 50px;
  }
  .sidebarMobile .slidercontent .backgroundOverlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50px;
  }
  .sidebarMobile .slidercontent span {
    width: 50px;
    line-height: 1;
  }
  .zIndex99 {
    z-index: 99;
  }
  .sidebarMobile .slidercontent .progress {
    -webkit-transform: translateX(-48%) rotate(270deg);
    transform: translateX(-48%) rotate(270deg);
    height: 0.4rem !important;
    overflow: unset !important;
  }
}
@media screen and (max-width: 1600px) {
  .wrap-gauge-meter-inner {
    height: auto;
    overflow: initial;
  }
}
@media screen and (min-width: 1023px) and (max-width: 1600px) {
  .wrap-gauge-meter-inner {
    transform: translateX(-10%);
  }
}

@media screen and (max-width: 1023px) and (min-width: 991px) {
  .wrap-gauge-meter-inner {
    padding-bottom: 65px;
  }
}
@media screen and (max-width: 1023px) and (min-width: 991px) and (orientation: landscape) {
  .wrap-gauge-meter-inner {
    padding-bottom: 65px !important;
  }
}
@media screen and (max-width: 1023px) and (orientation: landscape) {
  .wrap-gauge-meter {
    padding-top: 36px;
  }
}
@media screen and (max-width: 767px) {
  .wrap-gauge-meter {
    padding-top: 0;
  }

  .c-desktop .profitValue {
    color: #eec40d !important;
    font-weight: 700 !important;
    font-size: 1.875rem !important;
  }
}
.gauge-meter {
  width: 900px;
  height: 135px;
  position: relative;
  margin: 0 auto;
  top: 15px;
}
@media screen and (max-width: 1500px) {
  .gauge-meter {
    width: 700px;
  }
}
@media screen and (max-width: 1600px) {
  .gauge-meter {
    width: 500px;
    height: 64px;
    top: auto;
    transform: none;
    margin-top: 20px;
  }
}
@media screen and (max-width: 1200px) {
  .gauge-meter {
    margin-top: 15px;
  }
}
@media screen and (max-width: 1024px) {
  .gauge-meter {
    margin-top: 10px;
  }
}
@media screen and (max-width: 1000px) and (orientation: landscape) {
  .gauge-meter {
    margin-top: 5px;
    width: 350px;
  }
}
@media screen and (max-width: 767px) {
  .gauge-meter {
    width: 350px;
    margin-top: 15px;
  }
  .boxContent {
    margin-top: 3.2rem !important;
  }
}
@media screen and (max-width: 575px) {
  .gauge-meter {
    margin-top: 35px;
  }
}
@media screen and (max-width: 420px) {
  .gauge-meter {
    margin-top: 10px;
    width: 320px;
  }
}

@media screen and (max-width: 400px) {
}

.gauge-meter.is-show-transaction {
  width: 90%;
}
.gauge-meter-sub {
  width: 176px;
  height: 100%;
  position: absolute;
  bottom: 0;
}
@media screen and (max-width: 1600px) {
  .gauge-meter-sub {
    width: 90px;
  }
}
.gauge-meter--os {
  left: 0;
  width: 176px;
}
@media screen and (max-width: 1600px) {
  .gauge-meter--os {
    width: 90px;
  }
}
.gauge-meter--su {
  left: 50%;
  transform: translateX(-50%);
}
.gauge-meter--ma {
  width: 176px;
  left: auto;
  right: 0;
}
@media screen and (max-width: 1600px) {
  .gauge-meter--ma {
    width: 90px;
  }
}
.gauge-meter-title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  z-index: 4;
  margin-bottom: 0;
  white-space: nowrap;
  display: flex;
  position: relative;
  color: #fff;
  cursor: pointer;
}
.gauge-meter-title:hover {
  text-decoration: underline;
}
.gauge-meter-title-icon {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -20px;
}
.gauge-meter-title-icon svg {
  width: 100%;
  height: auto;
}
@media screen and (max-width: 1600px) {
  .gauge-meter-title-icon {
    width: 12px;
    height: 12px;
    right: -14px;
  }
}
@media screen and (max-width: 1600px) {
  .gauge-meter-title {
    font-size: 10px;
  }
}
.gauge-meter-sub-title {
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  margin-bottom: 0;
  white-space: nowrap;
}

@media screen and (max-width: 1600px) {
  .gauge-meter-sub-title {
    font-size: 10px;
    bottom: -12px;
  }
}
.gauge-meter-border {
  width: 100%;
  height: 88px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.gauge-meter-border:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 3;
  background-size: cover;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMjE1NTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgODYgNDMiPgogIDxnIGlkPSJQYXRoXzM1MzYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE4LjI1OSkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzUzNzMiIGRhdGEtbmFtZT0iUGF0aCAzNTM3MyIgZD0iTTk0My4yNjIsMTE4Ni40MmEuODM0LjgzNCwwLDAsMS0uODY4LS44MjQsNDAuNTA5LDQwLjUwOSwwLDAsMSw3LjYzNi0yMy41Ni44NjguODY4LDAsMSwxLDEuMzg4LDEuMDQyLDM5LjEzNywzOS4xMzcsMCwwLDAtNy4yODksMjIuNDc1Ljg0NC44NDQsMCwwLDEtLjg2OC44NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQyLjM5MSAtMTE2MS42NzkpIiBmaWxsPSIjZWY1NDUwIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Ni43ODkgMTguMjE1KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTM3NCIgZGF0YS1uYW1lPSJQYXRoIDM1Mzc0IiBkPSJNMTEyOC42MTksMTE4Ni4zNjNoMGEuODguODgsMCwwLDEtLjg2OC0uOTExLDM5LjUyNSwzOS41MjUsMCwwLDAtNy4yODktMjIuNDc1Ljg2OC44NjgsMCwxLDEsMS4zODgtMS4wNDEsNDAuNTA5LDQwLjUwOSwwLDAsMSw3LjYzNiwyMy41NkEuODY5Ljg2OSwwLDAsMSwxMTI4LjYxOSwxMTg2LjM2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIwLjI3OSAtMTE2MS41NzkpIiBmaWxsPSIjMzFiYWEwIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjgzIDIuNjgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1Mzc1IiBkYXRhLW5hbWU9IlBhdGggMzUzNzUiIGQ9Ik05NjMuNjM0LDExNDAuNjYzYS45NTMuOTUzLDAsMCwxLS41NjQtLjE3My44NDYuODQ2LDAsMCwxLS4xMy0xLjIxNSw1Mi40NTcsNTIuNDU3LDAsMCwxLDUuODU4LTUuOTQ0YzQuNzczLTQuMjA5LDkuMzcyLTYuOSwxMy43MTEtOC4wN2EuODUyLjg1MiwwLDEsMSwuNDM0LDEuNjQ5Yy05LjcxOSwyLjU2LTE4LjU3LDEzLjMyLTE4LjY1NywxMy40NTFBLjg0OC44NDgsMCwwLDEsOTYzLjYzNCwxMTQwLjY2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NjIuNzQxIC0xMTI1LjIzKSIgZmlsbD0iI2Y1OTg5NiIvPgogIDwvZz4KICA8ZyBpZD0iUGF0aF8zNTM2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYuMjQxIDIuNjc3KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTM3NiIgZGF0YS1uYW1lPSJQYXRoIDM1Mzc2IiBkPSJNMTA5Mi45MTUsMTE0MC42NmExLjAyNSwxLjAyNSwwLDAsMS0uNjk0LS4zYy0uMDg3LS4wODctOC45MzgtMTAuODQ3LTE4LjY1Ny0xMy40NWEuODUzLjg1MywwLDEsMSwuNDM0LTEuNjQ5YzQuMzM5LDEuMTI4LDguOTM4LDMuODYyLDEzLjcxMSw4LjA3YTYyLjMzMiw2Mi4zMzIsMCwwLDEsNS44NTcsNS45NDQuODQyLjg0MiwwLDAsMS0uMTMsMS4yMTVBLjkyOS45MjksMCwwLDEsMTA5Mi45MTUsMTE0MC42NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDcyLjkyMyAtMTEyNS4yMjMpIiBmaWxsPSIjOGZmMGNiIi8+CiAgPC9nPgogIDxnIGlkPSJQYXRoXzM1MzY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4yMTEpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1Mzc3IiBkYXRhLW5hbWU9IlBhdGggMzUzNzciIGQ9Ik0xMDM3LjMsMTEyMi42NzVhLjczOC43MzgsMCwwLDEtLjMtLjA0M2MtMTEuMTA4LTQuMDc4LTIzLjI1Ni0uMDQzLTIzLjM4NywwYS44MjkuODI5LDAsMCwxLTEuMDg1LS41NjQuODM4LjgzOCwwLDAsMSwuNTIxLTEuMDg1Yy41MjEtLjE3MywxMi44NDMtNC4yNTIsMjQuNTU4LDBhLjg3Mi44NzIsMCwwLDEtLjMsMS42OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxMi40NzUgLTExMTkuMDU0KSIgZmlsbD0iI2QxZDRkYyIvPgogIDwvZz4KPC9zdmc+Cg==");
}
@media screen and (max-width: 1600px) {
  .gauge-meter-border {
    height: 44px;
  }
}
.gauge-meter--os .gauge-meter-border,
.gauge-meter--ma .gauge-meter-border {
  height: 88px;
}
@media screen and (max-width: 1600px) {
  .gauge-meter--os .gauge-meter-border,
  .gauge-meter--ma .gauge-meter-border {
    height: 35px;
  }
}
.gauge-meter-background {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-size: cover;
  transition: all 0.3s;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0NDAiIGRhdGEtbmFtZT0iUGF0aCAzNTQ0MCIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
}
.gauge-meter-background.rank-1 {
  //   background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlZjU0NTAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzk2NzY3IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MCIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0MzkiIGRhdGEtbmFtZT0iUGF0aCAzNTQzOSIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
  background: url("~@/assets/images/landing_v2/bgr-rank.png") no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.gauge-meter-background.rank-2 {
  //   background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTA4NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTA4NCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9Ii0wLjI5OCIgeDI9IjAuNTA3IiB5Mj0iMC40OTQiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmQ5MjkxIiBzdG9wLW9wYWNpdHk9IjAuOCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNTk4OTYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfNjIxIiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNjIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8yMjM5IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjIzOSIgY3g9IjQzIiBjeT0iNDIiIHJ4PSI0MyIgcnk9IjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuOTkpIiBvcGFjaXR5PSIwLjYiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogIDwvZz4KPC9zdmc+Cg==");
  background: url("~@/assets/images/landing_v2/bgr-rank.png") no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.gauge-meter-background.rank-3 {
  //   background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE0MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzY0MSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDY0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU0NDAiIGRhdGEtbmFtZT0iUGF0aCAzNTQ0MCIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuNiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgPC9nPgo8L3N2Zz4K");
  background: url("~@/assets/images/landing_v2/bgr-rank.png") no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.gauge-meter-background.rank-4 {
  //   background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTE1MiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTE1MiIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9Ii0wLjI2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4ZmYwY2IiIHN0b3Atb3BhY2l0eT0iMC44Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhmZjBjYiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhmZjBjYiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfNjQ1IiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNjQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDEpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8yMzIxIiBkYXRhLW5hbWU9IkVsbGlwc2UgMjMyMSIgY3g9IjQzIiBjeT0iNDIiIHJ4PSI0MyIgcnk9IjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuOTkpIiBvcGFjaXR5PSIwLjYiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogIDwvZz4KPC9zdmc+Cg==");
  background: url("~@/assets/images/landing_v2/bgr-rank.png") no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.gauge-meter-background.rank-5 {
  //   background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODYiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA4NiA0MyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNTA4NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNTA4NCIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjAxKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeTE9IjAuMDA2IiB4Mj0iMC41MDciIHkyPSIwLjQ5NCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMWJhYTAiIHN0b3Atb3BhY2l0eT0iMC42MDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjVjYmIwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTdkY2NmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzYyMSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDYyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxKSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzUzODIiIGRhdGEtbmFtZT0iUGF0aCAzNTM4MiIgZD0iTTQzLDBDNjYuNzQ4LDAsODYsMTguOCw4Niw0MlM2Ni43NDgsODQsNDMsODQsMCw2NS4yLDAsNDIsMTkuMjUyLDAsNDMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC45OSkiIG9wYWNpdHk9IjAuODAyIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICA8L2c+Cjwvc3ZnPgo=");
  background: url("~@/assets/images/landing_v2/bgr-rank.png") no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.gauge-meter-pane {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
}

@media screen and (max-width: 1200px) and (min-width: 927px) {
  .historyBox {
    margin-top: 10px;
  }

  .historyBox .item {
    width: 1.3rem;
    height: 1.3rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 926px) {
  .w-18 {
    max-width: 90% !important;
    padding: 0 0.5rem;
  }

  .historyBox {
    margin-top: 5px;
  }

  .historyBox .item {
    width: 1.3rem;
    height: 1.3rem;
  }

  .c-loinhuan {
    font-size: 2rem;
    margin-bottom: 0rem !important;
    margin-top: 3rem !important;
  }
}

@media screen and (max-width: 768.98px) {
  .w-18 {
    max-width: 90% !important;
    padding: 0 0.5rem;
  }

  .historyBox {
    margin-top: 5px;
  }

  .historyBox .item {
    width: 1.2rem;
    height: 1.2rem;
  }

  /* #tradePage{
        padding-top: 20px;
    } */
}

@media screen and (max-width: 576px) {
  .w-18 {
    max-width: 130px !important;
  }

  .historyBox .item {
    width: 1.2rem;
    height: 1.2rem;
  }

  .historyBox .list5,
  .historyBox .list4 {
    display: none;
  }
}

@media screen and (max-width: 414px) {
  .w-18 {
    max-width: 130px !important;
    padding: 0 0.4rem;
  }

  .historyBox .item {
    width: 1rem;
    height: 1rem;
  }

  .popupCongratulation .popupCongratulationContent {
    width: auto;
  }

  .winLive .wrapNotify {
    width: 320px;
    background-size: 320px;
  }

  .winLive .wrapNotify .iconWin {
    left: 50%;
  }

  .winLive .wrapNotify .badgeDemo {
    right: 50px;
  }
}

@media screen and (max-width: 376px) {
  .w-18 {
    max-width: 115px !important;
  }

  .historyBox .item {
    width: 1rem;
    height: 1rem;
  }
}

@media screen and (max-width: 359px) {
  .w-18 {
    max-width: 100px !important;
  }

  .historyBox .item {
    width: 0.8rem;
    height: 0.8rem;
  }

  .popupCongratulation {
    zoom: 0.8;
  }
}

@media screen and (max-width: 1600px) {
  .gauge-meter-label-list {
    display: none;
  }
}
.gauge-meter-label-item {
  font-size: 10px;
  color: #8383a1;
  text-align: center;
  position: absolute;
  line-height: 1.2;
  text-transform: uppercase;
  transition: all 0.3s;
}
.gauge-meter-label-item.active {
  color: #fff;
}
.gauge-meter-label-item--strong-sell {
  top: 45px;
  left: -42px;
}
.gauge-meter--os .gauge-meter-label-item--strong-sell,
.gauge-meter--ma .gauge-meter-label-item--strong-sell {
  top: 40px;
  left: -40px;
}
.gauge-meter-label-item--sell {
  top: 5px;
  left: 5px;
}
.gauge-meter--os .gauge-meter-label-item--sell,
.gauge-meter--ma .gauge-meter-label-item--sell {
  top: 8px;
  left: -2px;
}
.gauge-meter-label-item--neutral {
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}
.gauge-meter--os .gauge-meter-label-item--neutral,
.gauge-meter--ma .gauge-meter-label-item--neutral {
  top: -15px;
}
.gauge-meter-label-item--buy {
  top: 5px;
  right: 7px;
}
.gauge-meter--os .gauge-meter-label-item--buy,
.gauge-meter--ma .gauge-meter-label-item--buy {
  top: 8px;
  right: 0px;
}
.gauge-meter-label-item--strong-buy {
  top: 45px;
  right: -42px;
}
.gauge-meter--os .gauge-meter-label-item--strong-buy,
.gauge-meter--ma .gauge-meter-label-item--strong-buy {
  top: 40px;
  right: -40px;
}
.gauge-meter-status-list {
  position: absolute;
  width: 100%;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1600px) {
  .gauge-meter-status-list {
    bottom: -55px;
  }
}
@media screen and (max-width: 1023px) and (orientation: landscape) {
  .gauge-meter-status-list {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .gauge-meter-status-list {
    display: none;
  }
}
.gauge-meter-status-item {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}
@media screen and (max-width: 1600px) {
  .gauge-meter-status-item {
    padding: 0 5px;
    font-size: 12px;
  }
}
.gauge-meter-status-value {
  color: #fff;
  text-align: center;
  font-weight: bold;
}
.gauge-meter-status-value--sell {
  color: #ef5450;
}
.gauge-meter-status-value--buy {
  color: #31baa0;
}
.gauge-meter-status-value--neutral {
  color: #d1d4dc;
}
.gauge-meter-status-text {
  color: #8383a1;
}
.gauge-meter-popover {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.gauge-meter--os .gauge-meter-popover,
.gauge-meter--ma .gauge-meter-popover {
  //   top: 23px;
  top: 0;
}
@media screen and (max-width: 768px) {
  .gauge-meter {
    width: 100%;
  }
}

@media screen and (max-width: 1600px) {
}
.keyboard.hiddenKey {
  visibility: hidden;
  transform: translate3d(0, 100%, 0);
}

.vs-button-primary.vs-button-border,
.vs-button-primary.vs-button-flat {
  border: 1px solid #4e4e4e;
  color: #fff;
}

.keyboard-input-wrap.active .numKeyboardInput {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.5);
}

.keyboard td {
  text-align: center;
  width: 25%;
  border: 1px solid #ddd;
}

.keyboard table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.keyboard {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  font-size: 0.48rem;
  line-height: 0.48rem;
  background: #f6f6f6;
  color: #4a4a4a;
  width: 100%;
  height: 4.4rem;
  user-select: none;
  visibility: visible;
  transform: translate3d(0, 0, 0);
  transition-property: transform visibility;
  transition-duration: 0.2s;
  font-weight: normal;
  border-top: 1px solid #e5e5e5;
}

.keyboard-input-wrap .keyboard {
  height: 460px;
  font-size: 1.2em;
  color: #fff;
  border: none;
}

.amountWrapper {
  height: 160px;
  background-color: #111;
}

.amountWrapper .headerAmount {
  padding: 1.25rem;
  background-color: #111;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.groupButtonMobile {
  margin: 1.25rem 0.5rem;
}

.keyboard-input-wrap .suggestion {
  background: #142c37;
  width: 100%;
  font-size: 1.2em;
  font-weight: normal;
}

.keyboard td:nth-of-type(-n + 3) {
  font-weight: normal;
}

.keyboard td:first-child {
  border-left: none;
}

.c-body {
  max-height: calc(100vh - 88px);
}

.c-desktop .item-col font-bold {
  padding: 0 0.2rem;
  border-radius: 10px;
}

.c-desktop .num1 {
  height: 100%;
  /deep/.vs-con-input {
    margin-top: 0 !important;
  }
}

.c-desktop .operator {
  font-size: 20px;
  font-weight: bold;
}
</style>

<style lang="scss">
.content-noti {
  flex-direction: row-reverse;
}

.sidebarMobile .slidercontent .progress {
  .vs-progress--foreground {
    background: #5eb7a1 !important;
  }
}

.vs-button:disabled {
  background-color: #818a95 !important;
  opacity: 1 !important;
}
.rightBar {
  .item-col {
    padding: 0 2px;
  }
  .value-price {
    position: relative;
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
      z-index: 999;
    }
  }
}
@media screen and (min-width: 768.98px) {
  #tradePage,
  .rightBar {
    height: calc(100vh - 77px);
    // border-left: 2px solid #000;
  }
  .vs-navbar.navbar-skelton {
    border-bottom: 2px solid #000;
  }
}

.vs-input-primary .vs-input--input:focus {
  border: 1px solid #4e4e4e !important;
}

.vs-input-primary.isFocus .vs-input--label,
.vs-input-primary .vs-input--input:focus ~ .icon-inputx,
.vs-input-primary .vs-input--input:focus ~ .vs-placeholder-label {
  color: #4e4e4e;
}

@media (max-width: 1024.98px) and (min-width: 576px) {
  table tbody .suggestion td {
    font-size: 20.16px;
  }
}

.keyboard-input-wrap .keyboard table tbody tr td {
  border-color: #060017;
  background: #262527;
}

.keyboard-input-wrap .keyboard table tbody tr.suggestion td {
  background-color: #4e4e4e;
}

#tradePage .chartBox {
  height: calc(100vh - 380px);
  overflow: hidden;
}
#tradePage .chartBox.binomo {
  height: calc(100vh - 125px) !important;
}

@media screen and (max-width: 450px) {
  #tradePage .chartBox {
    margin-top: 7px;
  }
}

@media screen and (max-width: 1600px) {
  #tradePage .chartBox {
    height: calc(100vh - 340px);
  }
}

@media screen and (max-width: 1200px) {
  #tradePage .chartBox {
    height: calc(100vh - 340px);
  }
}
@media screen and (max-width: 1024px) {
  #tradePage .pc {
    display: none !important;
  }
  #tradePage .mobile {
    display: block !important;
  }
  #tradePage .chartBox {
    height: calc(100vh - 490px);
  }
}

@media screen and (min-width: 426px) and (max-width: 769px) {
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 450px);
  }
  .c-loinhuan {
    margin-bottom: 0.5rem !important;
    margin-top: 2.25rem !important;
  }
}

@media screen and (max-width: 1000px) {
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 408px);
  }
}

@media screen and (max-width: 1100px) and (min-width: 968px) {
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 246px);
  }
  .analysis-wrapper {
    height: 10rem !important;
  }
}

@media screen and (max-width: 400px) {
  .navbar-floating .router-content {
    margin-top: 60px;
  }
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 418px);
  }
  /* #tradePage .chartBox {
        height: calc(100vh - 480px);
    } */
  body {
    overflow-x: hidden;
    overflow-y: auto;
  }
  /*#tradePage{
        padding-top: 75px !important;
    }*/
}
@media screen and (max-width: 767px) {
  .navbar-floating .router-content {
    margin-top: 60px;
  }
  #tradePage .chartBox {
    height: calc(var(--vh, 1vh) * 100 - 450px);
    min-height: unset;
  }
}
/* @media screen and (max-width: 575px){
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}
@media screen and (max-width: 540px){
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}
@media screen and (max-width: 460px){
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
}
@media screen and (max-width: 420px){
    #tradePage .chartBox {
        height: calc(100vh - 490px);
    }
} */

.bpF {
  border-radius: 5px;
  display: inline-block;
  background-color: #727272;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.color-light-yellow {
  font-size: 1.5rem;
  color: #eec40d !important;
}
.color-green {
  color: #5fe349 !important;
}
.color-red {
  color: #ea6a65 !important;
}
.bg-green {
  background: #5fe349 !important;
}
.bg-red {
  background: #ea6a65 !important;
}
.empty {
  background: #637284;
}
.minutes-set {
  float: left;
  margin-right: 28px;
}

.betInput input {
  background: #fff !important;
  color: #1d233b;
  border: none !important;
}

.seconds-set {
  float: right;
}

.controlls {
  position: absolute;
  text-align: center;
  left: 40%;
  top: 40%;
  margin-left: -17px;
  width: 45px;
  margin-top: -5px;
}

.display-remain-time {
  font-size: 14px;
  color: #82868b;
  /*position: relative;top: 14px;*/
}

.w-18 {
  max-width: 160px !important;
}

.e-c-base {
  fill: none;
  stroke: #b6b6b6;
  stroke-width: 12px;
}
.red .e-c-progress {
  fill: none;
  stroke: #ff0000;
  stroke-width: 12px;
  transition: stroke-dashoffset 0.7s;
}
.green .e-c-progress {
  fill: none;
  stroke: #31baa0;
  stroke-width: 12px;
  transition: stroke-dashoffset 0.7s;
}
.red .e-c-progress {
  fill: none;
  stroke: #ff0000;
  stroke-width: 10px;
  transition: stroke-dashoffset 0.7s;
}

.red .e-c-pointer {
  fill: #fff;
  stroke: #ff0000;
  stroke-width: 10px;
}

.green .e-c-progress {
  fill: none;
  stroke: #31baa0;
  stroke-width: 10px;
  transition: stroke-dashoffset 0.7s;
}

.green .e-c-pointer {
  fill: #fff;
  stroke: #31baa0;
  stroke-width: 10px;
}
#e-pointer {
  transition: transform 0.7s;
}
.hide-sm {
  display: none !important;
}
.hide-xs {
  display: block;
}
.box-btn-buy-sell {
  position: relative;
}
.box-btn-buy-sell .col-2 {
  position: static;
}

.circle {
  position: relative;
  left: 0px;
  height: 45px;
  /*top: 10px;*/
}

.plotlineChart .price {
  display: inline-block;
  background-color: #00b6ff;
  margin-bottom: 2px;
  padding: 2px 5px;
}
.plotlineChart .time {
  display: inline-block;
  background-color: #00b6ff;
  padding: 2px 5px;
}
/* Custom color manko */
.plotlineChart span {
  background-color: #2ecbd0 !important;
  color: #fff !important;
  display: inline-block;
  margin-top: 2px;
  padding: 2px;
  border-radius: 5px !important;
}

.c-desktop .profitPercent span {
  color: #eec40d !important;
  font-size: 20px;
}

.c-desktop .profitValue {
  color: #eec40d !important;
  font-weight: 700 !important;
  font-size: 2.1rem !important;
  img {
    margin-bottom: -4px;
  }
}

.c-desktop .btn-trade-time {
  height: 37px;
  color: #fff;
  font-weight: 700;
}

.c-desktop .bet-box-time {
  background-color: rgb(29, 35, 59);
}

.c-desktop .inp {
  width: 100% !important;
  background-color: #fff !important;
  font-weight: bold;
  border-radius: 5px;

  input[type="text"] {
    text-align: left;
    color: rgb(23, 27, 44);
  }

  i {
    color: #000 !important;
  }
}

.trans > .highcharts-container {
  transition: 0.4s all;
  width: 100% !important;
}

.highcharts-container {
  width: 100% !important;
}

.highcharts-root {
  width: 100% !important;
}

.vs-tabs--content {
  padding: 0px 0 0 !important;
}
.profit-container {
  .title {
    color: white;
  }
  .profit-percent,
  .profit-value {
    color: #2ea952;
  }
  .profit-value {
    font-weight: bold;
    font-size: 24px;
  }
  .profit-percent {
    font-size: 40px;
  }
}
.right-side-bar {
  height: calc(100% - 300px);
}
.selectBoxBetValue{
  color: white;
  font-size: 1rem;
  font-weight: bold;
  background-color: #384b6b;

  border: none;
}
</style>
