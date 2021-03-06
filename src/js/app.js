requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
  },
  shim: {
    'vendor/purl': {
        exports: 'purl'
    },
  },
  packages: [
    {
      name: 'cs',
      main: 'cs'
    },
    {
      name: 'coffee-script',
      main: 'coffee-script'
    }
  ]
});

console.log("about to require og app.js");
requirejs(['app/app'],
  function(App) {
    console.log("calling App.init");
    App.init();
  }
);
