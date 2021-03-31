export default {
  type: "object",
  properties: {
    id: { type: 'objectId' },
    manufacturer: { type: 'string' },
    model: { type: 'string' },
    total_price: { type: 'number' },
  },
  required: ['id']
} as const;
