import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../actions/users";
import BootstrapTable from 'react-bootstrap-table-next'
import {Button} from "react-bootstrap";


const UsersTable = () => {

    const dispatch = useDispatch()
    dispatch(getUsers())

    const columns = [
        { dataField: '_id', text: 'ID'},
        { dataField: 'email', text: 'Email'},
        { dataField: 'name', text: 'Name'},
        { dataField: 'surname', text: 'Surname'},
        { dataField: 'registrationDate',  text: 'Registration Date'},
        { dataField: 'role', text: 'Role'},
        { dataField: 'status', text: 'Status'}
        ];

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true
    };

    const user1 = {email: "test1@mail.ru",
        name: "testname1",
        password: "$2b$08$wq.DFoW3NOjoIFkPaudnfOa21Gl1eEP8IwaOcxJEwO1QGcve3hHIe",
        registrationDate: "2021-12-23T21:09:37.629Z",
        role: "User",
        status: "Unlocked",
        surname: "testsurname1",
        _id: "TEST_DATA1"}
    const user2 = {email: "1@1.ru",
        name: "1",
        password: "$2b$08$3BtucGygUsqX7fdSmMlfy.AgGJDDfOro54K0nJCwV4FJY5GyrszUi",
        registrationDate: "2021-12-25T18:14:17.969Z",
        role: "User",
        status: "Unlocked",
        surname: "1",
        __v: 0,
        _id: "TEST_DATA2"}
    const user3 = {email: "test4@mail.tu",
        name: "1243",
        password: "$2b$08$9zTxBUJ.ZlJgS5dy8PPgwOt2QfyKwBYJx7yjxX5nbeO70OG0jFo6G",
        registrationDate: "2021-12-26T08:54:14.893Z",
        role: "User",
        status: "Unlocked",
        surname: "124",
        __v: 0,
        _id: "TEST_DATA3"}



    return (
        <div>
            <div className="justify-content-end">
                <Button variant="primary"  className="m-sm-2">
                    Change role (User/Admin)
                </Button>
                <Button  variant="primary" className="m-sm-2">
                    Change status (locked/unlocked)
                </Button>
                <Button  variant="danger"  className="m-sm-2">
                    Delete
                </Button>
            </div>
            <BootstrapTable
                keyField='_id'
                data={[user1, user2, user3]}
                columns={ columns }
                selectRow={ selectRow }/>
        </div>
    );
};

export default UsersTable;