import React from "react";
import { Components, registerComponent } from "meteor/vulcan:core";

const ProductListItem = ({ product, currentUser, refetch }) => (
  <div
    style={{
      paddingBottom: "15px",
      marginBottom: "15px",
      borderBottom: "1px solid #ccc"
    }}
  >
    {/* document properties */}
	<p>{product.picture}</p>
	<p>{product.name}</p>
	<p>{product.description}</p>
  </div>
);

registerComponent({ name: "ProductListItem", component: ProductListItem });
