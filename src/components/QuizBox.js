import React,{useState} from 'react';


const QuizBox = ({ question, options ,selected}) => {
    const [answer, setAnswer] = useState(options);
    console.log("IN quiz box");
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {
                answer.map((text, index) => {
                    return(
                <button key={index} className="answerBtn" onClick={() => {
                            setAnswer([text]);
                            selected(text);
                }}>
                    {text}
                </button>
                )})
            }
        </div>
    );
}

export default QuizBox;
