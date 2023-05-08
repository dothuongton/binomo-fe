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
            <span>Đầu tư</span>
            <i class="material-icons" @click="hide"> close </i>
          </div>
          <div class="price-col col mt-10">
            <div
              class="hydrated"
              v-for="(price, index) in betPriceArray"
              :key="'price' + index"
              @click="choosePrice(price)"
            >
              <span class="analytics-time">{{ price }} $</span>
            </div>
          </div>
          <div class="mt-10 price-col input-col">
            <input
              class="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter the amount"
              v-model="priceInput"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceBetModal",
  props: ["betAmount"],
  data() {
    return {
      betPriceArray: [5, 10, 20, 50, 100],
      priceInput: this.betAmount,
    };
  },
  watch: {
    priceInput: {
      handler(val) {
        if (val) {
          this.choosePrice(val, true);
        }
      },
    },
  },
  methods: {
    choosePrice(price, flag = false) {
      this.$emit("choosePrice", price, flag);
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
    font-weight: bold;
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
    .price-col {
      display: flex;
      gap: 10%;
      padding: 0 30px;
      .hydrated {
        padding: 10px 50px;
        background: grey;
        border-radius: 4px;
        cursor: pointer;
        color: black;
        font-size: 16px;
      }
      &.input-col {
        width: 40%;
      }
    }
  }
}
</style>
