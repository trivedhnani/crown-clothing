import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsIsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { compose } from "redux";
const mapStateToProps = (state) =>
  createStructuredSelector({
    isLoading: (state) => !selectCollectionsIsLoaded(state),
  });

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
// const CollectionOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionsOverview)
// );
export default CollectionOverviewContainer;
