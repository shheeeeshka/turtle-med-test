import "./TestComponent.css";
import Button from "react-bootstrap/esm/Button";

import { useContext, useEffect, useState } from "react";
import { Context } from "../..";


const Test = ({ withTimer = true, modifiable, interval }) => {
    const { tests } = useContext(Context);

    const [check, setCheck] = useState(null);

    const [timeLeft, setTimeLeft] = useState(0);
    const [defaultTime, setDefaultTime] = useState(3600);
    const [isPaused, setIsPaused] = useState(true);
    const [isTimeRunning, setIsTimeRunning] = useState(false);

    useEffect(() => {
        if (tests?.tests?.length) {
            setCheck(tests?.tests?.map(() => Array(4).fill("")));
        }

        setDefaultTime(1800);
    }, [tests?.tests]);

    useEffect(() => {
        if (isTimeRunning && !isPaused) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            if (timeLeft === 0) {
                setIsTimeRunning(false);
            }

            return () => clearTimeout(timer);
        }
    }, [timeLeft, isTimeRunning, isPaused]);

    const startTest = () => {
        setIsPaused(false);
        setIsTimeRunning(true);
        if (!timeLeft) {
            setTimeLeft(defaultTime);
        }
    }

    const handleAnswerClick = (qi, ai) => {
        if (tests?.tests[qi].isCorrect !== "") {
            return;
        }
        const result = tests?.tests[qi].answerOptions[ai] === tests?.tests[qi].corAnswer;
        let newCheck = [...check];
        newCheck[qi][ai] = result ? "correct" : "incorrect";
        setCheck(newCheck);

        tests.tests[qi].isCorrect = result;
    }

    return (
        <>
            {
                interval ?
                    <h1>Блок {interval}</h1> :
                    null
            }
            <div className="test-info">
                <div>
                    <h3>Количество вопросов</h3>
                    <span className="test-span">{tests?.tests?.length}</span>
                </div>
                <div>
                    <h3>Лучший результат зачета</h3>
                    <span className="test-span">{0}%</span>
                </div>
                <div>
                    <h3>В избранном <span className="test-span">{0}</span> вопросов</h3>
                </div>
            </div>
            {
                withTimer ?
                    <div className="test-timer">
                        <div className="timer-left">
                            <h3>Осталось:</h3>
                            <h2>
                                {
                                    Math.floor(timeLeft / 60)
                                } Минут
                            </h2>
                            <h2>
                                {
                                    timeLeft % 60
                                } Секунд
                            </h2>
                        </div>

                        <div className="test-options">
                            {
                                modifiable ?
                                    <input type="text" placeholder="Минуты" onChange={e => {
                                        if (!isNaN(e.target.value)) {
                                            setTimeLeft(e.target.value * 60)
                                        }
                                    }} /> :
                                    null
                            }

                            <Button variant="success" onClick={() => {
                                startTest();
                                if (modifiable) {
                                    setIsPaused(!isPaused);
                                }
                            }}>
                                {
                                    modifiable ?
                                        isTimeRunning ? (!isPaused ? "Пауза" : "Продолжить") : "Начать тестирование" :
                                        isTimeRunning ? "Идет экзамен" : "Начать тестирование"
                                }
                            </Button>
                        </div>
                    </div> :
                    null
            }

            <div className="test-wrapper">
                {
                    tests?.tests?.map(({ id, question, answerOptions }, questionIndex) => (
                        <div key={id}>
                            <h3>{questionIndex + 1}. {question}</h3>
                            <ul>
                                {
                                    answerOptions.map((ans, answerIndex) => (
                                        <li key={answerIndex}>
                                            <button
                                                onClick={() => handleAnswerClick(questionIndex, answerIndex)}
                                                className={`ans-btn ${check && check[questionIndex]?.filter(str => str.length > 0).length === 1 ? check[questionIndex][answerIndex] : ""}`}
                                            >
                                                {ans}
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Test;