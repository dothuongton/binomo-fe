import Vue from "vue"
import { AclInstaller, AclCreate, AclRule } from "vue-acl"
import router from "@/router"
import routerAgency from "@/pages/agency/router.js"
Vue.use(AclInstaller)

let initialRole = "admin"

let userInfo = JSON.parse(localStorage.getItem("userInfo"))
if(userInfo && userInfo.userRole) initialRole = userInfo.userRole

export default new AclCreate({
  initial: initialRole,
  notfound: "/pages/not-authorized",
  router,
  routerAgency,
  acceptLocalRules: true,
  globalRules: {
    admin: new AclRule("admin").generate(),
    editor: new AclRule("editor").or("admin").generate(),
    agent:new AclRule("agent").generate(),
    // public: new AclRule("public").or("admin").or("editor").generate(),
  }
})
