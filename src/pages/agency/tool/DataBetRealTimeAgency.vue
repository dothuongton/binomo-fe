<!-- =========================================================================================
  Description: Data List - List View
  Item Name: Admin
  Author: Ares DN
  Author Telegram: @skydnz
========================================================================================== -->

<template>
  <div id="list-edit-result" class="data-list-container">

    <template>
      <div class="vx-col">
        <div class="mb-5">
          ***Dự đoán phiên:
          <br>
          <div class="font-bold uppercase text-normal ">
            =>    {{statusChart}}
          </div>
        </div>


        <div class="d-flex vx-row mt-5">
          <div class="vx-col w-full lg:w-1/2">
            <p>Marketing</p>
            <p class="mb-4">
              Marketing Cược BUY: <span class="mr-4 text-danger" style="font-size: 20px">$ {{ price_buy_mkt }}</span><br>
              Marketing Cược SELL: <span class="text-danger" style="font-size: 20px">$  {{ price_sell_mkt }}</span>
            </p>
            <table class="tbv">
              <tr>
                <th>Email</th>
                <th>Loại</th>
                <th>Mua/Bán</th>
                <th>Số Tiền Cược</th>
              </tr>
              <tr :data="tr" :key="indextr" v-for="(tr, indextr) in productsFake">
                <template v-if="tr.mkt == 1">
                  <td>{{ tr.e }}</td>
                  <td><p class="bet-type">{{ tr.sv }}</p></td>
                  <td>
                    <p class="bet-buy_sell" v-if="tr.bet == 'buy'">
                      <span class="text-success mr-2">MUA</span>
                      <feather-icon icon="TrendingUpIcon" svgClasses="w-5 h-5"/>
                    </p>
                    <p class="bet-buy_sell" v-else>
                      <span class="text-danger mr-2">BÁN</span>
                      <feather-icon icon="TrendingDownIcon" svgClasses="w-5 h-5"/>
                    </p>
                  </td>
                  <td>
                    <p class="bet-amount">
                      <IconCrypto style="width: 20px" coinname="usdt" color="color" format="svg" />
                      <font class="ml-2" color="#006c27">{{ formatPrice(tr.amount, 2) }}</font>
                    </p>
                  </td>
                </template>

              </tr>

            </table>
          </div>
          <div class="vx-col w-full lg:w-1/2">
            <p>Người chơi</p>
            <p class="mb-4">
              Người chơi Cược BUY: <span class="mr-4 text-danger" style="font-size: 20px">$ {{ price_play_buy }}</span><br>
              Người chơi Cược SELL: <span class="text-danger" style="font-size: 20px">$  {{ price_play_sell }}</span>
            </p>
            <table class="tbv">
              <tr>
                <th>Email</th>
                <th>Loại</th>
                <th>Mua/Bán</th>
                <th>Số Tiền Cược</th>
              </tr>
              <tr :data="tr" :key="indextr" v-for="(tr, indextr) in productsFake">
                <template v-if="tr.mkt == 0">
                  <td>{{ tr.e }}</td>
                  <td><p class="bet-type">{{ tr.sv }}</p></td>
                  <td>
                    <p class="bet-buy_sell" v-if="tr.bet == 'buy'">
                      <span class="text-success mr-2">MUA</span>
                      <feather-icon icon="TrendingUpIcon" svgClasses="w-5 h-5"/>
                    </p>
                    <p class="bet-buy_sell" v-else>
                      <span class="text-danger mr-2">BÁN</span>
                      <feather-icon icon="TrendingDownIcon" svgClasses="w-5 h-5"/>
                    </p>
                  </td>
                  <td>
                    <p class="bet-amount">
                      <IconCrypto style="width: 20px" coinname="usdt" color="color" format="svg" />
                      <font class="ml-2" color="#006c27">{{ formatPrice(tr.amount, 2) }}</font>
                    </p>
                  </td>
                </template>

              </tr>

            </table>
          </div>
        </div>

        <div id="list-history-exchange" class="data-list-container mt-20">

          <vs-prompt title="Export To Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel" accept-text="Export" @close="clearFields" :active.sync="activePrompt">
            <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
            <v-select v-model="selectedFormat" :options="formats" class="my-4" />
            <div class="flex">
              <span class="mr-4">Cell Auto Width:</span>
              <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
            </div>
          </vs-prompt>

        </div>
      </div>
    </template>
  </div>
</template>

<script>
import moment from "moment";

