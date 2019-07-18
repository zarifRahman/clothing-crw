import React from 'react';
import './collectionPreview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const Collection = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
          .filter((item, idx) => idx < 4)
          .map(({id,  ...otherItemProps}) => (
            <CollectionItem key={id} { ...otherItemProps} />
          ))
        }
      </div>
    </div>
  )
}
export default Collection;