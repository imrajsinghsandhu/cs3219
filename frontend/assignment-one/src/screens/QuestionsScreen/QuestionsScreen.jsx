import React from "react";
import "./QuestionsScreen.css";
import Questions from "../../components/Questions/Questions";

const QuestionsScreen = (props) => {

    const renderQuestions = (props) => {
        return (
            <Questions props/>
        );
    }

    return <div>
        {renderQuestions(props)}
    </div>
}

export default QuestionsScreen;