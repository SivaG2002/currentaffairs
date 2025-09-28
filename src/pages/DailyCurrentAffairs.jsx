
import React from 'react';

const dailyNews = [
  {
    title: "India's Economy Grows by 8.4% in Q3",
    news: "The Indian economy grew by 8.4% in the third quarter of the fiscal year 2023-24, according to data released by the National Statistical Office (NSO). This is the fastest growth in six quarters and is a positive sign for the Indian economy.",
  },
  {
    title: "ISRO Launches New Weather Satellite",
    news: "The Indian Space Research Organisation (ISRO) successfully launched a new weather satellite, INSAT-4E, from the Satish Dhawan Space Centre in Sriharikota. The satellite will provide advanced weather forecasting services and help in disaster management.",
  },
  {
    title: "Government Announces New Education Policy",
    news: "The Government of India has announced a new National Education Policy (NEP) that aims to transform the education sector in the country. The policy focuses on providing holistic and multidisciplinary education to students and making them future-ready.",
  },
];

const DailyCurrentAffairs = () => {
  return (
    <div className="daily-current-affairs-container">
      <h1 className="page-title">Daily Current Affairs</h1>
      <div className="news-container">
        {dailyNews.map((item, index) => (
          <div className="news-card" key={index}>
            <h2 className="news-title">{item.title}</h2>
            <p className="news-content">{item.news}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyCurrentAffairs;
