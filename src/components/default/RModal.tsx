import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RModal = ({args ,children})=> {
  
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>Criar uma rifa legal</Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}><h2>{args[0].title}</h2></ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RModal