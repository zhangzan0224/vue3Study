const routes = [
  {
    name: "EmitTest",
    path: "/emitTest",
    component: () => import("@/testEmit/ParentTemp.vue"),
  },
];

export default routes;
