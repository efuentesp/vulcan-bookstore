import {
  createCollection,
  getDefaultResolvers,
  getDefaultMutations
} from "meteor/vulcan:core";
import schema from "./schema.js";
import "./fragments.js";
import "./permissions.js";

const Categories = createCollection({
  schema,
  //collectionName: "Categories",
  typeName: "Category",
  resolvers: getDefaultResolvers({ typeName: "Category" }),
  mutations: getDefaultMutations({ typeName: "Category" })
});

Categories.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  };
});

export default Categories;
