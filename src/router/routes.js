const routes = [
  {
    name: "EmitTest",
    path: "/emitTest",
    component: () => import("@/testEmit/ParentTemp.vue"),
  },
  // 计算属性测试组件导入
  {
    name: "ComputedTest",
    path: "/computedtest",
    component: () => import("@/testComputed/index.vue"),
  },
];

export default routes;
