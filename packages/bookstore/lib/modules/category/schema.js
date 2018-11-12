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
      resolver: (category, args, context) => {
        return context.Users.findOne(
          {_id: category.userId },
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

  picture : {
    label: "Picture" ,
    type: String,
    optional: false,
    //placeholder: "Picture",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
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
};

export default schema;
