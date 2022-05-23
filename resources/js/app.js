import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import Nav from '@layouts/Nav'

createInertiaApp({
    resolve: async name => {
        const page = require(`./Pages/${name}`).default
        if (page.layout === undefined && !name.startsWith('Home')) {
            page.layout = page => <Nav children={page} />
        }
        return page
    },
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})
