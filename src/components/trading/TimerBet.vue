<template>
  <div class="timer-bet-container mb-4">
    <div class="timer-bet-main">
      <div class="timer-bet" @click="toggleTimerModal" v-click-outside="hide">
        <div class="title">Expiration</div>
        <div class="flex">
          <i class="material-icons mr-1">access_time </i>
          <div class="value">{{ chosenTime ? chosenTime : defaultTime }}</div>
        </div>
      </div>
      <div class="number-control flex flex-col">
        <div class="plus" @click="plusTime">+</div>
        <div class="minus" @click="minusTime">-</div>
      </div>
    </div>
    <div class="timer-modal-container" v-if="timerModalFlag">
      <div class="col-12 timer-modal-title">Expiration Time</div>
      <div class="timer-modal">
        <div class="timer-col col first">
          <div class="flex justify-center">
            <b>{{$t("Profit")}}</b>
            <div class="profit-number">95%</div>
          </div>
          <div class="flex justify-center mt-2 time-title">Time</div>
          <div
            class="hydrated"
            v-for="(time, index) in plusTimeArray"
            :key="'plusTime' + index"
            @click="chooseTime(time)"
          >
            <span class="analytics-time">{{ time }}</span>
          </div>
        </div>
        <div class="timer-col col">
          <div class="flex justify-center">
            <b>{{$t("Profit")}}</b>
            <div class="profit-number">95%</div>
          </div>
          <div class="flex justify-center mt-2 time-title">Time</div>
          <div
            class="hydrated"
            v-for="(time, index) in roundTimeArray"
            :key="'roundTime' + index"
            @click="chooseTime(time)"
          >
            <span class="analytics-time">{{ time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import TimerBetModal from "@/components/trading/modal/TimerBetModal";
export default {
  name: "TimerBet",
  components: { TimerBetModal },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      timerModalFlag: false,
      defaultTime: this.padTo2Digits(
        new Date().getHours(),
        new Date().getMinutes() + 1
      ),
      roundTimeArray: [],
      plusTimeArray: [],
      chosenTime: "",
    };
  },
  computed: {},
  created() {
    setInterval(this.getNow, 1000);
  },
  watch: {
    defaultTime: {
      handler(val) {
        this.$emit("chooseTime", {
          valueTime: val,
          currentSession: true,
        });
        if (this.chosenTime && (val >= this.chosenTime || val === "00:00")) {
          this.chosenTime = val;
        }
      },
      immediate: true,
    },
    chosenTime: {
      handler(val) {
        if (val) {
          this.$emit("chooseTime", {
            valueTime: val,
            currentSession: val === this.defaultTime,
          });
        }
      },
    },
  },
  methods: {
    plusTime() {
      if (!this.chosenTime) {
        this.chosenTime = this.defaultTime;
      }
      let arrayTime = this.chosenTime.split(":");
      this.chosenTime = this.padTo2Digits(
        Number(arrayTime[0]),
        Number(arrayTime[1]) + 1
      );
    },
    minusTime() {
      if (!this.chosenTime) {
        this.chosenTime = this.defaultTime;
      }
      if (this.chosenTime !== this.defaultTime) {
        let arrayTime = this.chosenTime.split(":");
        if (arrayTime[1] !== "00") {
          this.chosenTime = this.padTo2Digits(
            Number(arrayTime[0]),
            Number(arrayTime[1]) - 1
          );
        }
      }
    },
    padTo2Digits(hours, minutes) {
      let convertMinutes = minutes;
      let convertHours = hours;
      if (minutes >= 60) {
        convertMinutes = 0;
        convertHours = hours + 1;
      }
      if (hours === 24) {
        convertHours = 0;
      }
      return (
        String(convertHours).padStart(2, "0") +
        ":" +
        String(convertMinutes).padStart(2, "0")
      );
    },
    getNow() {
      let date = new Date();
      this.defaultTime = this.padTo2Digits(
        date.getHours(),
        date.getMinutes() + 1
      );
      this.roundTimeArray = Array.from({ length: 4 }, (_, i) =>
        this.padTo2Digits(date.getHours() + 1, i * 15)
      );
      this.plusTimeArray = Array.from({ length: 5 }, (_, i) =>
        this.padTo2Digits(date.getHours(), date.getMinutes() + i + 1)
      );
    },
    toggleTimerModal() {
      this.timerModalFlag = true;
    },
    chooseTime(time) {
      this.chosenTime = time;
      this.timerModalFlag = false;
    },
    hide() {
      this.timerModalFlag = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.timer-bet-container {
  position: relative;
  .timer-bet-main {
    height: 56px;
    text-align: left;
    cursor: pointer;
    display: flex;
    .timer-bet {
      padding-left: 16px;
      background-color: #373e51;
      width: 95%;
      margin-right: 2px;
      &:hover {
        background: #41485c;
        i {
          color: white;
        }
      }
      .title {
        margin: 4px 0 2px 0;
      }
      .value {
        color: white;
      }
    }
    .number-control {
      text-align: center;
      cursor: pointer;
      .plus {
        margin-bottom: 2px;
      }
      .plus,
      .minus {
        height: 28px;
        padding: 0 4px;
        background-color: #373e51;
        &:hover {
          background: #41485c;
        }
      }
    }
  }
  .timer-modal-container {
    position: absolute;
    top: 0;
    left: -284px;
    background-color: #1c2030;
    color: white;
    @media only screen and (max-width:990px) {
      .timer-modal{
        position: absolute ;
        bottom: 38px;
        top: -320px;
        left: 285px;
        background-color: #1c2030;
        z-index: 10;

        // background-color: red;
      }
      
    }
    .timer-modal-title {
      padding: 8px;
      background: #262c3b;
      text-transform: uppercase;
      font-weight: bold;
    }
    .timer-modal {
      padding: 8px;
      display: flex;
      font-size: 12px;
      .profit-number {
        margin-left: 2px;
        background: #2cac40;
        padding: 0 2px;
        font-weight: bold;
        border-radius: 2px;
      }
      .time-title {
        color: #8c8e96;
        font-size: 10px;
      }
      .timer-col {
        .hydrated {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          padding: 8px 8px;
          margin: 4px;
          cursor: pointer;
          min-width: 122px;
          border-top: 1px solid #8c8e96;
          &:hover {
            background: #363c4f;
          }
        }
      }
    }
  }
}
</style>
