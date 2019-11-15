import React from "react";
import { connect } from "react-redux";
import { createAd } from "../../actions/ads";
import AdForm from "./AdForm";

class AdFormContainer extends React.Component {
  state = {
    title: "",
    url: "",
    description: "",
    price: "",
    email: "",
    phoneNumber: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createAd({
      ...this.state,
      userId: this.props.user.userId
    });
    this.setState({
      title: "",
      url: "",
      description: "",
      price: "",
      email: "",
      phoneNumber: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <AdForm
        user={this.props.user}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {
  createAd
};

export default connect(mapStateToProps, mapDispatchToProps)(AdFormContainer);
