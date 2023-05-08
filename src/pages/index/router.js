import Vue from 'vue'
import Router from 'vue-router'
//import auth from "@/auth/authService";

//import firebase from 'firebase/app'
//import 'firebase/auth'

import AuthenticationService from '@/services/AuthenticationService'
//import getData from '@/login/trade/navbar/components/data.json'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            component: () => import('@/pages/trade/TradeMain.vue'),
            children: [
                {
                    path: '/',
                    name: 'index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Home Page'
                    }
                },
                {
                    path: '/challenge',
                    name: 'challenge',
                    component: () => import('../../views/trading/Index.vue'),
                    meta: {
                        title: 'Home Page'
                    }
                },
                // {
                //     path: '/token-airdrop',
                //     name: 'token-airdrop',
                //     component: () => import('../../views/trading/Index.vue'),
                //     meta: {
                //         title: 'Home Page'
                //     }
                // },
                {
                    path: '/ho-tro',
                    name: 'Support',
                    component: () => import('@/pages/index/Faq.vue'),
                    meta: {
                        title: 'Support'
                    }
                },
                {
                    path: '/thong-bao',
                    name: 'Notification',
                    component: () => import('@/pages/index/Notification.vue'),
                    meta: {
                        title: 'Support'
                    }
                },
                {
                    path: '/login',
                    name: 'login-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Login'
                    }
                },
                {
                    path: '/register',
                    name: 'register-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Sign Up'
                    }
                },
                {
                    path: '/register/:r',
                    name: 'register-param-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Sign Up'
                    }
                },
                {
                    path: '/forgot-password',
                    name: 'forgot-password-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Forgot Password'
                    }
                },
                {
                    path: '/register-resend-verify-email',
                    name: 'register-resend-verify-email-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Resend confirmation email'
                    }
                },
                {
                    path: '/reset-password',
                    name: 'reset-password-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Reset password'
                    }
                },
                {
                    path: '/reset-password/:e',
                    name: 'reset-password-param-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Reset password'
                    }
                },
                {
                    path: '/trading',
                    name: 'client-index',
                    component: () => import('../../views/trading/Index.vue'),
                    meta: {
                        title: 'Trading',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/balance',
                    name: 'balance-user',
                    component: () => import('../../views/trading/Wallet.vue'),
                    meta: {
                        title: 'Balance',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/exchange',
                    name: 'exchange-user',
                    component: () => import('../../views/trading/Exchange.vue'),
                    meta: {
                        title: 'Exchange',
                        requiresAuth: true
                    }

                },
                {
                    path: '/user/trade/history',
                    name: 'trade-user-history',
                    component: () => import('../../views/trading/TradeHistory.vue'),
                    meta: {
                        title: 'Trade history',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/affiliate/general',
                    name: 'affiliate-user-general',
                    component: () => import('../../views/trading/Affiliate.vue'),
                    meta: {
                        title: 'Affiliate General',
                        requiresAuth: true
                    }
                },
                // {
                //     path: '/user/affiliate/championship',
                //     name: 'championship',
                //     component: () => import('../../views/trading/Championship.vue'),
                //     meta: {
                //         title: 'Championship',
                //         requiresAuth: true
                //     }
                // },
                // {
                //     path: '/user/affiliate/lucky',
                //     name: 'lucky',
                //     component: () => import('../../views/trading/Lucky.vue'),
                //     meta: {
                //         title: 'Lucky',
                //         requiresAuth: true
                //     }
                // }
            ],
            meta: {
                hideForAuth: true
            }
        },
        // {
        //   path: '/agency-dashboard',
        //   name:'agency-dashboard',
        //   component: () => import('@/pages/agency/main/Main.vue'),
        //   children: [
        //     {
        //       path: '/',
        //       redirect: '/agency-dashboard/list-all-account'
        //     },
        //     {
        //       path: '/agency-dashboard/analytics',
        //       name: 'agency-analytics',
        //       component: () => import('@/pages/agency/analytics/DashboardAnalyticsAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //
        //           {title: 'Trang chủ', url: '/'},
        //           {title: 'Phân tích', active: true},
        //         ],
        //         pageTitle: 'Analytics',
        //         title: 'Analytics',
        //         rule: 'agent',
        //
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/list-all-account',
        //       name: 'agency-list-all-account',
        //       component: () => import('@/pages/agency/account/ListAllAccountOfAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //
        //           {title: 'Trang chủ', url: '/'},
        //           {title: 'Danh sách tài khoản ref của đại lý', active: true},
        //         ],
        //         pageTitle: 'Tất cả',
        //         title: 'Account',
        //         rule: 'agent',
        //
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/list-verify-account',
        //       name: 'agency-list-verify-account',
        //       component: () => import('@/pages/agency/account/ListVerifyAccount.vue'),
        //       meta: {
        //         breadcrumb: [
        //
        //           {title: 'Trang chủ', url: '/'},
        //           {title: 'Xác minh danh tính', active: true},
        //         ],
        //         pageTitle: 'Xác minh',
        //         title: 'Verify',
        //         rule: 'agent',
        //
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/list-agency-account',
        //       name: 'agency-list-agency-account',
        //       component: () => import('@/pages/agency/account/ListAgencyAccount.vue'),
        //       meta: {
        //         breadcrumb: [
        //
        //           {title: 'Trang chủ', url: '/'},
        //           {title: 'Đại lý', active: true},
        //         ],
        //         pageTitle: 'Đại Lý',
        //         title: 'Agency',
        //         rule: 'agent',
        //
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/info-bank-ref',
        //       name: 'agency-list-ref-bank-info',
        //       component: () => import('@/pages/agency/bank/BankInfoListRefOfAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //
        //           {title: 'Trang chủ', url: '/'},
        //           {title: 'Đại lý', active: true},
        //         ],
        //         pageTitle: 'Ngân hàng',
        //         title: 'Bank',
        //         rule: 'agent',
        //
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/history/list-deposit-view',
        //       name: 'agency-list-history-deposit',
        //       component: () => import('@/pages/agency/history/ListDepositAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //           { title: 'Trang chủ', url: '/' },
        //           { title: 'Nạp tiền', active: true },
        //         ],
        //         pageTitle: 'Danh sách nạp tiền',
        //         title: 'Deposit',
        //         rule: 'agent'
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/history/list-withdrawal-view',
        //       name: 'agency-list-history-withdrawal',
        //       component: () => import('@/pages/agency/history/ListWithdrawalAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //           { title: 'Trang chủ', url: '/' },
        //           { title: 'Danh sách', active: true },
        //         ],
        //         pageTitle: 'Danh sách rút tiền',
        //         title: 'Withdrawal',
        //         rule: 'agent'
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/history/list-trade-view',
        //       name: 'agency-list-history-trade',
        //       component: () => import('@/pages/agency/history/ListHistoryTradeAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //           { title: 'Trang chủ', url: '/' },
        //           { title: 'Danh sách', active: true },
        //         ],
        //         pageTitle: 'Danh sách giao dịch',
        //         title: 'Trade',
        //         rule: 'agent'
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/history/list-bet-view',
        //       name: 'agency-list-bet-trade',
        //       component: () => import('@/pages/agency/history/ListBetAllRefAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //           { title: 'Trang chủ', url: '/' },
        //           { title: 'Danh sách', active: true },
        //         ],
        //         pageTitle: 'Danh sách đặt cược',
        //         title: 'Bet',
        //         rule: 'agent'
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/history/list-addmoney',
        //       name: 'agency-list-history-addmoney',
        //       component: () => import('@/pages/agency/history/ListHistoryAddMoneyOfAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //           { title: 'Trang chủ', url: '/' },
        //           { title: 'Danh sách', active: true },
        //         ],
        //         pageTitle: 'Danh sách thêm tiền',
        //         title: 'Add Money',
        //         rule: 'agent'
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/data/bet',
        //       name: 'agency-data-bet',
        //       component: () => import('@/pages/agency/tool/DataBetRealTimeAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //           { title: 'Trang chủ', url: '/' },
        //           { title: 'Dữ liệu đặt cược', active: true },
        //         ],
        //         pageTitle: 'Dữ liệu',
        //         title: "Bet",
        //         rule: 'agent'
        //       },
        //     },
        //     {
        //       path: '/agency-dashboard/deduct-money',
        //       name: 'agency-deduct-money',
        //       component: () => import('@/pages/agency/tool/DeductMoneyAgency.vue'),
        //       meta: {
        //         breadcrumb: [
        //           { title: 'Trang chủ', url: '/' },
        //           { title: 'Công cụ trừ tiền', active: true },
        //         ],
        //         pageTitle: 'Trừ tiền',
        //         title: 'Deduct',
        //         rule: 'editor'
        //       },
        //     },
        //   ],
        //   meta: {
        //     hideForNotAgency: true
        //   }
        // },
        // {
        //   path: '/agency-dashboard/login',
        //   name: 'agency-login',
        //   component: () => import('@/pages/agency/login/Login.vue'),
        //   meta: {
        //     breadcrumb: [
        //       { title: 'Trang chủ', url: '/' },
        //       { title: 'CMS Agency', active: true },
        //     ],
        //     pageTitle: 'CMS Agency',
        //     title: 'CMS Agency',
        //     rule: 'agent'
        //   },
        // },

        {
            path: '/',
            name: 'maintenance-page',
            component: () => import('@/pages/index/BaoTri.vue')
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/login/error-404'
        }
    ],
    linkActiveClass: 'router-link-active ',
    linkExactActiveClass: ''
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;


    AuthenticationService.getStatusServer()
    .then((res) => {
        if(res.data.ok){
            return next({ name: 'maintenance-page' })
        }
    })
    // if (to.matched.some(record => record.meta.hideForNotAgency)) {
      // const token = localStorage.getItem('token');

    // firebase.auth().onAuthStateChanged(() => {

    //     if (to.matched.some(record => record.meta.requiresAuth)) {
    //         // const token = localStorage.getItem('tokenUser');

    //         // if (!token){
    //         //     //next({ name: 'login-index' })
    //         //     window.location.href = window.location.origin + '/login'
    //         // } else {
    //         //     next()
    //         // }


    //     } else {
    //         next() // does not require auth, make sure to always call next()!
    //     }

    //     // if (to.matched.some(record => record.meta.hideForAuth)) {
    //     //     const token = localStorage.getItem('tokenUser');

    //     //     if (token){
    //     //         next({ name: 'client-index' })
    //     //     } else {
    //     //         next()
    //     //     }
    //     // } else {
    //     //     next() // does not require auth, make sure to always call next()!
    //     // }

    // })

    return next()
})

export default router
