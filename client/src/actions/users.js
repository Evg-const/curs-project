import axios from "axios";
import {setUsers} from "../reducers/usersReducer";

export function getUsers() {
    return async dispatch => {
        try{

            const response = await axios.get(`http://localhost:5000/api/users`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(setUsers(response.data))
            console.log(response.data)
        }
        catch (e) {
            alert(e.response.data.message);
        }
    }
}

// TODO: URL go to config