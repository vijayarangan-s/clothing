import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { fetchCollectionsStart } from "../../../redux/actions/shop/shop.actions";
import CollectionOverviewContainer from "../../Collection-overview/Collection-overview.container";
import { CollectionPageContainer } from "../Collection/Collection.container";



const ShopPage = ({fetchCollectionsStart, match}) => {

  useEffect(() => {
    fetchCollectionsStart()
  },[fetchCollectionsStart])

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component = {CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
