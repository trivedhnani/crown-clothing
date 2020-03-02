import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectCollectionIsLoaded
} from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        ></Route>
      </div>
    );
    // Props of render are important because we have to make sure that we are passing match,history and loaction dow to componets
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectCollectionIsLoaded
});
const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
