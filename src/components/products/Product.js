import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/cartActions';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
    backgroundColor: amber[700]
  }
});

class Product extends Component {
  state = {
    open: false
  };
  addClick = burger => {
    this.setState({ open: true });
    const { addItem } = this.props;
    addItem(burger);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { burger } = this.props;
    const { classes } = this.props;
 
    return (
      <div className="col-sm-6 col-md-4">
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src={burger.image}
            alt={burger.name} />
          <div className="card-body">
            <h5 className="card-title">{burger.name}</h5>
            <p className="price">{burger.price} PhP</p>
            <ul className="colors">
              <li>testfield:</li>
              {burger.testfields.map(testfield => (
                <li className={`color ${testfield}`} key={uuid()}>
                  <p className="sr-only">{testfield}</p>
                </li>
              ))}
            </ul>
            <ul className="sizes">
              {burger.sizes.map(size => (
                <li key={uuid()}>{size}</li>
              ))}
            </ul>
            <div className="text-center">
              <button
                className="btn-custom"
                onClick={this.addClick.bind(this, burger)} >
                Order
              </button>
            </div>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Added to bag!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose} >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addItem }
)(withStyles(styles)(Product));
