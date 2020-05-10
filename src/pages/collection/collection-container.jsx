import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsIsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";
import { compose } from "redux";
const mapStateToProps = (state) =>
  createStructuredSelector({
    isLoading: (state) => !selectCollectionsIsLoaded(state),
  });
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
export default CollectionPageContainer;
