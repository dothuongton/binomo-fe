

import AuthenticationService from '@/services/AuthenticationService'

import Vue from 'vue'
import Router from 'vue-router'
import { get } from 'lodash';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  base: '/agency',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/pages/agency/main/Main.vue'),
      children: [
        {
          path: '/',
          redirect: '/agency-analytics'
        },
        {
          path: '/agency-analytics',
          name: 'agency-analytics',
          component: () => import('@/pages/agency/analytics/DashboardAnalyticsAgency.vue'),
          meta: {
            breadcrumb: [

              {title: 'Trang chủ', url: '/'},
              {title: 'Phân tích', active: true},
            ],
            pageTitle: 'Analytics',
            title: 'Analytics',
            rule: 'agent',

          },
        },
        {
          path: '/list-all-account',
          name: 'agency-list-all-account',
          component: () => import('@/pages/agency/account/ListAllAccountOfAgency.vue'),
          meta: {
            breadcrumb: [

              {title: 'Trang chủ', url: '/'},
              {title: 'Danh sách tài khoản ref của đại lý', active: true},
            ],
            pageTitle: 'Tất cả',
            title: 'Account',
            rule: 'agent',

          },
        },
        {
          path: '/list-verify-account',
          name: 'agency-list-verify-account',
          component: () => import('@/pages/agency/account/ListVerifyAccount.vue'),
          meta: {
            breadcrumb: [

              {title: 'Trang chủ', url: '/'},
              {title: 'Xác minh danh tính', active: true},
            ],
            pageTitle: 'Xác minh',
            title: 'Verify',
            rule: 'agent',

          },
        },
        {
          path: '/list-agency-account',
          name: 'agency-list-agency-account',
          component: () => import('@/pages/agency/account/ListAgencyAccount.vue'),
          meta: {
            breadcrumb: [

              {title: 'Trang chủ', url: '/'},
              {title: 'Đại lý', active: true},
            ],
            pageTitle: 'Đại Lý',
            title: 'Agency',
            rule: 'agent',

          },
        },
        {
          path: '/info-bank-ref',
          name: 'agency-list-ref-bank-info',
          component: () => import('@/pages/agency/bank/BankInfoListRefOfAgency.vue'),
          meta: {
            breadcrumb: [

              {title: 'Trang chủ', url: '/'},
              {title: 'Đại lý', active: true},
            ],
            pageTitle: 'Ngân hàng',
            title: 'Bank',
            rule: 'agent',

          },
        },
        {
          path: '/history/list-deposit-view',
          name: 'agency-list-history-deposit',
          component: () => import('@/pages/agency/history/ListDepositAgency.vue'),
          meta: {
            breadcrumb: [
              { title: 'Trang chủ', url: '/' },
              { title: 'Nạp tiền', active: true },
            ],
            pageTitle: 'Danh sách nạp tiền',
            title: 'Deposit',
            rule: 'agent'
          },
        },
        {
          path: '/history/list-withdrawal-view',
          name: 'agency-list-history-withdrawal',
          component: () => import('@/pages/agency/history/ListWithdrawalAgency.vue'),
          meta: {
            breadcrumb: [
              { title: 'Trang chủ', url: '/' },
              { title: 'Danh sách', active: true },
            ],
            pageTitle: 'Danh sách rút tiền',
            title: 'Withdrawal',
            rule: 'agent'
          },
        },
        {
          path: '/history/list-trade-view',
          name: 'agency-list-history-trade',
          component: () => import('@/pages/agency/history/ListHistoryTradeAgency.vue'),
          meta: {
            breadcrumb: [
              { title: 'Trang chủ', url: '/' },
              { title: 'Danh sách', active: true },
            ],
            pageTitle: 'Danh sách giao dịch',
            title: 'Trade',
            rule: 'agent'
          },
        },
        {
          path: '/history/list-bet-view',
          name: 'agency-list-bet-trade',
          component: () => import('@/pages/agency/history/ListBetAllRefAgency.vue'),
          meta: {
            breadcrumb: [
              { title: 'Trang chủ', url: '/' },
              { title: 'Danh sách', active: true },
            ],
            pageTitle: 'Danh sách đặt cược',
            title: 'Bet',
            rule: 'agent'
          },
        },
        {
          path: '/history/list-addmoney',
          name: 'agency-list-history-addmoney',
          component: () => import('@/pages/agency/history/ListHistoryAddMoneyOfAgency.vue'),
          meta: {
            breadcrumb: [
              { title: 'Trang chủ', url: '/' },
              { title: 'Danh sách', active: true },
            ],
            pageTitle: 'Danh sách thêm tiền',
            title: 'Add Money',
            rule: 'agent'
          },
        },
        {
          path: '/data/bet',
          name: 'agency-data-bet',
          component: () => import('@/pages/agency/tool/DataBetRealTimeAgency.vue'),
          meta: {
            breadcrumb: [
              { title: 'Trang chủ', url: '/' },
              { title: 'Dữ liệu đặt cược', active: true },
            ],
            pageTitle: 'Dữ liệu',
            title: "Bet",
            rule: 'agent'
          },
        },
        {
          path: '/deduct-money',
          name: 'agency-deduct-money',
          component: () => import('@/pages/agency/tool/DeductMoneyAgency.vue'),
          meta: {
            breadcrumb: [
              { title: 'Trang chủ', url: '/' },
              { title: 'Công cụ trừ tiền', active: true },
            ],
            pageTitle: 'Trừ tiền',
            title: 'Deduct',
            rule: 'agent'
          },
        },
      ],
      meta: {
        requiresAuth:true
      }
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/login',
          name: 'agency-login',
          component: () => import('@/pages/agency/login/Login.vue'),
          meta: {
            breadcrumb: [
              { title: 'Trang chủ', url: '/' },
              { title: 'CMS Agency', active: true },
            ],
            pageTitle: 'CMS Agency',
            title: 'CMS Agency',
            rule: 'agent',
            hideForAuth: true
          },
        },
        {
          path: '/login/comingsoon',
          name: 'page-coming-soon',
          component: () => import('@/views/pages/ComingSoon.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/login/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/login/error-500',
          name: 'page-error-500',
          component: () => import('@/views/pages/Error500.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/login/not-authorized',
          name: 'page-not-authorized',
          component: () => import('@/views/pages/NotAuthorized.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/login/maintenance',
          name: 'page-maintenance',
          component: () => import('@/views/pages/Maintenance.vue'),
          meta: {
            rule: 'editor'
          }
        },
      ],
    },
    // Redirect to 404 page, if no match found
    // {
    //   path: '*',
    //   redirect: '/login/error-404'
    // }
  ],

})

