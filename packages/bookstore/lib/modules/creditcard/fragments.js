import { registerFragment } from "meteor/vulcan:core";

registerFragment(`
   fragment CreditCardItemFragment on CreditCard {
     _id
     createdAt
     customerId
     cardname
     cardnumber
     expirationdate
     cvv
   }
`);
