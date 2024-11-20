module.exports = {
  apps: [
    {
      name: 'api',
      script: './build/index.js',
      watch: true,
      watch_delay: 1000,
      ignore_watch: ['./config', 'node_modules'],
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
