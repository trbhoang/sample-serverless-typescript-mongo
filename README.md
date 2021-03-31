# Vehicles Service API

## Installation/deployment instructions

- Run `npm i` to install the project dependencies
- Run `npm run dev` to deploy this stack locally to develop
- Run `npm run deploy` to deploy this stack to AWS

## Test the service locally

- Edit `.env` file with correct config
- Run `npm run dev`
- Test `create` api:

```
curl --request POST \
  --url http://localhost:3000/dev/create \
  --header 'Content-Type: application/json' \
  --data '{
	"manufacturer": "Vinfast",
	"model": "Fadil",
	"total_price": 20000
}'
```

- Test `update` api:

```
curl --request POST \
  --url http://localhost:3000/dev/update \
  --header 'Content-Type: application/json' \
  --data '{
	"id": "606442a370fecb6398bc3a4d",
	"manufacturer": "Toyota",
	"model": "Vios",
	"total_price": 30000
}'
```

- Test `findOne` api:

```
curl --request POST \
  --url http://localhost:3000/dev/findOne \
  --header 'Content-Type: application/json' \
  --data '{
	"id": "606431460a5fc927a0e5e1a8"
}'
```

## Reference

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).
For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).
