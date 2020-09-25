// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

export const VERSION = process.env.VERSION;
export const DEBUG_INFO_ENABLED = !!process.env.DEBUG_INFO_ENABLED;
export const SERVER_API_URL = process.env.SERVER_API_URL;
export const BUILD_TIMESTAMP = process.env.BUILD_TIMESTAMP;
// export const SERVER_SERVICES_URL = 'http://localhost:9000';
// export const SERVER_SERVICES_URL = 'http://10.25.23.231:9000';
export const SERVER_SERVICES_URL = 'http://10.24.9.6:8080/patrimonio';
