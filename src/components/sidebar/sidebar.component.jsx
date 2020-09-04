import React from "react";
import { connect } from "react-redux";

import SidebarRow from "../sidebar-row/sidebar-row.component";

// import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
// import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
// import PeopleIcon from "@material-ui/icons/People";
// import ChatIcon from "@material-ui/icons/Chat";
// import StorefrontIcon from "@material-ui/icons/Storefront";
// import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./sidebar.style.css";

function Sidebar({ currentUser }) {
  const { displayName, photoURL } = currentUser;

  return (
    <div className="sidebar">
      <SidebarRow src={photoURL} title={displayName} />
      <SidebarRow
        imageSrc="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png"
        title="COVID-19 Information Center"
      />
      <SidebarRow
        imageSrc="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
        title="Friends"
      />
      <SidebarRow
        imageSrc="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
        title="Groups"
      />
      <SidebarRow
        imageSrc="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
        title="Marketplace"
      />
      <SidebarRow
        imageSrc="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
        title="Videos"
      />
      <SidebarRow
        imageSrc="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
        title="Saved"
      />
      <SidebarRow
        imageSrc="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png"
        title="Events"
      />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Sidebar);