import _ from "lodash";
import AuthenticationService from "@/services/AuthenticationService";
export default {
  components: {
  },
  data() {
    return {
      items:"",
      whiteBlackList:[],
      startDate: "2000-10-21",
      endDate: new Date().toISOString().slice(0, 10),
      showDeleteMultiBt: true,
      activePrompt: false,
      selectedUser: [],
      fileName: "",
      formats:["xlsx", "csv", "txt"],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: ["Id", "Lợi nhuận", "Ngày tạo" ],
      headerVal: ["id", "profit_sys", "created_at" ],
      profitSysAll:[
        {
          "id": 471,
          "profit_sys": "505050",
          "created_at": "2022-11-24T09:57:05.000Z"
        }
      ],
      profitSysBreakBridge: 0,
      profitSysDaily: 0,
      AMOUNTBECAU_MIN: -30,
      AMOUNTBECAU_MAX: 400,
      PriceBOT: 0,
      checkOnOffBOT: true,
      checkOnOffAnGian: false,
      checkOnOffBOTGoTien: false,
      radioBC: '',
      productsFake: [
        {e: 'admin@gmail.com', uid: 'DS9OR0KGJS', sv: 'BTC/USDT', bet: 'buy', amount: '10' }
      ],
      itemsPerPage: 10,
      isMounted: false,

      countDown: 0,
      typeOder: 'Mở',

      price_buy: 0,
      price_sell: 0,
      price_buy_mkt: 0,
      price_sell_mkt: 0,
      price_total_mkt: 0,
      price_total: 0,

      price_play_buy: 0,
      price_play_sell: 0,
      attraction: 60,
      breakBridge: 0,
      range: _.range(60, 101, 1),
      onOffSwitch: false,
      onOffSwitchWhiteBlackList:false,
      emailWhiteBlackList:"",
      typeList: [
        {
          type: "whiteList",
        },
        {
          type: "blackList"
        }
      ],
      statusChart:""
    }
  },
  computed: {
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    products() {
      return this.productsFake
    },
    queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.productsFake.length
    }
  },

  methods: {

    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm:ss");
      }
    },
    reloadList(){
      this.showDeleteMultiBt = true
      let token = localStorage.getItem('token')
      this.$store.dispatch('setToken', token)
      let obj = {
        startDate: this.startDate,
        endDate: this.endDate
      }
      let queryString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
      AuthenticationService.getAllProfitSys(queryString)
        .then((resp) => {

          this.$vs.loading.close('#loading-corners > .con-vs-loading');

          if(!resp.data.success){
            localStorage.removeItem('token');
            this.$router.push('/login/login').catch(() => {})
          }else{
            this.profitSysAll = resp.data.data;
          }
        })
    },
    deleteMultiple(){
      let token = localStorage.getItem('token')
      this.$store.dispatch('setToken', token)

      if(this.selectedUser.length == 0){
        return this.$vs.notify({
          text:'Hãy chọn đối tượng cần xóa',
          color:'warning',
          iconPack: 'feather',
          icon:'icon-check'});
      }
      for(var i = this.selectedUser.length - 1; i >= 0 ;i--){
        let id = this.selectedUser[i]['id'];
        let obj = {
          id: id,
          val: 1
        }
        AuthenticationService.deleteExTrash(obj)
          .then((resp) => {
            if(!resp.data.success){
              localStorage.removeItem('token');
              this.$router.push('/login/login').catch(() => {})
            }
          })
        Vue.delete(this.productsFake, i)
      }
      this.selectedUser = []
      return this.$vs.notify({
        text:'Đã xóa thành công',
        color:'success',
        iconPack: 'feather',
        icon:'icon-check'});
    },
    exportToExcel() {
      // kiểm tra nếu chưa chọn đối tượng thình sẽ không hiện bản xuất file
      if(this.selectedUser.length == 0){
        return this.$vs.notify({
          title:'Xuất dữ liệu',
          text:'Vui lòng chọn nội dung để hoàn thành',
          color:'danger',
          iconPack: 'feather',
          icon:'icon-heart'});
      }
      import('@/vendor/Export2Excel').then(excel => {
        const list = this.selectedUser
        const data = this.formatJson(this.headerVal, list)
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat
        })
        this.clearFields()
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        // Add col name which needs to be translated
        // if (j === 'timestamp') {
        //   return parseTime(v[j])
        // } else {
        //   return v[j]
        // }

        return v[j]
      }))
    },
    clearFields() {
      this.fileName = ""
      this.cellAutoWidth = true
      this.selectedFormat = "xlsx"
    },
    changeAttraction(){
      if(this.onOffSwitch==true){
        let obj = {
          breakBridge: parseInt(this.breakBridge),
          attraction: this.attraction,
          onBreakBridge: true
        };
        AuthenticationService.sendConfigBreakWithPercent(obj).then((res) => {
          if(res.data.success == "true") {
            this.$vs.notify({
              text:'Thay đổi config thành công',
              color:'success',
              position:'top-center',
              iconPack: 'feather',
              icon:'icon-message-square'});
          }
        })
      }
    },
    sbAmountBeCauMin(){
      this.sendMessage({type: 'editGL', data: {type: 'WRITE_AMOUNT_NEGA_AMOUNT_BREAK_BRIDGE', AMOUNT: this.AMOUNTBECAU_MIN}});
      return this.$vs.notify({
        text:'Đã thay đổi thành '+this.AMOUNTBECAU_MIN,
        color:'success',
        position:'top-center',
        iconPack: 'feather',
        icon:'icon-message-square'});
    },

    sbAuto(){
      this.sendMessage({type: 'editGL',  data: {type: 'BTC_LESS'}});
      return this.$vs.notify({
        text:'Đã call auto',
        color:'success',
        position:'top-center',
        iconPack: 'feather',
        icon:'icon-message-square'});
    },

    sbAmountBeCauMax(){
      this.sendMessage({type: 'editGL', data: {type: 'WRITE_AMOUNT_MAX_BREAK_BRIDGE', AMOUNT: this.AMOUNTBECAU_MAX}});
      return this.$vs.notify({
        text:'Đã thay đổi thành '+this.AMOUNTBECAU_MAX,
        color:'success',
        position:'top-center',
        iconPack: 'feather',
        icon:'icon-message-square'});
    },

    changeBOTOnOff(){

      this.sendMessage({type: 'editGL', data: {type: 'BOT'}})

      if(this.checkOnOffBOT){

        return this.$vs.notify({
          text:'BOT đã được TẮT',
          color:'success',
          position:'top-center',
          iconPack: 'feather',
          icon:'icon-message-square'});
      }else{

        return this.$vs.notify({
          text:'BOT đã được BẬT',
          color:'success',
          position:'top-center',
          iconPack: 'feather',
          icon:'icon-message-square'});
      }

    },

    changeBetOnOff(){
      this.radioBC = 'off'

      this.checkOnOffBOTGoTien = false;

      if(this.checkOnOffAnGian){

        this.sendMessage({type: 'editGL', data: {type: 'BTC_OFF'}})

        return this.$vs.notify({
          text:'Đã thay đổi thành TẮT',
          color:'success',
          position:'top-center',
          iconPack: 'feather',
          icon:'icon-message-square'});
      }else{
        this.sendMessage({type: 'editGL', data: {type: 'BTC_LESS'}})

        return this.$vs.notify({
          text:'Đã thay đổi thành BẬT',
          color:'success',
          position:'top-center',
          iconPack: 'feather',
          icon:'icon-message-square'});
      }

    },

    reloadAmTien(){
      this.sendMessage({type: 'editGL', data: {type: 'GO_TIEN_OFF'}})
    },

    changeMode(val){
      this.checkOnOffAnGian = false

      if(val == 'buy'){
        this.sendMessage({type: 'editGL', data: {type: 'BTC_BUY'}})
        val = 'MUA'
      }
      if(val == 'sell'){
        this.sendMessage({type: 'editGL', data: {type: 'BTC_SELL'}})
        val = 'BÁN'
      }
      if(val == 'off'){
        this.sendMessage({type: 'editGL', data: {type: 'BTC_OFF'}})
        val = 'TẮT'
      }


      return this.$vs.notify({
        text:'Đã thay đổi thành '+val,
        color:'success',
        position:'top-center',
        iconPack: 'feather',
        icon:'icon-message-square'});
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat('en-US', {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum
      });
      return formatter.format(value);
    },

    // getAmountDecimal(type, money){
    //   let cur = '$'
    //   let coin = type.toUpperCase()
    //   if(coin == 'BTC') return cur+money.toFixed(6)
    //   if(coin == 'ETH') return cur+money.toFixed(4)
    //   return cur+money.toFixed(2)
    // },

    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    },


    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },

    changeRadioGetSV(dl){
      this.radioBC = ''

      if(dl.BTC.BUY) {
        this.radioBC = 'buy'
      }else if(dl.BTC.SELL) {
        this.radioBC = 'sell'
      }else if(!dl.BTC.BUY && !dl.BTC.SELL){
        this.radioBC = 'off'
      }

      if(dl.LESS_WIN){
        this.checkOnOffAnGian = true
      }else{
        this.checkOnOffAnGian = false
      }

      if(dl.PRICE_FUND_ON_OFF){
        this.checkOnOffBOTGoTien = true
      }else{
        this.checkOnOffBOTGoTien = false
      }

      if(dl.BOT){
        this.checkOnOffBOT = true
      }else{
        this.checkOnOffBOT = false
      }


    },



    changeBOTGoTienOnOff(){


      this.checkOnOffAnGian = false;
      this.radioBC = 'off'

      this.sendMessage({type: 'editGL', data: {type: 'BOT_GO_TIEN'}})

      if(this.checkOnOffBOTGoTien){

        return this.$vs.notify({
          text:'BOT gỡ tiền đã được TẮT',
          color:'success',
          position:'top-center',
          iconPack: 'feather',
          icon:'icon-message-square'});
      }else{

        return this.$vs.notify({
          text:'BOT gỡ tiền đã được BẬT',
          color:'success',
          position:'top-center',
          iconPack: 'feather',
          icon:'icon-message-square'});
      }

    },

    sendInfoAdmin(){
      this.sendMessage({type: 'accountDetail', data: {uid: 'ADMIN_BO', email: 'ad999999@gmail.com'}});
    },
    // sendInfoBreakBridge(){
    //   this.sendMessage({type:'profitSysCurrent',data:{uidAdmin: 'ADMIN_BO'}})
    // },
    sendInfoPrediction(){
      this.sendMessage({type:'predictionsChart'})
    }

  },
  created() {
    let token = localStorage.getItem("token");
    this.$store.dispatch("setToken", token);
    AuthenticationService.getInfoUserOfAgency()
      .then(res=>{
        if(res.data.data.role ==="agent"){
          var _this = this
          this.connection = new WebSocket(process.env.VUE_APP_BASE_URL_SOCKET)

          this.connection.onopen = function() {
            _this.sendInfoAdmin();
            // _this.sendInfoBreakBridge()
            _this.sendInfoPrediction()
            console.log("Successfully connected to the echo websocket server...")
          }


          this.connection.onmessage = function(event) {

            let data = JSON.parse(event.data)
            let dl = data.data

            if(data.type === 'allData'){
              _this.countDown = dl.candleClose
              _this.typeOder = dl.type == 'order' ? 'Mở' : 'Đóng';

              // reset lại số tiền = 0 khi thời gian = 0;
              if(dl.candleClose == 0){
                _this.price_buy = 0;
                _this.price_sell = 0;

              }
            }

            if(data.type === 'getTruck'){
              _this.changeRadioGetSV(dl);
              _this.AMOUNTBECAU_MIN = data.min_am_go;
              _this.AMOUNTBECAU_MAX = data.max_amount_be;

            }

            if(data.type === 'truck'){
              _this.productsFake = dl;
              _this.price_buy = _this.formatPrice(data.price_buy, 2);
              _this.price_sell = _this.formatPrice(data.price_sell, 2);
              _this.price_buy_mkt = _this.formatPrice(data.mktBUY, 2);
              _this.price_sell_mkt = _this.formatPrice(data.mktSELL, 2);
              _this.price_total_mkt = _this.formatPrice(data.mktBUY + data.mktSELL, 2);

              let tt = ( data.price_buy + data.price_sell ) - (data.mktBUY + data.mktSELL);


              _this.price_play_buy = _this.formatPrice(data.price_buy - data.mktBUY, 2);
              _this.price_play_sell = _this.formatPrice(data.price_sell - data.mktSELL, 2);
              _this.price_total = _this.formatPrice(tt, 2);

            }


            if(data.type === "predictionsChart" || data.type ==="predictionsChartInit") {
              _this.statusChart = dl.statusChart
            }
          }
        }else{
          localStorage.removeItem("token");
          this.$router.push("/login").catch(() => {});
        }
      })



  },
  mounted() {
    this.isMounted = true;

  },
  destroyed() {
    this.connection.close()
  }
}
</script>

<style lang="scss">
#list-edit-result {
  .vs-switch{
    border: 1px solid #fff;
  }
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr{
        box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
        td{
          padding: 20px;
          &:first-child{
            border-top-left-radius: .5rem;
            border-bottom-left-radius: .5rem;
          }
          &:last-child{
            border-top-right-radius: .5rem;
            border-bottom-right-radius: .5rem;
          }
        }
        td.td-check{
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
<style scoped>
.selectPercent{
  width: 200px;
  height: 40px;
  border-radius: 5px;
  background-color: #0a0a0a;
  color: #fff;
  border: none;
  padding-left: 10px;
  font-weight: 300;

}
.selectPercent:focus{
  border: 1px solid green;
}
.tbv{
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: #000;
}

.tbv tr {
  background-color: #ffa11f;
}
.tbv td, .tbv th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.tbv tr:nth-child(even) {
  background-color: #dddddd;
}
.btn-filter{
  padding: 5px;
  border-radius: 5px;
  background-color: #0a0a0a;
  border: 1px solid #28c76f;
  color: white;
  margin-top: 1.5rem;
}
.btn-filter:hover{
  color: #28c76f;
}
</style>
