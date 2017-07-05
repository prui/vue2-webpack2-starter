const DEV_DOMAIN = './api';
const TEST_DOMAIN = './api';
const RELEASE_DOMAIN = './api';

const DOMAINS_MAP = {
    development: DEV_DOMAIN,
    test: TEST_DOMAIN,
    production: RELEASE_DOMAIN,
};
const ENV_MAP = {
    development: 'DEV',
    test: 'TEST',
    production: 'RELEASE',
};
export default {
    ENV: ENV_MAP[process.env.NODE_ENV],
    API: DOMAINS_MAP[process.env.NODE_ENV],
};