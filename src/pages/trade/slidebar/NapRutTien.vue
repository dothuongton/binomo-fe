<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Ares DN
  Author URL:
========================================================================================== -->

<template>
  <div class="deposit_widthdraw">
    <div class="headerTab">
      <ul class="listTab mb-0 pl-0">
        <li
          class="itemTab"
          :class="{ active: (activeNRT = getSetSys.isDepositOpen) }"
          @click="
            (activeNRT = true),
              (getSetSys.isWithdraOpen = false),
              (getSetSys.isDepositOpen = true)
          "
        >
          <span>{{$t("Recharge")}}</span>
        </li>
        <li
          class="itemTab"
          :class="{ active: getSetSys.isWithdraOpen }"
          @click="
            (activeNRT = false),
              (getSetSys.isDepositOpen = false),
              (getSetSys.isWithdraOpen = true)
          "
        >
          <span>{{$t('Withdraw')}}</span>
        </li>
      </ul>
    </div>
    <div class="boxModal" :class="{ 'ld-loading': isLoading }">
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
      <div class="mainBoxModal">
        <div class="contenTab">
          <div class="combo d-flex mb-4">
            <!--            <div class="listBalance" style="flex: 1 1 0%">-->
            <!--              <div-->
            <!--                class="boxSelectUnit bgSecondary3 borderSecondary2 cbx"-->
            <!--                :class="{ activeSelectItem: showSelectTypeC }"-->
            <!--                @click="-->
            <!--                  showSelectTypeC-->
            <!--                    ? (showSelectTypeC = false)-->
            <!--                    : (showSelectTypeC = true)-->
            <!--                "-->
            <!--              >-->
            <!--                <div-->
            <!--                  id="selectedUnitDeposit"-->
            <!--                  :class="`selectedUnit hasitem ${textTypePay}`"-->
            <!--                >-->
            <!--                  <div :class="`icon ${textTypePay}`"></div>-->
            <!--                  <div class="info">-->
            <!--                    <div class="amount">-->
            <!--                      <span class="number">{{ getAmount }}</span>-->
            <!--                    </div>-->
            <!--                    <i class="material-icons absolute right-0" style="top: 5px"-->
            <!--                      >expand_more</i-->
            <!--                    >-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--                <div class="listUnits shadow">-->
            <!--                  <div-->
            <!--                    class="itemSelectUnit PAYPAL"-->
            <!--                    @click="selectTypePay('PAYPAL')"-->
            <!--                    v-if="getSetSys.isActiveWalletPaypal"-->
            <!--                  >-->
            <!--                    <div class="icon PAYPAL"></div>-->
            <!--                    <div class="info">-->
            <!--                      <div class="amount w-full">-->
            <!--                        <span class="number">{{ balancePaypal }}</span>-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div-->
            <!--                    class="itemSelectUnit VND"-->
            <!--                    @click="selectTypePay('VND')"-->
            <!--                    v-if="getSetSys.isActiveWalletVND"-->
            <!--                  >-->
            <!--                    <div class="icon VND"></div>-->
            <!--                    <div class="info">-->
            <!--                      <div class="amount w-full">-->
            <!--                        <span class="number"-->
            <!--                          >{{ activeNRT ? "Recharge" : "Withdraw" }} VNĐ</span-->
            <!--                        >-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div-->
            <!--                    class="itemSelectUnit USDT"-->
            <!--                    @click="selectTypePay('USDT')"-->
            <!--                    v-if="getSetSys.isActiveWalletUSDT"-->
            <!--                  >-->
            <!--                    <div class="icon USDT"></div>-->
            <!--                    <div class="info">-->
            <!--                      <div class="amount w-full">-->
            <!--                        <span class="number">{{ balanceUSDT }}</span>-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div-->
            <!--                    class="itemSelectUnit ETH"-->
            <!--                    @click="selectTypePay('ETH')"-->
            <!--                    v-if="getSetSys.isActiveWalletETH"-->
            <!--                  >-->
            <!--                    <div class="icon ETH"></div>-->
            <!--                    <div class="info">-->
            <!--                      <div class="amount w-full">-->
            <!--                        <span class="number">{{ balanceETH }}</span>-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div-->
            <!--                    class="itemSelectUnit BTC"-->
            <!--                    @click="selectTypePay('BTC')"-->
            <!--                    v-if="getSetSys.isActiveWalletBTC"-->
            <!--                  >-->
            <!--                    <div class="icon BTC"></div>-->
            <!--                    <div class="info">-->
            <!--                      <div class="amount w-full">-->
            <!--                        <span class="number">{{ balanceBTC }}</span>-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
          <div class="boxAddress">
            <div v-if="isPaypal">
              <div class="transfer-network">
                <div v-if="!activeNRT">
                  <h4 class="transfer-network-title mt-0">{{ $t("Net") }}</h4>
                  <ul
                    class="transfer-network-list transfer-network-list--deposit has-bsc"
                  >
                    <li
                      class="transfer-network-item"
                      :class="{ 'is-active': isActiveSelectTransPaypal }"
                      @click="isActiveSelectTransPaypal = true"
                    >
                      <span class="transfer-network-item-label">{{ $t('Internal') }}</span>
                      <span class="transfer-network-item-fee"
                      >Fee: {{ getSetSys.feeRutPaypalNoiBo }} USD</span
                      >
                    </li>
                    <li
                      class="transfer-network-item"
                      :class="{ 'is-active': !isActiveSelectTransPaypal }"
                      @click="isActiveSelectTransPaypal = false"
                    >
                      <span class="transfer-network-item-label">Paypal</span>
                      <span class="transfer-network-item-fee"
                      >{{ $t("Fee") }}: {{ getSetSys.feeRutPaypalAcc }} USD</span
                      >
                    </li>
                  </ul>
                </div>
                <div class="deposit_widthdraw_box">
                  <div class="form-group relative mt-4">
                    <h4 class="colorSecondary2">USD</h4>
                    <input
                      v-if="activeNRT"
                      type="number"
                      v-model="amount"
                      decimal="true"
                      :placeholder="`Minimum amount: ${getSetSys.minDepositPaypal} USDT`"
                      class="form-control"
                    />
                    <input
                      v-if="!activeNRT"
                      type="number"
                      v-model="amount"
                      decimal="true"
                      :placeholder="`: ${getSetSys.minWithdrawalPaypal} USDT`"
                      class="form-control"
                    />
                    <button
                      class="btn sendMax button primary"
                      v-if="!activeNRT"
                      @click="enterMaxAmount"
                    >
                      {{ $t('Max') }}
                    </button>
                  </div>
                  <div class="form-group relative" v-if="!activeNRT">
                    <h4 class="colorSecondary2">
                      {{
                        isActiveSelectTransPaypal
                          ? $t('Recipients nickname')
                          : $t('Recipients account')
                      }}
                    </h4>
                    <input
                      type="text"
                      :placeholder="`${
                        isActiveSelectTransPaypal
                        ? $t('Enter Recipients nickname')
                          : $t('Enter Recipients account')
                      }`"
                      class="form-control"
                    />
                  </div>
                  <div class="text-center address">
                    <div class="text-center p-4" v-if="isNap">
                      <h1>{{ $t('Payment in progress') }}</h1>
                      <p class="p-3">
                        {{ $t('There is a Popup window that will pop up, please pay to complete') }}.
                      </p>
                      <i
                      >* </i
                      >
                    </div>
                    <span class="noted" v-if="activeNRT"
                    >{{ $t('Minimum deposit is') }}
                      {{ getSetSys.minDepositPaypal }} USD</span
                    >
                    <small
                      class="colorRed enable2fa"
                      v-if="!getData.c2fa && !activeNRT && !DISABLE_2FA"
                    >{{ $t('You must enable 2FA to request a withdrawal') }}</small
                    >
                    <vs-button
                      v-if="activeNRT"
                      class="buttonCommon greenButton"
                      :class="{ hidden: isNap }"
                      type="filled"
                      @click="DepositPaypal"
                    >{{ $t('Recharge') }}
                    </vs-button
                    >
                    <vs-button
                      v-if="!activeNRT && !DISABLE_2FA"
                      class="buttonCommon redButton"
                      :disabled="!getData.c2fa && !DISABLE_2FA"
                      type="filled"
                      @click="WithDrawalPaypal"
                    >{{ $t('Withdraw') }}
                    </vs-button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div v-if="isVND" :class="isMobile ? 'scrollMobile' : ''">
              <div class="deposit_widthdraw_box" v-if="activeNRT">
                <div class="form-group relative mt-4">
                  <h4 class="colorSecondary2">USD</h4>
                  <input
                    type="number"
                    v-model="amount"
                    decimal="true"
                    :placeholder="`Minimum amount: ${getSetSys.minDepositUSDT} USDT`"
                    class="form-control"
                  />
                </div>
                <div class="text-center address">
                  <div class="p-3">
                    <div>
                      {{ $t('To pay, please transfer money according to the content') }}
                      {{ bank }}
                    </div>
                    <div>
                      {{ $t('with amount of money') }}
                      <b>{{
                          formatPrice(getSetSys.quotePriceVND * amount, 0)
                        }}</b>
                      VNĐ
                    </div>
                    <pre v-html="bankInfo"></pre>
                  </div>
                  <div>
                    <b
                    >{{ $t('After transferring, please press the deposit button on the side below') }}</b
                    >
                  </div>
                  <i
                  >* {{ $t('Note: The system will not be responsible if you send it wrong content') }}!</i
                  >
                  <span class="noted"
                  >1 USD =
                    {{ formatPrice(getSetSys.quotePriceVND, 0) }} VNĐ</span
                  >
                  <vs-button
                    class="buttonCommon greenButton"
                    :class="{ hidden: isNap }"
                    type="filled"
                    @click="DepositVND()"
                  >{{ $t('Recharge') }}
                  </vs-button
                  >
                </div>
              </div>

              <div v-else class="deposit_widthdraw_box">
                <div class="colorSecondary2">
                  {{ $t('USD in wallet') }} :
                  <span class="price mr-2"> {{ getAmount }}$ </span>
                </div>
                <div class="colorSecondary2">
                  {{ $t('Withdrawal amount converted') }} :
                  <span class="price mr-2">
                    {{ formatPrice(amount * getSetSys.quotePriceVND, 0) }} VNĐ
                  </span>
                </div>
                <div class="form-group relative mt-4">
                  <input
                    v-model="amount"
                    type="number"
                    decimal="true"
                    :placeholder="`Minimum amount: ${getSetSys.minWithdrawalUSDT} USDT`"
                    class="form-control"
                  />
                  <button
                    class="btn sendMax button primary"
                    @click="enterMaxAmount"
                  >
                    {{ $t("Max") }}
                  </button>
                </div>
                <div class="form-group relative">

                  <vs-select
                    v-model="tenNganHang"
                    label="Tên ngân hàng *"
                    class="mt-5 w-full"
                    name="item-category"
                    placeholder="Chose Bank"
                  >
                    <vs-select-item value="Vietcombank" text="Vietcombank"/>
                    <vs-select-item value="Vietinbank" text="Vietinbank"/>
                    <vs-select-item value="Techcombank" text="Techcombank"/>
                    <vs-select-item value="BIDV" text="BIDV"/>
                    <vs-select-item value="VPBank" text="VPBank"/>
                    <vs-select-item value="MBBank" text="MBBank"/>
                    <vs-select-item value="ACB" text="ACB"/>
                    <vs-select-item value="TPBank" text="TPBank"/>
                    <vs-select-item value="HDBank" text="HDBank"/>
                    <vs-select-item value="SHB" text="SHB"/>
                    <vs-select-item value="Sacombank" text="Sacombank"/>
                    <vs-select-item value="Abbank" text="Abbank"/>
                    <vs-select-item value="Baovietbank" text="Baovietbank"/>
                    <vs-select-item value="Eximbank" text="Eximbank"/>
                    <vs-select-item
                      value="Lienvietpostbank"
                      text="Lienvietpostbank"
                    />
                    <vs-select-item value="VIB" text="VIB"/>
                  </vs-select>
                </div>
                <div class="form-group relative">
                  <h4 class="colorSecondary2">{{ $t('Bank branch') }} *</h4>
                  <input
                    :placeholder="$t('Enter your Bank branch')"
                    type="text"
                    v-model="chiNhanhNganHang"
                    class="form-control"
                  />
                </div>
                <div class="form-group relative">
                  <h4 class="colorSecondary2">{{ $t('Account number') }} *</h4>
                  <input
                    :placeholder="$t('Enter Account number')"
                    type="text"
                    v-model="soTaiKhoan"
                    class="form-control"
                  />
                </div>
                <div class="form-group relative">
                  <h4 class="colorSecondary2">{{ $t('Account holder') }} *</h4>
                  <input
                    :placeholder="$t('Enter Account holder')"
                    type="text"
                    v-model="chuTaiKhoan"
                    class="form-control"
                  />
                </div>
                <div class="form-group relative">
                  <h4 class="colorSecondary2">{{ $t('Note') }} <i>{{ $t('(Optional)') }}</i></h4>
                  <input
                    type="text"
                    v-model="noteRut"
                    :placeholder="$t('Enter your note')"
                    class="form-control"
                  />
                </div>
                <div class="text-center address" v-if="DISABLE_2FA">
                  <vs-button
                    class="buttonCommon redButton"
                    type="filled"
                    @click="Withdrawal()"
                  >{{ $t("Withdraw") }}
                  </vs-button
                  >
                </div>
                <div v-if="!pop2FAokPay && !DISABLE_2FA">
                  <div class="text-center address">
                    <small class="colorRed enable2fa" v-if="!getData.c2fa"
                    >{{ $t('You must enable 2FA to request a withdrawal') }}</small
                    >
                    <vs-button
                      :disabled="!getData.c2fa"
                      class="buttonCommon redButton"
                      type="filled"
                      @click="Withdrawal()"
                    >{{ $t("Withdraw") }}
                    </vs-button
                    >
                  </div>
                </div>
                <div v-else-if="!DISABLE_2FA">
                  <div class="form-group relative">
                    <h4 class="colorSecondary2"><i>{{ $t('Enter 2FA code') }} *</i></h4>
                    <input
                      type="text"
                      v-model="code2FA"
                      :placeholder="$t('Enter 2FA code')"
                      class="form-control"
                    />
                    <div class="text-center address mt-4">
                      <vs-button
                        class="buttonCommon redButton"
                        type="filled"
                        @click="WithdrawalOKPay()"
                      >{{ $t('Agree') }}
                      </vs-button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <!--              ////v-else-->
<!--              <div class="transfer-network">-->
                <!--                <h4 class="transfer-network-title mt-0">{{$t('Chuyển tiền ngân hàng')}}</h4>-->
<!--                <ul-->
<!--                  class="transfer-network-list transfer-network-list&#45;&#45;deposit has-bsc"-->
<!--                >-->
                  <!--                  <li-->
                  <!--                    class="transfer-network-item"-->
                  <!--                    :class="{ 'is-active': isActiveSelectTransNB }"-->
                  <!--                    @click="-->
                  <!--                      (isActiveSelectTransNB = true),-->
                  <!--                        (isActiveSelectTransBEP20 = false),-->
                  <!--                        (isActiveSelectTransERC20 = false)-->
                  <!--                    "-->
                  <!--                  >-->
                  <!--                    <span class="transfer-network-item-label mt-2">{{-->
                  <!--                      !activeNRT ? $t('Internal') : "BEP20 (BSC)123"-->
                  <!--                    }}</span>-->
                  <!--                    <span class="transfer-network-item-fee" v-if="!activeNRT"-->
                  <!--                      >{{$t('Fee')}}: {{ getSetSys.feeRutUSDTNoiBo }} USDT</span-->
                  <!--                    >-->
                  <!--                  </li>-->
                  <!--                  <li-->
                  <!--                    v-if="!activeNRT"-->
                  <!--                    class="transfer-network-item transfer-network-item&#45;&#45;bsc"-->
                  <!--                    :class="{ 'is-active': isActiveSelectTransBEP20 }"-->
                  <!--                    @click="-->
                  <!--                      (isActiveSelectTransBEP20 = true),-->
                  <!--                        (isActiveSelectTransNB = false),-->
                  <!--                        (isActiveSelectTransERC20 = false)-->
                  <!--                    "-->
                  <!--                  >-->
                  <!--                    <span class="transfer-network-item-label">BEP20 (BSC)</span>-->
                  <!--                    <span class="transfer-network-item-fee" v-if="!activeNRT"-->
                  <!--                      >{{$t('Fee')}}: {{ getSetSys.feeRutUSDTBEP20 }} USDT</span-->
                  <!--                    >-->
                  <!--                  </li>-->
                  <!--<li v-if="!activeNRT" class="transfer-network-item" :class="{'is-active': isActiveSelectTransERC20}" @click="isActiveSelectTransERC20 = true, isActiveSelectTransNB = false, isActiveSelectTransBEP20 = false">
										<span class="transfer-network-item-label">ERC20</span>
										<span class="transfer-network-item-fee" v-if="!activeNRT">Phí: {{ getSetSys.feeRutUSDTERC20 }} USDT</span>
									</li>-->
<!--                </ul>-->
                <!--                <p-->
                <!--                  class="transfer-network-warn"-->
                <!--                  v-if="activeNRT"-->
                <!--                  :class="{ hidden: !isActiveSelectTransNB }"-->
                <!--                >-->
                <!--                  <span class="font-bold">{{$t('Attention')}}:</span>-->
                <!--                  {{$t('To ensure the safety of your assets, please confirm the blockchain you need again used as BSC.')}}-->

                <!--                </p>-->
                <!--                <p-->
                <!--                  class="transfer-network-warn"-->
                <!--                  v-if="!activeNRT"-->
                <!--                  :class="{ hidden: !isActiveSelectTransBEP20 }"-->
                <!--                >-->
                <!--                  <span class="font-bold">{{$t('Attention')}}:</span>-->
                <!--                  {{$t('To ensure the safety of your assets, please confirm the blockchain you need again used as BSC.')}}-->

                <!--                </p>-->
<!--              </div>-->
              <!--              ok here-->
              <div class="depos" :class="{ block: activeNRT }">
                <div>
                  <div class="grid grid-cols-1">
                    <div class="grid grid-cols-1 mr-5">
                      <div class="flex">
                        <div class="w-1/3">
                          {{$t('Bank')}}
                        </div>
                        <input class="w-2/3 bg-white text-black" readonly v-model="infoBankAccountAdmin.bank" required type="text"/>
                      </div>
                      <div class="flex mt-5">
                        <div class="w-1/3">
                          {{$t('Bank branch')}}
                        </div>
                        <input class="w-2/3 bg-white text-black" readonly v-model="infoBankAccountAdmin.branch_bank" required type="text"/>
                      </div>
                      <div class="flex mt-5">
                        <div class="w-1/3">
                          {{$t('Bank account holders')}}
                        </div>
                        <input class="w-2/3 bg-white text-black" readonly v-model="infoBankAccountAdmin.account_holder" type="text">
                      </div>
                      <div class="flex mt-5">
                        <div class="w-1/3">
                          {{$t('Bank account number')}}
                        </div>
                        <input class="w-2/3 relative bg-white text-black" readonly v-model="infoBankAccountAdmin.account_number" type="text">
                        <button class="btn-copy-content" @click="copyAccountNumber">
                          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                               xmlns:xlink="http://www.w3.org/1999/xlink"
                               width="20px" height="20px" viewBox="0 0 128 128" enable-background="new 0 0 128 128"
                               xml:space="preserve">
                              <g>
                                <g>
                                  <path fill="#546E7A" d="M88,24H16C7.164,24,0,31.164,0,40v72c0,8.836,7.164,16,16,16h72c8.836,0,16-7.164,16-16V40
                                    C104,31.164,96.836,24,88,24z M96,112c0,4.414-3.586,8-8,8H16c-4.41,0-8-3.586-8-8V40c0-4.414,3.59-8,8-8h72c4.414,0,8,3.586,8,8
                                    V112z"/>
                                </g>
                              </g>
                            <path fill="#B0BEC5" d="M24,56h56v-8H24V56z"/>
                            <path fill="#B0BEC5" d="M24,72h56v-8H24V72z"/>
                            <path fill="#B0BEC5" d="M24,88h56v-8H24V88z"/>
                            <path fill="#B0BEC5" d="M24,104h32v-8H24V104z"/>
                            <path fill="#CFD8DC" d="M112,0H40c-8.836,0-16,7.164-16,16h8c0-4.414,3.59-8,8-8h72c4.414,0,8,3.586,8,8v72c0,4.414-3.586,8-8,8v8
                                c8.836,0,16-7.164,16-16V16C128,7.164,120.836,0,112,0z"/>
                              </svg>
                        </button>
                      </div>
                      <div class="flex mt-5">
                        <div class="w-1/3">
                          {{$t('Content')}} <span style="color: red">*</span>
                        </div>
                        <input class="w-2/3 bg-white text-black font-normal" readonly v-model="contentRecharge" type="text">
                        <button class="btn-copy-content" @click="copyContentRecharge">
                          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                               xmlns:xlink="http://www.w3.org/1999/xlink"
                               width="20px" height="20px" viewBox="0 0 128 128" enable-background="new 0 0 128 128"
                               xml:space="preserve">
                              <g>
                                <g>
                                  <path fill="#546E7A" d="M88,24H16C7.164,24,0,31.164,0,40v72c0,8.836,7.164,16,16,16h72c8.836,0,16-7.164,16-16V40
                                    C104,31.164,96.836,24,88,24z M96,112c0,4.414-3.586,8-8,8H16c-4.41,0-8-3.586-8-8V40c0-4.414,3.59-8,8-8h72c4.414,0,8,3.586,8,8
                                    V112z"/>
                                </g>
                              </g>
                            <path fill="#B0BEC5" d="M24,56h56v-8H24V56z"/>
                            <path fill="#B0BEC5" d="M24,72h56v-8H24V72z"/>
                            <path fill="#B0BEC5" d="M24,88h56v-8H24V88z"/>
                            <path fill="#B0BEC5" d="M24,104h32v-8H24V104z"/>
                            <path fill="#CFD8DC" d="M112,0H40c-8.836,0-16,7.164-16,16h8c0-4.414,3.59-8,8-8h72c4.414,0,8,3.586,8,8v72c0,4.414-3.586,8-8,8v8
                                c8.836,0,16-7.164,16-16V16C128,7.164,120.836,0,112,0z"/>
                              </svg>
                        </button>
                      </div>
                      <div class="flex mt-5">
                        <div class="w-1/3">
                          {{$t('Amount Money')}}  <span style="color: red">*</span>
                        </div>
                        <input class="w-2/3 relative bg-white text-black" type="number" v-model="valueRecharge" required min="200">
                      </div>
                      <div class="btn-update-account-bank" @click="sendRequestRecharge">{{$t('Recharge')}}</div>
                    </div>
                    <div class="!text-[14px] grid grid-cols-1 mt-5">
                      <div>
                        <span class="mr-2">
                        <svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 512 512" xml:space="preserve">
                        <path style="fill:#70E5CF;" d="M501.372,245.372c0,135.525-109.86,245.385-245.372,245.385c-9.114,0-18.107-0.496-26.952-1.474
                          c-27.756-3.029-54.106-10.695-78.297-22.194L64.023,512l14.997-96.672c-42.352-44.094-68.393-103.976-68.393-169.956
                          C10.628,109.86,120.475,0,256,0c33.667,0,65.739,6.782,94.929,19.045C439.305,56.156,501.372,143.513,501.372,245.372z"/>
                        <path style="fill:#35D8B9;" d="M85.883,500.68l13.242-85.352c-42.352-44.094-68.393-103.976-68.393-169.956
                          c0-132.145,104.461-239.878,235.324-245.151C262.719,0.087,259.371,0,256,0C120.475,0,10.628,109.86,10.628,245.372
                          c0,65.98,26.041,125.862,68.393,169.956L64.023,512L85.883,500.68z"/>
                        <g>
                          <circle style="fill:#F95428;" cx="256" cy="116.655" r="43.169"/>
                          <polygon style="fill:#F95428;" points="314.984,371.784 314.984,405.196 197.016,405.196 197.016,371.784 218.513,371.784
                            218.513,230.321 197.016,230.321 197.016,196.922 293.487,196.922 293.487,371.784 	"/>
                        </g>
                        </svg>
                      </span>
                        <span>{{$t("Note")}}:</span>
                      </div>
                      <br>
                      <div class="!block leading-[28px]">
                        - {{$t('In the same account / family address / household / phone / IP address / shared computer / network environment are considered as the same member.')}}
                        <br>
                        - {{$t('If there are multiple accounts and the same IP address is not clear, it will be considered as an account with full authority for fraud handling.')}}
                        <br>
                        - {{$t('Registration amount need to be over')}} <span class="font-bold" style="color: red">200,000</span> VND
                          {{$t('please confirm the account number, if the provided account number is incorrect, our company will not be responsible.')}}
                        <br>
                        - {{$t('After the member fills in the account number for the first time, it will be permanently binding without any changes.')}}
                        <br>
                        - {{$t("Valid betting does not include mutual betting and the company's risk control department will review it. Please do not violate rules and regulations for withdrawal of funds for individual activities.")}}
                        <br>
                        - {{$t("If you use this platform to conduct any fraudulent money laundering activities, the company reserves the right to review the member's account or permanently terminate the member's services without prior notice")}}
                      </div>
                    </div>
                  </div>
                </div>
                <!--                <h4 class="text-center">-->
                <!--                  {{$t('Your USDT deposite address')}}-->
                <!--                </h4>-->
                <!--                <div class="text-center mt-4">-->
                <!--                  <div class="boxQRCode">-->
                <!--                    <div class="qr-code-container">-->
                <!--                      <canvas-->
                <!--                        height="100"-->
                <!--                        width="100"-->
                <!--                        style="height: 100px; width: 100px"-->
                <!--                      ></canvas>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->
                <!--                <div>-->
                <!--                  <div class="md:w-full">-->
                <!--                    <div class="address">-->
                <!--                      <input-->
                <!--                        v-model="textAddress"-->
                <!--                        readonly="readonly"-->
                <!--                        id="depositAddress"-->
                <!--                        class="bgSecondary colorSecondary2 text-center"-->
                <!--                      />-->
                <!--                    </div>-->
                <!--                    <div class="md:w-full text-center">-->
                <!--                      <div class="address">-->
                <!--                        <span class="noted"-->
                <!--                          >{{$t('Minimum deposit is')}}-->
                <!--                          {{ getSetSys.minDepositUSDT }} USDT</span-->
                <!--                        >-->
                <!--                        <vs-alert>-->
                <!--                          {{$t('After recharge please keep this window. If you wait 5 minutes If you don\'t see your account balance yet')}}-->
                <!--                          <span class="link" @click="scanWallet"-->
                <!--                            >{{$t('click for admin to check your account')}}</span-->
                <!--                          >-->
                <!--                        </vs-alert>-->
                <!--                        <br />-->
                <!-- <span class="noted">** Để giảm tải máy chủ, vui lòng khi nạp tiền rồi nhấp vào kiểm tra, hệ thống sẽ kiểm tra trong vòng 2 phút, nếu USDT chưa vào tài khoản thì xin nhấp KIỂM TRA lại. Vui lòng không Spam tránh việc khóa tài khoản!</span> -->
                <!--                        <vs-button-->
                <!--                          class="buttonCommon greenButton"-->
                <!--                          type="filled"-->
                <!--                          @click="CopyAddress"-->
                <!--                          >{{$t('Copy')}}</vs-button-->
                <!--                        >-->
                <!-- <vs-button  id="button-with-loading" class="vs-con-loading__container buttonCommon ml-2" color="warning" type="filled" :disabled="checkispay" @click="CheckPAY('USDT')">{{ ssDownSend }}</vs-button> -->
                <!---->
              </div>
            </div>
          </div>
          <!--                </div>-->
          <!--              </div>-->
          <div
            class="depos deposit_widthdraw_box"
            :class="{ block: !activeNRT }"
          >
            <div v-if="isUpdateInfoBankAccount">
              <div class="flex">
                <div class="w-1/3">
                  {{$t('Bank')}}
                </div>
                <select v-model="infoBankAccountUser.bank" class="rounded w-2/3 bg-white py-2 px-4 " :disabled="isHasInfo" name="" id="">
                  <option v-for="(item, i) in listBankRecharge" :key="i" :value=item.text >{{item.text}}</option>
                </select>
<!--                <input class="w-2/3 rounded-full bg-white text-black font-bold px-5" v-model="infoBankAccountUser.bank" required type="text"/>-->
              </div>
              <div class="flex mt-5">
                <div class="w-1/3">
                  {{$t('Bank branch')}}
                </div>
                <input class="w-2/3 rounded bg-white text-black font-medium px-5" :disabled="isHasInfo" v-model="infoBankAccountUser.branch_bank" required type="text"/>
              </div>
              <div class="flex mt-5">
                <div class="w-1/3">
                  {{$t('Bank account holders')}}
                </div>
                <input class="w-2/3 rounded bg-white text-black font-medium px-5" :disabled="isHasInfo" v-model="infoBankAccountUser.account_holder" type="text">
              </div>
              <div class="flex mt-5">
                <div class="w-1/3">
                  {{$t('Bank account number')}}
                </div>
                <input class="w-2/3 rounded relative bg-white text-black font-medium px-5" :disabled="isHasInfo" v-model="infoBankAccountUser.account_number"  type="number">
              </div>
              <div v-if="isHasInfo">
                <div class="flex mt-5">
                  <div class="w-1/3">
                    {{$t('Amount')}}
                  </div>
                  <input class="w-2/3 rounded relative bg-white text-black font-medium px-5" v-model="amountWithdraw" type="number">
                </div>
                <div class="flex mt-5">
                  <div class="w-1/3">
                    {{$t('Note')}}
                  </div>
                  <input class="w-2/3 rounded relative bg-white text-black font-medium px-5" v-model="noteWithdraw" type="text">
                </div>
                <div class="btn-update-account-bank" @click.prevent = sendRequestWithdraw>{{$t("Withdraw")}}</div>
                <div>
                        <span class="mr-2">
                        <svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 512 512" xml:space="preserve">
                        <path style="fill:#70E5CF;" d="M501.372,245.372c0,135.525-109.86,245.385-245.372,245.385c-9.114,0-18.107-0.496-26.952-1.474
                          c-27.756-3.029-54.106-10.695-78.297-22.194L64.023,512l14.997-96.672c-42.352-44.094-68.393-103.976-68.393-169.956
                          C10.628,109.86,120.475,0,256,0c33.667,0,65.739,6.782,94.929,19.045C439.305,56.156,501.372,143.513,501.372,245.372z"/>
                        <path style="fill:#35D8B9;" d="M85.883,500.68l13.242-85.352c-42.352-44.094-68.393-103.976-68.393-169.956
                          c0-132.145,104.461-239.878,235.324-245.151C262.719,0.087,259.371,0,256,0C120.475,0,10.628,109.86,10.628,245.372
                          c0,65.98,26.041,125.862,68.393,169.956L64.023,512L85.883,500.68z"/>
                        <g>
                          <circle style="fill:#F95428;" cx="256" cy="116.655" r="43.169"/>
                          <polygon style="fill:#F95428;" points="314.984,371.784 314.984,405.196 197.016,405.196 197.016,371.784 218.513,371.784
                            218.513,230.321 197.016,230.321 197.016,196.922 293.487,196.922 293.487,371.784 	"/>
                        </g>
                        </svg>
                      </span>
                  <span>Note:</span>
                  <div>
                    {{$t('Please withdraw at least 200,000/transaction')}}
                  </div>
                </div>
              </div>
              <div class="btn-update-account-bank" @click.prevent = "addInfoBankUser" v-else>{{$t("Update")}}</div>
            </div>
<!--            <div v-else class="mx-10">-->
<!--              <div>Please withdraw at least 200,000/transaction</div>-->
<!--              <input v-model="infoBankAccountAdmin.numberAccount" readonly class="w-full rounded-full mt-5">-->
<!--              <input v-model="infoBankAccountAdmin.nameAccount" readonly class="w-full rounded-full mt-5">-->
<!--              <input v-model="infoBankAccountAdmin.amountMoney" type="number" class="w-full rounded-full mt-5">-->
<!--              <div class="btn-update-account-bank">Submit</div>-->
<!--            </div>-->
            <!--                <div class="form-group relative">-->
            <!--                  <h4 class="colorSecondary2">USDT</h4>-->
            <!--                  <input-->
            <!--                    type="number"-->
            <!--                    v-model="amount"-->
            <!--                    decimal="true"-->
            <!--                    :placeholder="`${$t('Minimum amount')}: ${-->
            <!--                      activeNRT-->
            <!--                        ? getSetSys.minDepositUSDT-->
            <!--                        : getSetSys.minWithdrawalUSDT-->
            <!--                    } USDT`"-->
            <!--                    class="form-control"-->
            <!--                  />-->
            <!--                  <button-->
            <!--                    class="btn sendMax button primary"-->
            <!--                    @click="enterMaxAmount"-->
            <!--                  >-->
            <!--                    {{$t('Max')}}-->
            <!--                  </button>-->
            <!--                </div>-->
            <!--                <div class="form-group relative">-->
            <!--                  <h4 class="colorSecondary2">-->
            <!--                    {{-->
            <!--                      isActiveSelectTransNB-->
            <!--                      ? $t('Recipients nickname')-->
            <!--                        : $t(' Recipients address')-->
            <!--                    }}-->
            <!--                  </h4>-->
            <!--                  <input-->
            <!--                    type="text"-->
            <!--                    v-model="adddressWithDrawal"-->
            <!--                    :placeholder="`${-->
            <!--                      isActiveSelectTransNB-->
            <!--                        ? $t('Enter Recipients nickname')-->
            <!--                        : $t('Enter Recipients address')-->
            <!--                    }`"-->
            <!--                    class="form-control"-->
            <!--                  />-->
            <!--                </div>-->
            <!--                <div class="form-group relative">-->
            <!--                  <h4 class="colorSecondary2">{{$t('Note')}} <i>{{$t('(Optional)')}}</i></h4>-->
            <!--                  <input-->
            <!--                    type="text"-->
            <!--                    v-model="noteRut"-->
            <!--                    :placeholder="$t('Enter your note')"-->
            <!--                    class="form-control"-->
            <!--                  />-->
            <!--                </div>-->

            <!--                <div class="form-group relative">-->
            <!--                  <h4 class="colorSecondary2">Code 2FA</h4>-->
            <!--                  <input-->
            <!--                    type="text"-->
            <!--                    v-model="codeActive"-->
            <!--                    :placeholder="$t('Enter your code')"-->
            <!--                    class="form-control"-->
            <!--                  />-->
            <!--                </div>-->

            <!--                <div v-if="DISABLE_2FA">-->
            <!--                  <div class="text-center address">-->
            <!--                    <vs-button-->
            <!--                      class="buttonCommon redButton"-->
            <!--                      type="filled"-->
            <!--                      @click="Withdrawal()"-->
            <!--                      >{{$t('Withdraw')}}</vs-button-->
            <!--                    >-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--                <div v-else>-->
            <!--                  <div v-if="!pop2FAokPay">-->
            <!--                    <div class="text-center address">-->
            <!--                      <small class="colorRed enable2fa" v-if="!getData.c2fa"-->
            <!--                        >{{$t('You must enable 2FA to request a withdrawal')}}</small-->
            <!--                      >-->
            <!--                      <vs-button-->
            <!--                        :disabled="!getData.c2fa"-->
            <!--                        class="buttonCommon redButton"-->
            <!--                        type="filled"-->
            <!--                        @click="Withdrawal()"-->
            <!--                        >{{$t('Withdraw')}}</vs-button-->
            <!--                      >-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div v-else>-->
            <!--                    <div class="form-group relative">-->
            <!--                      <h4 class="colorSecondary2"><i>Enter 2FA code *</i></h4>-->
            <!--                      <input-->
            <!--                        type="text"-->
            <!--                        v-model="code2FA"-->
            <!--                        placeholder="Enter 2FA code"-->
            <!--                        class="form-control"-->
            <!--                      />-->
            <!--                      <div class="text-center address mt-4">-->
            <!--                        <vs-button-->
            <!--                          class="buttonCommon redButton"-->
            <!--                          type="filled"-->
            <!--                          @click="WithdrawalOKPay()"-->
            <!--                          >Agree</vs-button-->
            <!--                        >-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
          </div>
        </div>
      </div>
        </div>
  </div>
</template>

<script>
import getData from "@/pages/trade/navbar/components/data.json";
import AuthenticationService from "@/services/AuthenticationService";
import getSetSys from "@/services/settingSys.json";
import { isMobile } from "mobile-device-detect";
import QRCode from "qrcode";
import makeid from "../../../utils/makeid";

export default {
  components: {},

  data() {
    return {
      currentBalanceUser:0,
      valueRecharge: null,
      infoBankAccountAdmin:{
        bank: "TP Bank",
        account_number: "234234424244",
        account_holder: "Do Thuong Ton",
        branch_bank: "Hoan Kiem"
      },
      noteWithdraw:"",
      amountWithdraw:0,
      infoBankAccountUser:[],
      isUpdateInfoBankAccount:true,
      accountNumber:"",
      contentRecharge:"",
      disSendCode: false,
      codeActive: "",
      pop2FAokPay: !this.DISABLE_2FA,
      code2FA: "",

      isNap: false,
      isLoading: false,
      isPaypal: false,
      isVND: false,

      checkispay: false,

      textTypePay: "USDT",

      showSelectTypeC: false,

      getAmount: 0,

      amount: "",

      adddressWithDrawal: "",

      getData: getData,
      getSetSys: getSetSys,
      activeNRT: true,
      isActiveSelectTransPaypal: true,
      isActiveSelectTransNB: true,
      isActiveSelectTransBEP20: false,
      isActiveSelectTransERC20: false,

      textAddress: "",

      amountRut: 0,
      addressRut: 0,
      noteRut: "",
      tenNganHang: "",
      chiNhanhNganHang: "",
      soTaiKhoan: "",
      chuTaiKhoan: "",

      balanceUSDT: 0,
      balanceETH: 0,
      balanceBTC: 0,
      balancePaypal: 0,

      colorLoading: "#fff",
      ssDownSend: "Kiểm tra",
      bank: `${getData.displayName}_${makeid(4)}`,
      isMobile,

      DISABLE_2FA: true,
      bankInfo: "",
      currentUserEmail:"",
      isHasInfo:false,
      disableCheckWallet: false,

      listBankRecharge:[
        {
          text:"Ngân hàng Nông nghiệp và Phát triển Nông thôn VN(Agribank)",
          value:"Ngân hàng Nông nghiệp và Phát triển Nông thôn VN(Agribank)"
        },
        {
          text:"Ngân hàng Đại Dương(Oceanbank)",
          value:"Ngân hàng Đại Dương(Oceanbank)"
        },
        {
          text:"Đầu tư và Phát triển Việt Nam(BIDV)",
          value:"Đầu tư và Phát triển Việt Nam(BIDV)"
        },
        {
          text:"Công Thương Việt Nam(Vietinbank)",
          value:"Công Thương Việt Nam(Vietinbank)"
        },
        {
          text:"Ngoại thương Việt Nam(Vietcombank)",
          value:"Ngoại thương Việt Nam(Vietcombank)"
        },
        {
          text:"Việt Nam Thịnh Vượng(VPBank)",
          value:"Việt Nam Thịnh Vượng(VPBank)"
        },
        {
          text:"Quân đội(MB)",
          value:"Quân đội(MB)"
        },
        {
          text:"Kỹ Thương Việt Nam (Techcombank)",
          value:"Kỹ Thương Việt Nam (Techcombank)"
        },
        {
          text:"Ngân hàng Á Châu (ACB)",
          value:"Ngân hàng Á Châu (ACB)"
        },
        {
          text:"Sài Gòn-Hà Nội(SHB)",
          value:"Sài Gòn-Hà Nội(SHB)"
        },
        {
          text:"NH TMCP Phát triển Nhà Tp HCM (HD Bank)",
          value:"NH TMCP Phát triển Nhà Tp HCM (HD Bank)"
        },
        {
          text:"Ngân hàng TMCP Sài Gòn (SCB)",
          value:"Ngân hàng TMCP Sài Gòn (SCB)"
        },
        {
          text:"Sài Gòn Thương Tín (Sacombank)",
          value:"Sài Gòn Thương Tín (Sacombank)"
        },
        {
          text:"Ngân hàng Tiên Phong (TP bank)",
          value:"Ngân hàng Tiên Phong (TP bank)"
        },
        {
          text:"NH TMCP Quốc tế Việt Nam (VIB)",
          value:"NH TMCP Quốc tế Việt Nam (VIB)"
        },
        {
          text:"Hàng Hải Việt Nam (MSB)",
          value:"Hàng Hải Việt Nam (MSB)"
        },
        {
          text:"Ngân hàng Đông Nam Á (Sea Bank)",
          value:"Ngân hàng Đông Nam Á (Sea Bank)"
        },
        {
          text:"Ngân hàng xuất nhập khẩu Việt Nam (Eximbank)",
          value:"Ngân hàng xuất nhập khẩu Việt Nam (Eximbank)"
        },
        {
          text:"Ngân hàng TMCP Đông Á (Đông Á Bank)",
          value:"Ngân hàng TMCP Đông Á (Đông Á Bank)"
        },
        {
          text:"Bảo Việt (BaoViet Bank)",
          value:"Bảo Việt (BaoViet Bank)"
        },
        {
          text:"Sài Gòn Công Thương (Saigonbank)",
          value:"Sài Gòn Công Thương (Saigonbank)"
        },
        {
          text:"Xăng dầu Petrolimex (PG Bank)",
          value:"Xăng dầu Petrolimex (PG Bank)"
        }
      ]
    };
  },
  methods: {
    getBankInfoAdmin(){
      AuthenticationService.getInfoBankAdmin()
        .then(res=>{
          this.infoBankAccountAdmin = res.data.data[0]


        })
    },
    addInfoBankUser(){
      let obj = {
        bank:this.infoBankAccountUser.bank,
        account_number:this.infoBankAccountUser.account_number,
        account_holder:this.infoBankAccountUser.account_holder,
        branch_bank:this.infoBankAccountUser.branch_bank
      }
      AuthenticationService.createBankInfoUser(this.currentUserEmail, obj)
        .then(res=>{
          if(res){
            this.$vs.notify({
              text: 'Successfully updated bank information',
              iconPack: "feather",
              icon: "icon-check",
              position: "top-right",
              color: "success",
            });
          this.getInfoCurrentUser()
            this.isHasInfo = true
          }else{
            this.$vs.notify({
              text: 'Please fill in the information completely and accurately!',
              iconPack: "feather",
              icon: "icon-check",
              position: "top-right",
              color: "danger",
            });
          }
        })
    },
    getInfoCurrentUser(){
      AuthenticationService.getInfoUser()
        .then(res=>{
          let dataInfo = res.data.data
          this.currentUserEmail = dataInfo.email
          this.contentRecharge = dataInfo.nick_name
          this.currentBalanceUser = dataInfo.order[1].balance
        })
    },
    sendRequestRecharge() {
      if(this.contentRecharge && this.valueRecharge && this.valueRecharge >= 200000){
        let obj = {
          nick_name:this.contentRecharge,
          amount:this.valueRecharge,
          note:this.contentRecharge
        }
        AuthenticationService.rechargeBanking(obj)
          .then(res=>{
            if(res.data.success){
              this.$vs.notify({
                text: "Send request recharge success",
                iconPack: "feather",
                icon: "icon-check",
                position: "top-right",
                color: "success",
              });

            }else{
              this.$vs.notify({
                text: "Please",
                iconPack: "feather",
                icon: "icon-check",
                position: "top-right",
                color: "danger",
              });
            }
          })

      }else{
        this.$vs.notify({
          text: "Please fill full the information and make sure the charge value is more than 200.000đ",
          iconPack: "feather",
          icon: "icon-check",
          position: "top-right",
          color: "danger",
        });
      }

    },
    sendRequestWithdraw(){
      let obj = {
        nick_name:this.contentRecharge,
        amount:this.amountWithdraw,
        note:this.noteWithdraw
      }
      if(this.amountWithdraw>=200000 && this.noteWithdraw){
        if(this.currentBalanceUser >= this.amountWithdraw){
          AuthenticationService.withdrawBanking(obj)
            .then(res=>{
              if(res.data){
                this.$vs.notify({
                  text: "Send request withdraw success!",
                  iconPack: "feather",
                  icon: "icon-check",
                  position: "top-right",
                  color: "success",
                });
                this.getSetSys.isWithdraOpen = false
              }
            })
        }else{
          this.$vs.notify({
            text: "Balance is not enough!",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        }
      }else{
        this.$vs.notify({
          text: "Please fill full information and make sure amount more than 200000!",
          iconPack: "feather",
          icon: "icon-check",
          position: "top-right",
          color: "danger",
        });
      }
    },
    enterMaxAmount() {
      this.amount = this.parseLocaleNumber(this.getAmount);
    },
    getBankInfo() {
      AuthenticationService.getBankInfo().then((res) => {
        let d = res.data;
        if (d.success == 3 || d.success == 4) {
          localStorage.removeItem("token");
          this.$router.push("/login").catch(() => {});
          return;
        }
        if (d.success) {
          this.bankInfo = d.data;
        }
      });
    },

    DepositVND() {
      if (this.amount < getSetSys.minDepositUSDT) {
        return this.$vs.notify({
          text: `Minimum deposit is $${getSetSys.minDepositUSDT}.`,
          iconPack: "feather",
          icon: "icon-check",
          position: "top-right",
          color: "danger",
        });
      }

      let obj = {
        a: Number(this.amount),
        n: getData.displayName,
        al: getSetSys.quotePriceVND * +this.amount,
        b: this.bank,
      };

      AuthenticationService.depositVND(obj).then((res) => {
        let d = res.data;

        if (d.success == 3 || d.success == 4) {
          localStorage.removeItem("token");
          this.$router.push("/login").catch(() => {});
          return;
        }

        if (d.success) {
          this.isNap = false;
          return this.$vs.notify({
            text: "Deposit request submitted successfully!",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
            position: "top-right",
          });
        }
      });
    },

    DepositPaypal() {
      if (this.amount < getSetSys.minDepositPaypal) {
        return this.$vs.notify({
          text: `Minimum deposit is $${getSetSys.minDepositPaypal}.`,
          iconPack: "feather",
          icon: "icon-check",
          position: "top-right",
          color: "danger",
        });
      }

      this.isNap = true;

      let obj = {
        a: Number(this.amount),
        n: getData.displayName,
        // Bỏ qua 2fa
        f: this.DISABLE_2FA,
      };

      AuthenticationService.depositPaypal(obj).then((res) => {
        let d = res.data;

        if (d.success == 3 || d.success == 4) {
          localStorage.removeItem("token");
          this.$router.push("/login").catch(() => {});
          return;
        }

        if (d.success) {
          this.$vs.notify({
            text: "Please complete the steps to deposit.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "success",
          });
          setTimeout(() => {
            this.isNap = false;
          }, 30000);
          window.open(res.data.link);
        }
      });
    },

    WithDrawalPaypal() {
      if (!this.DISABLE_2FA) {
        if (!getData.c2fa) {
          return this.$vs.notify({
            text: "You must enable 2FA to request a withdrawal",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      }

      // đây là số tiền nhập
      let amount = Number(this.amount);

      if (amount <= 0 || amount == "") {
        return this.$vs.notify({
          text: "Invalid value",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (amount < getSetSys.maxWithdrawalUSDT) {
        return this.$vs.notify({
          text: `Minimum withdrawal amount is $${getSetSys.maxWithdrawalUSDT}.`,
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      // mặc định rút Internal

      let obj = {
        amS: amount,
        nick: getData.displayName,
        gc: this.noteRut,
        // bỏ qua 2fa
        f: this.DISABLE_2FA,
      };

      if (this.isActiveSelectTransPaypal) {
        // rút Internal

        let phi = getSetSys.feeRutPaypalNoiBo;
        let tongphi = amount + Number(phi);

        // kiểm tra số tiền gốc = số tiền nhập hay không
        if (this.getAmount < tongphi) {
          return this.$vs.notify({
            text: "Insufficient balance.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }

        AuthenticationService.withdrawalPaypalNoiBo(obj).then((res) => {
          let d = res.data;

          if (d.success == 3 || d.success == 4) {
            localStorage.removeItem("token");
            this.$router.push("/login").catch(() => {});
            return;
          }

          if (res.data.success) {
            return this.$vs.notify({
              text: "Withdrawal successful.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
              position: "top-right",
            });
          } else {
            return this.$vs.notify({
              text: "Insufficient balance.",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      } else {
        let phi = getSetSys.feeRutPaypalAcc;
        let tongphi = amount + phi;

        // kiểm tra số tiền gốc = số tiền nhập hay không
        if (this.getAmount < tongphi) {
          return this.$vs.notify({
            text: "Insufficient balance.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }

        AuthenticationService.withdrawalPaypalAccount(obj).then((res) => {
          let d = res.data;

          if (d.success == 3 || d.success == 4) {
            localStorage.removeItem("token");
            this.$router.push("/login").catch(() => {});
            return;
          }

          if (res.data.success) {
            return this.$vs.notify({
              text: "Withdrawal successful.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
              position: "top-right",
            });
          } else {
            return this.$vs.notify({
              text: "Insufficient balance.",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      }
    },

    CopyAddress() {
      const thisIns = this;
      this.$copyText(this.textAddress).then(function () {
        thisIns.$vs.notify({
          text: "Copied",
          color: "success",
          iconPack: "feather",
          position: "top-right",
          icon: "icon-check-circle",
        });
      });
    },
    copyAccountNumber(){
      const thisIns = this;
      this.$copyText(this.infoBankAccountAdmin.account_number).then(function () {
        thisIns.$vs.notify({
          text: "Copied",
          color: "success",
          iconPack: "feather",
          position: "top-right",
          icon: "icon-check-circle",
        });
      });
    },
    copyContentRecharge(){
      const thisIns = this;
      this.$copyText(this.contentRecharge).then(function () {
        thisIns.$vs.notify({
          text: "Copied",
          color: "success",
          iconPack: "feather",
          position: "top-right",
          icon: "icon-check-circle",
        });
      });
    },
    CheckPAY(val) {
      if (!this.checkispay) {
        this.checkispay = true;
        this.$vs.loading({
          //background: this.backgroundLoading,
          color: this.colorLoading,
          container: "#button-with-loading",
          scale: 0.45,
        });
        let giay = 120;
        let countD = setInterval(() => {
          this.ssDownSend = giay + "s";
          if (giay == 0) {
            this.checkispay = false;
            this.$vs.loading.close("#button-with-loading > .con-vs-loading");
            this.ssDownSend = "Kiểm tra";
            clearInterval(countD);
          }
          giay--;
        }, 1000);

        if (val == "USDT") {
          AuthenticationService.checkGiaoDich({ is: true }).then((res) => {
            let d = res.data;

            if (d.ok == 1) {
              this.checkispay = false;
              this.$vs.loading.close("#button-with-loading > .con-vs-loading");
              this.ssDownSend = "Kiểm tra";
              clearInterval(countD);

              let mo = d.money ? d.money : 0;

              getData.balance += mo;

              return this.$vs.notify({
                text: d.msg,
                color: "success",
                iconPack: "feather",
                position: "top-right",
                icon: "icon-check-circle",
              });
            } else {
              return this.$vs.notify({
                text: d.msg,
                color: "danger",
                iconPack: "feather",
                position: "top-right",
                icon: "icon-check-circle",
              });
            }
          });
        }
      } else {
        return this.$vs.notify({
          text: "Please wait!",
          color: "warning",
          iconPack: "feather",
          position: "top-right",
          icon: "icon-check-circle",
        });
      }
    },

    Withdrawal() {
      if (!this.DISABLE_2FA) {
        if (!getData.c2fa) {
          return this.$vs.notify({
            text: "You must enable 2FA to request a withdrawal",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      }

      // đây là số tiền nhập
      let amount = Number(this.amount);

      if (amount <= 0 || amount == "") {
        return this.$vs.notify({
          text: "Invalid value",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (amount < getSetSys.minWithdrawalUSDT) {
        return this.$vs.notify({
          text: `Minimum withdrawal amount is $${getSetSys.minWithdrawalUSDT}.`,
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (!this.DISABLE_2FA) {
        this.pop2FAokPay = true;
      }

      if (this.DISABLE_2FA) {
        // Bật 2FA thì mở lại cái này
        this.WithdrawalOKPay();
      }
    },

    WithdrawalOKPay() {
      if (!this.DISABLE_2FA) {
        if (!getData.c2fa) {
          return this.$vs.notify({
            text: "You must enable 2FA to request a withdrawal",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }

        if (!this.codeActive.trim()) {
          return this.$vs.notify({
            text: "Bạn phải nhập 2FA để yêu cầu rút tiền",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      }

      // mặc định rút Internal

      let amount = Number(this.amount);

      let obj = {
        amS: amount,
        nick: getData.displayName,
        gc: this.noteRut,
        address: this.adddressWithDrawal,
        nw: "",
        code: this.codeActive,
        amR: amount * getSetSys.quotePriceVND, // Số tiền VNĐ nhập
        tenNganHang: this.tenNganHang,
        chiNhanhNganHang: this.chiNhanhNganHang,
        soTaiKhoan: this.soTaiKhoan,
        chuTaiKhoan: this.chuTaiKhoan,
        // bỏ qua 2fa
        f: this.DISABLE_2FA,
      };

      const getAmountFormat = this.parseLocaleNumber(this.getAmount);

      if (this.isVND) {
        // Rút tiền qua thẻ ngân hàng
        // kiểm tra số tiền gốc = số tiền nhập hay không
        if (getAmountFormat < amount) {
          return this.$vs.notify({
            text: "Insufficient balance.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }

        if (
          !this.tenNganHang ||
          !this.chiNhanhNganHang ||
          !this.soTaiKhoan ||
          !this.chuTaiKhoan
        ) {
          return this.$vs.notify({
            text: "You need to enter enough of your bank information.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }

        obj.nw = "vnd";

        AuthenticationService.withdrawalUsdtVND(obj).then((res) => {
          let d = res.data;

          if (d.success == 3 || d.success == 4) {
            localStorage.removeItem("token");
            this.$router.push("/login").catch(() => {});
            return;
          }

          // cập nhật lại tiền ví nếu thành công
          this.balanceUSDT = this.formatPrice(getAmountFormat - amount, 2);
          this.getAmount = this.balanceUSDT;

          if (res.data.success == 1) {
            getData.balance -= amount;
            getData.balanceUSDT -= amount;

            return this.$vs.notify({
              text: "Withdrawal successful.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
              position: "top-right",
            });
          } else if (res.data.success === 10) {
            return this.$vs.notify({
              text: "Unverified account.",
              iconPack: "feather",
              icon: "icon-check",
              color: "danger",
              position: "top-right",
            });
          } else if (res.data.success === 2) {
            return this.$vs.notify({
              text: "The 2Fa code is incorrect.",
              iconPack: "feather",
              icon: "icon-check",
              color: "danger",
              position: "top-right",
            });
          } else {
            return this.$vs.notify({
              text: "Insufficient balance.",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });

        return;
      }

      if (this.isActiveSelectTransNB) {
        // rút Internal

        let phi = getSetSys.feeRutUSDTNoiBo;
        let tongphi = amount + Number(phi);

        // kiểm tra số tiền gốc = số tiền nhập hay không
        if (getAmountFormat < tongphi) {
          return this.$vs.notify({
            text: "Insufficient balance.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }

        obj.nw = "nb";

        AuthenticationService.withdrawalUserNoiBo(obj).then((res) => {
          let d = res.data;

          if (d.success == 3 || d.success == 4) {
            localStorage.removeItem("token");
            return this.$router.push("/login").catch(() => {});
          }

          if (d.success == 5) {
            return this.$vs.notify({
              text: "The nickname is incorrect or not account marketing.",
              iconPack: "feather",
              icon: "icon-check",
              color: "danger",
              position: "top-right",
            });
          }

          if (d.success == 2) {
            return this.$vs.notify({
              text: "The 2FA code is incorrect.",
              iconPack: "feather",
              icon: "icon-check",
              color: "danger",
              position: "top-right",
            });
          }

          if (res.data.success == 1) {
            getData.balance -= tongphi;
            getData.balanceUSDT -= tongphi;

            return this.$vs.notify({
              text: "Withdrawal successful.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
              position: "top-right",
            });
          } else if (res.data.success === 10) {
            return this.$vs.notify({
              text: "Unverified account.",
              iconPack: "feather",
              icon: "icon-check",
              color: "danger",
              position: "top-right",
            });
          } else {
            return this.$vs.notify({
              text: "Recipient not found.",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      } else if (this.isActiveSelectTransBEP20) {
        // rút BEP20 (BSC)

        let phi = getSetSys.feeRutUSDTBEP20;
        let tongphi = amount + Number(phi);

        // kiểm tra số tiền gốc = số tiền nhập hay không

        if (getAmountFormat < tongphi) {
          return this.$vs.notify({
            text: "Insufficient balance.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }

        obj.nw = "bep20";

        AuthenticationService.withdrawalUsdtBSC(obj).then((res) => {
          let d = res.data;

          if (d.success == 3 || d.success == 4) {
            localStorage.removeItem("token");
            this.$router.push("/login").catch(() => {});
            return;
          }

          // cập nhật lại tiền ví nếu thành công
          this.balanceUSDT = this.formatPrice(
            Number(this.balanceUSDT) - tongphi,
            2
          );
          this.getAmount = this.balanceUSDT;

          if (res.data.success == 1) {
            getData.balance -= tongphi;
            getData.balanceUSDT -= tongphi;

            return this.$vs.notify({
              text: "Withdrawal successful.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
              position: "top-right",
            });
          } else if (res.data.success === 10) {
            return this.$vs.notify({
              text: "Unverified account.",
              iconPack: "feather",
              icon: "icon-check",
              color: "danger",
              position: "top-right",
            });
          } else if (res.data.success === 2) {
            return this.$vs.notify({
              text: "The 2Fa code is incorrect.",
              iconPack: "feather",
              icon: "icon-check",
              color: "danger",
              position: "top-right",
            });
          } else {
            return this.$vs.notify({
              text: "Insufficient balance.",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      } else if (this.isActiveSelectTransERC20) {
        // rút ERC 20

        let phi = getSetSys.feeRutUSDTERC20;
        let tongphi = amount + Number(phi);

        // kiểm tra số tiền gốc = số tiền nhập hay không
        if (getAmountFormat < tongphi) {
          return this.$vs.notify({
            text: "Insufficient balance.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }

        obj.nw = "erc20";

        AuthenticationService.withdrawalUsdtERC(obj).then((res) => {
          let d = res.data;

          if (d.success == 3 || d.success == 4) {
            localStorage.removeItem("token");
            this.$router.push("/login").catch(() => {});
            return;
          }

          // cập nhật lại tiền ví nếu thành công
          this.balanceUSDT = this.formatPrice(
            Number(this.balanceUSDT) - tongphi,
            2
          );
          this.getAmount = this.balanceUSDT;

          if (res.data.success) {
            getData.balance -= tongphi;
            getData.balanceUSDT -= tongphi;

            return this.$vs.notify({
              text: "Withdrawal successful.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
              position: "top-right",
            });
          } else {
            return this.$vs.notify({
              text: "Insufficient balance.",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      }
    },
    selectTypePay(val) {
      this.isLoading = true;

      if (val === "VND") {
        this.isVND = true;
        this.isLoading = false;
      } else {
        this.isVND = false;
        if (val !== "PAYPAL") {
          setTimeout(() => {
            this.getAddressF(val);
          }, 100);
          this.isPaypal = false;
        } else {
          this.isPaypal = true;
          this.isLoading = false;
        }
      }

      switch (val) {
        case "PAYPAL":
          this.getAmount = this.balancePaypal;
          break;
        case "USDT":
        case "VND":
          this.getAmount = this.balanceUSDT;
          break;
        case "BTC":
          this.getAmount = this.balanceBTC;
          break;
        case "ETH":
          this.getAmount = this.balanceETH;
          break;
        default:
          this.getAmount = this.amountPaypal;
      }

      this.textTypePay = val;
    },

    getAddressF(coint) {
      this.isLoading = true;
      AuthenticationService.getAddressCoin(coint).then((res) => {
        this.isLoading = false;
        let d = res.data;
        if (d.success == 3 || d.success == 4) {
          localStorage.removeItem("token");
          this.$router.push("/login").catch(() => {});
          return;
        }
        this.textAddress = d.a;

        var canvas = document.querySelector("canvas");

        QRCode.toCanvas(
          canvas,
          d.a,
          {
            margin: 1,
            color: {
              dark: "#fc5f5f",
            },
          },
          function (error) {
            if (error) console.error(error);
            //console.log('success!');
          }
        );
      });
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

          this.balanceUSDT = this.formatPrice(mU, 2);
          this.balanceETH = this.formatPrice(mE, 4);
          this.balanceBTC = this.formatPrice(mB, 6);
          this.balancePaypal = this.formatPrice(mP, 2);

          // mặc định hiển thị tiền đầu vào
          this.getAmount = this.balanceUSDT;
        }
      });
    },
    parseLocaleNumber(stringNumber, locale = "en-US") {
      var thousandSeparator = Intl.NumberFormat(locale)
        .format(11111)
        .replace(/\p{Number}/gu, "");
      var decimalSeparator = Intl.NumberFormat(locale)
        .format(1.1)
        .replace(/\p{Number}/gu, "");

      return parseFloat(
        stringNumber
          .replace(new RegExp("\\" + thousandSeparator, "g"), "")
          .replace(new RegExp("\\" + decimalSeparator), ".")
      );
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    scanWallet() {
      if (this.disableCheckWallet) {
        return this.$vs.notify({
          text: `Please wait 30 seconds before sending the next request!`,
          iconPack: "feather",
          icon: "icon-check",
          position: "top-right",
          color: "danger",
        });
      }
      this.disableCheckWallet = true;
      AuthenticationService.scanWallet(getData.email);
      setTimeout(() => {
        this.disableCheckWallet = false;
      }, 30 * 1000); // 30s
      return this.$vs.notify({
        text: `Request sent to admin. Please wait!`,
        iconPack: "feather",
        icon: "icon-check",
        position: "top-right",
        color: "success",
      });
    },
  },
  watch:{
    currentUserEmail:{
      handler(val){
        if(val){
          AuthenticationService.getInfoCurrentBankUser(val)
            .then(res=>{
              if(res.data.data){
                this.infoBankAccountUser = res.data.data
              }
            })
        }
      }
    },
    infoBankAccountUser: {
      handler(val) {
        if (val.id) {
          this.isHasInfo = true
        } else {
          this.isHasInfo = false
        }
      }
    }
  },
  mounted() {},
  created() {
    this.getInfoCurrentUser()
    // lấy số tiền mặc định của ví
    this.getAmount = this.amountPaypal;

    // lấy mặc định coin USDT
    this.getAddressF("USDT");

    // lấy số tiền cái ví
    this.getBalanceWallet();
    this.getBankInfo();
    this.getBankInfoAdmin()


  },
};
</script>

<style scoped>
.link {
  color: rgb(221, 51, 221);
  cursor: pointer;
}

.boxSelectUnit.cbx .listUnits .itemSelectUnit .info {
  line-height: 30px;
  width: 100%;
}

.boxSelectUnit.cbx .listUnits .itemSelectUnit {
  height: 40px;
  padding: 5px;
}

.boxSelectUnit.cbx .listUnits .itemSelectUnit .info .amount .number {
  display: block;
  width: 100%;
}

.boxSelectUnit .listUnits .itemSelectUnit {
  padding: 10px 11px;
  height: 74px;
  color: #fff;
  border-bottom: 1px solid #142c37;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
}

.boxSelectUnit .listUnits .itemSelectUnit:hover {
  background-color: #313131;
}

.boxSelectUnit.cbx .listUnits {
  top: 40px;
}

.boxSelectUnit .listUnits {
  border: 1px solid #777777;
  background: transparent;
  border-top: none;
  display: none;
  position: absolute;
  top: 74px;
  left: 0px;
  width: 100%;
  z-index: 9;
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
  background: #011122;
}

.boxSelectUnit.cbx.activeSelectItem .listUnits {
  display: block;
}

.deposit_widthdraw .depos {
  display: none;
}
.deposit_widthdraw .depos input{
  padding: 10px;
}
.button {
  cursor: pointer;
  border: none;
  background: none;
  position: relative;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-weight: 700 !important;
  text-decoration: none;
}

.deposit_widthdraw .listTab {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid #6b6b6b;
  background: transparent;
}

.deposit_widthdraw .listTab .itemTab.active {
  font-weight: 700;
  position: relative;
}

.deposit_widthdraw .listTab .itemTab {
  width: 50%;
  height: 100%;
  text-align: center;
  background: transparent;
  font-size: 16px;
  line-height: 48px;
  font-weight: 400;
  cursor: pointer;
}

.deposit_widthdraw .listTab .itemTab.active:before {
  content: "";
  height: 4px;
  width: 160px;
  background: #fc5f5f;
  border-radius: 3px 3px 0 0;
  display: block;
  position: absolute;
  bottom: -1px;
  left: 50%;
  margin-left: -80px;
}

.deposit_widthdraw .listTab .itemTab.active span {
  color: #fff;
}

.deposit_widthdraw .boxModal .mainBoxModal {
  padding: 5px !important;
}

.deposit_widthdraw .combo .listBalance {
  margin: 0;
}

.deposit_widthdraw .deposit_widthdraw_box .form-control {
  color: #fff;
  border: 1px solid hsla(0, 0%, 100%, 0.23);
  border-radius: 8px;
  height: 46px !important;
  line-height: 46px !important;
  margin-bottom: 0 !important;
  padding: 0 10px;
}

.transfer-network-item--bsc .transfer-network-item-fee {
  color: #fedd3c !important;
  text-transform: uppercase;
  font-weight: 700;
}

.boxSelectUnit {
  height: 40px;
  border-radius: 5px;
  position: relative;
}

.borderSecondary2 {
  border: 1px solid;
  border-color: #fc5f5f;
}

.boxAddress,
.transfer-network {
  overflow: hidden;
}

.address .greenButton {
  background: #2569f8 !important;
}

.boxAddress .address button {
  width: 230px;
}

.address .buttonCommon {
  text-align: center;
  border-radius: 5px;
  color: #fff;
  height: 47px;
  padding: 11px 15px;
  line-height: 19px;
  font-weight: 700;
  font-weight: 16px;
  border: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  outline: none;
}

.boxAddress h4.colorSecondary2 {
  background: #111111;
  font-size: 12px;
  line-height: 14px;
  color: #778e9f;
  font-weight: 400;
  margin: 0;
  position: absolute;
  top: -6px;
  left: 30px;
  padding: 0 6px;
}

.boxAddress input {
  font-size: 14px;
  border: 1px solid #2f3342;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.boxAddress .form-group {
  margin-bottom: 20px;
}

.boxAddress .btn.sendMax,
.boxAddress .paste {
  position: absolute;
  right: 14px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.boxAddress .btn.sendMax {
  top: 50%;
  color: #fff;
  background-color: #fc5f5f;
  padding: 7px 10px;
  border-radius: 5px;
}

.boxAddress .noted {
  color: #fff;
  display: block;
  font-style: italic;
  padding: 10px;
}

.boxQRCode {
  margin-bottom: 20px;
}

.transfer-network-item.is-active:before {
  content: "";
  display: block;
  width: 17px;
  height: 17px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABHNCSVQICAgIfAhkiAAAAYxJREFUOE+N07tPwlAUBvDv2OJjITJqHLrqIsbZCAm7GuNo1EVHGBQY1QnQgdVJjIMDMSHxD7CLo0knVy+JcfUx8Sg95rbpg4Kld+y999fvnJ4SQksrswbLzAPIgChtbzMbIDJAfCcqCT18h4IPtFK/DpAEopaOrrIj6vTtHvIQrWS2AGxNAJxtmaynZl3IRmImCPu6qKpZ+ZDsHvDgPVaC0WYciYraoLgpkrPAw7GC5BywUR14ZYlaYk0iBkCrUUlcYGURuH1hXD5Z3nFRVYm0kslxgcdXxmnTB+x7xNkhpJCbwvICcNa08NsBggnGAj7ilyORfI7w9gmc3A9ws69AlvAvIJGukiKtaDZAOHBLut6bwu66P4ORAKMtaqpGWrmfAdNzsC8uFAk4Q3chaolzZ9iKfR1Em0FoKQV8fEW0nNFGT0nLqXWQAs9jxtQnfeoA+QNLyYgrMuzeuhs2NG22wolGssgErGy7wBDiYWXzEMyFkVTyMriBnloP/sFjkeCb7abL1VGN8MXguT+ofapXySW9rwAAAABJRU5ErkJggg==)
    0 0 no-repeat;
  position: absolute;
  top: -5px;
  right: -5px;
}

.transfer-network-item-label {
  font-size: 12px;
  line-height: 13px;
  margin-bottom: 2px;
  font-weight: 700;
}

.transfer-network-item.is-active .transfer-network-item-label {
  color: #fff;
  font-weight: 700;
}

.transfer-network-warn {
  border-radius: 5px;
  background: rgba(240, 185, 11, 0.26);
  border: 1px solid #f0b90b;
  color: #f0b90b;
  padding: 10px 15px;
  font-size: 12px;
  line-height: 13px;
  margin-bottom: 20px;
}

.transfer-network-item {
  background: #d0c4b9;
  border: 1px solid #9f9085;
  border-radius: 6px;
  margin: 0 4px;
  padding: 9px 0;
  color: #4d3434;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  cursor: pointer;
  position: relative;
}

.deposit_widthdraw .transfer-network-item.is-active {
  background-color: #fc5f5f;
  border-color: #fc5f5f;
}

.deposit_widthdraw .transfer-network-item {
  background: #2f3342;
  border: 1px solid #2f3342;
  color: #7c7c7c;
}

.transfer-network-list--deposit {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
}

.transfer-network-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0 -4px 15px;
}

.transfer-network-title {
  font-size: 12px;
  line-height: 1;
  margin-bottom: 15px;
}

.icon.USDT {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogIDxpbWFnZSBpZD0iXzgyNSIgZGF0YS1uYW1lPSI4MjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FNQUFBQkVwSXJHQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTE5VRXhVUlV4cGNTYWdlaVdnZWdBQUFDYWdleVdnZWxXcXFpYWhleWFnZWxXcVZTV2ZlUUIvZjM5L2Z3Q3FWUzZrZndELy95dW5nU2VwZ1FDcXFpYWdlMUN2a1pIYXRpV2dlalNuaEQycmlDcWpmZ0QvQUM2cWd5K3FnMUN1a3k2b2d5K3FnMysvcjArcmp5V2llemFyaUNXaWZFMnhsQ3lrZmkrbGdDdWpmemVyaUN1bWdWZTFtVENuZ1Rhc2lEU3JoV084cGwyN216U25oQ3VtZ0dhL21UU25oQzZsZ0Mra2dDYWhlaTJrZ0N1amZpdWtmbTdIcGpXcmhpK3BnMDJ4a2k2bWdWZTJtUytsZ1RDbWdqZW5obEswbGkrbGdTV2hlbFd2a1RHcWhUQ3FoWm15c3ArL3Z6R3BoRFdsaERhb2hGQzFrelduaEN1bmdWbTRtWisvbnoydWl6MnhqaXVuZ1N5aWZUeXFpVGFvaEVtdWpGVzNsa0d5amtheWtqV3NpQzZvZ1RDbmdqV3FoaTJuZ2ordmppK25naWFoZS8vLy95V2hleW1pZlNPZ2Vkdnc2U2VoZkNhbGZpV2dlaWlpZkNlaGV5bXVoU2l0aENhcGdTbW9nU0tmZVRHbWdUU25neDJkZGlXaWZDZXBnU1dqZkNhamZCcWNkUDcvL2htYmN5U2dlc3ZvM3grZWR6R21ndS80OVNXaGVoYWFjZTc0OVJlYWNoNmRkdXYyOHlDZmVDK2xnU1dtZmlhcGdDYW5meVNoZWlhamZTYWtmU21wZ1NLZmVCZWJjak9uZzNEQnFDZWlmS25heTJLN29QMysvaWlpZlRpcGhrcXhrUnFiYzZ6YnpDeWtmeGFhY3UzNDlPcjI4b2pMdGtpd2tLSFd4b2pNdDludjZCdWNkRkcwbG4vSXNYSENxVHVxaUpIUHZNN3E0V3kvcFNHZmQ4am8zUk9aYiszMzlNcm8zMlc4b1dPOG9HRzduMTY2bllMSnMvRDU5dkw1OXkya2YvNy8vL1Q2K0h6SHNDbXVoRE9uZ3FyYXl5aXRnekNtZ2QveDdOenc2cXZiekwvajJmTDY5Mk83b0hQQ3FyL2oyQ2FnZXltaWZHL0JwNFRLdERlb2hST1liNGJMdFNTZ2VXSzduL3I5L0dpK28vdjkvWUhKc2hPWWNFT3RqQmliY3l1amZtcStwQ3VqZlVDc2lpMmxmeWFoZWhtY2MvajgrK24xOG5qRXJYZkVyTzczOWQveTdQYjcraUtnZU56djZuL0hzVVF3dEUwQUFBQmxkRkpPVXdEKyt3SDgvUVArK3dQN0FnSUQvZ0g2L2dQK013ZjZwbC9zQWV2b0p1cnJDQ1Q4aXZ3azc5YnVoK2N0MUpla0Z4U1krUlNhL2Z6OTArM3JGNkhMSWM4anpzK0pJdEg2TTgzTENnaktpWWNtaWZzb0NGOWY5KzFkcFNZblhTaVU2TkdVNTEzUktIWXZ3d0FBQXVsSlJFRlVPTXR0VS9WYlZFRVVuUzNlZ3NTcXBJQ0VvQklpaW9xQzNkM2ROY05iMkY1Z2lRMldFRnhRQkJXbEpFd2FwVlRDN3U3dXpyL0JlYkdyZkhKK21ybm5mSFB2ekp3REFJMStmUUFZdWpRa2VMQzkvZURna0dWREFlakRBLy9BRm9DZ0lZSHFSRW1DVkpvZ1NWUUhEZ21paTJaWWdka0RSTW84QVo5RFFFaHcrSUk4cFdpQU43RCt5M3ZPVktSeiswSUwrbkxUejQzenhBUU5hK0RvdnNPWmdOMUFURmQ1T1RKbjJBSi85eHdoL0EvQ0hLK0oxQndPZGs3VGR2VEFZNFZxZ3BPZEF6NWxuc0tHMmtkMUExV3hVU3pFTkcveElsOENrdnE3MGNlaUxUZ1dmVk5QUXNKUHRBYS94Z2dsRjBJeXN3WjF3NzFNRWtLdWNnUUFvVzY3OEFYSWl1ZDBYVmRVcEtNWER5dXdnRWgyQ3dPdWFnRnVWMXoxTk9WRVNrdkRFNFNlTmJUZ1pXTlZNUzRMOGwyQlMyOCtOVkNNd1dUTSt2amhJRUtWcE41b05CbmtWSlhmMndVTWtuRHdTaWJWR01WdjM3OXJScWo5WmVkcnNWRWpsZUV5UnpJYURFekFJOGkwNWRXbjJscFB2bW52NnVwb1BObmFkcXE2WElzVlJOSVlZQy9Gdk9iRzBjTjEyYVNwOHh0Q0hka21NcnZ1OEtIQ0xLeVFqcVFGWk1iVld5V0dWeGxOUDMrZE9mTTkvVVdtM2xCeTdVSUdTUXZvRmpDMllIL1prZnJUWDgvK3Jqbjc1WFQ5a2JMOUJic2gwNElaRXU3UnBwWStyajMwQTZGUFIyc0xTK08wZXlBN0pIdE5VaWJXSEdnNi9obWg1a2NQRG1qRU1wSzU1aXJnbWk5Z2YyL2ZIUmkvSGFGdDkyK1QrOWlTUUwwU2hORlBUVU11anFNRThiRXhadGNrcndnRllCajFXVDBMdU1waEFQQVdpSHdKaStDZ1RsZHBFUkIrdy8xNTJKaFRHTVBRZ2pTRXJsc0VOb3I1bU1hV202d1Nzb0pMVjlMU0xwOW5CVUxWSkc5c09kQUxUTzIva3pXbFBIWHYzbFE1YThtZC9jZGprckc5aDRxMXZSaUQ2ZStzOHBoaGpvNFY4Sm1saUJKU3dZbkJvSUlqakZMTTlURUhoenBqU2NCd1paS0FIMDVGTDV3dlNMcTRQR0RPMytoUmM0QjE2emZqOENibjVpYmo4RzdZdEJvdy9jMmc0aCs1WmV6V2lGR2pJamFPWFJ1SjQ5K1BZZjRBS2NwYTNSVHNiVzBBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-position: center;
}

.icon.PAYPAL {
  background: url("~@/assets/images/sky/icon_bank/paypal-mini.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 20px;
}

.icon.VND {
  background: url("~@/assets/images/sky/icon_bank/vnd-mini.svg");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 20px;
}

.icon.ETH {
  background: url("~@/assets/images/sky/eth.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

.icon.BTC {
  background: url("~@/assets/images/sky/bitcoin.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

.icon {
  width: 30px;
  height: 20px;
  text-align: center;
  margin: 5px 4px;
}

.selectedUnit {
  padding: 5px 20px 5px 3px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  cursor: pointer;
}

.selectedUnit .number {
  color: #fff !important;
}

.transfer-network-item.is-active .transfer-network-item-fee {
  color: hsla(0, 0%, 100%, 0.5);
}

.transfer-network-item-fee {
  font-size: 12px;
  line-height: 13px;
}

.boxAddress .enable2fa {
  font-style: italic;
  display: block;
  clear: both;
  margin-bottom: 5px;
  color: #fc5f5f;
}

.address .buttonCommon {
  text-align: center;
  border-radius: 5px;
  color: #fff;
  height: 47px;
  padding: 11px 15px;
  line-height: 19px;
  font-weight: 700;
  border: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  outline: none;
}

.boxAddress .address button {
  width: 230px;
}

.address .redButton {
  background: #fc5f5f !important;
}

.qr-code-container canvas {
  width: 150px !important;
  height: 150px !important;
}

.scrollMobile {
  max-height: calc(100vh - 330px);
  overflow-y: auto;
  overflow-x: hidden;
}
.btn-copy-content{
  position: absolute;
  right: 36.5%;
  padding: 4px 2px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 2px;
}
@media screen and (max-width: 768px){
  .btn-copy-content{
    right: 12%;
  }
}
.btn-update-account-bank{
  margin: 20px auto;
  width: 100px;
  height: 50px;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  line-height: 28px;
  border-radius: 15px;
  background-color: #fc5f5f;
  cursor: pointer;
  box-shadow: 1px 1px 1px;
}
</style>
