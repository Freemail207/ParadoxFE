import React from "react"
import Loader from '@components/Header'

function App() {
    return (<div>
        <h2>Welcome to React App</h2>
        <Loader/>
        <h3>Date : {new Date().toDateString()}</h3>
    </div>)
}

export default App
