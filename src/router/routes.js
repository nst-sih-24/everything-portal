const routes = [
  {
    path: "/",
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import("layouts/DeeLayout.vue"),
    children: [
<<<<<<< Updated upstream
      { path: "/aboutus", component: () => import("pages/AboutUs.vue") },
      { path: "/feedback", component: () => import("src/pages/FeedBack.vue") },
      {
        path: "/help&support",
        component: () => import("pages/HelpAndSupport.vue"),
      },
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/homepage", component: () => import("pages/HomePage.vue") },
      { path: "dee", component: () => import("pages/DeePage.vue") },
      {
        path: "/busticketbookingpage",
        component: () => import("pages/BusTicketBooking_3rdPage.vue"),
      },

      {
        path: "/Paymentpage",
        component: () => import("pages/PaymentPage.vue"),
      },
      {
        path: "/paymentgateway",
        component: () => import("pages/PaymentGateway.vue"),
      },
    ],
  },
  {
    path: "/planner",
    component: () => import("src/layouts/AdminLayout.vue"),
    children: [
      {
        path: "/planner-createnew-routes",
        component: () => import("pages/Planner_create_new_routes.vue"),
      },
      {
        path: "/planner-vehicle-details",
        component: () => import("pages/Planner_vehicle_details.vue"),
      },
      {
        path: "/planner-journey-stats",
        component: () => import("pages/Planner_journey_stats.vue"),
      },
      {
        path: "/planner-route-traffic-analysis",
        component: () => import("pages/Planner_RouteTraffic_Analysis.vue"),
      },
      { path: "", component: () => import("pages/Planner_Dashboard.vue") },
    ],
  },
  {
    path: "/schedular",
    component: () => import("src/layouts/AdminLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Planner_Dashboard.vue") }, //change the dashboard path when new is made
      {
        path: "/schedular-assign-crew",
        component: () => import("pages/Sch_AssignCrew.vue"),
      },
      {
        path: "/schedular-available-crew",
        component: () => import("pages/Sch_AvailableCrew.vue"),
      },
      {
        path: "/schedular-manage-crew",
        component: () => import("pages/Sch_ManageCrew.vue"),
      },
      {
        path: "/schedular-crew-details",
        component: () => import("pages/Sch_crewDetails.vue"),
      },
      {
        path: "/PaymentPage",
        component: () => import("pages/PaymentPage.vue"),
      },
      {
        path: "/paymentgateway",
        component: () => import("pages/PaymentGateway.vue"),
      },
    ],
=======
      { path: '/aboutus', component: () => import('pages/AboutUs.vue') },
      { path: '/feedback', component: () => import('src/pages/FeedBack.vue') },
      { path: '/help&support', component: () => import('pages/HelpAndSupport.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/homepage', component: () => import('pages/HomePage.vue') },
      { path: '/home', component: () => import('pages/HomePagenew.vue') },
      { path: '/plannerhomepage', component: () => import('pages/planner_Home.vue')},
      { path: '/dee', component: () => import('pages/DeePage.vue') },
      { path: '/busticketbookingpage', component: () => import('pages/BusTicketBooking_3rdPage.vue')},
      { path: '/schedular-assign-crew', component: () => import('pages/Sch_AssignCrew.vue')},
      { path: '/schedular-available-crew', component: () => import('pages/Sch_AvailableCrew.vue')},
      { path: '/schedular-manage-crew', component: () => import('pages/Sch_ManageCrew.vue')},
      { path: '/schedular-crew-details', component: () => import('pages/Sch_crewDetails.vue')},
      { path: '/PaymentPage', component: () => import('pages/PaymentPage.vue')},
      { path: '/paymentgateway', component: () => import ('pages/PaymentGateway.vue')},
    ]
>>>>>>> Stashed changes
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
