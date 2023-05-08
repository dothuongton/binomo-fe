<template>
  <div class="tab-container mr-2">
    <div class="tab-main hidden">
      <div
        class="tab"
        v-for="(item, index) in tabs"
        :key="index"
        :class="{ active: currentId === item.id }"
        @click="changeTab(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <vs-popup
      title=""
      :active.sync="isOpenModalComingSoon"
      class="modal-coming-soon"
    >
      <div class="container">
        <span class="context">Coming Soon</span>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SwitchTab",
  data() {
    return {
      isOpenModalComingSoon: false,
      tabs: [
        {
          id: 1,
          title: "WB",
        },
        {
          id: 2,
          title: "WBPLUS",
        },
      ],
      currentId: 1,
    };
  },
  computed: {
    ...mapGetters("tab", ["getCoinTab"]),
  },
  created() {
    this.SET_COIN_TAB(this.tabs.find((data) => data.id === this.currentId));
  },
  methods: {
    ...mapMutations("tab", ["SET_COIN_TAB"]),
    changeTab(item) {
      // if (item.id == 2) {
      //   this.isOpenModalComingSoon = !this.isOpenModalComingSoon;
      //   return;
      // }
      this.currentId = item.id;
      this.SET_COIN_TAB(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-coming-soon {
  .container {
    display: flex;
    width: 300px;
    height: 100px;
    align-content: center;
    justify-content: center;
    .context {
      line-height: 100px;
    }
  }
}
.tab-main {
  display: flex;
  .tab {
    &.active {
      background-color: #eec40d;
      color: #000;
      border: 0;
    }
    background: #ffffff1f;
    border: 1px solid #dcdcdc;
    color: white;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    transition: 200ms;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    border-radius: 10px;
    padding: 12px 20px 14px !important;
    margin-left: 10px;
  }

  .tab:not(:disabled):hover,
  .tab:not(:disabled):focus {
    outline: 0;
    border: 0;
    color: #000;
    background: #eec40d;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  }

  .tab:disabled {
    filter: saturate(0.2) opacity(0.5);
    -webkit-filter: saturate(0.2) opacity(0.5);
    cursor: not-allowed;
  }
}
</style>
