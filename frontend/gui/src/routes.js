import React from 'react'
import { Route } from 'react-router-dom'
import ArticleDetailview from './containers/ArticleDetailview';
import ArticleListview from './containers/ArticleListview';


const BaseRouter = () => (
    <div>

        <Route exact path='/' component={ArticleListview}/>
        <Route exact path='/:articleID' component={ArticleDetailview}/>

    </div>
)
export default BaseRouter