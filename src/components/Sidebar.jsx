import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {CalendarIcon, AtSignIcon, EditIcon} from "@chakra-ui/icons";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2rem">
        <ListItem>
            <NavLink to="/">
            <ListIcon as={CalendarIcon} color="white"  />
            Dashboard</NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/create">
            <ListIcon as={EditIcon} color="white"/>
            New Task</NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/profile">
            <ListIcon as={AtSignIcon} color="white"/>
            Profile</NavLink>
        </ListItem>
    </List>
  )
} 
