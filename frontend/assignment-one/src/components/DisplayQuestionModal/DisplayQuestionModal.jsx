import React from "react";
import "./DisplayQuestionModal.css";

const DisplayQuestionModal = ({onClose, selectedQuestionId, dummyData}) => {
    
    const descriptionHTML = { __html: dummyData[selectedQuestionId - 1].Description};

    const renderModal = () => {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h2>Question Description</h2>
                    <div dangerouslySetInnerHTML={descriptionHTML}></div>
                    <div className="question-description modal-buttons">
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }

    return <div>
        {renderModal()}
    </div>
}

export default DisplayQuestionModal;