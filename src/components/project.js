import React from "react";
import DesignProjects from "./DesignProjects";
import ProductProjects from "./ProductProjects";

function Project(props) {
  return (
    <div>
      <ProductProjects props={props} />
      <DesignProjects props={props} />
    </div>
  );
}

export default Project;