function checkSessionOfAgency (){
  AuthenticationService.getAnalyticsOfAgency()
    .then((res) => {
      if ((res.data.success == 4 || res.data.success == 5) ){
        localStorage.removeItem("tokenAgency");
        router.push("/login").catch(() => {});
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
  document.title = 'Agency CMS';
  checkSessionOfAgency()
})

// router.beforeEach((to, from, next) => {
//
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     const token = localStorage.getItem('tokenAgency');
//
//     if (!token){
//       next({ name: 'agency-login' })
//     } else {
//       next()
//     }
//   } else {
//     next() // does not require auth, make sure to always call next()!
//   }
//
//   if (to.matched.some(record => record.meta.hideForAuth)) {
//     const token = localStorage.getItem('tokenAgency');
//
//     if (token){
//       next({ name: 'agency-analytics' })
//     } else {
//       next()
//     }
//   } else {
//     next() // does not require auth, make sure to always call next()!
//   }
//
// });

// router.beforeEach(function (to, from, next) {
//   const matchedRoutes = to.matched;
//
//   const requiresAuth = matchedRoutes.some(function (record) {
//     return record.meta.requiresAuth;
//   });
//
//   const hideForAuth = matchedRoutes.some(function (record) {
//     return record.meta.hideForAuth;
//   });
//
//   const token = localStorage.getItem('tokenAgency');
//
//   if (requiresAuth && !token) {
//     next({ name: 'agency-login' });
//   } else if (hideForAuth && token) {
//     next({ name: 'agency-analytics' });
//   } else {
//     next();
//   }
// });



router.beforeEach(function (to, from, next) {
  if (get(to, 'matched', []).some(function (record) {
    return get(record, 'meta.requiresAuth', false);
  })) {
    const token = localStorage.getItem('tokenAgency');
    if (!token) {
      next({ name: 'agency-login' });
      return;
    }
  }

  if (get(to, 'matched', []).some(function (record) {
    return get(record, 'meta.hideForAuth', false);
  })) {
    const token = localStorage.getItem('tokenAgency');
    if (token) {
      next({ name: 'agency-analytics' });
      return;
    }
  }

  next(); // only call next() once
});

export default router
