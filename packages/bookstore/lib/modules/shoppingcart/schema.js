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
      resolver: (shoppingcart, args, context) => {
        return context.Users.findOne(
          {_id: shoppingcart.userId },
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

  customerId : {
    label: "Customer" ,
    type: String,
    optional: false,
    //placeholder: "Customer",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
    resolveAs: {
      fieldName: "customer",
      type: "Customer",
      resolver: (entity, args, { Customers }) =>
        entity.customerId && Customers.loader.load(entity.customerId),
      addOriginalField: true
    }
  },
  productsoncartId : {
    label: "ProductsOnCart" ,
    type: String,
    optional: false,
    //placeholder: "ProductsOnCart",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
    resolveAs: {
      fieldName: "productsoncart",
      type: "ProductOnCart",
      resolver: (entity, args, { ProductOnCarts }) =>
        entity.productsoncartId && ProductOnCarts.loader.load(entity.productsoncartId),
      addOriginalField: true
    }
  },
  subtotal : {
    label: "SubTotal" ,
    type: Number,
    optional: false,
    //input: "text",
    //placeholder: "SubTotal",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  taxamount : {
    label: "TaxAmount" ,
    type: Number,
    optional: false,
    //input: "text",
    //placeholder: "TaxAmount",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  discountamount : {
    label: "DiscountAmount" ,
    type: Number,
    optional: false,
    //input: "text",
    //placeholder: "DiscountAmount",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  totalamount : {
    label: "TotalAmount" ,
    type: Number,
    optional: false,
    //input: "text",
    //placeholder: "TotalAmount",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
};

export default schema;
