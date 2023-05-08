<template>
  <div
    class="transaction-check"
    id="transaction-check"
    v-click-outside="hidePopup"
  >
    <div>
      <div
        class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-success border border-solid border-success"
        @click="showPopup"
        v-if="!isUseFilter"
      >
        <span class="ml-2 text-base text-success">Tra soát</span>
      </div>
      <div
        v-else
        class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base border border-solid border-success gap-4"
      >
        <span class="ml-2 text-base">{{ from }} = {{ to }}</span>
        <span class="close material-icons" @click="deleteConfig">close</span>
      </div>
    </div>
    <div class="popup-container" id="popup-container" v-if="isShowPopup">
      <div class="title">
        <div>Tra soát theo thời gian</div>
        <span class="close material-icons" @click="hidePopup">close</span>
      </div>
      <div class="date-range">
        <div class="from-date">
          <vs-input
            type="date"
            v-model="fromDate"
            label="Từ ngày"
            :max="toDate"
          />
        </div>
        <div class="to-date">
          <vs-input
            type="date"
            v-model="toDate"
            label="Đến ngày"
            :min="fromDate"
          />
        </div>
      </div>
      <div v-if="currentRouter" class="time-range">
        <div class="from-time">
          <vs-input type="time" v-model="fromTime" label="Từ giờ" />
        </div>
        <div class="to-time">
          <vs-input type="time" v-model="toTime" label="Đến giờ" />
        </div>
      </div>
      <div class="confirm">
        <vs-button @click="onConfirm"> Xem </vs-button>
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import moment from "moment";

export default {
  name: "TransactionCheckPopup",
  props: {
    config: { type: Object },
  },
  data() {
    return {
      fromDate: null,
      toDate: null,
      fromTime: null,
      toTime: null,
      isShowPopup: false,
      isUseFilter: false,
    };
  },
  directives: {
    ClickOutside,
  },
  created() {
    this.fromDate = moment(new Date()).format("YYYY-MM-DD");
    this.toDate = moment(new Date()).format("YYYY-MM-DD");
    this.fromTime = "00:00";
    this.toTime = "23:59";
  },
  computed: {
    currentRouter(){
      if(this.$router.currentRoute.name == "list-history-deposit"){
        return true
      }
      return false
    },
    from() {
      return moment(this.fromDate + " " + this.fromTime).format(
        "YYYY-MM-DD HH:MM"
      );
    },
    to() {
      return moment(this.toDate + " " + this.toTime).format("YYYY-MM-DD HH:MM");
    },
  },
  methods: {
    showPopup() {
      this.isShowPopup = true;
    },
    hidePopup() {
      this.isShowPopup = false;
    },
    onConfirm() {
      this.isUseFilter = true;
      this.hidePopup();
      this.$emit("onFilterData", {
        from: this.from,
        to: this.to,
      });
      if(this.$router.currentRoute.name != "list-history-deposit"){
        this.$emit("onFilterDate",{
          from: this.fromDate,
          to: this.endDate
        })
      }
    },
    deleteConfig() {
      this.isUseFilter = false;
      this.hidePopup();
      this.$emit("onClearFilter");
    },
  },
};
</script>

<style lang="scss" scoped>
.transaction-check {
  position: relative;
  z-index: 99999;
  .popup-container {
    position: absolute;
    top: 100%;
    left: 0;
    width: max-content;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(40, 199, 111);
    border-radius: 4px;
    background: black;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .date-range,
    .time-range {
      display: flex;
      gap: 8px;
    }
    .confirm {
      display: flex;
      justify-content: flex-end;
    }
    .title {
      padding: 5px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid white;
      padding-bottom: 10px;
    }
  }
}
</style>
