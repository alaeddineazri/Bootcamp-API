import React from 'react'
import {Accordion} from 'react-bootstrap'

const UserCard = ({user}) => {

    return (

        <div>
            <Accordion style={{ width: '25rem',marginTop:'2px' }} defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >{user.name}</Accordion.Header>
                    <Accordion.Body>
                        <p>Username : {user.username}</p>
                        <p>Phone : {user.phone}</p>
                        <p>Email : {user.email}</p>
                        <p>address : {user.address.street}</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}


export default UserCard