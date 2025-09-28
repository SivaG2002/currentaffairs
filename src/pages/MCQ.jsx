
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MCQ.css";

const MCQ = () => {
  const [mcqData, setMcqData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date("2025-06-01"));
  const [datesWithMcqs, setDatesWithMcqs] = useState([]);

  useEffect(() => {
    fetch("/mcq.json")
      .then((res) => res.json())
      .then((data) => {
        setMcqData(data);
        const dates = data.map(mcq => mcq.date);
        setDatesWithMcqs(dates);
      })
      .catch(error => console.error("Error fetching MCQ data:", error));
  }, []);

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      if (datesWithMcqs.includes(dateString)) {
        return 'highlight';
      }
    }
    return null;
  };

  const formattedDate = selectedDate.toISOString().split('T')[0];
  const filteredMcqs = mcqData.filter((mcq) => mcq.date === formattedDate);

  return (
    <div className="mcq-container">
      <h1 className="page-title">Multiple Choice Questions</h1>
      <div className="mcq-content">
        <div className="calendar-container">
          <Calendar
            onChange={onDateChange}
            value={selectedDate}
            tileClassName={tileClassName}
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
    </div>
  );
};

export default MCQ;
