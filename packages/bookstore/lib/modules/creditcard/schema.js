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
      resolver: (creditcard, args, context) => {
        return context.Users.findOne(
          {_id: creditcard.userId },
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
  cardname : {
    label: "CardName" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "CardName",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  cardnumber : {
    label: "CardNumber" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "CardNumber",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  expirationdate : {
    label: "ExpirationDate" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "ExpirationDate",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  cvv : {
    label: "CVV" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "CVV",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
};

export default schema;
