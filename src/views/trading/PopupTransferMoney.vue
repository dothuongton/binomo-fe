<template>
  <div class="popup-transfer-money" v-if ="this.$store.state.isTransferPop">
    <div class="box-content-popup text-white text-italic text-center">
      <div class="close_popup_win " @click.stop=closePopup()>
        x
      </div>
      <div class="content-main pt-5">
        <div class="title-transfer text-center">
          {{ this.$store.state.notifyBonus.titleTransfer }}
        </div>
        <div class="amount-money">

          +{{ this.$store.state.notifyBonus.amountTransfer }} <span class="text-4xl">VND</span>

        </div>
        <div class="content-transfer">
          {{ this.$store.state.notifyBonus.contentTransfer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import getData from "@/pages/trade/navbar/components/data.json";
import {mapMutations} from "vuex";

export default {
  name: "PopupTransferMoney",
  data() {
    return {
      titleTransfer: "Bonus",
      contentTransfer: "bonus theo tuan",
      amountTransfer: 100,
      // isTransferPop: true
    }
  },
  watch: {},
  methods: {
    ...mapMutations(['SET_IS_TRANSFER_POP']),
    getNotifyiAddMoney() {
      AuthenticationService.getNotifiAddMoney()
        .then((res) => {
          if (res.data.success && res.data.data) {
            if(res.data.data.views == 0){
              const content = res.data.data.content
              const arr = content.split("/")
              let obj={
                "amountTransfer" : arr[0],
                "contentTransfer" : arr[1],
                "titleTransfer" : res.data.data.title
              }
              this.$store.commit("SET_NOTIFY_BONUS", obj)
              this.$store.commit("SET_IS_TRANSFER_POP_MONEY", true)
              // setTimeout(() => {
              //   this.$store.commit("SET_IS_TRANSFER_POP_MONEY", false)
              // }, 5000)

            }
            AuthenticationService.updateListNotifi({
              e: getData.email,
            })
          } else {
            // console.log("bebebe", res.data)
          }
        })
    },
    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },
    closePopup(){
      this.$store.commit("SET_IS_TRANSFER_POP_MONEY", false)
    }
  },
  created() {
    this.getNotifyiAddMoney()
  },
  mounted() {

  },

}
</script>

<style scoped>
@font-face {
  font-family: "Mijas-Ultra";
  src: url("/src/assets/fonts/MIJAS-ULTRA_0.OTF");
}
.mask{
  position: absolute;
  width: 100vw;
  height: 100vh;

}
.close_popup_win {
  cursor: pointer;
  position: absolute;
  right: 62px;
  top: -5px;
  font-size: 4.5rem;
  color: #48032a;
  font-weight: bold;
}


.popup-transfer-money {
font-family: mijas;
  position: relative;
  width: 650px;
  height: 400px;
  background-image: url("../../assets/images/sky/bg_popup_transfer_money_convert.png");
  background-repeat: no-repeat;
  transform: translateX(80%) translateY(40%);
  z-index: 10000;
}
@media only screen and (max-width:768px) {
  .popup-transfer-money{
    width: 250px;
    height: auto;
    background-size: contain;
    left: -120px;
    top: 200px;
    transform: translateX(81%);
  }
.amount-money, .title-transfer{
    font-size: 1.5rem!important;
    margin-top: -1rem;

  }
  .close_popup_win{
    margin-right: -52px!important;
    margin-bottom: 50px!important;
    font-size: 2rem!important;
  }
  .box-content-popup{
    margin-right: 0px!important;
    margin-top: 45px !important;
    margin-bottom: 50px;
  }
  .content-transfer{
    font-size: 1rem;

  }
}
@media only screen and (max-width: 768px) and (min-width: 550px){
  .popup-transfer-money{
    transform: translateX(120%) translateY(10%);
  }
}
@media only screen and (max-width: 768px) {

  .content-transfer{
    width: 200px!important;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1024px) and (min-width: 768px)  {
  .popup-transfer-money{
   left: -380px!important;
  }
}
@media only screen and (max-width: 1024px) and (min-width: 768px){
  .content-transfer{
    width: 500px;
    margin: 0 auto;
    padding-bottom: 10px;
  }
  .amount-money{
    font-size: 4rem!important;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1600px)  {
  .popup-transfer-money{
    transform: translateX(70%) translateY(10%);
    background-size: contain;
    max-width: 450px;
    height: 450px;
    text-align: center!important;
  }
  .content-main{
    transform: translateX(5%);
  }
  .content-transfer{
    font-size: 2rem;
    margin: -10px 25px auto;
    max-width: 400px;

  }
  .close_popup_win{
    right: 15px;
    top: -13px;
    font-size: 4rem;
    }
 .title-transfer{
    font-size: 2.4rem;
   margin-top: 0 !important;
  }
 .amount-money{
   font-size: 2rem!important;
 }
}
.box-content-popup {
  margin-top: 50px;
  margin-right: 50px;
  /*position: absolute;*/
  /*right: 25%;*/
  /*top: 16%;*/
  /*background-color: red;*/
  font-size: 3rem;
  text-align: center;
}

.amount-money {
  font-size: 3rem;
}
</style>
