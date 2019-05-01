import React from "react";
import { makeStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

function TemporaryDrawer(props) {
  const classes = useStyles();
  const { state, setState, ButtonAppBar } = props;

  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };

  const sideList = (
    <div className={classes.list}>
      <List>
        {["Smash Info", "User Data"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const toggle = toggleDrawer("left", true);
  return (
    <div>
      <ButtonAppBar toggle={toggle} />
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
