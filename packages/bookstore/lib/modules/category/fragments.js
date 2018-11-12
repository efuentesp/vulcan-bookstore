import { registerFragment } from "meteor/vulcan:core";

registerFragment(`
   fragment CategoryItemFragment on Category {
     _id
     createdAt
     picture
     name
   }
`);
