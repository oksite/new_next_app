module.exports = {
  apps : [{
    name: "dev-app",
    script: "ts-node --project tsconfig.server.json server/index.ts",
    watch:['server'],
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    max_memory_restart: '1G',
    env: {
      NODE_ENV: "development",
    }
  },
  {
    name: "pro-app",
    script: "ts-node --project tsconfig.server.json server/index.ts",
    // watch:['server'],
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    max_memory_restart: '1G',
    env: {
      NODE_ENV: "production",
    }
  }]
}