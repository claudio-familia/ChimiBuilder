import React, { Component } from "react"
import Aux from "../../../containers/hoc/Auxr";
import Modal from "../Modal/Modal";
import Message from "./Message/Message";

const requestHandler = ( WrappedComponent, baseService ) => {
    return class extends Component {
        state = {
            error: null,
            success: null
        }
        constructor() {
            super()
            this.reqInterceptors = baseService.interceptors.request.use(req => {
                this.confirmModal();
                return req;
            });

            this.resInterceptors = baseService.interceptors.response.use(res => {
                if(res.config.url.indexOf('ingredients') === -1){
                    this.setState({
                        success: {
                            title: 'Exitoso', 
                            message: 'Operación realizada correctamente'
                        }
                    });
                }
                return res;
            }, error => {
                this.setState({
                    error: {
                        ...error, 
                        title: 'Error', 
                        message: 'Error al realizar la operación'
                    }
                });
            })
        }

        componentWillUnmount() {
            baseService.interceptors.request.eject(this.this.reqInterceptors)            
            baseService.interceptors.response.eject(this.this.resInterceptors)            
        }

        confirmModal = () => {
            this.setState({
                error: null,
                success: null
            })
        }

        render(){
            return (
                <Aux>
                    <Modal 
                        show={this.state.error || this.state.success}
                        clicked={this.confirmModal}>
                        {this.state.error ? <Message type="Error" clicked={this.confirmModal} title={this.state.error.title} message={this.state.error.message} /> 
                                          : null}
                        {this.state.success ? <Message type="Success" clicked={this.confirmModal} title={this.state.success.title} message={this.state.success.message} />
                                            : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default requestHandler;