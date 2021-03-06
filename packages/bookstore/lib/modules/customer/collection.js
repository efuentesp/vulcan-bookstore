import {
  createCollection,
  getDefaultResolvers,
  getDefaultMutations
} from "meteor/vulcan:core";
import schema from "./schema.js";
import "./fragments.js";
import "./permissions.js";

const Customers = createCollection({
  schema,
  //collectionName: "Customers",
  typeName: "Customer",
  resolvers: getDefaultResolvers({ typeName: "Customer" }),
  mutations: getDefaultMutations({ typeName: "Customer" })
});

Customers.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  };
});

export default Customers;
