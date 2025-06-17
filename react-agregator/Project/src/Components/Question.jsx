import { useParams } from "react-router";
import { useState } from "react";

export const Question = () => {
    const [ question, setQuestion ] = useState(null);
    const { id = "1" } = useParams()


      useEffect(() => {
    fetch("/question/" + id)
      .then((resp) => resp.json())
      .then((data) => setQuestion(data));
  }, []);

    return question && (
    <div>
      <div className="question">{data.text}</div>
      { data.yes && <>
      <Link to="/testpage/{data.yes}">Да</Link>
      <Link to="/testpage/{data.no}">Нет</Link>
      </>
      }
    </div>
  );

}