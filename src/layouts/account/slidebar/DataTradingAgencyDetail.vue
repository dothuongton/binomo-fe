<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>CHI TIẾT GIAO DỊCH CỦA ĐẠI LÝ</h4>
      <feather-icon
        icon="XIcon"
        @click.stop="isSidebarActiveLocal = false"
        class="cursor-pointer"
      ></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>
    <VuePerfectScrollbar>
      <div
        class="headerContent w-full flex lg:flex-row flex-col justify-between items-center mb-4"
      >

        <div class="block items-center mb-16 mt-5 ml-10">
          <div class="white mb-5">
            Email: {{ useCurrentEmailAgencyTrading }}
          </div>
          <div class="white">
            Tổng tiền giao dịch: ${{ formatPrice(totalTrading, 2) }}
          </div>

          <div class="white text-success">
            Tổng thắng: ${{ formatPrice(totalWin, 2) }}
          </div>
          <div class="white text-danger">
            Tổng thua: ${{ formatPrice(totalLoss, 2) }}
          </div>
        </div>
        <div class="flex flex-col relative mr-10">
          <div class="dateRange flex">
            <datepicker
              class="mr-5"
              v-model="startDate"
            ></datepicker>
            <span class="mt-3">-</span>
            <datepicker
              class="ml-5 mr-10"
              v-model="endDate"
            ></datepicker>
            <vs-button color="#19C386" type="filled" @click="getSeachOrderDate()">
              {{ $t('Search') }}
            </vs-button>
          </div>
        </div>


      </div>

      <div class="table-responsive mt-20 tableTradeHis relative">
        <vs-table

          class="table table-bordered w-full"
          :max-items="descriptionItems[0]"
          pagination
          :data="useDataTradingAgencyDetailLocal"
          description
          :description-items="descriptionItems"
          description-title="Registries"
          description-connector="of"
          description-body="Pages"
        >
          <template slot="thead">
            <template>
              <th>OrderID</th>
              <th>{{ $t('Asset') }}</th>
              <th>{{ $t('Start time') }}</th>
              <th>{{ $t('Option') }}</th>
              <th>{{ $t('Selected') }}</th>
              <th>{{ $t('Open price') }}</th>
              <th>{{ $t('Close price') }}</th>
              <th>{{ $t('Value') }}</th>
              <th>{{ $t('Pay') }}</th>
            </template>
          </template>
          <template slot-scope="{data}">
            <tr :key="indextr" v-for="(tr, indextr) in data">
              <td class="text-center">
                {{ tr.oss }}
              </td>
              <td class="text-center">
                {{ tr.cu }}
              </td>
              <td class="text-center w-32">
                {{ formatDateOrder(tr.d) }}
              </td>
              <td class="text-center">30 {{ $t('Seconds') }}</td>
              <td class="text-center" v-if="tr.bs == 'buy'">
                <feather-icon
                  class="text-success"
                  icon="TrendingUpIcon"
                  svgClasses="w-4 h-4"
                />
                {{ $t('BUY') }}
              </td>
              <td class="text-center" v-else>
                <feather-icon
                  class="text-danger"
                  icon="TrendingDownIcon"
                  svgClasses="w-4 h-4"
                />
                {{ $t('SELL') }}
              </td>
              <td class="text-center">${{ tr.o }}</td>
              <td class="text-center">${{ tr.c }}</td>
              <td class="text-center">${{ tr.ab }}</td>
              <td class="text-center text-success" v-if="tr.aw > 0">
                +${{ formatPrice(tr.aw, 2) }}
              </td>
              <td class="text-center text-danger" v-else>-${{ formatPrice(tr.al, 2) }}</td>
            </tr>
          </template>
        </vs-table>
      </div>
    </VuePerfectScrollbar>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import AuthenticationService from "@/services/AuthenticationService";
import Datepicker from "vuejs-datepicker";
import vSelect from "vue-select";
import moment from "moment";

export default {

  props: {
    useSidebarAgencyDataTradingActive: {
      type: Boolean,
    },
    data: {
      type: Object,
      default: () => {
      },
    },
    useDataTradingAgencyDetail: {
      type: Array,
      default: () => {
      },
    },
    useCurrentEmailAgencyTrading: {
      type: String,
      required: true
    }
  },
  watch: {

    useDataTradingAgencyDetail: {
      handler(newVal) {
        if (newVal) {
          this.useDataTradingAgencyDetailLocal = newVal
        }
      },
      deep: true
    },
    useDataTradingAgencyDetailLocal: {
      handler(newVal) {
        if (newVal) {
          this.totalTrading = newVal.reduce((a, b) => a + b.ab, 0)
          this.totalWin = newVal.reduce((a, b) => a + b.aw, 0)
          this.totalLoss = newVal.reduce((a, b) => a + b.al, 0)
        }
      },
      deep: true
    }
  },
  data() {
    return {
      // formatDate: "YYYY-MM-DD",
      startDate: null,
      endDate: null,
      descriptionItems: [5, 10, 15],
      dataHisOrder: [],
      useDataTradingAgencyDetailLocal: [],
      totalTrading: 0,
      totalLoss: 0,
      totalWin: 0
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.useSidebarAgencyDataTradingActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebarAgencyDataTrading");
        }
      },
    },
  },
  methods: {
    formatDateOrder(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY HH:mm:ss");
      }
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    getSeachOrderDate() {
      let obj = {
        s: this.formatDate(this.startDate),
        e: this.formatDate(this.endDate),
      }
      AuthenticationService.getSearchHisOrderAdmin(this.useCurrentEmailAgencyTrading, obj)
        .then(res => {
          this.useDataTradingAgencyDetailLocal = res.data.data
        })

    },
    formatDateHis(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },

    formatDateAff(value) {
      if (value) {
        return moment(String(value)).format("MM-YYYY");
      }
    },


    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

  },


  created() {
    const today = new Date()
    let last_week = new Date(today)
    last_week.setDate(last_week.getDate() - 7)
    this.startDate = last_week.toJSON().slice(0, 10)
    this.endDate = today.toJSON().slice(0, 10)
  },
  components: {
    VuePerfectScrollbar,
    Datepicker,
    "v-select": vSelect,
  },
};
</script>
<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 99999;
  }

  ::v-deep .vs-sidebar {
    z-index: 99999;
    max-width: 80vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.tableTradeHis {
  max-height: calc(100vh - 350px);
  overflow-y: auto;
}

</style>

<style>
.theme-dark .apexcharts-canvas .apexcharts-pie-series path {
  stroke: transparent !important;
}

.content .inputGroup input {
  background: #fff;
  color: #545454;
}

.dateRange input {
  background: transparent;
  border-bottom: 1px solid #fff !important;
  border-radius: 0 !important;
}
</style>
