import type { AWS } from '@serverless/typescript';

import { create, update, findOne } from './src/functions';

const serverlessConfiguration: AWS = {
  service: 'vehicle-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  useDotenv: true,
  functions: { create, update, findOne }
}

module.exports = serverlessConfiguration;
