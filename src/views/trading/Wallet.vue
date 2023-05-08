<template>
  <div id="wallet">
    <div class="vx-row">
<!--      <div class="w-full h-48 subBanner">-->
<!--        <div class="container h-full flex items-center info">-->
<!--          <div class="flex flex-col justify-center relative">-->
<!--            <div>-->
<!--              <span style="background-color: red;" class="currency-icon ETH"></span>-->
<!--            <p class="">{{$t('Total assets (USDT)')}}</p>-->

<!--            </div>-->
<!--            <p>-->
<!--              <span class="price mr-2">-->
<!--                {{ formatPrice(balanceForUser * getSetSys.quotePriceUSDT +balanceLive, 2) }}-->
<!--              </span>-->
<!--              <span-->
<!--                class="price mr-2"-->
<!--                v-if="getSetSys.typeCurrUseSys == 'usdt'"-->
<!--              >-->
<!--                {{ formatPrice(balanceForUser * getSetSys.quotePriceUSDT, 2) }}-->
<!--              </span>-->
<!--              <span class="price mr-2" v-if="getSetSys.typeCurrUseSys == 'btc'">-->
<!--                {{ formatPrice(balanceForUser * getSetSys.quotePriceBTC, 2) }}-->
<!--              </span>-->
<!--              <span class="price mr-2" v-if="getSetSys.typeCurrUseSys == 'eth'">-->
<!--                {{ formatPrice(balanceForUser * getSetSys.quotePriceETH, 2) }}-->
<!--              </span>-->
<!--              <span-->
<!--                :class="`icon ${getSetSys.typeCurrUseSys} inline-block`"-->
<!--              ></span>-->
              <!--<span class="basePrice text-lg">~ ${{ formatPrice(balanceUser, 2) }}</span> -->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="w-full">
        <div class="container mt-10">
          <vs-tabs style="padding: 0 2rem">
            <vs-tab
              :label="$t('Main Wallet')"
              @click="getListHisTrade(), (showVC = true), (showVGD = false)"
            ></vs-tab>
<!--            <vs-tab-->
<!--              :label="$t('Transaction wallet')"-->
<!--              @click="getListHisTradeWGD(), (showVGD = true), (showVC = false)"-->
<!--            ></vs-tab>-->
          </vs-tabs>
          <div class="showV" :class="{ block: showVC }">
            <div class="box-coin-wrapper">
              <div style="padding: 0 2rem"
                class="flex justify-between flex-col items-baseline lg:flex-row"
              >
                <h4 class="text-wallet color-white font-bold mb-4 mt-4">
                  {{$t('Main account')}}:
                </h4>
                <!-- <h6 class="colorGray mb-0 italic"><span >Value ước tính: {{ giaTriUocTinh }} USD</span></h6> -->
              </div>
              <div style="padding: 0 2rem" class="vx-row">
                <div
                  class="vx-col w-full lg:w-1/3 mb-3"
                  v-if="getSetSys.isActiveWalletUSDT"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="leftBox flex flex-col sm:flex-row">
                        <div class="flex items-center">
                          <div class="currency-icon USDT"></div>
                        </div>
                        <span class="uppercase font-bold flex my-auto">VNĐ</span>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          {{formatPrice(balanceVND)}}
