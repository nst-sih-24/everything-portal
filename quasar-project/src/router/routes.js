const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      // { path: '/about-us', component: () => import ('pages/AboutUs.vue')},
      // { path: '/busticketbookingpage', component: () => import('pages/BusTicketBooking.vue')},
      // { path: '/paymentgateway', component: () => import ('pages/PaymentGateway.vue')},
      // { path: '/schedular-assign-crew', component: () => import('pages/Sch_AssignCrew.vue')},
      // { path: '/schedular-available-crew', component: () => import('pages/Sch_AvailableCrew.vue')},
      // { path: '/schedular-manage-crew', component: () => import('pages/Sch_ManageCrew.vue')},
      // { path: '/schedular-crew-details', component: () => import('pages/Sch_crewDetails.vue')},


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
