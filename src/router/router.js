
const routers =  [
    {
      path: '/',
      name : 'Login',
      component:resolve=>require(['../page/login/index.vue'],resolve)
    },
  {
      path: '/home',
      name : 'Home',
      component:resolve=>require(['../page/home/index.vue'],resolve),
      children: [
        {
          path: 'workplace',
          name: 'workplace',//工作地点
          component:resolve=>require(['../page/organization/workplace/index.vue'],resolve)
        },
        {
          path: 'careerPlanning',
          name: 'careerPlanning',//职位规划
          component:resolve=>require(['../page/organization/careerPlanning/index.vue'],resolve)
        },
      ]
    },
  // {
  //     path: '/home/settings',
  //     name : 'workplace',
  //     component:resolve=>require(['../page/organization/workplace/index.vue'],resolve)
  //   },
    ]
export default routers
