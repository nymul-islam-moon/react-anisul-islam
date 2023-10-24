import {useContext} from "react";
import {UsersContext} from "../Context/UsersContext";

export const useUsersContext = () => {
    return useContext(UsersContext);
}