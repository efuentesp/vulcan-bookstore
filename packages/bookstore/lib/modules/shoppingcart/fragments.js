import { registerFragment } from "meteor/vulcan:core";

registerFragment(`
   fragment ShoppingCartItemFragment on ShoppingCart {
     _id
     createdAt
     customerId
     productsoncartId
     subtotal
     taxamount
     discountamount
     totalamount
   }
`);
