import React from 'react'
import { Header } from '../components/Header'
import { MainComponent } from '../components/MainComponent'

export const Main = () => {
    return (
        <div className="main_container">
            <Header />
            <MainComponent />
        </div>
    )
}
