import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

class CustomerForm extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24} style={{ marginLeft: 8 }}>
          <Grid item xs>
            <label>Customer Type</label>
            <select
              placeholder="Select Customer"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
            />
          </Grid>
          <Grid item xs>
            <label>Customer Name</label>
            <input
              type="text"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
            />
          </Grid>
          <Grid item xs>
            <label>Domain Name</label>
            <input
              type="text"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24} style={{ marginLeft: 8 }}>
          <Grid item xs>
            <label>Address Line 1</label>
            <input
              type="text"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
            />
          </Grid>
          <Grid item xs>
            <label>Address Line 2</label>
            <input
              type="text"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
            />
          </Grid>
          <Grid item xs>
            <label>City </label>
            <input
              type="text"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24} style={{ marginLeft: 8 }}>
          <Grid item xs>
            <label>State </label>
            <select
              placeholder="Select Customer"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
            />
          </Grid>
          <Grid item xs>
            <label>Country </label>
            <input
              type="text"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
            />
          </Grid>
          <Grid item xs>
            <label>Mobile </label>
            <input
              type="text"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CustomerForm;
