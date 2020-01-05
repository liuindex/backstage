import home from '../views/Home'

export default [
    {
        path: '/home',
        name: '/home',
        component: home,
        meta:{
            title: '用户信息'
        },
        children: [
            {
                path: '/home/one',
                name: '/home/one',
                component: () => import('@/components/common/one.vue'),
                meta:{
                    title: '第一次'
                },
            },
            {
                path: '/home/two',
                name: '/home/two',
                component: () => import('@/components/common/two.vue'),
                meta:{
                    title: '第二次'
                },
            }
        ]
    }
]