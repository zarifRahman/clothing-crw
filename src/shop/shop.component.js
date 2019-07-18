import React from 'react';
import CollectionPreview from '../components/collectionPreview/collectionPreview.component'
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection : SHOP_DATA
    }
  }

  render() {
    return (
      <div className="shop-page">
        {
          this.state.collection.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;