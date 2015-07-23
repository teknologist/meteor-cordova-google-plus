Package.describe({
    name: "hedcet:cordova-google-plus-native-sign-in",
    summary: "native SignIn with Google Plus in Meteor-Cordova Android/IOS Apps",
    documentation: "README.md",
    version: "0.0.12",
    git: "https://github.com/sujith3g/meteor-cordova-google-plus.git"
});

Cordova.depends({
    "nl.x-services.plugins.googleplus": "1.1.2"
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@1.0");

    api.use([
        "accounts-base"
    ], ["client", "server"]);
    api.use(["http", "underscore"], ["server"]);

    api.imply(["accounts-base"], ["client", "server"]);

    api.add_files([
        "server/cordova_g_plus.js"
    ], ["server"]);
    api.add_files([
        "cordova/cordova_g_plus.js"
    ], ["web.cordova"]);
});

Package.onTest(function(api) {
    api.use(["hedcet:cordova-google-plus-native-sign-in", "tinytest"]);

    api.addFiles("tests/client/cordova_g_plus_test.js", "client");
});
