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

requirejs(['app/app'],
  function(realm) {
    // realm.init();
  }
);
