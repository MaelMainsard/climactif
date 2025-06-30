module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist/climactif/browser',
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
      settings: {
        chromeFlags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--disable-web-security'
        ]
      }
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
