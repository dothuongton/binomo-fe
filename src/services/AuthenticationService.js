import Api from "@/services/Api";
import ApiAdmin from "@/services/ApiAdmin";
import apiAdmin from "@/services/ApiAdmin";
import api from "@/services/Api";
import ApiAgency from "@/services/ApiAgency"

export default {
  //=========== USER

  loginUser(obj) {
    return Api().post("api/users/login", obj);
  },

  getTokenActive(obj) {
    return Api().post("api/users/activeUser", obj);
  },

  registerUser(obj) {
    return Api().post("api/users/createAccount", obj);
  },

  forgotPassUser(obj) {
    return Api().post("api/users/forgot-password", obj);
  },

  resendConfirUser(obj) {
    return Api().post("api/users/resend-confirmation-email", obj);
  },

  changePassword(obj) {
    return Api().patch("api/users/change-password", obj);
  },

  changePassword2(obj) {
    return Api().patch("api/users/change-password-is", obj);
  },

  getInfoUser() {
    return Api().get("api/users/info");
  },

  updateXacMinhTK(obj) {
    return Api().post("api/users/update-info", obj);
  },

  activeGG2FA(obj) {
    return Api().post("api/users/update-gg2fa", obj);
  },

  unActiveGG2FA(obj) {
    return Api().post("api/users/disable-gg2fa", obj);
  },

  sendGG2FA() {
    return Api().get("api/users/code-2fa");
  },

  createGG2FA() {
    return Api().get("api/users/create-gg2fa");
  },

  loginGG2FA(obj) {
    return Api().post("api/users/login-2fa", obj);
  },

  reloadMoneyDemo() {
    return Api().put("api/users/demo");
  },

  getListHitoryOrder(type) {
    return Api().get("api/users/listbo/" + (type - 1));
  },
  getListHistoryOrderNew(type) {
    return Api().get("api/users/list-open-bet/" + (type - 1));
  },

  sendMoneyLiveToUsdt(obj) {
    return Api().post("api/users/live-to-usdt", obj);
  },

  sendMoneyUsdtToLive(obj) {
    return Api().post("api/users/usdt-to-live", obj);
  },

  withdrawalUserNoiBo(obj) {
    return Api().post("api/users/withdrawal", obj);
  },

  withdrawalUsdtERC(obj) {
    return Api().post("api/users/withdrawal-erc", obj);
  },

  withdrawalUsdtBSC(obj) {
    return Api().post("api/users/withdrawal-bsc", obj);
  },

  withdrawalUsdtVND(obj) {
    return Api().post("api/users/withdrawal-vnd", obj);
  },

  withdrawalPaypalNoiBo(obj) {
    return Api().post("api/users/paypal/withdrawal", obj);
  },

  withdrawalPaypalAccount(obj) {
    return Api().post("api/users/paypal/withdrawal-acc", obj);
  },

  getBalanceWallet() {
    return Api().get("api/users/balance-wallet");
  },

  scanWallet(email) {
    return Api().get(`api/users/scan-wallet?e=${email}`);
  },

  getBankInfo() {
    return Api().get("api/users/bank-info");
  },

  depositWallet(obj) {
    return Api().post("api/users/usdt-wallet", obj);
  },

  UserBuyVip() {
    return Api().post("api/users/buy-vip");
  },

  getNguoiGioiThieu() {
    return Api().get("api/users/presenter");
  },

  getThongTinLoiNhuan() {
    return Api().get("api/users/bo-statistics");
  },

  getListHisOrder() {
    return Api().get("api/users/history-order");
  },

  getSeachListOrder(obj) {
    return Api().post("api/users/history-order-date", obj);
  },

  getListHisTradeWallet() {
    return Api().get("api/users/history-wallet");
  },

  getListHisTradeWalletNumber(num) {
    return Api().get("api/users/history-wallet/" + num);
  },

  getListHisTradeWalletHH(obj) {
    return Api().get("api/users/history-wallet-co"+ obj);
  },

  getListHisTradeWalletHHNumber(num) {
    return Api().get("api/users/history-wallet-co/" + num);
  },

  getListHisTradeWalletWGD() {
    return Api().get("api/users/history-wallet-trade");
  },

  getListHisTradeWalletWGDNumber(num) {
    return Api().get("api/users/history-wallet-trade/" + num);
  },

  chiTietLoiNhuanHoaHong() {
    return Api().get("api/users/commission-details");
  },

  chiTietLoiNhuanHoaHongPage(num) {
    return Api().get("api/users/commission-details/" + num);
  },

  getSeachListChiTietHH(obj) {
    return Api().post("api/users/commission-details-date", obj);
  },

  getSeachListLvAgency(obj) {
    return Api().post("api/users/agency-search-lv", obj);
  },

  getSeachListNameAgency(obj) {
    return Api().post("api/users/agency-search-name", obj);
  },

  depositPaypal(obj) {
    return Api().get("api/paypal/pay?a=" + obj.a + "&n=" + obj.n);
  },

  depositVND(obj) {
    return Api().get(
      "api/pay/vnd?a=" + obj.a + "&n=" + obj.n + "&al=" + obj.al + "&b=" + obj.b
    );
  },

  getAddressCoin(coin) {
    return Api().get("api/wallet/" + coin + "/address");
  },

  transWallet(obj) {
    return Api().post("api/exs/trans", obj);
  },

  getSetupWallet() {
    return Api().get("api/setup/wallet");
  },

  getExChangeUser() {
    return Api().get("api/exs/hisUser");
  },

  getStatusServer() {
    return Api().get("status");
  },
  // bank


  getInfoCurrentBankUser(email){
    return Api().get("api/bank/getBank?email="+ email)
  },
  createBankInfoUser(email, obj){
    return Api().post("api/bank/create?email=" + email, obj)
  },
  rechargeBanking(obj){
    return Api().post("api/users/recharge-banking", obj)
  },
  withdrawBanking(obj){
    return Api().post("api/users/withdraw-banking", obj)
  },
  // end bank
  checkGiaoDich(obj) {
    return Api().post("api/user/balance/trans/check", obj);
  },

  getListNotifi(obj) {
    return Api().post("api/users/getListNotifi", obj);
  },

  updateListNotifi(obj) {
    return Api().post("api/users/updateListNotifi", obj);
  },

  getNotifi(obj) {
    return Api().post("api/users/listnotifi", obj);
  },
  getNotifiAddMoney(){
    return Api().get("api/users/getNotifiAddMoney");
  },
  //=========== END USER

  //========== MEMBER

  getRevenueNap() {
    return ApiAdmin().get("api/trades/getRevenueNap");
  },

  getRevenueRut(obj) {
    return ApiAdmin().get("api/trades/getRevenueRut", obj);
  },

  getRevenueTrans() {
    return ApiAdmin().get("api/trades/getRevenueTrans");
  },

  getShowDT(obj) {
    return ApiAdmin().post("api/trades/getShowDT", obj);
  },

  changeAccMarketing(obj) {
    return ApiAdmin().post("api/users/changeAcc", obj);
  },

  changePassAdmin(obj) {
    return ApiAdmin().post("api/users/changPassAd", obj);
  },

  createUser(obj) {
    return ApiAdmin().post("api/users/create", obj);
  },

  register(obj) {
    return ApiAdmin().post("api/users/register", obj);
  },

  loginAdmin(obj) {
    return ApiAdmin().post("api/users/AdminSingIn", obj);
  },

  checkEmail(email) {
    return ApiAdmin().get("api/users/checkEmail/" + email);
  },

  getAllMember() {
    return ApiAdmin().get("api/users/getAllUser");
  },

  getAllMemberMarketing() {
    return ApiAdmin().get("api/users/getAllUser?marketing=1" );
  },

  updateMember(obj) {
    return ApiAdmin().patch("api/users/updateUser", obj);
  },

  updatePriceMember(obj) {
    return ApiAdmin().patch("api/users/updateMoney", obj);
  },

  handleMoney(obj) {
    return ApiAdmin().post("api/pay/approval", obj);
  },

  handleMoneyRut(obj) {
    return ApiAdmin().post("api/pay/approval-rut", obj);
  },

  deleteMember(id) {
    return ApiAdmin().delete("api/users/deleteUserById/" + id);
  },

  verifiedUser(obj) {
    return ApiAdmin().post("api/users/verifiedUser", obj);
  },

  getListAgency() {
    return ApiAdmin().get("api/users/getAgency");
  },

  viewMemberAgency(id) {
    return ApiAdmin().get("api/users/viewTotalMAgency/" + id);
  },

  addMoneyMember(obj) {
    return ApiAdmin().post("api/users/addMoneyMember", obj);
  },

  getRateCommission() {
    return ApiAdmin().get("api/setup/getRateCommission");
  },

  saveRateCommission(obj) {
    return ApiAdmin().post("api/setup/saveRateCommission", obj);
  },
  getAllProfitSys(obj){
    return ApiAdmin().get("api/profitSys/getAllProfit?" + obj)
  },

  //==========

  //================
  //================
  //================
  //========== TRADE
  //================
  //================
  //================

  getAddMoneyListHistory(obj=null) {
    return ApiAdmin().get("api/trades/historyAllAddMoney?" + obj);
  },

  getTotalAddMoney() {
    return ApiAdmin().get("api/trades/totalAddMoney");
  },

  getTradeListHistory(obj = null) {
    return ApiAdmin().get("api/trades/historyAll?"+obj);
  },

  gethistoryAllTrash() {
    return ApiAdmin().get("api/trades/historyAllTrash");
  },

  deleteTrashByID(obj) {
    return ApiAdmin().patch("api/trades/deleteTradeHisById", obj);
  },

  getDepositListHistory(obj = null) {
    return ApiAdmin().get("api/trades/hisDepositAll?" + obj);
  },

  getDepositAllTrash() {
    return ApiAdmin().get("api/trades/hisDepositAllTrash");
  },

  getWithdrawalListHistory(obj = null) {
    return ApiAdmin().get("api/trades/hisWithDrawalAll?" + obj);
  },

  doneWithDrawalByID(obj) {
    return ApiAdmin().post("api/trades/doneWithdrawal", obj);
  },

  doneRefuseWithDrawalByID(obj) {
    return ApiAdmin().post("api/trades/doneRefuseWithdrawal", obj);
  },

  getListF1F7(obj) {
    return ApiAdmin().post("api/users/getListF1F7", obj);
  },

  getLisCommissionSearch(obj) {
    return ApiAdmin().post("api/users/getListCmsHis", obj);
  },

  //================
  //================
  //================
  //================
  //================

  //================
  //================
  //================
  //========== Analytics
  //================
  //================
  //================

  getAnalytics() {
    return ApiAdmin().get("api/users/analytics");
  },

  //================
  //================
  //================
  //========== Analytics
  //================
  //================
  //================

  //================
  //================
  //================
  //========== BET
  //================
  //================
  //================

  getBetsListHistory(obj) {
    return ApiAdmin().get("api/bets/historyBet?" + obj);
  },
  getBetAmount(obj){
    return ApiAdmin().get("api/bets/totalBet?"+ obj);
  },
  getBetsListHisTrash() {
    return ApiAdmin().get("api/bets/hisBetTrash");
  },

  deleteBetsTrash(obj) {
    return ApiAdmin().patch("api/bets/deleteBet", obj);
  },

  //================
  //================
  //================
  //================
  //================

  //================
  //================
  //================
  //========== EXCHANGE
  //================
  //================
  //================

  getExListHistory(obj=null) {
    return ApiAdmin().get("api/exs/historyEx?"+obj);
  },

  getExListHisTrash() {
    return ApiAdmin().get("api/exs/historyExTrash");
  },

  deleteExTrash(obj) {
    return ApiAdmin().patch("api/exs/deleteEx", obj);
  },

  //================
  //================
  //================
  //================
  //================

  uploadAvatar(obj) {
    return Api().post("api/auth/avatar", obj);
  },

  uploadPassportFront(obj) {
    return Api().post("api/auth/passport/front", obj);
  },

  uploadPassportBack(obj) {
    return Api().post("api/auth/passport/back", obj);
  },

  //================
  //================
  //================
  //========== GAME
  //================
  //================
  //================
  // Giải đấu
  createChampion(obj) {
    return ApiAdmin().post("api/game/champion", obj);
  },
  getChampions() {
    return ApiAdmin().get("api/game/champions");
  },
  getChampionsClient() {
    return Api().get("api/game/champions");
  },
  deleteChampion(id) {
    return ApiAdmin().delete(`api/game/champion/${id}`);
  },
  updateChampion(id, obj) {
    return ApiAdmin().put(`api/game/champion/${id}`, obj);
  },
  uploadBackgroundImage(obj) {
    return Api().post("api/auth/champion", obj);
  },

  // Rút thăm may mắn
  createLuckyDrawAdmin(obj, type) {
    return ApiAdmin().put(`api/game1/lucky-draws/${type}`, obj);
  },
  getLuckyDrawAdmin() {
    return ApiAdmin().get("api/game1/lucky-draws-admin");
  },
  getLuckyDraw() {
    return Api().get("api/game1/lucky-draws");
  },
  getThongTinLoiNhuanHangNgay() {
    return Api().get("api/users/bo-statistics-current-day");
  },
  getConfigBreakWithPercent() {
    return ApiAdmin().get("api/csmConfig/getConfig");
  },
  sendConfigBreakWithPercent(obj) {
    return ApiAdmin().post("api/csmConfig/sendConfig", obj);
  },
  getNguoiGioiThieuAdmin(id) {
    return ApiAdmin().get("api/users/presenter/"+ id);
  },
  chiTietLoiNhuanHoaHongAdmin(id) {
    return ApiAdmin().get("api/users/commission-details/" + id);
  },
  getSeachListChiTietHHAdmin(id, obj) {
    return ApiAdmin().post("api/users/commission-details-date/" + id, obj);
  },
  getSeachListLvAgencyAdmin(id, obj) {
    return ApiAdmin().post("api/users/agency-search-lv/" + id, obj);
  },
  getSeachListNameAgencyAdmin(id ,obj) {
    return ApiAdmin().post("api/users/agency-search-name/" + id, obj);
  },
  getInfoUserAdmin(id) {
    return ApiAdmin().get("api/users/info/"+ id);
  },
  getWhiteBlackList(){
    return ApiAdmin().get("api/csmConfig/getConfig/white-black-list/")
  },
  changeWhiteBlackList(obj){
    return ApiAdmin().post("api/csmConfig/sendConfig/white-black-list/", obj)
  },
  getListHistoryOrderTradeAdmin(obj){
    return apiAdmin().get("api/users/history-order"+obj)
  },
  getSearchHisOrderAdmin(email,obj){
    return apiAdmin().post("api/users/history-order-date?email="+email, obj)
  },
  // bank
  getAllBankInfoUser(){
    return apiAdmin().get("api/bank/getAllBank")
  },
  updateBankInfoUser(email, obj){
    return apiAdmin().put("api/bank/update?email=" + email, obj)
  },
  createBankInfoAdmin(obj){
    return apiAdmin().post("api/bank/create-bank-admin", obj)
  },
  getInfoBankAdmin(){
    return apiAdmin().get("api/bank/bank-admin")
  },
  // AGENCY
  getAllRefOfAgency(){
    return ApiAgency().get("api/users/listAllRefAgent")
  },
  checkEmailOfAgency(email) {
    return ApiAgency().get("api/users/checkEmail/" + email);
  },
  createUserOfAgency(obj) {
    return ApiAgency().post("api/users/create", obj);
  },
  updateMemberOfAgency(obj) {
    return ApiAgency().patch("api/users/updateUser", obj);
  },
  changeAccMarketingOfAgency(obj) {
    return ApiAgency().post("api/users/changeAcc", obj);
  },
  verifiedUserOfAgency(obj) {
    return ApiAgency().post("api/users/verifiedUser", obj);
  },
  getAllAgencyOfAgency(){
      return ApiAgency().get("api/users/listAllAgentOfAgent")
  },
  getDepositListHistoryOfAgency(obj = null) {
    return ApiAgency().get("api/trades/hisDepositAll?" + obj);
  },
  getRevenueNapOfAgency() {
    return ApiAgency().get("api/trades/getRevenueNap");
  },
  getWithdrawalListHistoryOfAgency(obj = null) {
    return ApiAgency().get("api/trades/hisWithDrawalAll?" + obj);
  },
  getRevenueRutOfAgency(obj) {
    return ApiAgency().get("api/trades/getRevenueRut", obj);
  },

  getTradeListHistoryOfAgency(obj = null) {
    return ApiAgency().get("api/trades/historyAll?"+obj);
  },
  getBetsListHistoryOfAgency(obj) {
    return ApiAgency().get("api/bets/historyBet?" + obj);
  },
  getBetAmountOfAgency(obj){
    return ApiAgency().get("api/bets/totalBet?"+ obj);
  },
  getAddMoneyListHistoryOfAgency(obj=null) {
    return ApiAgency().get("api/trades/historyAllAddMoney?" + obj);
  },
  getTotalAddMoneyOfAgency() {
    return ApiAgency().get("api/trades/totalAddMoney");
  },
  deductMoneyMemberOfAgency(obj) {
    return ApiAgency().post("api/users/addMoneyMember", obj);
  },
  getInfoUserAdminOfAgency(id) {
    return ApiAgency().get("api/users/info/"+ id);
  },
  getNguoiGioiThieuAdminOfAgency(id) {
    return ApiAgency().get("api/users/presenter/"+ id);
  },
  getSeachListLvAgencyAdminOfAgency(id, obj) {
    return ApiAgency().post("api/users/agency-search-lv/" + id, obj);
  },
  getSeachListChiTietHHAdminOfAgency(id, obj) {
    return ApiAgency().post("api/users/commission-details-date/" + id, obj);
  },
  getListHistoryOrderTradeAdminOfAgency(obj){
    return ApiAgency().get("api/users/history-order"+obj)
  },
  handleMoneyOfAgency(obj) {
    return ApiAgency().post("api/pay/approval", obj);
  },
  handleMoneyRutOfAgency(obj) {
    return ApiAgency().post("api/pay/approval-rut", obj);
  },
  getAllBankInfoUserOfAgency(){
    return ApiAgency().get("api/bank/getAllBank")
  },
  updateBankInfoUserOfAgency(email, obj){
    return ApiAgency().put("api/bank/update?email=" + email, obj)
  },
  getAnalyticsOfAgency(){
    return ApiAgency().get("api/users/analytics-agency")
  },
  getShowDTOfAgency(obj) {
    return ApiAgency().post("api/trades/getShowDT", obj);
  },
  loginAgency(obj) {
    return Api().post("api/users/agencySingIn", obj);
  },
  getInfoUserOfAgency() {
    return ApiAgency().get("api/users/info");
  },
};

// AuthenticationService.register({
//         email: 'testing@gmail.com',
//         password: '123456'
// })
