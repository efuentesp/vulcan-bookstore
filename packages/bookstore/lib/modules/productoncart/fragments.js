import { registerFragment } from "meteor/vulcan:core";

registerFragment(`
   fragment ProductOnCartItemFragment on ProductOnCart {
     _id
     createdAt
     shoppingcartId
     productId
     price
     quantity
     total
   }
`);
