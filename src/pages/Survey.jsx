import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  useEffect(() => {
    fetch('http://localhost:8000/survey')
        .then((response) => response.json()
            .then(({ surveyData }) => console.log(surveyData))
            .catch((error) => console.log(error))
        );
  }, []);

  return (
      <div>
        <h1>Questionnaire 🧮</h1>
        <h2>Question numéro : { questionNumber }</h2>
      </div>
  );
}

export default Survey;