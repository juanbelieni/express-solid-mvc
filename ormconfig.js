const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'express-solid-mvc',
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts', 'dist/entities/**/*.js'],
};

module.exports = config;
