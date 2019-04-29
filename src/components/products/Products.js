import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Product from './Product';
import Pagination from './Pagination';
import Spinner from '../layout/Spinner';

class Products extends Component {
  state = {
    burgers: [],
    pageOfItems: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ burgers: nextProps.burgers });
  }

  onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

  render() {
    const { burgers } = this.state;

    if (burgers.length > 0) {
      return (
        <div className="products-wrapper">
          <div className="container">
            <div className="row">
              {this.state.pageOfItems.map(burger => (
                <Product burger={burger} key={burger.id} />
              ))}
              <Pagination items={burgers} onChangePage={this.onChangePage} />
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Products.propTypes = {
  firestore: PropTypes.object.isRequired,
  burgers: PropTypes.array
};

const mapStateToProps = state => ({
  burgers: state.firestore.ordered.burgers
});

export default compose(
  firestoreConnect(props => [
    {
      collection: 'burgers',
      where: props.sort
    }
  ]),
  connect(mapStateToProps)
)(Products);
