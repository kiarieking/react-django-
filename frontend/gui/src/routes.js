import React from 'react'
import { Route } from 'react-router-dom'
import ArticleListview from './containers/ArticleListview';


const BaseRouter = () => (
    <div>

        <Route exact path='/' component={ArticleListview}/>
        <Route exact path='/:articleID' component={ArticleListview}/>

    </div>
)
export default BaseRouter