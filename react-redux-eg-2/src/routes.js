import React from "react"
import {Route} from "react-router-dom"

import Posts from "./components/Posts"


const BaseRouter = () => (
        <div>
            <Route exact path="/" component={Posts} />
        </div>
    )

export default BaseRouter
