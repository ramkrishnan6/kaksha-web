import React from "react";
import { Button, Modal } from "react-bootstrap";

function ClassEndModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Class has ended
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>The class was ended by the teacher</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ClassEndModal;
