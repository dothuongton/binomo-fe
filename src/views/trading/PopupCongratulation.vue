<template>
  <div class="popupCongratulation" :class="{ block: isWinPop }">
    <div class="mask"></div>
    <div class="popupCongratulationContent">
      <div class="winLive flex justify-center">
        <div class="wrapNotify congratulation h-100">
          <div class="boxNotify">
            <div class="close_popup_win" @click.stop="isWinPop = false">
              x
            </div>
            <div class="text-success-popup">SUCCESS</div>
            <center>
              <img
                :src="require('@/assets/images/sky/icon_reward.svg')"
                alt=""
                class="iconWin"
              />
            </center>
            <!-- <div class="badgeDemo">
              {{ blObj.isAccount ? "LIVE" : "DEMO" }}
            </div> -->
            <div class="boxContent flex justify-center items-center flex-col">
              <div class="flex items-center">
                <!---->
              </div>
              <!-- <p class="titleWin">Xin chúc mừng!</p> -->
              <span class="message_money text-4xl font-bold"
                >+{{ moneyWin }}  $</span
              >
            </div>
            <span class="cursor-pointer pointer"
              ><i class="iconClose" data-feather="x"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PopupCongratulation",
  props: ["isWinPop", "blObj", "moneyWin"],
};
</script>
<style lang="scss" scoped>
.winLive{
  mix-blend-mode: overlay;
  //background: #333332;
  box-shadow: inset 0px -1px 8px 3px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  background-image: url('../../assets/images/sky/icon_live_win_2.svg');

}
.close_popup_win{
    position: absolute;
    right: 40px;
    top: 30px;
    font-size: 16px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    border: 1px solid #fff;
    justify-content: center;
}
.message_money{
  font-family: 'UTM Avo';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  text-transform: capitalize;
  color: #FFDA39;
}
.iconWin{
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-success-popup{
  font-family: 'UTM Avo';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 59px;
  text-transform: capitalize;

  color: #FFDA39;
}
.popupCongratulation {
  display: none;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
}

.popupCongratulation .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
}

.popupCongratulation .popupCongratulationContent {
  display: block;
  overflow: unset;
  border-radius: 8px;
  width: 450px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
