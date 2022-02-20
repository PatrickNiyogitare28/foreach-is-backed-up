import Onboard from '../../src/components/Onboard'
import TypeScript from '../../src/components/TypeScript.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component(Onboard.name, Onboard)
  Vue.component(TypeScript.name, TypeScript)
}
