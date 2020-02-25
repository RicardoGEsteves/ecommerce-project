import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils.js';

import { updateOffers } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/WithSpinner';

import ShopOverview from '../../components/shop-overview/ShopOverview';
import Offers from '../offers/Offers';

const ShopOverviewWithSpinner = WithSpinner(ShopOverview);
const OffersWithSpinner = WithSpinner(Offers);

class Shop extends React.Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateOffers } = this.props;
    const collectionRef = firestore.collection('offers');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const offersMap = convertCollectionsSnapshotToMap(snapshot);
      updateOffers(offersMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shop'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <ShopOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:offersId`}
          render={props => <OffersWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateOffers: offersMap => dispatch(updateOffers(offersMap))
});

export default connect(null, mapDispatchToProps)(Shop);
