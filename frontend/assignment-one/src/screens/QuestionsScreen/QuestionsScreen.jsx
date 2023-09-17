import React from "react";
import "./QuestionsScreen.css";
import Questions from "../../components/Questions/Questions";

const QuestionsScreen = (props) => {

    const renderQuestions = () => {
        return (
            <Questions {...props}/>
        );
    }

    return <div>
        {renderQuestions()}
    </div>
}

export default QuestionsScreen;