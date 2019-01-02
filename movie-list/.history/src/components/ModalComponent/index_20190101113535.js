import React from 'react';
import Modal from 'react-modal';

import {
  modalContentWrapper, closeModalBtn, modalTopWrapper,
  modalInstruction, modalPhoneInfo, modalH2, modalWrapper
} from './modal.styles';
import { actionButton } from '../../styles/generic.styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '6px',
  }
};

class ModalComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className={modalWrapper}>
        <button className={actionButton} onClick={this.openModal}>Learn More</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* TODO: Add X svg */}
          <div className={modalTopWrapper}>
            <div className={closeModalBtn} onClick={this.closeModal}>X</div>
          </div>
          <div className={modalContentWrapper}>
            <h2 className={modalH2}>Interested in this item?</h2>
            <div className={modalInstruction}>For more product information, or to schedule a time to see this item, please give Thor a call or send an email.</div>
            {/* TODO: Update Contact Info */}
            <div className={modalPhoneInfo}>555-555-5555</div>
            <a href="mailto: email@domain.com">
              <div className={actionButton}>Email</div>
            </a>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
