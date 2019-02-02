import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { openModal, closeModal } = value;
            const { img, title, price } = value.modalProduct;
            if (!openModal) {
              return null;
            } else {
              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                        <h5>item added to the cart</h5>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

const ModalContainer = styled.div``;
