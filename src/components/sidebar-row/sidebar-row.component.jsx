import React from "react";

import { Avatar } from "@material-ui/core";

import "./sidebar-row.style.css";

function SidebarRow({ src, imageSrc, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      {imageSrc && <img src={imageSrc} alt={title} />}

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
