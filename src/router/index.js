// import
const example = () => import(/* webpackChunkName: "example" */ '@v/example.vue')
const example1 = () => import(/* webpackChunkName: "example1" */ '@v/example1.vue')

// require.ensure
// const example = resolve => require.ensure([], () => resolve(require('@v/example.vue')), 'example')
// const example1 = resolve => require.ensure([], () => resolve(require('@v/example1.vue')), 'example1')

const routes = [
    {
        path: '/example',
        name: 'example',
        component: example
    },
    {
        path: '/example1',
        name: 'example1',
        component: example1
    },
]

export default routes