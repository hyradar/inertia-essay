import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import NProgress from 'nprogress'
import { router } from '@inertiajs/react'
import Layout from './Shared/Layout';

createInertiaApp({
    // Resolve the page components using the correct import path
    // https://laracasts.com/series/build-modern-laravel-apps-using-inertia-js/episodes/13
    // https://inertiajs.com/pages
    resolve: name => {
        resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx'))
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        const page = pages[`./Pages/${name}.jsx`]
        // const page = require(`./Pages${name}`).default;

        // this makes it so that the 'logged in' layout only applies
        // if the user is logged in. Will show a different layout for pages where
        // the user is not logged in.
        console.log(page.default.layout);
        if (page.default.layout === undefined) {
            page.default.layout = <Layout children={page} />;
        }

        

        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 550,
    
        // The color of the progress bar...
        color: '#29d',
    
        // Whether to include the default NProgress styles...
        includeCSS: true,
    
        // Whether the NProgress spinner will be shown...
        showSpinner: true,
      },

      title: title => title + ": : My app",
    
});

// router.setColor("green");
router.on('start', () => NProgress.start())
router.on('finish', () => NProgress.done())