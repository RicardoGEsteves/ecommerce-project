import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsOffersLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import Offers from './Offers';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsOffersLoaded(state)
});

const OffersContainer = compose(connect(mapStateToProps), WithSpinner)(Offers);

export default OffersContainer;
