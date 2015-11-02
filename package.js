Package.describe({
  name: 'tableflip:popmotion',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'A 12kb JavaScript motion engine',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:tableflip/meteor-popmotion.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  popmotion: "3.6.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('popmotion.browserify.js', 'client');
  api.export('ui', 'client')
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.imply('tableflip:popmotion');
  api.addFiles('popmotion-tests.js', 'client');
});
