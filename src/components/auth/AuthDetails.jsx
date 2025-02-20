import React, {useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { Text, Avatar, MenuTarget, MenuDropdown, Menu, MenuLabel, MenuItem, Button } from '@mantine/core'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect( () => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                console.log(user)
            } else {
                setAuthUser(null)
            }
        });

        return () => {
            listen()
        }



    }, [])

    const userSignOut = () => {
        signOut(auth)
    }

  return (
    <div>{authUser? <div><Menu closeOnClickOutside={true} closeOnItemClick={true}><MenuTarget><Avatar bg="white" color="green" radius="xl" /></MenuTarget> <MenuDropdown><MenuItem>Profile</MenuItem><Button onClick={userSignOut}>Sign Out</Button></MenuDropdown></Menu></div>  : <div><Menu closeOnClickOutside={true} closeOnItemClick={true}><MenuTarget><Avatar color="white" radius="xl" /></MenuTarget> <MenuDropdown><MenuItem><Link to="/signin">Log In</Link></MenuItem><MenuItem><Link to="/signup">Register</Link></MenuItem></MenuDropdown></Menu></div>}</div>
  )
}

export default AuthDetails