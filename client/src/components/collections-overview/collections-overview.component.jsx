import React from 'react';
import './collections-overview.styles.scss';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
const CollectionsOverview=({collections})=>(
    <div className="collections-overview">
        {
        collections.map(({id, ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps} />
    ))
    }
    </div>
)
const mapStateToProps=createStructuredSelector(
    {
        collections:selectCollectionForPreview
    }
)
export default connect(mapStateToProps)(CollectionsOverview);