<template>
  <div class="tab-container-mobile mr-2" v-click-outside="hideDropdown" style="display: none;">
    <div class="dropdown hidden" >
      <div class="button"  @click="showDropdown">
        <span class="context">{{ currentTabName }}</span>
      </div>
      <div class="dropdown-list" v-if="isShowDropdown">
        <div
          class="dropdown-item"
          v-for="(item, index) in tabs"
          :key="index"
          :class="{ active: currentId === item.id }"
          @click="changeTab(item)"
        >
          <span class="context">
            {{ item.title }}
          </span>
        </div>
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
import ClickOutside from "vue-click-outside";

export default {
  name: "SwitchTabMobile",
  directives: {
    ClickOutside,
  },
  data() {
    return {
      isShowDropdown: false,
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
    currentTabName() {
      const tab = this.tabs.find((item) => item.id == this.currentId);
      return tab ? tab.title : "";
    },
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
      this.hideDropdown();
    },
    showDropdown() {
      this.isShowDropdown = true;
    },
    hideDropdown() {
      this.isShowDropdown = false;
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
.tab-container-mobile {
  margin-left: 15px;
  width: max-content;
  position: relative;
  z-index: 1;
  min-width: 40px;
  height: 40px;
  border: 0 !important;
  .dropdown-list {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #2a2b30;
    z-index: 2;
    padding: 8px 6px;
    border: 1px solid #54565f;
    border-radius: 4px;
    top: 100%;
    left: 0;

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
    // width: 40px;
    // padding-left: 20px;
    // padding-right: 20px;
    margin-left: -10px;
    // margin-right: 5px;
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
    color: #110e01;
    border: 1px solid white;
    background-color: #eec40d;

  }
  .button:hover{
    background-color: #eec40d;
  }
}
</style>
