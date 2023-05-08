<template>
  <div class="lg:relative mt-6 bet-buy-sell-container">
    <div class="button-container">
      <div :disabled = "isDisabled" @click="bet('buy')"  :class="`btn_bet buy`">
        <i class="material-icons">arrow_upward </i>
        <div class="title">HIGHER</div>
      </div>
      <div @click="bet('sell')" class="mt-2" :class="`btn_bet sell`">
        <i class="material-icons">arrow_downward</i>
        <div>LOWER</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isDisabled : false
    }
  },
  name: "BetBuySell",
  props: ["betAmount", "CSBUY", "CSSELL"],
  methods: {
    bet(type) {
      this.$emit("betType", type);
    },

  },
};
</script>

<style lang="scss" scoped>
.bet-buy-sell-container {
  display: flex;
  font-weight: bold;
  font-size: 18px;
  .progress-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
    .progress {
      height: 100%;
      width: 50%;
      border-radius: 4px;
      .progress-buy {
        background: #0fff50;
      }
      .progress-sell {
        background: red;
      }
    }
  }
  .button-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    .btn_bet {
      height: 108px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-direction: column;
      color: white;
      border-radius: 4px;
      &.buy {
        background: rgb(44, 172, 64);
      }
      &.sell {
        background: #db4931;
      }
    }
  }
}
</style>
