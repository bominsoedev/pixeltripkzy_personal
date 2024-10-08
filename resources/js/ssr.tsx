//@ts-nocheck
import ReactDOMServer from 'react-dom/server';
import {createInertiaApp} from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {route} from '../../vendor/tightenco/ziggy';
import {RouteName} from 'ziggy-js';
import React, {Suspense} from "react";
import {Provider} from "react-redux";
import store from "@/store";
import 'react-perfect-scrollbar/dist/css/styles.css';
import '@/i18n';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Alpine from 'alpinejs'


Alpine.start()

const appName = import.meta.env.VITE_APP_NAME || 'Photography';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
        setup: ({App, props}) => {
            global.route<RouteName> = (name, params, absolute) =>
                route(name, params as any, absolute, {
                    // @ts-expect-error
                    ...page.props.ziggy,
                    // @ts-expect-error
                    location: new URL(page.props.ziggy.location),
                });

            return <React.StrictMode>
                <Suspense>
                    <Provider store={store}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="*" element={<App {...props} />}/>
                            </Routes>
                        </BrowserRouter>
                    </Provider>
                </Suspense>
            </React.StrictMode>;
        },
    })
);
