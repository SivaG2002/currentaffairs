
import React, { useState, useEffect } from "react";

const MCQ = () => {
  const [mcqData, setMcqData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("2025-06-01");

  useEffect(() => {
    fetch("/mcq.json")
      .then((res) => res.json())
      .then((data) => {
        setMcqData(data);
      })
      .catch(error => console.error("Error fetching MCQ data:", error));
  }, []);

  const filteredMcqs = mcqData.filter((mcq) => mcq.date === selectedDate);

  return (
    <div className="mcq-container">
      <h1 className="page-title">Multiple Choice Questions</h1>
      <div className="date-filter">
        <label htmlFor="mcq-date">Select Date: </label>
        <input
          type="date"
          id="mcq-date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="mcq-list">
        {filteredMcqs.length > 0 ? (
          filteredMcqs.map((mcq) => (
            <div className="mcq-card" key={mcq.qno}>
              <p className="mcq-question">
                {mcq.qno}. {mcq.question}
              </p>
              <p className="mcq-answer">Answer: {mcq.answer}</p>
            </div>
          ))
        ) : (
          <p>No MCQs found for the selected date.</p>
        )}
      </div>
    </div>
  );
};

export default MCQ;
