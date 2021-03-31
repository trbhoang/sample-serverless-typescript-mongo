export default {
  type: "object",
  properties: {
    id: { type: 'objectId' }
  },
  required: ['id']
} as const;