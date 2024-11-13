export const sidebarList = [
  {
    _id: 1,
    title: "Manage Profile",
    path: "/profile",
  },
  {
    _id: 2,
    title: "Quick Actions",
    subList: [
      {
        _id: 1,
        title: "Rent a Bike",
        path: "/profile/quick-actions/rent-a-bike",
      },
      {
        _id: 2,
        title: "Extend Rental ",
        path: "/profile/quick-actions/extend-rental",
      },
    ],
  },
  {
    _id: 3,
    title: "Rental Management",
    subList: [
      {
        _id: 1,
        title: "Active Rentals",
        path: "/profile/rental-management/active-rentals",
      },
      {
        _id: 2,
        title: "Rental History",
        path: "/profile/rental-management/rental-history",
      },
      //   {
      //     _id: 3,
      //     title: "Upcoming Reservations",
      //     path: "/profile/rental-management/upcoming-reservations",
      //   },
    ],
  },
  {
    _id: 4,
    title: " Billing & Payments",
    // path: "/profile/billing-payments",
    subList: [
      {
        _id: 1,
        title: "Payment Methods",
        path: "/profile/billing-payments/payment-methods",
      },
      {
        _id: 2,
        title: "Invoices",
        path: "/profile/billing-payments/invoices",
      },
      {
        _id: 3,
        title: "Payment History",
        path: "/profile/billing-payments/payment-history",
      },
      //   {
      //     _id:4,
      //     title: "Payment Settings",
      //     path: "/profile/billing-payments/payment-settings",
      //   },
      //   {
      //     _id:5,
      //     title: "Subscription Plans",
      //     path: "/profile/billing-payments/subscription-plans",
      //   }
    ],
  },
  {
    _id: 5,
    title: "Account Settings",
    // path: "/profile/settings",
    subList: [
      {
        _id: 1,
        title: "Password & Security",
        path: "/profile/settings/password-security",
      },
    ],
  },
  {
    _id: 6,
    title: "Support & Help",
    // path: "/profile/support-help",
    subList: [
      {
        _id: 1,
        title: "FAQs",
        path: "/profile/support-help/faqs",
      },
      {
        _id: 2,
        title: "Customer Support",
        path: "/profile/support-help/customer-support",
      },
      {
        _id: 3,
        title: "Report Issue", // Report issues related to rentals, payments, or app functionality.
        path: "/profile/support-help/report-issue",
      },
    ],
  },
];
