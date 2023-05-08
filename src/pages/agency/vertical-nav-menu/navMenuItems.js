/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: '/agency-analytics',
    name: "Dashboard",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "Agency - Dashboard",
    submenu: [
      {
        url: '/agency-analytics',
        name: "Analytics",
        icon: "UserXIcon",
        slug: "agency-analytics",
        //i18n: "Đại lý",
      },
    ]
  },
  {
    header: "Tài khoản ref agency",
    icon: "PackageIcon",
    items: [
      {
        url: '/list-all-account',
        name: "Tất cả",
        icon: "UsersIcon",
        slug: "agency-list-all-account",
        //i18n: "Tất cả",
      },
      {
        url: '/list-verify-account',
        name: "Xác minh",
        icon: "UserCheckIcon",
        slug: "agency-list-verify-account",
        //i18n: "Xác minh",
      },
      {
        url: '/list-agency-account',
        name: "Đại lý (VIP)",
        icon: "UserXIcon",
        slug: "agency-list-agency-account",
        //i18n: "Đại lý",
      },

    ]
  },
  {
    header: "Ngân hàng",
    icon: "PackageIcon",
    items: [
      {
        url: '/info-bank-ref',
        name: "Tài khoản ngân hàng ref",
        icon: "PercentIcon",
        slug: "agency-list-ref-bank-info",
      }
    ]
  },
  {
    header: "Danh sách lịch sử",
    icon: "PackageIcon",
    //i18n: "Lịch sử",
    items: [
      {
        url: '/history/list-deposit-view',
        name: "Nạp tiền",
        icon: "DollarSignIcon",
        slug: "agency-list-history-deposit",
        //i18n: "Lịch sử nạp",
      },
      {
        url: '/history/list-withdrawal-view',
        name: "Rút tiền",
        icon: "DollarSignIcon",
        slug: "agency-list-history-withdrawal",
        //i18n: "Lịch sử nạp",
      },
      {
        url: '/history/list-trade-view',
        name: "Tổng giao dịch",
        icon: "RepeatIcon",
        slug: "agency-list-history-trade",
        //i18n: "Lịch sử giao dịch",
      },
      {
        url: '/history/list-bet-view',
        name: "Đặt cược",
        icon: "TrendingUpIcon",
        slug: "agency-list-bet-trade",
      },
      {
        url: '/history/list-addmoney',
        name: "Thêm tiền",
        icon: "DollarSignIcon",
        slug: "agency-list-history-addmoney",
      }
    ]
  },

  {
    header: "Dữ liệu",
    icon: "PackageIcon",
    items: [
      {
        url: '/data/bet',
        name: "Dữ liệu",
        icon: "PercentIcon",
        slug: "agency-data-bet",
      },
      {
        url: '/deduct-money',
        name: "Trừ tiền tài khoản",
        icon: "DollarSignIcon",
        slug: "agency-deduct-money",
      }
    ]
  },
]

