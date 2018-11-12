import { registerFragment } from "meteor/vulcan:core";

registerFragment(`
   fragment CustomerItemFragment on Customer {
     _id
     createdAt
     typeId
     emailaddress
     fullname
     phonenumber
     address1
     address2
     city
     state
     postalcode
     country
   }
`);
