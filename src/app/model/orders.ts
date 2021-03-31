import * as mongoose from 'mongoose';


export type OrdersDocument = mongoose.Document & {
  manufacturer?: string,
  model?: string,
  total_price?: number,
  created_at?: Date,
};

const ordersSchema = new mongoose.Schema({
  manufacturer: String,
  model: String,
  total_price: Number,
  created_at: {
    type: Date,
    default: Date.now,
    index: { expires: 3 * 24 * 60 * 60 }, // 3 days
  },
});

export const orders = (mongoose.models.orders ||
mongoose.model<OrdersDocument>('orders', ordersSchema, 'orders')
);