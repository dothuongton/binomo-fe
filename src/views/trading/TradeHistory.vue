<template>
  <div id="tradeHisPage" class="tradeHistory">
    <div class="vx-row">
      <div class="w-full">
        <div class="headerContent justify-between items-center mb-4">
          <div class="flex justify-between">
            <h1 class="title-trade white font-bold capitalize relative">
              {{$t('Data')}}
              <br>
            </h1>
            <!--<a href="#" class="inline-flex items-center white">
                        <span class="btn-eyes"></span>
                        <span>Ẩn số dư</span>
                    </a> -->
          </div>
        </div>
      </div>
      <div class="vx-col w-full lg:w-1/2 mt-2 lg:pl-0">
        <div class="bostats">
          <div class="wrap-chart">
            <div class="chart-instance">
              <div class="vx-row">
                <div class="vx-col w-full lg:w-3/4 sm:mb-3 justify-center">
                  <!--<vue-apex-charts type="donut" height="250" :options="donutChart.chartOptions" :series="donutChart.series"></vue-apex-charts>
                                -->
                  <highcharts
                    ref="chartDount"
                    :options="optionsDount"
                  ></highcharts>
                </div>
                <div class="vx-col w-full lg:w-1/4 mt-3 mb-3">
                  <div class="w-full mb-3 borderRightColor">
                    <p class="white text-center mt-3 mb-2 name">{{$t('Total round')}}</p>
                    <p class="white text-center value">
                      {{ formatPrice(totalOrder, 0) }}
                    </p>
                  </div>
                  <div class="w-full mb-3 borderTopColor">
                    <p class="white text-center m-3 mb-2 name">{{$t('Win rate')}}</p>
                    <p class="white text-center value">
                      {{ win_rate ? win_rate.toFixed(2) : 0 }}%
                    </p>
                  </div>
                  <div class="w-full mb-3 borderTopColor">
                    <p class="white text-center mt-3 mb-2 name">
                      {{$t('Total transactions')}}
                    </p>
                    <p class="white text-center value">
                      đ {{ formatPrice(trades) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vx-col w-full lg:w-1/2 mt-2 lg:pr-0">
        <div class="vx-row">
          <div class="vx-col w-full xl:w-1/2 mt-2 lg:mt-0">
            <div class="p-8 userStat profits flex align-middle justify-around">
              <div class="wrap">
                <div class="icon text-center">
                  <img
                    :src="require('@/assets/images/landing_v2/icon-ln.png')"
                    alt=""
                  />
                </div>
                <div class="info">
                  <p class="name m-0">{{$t('Net profit')}}</p>
                  <p class="value white m-0 d-flex">
                    <span>đ </span>
                    <span>{{ formatPrice(profits) }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="vx-col w-full xl:w-1/2 mt-2 xl:mt-0">
            <div class="p-8 userStat revenue flex align-middle justify-around">
              <div class="wrap">
                <div class="icon text-center">
                  <img
                    :src="require('@/assets/images/landing_v2/icon-dt.png')"
                    alt=""
                  />
                </div>
                <div class="info">
                  <p class="name m-0">{{$t('Total Revenue')}}</p>
                  <p class="value white m-0 d-flex">
                    <span>đ </span>
                    <span>{{ formatPrice(revenue) }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="vx-col w-full relative mt-2">
            <vs-progress
              class="bg-red"
              :height="8"
              :percent="up_rate ? up_rate.toFixed(2) : 0"
              color="success"
            ></vs-progress>
            <div class="block">
              <span class="float-left mr-1">{{$t('BUY')}}</span>
              <span class="green float-left">
                {{ up_rate ? up_rate.toFixed(2) : 0 }}%
              </span>
              <span class="float-right ml-1">{{$t('SELL')}}</span>
              <span class="red float-right">
                <span v-if="up_rate">{{ (100 - up_rate).toFixed(2) }}% </span>
                <span v-else>0%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vx-row mt-5">
      <div
        class="headerContent w-full flex lg:flex-row flex-col justify-between items-center mb-4"
      >
        <h1 class="title-trade white font-bold capitalize">
          {{$t('Transactions history')}}
        </h1>
        <div class="lg:flex items-center">
          <div class="flex flex-col lg:mr-10 relative">
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
          <vs-button color="#19C386" type="filled" @click="getSeachOrderDate()"
            >{{$t('Search')}}</vs-button
          >
        </div>
      </div>
      <div class="table-responsive tableTradeHis relative">
        <vs-table
          class="table table-bordered w-full"
          :class="{ 'ld-loading': isLoading }"
          :max-items="25"
          pagination
          :data="dataHisOrder"
          :per-page="descriptionItems[0]"
          :current-page="5"

          :description-items="descriptionItems"
          description-title="Registries"
          description-connector="of"
          description-body="Pages"
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
          <template slot="thead">
            <template>
              <th>{{$t('Session')}}</th>
              <th>{{$t('Asset')}}</th>
              <th>{{$t('Start time')}}</th>
              <th>{{$t('Option')}}</th>
              <th>{{$t('Selected')}}</th>
              <th>{{$t('Open price')}}</th>
              <th>{{$t('Close price')}}</th>
              <th>{{$t('Value')}}</th>
              <th>{{$t('Pay')}}</th>
            </template>
          </template>
          <tbody v-if="dataHisOrder.length == 0">
            <tr>
              <td colspan="9" class="text-center">No data</td>
            </tr>
          </tbody>
          <template slot-scope="{data}" >
            <tr :key="indextr" v-for="(tr, indextr) in data">
              <td class="text-center">
                {{ convertSession(tr.d) }}
              </td>
              <td class="text-center">
                {{ tr.cu }}
              </td>
              <td class="text-center w-32">
                {{ formatDateOrder(tr.d) }}
              </td>
              <td class="text-center">30 {{$t('Seconds')}}</td>
              <td class="text-center" v-if="tr.bs == 'buy'">
                <feather-icon
                  class="text-success"
                  icon="TrendingUpIcon"
                  svgClasses="w-4 h-4"
                />
                {{$t('BUY')}}
              </td>
              <td class="text-center" v-else>
                <feather-icon
                  class="text-danger"
                  icon="TrendingDownIcon"
                  svgClasses="w-4 h-4"
                />
                {{$t('SELL')}}
              </td>
              <td class="text-center">${{ tr.o }}</td>
              <td class="text-center">${{ tr.c }}</td>
              <td class="text-center">đ{{ tr.ab }}</td>
              <td class="text-center text-success" v-if="tr.aw > 0">
                +đ{{ tr.aw }}
              </td>
              <td class="text-center text-danger" v-else>-đ{{ tr.al }}</td>
            </tr>
          </template>
        </vs-table>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
//import VueApexCharts from 'vue-apexcharts'

import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import Highcharts3D from "highcharts/highcharts-3d";
import More from "highcharts/highcharts-more";

import Datepicker from "vuejs-datepicker";
import moment from "moment";
// import HisOrderBet from "../../login/trade/slidebar/HisOrderBet.vue";

Highcharts3D(Highcharts);
More(Highcharts);

const chartDount = {
  chart: {
    type: "pie",
    backgroundColor: "transparent",
    height: "250px",
    options3d: {
      enabled: true,
      alpha: 45,
    },
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: 50,
      depth: 20,
    },
    series: {
      colors: ["#EA5455", "#28C76F"],
      dataLabels: {
        enabled: true,
        color: "#fff",
      },
    },
  },
  legend: {
    itemHoverStyle: { color: "#C1C1C1" },
    itemStyle: {
      color: "#fff",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "bold",
      textOverflow: "ellipsis",
    },
  },
  series: [
    {
      pie: {
        borderColor: "transparent",
        borderWidth: 0,
      },
      showInLegend: true,
      name: "",
      data: [
        ["Total Lose", 78],
        ["Total Win", 34],
      ],
    },
  ],
};

export default {
  components: {
    //VueApexCharts,
    Datepicker,
    highcharts: Chart,
  },
  data() {
    return {
      descriptionItems: [5,10,15],
      dataHisOrder: [],

      isLoading: false,

      down: 0, // số lần sell
      down_rate: 0, // tỉ lệ sell
      lose: 0,
      profits: 0, // lợi nhuận rồng
      refund: 0, // hoàn tiền
      revenue: 0, // tổng doanh thu
      trades: 0, // tổng tiền giao dịch
      up: 0, // số lần buy
      up_rate: 0, // tỉ lệ buy
      win: 0,
      win_rate: 0,

      formatDate: "MM/dd/yyyy",
      startDate: null,
      endDate: null,
      optionsDount: chartDount,
      totalOrder: 0,
      // donutChart: {
      //     series: [0, 1],
      //     chartOptions: {

      //         labels: ["Tổng vòng thua", "Tổng vòng thắng"],
      //         //colors: this.themeColors,
      //         colors: ["#28C76F", "#EA5455", "#414141"],

      //         responsive: [{
      //             breakpoint: 480,
      //             options: {
      //                 chart: {
      //                     width: 200
      //                 },
      //                 legend: {
      //                     position: 'bottom'
      //                 }
      //             }
      //         }]
      //     }
      // }
    };
  },
  methods: {
    getInfoAccountDoanhThu() {
      AuthenticationService.getThongTinLoiNhuan().then((res) => {
        if (res.data.success) {
          let cD = this.$refs.chartDount.chart.series[0];
          let gD = res.data.data;
          let obj = [
            {
              name: this.$t('Total Lose'),
              y: gD.lose,
            },
            {
              name: this.$t('Total Win'),
              y: gD.win,
            },
          ];
          cD.update({ data: obj }, true);
          this.totalOrder = gD.lose + gD.win;
          //this.donutChart.series = [gD.lose, gD.win]

          this.up = gD.up;
          this.up_rate = gD.up_rate;
          this.down = gD.down;
          this.down_rate = gD.down_rate;
          this.win = gD.win;
          this.win_rate = gD.win/(gD.win + gD.lose) * 100 ;//gD.win_rate;
          this.lose = gD.lose;
          this.trades = gD.trades;
          this.revenue = gD.revenue;

          this.profits = gD.profits;

          gD = null;
        }
      });
    },
    convertSession(value) {
      if (value) {
        return moment(value).subtract(1, 'minutes').format('YYYYMMDDHHmm');
      }
    },

    getListHistoryOrder() {
      this.isLoading = true;
      AuthenticationService.getListHisOrder().then((res) => {
        if (res.data.success) {
          //console.log(res.data.data)
          this.isLoading = false;
          this.dataHisOrder = res.data.data;
        }
      });
    },

    getSeachOrderDate() {
      this.isLoading = true;

      let start = this.formatDateHis(this.startDate);
      let end = this.formatDateHis(this.endDate);

      let obj = {
        s: start,
        e: end,
      };

      AuthenticationService.getSeachListOrder(obj).then((res) => {
        if (res.data.success) {
          //console.log(res.data.data)
          this.isLoading = false;
          this.dataHisOrder = res.data.data;
        }
      });
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    formatDateHis(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    formatDateOrder(value) {
      if (value) {
        return moment(value).subtract(1, 'minutes').format('MM/DD/YYYY HH:mm:ss');
      }
    }

    // formatDateOrder(value) {
    //   if (value) {
    //     return moment(String(value)).format("MM/DD/YYYY HH:mm:ss");
    //   }
    // },

  },

  created() {
    const locale = localStorage.getItem('locale');
    if (locale) {
      this.$i18n.locale = locale;
    }
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var last_week = new Date(year, currentDate.getMonth(), day - 7);

    this.startDate = moment(String(last_week)).format("MM/DD/YYYY");

    let end_date = new Date(year, month, day);

    this.endDate = moment(String(end_date)).format("MM/DD/YYYY");

    this.getInfoAccountDoanhThu();
    this.getListHistoryOrder();
  },
};
</script>

<style lang="scss" scoped>
.tableTradeHis {
  height: 400px;
}

#tradeHisPage {
  padding: 25px 4rem;
  .title-trade {
    font-size: 40px;
    margin-bottom: 2px;
  }
  .items-end {
    button {
      font-size: 24px;
      padding: 16px 34px;
    }
  }
}
.table-bordered {
}
.table-bordered td {
  border-color: #b8b8b8;
  border-bottom-width: 2px;
  font-size: 1rem;
  padding: 5px;
}

.table-bordered thead th {
  color: #fff;
  font-weight: 400;
  border-bottom-width: 2px;
  border-color: #b8b8b8;
  text-align: center;
}

.dateRange > span {
  flex: 0 0 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}

.dateRange .customeTradeHistory:first-child {
  padding-right: 20px;
}

.dateRange .customeTradeHistory:last-child {
  padding-right: 20px;
}

.dateRange {
  display: flex;
  max-width: 400px;
}
/deep/ .dateRange .vdp-datepicker input {
  font-size: 24px !important;
}
@media only screen and (max-width:632px){
    /deep/ .dateRange .vdp-datepicker input {
    font-size: 16px !important;
  }
  [dir=ltr] .customeTradeHistory, [dir=ltr] .customeAffiliateCommission{
    background-size: 30px;
  }
  [dir] .table-bordered td, [dir] .table-bordered th{
    padding: 7px 7px;
    font-size: 1rem;
  }
  #tradeHisPage .title-trade{
    font-size: 2.1rem;
  }
}
.bostats {
  min-height: 320px;
  border-radius: 10px;
  box-shadow: 0px -1px 8px 3px #ffffff40 inset;
  background-color: #333332;
  padding: 20px 30px;
}

.wrap-chart .chart-instance {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-bottom: 5px;
}

.tradeHistory .userStat.revenue {
  background-color: #19c386;
}

.tradeHistory .userStat.profits {
  background-color: #4299ff;
}

.tradeHistory .userStat {
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
}

.tradeHistory .userStat .wrap {
  flex: 1;
  display: flex;
  max-width: 300px;
  align-items: center;
}

.tradeHistory .userStat .info {
  flex: 1;
}

.tradeHistory .userStat .icon {
  flex: 0 0 60px;
  max-width: 60px;
}

.tradeHistory .userStat .info .name {
  font-size: 18px;
  color: #0c2889;
}
.tradeHistory .userStat.revenue .info .name {
  color: #0a7127;
}
.tradeHistory .userStat .info .value {
  font-size: 18px;
  font-weight: 700;
}

.icon {
  width: 24px;
  height: 50px;
  margin-right: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.borderRightColor {
  font-size: 18px;
}
.borderTopColor {
  border-top: 1px solid #fff;
  font-size: 18px;
}

.history .box-result-header {
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  padding: 10px 5px;
  height: 50px;
}

.history .box-result .item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 10px 5px;
  height: 50px;
}

.history .box-result .block-col.amount {
  flex: 0 0 85px;
  max-width: 85px;
}

.history .box-result .block-col.status {
  flex: 0 0 90px;
  max-width: 90px;
}

.history .box-result .block-col p > span {
  line-height: 30px;
}

.history .box-result .item svg {
  width: 14px;
  margin-right: 5px;
  vertical-align: middle;
}

.history .box-result .block-col.amount span {
  padding: 0 10px;
}

.history .box-result .item span {
  font-size: 14px;
}

.history .box-result .block-col > span {
  line-height: 30px;
}

.history .box-result .block-col.note span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
}

.history .item-txid-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
  white-space: nowrap;
  display: block !important;
}

.history-nav .nav-tabs {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.history .box-result .block-col > span {
  line-height: 30px;
}

.history .box-result .block-col {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  padding-top: 0;
  padding-bottom: 0;
}

.history .box-result .block-col.time {
  flex: 0 0 110px;
  max-width: 110px;
}

.history-body {
  border-radius: 5px;
  border: none;
  padding: 0 !important;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>

<style>
.theme-dark .apexcharts-canvas .apexcharts-pie-series path {
  stroke: transparent !important;
}

.content .inputGroup input {
  background: #fff;
  color: #545454;
}

.dateRange input {
  background: transparent;
  border-bottom: 1px solid #fff !important;
  border-radius: 0 !important;
}
</style>
