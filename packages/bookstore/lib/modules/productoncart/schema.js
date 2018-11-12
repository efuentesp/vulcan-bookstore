const schema = {
  _id: {
    type: String,
    optional: true,
    canRead: ["guests"],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ["guests"],
    onCreate: ({ newDocument, currentUser}) => {
      return new Date();
    }
  },
  userId: {
    type: String,
    optional: true,
    canRead: ["guests"],
    resolveAs: {
      fieldName: "user",
      type: "User",
      resolver: (productoncart, args, context) => {
        return context.Users.findOne(
          {_id: productoncart.userId },
          {
          	fields: context.Users.getViewableFields(
          	  context.currentUser,
          	  context.Users
          	)
          }
        );
      },
      addOriginalField: true
    }
  },

  shoppingcartId : {
    label: "ShoppingCart" ,
    type: String,
    optional: false,
    //placeholder: "ShoppingCart",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
    resolveAs: {
      fieldName: "shoppingcart",
      type: "ShoppingCart",
      resolver: (entity, args, { ShoppingCarts }) =>
        entity.shoppingcartId && ShoppingCarts.loader.load(entity.shoppingcartId),
      addOriginalField: true
    }
  },
  productId : {
    label: "Product" ,
    type: String,
    optional: false,
    //placeholder: "Product",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
    resolveAs: {
      fieldName: "product",
      type: "Product",
      resolver: (entity, args, { Products }) =>
        entity.productId && Products.loader.load(entity.productId),
      addOriginalField: true
    }
  },
  price : {
    label: "Price" ,
    type: Number,
    optional: false,
    //input: "text",
    //placeholder: "Price",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  quantity : {
    label: "Quantity" ,
    type: Number,
    optional: false,
    //input: "text",
    //placeholder: "Quantity",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  total : {
    label: "Total" ,
    type: Number,
    optional: false,
    //input: "text",
    //placeholder: "Total",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
};

export default schema;
