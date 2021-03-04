import React from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'
import { LogOutAction } from '../reducers/user/userAction'

export const Dashboard = () => {

    const dispatch = useDispatch()
    const LogOutApp = () => {
        dispatch(LogOutAction())
        auth.signOut()
    }

    return (
        <div>
            <h1 onClick={LogOutApp}>working</h1>
        </div>
    )
}
