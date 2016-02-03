module.exports = {
  request: {
    id: '/request',
    type: "object",
    properties: {
      project: {"type": "integer"},
      part: {"type": "string"},
      quantity: {"type": "integer", "minimum": 1},
      unit_price: {"type": "number", "minimum": 0.01},
      link: {"type": "string"},
      purpose: {"type": "string"}
    },
    required: ["project", "part", "quantity", "unit_price", "link", "purpose"]
  }
};
