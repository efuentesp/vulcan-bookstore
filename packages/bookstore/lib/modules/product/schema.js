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
      resolver: (product, args, context) => {
        return context.Users.findOne(
          {_id: product.userId },
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

  categoryId : {
    label: "Category" ,
    type: String,
    optional: false,
    //placeholder: "Category",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
    resolveAs: {
      fieldName: "category",
      type: "Category",
      resolver: (entity, args, { Categories }) =>
        entity.categoryId && Categories.loader.load(entity.categoryId),
      addOriginalField: true
    }
  },
  picture : {
    label: "Picture" ,
    type: String,
    optional: false,
    //placeholder: "Picture",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
  },
  sku : {
    label: "Sku" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "Sku",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  name : {
    label: "Name" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "Name",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  description : {
    label: "Description" ,
    type: String,
    optional: false,
    //input: "textarea",
    //placeholder: "Description",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
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
};

export default schema;
