import home from '../views/Home'

export default [
    {
        path: '/application',
        name: '/application',
        component: home,
        meta:{
            title: '应用'
        },
        children: [
            {
                path: '/application/three',
                name: '/application/three',
                component: () => import('@/components/common/three.vue'),
                meta:{
                    title: '应用分析'
                },
            },
            {
                path: '/application/three',
                name: '/application/three',
                component: () => import('@/components/common/three.vue'),
                meta: {
                    title: '应用分析'
                },
            }
        ]
    }
]