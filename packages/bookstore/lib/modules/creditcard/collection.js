import {
  createCollection,
  getDefaultResolvers,
  getDefaultMutations
} from "meteor/vulcan:core";
import schema from "./schema.js";
import "./fragments.js";
import "./permissions.js";

const CreditCards = createCollection({
  schema,
  //collectionName: "CreditCards",
  typeName: "CreditCard",
  resolvers: getDefaultResolvers({ typeName: "CreditCard" }),
  mutations: getDefaultMutations({ typeName: "CreditCard" })
});

CreditCards.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  };
});

export default CreditCards;
