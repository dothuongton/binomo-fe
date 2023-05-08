<template>
  <div>
    <vs-popup
      class="orderBet hide-header-close"
      title=" "
      :active.sync="isOpenOrderBetPopup"
      @click.stop=" isOpenOrderBetPopup = false"
    >
      <div class="grid grid-cols-1 gap-y-3 py-3 mx-5">
        {{$t('Order details')}}
        <div class="flex justify-between">
          <div>{{$t('Product')}}</div>
          <div>BTC/USDT</div>
        </div>
        <div class="flex justify-between">
          <div>{{ $t('Type') }}</div>
          <div class="uppercase" :class="useDataOrderBet.type == 'buy' ? 'green' : 'red'">{{$t(`${useDataOrderBet.type}`)}}</div>
        </div>
        <div class="flex justify-between">
          <div>{{$t('Bet rate')}}</div>
          <div class="text-yellow-light">90%</div>
        </div>
        <div class="flex justify-between">
          <div>{{ $t('Price') }}</div>
          <div class="red">{{usePriceBO}}</div>
        </div>
        <div class="flex justify-between">
          <div>{{$t('Amount ')}}</div>
          <div class="green">đ{{useDataOrderBet.betAmount}}</div>
        </div>
        <div class="flex justify-between mx-10">
          <vs-button class="bg-red max-w-1/5" @click.prevent = "handleCancel">{{ $t('Cancel') }}</vs-button>
          <vs-button class="primary max-w-1/5" @click.prevent = "handleConfirm">{{ $t('Confirm') }}</vs-button>
        </div>
      </div>
    </vs-popup>
  </div>
</template>
<script>

export default {
  props: ["isOpenOrderBetPopup","useDataOrderBet","usePriceBO","confirmBetOrder"],
  data() {
    return {
      popupOrderBet: false
    }
  },
  methods:{
    handleCancel(){
      this.$emit("update:isOpenOrderBetPopup", false)
    },
    handleConfirm(){
      // this.$store.commit("SET_IS_CONFIRM_ORDER_BET", true)
      this.$emit("update:confirmBetOrder", true)

      this.$emit("update:isOpenOrderBetPopup", false)

    }

  }
};
</script>
<style lang="scss" scoped>
.popupOrderBet{
  width: 200px;
  height: 200px;
  background: red;

}
.orderBet .vs-popup {
  width: 390px !important;

}
.red{
  color: red;
}
.green{
  color: greenyellow;
}

.vs-popup-header {
  display: none !important;
}

.vs-popup-close {
  display: none !important;
}

</style>
