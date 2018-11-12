import React from "react";
import { Components, registerComponent } from "meteor/vulcan:core";

const ShoppingCartProductListItem = ({ productoncart, currentUser, refetch }) => (
  <div
    style={{
      paddingBottom: "15px",
      marginBottom: "15px",
      borderBottom: "1px solid #ccc"
    }}
  >
    {/* document properties */}
	<p>{productoncart.product}</p>
	<p>{productoncart.price}</p>
	<p>{productoncart.quantity}</p>
	<p>{productoncart.total}</p>
  </div>
);

registerComponent({ name: "ShoppingCartProductListItem", component: ShoppingCartProductListItem });
