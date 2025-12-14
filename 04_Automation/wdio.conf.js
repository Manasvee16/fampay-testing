exports.config = {
    runner: 'local',
    specs: ['./tests/**/*.js'],

    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'info',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
