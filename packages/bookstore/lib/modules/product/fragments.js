import { registerFragment } from "meteor/vulcan:core";

registerFragment(`
   fragment ProductItemFragment on Product {
     _id
     createdAt
     categoryId
     picture
     sku
     name
     description
     price
   }
`);
