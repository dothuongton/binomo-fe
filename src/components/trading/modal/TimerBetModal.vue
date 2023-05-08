<template>
  <div
    class="relative z-10 modal-container"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity bottom-0"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end sm:items-center justify-end min-h-full p-4 text-center sm:p-0"
      >
        <div
          class="fixed bottom-0 rounded-lg text-left overflow-hidden shadow-xl transform transition-all modal-width"
        >
          <div class="title">
            <span>Thời gian</span>
            <i class="material-icons" @click="hide"> close </i>
          </div>
          <div class="title-timer">1-5 phút</div>
          <div class="timer-col col">
            <div
              class="hydrated"
              v-for="(time, index) in plusTimeArray"
              :key="'plusTime' + index"
              @click="chooseTime(time)"
            >
              <span class="analytics-time">{{ time }}</span>
            </div>
          </div>
          <div class="title-timer">15-60 phút</div>
          <div class="timer-col col">
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
  </div>
</template>

<script>
export default {
  name: "TimerBetModal",
  props: ["plusTimeArray", "roundTimeArray"],
  methods: {
    chooseTime(time) {
      this.$emit("chooseTime", time);
    },
    hide() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  .modal-width {
    width: calc(100vw - 160px);
    background: dimgray;
    height: 30vh;
    color: white;
    .title {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      padding: 15px 30px;
      border-bottom: 2px solid white;
      i {
        cursor: pointer;
      }
    }
    .title,
    .title-timer {
      font-weight: bold;
    }
    .title-timer {
      font-size: 14px;
      padding: 10px 30px;
    }
    .timer-col {
      display: flex;
      gap: 10%;
      padding: 0 30px;
      .hydrated {
        padding: 10px 30px;
        background: grey;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
}
</style>
