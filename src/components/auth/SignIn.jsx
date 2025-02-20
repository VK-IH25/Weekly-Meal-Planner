import { Button, Input } from '@mantine/core'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import {auth} from '../../firebase'

const SignIn = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <div>
            <form onSubmit={signin}>
                <Input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                <Input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                <Button type='submit' >Log In</Button>
            </form>

        </div>

    )
}

export default SignIn