import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem component={Link} to="/" disablePadding>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/about" disablePadding>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem component={Link} to="/dashboard" disablePadding>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;