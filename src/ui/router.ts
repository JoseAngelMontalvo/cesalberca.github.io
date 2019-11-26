import { VueRouter } from 'vue-router/types/router'

export class Router {
  private readonly _value: VueRouter

  constructor(private readonly vueRouter: typeof VueRouter) {
    this._value = new this.vueRouter({
      base: process.env.BASE_URL,
      routes: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './pages/home/x-home.vue')
        },
        {
          path: '/articles',
          name: 'articles',
          component: () =>
            import(/* webpackChunkName: "articles" */ './pages/articles/x-articles.vue')
        },
        {
          path: '/article/:id',
          name: 'article',
          component: () =>
            import(/* webpackChunkName: "article" */ './pages/articles/x-article.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ './pages/about/x-about.vue')
        },
        {
          path: '/talks',
          name: 'talks',
          component: () => import(/* webpackChunkName: "talks" */ './pages/talks/x-talks.vue')
        }
      ]
    })
  }

  get value(): VueRouter {
    return this._value
  }

  static create(vueRouter: typeof VueRouter) {
    return new Router(vueRouter)
  }
}