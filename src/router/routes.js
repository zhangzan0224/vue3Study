const routes = [
  {
    name: 'EmitTest',
    path: '/emitTest',
    component: () => import('@/testEmit/ParentTemp.vue')
  },
  // 计算属性测试组件导入
  {
    name: 'ComputedTest',
    path: '/computedtest',
    component: () => import('@/testComputed/index.vue')
  },
  // 计算属性测试组件导入
  {
    name: 'watchTest',
    path: '/watchtest',
    component: () => import('@/testWatch/index.vue')
  },
  // 测试hooks
  {
    name: 'TestHooks',
    path: '/hookstest',
    component: () => import('@/testHooks/index.vue')
  },
  {
    name: 'TestSuspense',
    path: '/suspensetest',
    component: () => import('@/testSuspense/index.vue')
  }
]

export default routes
