import {
  createCollection,
  getDefaultResolvers,
  getDefaultMutations
} from "meteor/vulcan:core";
import schema from "./schema.js";
import "./fragments.js";
import "./permissions.js";

const ShoppingCarts = createCollection({
  schema,
  //collectionName: "ShoppingCarts",
  typeName: "ShoppingCart",
  resolvers: getDefaultResolvers({ typeName: "ShoppingCart" }),
  mutations: getDefaultMutations({ typeName: "ShoppingCart" })
});

ShoppingCarts.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  };
});

export default ShoppingCarts;
