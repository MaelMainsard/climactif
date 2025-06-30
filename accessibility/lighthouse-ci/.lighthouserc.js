module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist/climactif/browser',
      url: ['http://localhost:4200/home'],
    },
    assets: {
      assertions: {
        'network-dependency-tree-insight': 'warn',
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
