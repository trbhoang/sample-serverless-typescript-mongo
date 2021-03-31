export default {
  type: "object",
  properties: {
    manufacturer: { type: 'string' },
    model: { type: 'string' },
    total_price: { type: 'number' },
  },
  required: ['manufacturer', 'model', 'total_price']
} as const;
