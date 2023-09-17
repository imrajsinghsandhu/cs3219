import React, {useEffect, useState} from "react";
import "./Questions.css";
import AddQuestionModal from "../AddQuestionModal/AddQuestionModal";
import DisplayQuestionModal from "../DisplayQuestionModal/DisplayQuestionModal";
import { useAuth } from "../../utils/AuthContext";

const Questions = (props) => {

    const { logout } = useAuth();

    // initialise storedData with empty Array first
    const [questions, setQuestions] = useState([]);
    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [selectedQuestion, setSelectedQuestion] = useState(null); 
    const [visibleQuestions, setVisibleQuestions] = useState(5);
    const [loadMore, setLoadMore] = useState(5); // Number of questions to load when clicking "View More"

    // upon mounting of Questions component, populate localStorage with the dummy data 
    useEffect(() => {
        let storedData = localStorage.getItem("questions");
    
        if (storedData !== null && storedData !== undefined) {
            try {
                setQuestions(JSON.parse(storedData));
            } catch (error) {
                console.error("Error parsing stored data:", error);
            }
        } else {
            setQuestions(props.data);
            localStorage.setItem("questions", JSON.stringify(props.data));
        }
    }, [props.data]);

    // Function to load more questions when the "View More" button is clicked
    const loadMoreQuestions = () => {
        console.log("button pressed to load more questions");
        setVisibleQuestions((prevVisibleQuestions) => prevVisibleQuestions + loadMore);
    };

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    const openQuestionModal = (questionId) => {
        setSelectedQuestion(questionId);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const closeQuestionModal = () => {
        setSelectedQuestion(null);
    };

    // Function to add a new question
        // ensure no 2 questions have the same title
    const handleAddQuestion = (newQuestion) => {
        // Add the new question to your questions state
        // setQuestions([...questions, newQuestion]);// Update localStorage with the new data
        const numQuestions = questions.length;
        const newQuestionId = numQuestions + 1;
        const newQuestionWithId = {
            id: newQuestionId,
            ...newQuestion
        }

        let isNoError = true;
        // check if the new question is already in the question bank
            // by checking for same title in the database
        questions.forEach((question) => {
            if (question.Title === newQuestion.Title) {
                console.error("Question already exists in database!");
                isNoError = false;
            } 
        })

        if (isNoError) {
            localStorage.setItem("questions", JSON.stringify([...questions, newQuestionWithId]));
            const updatedQuestions = localStorage.getItem("questions");
            setQuestions(JSON.parse(updatedQuestions));
        } else {
            alert("Dont try be funny, this question is already in the database...")
        }
    };

    const handleDeleteQuestion = (id) => {

        try {
            // Get the current questions array from localStorage
            const currentQuestions = JSON.parse(localStorage.getItem("questions"));
            
            // Filter out the question with the specified id
            const updatedQuestions = currentQuestions.filter((question) => question.id !== id);
            
            // Update the questions in localStorage
            localStorage.setItem("questions", JSON.stringify(updatedQuestions));
            
            // Update the state with the updated questions
            setQuestions(updatedQuestions);
            
            alert(`Deletion successful! You have deleted question number ${id} :D`);
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleSignOut = async () => {
        await logout();
    };

    const renderAddQuestionButton = () => {
        
        return (
            // will have one button on the left for adding a question
            <div className="button-div">
                <button className="button-add-question" onClick={() => openModal()}>Add a Question!</button>
                {/* conditionally rendering modal */}
                {isModalOpen && (
                    <AddQuestionModal 
                        onClose={closeModal}
                        onAddQuestion={handleAddQuestion}
                    />
                )}
            </div>
        )
    }

    const renderSignOutButton = () => {

        return <div className="sign-out-button">
            <button className="sign-in-out-button" onClick={handleSignOut}>Log Out</button>
        </div>
    }

    const renderQuestions = () => {
        const currentVisibleQuestions = questions.slice(0, visibleQuestions);
        const moreQuestionsToLoad = questions.slice(visibleQuestions, visibleQuestions + loadMore);
    
        return (
            <div className="questions">
               <ol>
                    {currentVisibleQuestions.map((item, index) => 
                            /**
                             * question box will have 3 components inside
                             * 1. the id numbering
                             * 2. question description, with ellipsis overflow
                             * 3. delete button
                            */
                        <li className="question-box" key={item.id}>                        
                            <div>
                                {/* Place the id number on the left */}
                                <h3>{index + 1}</h3>
                            </div>
                            <h3 className="question-title" onClick={()=> openQuestionModal(item.id)}>{item.Title}</h3>
                            {/* description shown upon clicking title */}
                            {selectedQuestion && (
                                    <DisplayQuestionModal 
                                        onClose={closeQuestionModal}
                                        selectedQuestionId={selectedQuestion}
                                        dummyData={questions}
                                    /> 
                                )
                            }
                            <div className="question-categories">
                                {item.Categories.map((category, index) => (
                                    <div className="question-category" key={index}>
                                        {category}
                                    </div>
                                ))}
                            </div>
                            <h3 className="item-complexity" >{item.Complexity}</h3>
                            <button className="button-delete" onClick={() => handleDeleteQuestion(item.id)}>Delete</button>
                        </li>
                    )}
                </ol>
                {/* Render the "View More" button here! */}
                {
                    moreQuestionsToLoad.length > 0 && 
                    (
                        <button type="button" className="view-more-button" onClick={loadMoreQuestions}>
                            View More
                        </button>
                    )
                }
            </div>
        )
    }

    return (
        <div>
            {renderAddQuestionButton()}
            {renderSignOutButton()}
            {renderQuestions()}
        </div>
    )
}

export default Questions;