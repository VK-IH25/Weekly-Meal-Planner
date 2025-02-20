import { Button, Input } from '@mantine/core'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import {auth} from '../../firebase'

const SignUp = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <div>
            <form onSubmit={signup}>
                <Input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                <Input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                <Button type='submit' >Sign Up</Button>
            </form>

        </div>

    )
}

export default SignUp