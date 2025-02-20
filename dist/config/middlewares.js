"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    "strapi::logger",
    "strapi::errors",
    "strapi::security",
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "script-src": [
                        "'self'",
                        "https://unpkg.com",
                        "'unsafe-inline'",
                        "blob:",
                    ],
                    "worker-src": ["'self'", "blob:"],
                },
            },
        },
    },
];
