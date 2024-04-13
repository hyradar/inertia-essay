import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import NProgress from 'nprogress'
import { router } from '@inertiajs/react'

createInertiaApp({
    // Resolve the page components using the correct import path
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
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
    
});

// router.setColor("green");
router.on('start', () => NProgress.start())
router.on('finish', () => NProgress.done())