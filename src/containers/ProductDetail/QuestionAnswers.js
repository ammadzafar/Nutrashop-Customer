import ReactTimeAgo from "react-time-ago";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    saveNewQuestion,
    storeQuestions,
} from "../../store/actions/questionActions";
import { Divider, message } from "antd";
import "./DescriptionAndReview.css";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";

const QuestionAnswers = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const { auth } = useSelector(({ auth }) => auth);
    const { isAuthenticated } = useSelector(({ auth }) => auth);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const { questions } = useSelector(({ questions }) => questions);

    const userId = auth.id;

    const productId = props.product.id;

    useEffect(() => {
        dispatch(storeQuestions(productId));
    }, []);
    const [value, setValue]= useState('')
    const onSubmission = (data) => {
        let ques = new FormData();
        ques.append("customerId", userId);
        ques.append("productId", productId);
        ques.append("question", data.question);
        setLoading(true);
        axios
            .post("/question", ques)
            .then((response) => {
                console.log(response);
                dispatch(saveNewQuestion(response.data));
                message.success("Question asked successfully.");
                setLoading(false);
                setValue('')
            })
            .catch((error) => {
                console.log(error);
                message.error("Error");
            });
    };


    // const questions = props.product.AnswerQuestions
    return (
        <>
            {isAuthenticated ? (
                <form onSubmit={handleSubmit(onSubmission)}>
                    <>
                        <div className="d-flex justify-content-between height">
                            <input
                                name="question"
                                type="text"
                                placeholder="Enter your question(s) here"
                                ref={register({ required: true })}
                                className="w-100 pl-2"
                                value={value}
                                onChange={(e)=>setValue(e.target.value)}
                            />
                            <button className="btn-success w-25 p-10" type="submit">
                                {loading && <i className="fas fa-spinner fa-pulse"></i>}
                                Ask Question
                            </button>
                        </div>
                        <div>{errors.question && <p className="error">This field is required</p>}</div>
                    </>
                </form>
            ) : (
                <p className="mb-0">
                    <Link to="#" onClick={() => setIsOpen(!isOpen)}>
                        Login
                    </Link>{" "}
                    or{" "}
                    <Link to="#" onClick={() => setIsSignUp(!isSignUp)}>
                        Register
                    </Link>{" "}
                    to ask allQuestions
                </p>
            )}
            <></>
            {questions.length !== 0 ? (
                <>
                    <h5 className="fs-16 lh-52">
                        Questions about this product ({questions.length})
                    </h5>
                    <p className="mb-0">
                        Other all questions answered by Pakvitamins ({questions.length})
                    </p>
                    <Divider className="mt-10" />
                    <Row>
                        <Col span={24}>
                            {questions.map((question) => (
                                <React.Fragment key={question.id.toString()}>
                                    <div>
                                        <div style={{ display: "flex" }}>
                                            <span className="q-bg">Q</span>
                                            <p style={{ width:'90%',wordBreak:'break-word'}} className="fs-16 ml-20 mb-0">{question.question}</p>
                                        </div>

                                        <p className="fs-14 grey mb-0">{question.customerName}</p>
                                        <p>
                                            <ReactTimeAgo
                                                date={new Date(question.createdAt)}
                                                locale="en-US"
                                            />
                                        </p>
                                        {question.user && question.answer !== null ? (
                                            <>
                                                <div style={{ display: "flex" }}>
                                                    <span className="c-bg">A</span>
                                                    <p className="fs-16 ml-20 mb-0">{question.answer}</p>
                                                </div>

                                                <p className="fs-16 mb-0">
                                                    Answered By:{" Pakvitamins"}
                                                    {/*{" " +*/}
                                                    {/*  question.user.firstName +*/}
                                                    {/*  " " +*/}
                                                    {/*  question.user.lastName}*/}
                                                </p>
                                                <p>
                                                    <ReactTimeAgo
                                                        date={new Date(question.answerCreatedAt)}
                                                        locale="en-US"
                                                    />
                                                </p>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </Col>
                    </Row>
                </>
            ) : (
                <p>No Question And Answers</p>
            )}
            <Login closeLogin={() => setIsOpen(false)} show={isOpen} />
            <SignUp closeSignUp={() => setIsSignUp(false)} show={isSignUp} />
        </>
    );
};

export default QuestionAnswers;
