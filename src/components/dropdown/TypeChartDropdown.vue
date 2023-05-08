<template>
  <div class="time-chart-button hidden" v-click-outside="hideDropdown">
    <div class="button" @click="showDropdown" v-show="isShow">
      <span class="material-icons">show_chart</span>
    </div>
    <div class="dropdown" v-if="isShowDropdown">
      <div class="title">
        <div class="context">Loại biểu đồ</div>
        <span class="close material-icons" @click="hideDropdown">close</span>
      </div>
      <div
        class="dropdown-item"
        v-for="option in options"
        :key="option.icon"
        @click="selectOption(option.icon)"
      >
        <i class="material-icons">{{ option.icon }}</i>
        <span class="chart-name"> {{ option.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "TypeChartDropdown",
  props: ["isShow"],
  data() {
    return {
      isShowDropdown: false,
      options: [
        { icon: "filter_hdr", name: "Núi" },
        { icon: "show_chart", name: "Đường" },
        { icon: "settings_input_component", name: "Nến" },
        { icon: "waterfall_chart", name: "Thang" },
      ],
    };
  },
  directives: {
    ClickOutside,
  },
  created() {},
  methods: {
    hideDropdown: function () {
      this.isShowDropdown = false;
    },
    showDropdown: function () {
      this.isShowDropdown = true;
    },
    selectOption(option) {
      this.$emit("onChartTypeChange", option);
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
  width: 40px;
  height: 40px;
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
      max-width: 200px;
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
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    // background-color: #727272;
    font-weight: bold;
    color: white;
  }
  .chart-name {
    margin-left: 4px;
  }
}
</style>
