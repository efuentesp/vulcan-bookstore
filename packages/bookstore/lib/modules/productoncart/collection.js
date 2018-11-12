import {
  createCollection,
  getDefaultResolvers,
  getDefaultMutations
} from "meteor/vulcan:core";
import schema from "./schema.js";
import "./fragments.js";
import "./permissions.js";

const ProductOnCarts = createCollection({
  schema,
  //collectionName: "ProductOnCarts",
  typeName: "ProductOnCart",
  resolvers: getDefaultResolvers({ typeName: "ProductOnCart" }),
  mutations: getDefaultMutations({ typeName: "ProductOnCart" })
});

ProductOnCarts.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  };
});

export default ProductOnCarts;
