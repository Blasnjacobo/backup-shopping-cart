import { useState } from 'react'
import { Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Login from './Login';

const SignInIcon = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <NavbarBs as={NavLink} to='/shopping-cart/'>
                <i className="bi bi-person" onClick={handleShow} style={{ fontSize: '1.5rem', marginLeft: '2rem', cursor: 'pointer', color: 'black' }}></i>
            </NavbarBs>
            <Login show={show} handleClose={handleClose} />
        </>
    )
}

export default SignInIcon
