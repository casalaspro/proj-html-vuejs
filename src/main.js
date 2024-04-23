import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faXTwitter, faGooglePlusG, faSkype, faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faStarReg, faChevronDown, faFacebookF, faXTwitter, faGooglePlusG, faSkype, faInstagram, faLocationDot, faPhone, faEnvelope)

const app = createApp(App)




app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
