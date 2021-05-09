import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Navbar from '../Navigition/Navbar'
import './layout.css'

const Layout = (props) => {

    return (
        <Wrapper>
            <Navbar/>
            <main className="layout"> {props.children} </main>
        </Wrapper>
    )
}
export default Layout