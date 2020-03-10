export default {
        path: '/cinema',
        name: 'cinema',
        component: () => import('@/views/Cinema'),
        children: [
                {
                        path: 'city',
                        component: () => import('@/views/Cinema/City')
                },
                {
                        path: 'reying',
                        component: () => import('@/views/Cinema/Reying')
                },
                {
                        path: 'shangying',
                        component: () => import('@/views/Cinema/Shangying')
                },
                {
                        path: 'soushuo',
                        component: () => import('@/views/Cinema/Soushuo')
                },

                { path: '/cinema', redirect: '/cinema/reying' }

        ]
}