exports.config = {
    
        capabilities: {
            'browserName': 'chrome',
         },
        
        seleniumAddress: 'http://localhost:4444/wd/hub',
        specs: ['./**/todo-specHelloCICD.js'] ,
        framework: 'jasmine2' ,
        jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 200000,
        },
        
        suites: {
            smoke: './smoke/*.specs.js',
            full: './**/todo-specLGD.js'

        },
    
        onPrepare: function () {
            beforeEach(function () {
                browser.waitForAngularEnabled(false);
                browser.get('http://localhost:9001');
                browser.ignoreSynchronization = true;
            browser.driver.manage().window().maximize();
            });
    
        }
    };
