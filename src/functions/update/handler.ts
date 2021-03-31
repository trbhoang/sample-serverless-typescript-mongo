import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { updateOrder } from '../../app/repository/orders';
import schema from './schema';


const update: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const {id, ...data} = event.body;

  try {
    const order = await updateOrder(id, data);
    console.log(id, data);

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

export const main = middyfy(update);
