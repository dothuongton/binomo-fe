<template>
  <div class="price-bet-container mb-4">
    <div class="price-bet-main">
      <div class="price-bet" @click="openBetPriceModal" v-click-outside="hide">
        <div class="title">
          <label for="amount-bet">Amount</label>
          <div class="flex">
            <i class="material-icons mr-1">attach_money</i>
            <input type="number" id="amount-bet" v-model="newBetAmount" />
          </div>
        </div>
      </div>
      <div class="number-control flex flex-col">
        <div class="plus" @click="plusPrice">+</div>
        <div class="minus" @click="minusPrice">-</div>
      </div>
    </div>
    <div class="price-modal-container" v-if="priceModalFlag">
      <div class="price-modal">
        <div class="price-col col first">
          <div
            class="hydrated"
            v-for="(price, index) in amountBetPreset"
            :key="'plusPrice' + index"
            @click="choosePrice(price)"
          >
            {{index}}
            <span class="analytics-price">đ {{ price }}.00</span>
          </div>
          <div class="max-bet-amount" @click="choosePrice(maxBetAmount)">
            <div class="title">Available Balance</div>
            <div class="max-amount-bet"> {{ maxBetAmount }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import PriceBetModal from "@/components/trading/modal/PriceBetModal";
export default {
  name: "PriceBet",
  components: { PriceBetModal },
  props: ["betAmount", "maxBetAmount"],
  directives: {
    ClickOutside,
  },
  data() {
    return {
      priceModalFlag: false,
      newBetAmount: this.betAmount,
      amountBetPreset: [10, 1, 2, 5, 25, 50],
    };
  },
  watch: {
    newBetAmount: {
      handler(val) {
        if (Number(val) > 0 && Number(val) <= Number(this.maxBetAmount)) {
          this.$emit("choosePrice", Number(val));
        }
      },
    },
  },
  methods: {
    openBetPriceModal() {
      this.priceModalFlag = true;
    },
    hide() {
      this.priceModalFlag = false;
    },
    choosePrice(price) {
      this.newBetAmount = Number(price);
    },
    plusPrice() {

      this.newBetAmount =
        Number(this.newBetAmount) + 1 >= Number(this.maxBetAmount)
          ? Number(this.newBetAmount) +1
          : Number(this.newBetAmount) + 1;
    },
    minusPrice() {
      this.newBetAmount =
        Number(this.newBetAmount) - 1 < 0
          ? Number(this.newBetAmount)
          : Number(this.newBetAmount) - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.price-bet-container {
  position: relative;
  .price-bet-main {
    height: 56px;
    text-align: left;
    cursor: pointer;
    display: flex;
    .price-bet {
      padding-left: 16px;
      background-color: #373e51;
      width: 95%;
      margin-right: 2px;
      &:focus-within {
        background: #1b2130;
        border: 1px solid #373e51;
      }
      .title {
        margin: 4px 0 2px 0;
        #amount-bet {
          width: 80%;
          outline: none;
          border: none;
          display: block;
          line-height: 1.2em;
          color: white;
          cursor: pointer;
        }
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
  .price-modal-container {
    position: absolute;
    top: 0;
    left: -153px;
    background-color: #1c2030;
    color: white;
    .price-modal-title {
      padding: 8px;
      background: #262c3b;
      text-transform: uppercase;
      font-weight: bold;
    }
    @media  only screen and (max-width:998px){
      .price-modal{
        position: absolute;
        right: -300px;
        bottom: 0px;
        background: #262c3b;
        z-index: 10;
      }
    }
    .price-modal {
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
      .price-title {
        color: #8c8e96;
        font-size: 10px;
      }
      .price-col {
        .hydrated {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          padding: 8px 8px;
          margin: 0 4px;
          cursor: pointer;
          min-width: 122px;
          border-bottom: 1px solid #8c8e96;
          &:hover {
            background: #363c4f;
          }
        }
        .max-bet-amount {
          text-align: center;
          margin: 0 4px;
          cursor: pointer;
          padding: 8px 8px;
          &:hover {
            background: #363c4f;
          }
        }
      }
    }
  }
}
</style>
