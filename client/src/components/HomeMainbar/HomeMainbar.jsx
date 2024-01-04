import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";
import { useSelector } from "react-redux";
// import questionsReducer from "../../reducers/questions";

const HomeMainbar = () => {

  const user = 1;
    const navigate = useNavigate()
    // const redirect = () => {
    //     alert ("login or signup to ask a question" ); navigate('/Auth')
    // }

    const questionsList = useSelector(state => (state.questionsReducer))
    // console.log(questionsList)

    // var questionsList = [
    //   {
    //     _id: 1,
    //     upVotes: 3,
    //     downVotes: 3,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionsBody: "It meant to be",
    //     questionTags: ["java", "node.js", "mongoose"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //       answerBody: 'Answer',
    //       userAnswered: 'kumar',
    //       answeredOn: 'Jan 2',
    //       userId: 2,
    //     }]
    //   },
    //   {
    //     _id: 2,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionsBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //       answerBody: 'Answer',
    //       userAnswered: 'kumar',
    //       answeredOn: 'Jan 2',
    //       userId: 2,
    //     }]
    //   },
    //   {
    //     _id: 3,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionsBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //       answerBody: 'Answer',
    //       userAnswered: 'kumar',
    //       answeredOn: 'Jan 2',
    //       userId: 2,
    //     }]
    //   },
    // ];

    

  const location = useLocation();

  const checkAuth = () => {
    if(user === null){
      alert ("login or signup to ask a question" ) 
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button to='/AskQuestion' onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;