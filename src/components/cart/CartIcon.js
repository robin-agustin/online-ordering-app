import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCart, updatePrice } from '../../actions/cartActions';
import PropTypes from 'prop-types';

class CartIcon extends Component {
  showCart = () => {
    const { showCart } = this.props;
    showCart();
  };

  render() {
    const { cartItems } = this.props.cart;
    return (
      <div className="cart-icon ml-auto">
        <button type="button" onClick={this.showCart}>
          <i className="fas fa-shopping-bag" />
          <span className="badge badge-warning">
            {cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
          </span>
          <span className="sr-only">Orders</span>
        </button>
      </div>
    );
  }
}

CartIcon.propTypes = {
  showCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { showCart, updatePrice }
)(CartIcon);
