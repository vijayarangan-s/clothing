import React from "react";
import { connect } from "react-redux";
import { selectCollection} from "../../../utils/Selectors/shop.selectors";
import CollectionItem from "../../Collection-Item/Collection-Item.component";

import "./Collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log({collection})
  const { title , items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title || ""}</h2>
      <div className="items">
        {items?.map((item) => (
          <CollectionItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
