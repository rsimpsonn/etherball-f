import React from 'react';
import { Modal } from 'react-bootstrap';

import '../themes.css';

const modal = props => {
    return (
        <Modal show={props.show}>
            <Modal.Title > Not Authenticated </Modal.Title>
            <Modal.Body>
                <div> i;mfewlkjonf;iwalemcoipeqnfpwqnv;wqemcoqiepoiqnfedsa </div>
            </Modal.Body>
        </Modal>
    );
};

export default modal;