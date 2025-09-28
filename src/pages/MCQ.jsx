
import React, { useState, useEffect } from "react";
import { storage } from "../firebase"; // Adjust the path if needed
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const MCQ = () => {
  const [mcqData, setMcqData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("2024-07-27");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const storageRef = ref(storage, `mcq/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMcqData(data);
        });
    }
  };

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
        <input type="file" onChange={handleFileUpload} />
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
          <p>No MCQs found for the selected date. Please upload a mcq.json file</p>
        )}
      </div>
    </div>
  );
};

export default MCQ;
