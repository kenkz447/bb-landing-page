import React from 'react'
import DOM from 'react-dom'

import { App } from './scripts'

document.body.onload = () => {
    DOM.render(<App />, document.getElementById('root'))
}
