import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchOffersStart } from '../../redux/shop/shop.actions';

import ShopOverviewContainer from '../../components/shop-overview/ShopOverviewContainer';
import OffersContainer from '../offers/OffersContainer';

class Shop extends React.Component {
  componentDidMount() {
    const { fetchOffersStart } = this.props;

    fetchOffersStart();
  }
  render() {
    const { match } = this.props;

    return (
      <div className='shop'>
        <Route exact path={`${match.path}`} component={ShopOverviewContainer} />
        <Route path={`${match.path}/:offersId`} component={OffersContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOffersStart: () => dispatch(fetchOffersStart())
});

export default connect(null, mapDispatchToProps)(Shop);
