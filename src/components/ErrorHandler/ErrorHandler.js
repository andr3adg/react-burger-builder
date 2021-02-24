import React, { Component, Fragment } from "react";
import Modal from "../UI/Modal/Modal";

const errorHandler = (ChildComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(null, (error) => {
        this.setState({ error: error });
      });
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    cleanStateError = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Fragment>
          <Modal show={this.state.error} modalClosed={this.cleanStateError}>
            {this.state.error && this.state.error.message}
          </Modal>
          <ChildComponent {...this.props} />
        </Fragment>
      );
    }
  };
};
export default errorHandler;
