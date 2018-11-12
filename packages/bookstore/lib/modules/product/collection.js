import {
  createCollection,
  getDefaultResolvers,
  getDefaultMutations
} from "meteor/vulcan:core";
import schema from "./schema.js";
import "./fragments.js";
import "./permissions.js";

const Products = createCollection({
  schema,
  //collectionName: "Products",
  typeName: "Product",
  resolvers: getDefaultResolvers({ typeName: "Product" }),
  mutations: getDefaultMutations({ typeName: "Product" })
});

Products.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  };
});

export default Products;
