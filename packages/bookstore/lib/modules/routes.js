import { addRoute } from "meteor/vulcan:core";

addRoute({
  name: "login",
  path: "/login",
  componentName: "Login"
});

addRoute({
  name: "home",
  path: "/",
  componentName: "ProductCategoriesScreen"
});

addRoute({
  name: "productcategoriesscreen",
  path: "/productcategoriesscreen",
  componentName: "ProductCategoriesScreen"
});

addRoute({
  name: "productlistscreen",
  path: "/productlistscreen/:id",
  componentName: "ProductListScreen"
});

addRoute({
  name: "productscreen",
  path: "/productscreen/:id",
  componentName: "ProductScreen"
});

addRoute({
  name: "shoppingcartscreen",
  path: "/shoppingcartscreen",
  componentName: "ShoppingCartScreen"
});

addRoute({
  name: "checkoutscreen",
  path: "/checkoutscreen",
  componentName: "CheckoutScreen"
});

addRoute({
  name: "paymentconfirmationscreen",
  path: "/paymentconfirmationscreen",
  componentName: "PaymentConfirmationScreen"
});
