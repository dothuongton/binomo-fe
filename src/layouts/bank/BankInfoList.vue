<template>
  <div>
    <vs-col>
      <form>
        <div class="my-5">
          <label for="bank">Ngân hàng</label>
          <br>
          <select v-model="bank" id="bank" class="rounded w-1/3 bg-white py-2 px-4 mb-5">
            <option v-for="(item, i) in listBankRecharge" :key="i" :value="item.value">{{item.value}}</option>
          </select>
        </div>
        <div>
          <label>Chi nhánh ngân hàng</label>
          <br>
          <input type="text" class="w-1/3 mb-5 bg-white py-2 px-4 text-black rounded" v-model="branch_bank">
        </div>
        <div>
          <label for="">Chủ tài khoản</label>
          <br>
          <input type="text" class="w-1/3 mb-5 bg-white py-2 px-4 text-black rounded" v-model="account_holder">
        </div>
        <div>
          <label for="">Số tài khoản</label>
          <br>
          <input class="w-1/3 mb-5 bg-white py-2 px-4 text-black rounded" type="number" v-model="account_number">
        </div>
        <vs-button type="filled" @click.prevent="updateInfoBankAdmin()" class="mt-5 block">Cập nhật</vs-button>
      </form>
    </vs-col>

  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data(){
    return{
      bankInfoAdmin:[],
      bank:"MB",
      account_number: 293239834,
      account_holder:"admin",
      branch_bank:"Hoan Kiem",
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
    }
  },
  created() {
    this.getInfoBankAdmin()
  },
  methods:{
    getInfoBankAdmin(){
      AuthenticationService.getInfoBankAdmin()
        .then(res=>{
          res.data.data.map(res=>{
            this.bank = res.bank
            this.account_number = res.account_number
            this.account_holder = res.account_holder
            this.branch_bank = res.branch_bank
          })
        })
    },
    updateInfoBankAdmin(){
      if(this.bank && this.branch_bank && this.account_holder && this.account_number){
        let obj = {
          bank: this.bank,
          account_number: this.account_number,
          account_holder: this.account_holder,
          branch_bank:this.branch_bank
        }
        this.bankInfoAdmin.push(obj)
        AuthenticationService.createBankInfoAdmin(this.bankInfoAdmin)
          .then(res=>{
            if(res){
              this.$vs.notify({
                text: `Cập nhật thông tin ngân hàng admin thành công!`,
                color: "success",
                position: "top-right"
              });
            }else{
              this.$vs.notify({
                text: `Cập nhật không thành công`,
                color: "danger",
                position: "top-right"
              });
            }
          })
      }else {
        this.$vs.notify({
          text: `Điền đày đủ thông tin để cập nhật`,
          color: "danger",
          position: "top-right"
        });
      }
    }
  },
}
</script>

<style scoped>
[dir] .vs-con-input .vs-inputx{
  background: white!important;
}
</style>
