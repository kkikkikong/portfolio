import pubMain from '@/views/publish/PubMain.vue'
import nextPage from '@/views/publish/NextPage.vue'
import introMaster from '@/views/publish/IntroMaster.vue'

export default [
  {
    path: '/publish/PubMain',
    name: 'PubMain',
    component: pubMain,
    children: [
      {
        path: '/publish/NextPage',
        name: 'NextPage',
        component: nextPage
      },
      {
        path: '/publish/IntroMaster',
        name: 'IntroMaster',
        component: introMaster
      },
    ]
  }
]
