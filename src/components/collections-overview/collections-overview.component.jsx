import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import '../collections-overview/collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    {collections.map(({id, ...otherCOlectionProps}) => (
      <CollectionPreview key={id} {...otherCOlectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)