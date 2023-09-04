import React, {useState, useEffect} from "react";
import "./AddQuestionModal.css";

const AddQuestionModel = ({onClose, onAddQuestion}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [complexity, setComplexity] = useState('');
    const [categories, setCategories] = useState([]);

    const handleSubmit = () => {
        // Validate input fields (ensure they are not empty)
        if (title && description && complexity && categories) {
            const categoryArray = categories.split(",").map((category) => category.trim());
          
            const newQuestion = {
                Title: title,
                // Description: description,
                Complexity: complexity,
                Categories: categoryArray, // needs to be an array
            };
            // Pass the new question data to the parent component
            onAddQuestion(newQuestion);
            // Close the modal
            onClose();
        } else {
          alert('Please fill in all required fields.');
        }
    };

    const renderModal = () => {

        return (
            <div className="modal">
              <div className="modal-content">
                <h2>Add a Question</h2>
                <input
                  type="text"
                  placeholder="Question Title"
                  value={title}
                  onChange={(input) => setTitle(input.target.value)}
                />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(input) => setDescription(input.target.value)}
                />
                <input
                  type="text"
                  placeholder="Difficulty Level"
                  value={complexity}
                  onChange={(input) => setComplexity(input.target.value)}
                />
                <input
                  type="text"
                  placeholder="Categories"
                  value={categories}
                  onChange={(input) => setCategories(input.target.value)}
                />
                <div className="modal-buttons">
                  <button onClick={handleSubmit}>Add Question</button>
                  <button onClick={onClose}>Cancel</button>
                </div>
              </div>
            </div>
        );
    }

    return <div>
        {renderModal()}
    </div>
}

export default AddQuestionModel;