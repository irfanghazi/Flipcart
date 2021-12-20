import React from 'react'
import { Route,Redirect } from 'react-router-dom'

const PrivateRoute = ({component:Comp, ...rest}) => {
    return <Route {...rest} render = {(props)=>{
        const token = window.localStorage.getItem('token')
        if(token){
            return <Comp {...props}/>
        }else{
            return <Redirect to = {'/signin'} />
        }
    }} />
}

export default PrivateRoute
