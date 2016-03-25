Package.describe({
  name: 'roylee0704:react-flexbox-grid',
  version: '0.9.5',
  summary: 'A set of React components implementing flexboxgrid with the power of CSS Modules',
  git: 'https://github.com/roylee0704/react-flexbox-grid',
  documentation: 'README.md'
});

Npm.depends({
  react: '0.14.3',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.8');
  api.use([
    'ecmascript',
    'nathantreid:css-modules',
    'kristoferjoseph:flexboxgrid',
  ]);

  api.mainModule('src/index.js');
});
