import React, { Component } from 'react';
import { getAds } from '../../actions/ads';
import AdList from './AdList';
import { connect } from 'react-redux';

class AdListContainer extends Component {
  componentDidMount() {
    this.props.getAds();
  }

  render() {
    return <AdList ads={this.props.ads} user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  return {
    ads: state.ads,
    user: state.user
  };
}

const mapDispatchToProps = { getAds };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdListContainer);
