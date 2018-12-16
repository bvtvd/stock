import Login from './views/login.vue';
import NotFound from './views/common/404.vue';
import Home from './views/common/home.vue';
import echarts from './views/charts/echarts.vue';

let routes = [
    {
        path: '/admin/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/admin/404',
        component: NotFound,
        name: '',
        hidden: true
    },

    {
        path: '/admin',
        component: Home,
        icon: 'fa fa-bar-chart',
        children: [
            {
                path:'menu',
                component:resolve => require(['./views/menu.vue'], resolve),
                name:'菜单管理',
                icon:'fa fa-bar-chart'
            },
            {
                path:'index',
                component:resolve => require(['./views/index.vue'], resolve),
                name:'欢迎',
                icon:'fa fa-bar-chart'
            },
            {
                path:'product',
                component:resolve => require(['./views/product.vue'], resolve),
                name:'产品管理',
                icon:'fa fa-bar-chart'
            },{
                path:'business',
                component:resolve => require(['./views/business.vue'], resolve),
                name:'商家管理',
                icon:'fa fa-bar-chart'
            },
            {
                path:'statistics',
                component:resolve => require(['./views/statistics.vue'], resolve),
                name:'库存统计',
                icon:'fa fa-bar-chart'
            }
            /*{
                path:'open',
                component:resolve => require(['./views/open.vue'], resolve),
                name:'菜单管理',
                icon:'fa fa-bar-chart'
            },*/

        ]
    },
    {
        path: '/admin/manager',
        component: Home,
        name:'角色与管理员',
        icon: 'fa fa-bar-chart',
        children: [
            {
                path:'admin',
                component:resolve => require(['./views/admin.vue'], resolve),
                name:'管理员管理',
                icon:'fa fa-bar-chart'
            },
            {
                path:'role',
                component:resolve => require(['./views/role.vue'], resolve),
                name:'角色管理',
                icon:'fa fa-bar-chart'
            }
        ]
    },
    {
        path: '/admin/user',
        component: Home,
        name:'用户管理',
        icon: 'fa fa-bar-chart',
        children: [
            {
                path:'users',
                component:resolve => require(['./views/user.vue'], resolve),
                name:'用户列表',
                icon:'fa fa-bar-chart'
            }
        ]
    },
    {
        path: '/admin/system',
        component: Home,
        name:'系统设置',
        icon: 'fa fa-bar-chart',
        children: [
            {
                path:'category',
                component:resolve => require(['./views/category.vue'], resolve),
                name:'分类管理',
                icon:'fa fa-bar-chart'
            },
            {
                path:'manage',
                component:resolve => require(['./views/manage.vue'], resolve),
                name:'系统管理',
                icon:'fa fa-bar-chart'
            }
        ]
    },
    {
        path: '/admin/finished',
        component: Home,
        name:'成品类',
        icon: 'fa fa-bar-chart',
        children: [
            {
                path:'storage',
                component:resolve => require(['./views/finished-storage.vue'], resolve),
                name:'入库管理',
                icon:'fa fa-bar-chart'
            },
            {
                path:'outgoing',
                component:resolve => require(['./views/finished-outgoing.vue'], resolve),
                name:'出库管理',
                icon:'fa fa-bar-chart'
            }
        ]
    },
    {
        path: '/admin/material',
        component: Home,
        name:'原料类',
        icon: 'fa fa-bar-chart',
        children: [
            {
                path:'storage',
                component:resolve => require(['./views/material-storage.vue'], resolve),
                name:'入库管理',
                icon:'fa fa-bar-chart'
            },
            {
                path:'outgoing',
                component:resolve => require(['./views/material-outgoing.vue'], resolve),
                name:'出库管理',
                icon:'fa fa-bar-chart'
            }
        ]
    },
    {
        path: '/admin/batching',
        component: Home,
        name:'配品配件',
        icon: 'fa fa-bar-chart',
        children: [
            {
                path:'storage',
                component:resolve => require(['./views/batching-storage.vue'], resolve),
                name:'入库管理',
                icon:'fa fa-bar-chart'
            },
            {
                path:'outgoing',
                component:resolve => require(['./views/batching-outgoing.vue'], resolve),
                name:'出库管理',
                icon:'fa fa-bar-chart'
            }
        ]
    },
    {
        path: '/admin/finance',
        component: Home,
        name:'财务统计',
        icon: 'fa fa-bar-chart',
        children: [
            {
                path:'finance',
                component:resolve => require(['./views/finance.vue'], resolve),
                name:'入库管理',
                icon:'fa fa-bar-chart'
            },
            {
                path:'settlement',
                component:resolve => require(['./views/settlement.vue'], resolve),
                name:'出库结算',
                icon:'fa fa-bar-chart'
            }
        ]
    }

];

export default routes;