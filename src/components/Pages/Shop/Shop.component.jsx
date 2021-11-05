import React , {Component} from 'react'
import { Route } from 'react-router'
import CollectionOverview from '../../Collection-overview/Collection-overview'
import CollectionPage from '../Collection/Collection.component'

const ShopPage = ({match}) => {
        return(
            <div className="shop-page">
              <Route exact path={`${match.path}`} component={CollectionOverview}/>
              <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
}

export default ShopPage