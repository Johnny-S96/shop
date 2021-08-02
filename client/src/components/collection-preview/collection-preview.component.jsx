import React from 'react';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles.js';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
  <CollectionPreviewContainer>
    <TitleContainer>
      <a href={`/shop/shop/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </a>
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
      ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;