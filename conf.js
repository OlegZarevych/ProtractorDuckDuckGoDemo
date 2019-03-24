exports.config ={
    frameworks: "jasmin2",
    seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities:{
        browserName: "firefox"
    },
    specs:[
        './test/*.js'
    ],

    jasmineNodeOpts:{
        showColors: true
    }
}