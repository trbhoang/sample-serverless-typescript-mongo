import { Types } from 'mongoose';
import { orders } from '../model';


type ICreateOrder = {
  manufacturer?: string,
  model?: string,
  total_price?: number,
}


/**
 * Find order by id
 * @param id
 */
export async function findOrder(id: Types.ObjectId) {
  return await orders.findById(id);
}

/**
  * Create order
  * @param params
  */
export async function createOrder(data: ICreateOrder) {
  return await orders.create(data);
}

/**
 * Update an order by id
 * @param id
 * @param data
 */
export async function updateOrder(id: Types.ObjectId, data: ICreateOrder) {
  //@ts-ignore
  return await orders.findOneAndUpdate(
    { _id: id },
    { $set: data },
    { new: true },
  );
}