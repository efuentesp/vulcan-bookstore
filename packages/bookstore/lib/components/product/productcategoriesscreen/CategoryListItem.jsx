import React from "react";
import { Components, registerComponent } from "meteor/vulcan:core";

const CategoryListItem = ({ category, currentUser, refetch }) => (
  <div
    style={{
      paddingBottom: "15px",
      marginBottom: "15px",
      borderBottom: "1px solid #ccc"
    }}
  >
    {/* document properties */}
	<p>{category.picture}</p>
	<p>{category.name}</p>
  </div>
);

registerComponent({ name: "CategoryListItem", component: CategoryListItem });
