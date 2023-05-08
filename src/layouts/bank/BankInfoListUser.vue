<template>
  <div>
    <vs-table>
      <vs-tr class="items-center">
        <vs-th>
          Id
        </vs-th>
        <vs-th>
          Email
        </vs-th>
        <vs-th>
          Ngân hàng
        </vs-th>
        <vs-th>
          Số tài khoản
        </vs-th>
        <vs-th>
          Chi nhánh
        </vs-th>
        <vs-th>
          Chủ tài khoản
        </vs-th>
        <vs-th>
          Action
        </vs-th>
      </vs-tr>
      <vs-tr
        :key="i"
        v-for="(tr, i) in infoBankUserList"
      >
        <vs-td>
          {{ tr.id }}
        </vs-td>
        <vs-td>
          {{ tr.email }}
        </vs-td>
        <vs-td>
          {{ tr.bank }}
        </vs-td>
        <vs-td>
          {{ tr.account_number }}
        </vs-td>
        <vs-td>
          {{ tr.branch_bank }}
        </vs-td>
        <vs-td>
          {{ tr.account_holder }}
        </vs-td>
        <vs-td>
          <vs-button class="p-3 rounded border-none text-center" @click.prevent = updateInfoBankUser(tr)>Edit</vs-button>
        </vs-td>
      </vs-tr>
    </vs-table>
    <div class="centerx">
      <vs-popup  title="Chỉnh sửa thông tin tài khoản user" :active.sync="popupActive">
        <form>
          <div class="my-5">
            <label for="bank">Ngân hàng</label>
            <br>
            <select v-model="dataEditInfoBankUser.bank" id="bank" class="rounded w-1/3 bg-white py-2 px-4 mb-5">
              <option v-for="(item, i) in listBankRecharge" :key="i" :value="item.value">{{item.value}}</option>
            </select>
          </div>
          <div>
            <label>Chi nhánh ngân hàng</label>
            <br>
            <input type="text" class="w-1/3 mb-5 bg-white py-2 px-4 text-black rounded" v-model="dataEditInfoBankUser.branch_bank">
          </div>
          <div>
            <label for="">Chủ tài khoản</label>
            <br>
            <input type="text" class="w-1/3 mb-5 bg-white py-2 px-4 text-black rounded" v-model="dataEditInfoBankUser.account_holder">
          </div>
          <div>
            <label for="">Số tài khoản</label>
            <br>
            <input class="w-1/3 mb-5 bg-white py-2 px-4 text-black rounded" type="number" v-model="dataEditInfoBankUser.account_number">
          </div>
          <vs-button type="filled" @click.prevent="updateInfoBank()" class="mt-5 block">Cập nhật</vs-button>
        </form>
      </vs-popup>
    </div>
  </div>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      infoBankUserList: [],
      popupActive:false,
      editBank:"",
      editBranchBank:"",
      editAccountHolder:"",
      editAccountNumber:"",

      dataEditInfoBankUser:[],
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
    this.getListAllBankInfo()
  },
  methods: {
    getListAllBankInfo() {
      AuthenticationService.getAllBankInfoUser()
        .then(res => {
          this.infoBankUserList = res.data.data
        })
    },
    updateInfoBankUser(tr){
      this.popupActive = true
      this.dataEditInfoBankUser = tr
    },
    updateInfoBank(){
      if(this.dataEditInfoBankUser.bank && this.dataEditInfoBankUser.account_number && this.dataEditInfoBankUser.branch_bank && this.dataEditInfoBankUser.account_holder){
        let obj = {

          bank:this.dataEditInfoBankUser.bank,
          account_number:this.dataEditInfoBankUser.account_number,
          account_holder:this.dataEditInfoBankUser.account_holder,
          branch_bank:this.dataEditInfoBankUser.branch_bank
        }
        let email = this.dataEditInfoBankUser.email
        AuthenticationService.updateBankInfoUser(email, obj)
          .then(res=>{
            if(res){
              this.$vs.notify({
                text: `Cập nhật thông tin ngân hàng thành công`,
                color: "success",
                position: "top-right"
              });
            }else{
              return this.$vs.notify({
                text: "Cập nhật không thành công!",
                color: "danger",
                position: "top-right"
              });
            }
          })
      }else{
        return this.$vs.notify({
          text: `Điền đày đủ thông tin để cập nhật`,
          color: "danger",
          position: "top-right"
        });
      }
    }
  }
}
</script>
