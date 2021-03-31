import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { createOrder } from '../../app/repository/orders';


const create: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const data = event.body;

  try {
    const order = await createOrder(data);
    return formatJSONResponse({
      status: "success",
      data: order
    });
  }
  catch (err) {
    console.error(err);
    return formatJSONResponse({
      status: "failed",
      message: "Error creating order"
    });
  }
}

export const main = middyfy(create);
