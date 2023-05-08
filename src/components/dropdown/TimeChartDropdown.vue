<template>
  <div class="time-chart-button" v-click-outside="hideDropdown">
    <div class="button" @click="showDropdown" v-show="isShow">
      <span>{{ currentValue.value + currentValue.unit }}</span>
    </div>
    <!-- <div class="dropdown" v-if="isShowDropdown">
      <div class="title">
        <div class="context">Time frame</div>
        <span class="close material-icons" @click="hideDropdown">close</span>
      </div>
      <div
        class="dropdown-item"
        v-for="option in options"
        :key="option.value + option.unit"
        @click="selectOption(option)"
      >
        <span class="context"> {{ option.value }}{{ option.unit }} </span>
      </div>
    </div> -->
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "TimeChartDropdown",
  props: ["isShow", "timeTick"],
  data() {
    return {
      currentValue: null,
      isShowDropdown: false,
      options: [
        // { value: 5, type: "seconds", unit: "s" },
        // { value: 15, type: "seconds", unit: "s" },
        { value: 30, type: "seconds", unit: "s" },
        // { value: 1, type: "minutes", unit: "m" },
        // { value: 5, type: "minutes", unit: "m" },
        // { value: 15, type: "minutes", unit: "m" },
        // { value: 30, type: "minutes", unit: "m" },
      ],
    };
  },
  directives: {
    ClickOutside,
  },
  created() {
    this.currentValue = this.timeTick;
  },
  methods: {
    hideDropdown: function () {
      this.isShowDropdown = false;
    },
    showDropdown: function () {
      this.isShowDropdown = true;
    },
    selectOption(option) {
      this.currentValue = option;
      this.$emit("onChartTimeTickChange", option);
      this.hideDropdown();
    },
  },
};
</script>
<style lang="scss" scoped>
.time-chart-button {
  width: max-content;
  position: relative;
  z-index: 1;
  min-width: 40px;
  height: 40px;
  border: 0 !important;
  .dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #2a2b30;
    z-index: 2;
    padding: 8px 6px;
    border: 1px solid #54565f;
    border-radius: 4px;
    right: unset;
    left: 0;
    bottom: 115%;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 206px;
      height: 40px;
      .context {
        font-size: 16px;
        font-weight: bold;
        padding-left: 8px;
      }
      .close {
        font-size: 24px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    .dropdown-item {
      display: flex;
      padding: 0 8px;
      height: 40px;
      cursor: pointer;
      align-items: center;
      transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      &:hover {
        background: #3e3f45;
        border-radius: 4px;
      }
    }
  }

  .button {
    width: 40px;
    height: 40px;
    min-width: 40px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    // background-color: #727272;
    font-weight: bold;
    color: white;
    border: 1px solid white;
  }
}
</style>
