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
      resolver: (customer, args, context) => {
        return context.Users.findOne(
          {_id: customer.userId },
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

  typeId : {
    label: "Type" ,
    type: String,
    optional: false,
    //placeholder: "Type",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  emailaddress : {
    label: "EmailAddress" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "EmailAddress",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  fullname : {
    label: "FullName" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "FullName",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  phonenumber : {
    label: "PhoneNumber" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "PhoneNumber",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  address1 : {
    label: "Address1" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "Address1",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  address2 : {
    label: "Address2" ,
    type: String,
    optional: true,
    //input: "text",
    //placeholder: "Address2",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  city : {
    label: "City" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "City",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  state : {
    label: "State" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "State",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  postalcode : {
    label: "PostalCode" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "PostalCode",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
  country : {
    label: "Country" ,
    type: String,
    optional: false,
    //input: "text",
    //placeholder: "Country",
    canRead: ["guests"],
    canCreate: ["members"],
    canUpdate: ["members"],
    //searchable: true, // make field searchable
  },
};

export default schema;
