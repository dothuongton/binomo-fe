<script src="https://code.highcharts.com/stock/highstock.js"></script>
<script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
<template>
  <div class="main-chart">
    <div id="container" style="height: auto"></div>

    <div class="zoom-options">
      <TypeChartDropdown :isShow="true" @onChartTypeChange="onChartTypeChange" />
      <TimeChartDropdown v-if="true" :isShow="true" :timeTick="timeTick"
        @onChartTimeTickChange="onChartTimeTickChange" />
      <div class="zoom-in" @click="onZoomOut">-</div>
      <div class="zoom-in" @click="onZoomIn">+</div>
    </div>
  </div>
</template>
<script>
import { Chart } from "highcharts-vue";
import More from "highcharts/highcharts-more";
import Highcharts from "highcharts";
import stockInit from "highcharts/modules/stock";
import loadIndicatorsAll from "highcharts/indicators/indicators";
import TimeChartDropdown from "../../components/dropdown/TimeChartDropdown.vue";
import TypeChartDropdown from "@/components/dropdown/TypeChartDropdown";

More(Highcharts);
stockInit(Highcharts);
loadIndicatorsAll(Highcharts);
let rect;
export default {
  name: "ChartIndex",
  props: {
    timeBetFuture: { type: [Number, String] },
    timeTick: { type: Object },
    lineData: { type: Array },
    updateData: { type: Object },
  },
  components: {
    TypeChartDropdown,
    highcharts: Chart,
    TimeChartDropdown,
  },

  created() {},
  mounted() {
    this.initChart();
    // this.onResetZoom();
  },
  watch: {
    timeTick: {
      handler() {
        // console.log(this.lineData);
        // this.chartConfig.series[0].data = this.lineData;
      },
      deep: true,
      immediate: true,
    },
    updateData: {
      handler(data) {
        // console.log("==========update", data);
        this.updateX_PlotLine(data);
        this.updateY_PlotLine(data);
      },
      deep: true,
    },
  },
  computed: {},
  data() {
    return {
      firstTime: true,
      currentZoomRate: 60,
    };
  },
  methods: {
    redraw() {
      // const chart = $("#container").highcharts();
      // chart.redraw();
      // const lineData = this.lineData;
      // chart.series[0].setData(lineData, true);
    },
    onChartTimeTickChange(e) {
      e;
      // this.$emit("onChartTimeTickChange", e);
    },
    onChartTypeChange(e) {
      console.log(e);
      e;
      // Change chart type future feature
    },
    updateX_PlotLine(data) {
      const chart = $("#container").highcharts();
      const date = data.x;
      const year = new Date(date).getFullYear();
      const month = new Date(date).getMonth() + 1;
      const day = new Date(date).getDate();
      const hours = new Date(date).getHours();
      const minutes = new Date(date).getMinutes();
      const second = new Date(date).getSeconds();
      let dateString;
      if (second <= 30 && second > 0) {
        dateString = `${year}/${month}/${day} ${hours}:${minutes}`;
      }
      if (second == 0) {
        dateString = `${year}/${month}/${day} ${hours}:${minutes}`;
      }

      // check logic trong truong hop co dat cuoc
      // if (second > 30) {
      //   dateString = `${year}/${month}/${day} ${hours}:${minutes}`;
      // }

      // truong hop ko co dat cuoc
      if (second > 30) {
        dateString = `${year}/${month}/${day} ${hours}:${minutes}:30`;
      }

      console.log(dateString);

      const timeString = new Date(dateString).getTime();
      const softLine = timeString + 30 * 1000;
      const hardLine = timeString + 59 * 1000;
      let timeLeft;
      if (softLine - date < 0) {
        timeLeft = "";
      } else {
        const value = new Date(softLine - date);
        const sec = value / 1000;
        timeLeft = Math.abs(sec).toFixed(0);
        const min = Math.floor(timeLeft / 60);
        if (min == 0) {
          timeLeft = ":" + timeLeft + "s";
        } else {
          timeLeft = ":" + min + "m" + (timeLeft % 60) + "s";
        }
      }

      // update position of plot-line-x white
      chart.xAxis[0].removePlotLine("plot-x-1");
      chart.xAxis[0].addPlotLine({
        value: softLine,
        color: "#F6F7F7",
        id: "plot-x-1",
        width: 1,
        label: {
          useHTML: true,
          x: 0,
          y: 0,
          align: "right",
          formatter: function () {
            const result = `<div class="plotLine-x bet-time-remaining"><span class="image" id="time-left"></span></div>`;
            return result;
          },
        },

        dashStyle: "LongDash",
      });

      // update position of plot-line-x red
      chart.xAxis[0].removePlotLine("plot-x-2");
      chart.xAxis[0].addPlotLine({
        value: hardLine,
        color: "#FF646C",
        width: 1,
        id: "plot-x-2",
        label: {
          formatter: function () {
            return `<div class="plotLine-x result-left">
                  <div class="context">thời gian còn lại </div>
                     <div class="image">
                     <i class="icon"></i>
                 </div>
                 </div>`;
          },
          useHTML: true,

          x: -10,
          y: 100,
          align: "right",
        },
        dashStyle: "LongDash",
      });

      var sp = this.$el.querySelector("#time-left");
      if (sp) {
        sp.innerText = timeLeft;
      }
      // const series = chart.series[0];
      // const lastPoint = series.points[series.points.length - 1];
      // console.log("===chart", chart);
      // const pointA_x = lastPoint.plotX + chart.plotLeft;
      // console.log("=pointA_x", pointA_x);
      //   const pointY = lastPoint.plotY + chart.plotTop;
      //   const pointB_x = pointA_x + 100; // can tinh toan diem B theo cot mau do?
      //   chart.renderer.path(['M', pointA_x, pointY, 'L', pointB_x, pointY])
      //       .attr({
      //           'stroke-width': 2,
      //           stroke: 'red'
      //       })
      //       .add();
    },
    updateY_PlotLine(data) {
      const chart = $("#container").highcharts();
      const x = data.x;
      const series = chart.series[0];
      const y = data.y;
      const plotLine = chart.yAxis[0].plotLinesAndBands[0].svgElem;

      series.addPoint([x, y], true, true);
      if (plotLine.d && chart.yAxis[0].plotLinesAndBands[0].label) {
        const d = plotLine.d.split(" ");
        const newY = chart.yAxis[0].toPixels(y) - d[2];
        chart.yAxis[0].plotLinesAndBands[0].label.textSetter(
          '<span class="plotLine-y">' + y + "</span>"
        );
        chart.yAxis[0].plotLinesAndBands[0].label.animate(
          {
            translateY: newY,
          },
          300
        );
        plotLine.animate(
          {
            translateY: newY,
          },
          300
        );
        const series = chart.series[0];
        const lastPoint = series.points[series.points.length - 1];
        const pointA_x = lastPoint.plotX + chart.plotLeft;
        const pointY = lastPoint.plotY + chart.plotTop;

        if (this.rect) {
          this.rect.animate({
            x: pointA_x,
            y: pointY,
          });
        } else {
          this.rect = chart.renderer
          .circle(pointA_x, pointY, 5.0)
          .attr({
            fill: "red", //marker-point
            stroke: "black",
            "stroke-width": 1,
            id: "marker-point",
          })
          .add().toFront();
        }


      } else {
        chart.yAxis[0].removePlotLine("plot-line-1");
        chart.yAxis[0].addPlotLine({
          value: data.y,
          color: "#ffffff",
          width: 2,
          id: "plot-line-1",
          label: {
            align: "right",
            text: '<span class="plotLine-y">50</span>',
            style: {
              color: "white",
            },
          },
        });
      }
    },
    initChart() {
      Highcharts.setOptions({
        global: {
          useUTC: false,
        },
      });

      const myData = this.lineData.map((i) => {
        return [i.x, i.y];
      });
      const options = {
        chart: {
          height: window.innerHeight - 128 + "px",
          spacingTop: 60,
          spacingRight: 0,
          spacingBottom: 60,
          lineWidth: 4,
          backgroundColor: "#1E1F22",
          events: {
            load: function () {
              var series = this.series[0],
                hasPlotLine = false,
                $button = $("#button"),
                chart = $("#container").highcharts(),
                yAxis = chart.yAxis[0],
                xAxis = chart.xAxis[0],
                plotLine,
                d,
                newY;

              yAxis.addPlotLine({
                value: 0,
                color: "#ffffff",
                width: 2,
                id: "plot-line-1",
                label: {
                  align: "right",
                  text: '<span class="plotLine-y">50</span>',
                },
              });
              xAxis.addPlotLine({
                value: 0,
                color: "#F6F7F7",
                id: "plot-x-1",
                width: 1,
                label: {
                  useHTML: true,
                  x: 0,
                  y: 2,
                  align: "right",
                  formatter: function () {
                    const result = `<div class="plotLine-x bet-time-remaining"><span class="image" id="time-left"></span></div>`;
                    return result;
                  },
                },

                dashStyle: "LongDash",
              });
              xAxis.addPlotLine({
                value: 0,
                color: "#FF646C",
                width: 1,
                id: "plot-x-2",
                label: {
                  formatter: function () {
                    return `<div class="plotLine-x result-left">
                  <div class="context">thời gian còn lại </div>
                     <div class="image">
                     <i class="icon"></i>
                 </div>
                 </div>`;
                  },
                  useHTML: true,

                  x: -10,
                  y: 100,
                  align: "right",
                },
                dashStyle: "LongDash",
              });
            },
          },
        },
        yAxis: {
          gridLineColor: "#2F3033",
          endOnTick: true,
        },
        xAxis: {
          overscroll: 7 * 60 * 1000, // 10 seconds,
          endOnTick: false,
          gridLineColor: "#2F3033",
          type: "datetime",
        },
        rangeSelector: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        scrollbar: {
          enabled: false,
          height: 0,
        },
        stockTools: {
          gui: {
            enabled: false,
          },
        },
        exporting: {
          enabled: false,
        },
        title: {},
        navigator: {
          enabled: false,
          height: 0,
        },

        series: [
          {
            enableMouseTracking: false,
            color: "#6FB0FB",
            lineWidth: 2,
            data: myData,
            marker: { enabled: false },
            tooltip: {
              enabled: false,
            },
          },
        ],
      };
      $("#container").highcharts("StockChart", options);
    },
    updateDataChart(data) {
      data;
    },
    updateZoom(zoomRate) {
      const vm = this;
      const chart = $("#container").highcharts();
      const begin = vm.lineData[vm.lineData.length - zoomRate].x;
      const end = vm.lineData[vm.lineData.length - 1].x + 1000 * 60 * 60;
      chart.xAxis[0].setExtremes(begin, end);
      chart.xAxis[0].removePlotLine("plot-x-1");
      chart.xAxis[0].removePlotLine("plot-x-2");
    },
    onZoomOut() {
      if (
        this.currentZoomRate < this.lineData.length &&
        this.currentZoomRate + 15 <= this.lineData.length
      ) {
        this.currentZoomRate = this.currentZoomRate + 15;
        this.updateZoom(this.currentZoomRate);
      }
    },
    onZoomIn() {
      if (
        this.currentZoomRate < this.lineData.length &&
        this.currentZoomRate > 30 &&
        this.currentZoomRate - 15 <= this.lineData.length
      ) {
        this.currentZoomRate = this.currentZoomRate - 15;
        this.updateZoom(this.currentZoomRate);
      }
    },
    onResetZoom() {
      const zoomRate = this.lineData.length > 60 ? 60 : this.lineData.length;
      this.currentZoomRate = zoomRate;
      const chart = $("#container").highcharts();
      const vm = this;
      const begin = vm.lineData[vm.lineData.length - zoomRate].x;
      const end = vm.lineData[vm.lineData.length - 1].x + 1000 * 60 * 60;
      chart.xAxis[0].setExtremes(begin, end);
      this.updateZoom(zoomRate);
    },
  },
};
</script>
<style lang="scss" scoped>
.main-chart {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  .zoom-options {
    widows: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 8px;
    position: absolute;
    bottom: 10px;

    >div {
      min-width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      cursor: pointer;
      padding: 4px;
    }
  }
}
</style>
<style lang="scss">
.plotLine-y {
  // background-color: #ff646c !important
  // transition: all 0.4s ease;
  // height: 20px;
  // width: 100px;
  // background: white;
  // color: black;
  // display: flex;
  // align-content: center;
  // justify-content: center;
  // position: relative;
  // padding-right: 10px;
  // font-size: 14px;
  // line-height: 20px;
  // font-weight: bold;
  // color: #333;
  // padding: 2px 6px;

  // &::before {
  //   content: "";
  //   position: absolute;
  //   width: 0;
  //   height: 0;
  //   border-top: 10px solid transparent;
  //   border-bottom: 10px solid transparent;
  //   border-right: 10px solid white;
  //   left: -10px;
  //   top: 0;
  // }
}

.plotLine-x {
  display: flex;
  flex-direction: row;
  position: relative;
  font-size: 12px;

  &.result-left {
    transform: rotate(-180deg);

    .image {
      height: 30px;
      width: 30px;
      background: rgba(255, 100, 108, 0.3);
      border: 1px solid #ff646c;
      border-radius: 50%;
      position: absolute;
      bottom: -13px;
      right: -35px;
    }
  }

  &.bet-time-remaining {
    height: 30px;
    width: 30px;
    transform: rotate(-90deg);
    right: 3px;
    bottom: 2px;

    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      color: white;
      border: 1px solid #ffffff;
      border-radius: 50%;
    }
  }
}
</style>
