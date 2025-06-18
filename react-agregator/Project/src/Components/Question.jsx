import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

export const Question = () => {
    const [ question, setQuestion ] = useState(null);
    const { id = "1" } = useParams()


      useEffect(() => {
    fetch(`/api/get_question.php?id=${id}`)
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                console.error(data.error);
            } else {
                setQuestion(data);
            }
        });
}, [id]);

const handleAnswer = (answerType) => {
    const nextId = answerType === 'yes' 
        ? question.yes_next 
        : question.no_next;

    if (question.profession_id) {
        fetch(`/api/get_profession.php?id=${question.profession_id}`)
            .then(resp => resp.json())
            .then(professionData => {
                setProfession(professionData);
            });
    } else if (nextId) {
        navigate(`/testpage/${nextId}`);
    }
};

return question && (
    <div>
        <div className="question">{question.text}</div>
        <button onClick={() => handleAnswer('yes')}>Да</button>
        <button onClick={() => handleAnswer('no')}>Нет</button>
        {profession && (
            <div className="result">
                <h2>Рекомендуемая профессия: {profession.name}</h2>
                <p>{profession.description}</p>
                <a href={profession.learn_more}>Узнать больше</a>
            </div>
        )}
    </div>
);
  

}

export default Question