import { createStore } from 'vuex'
import slider from './modules/slider'
import gallery from './modules/gallery'
import events from './modules/events'

export default createStore({
    modules: {
        slider,
        gallery,
        events
    }
})
