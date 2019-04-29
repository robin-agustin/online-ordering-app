import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPrices } from '../../actions/sortingActions';

class Menu extends Component {
  onChange = e => {
    if (e.target.value !== 'init') {
      this.props.sortPrices(e.target.value);
    }
  };
  render() {
    return (
      <div className="col-md-4 ml-auto">
        <div className="form-group">
          <label htmlFor="sort"></label>
          <select
            className="form-control"
            id="sort"
            onChange={this.onChange.bind(this)}
            >
            <option value="init">- Menu -</option>
            <option value="burgers">Burgers</option>
            <option value="drinks">Drinks</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sortBy: state.firestore.ordered.products
  };
};

export default connect(
  mapStateToProps,
  { sortPrices }
)(Menu);
