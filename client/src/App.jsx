import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/navbar/navibar"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Registration from  "./components/authorization/registration"
import Login from "./components/authorization/login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";
import UsersTable from "./components/usertable/usersTable";


function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])


    return (
      <BrowserRouter>
        <div>
        <Navibar/>
            <div>
                {!isAuth ?
                    <Routes>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/" element={<Navigate replace to="/login" />} />

                    </Routes>
                    :
                <Routes>
                    <Route path="/" element={<UsersTable/>}/>/>
                    <Route path="/login" element={<Navigate replace to="/" />} />
                </Routes>
                }
            </div>
        </div>
      </BrowserRouter>

  );
}

export default App;
