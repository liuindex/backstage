import home from '../views/Home'

export default [
    {
        path: '/application',
        name: '/application',
        components: home,
        meta: {
            tltle: '应用'
        },
        children: [
            {
                path: '/application/three',
                name: '/application/three',
                component: () => import('@/components/common/three.vue'),
                meta: {
                    tltle: '应用分析'
                },
            },
            {
                path: '/application/three',
                name: '/application/three',
                component: () => import('@/components/common/three.vue'),
                meta: {
                    tltle: '应用分析'
                },
            }
        ]
    }
]