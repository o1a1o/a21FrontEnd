import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:()=>import('../views/Login.vue'),
    },
    {
      path:'/Register',
      name:'Register',
      component:()=>import('../views/Register.vue'),
    },
    {
      path:'/Reg1',
      name:'Reg1',
      component:()=>import('../views/Reg1.vue'),
    },
    {
      path:'/Reg2',
      name:'Reg2',
      component:()=>import('../views/Reg2.vue'),
    },
    {
      path: '/Index',
      name: 'Index',
      component:()=>import('../views/Index.vue'),
      children:[
        {
          path: "/YWhome",
          name: "YWhome",
          component:()=>import('../views/YW/YWhome.vue'),
        },
        {
          path: "/YWreleasedProduct",
          name: "YWreleasedProduct",
          component:()=>import('../views/YW/YWreleasedProduct.vue'),
        },
        {
          path: "/YWshowProduct",
          name: "YWshowProduct",
          component:()=>import('../views/YW/YWshowProduct.vue'),
        },
        {
          path: "/YWmessage",
          name: "YWmessage",
          component:()=>import('../views/YW/YWmessage.vue'),
        },
        {
          path: "/YWcustomer",
          name: "YWcustomer",
          component:()=>import('../views/YW/YWcustomer.vue'),
        },
        {
          path: "/YWgeren",
          name: "YWgeren",
          component:()=>import('../views/YW/YWgeren.vue'),
        },
      ]
    }
    // {
    //   path:  '/',
    //   name: 'Introduce',
    //   component: Introduce,
    //   children:[
    //     {
    //       path:'/intro_main',
    //       name:'intro_main',
    //       component:()=>import('@/views/intro/intro_main.vue')
    //     },
    //     {
    //       path:'/intro_buy',
    //       name:'intro_buy',
    //       component:()=>import('@/views/intro/intro_buy.vue')
    //     },
    //     {
    //       path:'/intro_about',
    //       name:'intro_about',
    //       component:()=>import('@/views/intro/intro_about.vue')
    //     },
    //   ]
    // },
    // {
    //   path:  '/Login',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/Register',
    //   name: 'Register',
    //   component: Register
    // },
    // {
    //   path: '/Index',
    //   name: 'Index',
    //   component: Index,
    //   children:[
    //     {
    //       path:'/home',
    //       name:'home',
    //       component:()=>import('@/views/Home.vue')
    //     },
    //     {
    //       path:'/Inform',
    //       name:'Inform',
    //       component:()=>import('@/views/Inform.vue')
    //     },
    //     {
    //       path:'/Examine_Emp',
    //       name:'Examine_Emp',
    //       component:()=>import('@/views/Examine_Emp.vue')
    //     },
    //     {
    //       path:'/Addemployee',
    //       name:'Addemployee',
    //       component:()=>import('@/views/Addemployee.vue')
    //     },


    //     {
    //       path:'/lookuser',
    //       name:'lookuser',
    //       component:()=>import('@/views/Lookuser.vue')
    //     },
    //     {
    //       path: '/emo',
    //       name: 'emo',
    //       component: () => import('@/views/Emo.vue')
    //     },
    //     {
    //       path:'/user',
    //       name:'user',
    //       component:()=>import('@/views/User.vue')
    //     },
    //     {
    //       path:'/operation',
    //       name:'operation',
    //       component:operation,
    //       children:[
    //         {
    //           path:'/RelationTransform',
    //           name:'RelationTransform',
    //           component:()=>import('@/views/RelationTransform.vue')
    //         },
    //         {
    //           path:'/AdministratorChange',
    //           name:'AdministratorChange',
    //           component:()=>import('@/views/AdministratorChange.vue')
    //         }
    //       ]
    //     },
    //   ]
    // }
  ]
})