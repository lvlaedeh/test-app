import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Navbar from '../Navigition/Navbar'

const Layout = (props) => {
    // const layoutStyle= {
    //     marginTop : '6rem'
    // style = { layoutStyle }
    // }
    return (
        <Wrapper>
            <Navbar/>
            <main > {props.children} </main>
        </Wrapper>
    )
}
export default Layout