<!--                          <span class="font-bold">-->
<!--                            {{-->
<!--                              formatPrice(balanceUSDT, 2)-->
<!--                            }}-->
<!--                            {{ formatPrice(balanceForUser * getSetSys.quotePriceUSDT, 2) }}-->
<!--                          </span>-->
<!--                          <span-->
<!--                            >~${{ formatPrice(balanceForUser * getSetSys.quotePriceUSDT, 2) }}-->
<!--                            {{-->
<!--                              formatPrice(-->
<!--                                balanceUSDT * getSetSys.quotePriceUSDT,-->
<!--                                2-->
<!--                              )-->
<!--                            }}-->
<!--                          </span-->
<!--                          >-->
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(0)
                          "
                          >{{$t('Recharge')}}</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(1)
                          "
                          >{{$t('Withdraw')}}</a
                        >
                      </div>
                      <!--<div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAABHNCSVQICAgIfAhkiAAAAaxJREFUSIm11cFt2zAUxvH/EyRdK2/ADeINmkwQd4IoE9gB4qK3IrcCMRB1A3eCJBPE2cDZgCPIx1pqXg9V7CqWRDZh30kQHvijyE+kEKDMfJuj3CBagnyy1+m6qy8KgQEFQgZiUB7MfDv+f5hquXsWsj4wDCYyATYuUIJgQDPwCviwe6mUCCcve+jEzOd6gv46QyVziqIGxLTe/QXGztnq8y2I5xp0NDVLCoxce9aZqn8uIQNXQKrkDuXp3Zjy44/pUeaLGurauDu1QDh6DdlFmntjXhO63C4RzvoggMGAeEPzbQHDEIQ7rqYuCHq+zMw0I66+AmOQK7tIVg7sEfg4BHViZqYZSfXAS+xVx8BokKqSCXGVI5R2kS772loBOYD2g41sISXvrN2e9ULwPQQEzZf1QgPr/yZsACpBCr9R9L7vdm5jlz/vEDl901Rbk5MTV2qjIBAAz8eujgjV+zBY5PoXianTnLhaHRygsEblwsuJY2u/iXW17dPYDS7tdXruBXpUBGALKamT4467K28O2XCYA5wSqFqnfg+4IVAdXDF7UK+apDoj7Vu/AfL4ub5VTGABAAAAAElFTkSuQmCC" alt="">
                                            <router-link to="/user/exchange" class="cursor-pointer">Đổi Tiền</router-link>
                                        </div>-->
                    </div>
                  </div>
                </div>
                <div
                  class="vx-col w-full lg:w-1/3 mb-3"
                  v-if="getSetSys.isActiveWalletETH"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="leftBox flex flex-col sm:flex-row">
                        <div class="flex items-center">
                          <span class="currency-icon ETH"></span>
                          <span class="uppercase font-bold block sm:hidden"
                            >ETH</span
                          >
                        </div>
                        <div class="flex flex-col">
                          <span class="uppercase font-bold">ETH</span>
                          <span class="capitalize colorGray">Ethereum</span>
                        </div>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          <span class="font-bold">{{
                            formatPrice(balanceETH, 4)
                          }}</span>
                          <span class="colorGray"
                            >~${{
                              formatPrice(
                                balanceETH * getSetSys.quotePriceETH,
                                2
                              )
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a href="javascript:;" @click.stop="showPopNapRutTien(0)"
                          >{{$t('Recharge')}}</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a href="javascript:;" @click.stop="showPopNapRutTien(1)"
                          >{{$t('Withdraw')}}</a
                        >
                      </div>
                      <!--<div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAABHNCSVQICAgIfAhkiAAAAaxJREFUSIm11cFt2zAUxvH/EyRdK2/ADeINmkwQd4IoE9gB4qK3IrcCMRB1A3eCJBPE2cDZgCPIx1pqXg9V7CqWRDZh30kQHvijyE+kEKDMfJuj3CBagnyy1+m6qy8KgQEFQgZiUB7MfDv+f5hquXsWsj4wDCYyATYuUIJgQDPwCviwe6mUCCcve+jEzOd6gv46QyVziqIGxLTe/QXGztnq8y2I5xp0NDVLCoxce9aZqn8uIQNXQKrkDuXp3Zjy44/pUeaLGurauDu1QDh6DdlFmntjXhO63C4RzvoggMGAeEPzbQHDEIQ7rqYuCHq+zMw0I66+AmOQK7tIVg7sEfg4BHViZqYZSfXAS+xVx8BokKqSCXGVI5R2kS772loBOYD2g41sISXvrN2e9ULwPQQEzZf1QgPr/yZsACpBCr9R9L7vdm5jlz/vEDl901Rbk5MTV2qjIBAAz8eujgjV+zBY5PoXianTnLhaHRygsEblwsuJY2u/iXW17dPYDS7tdXruBXpUBGALKamT4467K28O2XCYA5wSqFqnfg+4IVAdXDF7UK+apDoj7Vu/AfL4ub5VTGABAAAAAElFTkSuQmCC" alt="">
                                            <router-link to="/user/exchange" class="cursor-pointer">Đổi Tiền</router-link>
                                        </div>-->
                    </div>
                  </div>
                </div>
                <div
                  class="vx-col w-full lg:w-1/3 mb-3"
                  v-if="getSetSys.isActiveWalletBTC"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="leftBox flex flex-col sm:flex-row">
                        <div class="flex items-center">
                          <span class="currency-icon BTC"></span>
                          <span class="uppercase font-bold block sm:hidden"
                            >BTC</span
                          >
                        </div>
                        <div class="flex flex-col">
                          <span class="uppercase font-bold">BTC</span>
                          <span class="capitalize colorGray">Bitcoin</span>
                        </div>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          <span class="font-bold">{{
                            formatPrice(balanceBTC, 6)
                          }}</span>
                          <span class="colorGray"
                            >~${{
                              formatPrice(
                                balanceBTC * getSetSys.quotePriceBTC,
                                2
                              )
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a href="javascript:;" @click.stop="showPopNapRutTien(0)"
                          >{{$t('Recharge')}}</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a href="javascript:;" @click.stop="showPopNapRutTien(1)"
                          >{{$t('Withdraw')}}</a
                        >
                      </div>
                      <!--<div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAABHNCSVQICAgIfAhkiAAAAaxJREFUSIm11cFt2zAUxvH/EyRdK2/ADeINmkwQd4IoE9gB4qK3IrcCMRB1A3eCJBPE2cDZgCPIx1pqXg9V7CqWRDZh30kQHvijyE+kEKDMfJuj3CBagnyy1+m6qy8KgQEFQgZiUB7MfDv+f5hquXsWsj4wDCYyATYuUIJgQDPwCviwe6mUCCcve+jEzOd6gv46QyVziqIGxLTe/QXGztnq8y2I5xp0NDVLCoxce9aZqn8uIQNXQKrkDuXp3Zjy44/pUeaLGurauDu1QDh6DdlFmntjXhO63C4RzvoggMGAeEPzbQHDEIQ7rqYuCHq+zMw0I66+AmOQK7tIVg7sEfg4BHViZqYZSfXAS+xVx8BokKqSCXGVI5R2kS772loBOYD2g41sISXvrN2e9ULwPQQEzZf1QgPr/yZsACpBCr9R9L7vdm5jlz/vEDl901Rbk5MTV2qjIBAAz8eujgjV+zBY5PoXianTnLhaHRygsEblwsuJY2u/iXW17dPYDS7tdXruBXpUBGALKamT4467K28O2XCYA5wSqFqnfg+4IVAdXDF7UK+apDoj7Vu/AfL4ub5VTGABAAAAAElFTkSuQmCC" alt="">
                                            <router-link to="/user/exchange" class="cursor-pointer">Đổi Tiền</router-link>
                                        </div>-->
                    </div>
                  </div>
                </div>
                <div
                  class="vx-col w-full lg:w-1/3 mb-3"
                  v-if="getSetSys.isActiveWalletPaypal"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="leftBox flex flex-col sm:flex-row">
                        <div class="flex items-center">
                          <span class="currency-icon PAYPAL"></span>
                          <span class="uppercase font-bold block sm:hidden"
                            >Paypal</span
                          >
                        </div>
                        <div class="flex flex-col">
                          <span class="uppercase font-bold">Paypal</span>
                          <!--<span class="capitalize colorGray">Tether</span>-->
                        </div>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          <span class="font-bold">{{
                            formatPrice(balancePaypal, 2)
                          }}</span>
                          <span class="colorGray"
                            >~${{
                              formatPrice(
                                balancePaypal * getSetSys.quotePricePAYPAL,
                                2
                              )
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(0)
                          "
                          >{{$t('Recharge')}}</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(1)
                          "
                          >{{$t('Withdraw')}}</a
                        >
                      </div>
                      <!--<div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAABHNCSVQICAgIfAhkiAAAAaxJREFUSIm11cFt2zAUxvH/EyRdK2/ADeINmkwQd4IoE9gB4qK3IrcCMRB1A3eCJBPE2cDZgCPIx1pqXg9V7CqWRDZh30kQHvijyE+kEKDMfJuj3CBagnyy1+m6qy8KgQEFQgZiUB7MfDv+f5hquXsWsj4wDCYyATYuUIJgQDPwCviwe6mUCCcve+jEzOd6gv46QyVziqIGxLTe/QXGztnq8y2I5xp0NDVLCoxce9aZqn8uIQNXQKrkDuXp3Zjy44/pUeaLGurauDu1QDh6DdlFmntjXhO63C4RzvoggMGAeEPzbQHDEIQ7rqYuCHq+zMw0I66+AmOQK7tIVg7sEfg4BHViZqYZSfXAS+xVx8BokKqSCXGVI5R2kS772loBOYD2g41sISXvrN2e9ULwPQQEzZf1QgPr/yZsACpBCr9R9L7vdm5jlz/vEDl901Rbk5MTV2qjIBAAz8eujgjV+zBY5PoXianTnLhaHRygsEblwsuJY2u/iXW17dPYDS7tdXruBXpUBGALKamT4467K28O2XCYA5wSqFqnfg+4IVAdXDF7UK+apDoj7Vu/AfL4ub5VTGABAAAAAElFTkSuQmCC" alt="">
                                            <router-link to="/user/exchange" class="cursor-pointer">Đổi Tiền</router-link>
                                        </div>-->
                    </div>
                  </div>
                </div>
                <div
                  class="vx-col w-full lg:w-1/3 mb-3"
                  v-if="getSetSys.isActiveWalletVND"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="leftBox flex flex-col sm:flex-row">
                        <div class="flex items-center">
                          <span class="currency-icon VND"></span>
                          <span class="uppercase font-bold block sm:hidden"
                            >Ngân hàng VNĐ</span
                          >
                        </div>
                        <div class="flex flex-col">
                          <span class="uppercase font-bold">Ngân hàng VNĐ</span>
                          <!--<span class="capitalize colorGray">Tether</span>-->
                        </div>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          <span class="font-bold">{{
                            formatPrice(balancePaypal, 2)
                          }}</span>
                          <span class="colorGray"
                            >~${{
                              formatPrice(
                                balancePaypal * getSetSys.quotePricePAYPAL,
                                2
                              )
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(0)
                          "
                          >{{$t('Recharge')}}</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(1)
                          "
                        >{{$t('Withdraw')}}</a
                        >
                      </div>
                      <!--<div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAABHNCSVQICAgIfAhkiAAAAaxJREFUSIm11cFt2zAUxvH/EyRdK2/ADeINmkwQd4IoE9gB4qK3IrcCMRB1A3eCJBPE2cDZgCPIx1pqXg9V7CqWRDZh30kQHvijyE+kEKDMfJuj3CBagnyy1+m6qy8KgQEFQgZiUB7MfDv+f5hquXsWsj4wDCYyATYuUIJgQDPwCviwe6mUCCcve+jEzOd6gv46QyVziqIGxLTe/QXGztnq8y2I5xp0NDVLCoxce9aZqn8uIQNXQKrkDuXp3Zjy44/pUeaLGurauDu1QDh6DdlFmntjXhO63C4RzvoggMGAeEPzbQHDEIQ7rqYuCHq+zMw0I66+AmOQK7tIVg7sEfg4BHViZqYZSfXAS+xVx8BokKqSCXGVI5R2kS772loBOYD2g41sISXvrN2e9ULwPQQEzZf1QgPr/yZsACpBCr9R9L7vdm5jlz/vEDl901Rbk5MTV2qjIBAAz8eujgjV+zBY5PoXianTnLhaHRygsEblwsuJY2u/iXW17dPYDS7tdXruBXpUBGALKamT4467K28O2XCYA5wSqFqnfg+4IVAdXDF7UK+apDoj7Vu/AfL4ub5VTGABAAAAAElFTkSuQmCC" alt="">
                                            <router-link to="/user/exchange" class="cursor-pointer">Đổi Tiền</router-link>
                                        </div>-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="history lg:mb-4">
                <h4 class="mb-4 text-wallet pl-10">{{$t('Transactions history')}}</h4>
                <div
                  class="history-body relative"
                  :class="{ 'ld-loading': isLoading }"
                >
                  <div class="loading">
                    <div class="loading__ring">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        style="enable-background: new 0 0 100 100"
                        xml:space="preserve"
                      >
                        <path
                          d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
                        ></path>
                      </svg>
                    </div>
                    <div class="loading__ring">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        style="enable-background: new 0 0 100 100"
                        xml:space="preserve"
                      >
                        <path
                          d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <vs-tabs>
                    <vs-tab
                      label="VND"
                      class="p-0"
                      @click="
                        getListHisTrade(),
                          (showHisUSD = true),
                          (showHisHH = false)
                      "
                    >
                    </vs-tab>
<!--                    <vs-tab-->
<!--                      :label="$t('Profit')"-->
<!--                      @click="-->
<!--                        getListHisTradeHH(),-->
<!--                          (showHisHH = true),-->
<!--                          (showHisUSD = false)-->
<!--                      "-->
<!--                    >-->
<!--                    </vs-tab>-->
                  </vs-tabs>
                  <div class="showHisM" :class="{ block: showHisUSD }">
                    <div class="history-content">
                      <div class="box-result">
                        <ul class="nav nav-tabs">
                          <li class="box-result-header">
                            <div class="flex" style="padding: 0 1.5rem">
                              <div class="block-col time">
                                <span>{{$t('Time')}}</span>
                              </div>
                              <div class="block-col type" style="margin-left: 10px">
                                <span>{{$t('Value / Type')}}</span>
                              </div>
                              <div class="block-col" style="flex: 2 1 -10%">
                                <span>{{$t('Txid / Description')}}</span>
                              </div>
                              <div class="block-col note">
                                <span style="padding-left: 120px;">{{$t('Note')}}</span>
                              </div>
                              <!-- <div class="block-col status">
                                <span>Tình trạng</span>
                              </div> -->
                            </div>
                          </li>
                          <li class="item" v-if="dataHisWallet.length == 0">
                            <div class="w-full text-center">
                              <span>No data</span>
                            </div>
                          </li>
                          <li
                            class="item"
                            v-else
                            :key="indextr"
                            v-for="(tr, indextr) in dataHisWallet"
                          >
                            <div
                              class="flex"

                              @click="popupBill(tr)"
                            >
                              <div class="block-col time">
                                <span>{{
                                  formatDateWallet(tr.created_at)
                                }}</span>
                              </div>
                              <div class="block-col text-right amount">
                                <div
                                  v-if="
                                    blObj.displayName.toUpperCase() ==
                                    tr.from_u.toUpperCase()
                                  "
                                >
                                  <span
                                    class="red"
                                    v-if="
                                      tr.type_key == 'rt' ||
                                      tr.type_key == 'ct' ||
                                      tr.type_key == 'ctsa' ||
                                      tr.type_key == 'nn' ||
                                      tr.type_key == 'mv' ||
                                      tr.type_key == 'ttadmin'
                                    "
                                    >-{{ formatPrice(tr.amount) }}</span
                                  >

                                  <span class="green" v-else
                                    >+{{ formatPrice(tr.amount) }}</span
                                  >
                                </div>
                                <div
                                  v-else-if="
                                    blObj.displayName.toUpperCase() ==
                                    tr.to_u.toUpperCase()
                                  "
                                >
                                  <span class="green"
                                    >+{{ formatPrice(tr.amount) }}</span
                                  >
                                </div>
                              </div>
                              <div class="block-col type">
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'rt'"
                                  >{{$t('Withdraw')}}</span
                                >
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'nt'"
                                  >{{$t('Recharge')}}
                                  {{ tr.paypal_order_id ? "Paypal" : "" }}</span
                                >
                                <span
                                  class="deitalType transfer_in"
                                  v-if="
                                    tr.type_key == 'ct' ||
                                    tr.type_key == 'ctsa' ||
                                    tr.type_key == 'ctas'
                                  "
                                  >{{$t('Transfers money')}}</span
                                >
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'nn'"
                                  >{{$t('Fast recharge')}}</span
                                >
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'mv'"
                                  >{{$t('Buy Vip')}}</span
                                >
                              </div>

                              <div class="block-col" style="flex: 2 1 20%; margin-left: 20px;">
                                <div class="text-left">
                                  <div class="item-txid-desc">
<!--                                    {{-->
<!--                                      tr.type_key == "ctsa" ||-->
<!--                                      tr.type_key == "ctas"-->
<!--                                        ? ""-->
<!--                                        : tr.from_u + ":"-->
<!--                                    }}-->
                                    {{ $t(`${tr.type}`) }}
                                  </div>
                                  <div
                                    class="item-txid-desc"
                                    v-html="
                                      getBankContent(
                                        tr.type_key,
                                        tr.currency,
                                        tr.bank
                                      )
                                    "
                                  ></div>
                                </div>
                              </div>
                              <div class="block-col w-48">
                                <span>{{convertNote(tr.note)}}</span>
                              </div>
                              <div class="block-col status text-center">
                                <span v-if="tr.status == 1">
                                  <span class="green">
                                    <feather-icon
                                      icon="CheckIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  {{$t('Complete')}}
                                </span>
                                <span v-else-if="tr.status == 0">
                                  <span class="red">
                                    <feather-icon
                                      icon="AlertCircleIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  {{$t('Waiting')}}
                                </span>
                                <span v-else>
                                  <span class="red">
                                    <feather-icon
                                      icon="AlertCircleIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  {{$t('Reject')}}
                                </span>
                              </div>
                            </div>
                          </li>
                          <vs-pagination
                            v-if="totalRUSDT > 0"
                            class="mt-4 mb-2"
                            :total="totalRUSDT"
                            v-model="currentxUSDT"
                            @input="clickPageUSDT"
                          ></vs-pagination>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="showHisM" :class="{ block: showHisHH }">
                    <div class="history-content">
                      <div class="box-result">
                        <ul class="nav nav-tabs">
                          <li class="box-result-header">
                            <div class="flex" style="padding: 0 1.5rem">
                              <div class="block-col time">
                                <span>Time</span>
                              </div>
                              <div class="block-col type text-center">
                                <span>Value / Type</span>
                              </div>
                              <div class="block-col text-center" style="flex: 2 1 0%">
                                <span>Txid / Description</span>
                              </div>
                              <div class="block-col note">
                                <span>Note</span>
                              </div>

                            </div>
                          </li>
                          <div class="flex" style="padding: 0 1.5rem">
                            <div class="block-col time">
                                <span>{{formatDateAff2(timeProfit)}}</span>
                            </div>
                            <div class="block-col text-right amount">
                              <!-- <span class="red" v-if="tr.type_key == 'mv'">-{{ formatPrice(tr.amount, 2) }}</span> -->
                              <span class="green"
                              >+{{formatPrice(totalHhv)}}</span
                              >
                            </div>
                            <div class="block-col type mt-1">
                                <span class="deitalType trading_commission">
                                  {{$t('Buy Vip')}}
                                </span>
                            </div>
                            <div class="block-col" style="flex: 2 1 0%">
                              <p class="text-left mt-1">
                                  <span class="item-txid-desc text-center">
                                    {{$t('Agency Commission')}}
                                  </span>
                              </p>
                            </div>
                          </div>
                          <div class="flex" style="padding: 0 1.7rem">
                            <div class="block-col time">
                              <span>{{ formatDateAff2(timeProfit) }}</span>
                            </div>
                            <div class="block-col text-right amount">
                              <!-- <span class="red" v-if="tr.type_key == 'mv'">-{{ formatPrice(tr.amount, 2) }}</span> -->
                              <span class="green"
                              >+{{formatPrice(totalKlgd)}}</span
                              >
                            </div>
                            <div class="block-col type mt-1">
                                <span class="deitalType trading_commission">
                                  {{$t('Transactions')}}
                                </span>
                            </div>
                            <div class="block-col" style="flex: 2 1 0%">
                              <p class="text-left mt-1">
                                  <span class="item-txid-desc text-center">
                                    {{$t('Transactions Commission')}}
                                  </span>
                              </p>
                            </div>
                          </div>
                          <li
                            class="item"
                            v-if="dataHisWalletHoaHong.length == 0"
                          >
                            <div class="w-full text-center">
                              <span>No data</span>
                            </div>
                          </li>
                          <li
                            class="item"
                            v-else
                            :key="indextr"
                            v-for="(tr, indextr) in dataHisWalletHoaHong"
                          >

                            <div class="flex" style="padding: 0 1.5rem">
                              <div class="block-col time">
                                <span>{{
                                    formatDateAff2(tr.created_at)
                                }}</span>
                              </div>
                              <div class="block-col text-right amount">
                                <!-- <span class="red" v-if="tr.type_key == 'mv'">-{{ formatPrice(tr.amount, 2) }}</span> -->
                                <span class="green"
                                  >+{{
                                    formatPrice(
                                      Number(tr.vip_commission) ||
                                        Number(tr.pending_commission),
                                      2
                                    )
                                  }}</span>
                              </div>
                              <div class="block-col type">
                                <span class="deitalType trading_commission">{{
                                  tr.vip_commission > 0
                                    ? $t('Buy Vip')
                                    : $t('Transactions')
                                }}</span>
                              </div>
                              <div class="block-col" style="flex: 2 1 0%">
                                <p class="text-left">
                                  <span class="item-txid-desc">{{
                                    tr.vip_commission > 0
                                      ? "Hoa Hồng VIP"
                                      : "Hoa Hồng Giao dịch"
                                  }}</span>
                                  <span class="item-txid-desc text-center">{{
                                      tr.vip_commission > 0
                                        ? $t('Agency Commission')
                                        : $t('Transactions Commission')
                                    }}</span>
                                </p>
                              </div>
                              <div class="block-col note">
                                <span>{{
                                  tr.vip_commission > 0
                                    ? tr.nick_name + " " + $t('Bought Vip')
                                    : "-"
                                }}</span>
<!--                              </div>-->
<!--                              <div class="block-col status text-center">-->
<!--                                <span v-if="tr.status == 1">-->
<!--                                  <span class="green">-->
<!--                                    <feather-icon-->
<!--                                      icon="CheckIcon"-->
<!--                                      svgClasses="w-4 h-4"-->
<!--                                    />-->
<!--                                  </span>-->
<!--                                  Complete-->
<!--                                </span>-->
<!--                                <span v-else-if="tr.status == 0">-->
<!--                                  <span class="red">-->
<!--                                    <feather-icon-->
<!--                                      icon="AlertCircleIcon"-->
<!--                                      svgClasses="w-4 h-4"-->
<!--                                    />-->
<!--                                  </span>-->
<!--                                  Đợi-->
<!--                                </span>-->
<!--                                <span v-else>-->
<!--                                  <span class="red">-->
<!--                                    <feather-icon-->
<!--                                      icon="AlertCircleIcon"-->
<!--                                      svgClasses="w-4 h-4"-->
<!--                                    />-->
<!--                                  </span>-->
<!--                                  Hủy-->
<!--                                </span>-->
<!--                              </div>-->
                            </div>
                            </div>
                          </li>
                          <vs-pagination
                            v-if="totalRHH > 0"
                            class="mt-4 mb-2"
                            :total="totalRHH"
                            v-model="currentxHH"
                            @input="clickPageHH"
                          ></vs-pagination>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="showV" :class="{ block: showVGD }">
            <div class="contentBox">
              <div class="vx-row" style="padding: 0 2rem">
                <div class="vx-col w-full lg:w-1/2 mt-4">
                  <div class="background backgroundImg backgroundLive">
                    <div
                      class="content flex flex-col justify-center items-center"
                    >
                      <span class="text-lg color-gray sm:mb-3 font-bold"
                        >{{$t('Real Account')}}</span
                      >
                      <span class="price flex items-center mb:sm-3 mb-2">
                        <span class="text-3xl font-bold"
                          >${{ formatPrice(blObj.blLive, 2) }}</span
                        >
                      </span>
                      <button
                        @click="popupTransferActive = true"
                        type="button"
                        class="btn button wbtn btn-large btn-radius w-9/12 cursor-pointer"
                      >
                        <span class="iconSubmit iconSubmitLive"></span>
                        <span>{{$t('Transfers money')}}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="vx-col w-full lg:w-1/2 mt-4">
                  <div class="background backgroundImg backgroundDemo">
                    <div
                      class="content flex flex-col justify-center items-center"
                    >
                      <span class="text-lg color-gray sm:mb-3 font-bold"
                        >{{$t('Practice Account')}}</span
                      >
                      <span class="price flex items-center mb:sm-3 mb-2">
                        <span class="text-3xl font-bold"
                          >${{ formatPrice(blObj.blDemo, 2) }}</span
                        >
                      </span>
                      <button
                        @click="clickReloadMoneyDemo"
                        type="button"
                        class="btn button wbtn btn-large btn-radius w-9/12 cursor-pointer"
                      >
                        <span class="iconSubmit iconSubmitDemo"></span>
                        <span>{{$t('Recharge')}}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
<!--              <div class="sectionTable lg:pb-4">-->
<!--                <div class="balance">-->
<!--                  <div class="wrapBalance">-->
<!--                    <div class="boxBalance">-->
<!--                      <div class="history">-->
<!--                        <h4 class=" mb-4 text-wallet pl-10">{{$t('Transactions history')}}</h4>-->
<!--                        <vs-table-->
<!--                        :data="dataHisWalletWGD"-->
<!--                        pagination-->
<!--                        >-->

<!--                          <vs-tr>-->
<!--                            <vs-th  class="text_th-table">-->
<!--                              Time-->
<!--                            </vs-th>-->
<!--                            <vs-th class="text_th-table">-->
<!--                              Value / Type-->
<!--                            </vs-th>-->
<!--                            <vs-th></vs-th>-->
<!--                            <vs-th class="text_th-table">-->
<!--                              Txid / Description-->
<!--                            </vs-th>-->
<!--                            <vs-th class="text_th-table">-->
<!--                              Status-->
<!--                            </vs-th>-->
<!--                          </vs-tr>-->

<!--                            <vs-tr-->
<!--                            :key="indextr" v-for="(tr, indextr) in dataHisWalletWGD"-->
<!--                          >-->
<!--                            <vs-td>-->
<!--                              {{formatDateWallet(tr.created_at)}}-->
<!--                            </vs-td>-->
<!--                            <vs-td>-->
<!--                              <span-->
<!--                                class="red"-->
<!--                                v-if="tr.type_key == 'ctas'"-->
<!--                                >-{{ formatPrice(tr.amount, 2) }}</span-->
<!--                              >-->
<!--                              <span class="green" v-else-->
<!--                                >+{{ formatPrice(tr.amount, 2) }}</span-->
<!--                              >-->

<!--                            </vs-td>-->
<!--                            <vs-td>-->
<!--                              <span-->
<!--                                class="deitalType transfer_in"-->
<!--                                v-if="tr.type_key == 'ctas'"-->
<!--                                >Transfers out</span-->
<!--                              >-->
<!--                              <span-->
<!--                                class="deitalType transfer_in"-->
<!--                                v-else-->
<!--                                >{{$t('Transfers in')}}-->
<!--                              </span>-->
<!--                            </vs-td>-->
<!--                            <vs-td>-->
<!--&lt;!&ndash;                              v-if="tr.type_key == 'ctas'"&ndash;&gt;-->
<!--                              <span-->
<!--                                  class="item-txid-desc"-->

<!--                                  >{{ tr.to_u == 'Live Account' ? "Real Account": "USDT Wallet" }}</span-->
<!--                                >-->
<!--&lt;!&ndash;                                <span class="item-txid-desc" v-else&ndash;&gt;-->
<!--&lt;!&ndash;                                  >{{ tr.to_u }}</span&ndash;&gt;-->
<!--&lt;!&ndash;                                >&ndash;&gt;-->
<!--                            </vs-td>-->
<!--                            <vs-td>-->
<!--                              <span v-if="tr.status == 1">-->
<!--                                <span class="green">-->
<!--                                  <feather-icon-->
<!--                                    icon="CheckIcon"-->
<!--                                    svgClasses="w-4 h-4"-->
<!--                                  />-->
<!--                                </span>-->
<!--                                {{$t('Complete')}}-->
<!--                              </span>-->
<!--                              <span v-else-if="tr.status == 0">-->
<!--                                <span class="red">-->
<!--                                  <feather-icon-->
<!--                                    icon="AlertCircleIcon"-->
<!--                                    svgClasses="w-4 h-4"-->
<!--                                  />-->
<!--                                </span>-->
<!--                                Đợi-->
<!--                              </span>-->
<!--                              <span v-else>-->
<!--                                <span class="red">-->
<!--                                  <feather-icon-->
<!--                                    icon="AlertCircleIcon"-->
<!--                                    svgClasses="w-4 h-4"-->
<!--                                  />-->
<!--                                </span>-->
<!--                                Hủy-->
<!--                              </span>-->
<!--                            </vs-td>-->
<!--                          </vs-tr>-->
<!--                        </vs-table>-->
<!--                        &lt;!&ndash; <div class="history-body">-->
<!--                          <div class="history-content">-->
<!--                            <div class="box-result">-->
<!--                              <ul class="nav nav-tabs">-->
<!--                                <li class="box-result-header">-->
<!--                                  <div class="flex" style="padding: 0 1.5rem">-->
<!--                                    <div class="block-col time">-->
<!--                                      <span>Time</span>-->
<!--                                    </div>-->
<!--                                    <div class="block-col type">-->
<!--                                      <span>Value / Type</span>-->
<!--                                    </div>-->
<!--                                    <div class="block-col" style="flex: 2 1 0%">-->
<!--                                      <span>Txid / Description</span>-->
<!--                                    </div>-->
<!--                                    <div class="block-col note">-->
<!--                                                                        <span>Note</span>-->
<!--                                                                    </div>-->
<!--                                    <div class="block-col status">-->
<!--                                      <span>Status</span>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </li>-->
<!--                                <li-->
<!--                                  class="item"-->
<!--                                  v-if="dataHisWalletWGD.length == 0"-->
<!--                                >-->
<!--                                  <div class="w-full text-center">-->
<!--                                    <span>No data</span>-->
<!--                                  </div>-->
<!--                                </li>-->

<!--                                <li-->
<!--                                  class="item"-->
<!--                                  v-else-->
<!--                                  :key="indextr"-->
<!--                                  v-for="(tr, indextr) in dataHisWalletWGD"-->
<!--                                >-->
<!--                                  <div class="flex" style="padding: 0 1.5rem">-->
<!--                                    <div class="block-col time">-->
<!--                                      <span>{{-->
<!--                                        formatDateWallet(tr.created_at)-->
<!--                                      }}</span>-->
<!--                                    </div>-->
<!--                                    <div class="block-col text-right amount">-->
<!--                                      <span-->
<!--                                        class="red"-->
<!--                                        v-if="tr.type_key == 'ctas'"-->
<!--                                        >-{{ formatPrice(tr.amount, 2) }}</span-->
<!--                                      >-->
<!--                                      <span class="green" v-else-->
<!--                                        >+{{ formatPrice(tr.amount, 2) }}</span-->
<!--                                      >-->
<!--                                    </div>-->
<!--                                    <div class="block-col type">-->
<!--                                      <span-->
<!--                                        class="deitalType transfer_in"-->
<!--                                        v-if="tr.type_key == 'ctas'"-->
<!--                                        >Chuyển ra</span-->
<!--                                      >-->
<!--                                      <span-->
<!--                                        class="deitalType transfer_in"-->
<!--                                        v-else-->
<!--                                        >Chuyển vào</span-->
<!--                                      >-->
<!--                                    </div>-->
<!--                                    <div class="block-col" style="flex: 2 1 0%">-->
<!--                                      <p class="text-left">-->
<!--                                        <span-->
<!--                                          class="item-txid-desc"-->
<!--                                          v-if="tr.type_key == 'ctas'"-->
<!--                                          >Ra: {{ tr.to_u }}</span-->
<!--                                        >-->
<!--                                        <span class="item-txid-desc" v-else-->
<!--                                          >Vào: {{ tr.to_u }}</span-->
<!--                                        >-->
<!--                                      </p>-->
<!--                                    </div>-->
<!--                                    <div class="block-col status text-center">-->
<!--                                      <span v-if="tr.status == 1">-->
<!--                                        <span class="green">-->
<!--                                          <feather-icon-->
<!--                                            icon="CheckIcon"-->
<!--                                            svgClasses="w-4 h-4"-->
<!--                                          />-->
<!--                                        </span>-->
<!--                                        Complete-->
<!--                                      </span>-->
<!--                                      <span v-else-if="tr.status == 0">-->
<!--                                        <span class="red">-->
<!--                                          <feather-icon-->
<!--                                            icon="AlertCircleIcon"-->
<!--                                            svgClasses="w-4 h-4"-->
<!--                                          />-->
<!--                                        </span>-->
<!--                                        Đợi-->
<!--                                      </span>-->
<!--                                      <span v-else>-->
<!--                                        <span class="red">-->
<!--                                          <feather-icon-->
<!--                                            icon="AlertCircleIcon"-->
<!--                                            svgClasses="w-4 h-4"-->
<!--                                          />-->
<!--                                        </span>-->
<!--                                        Hủy-->
<!--                                      </span>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </li>-->
<!--                                <vs-pagination-->
<!--                                  v-if="totalRWGD > 0"-->
<!--                                  class="mt-4 mb-2"-->
<!--                                  :total="totalRWGD"-->
<!--                                  v-model="currentxWGD"-->
<!--                                  @input="clickPageWGD"-->
<!--                                ></vs-pagination>-->
<!--                              </ul>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div> &ndash;&gt;-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <vs-popup
      class="text-center"
      :title="$t('Transfers')"
      :active.sync="popupTransferActive"
    >
      <div class="header flex">
        <div class="leftHeader flex flex-col items-center">
          <span
            class="text-sm mb-2 font-bold white"

          >
            <span v-html="$t(`${textWalletHtml}`)"></span>
          </span>
          <span class="text-2xl font-bold">{{
              formatPrice(amountAcc, 2)
            }}</span>
        </div>
        <div class="rightHeader flex flex-col items-center">
          <span
            class="text-sm mb-2 font-bold white"
            v-html="$t(`${textAccLive}`)"
          ></span>
          <span class="text-2xl font-bold">{{
            formatPrice(amountAccLive, 2)
          }}</span>
        </div>
        <div @click="changeTransMoney" class="changeAmount cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            class="iconTransfer"
          >
            <g
              id="Group_10897"
              data-name="Group 10897"
              transform="translate(-559.431 -202.553)"
            >
              <g
                id="Group_4613"
                data-name="Group 4613"
                transform="translate(559.431 202.553)"
              >
                <g
                  id="Rectangle_2919"
                  data-name="Rectangle 2919"
                  transform="translate(0)"
                  fill="#e9f0fa"
                  stroke="#e5e5e5"
                  stroke-width="1"
                >
                  <rect width="30" height="30" rx="15" stroke="none"></rect>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    rx="14.5"
                    fill="none"
                  ></rect>
                </g>
              </g>
              <g id="conversion" transform="translate(567.976 210.905)">
                <path
                  id="Path_13963"
                  data-name="Path 13963"
                  d="M13.474,6.51H1V5.376H12.1l-3.4-3.4.8-.8,4.37,4.37a.567.567,0,0,1-.4.968Z"
                  transform="translate(-1 -1.172)"
                  fill="#031219"
                ></path>
                <path
                  id="Path_13964"
                  data-name="Path 13964"
                  d="M5.536,33.338l-4.37-4.37a.567.567,0,0,1,.4-.968H14.041v1.134H2.936l3.4,3.4Z"
                  transform="translate(-1 -20.395)"
                  fill="#031219"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="content flex flex-col items-center">
        <div class="inputGroup mb-3 w-3/4 relative">
          <vs-input
            class="inputx text-left w-full"
            :placeholder="$t('Enter the amount')"
            v-model="enterAmount"
          />
          <div class="input-append">
            <button
              type="button"
              class="btn cursor-pointer"
              @click="enterAllMoney"
              style="margin-top:18px"
            >
              {{$t('All')}}
            </button>
          </div>
        </div>
        <vs-button @click="clickTransMoney" color="#2569F8" type="filled"
          >{{$t('Transfers')}}</vs-button
        >
      </div>
    </vs-popup>

    <vs-popup
      class="text-center"
      :title="$t('Informations')"
      :active.sync="popupBillActive"
    >
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{$t('Time')}}:</span>
        <span>{{ timeShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{$t('Value')}}:</span>
        <span>{{ valueShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{$t('Type')}}:</span>
        <span>{{ $t(`${typeShow}`) }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{$t('Descriptions')}}:</span>
        <span>{{ $t(`${descriptShow}`) }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{$t('Note')}}:</span>
        <span>{{ noteShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{$t('Status')}}:</span>
        <span>{{ $t(`${statusShow}`) }}</span>
      </div>
    </vs-popup>

    <!--<nap-tien :isSidebarActive="addSidebarNapTien" @closeSidebar="toggleDataSidebarNapTien"/>
    <rut-tien :isSidebarActive="addSidebarRutTien" @closeSidebar="toggleDataSidebarRutTien"/> -->

    <vs-prompt title="" :active.sync="popupActiveNRTien" :buttons-hidden="true">
      <nap-rut-tien />
    </vs-prompt>
  </div>
</template>

<script>
var connectionNAP = false;
//import NapTien from '@/login/trade/slidebar/NapTien.vue'
//import RutTien from '@/login/trade/slidebar/RutTienS.vue'
import NapRutTien from "@/pages/trade/slidebar/NapRutTien.vue";
import getData from "@/pages/trade/navbar/components/data.json";
import AuthenticationService from "@/services/AuthenticationService";
import getSetSys from "@/services/settingSys.json";
import moment from "moment";
// import config from "@/config.json";

export default {
  components: {
    //NapTien,
    //RutTien,
    NapRutTien,
  },
  data() {
    return {
      timeProfit:"",
      totalHhv:0,
      totalKlgd:0,
      typeShow: "",
      timeShow: "",
      valueShow: "",
      descriptShow: "",
      noteShow: "",
      statusShow: "",

      getSetSys: getSetSys,

      popupActiveNRTien: false,
      popupBillActive: false,

      showVC: true,
      showVGD: false,
      showHisUSD: true,
      showHisHH: false,

      blObj: getData,
      textWalletHtml:
        '<span class="mr-1 color-blue uppercase green">USDT</span> <span>Wallet</span>',
      textAccLive: "Real Account",
      amountAcc: 0,
      amountAccLive: 0,
      typeChange: false, // false: Wall to Live, true: Live to Wallet
      enterAmount: "",
      popupTransferActive: false,
      currentxUSDT: 1,
      currentxHH: 1,
      currentxWGD: 1,
      email: "",
      password: "",
      error: null,
      addSidebarNapTien: false,
      addSidebarRutTien: false,
      balanceUser: 0,

      balanceVND:0,
      balanceUSDT: 0,
      balanceETH: 0,
      balanceBTC: 0,
      balancePaypal: 0,

      isLoading: false,
      dataHisWallet: [],
      totalRUSDT: 0,
      dataHisWalletHoaHong: [],
      totalRHH: 0,
      dataHisWalletWGD: [],
      totalRWGD: 0,

    };
  },
  computed: {
    //   giaTriUocTinh(){
    //       return this.formatPrice(getSetSys.quotePriceUSDT + getSetSys.quotePriceETH + getSetSys.quotePriceBTC + getSetSys.quotePricePAYPAL, 2)
    //   },
    balanceForUser() {
      return getData.balance;
    },
    balanceLive() {
      return getData.blLive;
    },
  },
  methods: {
    convertNote(note){
      if(note ){
        if(note.split("/")[1]){
          return note.split("/")[1]
        }else {
          return note
        }
      }else {
        return '-'
      }
    },
    getBankContent(type, currency, bank) {
      if (currency === "vnd") {
        if (type === "nt") {
          // Nạp tiền
          return `Ref: ${bank}`;
        }

        if (type === "rt") {
          const bankArr = bank.split("|");
          const tenNganHang = bankArr[0];
          const chiNhanhNganHang = bankArr[1];
          const soTaiKhoan = bankArr[2];
          const chuTaiKhoan = bankArr[3];
          return `<div>Tên ngân hàng: ${tenNganHang}</div>
                  <div>Chi nhánh: ${chiNhanhNganHang}</div>
                  <div>Số tài khoản: ${soTaiKhoan}</div>
                  <div>Chủ tài khoản: ${chuTaiKhoan}</div>`;
        }
      }

      return "";
    },
    async getUserInfo() {
      const res = await AuthenticationService.getInfoUser();
      if (res.data.success == 1) {
        this.balanceVND = res.data.data.order[1].balance
        let gData = res.data.data;
        (getData.uid = gData.id),
          (getData.email = gData.email),
          (getData.profile_image = gData.profile_image),
          (getData.displayName = gData.nick_name),
          (getData.uidLive = gData.order[1].u_id),
          // (getData.uidDemo = gData.order[0].u_id),
          (getData.vip = gData.vip),
          (getData.vip_lv = gData.level_vip),
          (getData.pen_commiss = gData.pending_commission),
          (getData.ref = gData.ref),
          (getData.c2fa = gData.fa2),
          (getData.id_front = gData.id_front),
          (getData.id_back = gData.id_back),
          (getData.first_name = gData.first_name),
          (getData.last_name = gData.last_name),
          (getData.verify = gData.verify),
          (getData.num_secu = gData.num_secury),
          (getData.country = gData.c),
          (getData.blLive = gData.order[1].balance);
        // getData.blDemo = gData.order[0].balance;
        (getData.balance = gData.balance), (getData.mkt = gData.mkt);

        localStorage.setItem("INFO", JSON.stringify(gData));
      } else {
        window.location.href = window.location.origin + "/login";
      }
    },

    popupBill(tr) {
      this.popupBillActive = true;

      this.timeShow = this.formatDateWallet(tr.created_at);

      if (getData.displayName.toUpperCase() == tr.from_u.toUpperCase()) {
        this.valueShow =
          tr.type_key == "rt" ||
          tr.type_key == "ct" ||
          tr.type_key == "ctsa" ||
          tr.type_key == "nn" ||
          tr.type_key == "mv"
            ? "-đ" + this.formatPrice(tr.amount, 2)
            : "+đ" + this.formatPrice(tr.amount, 2);
      } else if (getData.displayName.toUpperCase() == tr.to_u.toUpperCase()) {
        this.valueShow = "+đ" + this.formatPrice(tr.amount, 2);
      }

      switch (tr.type_key) {
        case "rt":
          this.typeShow = "Withdraw";
          break;
        case "nt":
          this.typeShow = `Recharge money ${
            tr.paypal_order_id ? "Paypal" : tr.currency.toUpperCase()
          }`;
          break;
        case "nn":
          this.typeShow = "Fast recharge";
          break;
        case "mv":
          this.typeShow = "Buy VIP";
          break;
        default:
      }

      if (
        tr.type_key == "ct" ||
        tr.type_key == "ctsa" ||
        tr.type_key == "ctas"
      ) {
        this.typeShow = "Transfer";
      }

      this.descriptShow =
        tr.type_key == "ctsa" || tr.type_key == "ctas" ? "" : tr.from_u + ": ";
      // this.descriptShow = this.descriptShow + tr.type;
      this.descriptShow =  tr.type;

      this.noteShow = this.convertNote(tr.note);
      if (tr.status == 1) {
        this.statusShow = "Done";
      } else if (tr.status == 0) {
        this.statusShow = "Pending";
      } else if (tr.status == 0) {
        this.statusShow = "Reject";
      }
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    // showPopNapRutTien() {
    //   // showPopNapRutTien(),
    //   //                         (getSetSys.isDepositOpen = 1),
    //   //                         (getSetSys.isWithdraOpen = 0)

    //   console.log(getSetSys.isDepositOpen);
    //   console.log(getSetSys.isWithdraOpen);
    //   this.popupActiveNRTien = true;
    // },

    showPopNapRutTien(type) {
      if(type == 0){//deposit
        getSetSys.isDepositOpen = true;
        getSetSys.isWithdraOpen = false;
      }
      else if(type == 1){//widthdraw
        getSetSys.isDepositOpen = false;
        getSetSys.isWithdraOpen = true;
      }
      this.popupActiveNRTien = true;
    },

    // viewNapTien(){
    //   this.toggleDataSidebarNapTien(true)
    // },

    // viewRutTien(){
    //   this.toggleDataSidebarRutTien(true)
    // },

    toggleDataSidebarNapTien(val = false) {
      this.addSidebarNapTien = val;
    },

    toggleDataSidebarRutTien(val = false) {
      this.addSidebarRutTien = val;
    },

    changeTransMoney() {
      if (this.typeChange) {
        // Live to Wallet
        this.typeChange = false;

        let b = this.textWalletHtml;
        let a = this.textAccLive;
        let d = getData.balance;
        let c = getData.blLive;

        this.textAccLive = b;
        this.textWalletHtml = a;
        this.amountAcc = d;
        this.amountAccLive = c;
      } else {
        // Live to Wallet
        this.typeChange = true;

        let a = this.textWalletHtml;
        let b = this.textAccLive;
        let c = getData.balance;
        let d = getData.blLive;

        this.textAccLive = a;
        this.textWalletHtml = b;
        this.amountAcc = d;
        this.amountAccLive = c;
      }
    },

    clickReloadMoneyDemo() {
      AuthenticationService.reloadMoneyDemo().then((res) => {
        if (res.data.success) {
          this.blObj.blDemo = 1000;

          return this.$vs.notify({
            text: "Demo account loaded.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
            position: "top-right",
          });
        }
      });
    },

    enterAllMoney() {
      if (this.typeChange) {
        // nếu true thì live to wallet

        this.enterAmount = getData.blLive;
      } else {
        // wallet to live

        this.enterAmount = getData.balance;
      }
    },

    clickTransMoney() {
      let amount = this.enterAmount.toString();
      amount = this.replaceAll(amount, ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");

      if (!this.isNumber(amount) || amount <= 0) {
        return this.$vs.notify({
          text: "Invalid value",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (this.typeChange) {
        // nếu true thì live to wallet

        // gửi tiền từ live tới tài khoản chính
        let obj = {
          email: getData.email,
          m: amount,
        };

        AuthenticationService.sendMoneyLiveToUsdt(obj).then((res) => {
          if (res.data.success) {
            getData.blLive -= amount;
            getData.balance += amount;

            this.amountAcc = getData.blLive;
            this.amountAccLive = getData.balance;

            // reload lại lịch sử
            this.getListHisTradeWGD();

            return this.$vs.notify({
              text: "Successful transfer",
              color: "success",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-check",
            });
          } else {
            return this.$vs.notify({
              text: "Your balance is not enough.",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      } else {
        // wallet to live

        // gửi tiền từ tài khoản chính tới live
        let obj = {
          email: getData.email,
          m: amount,
        };

        AuthenticationService.sendMoneyUsdtToLive(obj).then((res) => {
          if (res.data.success) {
            getData.blLive += amount;
            getData.balance -= amount;

            this.amountAcc = getData.balance;
            this.amountAccLive = getData.blLive;

            // reload lại lịch sử
            this.getListHisTradeWGD();

            return this.$vs.notify({
              text: "Successful transfer",
              color: "success",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-check",
            });
          } else {
            return this.$vs.notify({
              text: "Your balance is not enough.",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      }
    },

    getListHisTrade() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWallet().then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWallet = res.data.data;
          let c = (res.data.count / 10).toString();
          //this.totalRUSDT = Number(c.split(".")[0])
          this.totalRUSDT = Math.ceil(c);
        }
      });
    },

    clickPageUSDT(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletNumber(page).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWallet = res.data.data;
        }
      });
    },

    getListHisTradeHH() {
      this.isLoading = true;
      const today = new Date()
      let yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)
      this.timeProfit = yesterday
      let obj = {
        startDate :yesterday.toJSON().slice(0, 10) ,
        endDate: today.toJSON().slice(0, 10)
      }
      const result = '?' + new URLSearchParams(obj).toString();
      AuthenticationService.getListHisTradeWalletHH(result).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletHoaHong = res.data.data;
          const arrKlgd = []
            const arrHhv = []
          this.dataHisWalletHoaHong.map((item)=>{
            if(item.type == "klgd"){

             arrKlgd.push(item.pending_commission)
            }else{
              arrHhv.push(item.vip_commission)
            }
            this.totalKlgd = arrKlgd.reduce((a,b)=>a+b, 0);
            this.totalHhv  = arrHhv.reduce((a,b)=>a+b, 0);
          })

          let c = (res.data.count / 10).toString();
          //this.totalRHH = Number(c.split(".")[0])
          this.totalRHH = Math.ceil(c);
        }
      });
    },

    clickPageHH(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletHHNumber(page).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletHoaHong = res.data.data;
        }
      });
    },

    getListHisTradeWGD() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletWGD().then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletWGD = res.data.data;
          let c = (res.data.count / 10).toString();
          this.totalRWGD = Number(c.split(".")[0]);
        }
      });
    },

    clickPageWGD(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletWGDNumber(page).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletWGD = res.data.data;
        }
      });
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

    formatDateWallet(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY HH:mm:ss");
      }
    },
    formatDateAff2(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
    getBalanceWallet() {
      AuthenticationService.getBalanceWallet().then((res) => {
        let d = res.data;
        if (d.success == 3 || d.success == 4) {
          localStorage.removeItem("token");
          this.$router.push("/login").catch(() => {});
          return;
        }
        if (d.success) {
          let mU = d.data.usdt;
          let mE = d.data.eth;
          let mB = d.data.btc;
          let mP = d.data.paypal;

          this.balanceUSDT = mU;
          this.balanceETH = mE;
          this.balanceBTC = mB;
          this.balancePaypal = mP;

          // mặc định hiển thị tiền đầu vào
          this.getAmount = this.balancePaypal;
        }
      });
    },

    async getSysWallet() {
      await AuthenticationService.getSetupWallet().then((res) => {
        let g = res.data.data;
        getSetSys.quotePriceUSDT = this.replaceAll(
          this.formatPrice(g.qUSDT, 2),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePriceETH = this.replaceAll(
          this.formatPrice(g.qETH, 4),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePriceBTC = this.replaceAll(
          this.formatPrice(g.qBTC, 6),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePricePAYPAL = this.replaceAll(
          this.formatPrice(g.qPaypal, 2),
          ",",
          ""
        ); //  giá sấp sĩ USD
        getSetSys.quotePriceVND = this.replaceAll(
          this.formatPrice(g.qVND, 2),
          ",",
          ""
        ); //  giá sấp sĩ USDgetSetSys

        getSetSys.typeCurrUseSys = g.tCUseSys; // đồng tiền tệ sử dụng trong hệ thống

        getSetSys.minDepositBTC = g.mDBTC; // nạp tiền tối thiểu
        getSetSys.minDepositETH = g.mDETH; // nạp tiền tối thiểu
        getSetSys.minDepositUSDT = g.mDUSDT; // nạp tiền tối thiểu
        getSetSys.minDepositPaypal = g.mDPaypal; // nạp tiền tối thiểu

        getSetSys.minWithdrawalBTC = g.mWBTC; // rút tiền tối thiểu
        getSetSys.minWithdrawalETH = g.mWETH; // rút tiền tối thiểu
        getSetSys.minWithdrawalUSDT = g.mWUSDT; // rút tiền tối thiểu
        getSetSys.minWithdrawalPaypal = g.mWPaypal; // rút tiền tối thiểu

        getSetSys.isActiveWalletPaypal = g.iAWPaypal; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletETH = g.iAWETH; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletUSDT = g.iAWUSDT; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletBTC = g.iAWBTC; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletVND = g.iAWVND; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống

        getSetSys.feeRutPaypalNoiBo = g.fDPaypalNB;
        getSetSys.feeRutPaypalAcc = g.fDPaypalAcc;
        getSetSys.feeRutBTCNoiBo = g.fDBTCNB;
        getSetSys.feeRutBTCAcc = g.fDBTCAcc;
        getSetSys.feeRutETHNoiBo = g.fDETHNB;
        getSetSys.feeRutETHERC20 = g.fDETHERC20;
        getSetSys.feeRutUSDTNoiBo = g.fDUSDTNB;
        getSetSys.feeRutUSDTBEP20 = g.fDUSDTBEP20;
        getSetSys.feeRutUSDTERC20 = g.fDUSDTERC20;
      });
      this.getSetSys = JSON.parse(JSON.stringify(getSetSys));
    },

    sendMessage(message) {
      this.connectionNAP.send(JSON.stringify(message));
    },

    getInfoUser() {
      this.sendMessage({
        type: "accountDetail",
        data: { email: getData.email },
      });
    },
    onWindowLoad() {
      this.getInfoUser();
    },
  },
  async mounted() {
    await this.getSysWallet();

    this.getListHisTrade();
    setTimeout(() => {
      this.getListHisTrade();
    }, 1000);
    this.getListHisTradeWGD();
    this.getBalanceWallet();
  },

  async created() {
    const locale = localStorage.getItem('locale');
    if (locale) {
      this.$i18n.locale = locale;
    }
    await this.getUserInfo();
    this.amountAcc = getData.balance;
    this.amountAccLive = getData.blLive;

    let that = this;

    document.addEventListener('keyup', function (evt) {
      if (evt.keyCode === 27) {
        if(that.popupActiveNRTien == true){}
          that.popupActiveNRTien = false
      }
    });

    if (!connectionNAP) {
      connectionNAP = true;
      this.connectionNAP = new WebSocket(process.env.VUE_APP_BASE_URL_SOCKET_NAP);

      this.connectionNAP.onopen = function () {
        //console.log("Successfully connected to the echo websocket server...")
        this.onWindowLoad();
      }.bind(this);

      this.connectionNAP.onmessage = function (event) {
        let data = JSON.parse(event.data);

        if (data.type === "mess") {
          let dl = data.data;

          this.amountAcc += dl.usd * 1;
          getData.balance += dl.usd * 1;
          this.balanceUSDT += dl.usd * 1;

          return this.$vs.notify({
            text: dl.mess,
            color: dl.style,
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      }.bind(this);
    }
  },
};
</script>

<style lang="scss" scoped>
[dir] .theme-dark .vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead tr{
  background-color: red!important;
}

.text_th-table{
  color: #b6b5ad;
  font-size: 1.1rem!important;
  font-weight: 400;
}
vs-table{
  border: none!important;
}
.vs-con-table .vs-con-tbody .vs-table--tbody-table tr{
  background-color: #1c1901!important;
}
/deep/.vs-con-table .vs-con-tbody{
  border: none !important;
  border-radius: 10px;
}
#btn-all-money{
  margin-top: 20px !important;
}
#wallet {
  color: #fff;
  .box-coin-wrapper {
    .text-wallet {
      font-size: 24px;
    }
  }
}
.showV,
.showHisM {
  display: none;
}

.content .inputGroup .input-append button {
  width: 60px;
  height: 38px;
  background: transparent;
  border: none;
}

.content .inputGroup .input-append {
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}

.content {
  padding: 2rem;
}

.header {
  position: relative;
  background-color: #181c21;
}

.header .leftHeader {
  border-right: 1px solid rgba(255, 255, 255, 0.17);
}

.header .leftHeader,
.header .rightHeader {
  padding: 2rem;
  flex: 1 auto;
  max-width: 50%;
}

.header .iconTransfer {
  width: 40px;
  height: 40px;
}

.header .changeAmount {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.sectionTable {
  padding-top: 6rem;
}

.contentBox .background.backgroundLive {
  background-color:#f3cf47;
  color: #000000;
  //background-image: url("~@/assets/images/sky/livebanner.png");
}

.contentBox .background.backgroundDemo {
  background-color: #f3cf47;
  color: #000000;
  //background-image: url("~@/assets/images/sky/winbanner.png");
}

.backgroundImg {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.contentBox .background {
  position: relative;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/*.contentBox .background:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 32.08661%;
}

.contentBox .background > .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.contentBox .background .content {
    position: absolute;btn
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}*/

.contentBox .background .content {
  border-radius: 5px;
}

.contentBox .wbtn.btn-radius {
  border: 1px solid transparent;
  border-radius: 3px !important;
}

.button.wbtn.btn-large {
  padding: 11px 2.5rem;
}

.button.wbtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #2b3252;
  color: #fff;
  font-weight: 400;
}

.iconSubmit {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 5px;
}

.iconSubmit.iconSubmitLive {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS45ODEiIGhlaWdodD0iMjEuOTg2IiB2aWV3Qm94PSIwIDAgMjEuOTgxIDIxLjk4NiI+CiAgPGcgaWQ9ImNvbnZlcnNpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxLjk4MSAxMC45OTMpIHJvdGF0ZSgxMzUpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQzIiBkYXRhLW5hbWU9IlBhdGggMjYyNDMiIGQ9Ik0xNC41NzEsNi44SC45NzFBLjkxOC45MTgsMCwwLDEsMCw1LjgyOWEuOTE4LjkxOCwwLDAsMSwuOTcxLS45NzFIMTIuMjRMOS4wMzQsMS42NTFhLjkzOS45MzksMCwwLDEsMC0xLjM2LjkzOS45MzksMCwwLDEsMS4zNiwwbDQuODU3LDQuODU3YS44ODcuODg3LDAsMCwxLC4xOTQsMS4wNjlBLjkzNC45MzQsMCwwLDEsMTQuNTcxLDYuOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQ0IiBkYXRhLW5hbWU9IlBhdGggMjYyNDQiIGQ9Ik01LjgyOCwxNS44YS44ODIuODgyLDAsMCwxLS42OC0uMjkxTC4yOTEsMTAuNjUxQS44ODcuODg3LDAsMCwxLC4xLDkuNTgzLjkzNC45MzQsMCwwLDEsLjk3MSw5aDEzLjZhLjkxOC45MTgsMCwwLDEsLjk3MS45NzEuOTE4LjkxOCwwLDAsMS0uOTcxLjk3MUgzLjNsMy4yMDYsMy4yMDZhLjkzOS45MzksMCwwLDEsMCwxLjM2QS44ODIuODgyLDAsMCwxLDUuODI4LDE1LjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjI1NykiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo=);
}

.iconSubmit.iconSubmitDemo {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy43OTUiIGhlaWdodD0iMTguNDg4IiB2aWV3Qm94PSIwIDAgMTcuNzk1IDE4LjQ4OCI+CiAgPGcgaWQ9InJlZnJlc2gtMDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIDAuMDgxKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yNjI1OSIgZGF0YS1uYW1lPSJQYXRoIDI2MjU5IiBkPSJNMTguOCw3LjM2NiwxNy41NTUtLjA4MSwxNC45OTMsMi40ODFhOC44LDguOCwwLDEsMCwyLjksMTAuNjQxLjguOCwwLDAsMC0xLjQ2OC0uNjQyLDcuMjE1LDcuMjE1LDAsMSwxLTIuNTczLTguODU0bC0yLjUsMi41WiIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==);
}
.history {
  .text-wallet {
    font-weight: 400;
  }
}
.history .box-result-header {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  padding: 10px 5px;
  height: 50px;
}

.history .box-result .item {
  color: #fff;
  padding: 10px 5px;
  min-height: 50px;
}

.history .box-result .block-col.amount {
  flex: 0 0 93px;
  max-width: 250px;
  line-height: 23px;
  padding-top: 3px;
}

.history .box-result .block-col.status {
  flex: 0 0 95px;
  max-width: 95px;
}

.history .box-result .block-col p > span {
  line-height: 22px;
}

.history .box-result .item svg {
  width: 14px;
  margin-right: 5px;
  vertical-align: middle;
}

.history .box-result .block-col.amount span {
  padding: 0 10px;
}

.history .box-result .item span {
  font-size: 15px;
}

.history .box-result .block-col > span {
  line-height: 30px;
}

.history .box-result .block-col.note span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
  margin-left: 10px;
}

.history .item-txid-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  // padding: 3 5px;
  white-space: nowrap;
  display: block !important;
  padding-top: 3px;
  font-size: 15px;
}

.history-nav .nav-tabs {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.history .box-result .block-col > span {
  line-height: 30px;
}

.history .box-result .block-col {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  padding-top: 0;
  padding-bottom: 0;
}

.history .box-result .block-col.time {
  flex: 0 0 150px;
  max-width: 150px;
}

.history-body {
  background: #1c1901;
  border-radius: 10px;
  border: none;
  padding: 20px 0px 40px;
  border: 1px solid #1c1901;
  box-shadow: 0px -1px 8px 3px #fefefe40 inset;
}

.boxCoin img,
.boxCoin .currency-icon {
  max-width: 44px;
  margin-right: 0.5rem;
}

.boxCoin .boxCoinFooter {
  border-color: rgba(255, 255, 255, 0.1);
}

.boxCoin .boxCoinFooter img {
  width: 18px;
  margin-right: 5px;
}

.boxCoin .boxCoinFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-top: 1px solid #ddd;
  font-size: 1rem!important;
  font-weight: bold;
}

.boxCoinFooter a {
  color: #000000;
}

.boxCoin .boxCoin-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
}

.subBanner {
  color: #b9b9b9;
  height: 176px;
  width: 100%;
  background: #36362f;
  margin-bottom: 20px;
  border-radius: 10px;
  p {
    font-size: 24px;
  }
}

.subBanner .price {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

.subBanner .icon {
  display: inline-block;
  background-size: cover;
  width: 36px;
  height: 35px;
}

.boxCoin .currency-icon.PAYPAL,
.subBanner .icon.PAYPAL {
  background-image: url(data:image/png;base64,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);
}

.boxCoin .currency-icon.VND,
.subBanner .icon.VND {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgzIiBoZWlnaHQ9IjIyOCIgdmlld0JveD0iMCAwIDI4MyAyMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00My4zNDYyIDIxMy44OUwxLjQyMjQxIDEwNS4wNTVDLTIuNzg1MzkgOTQuMTI5OCAyLjY1Nzk3IDgxLjg1NzMgMTMuNTg5MyA3Ny42NDc1TDIxMS40NyAxLjQyNjI4QzIyMi4zOTUgLTIuNzgxNTIgMjM0LjY2NyAyLjY2MTg0IDIzOC44NzUgMTMuNTkzMkwyODAuNzk5IDEyMi40MjhDMjg1LjAwNyAxMzMuMzUzIDI3OS41NjMgMTQ1LjYyNiAyNjguNjMyIDE0OS44MzVMNzAuNzU3OCAyMjYuMDU3QzU5LjgyNjQgMjMwLjI2NCA0Ny41NjAxIDIyNC44MTUgNDMuMzQ2MiAyMTMuODlaIiBmaWxsPSIjREU0QzNDIi8+CjxwYXRoIGQ9Ik0yNTMuOTg0IDUyLjgwMDRMMTYuNzIxOCAxNDQuNzY3TDMyLjUyMDMgMTg1Ljc3OEwyNjkuNzkyIDkzLjg1MzhMMjUzLjk4NCA1Mi44MDA0WiIgZmlsbD0iIzdBNDkzMCIvPgo8cGF0aCBkPSJNMC4wMDIxOTcyNyAxMzcuODMzVjIxLjIwNTRDMC4wMDIxOTcyNyA5LjQ5NDk0IDkuNDk3MTQgMCAyMS4yMDc2IDBIMjMzLjI1N0MyNDQuOTY4IDAgMjU0LjQ2MyA5LjQ5NDk0IDI1NC40NjMgMjEuMjA1NFYxMzcuODMzQzI1NC40NjMgMTQ5LjU0MyAyNDQuOTY4IDE1OS4wMzggMjMzLjI1NyAxNTkuMDM4SDIxLjIwNzZDOS40OTcxNCAxNTkuMDM4IDAuMDAyMTk3MjcgMTQ5LjU0MyAwLjAwMjE5NzI3IDEzNy44MzNaIiBmaWxsPSIjNDM5OEQxIi8+CjxwYXRoIGQ9Ik0yMzMuMjU3IDBIMjEwLjcyN0w1MS42ODg4IDE1OS4wMzhIMjMzLjI1N0MyNDQuOTY4IDE1OS4wMzggMjU0LjQ2MyAxNDkuNTQzIDI1NC40NjMgMTM3LjgzM1YyMS4yMDU0QzI1NC40NjMgOS40OTQ5NCAyNDQuOTY4IDAgMjMzLjI1NyAwWiIgZmlsbD0iIzNFOENDNyIvPgo8cGF0aCBkPSJNMjEuMjA3NSA4NC44MTk0SDQyLjQxMjlWOTUuNDIyMUgyMS4yMDc1Vjg0LjgxOTRaIiBmaWxsPSIjNUVCM0QxIi8+CjxwYXRoIGQ9Ik0yMS4yMDc1IDExNi42MjhINDIuNDEyOVYxMjcuMjNIMjEuMjA3NVYxMTYuNjI4WiIgZmlsbD0iIzVFQjNEMSIvPgo8cGF0aCBkPSJNMTE2LjYzIDExNi42MjhIMTM3LjgzNVYxMjcuMjNIMTE2LjYzVjExNi42MjhaIiBmaWxsPSIjNUVCM0QxIi8+CjxwYXRoIGQ9Ik01My4wMTU2IDg0LjgxOTRINzQuMjE5Vjk1LjQyMjFINTMuMDE1NlY4NC44MTk0WiIgZmlsbD0iIzVFQjNEMSIvPgo8cGF0aCBkPSJNODQuODIxNyA4NC44MTk0SDEwNi4wMjdWOTUuNDIyMUg4NC44MjE3Vjg0LjgxOTRaIiBmaWxsPSIjNUVCM0QxIi8+CjxwYXRoIGQ9Ik0xMTYuNjMgODQuODE5NEgxMzcuODM1Vjk1LjQyMjFIMTE2LjYzVjg0LjgxOTRaIiBmaWxsPSIjNUVCM0QxIi8+CjxwYXRoIGQ9Ik0yMTcuMzUzIDIxLjIwNTRIMjI3Ljk1NlYzNy4xMDk0SDIxNy4zNTNWMjEuMjA1NFoiIGZpbGw9IiM1RUIzRDEiLz4KPHBhdGggZD0iTTE5Ni4xNDggMjEuMjA1NEgyMDYuNzUxVjM3LjEwOTRIMTk2LjE0OFYyMS4yMDU0WiIgZmlsbD0iIzVFQjNEMSIvPgo8cGF0aCBkPSJNMTc0Ljk0MiAyMS4yMDU0SDE4NS41NDVWMzcuMTA5NEgxNzQuOTQyVjIxLjIwNTRaIiBmaWxsPSIjNUVCM0QxIi8+CjxwYXRoIGQ9Ik0xNTMuNzM5IDIxLjIwNTRIMTY0LjM0VjM3LjEwOTRIMTUzLjczOVYyMS4yMDU0WiIgZmlsbD0iIzVFQjNEMSIvPgo8cGF0aCBkPSJNMjEuMjA3NSA1NS4xMzM1VjI5LjY4NzlDMjEuMjA3NSAyNS4wMDEzIDI1LjAwMzUgMjEuMjA1NCAyOS42OTAxIDIxLjIwNTRINTUuMTM1N0M1OS44MjIzIDIxLjIwNTQgNjMuNjE2MiAyNS4wMDEzIDYzLjYxNjIgMjkuNjg3OVY1NS4xMzM1QzYzLjYxNjIgNTkuODIwMSA1OS44MjIzIDYzLjYxNjEgNTUuMTM1NyA2My42MTYxSDI5LjY5MDFDMjUuMDAzNSA2My42MTYxIDIxLjIwNzUgNTkuODIwMSAyMS4yMDc1IDU1LjEzMzVaIiBmaWxsPSIjRkRCNjJGIi8+CjxwYXRoIGQ9Ik0yMS4yMDc1IDM3LjEwOTRIMzcuMTExNVY0Ny43MTIxSDIxLjIwNzVWMzcuMTA5NFoiIGZpbGw9IiNGRDdCMkYiLz4KPHBhdGggZD0iTTQ3LjcxNDQgMzcuMTA5NEg2My42MTYzVjQ3LjcxMjFINDcuNzE0NFYzNy4xMDk0WiIgZmlsbD0iI0ZEN0IyRiIvPgo8L3N2Zz4K");
}

.boxCoin .currency-icon.USDT,
.subBanner .icon.USDT {

  background-image: url(data:image/png;base64,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);
}

.boxCoin .currency-icon.ETH,
.subBanner .icon.ETH {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeDI9IjAuNSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjE3N2ZmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIwNWZjMyIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ikdyb3VwXzQ2MjUiIGRhdGEtbmFtZT0iR3JvdXAgNDYyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPgogICAgPGcgaWQ9Ikdyb3VwXzQ2MTQiIGRhdGEtbmFtZT0iR3JvdXAgNDYxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzI5MTkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDI5MTkiIHdpZHRoPSIzNyIgaGVpZ2h0PSIzNiIgcng9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfNDYwNCIgZGF0YS1uYW1lPSJHcm91cCA0NjA0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS4wNzYgNi4xMjMpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjIiIGRhdGEtbmFtZT0iUGF0aCAxMzkyMiIgZD0iTTE2LjUsNHY4Ljc4TDIzLjkxOSwxNi4xWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuMDc2IC00KSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjYpIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzEzOTIzIiBkYXRhLW5hbWU9IlBhdGggMTM5MjMiIGQ9Ik0xNi40MjIsNCw5LDE2LjFsNy40MjItMy4zMTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOSAtNCkiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjQiIGRhdGEtbmFtZT0iUGF0aCAxMzkyNCIgZD0iTTE2LjUsMjEuOTI0djUuOTY2bDcuNDI2LTEwLjI3M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjA3NiAtNC4xMzgpIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNikiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjUiIGRhdGEtbmFtZT0iUGF0aCAxMzkyNSIgZD0iTTE2LjQyMiwyNy44ODlWMjEuOTIzTDksMTcuNjE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkgLTQuMTM4KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzkyNiIgZGF0YS1uYW1lPSJQYXRoIDEzOTI2IiBkPSJNMTYuNSwyMC40OTVsNy40MjEtNC4zMDlMMTYuNSwxMi44NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4wNzYgLTQuMDkpIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjciIGRhdGEtbmFtZT0iUGF0aCAxMzkyNyIgZD0iTTksMTYuMTg2bDcuNDIyLDQuMzA5VjEyLjg3MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05IC00LjA5KSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjYpIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);
}

.boxCoin .currency-icon.BTC,
.subBanner .icon.BTC {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNTUiIHgyPSIwLjU0OSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmE5NDFhIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Q4N2QwMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ikdyb3VwXzE1MDEyIiBkYXRhLW5hbWU9Ikdyb3VwIDE1MDEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIgLTE1KSI+CiAgICA8ZyBpZD0iR3JvdXBfNDYxMyIgZGF0YS1uYW1lPSJHcm91cCA0NjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMiAxNSkiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzI5MTkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDI5MTkiIHdpZHRoPSIzNyIgaGVpZ2h0PSIzNiIgcng9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJQYXRoXzEzOTIxIiBkYXRhLW5hbWU9IlBhdGggMTM5MjEiIGQ9Ik01MDIuNjI5LDM1Ni45NDljLjMzMy0yLjIyNy0xLjM2My0zLjQyNC0zLjY4MS00LjIyMmwuNzUzLTMuMDE2LTEuODM3LS40NTctLjczNCwyLjkzN2MtLjQ4Mi0uMTItLjk3OC0uMjM0LTEuNDcxLS4zNDZsLjczNi0yLjk1Ni0xLjgzNS0uNDU4LS43NTEsMy4wMTUtMy43LS45MTctLjQ4OSwxLjk2MXMxLjM2Mi4zMTIsMS4zMzQuMzMyYS45NzcuOTc3LDAsMCwxLC44NTYsMS4wNjhsLTIuMDYsOC4yNjNhLjY2Ny42NjcsMCwwLDEtLjg0MS40MzVjLjAxOC4wMjctMS4zMzUtLjMzNS0xLjMzNS0uMzM1bC0uOTEyLDIuMSwzLjcuOTM0LS43NiwzLjA1MSwxLjgzNC40NTcuNzUzLTMuMDE4Yy41LjEzNi45ODcuMjYxLDEuNDYzLjM3OWwtLjc1LDMsMS44MzYuNDU3Ljc2LTMuMDQ1YzMuMTMxLjU5Miw1LjQ4Ni4zNTMsNi40NzYtMi40NzYuOC0yLjI4LS4wMzktMy42LTEuNjg3LTQuNDUzYTIuOTMsMi45MywwLDAsMCwyLjM0NS0yLjdtLTQuMiw1Ljg4MmMtLjU2OSwyLjI4LTQuNDA3LDEuMDQ4LTUuNjUyLjczOGwxLjAwOC00LjA0MmMxLjI0NS4zMTEsNS4yMzYuOTI2LDQuNjQ0LDMuM20uNTY5LTUuOTE1Yy0uNTE4LDIuMDc1LTMuNzEzLDEuMDIxLTQuNzUuNzYybC45MTMtMy42NjdjMS4wMzcuMjU5LDQuMzc2Ljc0MSwzLjgzNiwyLjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjQuMTY1IC0zMjYuMDI2KSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==);
}

.boxCoin .currency-icon {
  width: 44px;
  height: 44px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.boxCoin {
  color: #000000;
  border-radius: 5px;
  border: 1px solid rgba(112, 112, 112, 0.3);
  background-color: #f3cf47;
}

@media only screen and (max-width: 768px) {
  .history-body {
    overflow-x: auto;
  }
  .subBanner .info {
    justify-content: center;
  }
  .showHisM {
    overflow-x: auto;
    width: 860px;
  }
}
.router-content .content-area__content #wallet {
  height: calc(100vh - 110px);
}
.vs-table--not-data{
  padding-top: 16px!important;
}
</style>

<style>
.content .inputGroup input {
  background: #fff;
  color: #545454;
}

</style>
