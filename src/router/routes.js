const routes = [
  {
    path: "/",

    component: () => import("src/layouts/EnglishLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage_English.vue") },
      { path: "/about", component: () => import("src/pages/AboutPage.vue") },
      {
        path: "/feedback",
        component: () => import("src/pages/FeedbackPage.vue"),
      },
      { path: "/authpage", component: () => import("src/pages/AuthPage.vue") },
      {
        path: "/Paymentpage",
        component: () => import("pages/PaymentPage.vue"),
      },
      {
        path: "/paymentgateway",
        component: () => import("pages/PaymentGateway.vue"),
      },
      {
        path: "/ticket",
        component: () => import("src/pages/TicketBookingPage.vue"),
      },
    ],
  },
  {
    path: "/hi",
    component: () => import("src/layouts/HindiLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/HomePage_Hindi.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
