import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsOfferFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/WithSpinner';
import ShopOverview from './ShopOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsOfferFetching
});

const ShopOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ShopOverview);

export default ShopOverviewContainer;
