import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { findOrder } from '../../app/repository/orders';


const findOne: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { id } = event.body;

  try {
    const order = await findOrder(id);
    return formatJSONResponse({
      status: "success",
      data: order
    });
  }
  catch (err) {
    console.error(err);
    return formatJSONResponse({
      status: "failed",
      message: "Error finding order"
    });
  }
}

export const main = middyfy(findOne);
