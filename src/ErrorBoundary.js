import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getStateDerivedfromError(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError === true) {
      return <h1>Oops! We ran into some error.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
