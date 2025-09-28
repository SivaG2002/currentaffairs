
import React from 'react';

const states = [
  { name: 'Andhra Pradesh', capital: 'Amaravati', cm: 'N. Chandrababu Naidu' },
  { name: 'Arunachal Pradesh', capital: 'Itanagar', cm: 'Pema Khandu' },
  { name: 'Assam', capital: 'Dispur', cm: 'Himanta Biswa Sarma' },
  { name: 'Bihar', capital: 'Patna', cm: 'Nitish Kumar' },
  { name: 'Chhattisgarh', capital: 'Raipur', cm: 'Vishnu Deo Sai' },
  { name: 'Goa', capital: 'Panaji', cm: 'Pramod Sawant' },
  { name: 'Gujarat', capital: 'Gandhinagar', cm: 'Bhupendrabhai Patel' },
  { name: 'Haryana', capital: 'Chandigarh', cm: 'Nayab Singh Saini' },
  { name: 'Himachal Pradesh', capital: 'Shimla', cm: 'Sukhvinder Singh Sukhu' },
  { name: 'Jharkhand', capital: 'Ranchi', cm: 'Champai Soren' },
  { name: 'Karnataka', capital: 'Bengaluru', cm: 'Siddaramaiah' },
  { name: 'Kerala', capital: 'Thiruvananthapuram', cm: 'Pinarayi Vijayan' },
  { name: 'Madhya Pradesh', capital: 'Bhopal', cm: 'Mohan Yadav' },
  { name: 'Maharashtra', capital: 'Mumbai', cm: 'Eknath Shinde' },
  { name: 'Manipur', capital: 'Imphal', cm: 'N. Biren Singh' },
  { name: 'Meghalaya', capital: 'Shillong', cm: 'Conrad Sangma' },
  { name: 'Mizoram', capital: 'Aizawl', cm: 'Lalduhoma' },
  { name: 'Nagaland', capital: 'Kohima', cm: 'Neiphiu Rio' },
  { name: 'Odisha', capital: 'Bhubaneswar', cm: 'Mohan Charan Majhi' },
  { name: 'Punjab', capital: 'Chandigarh', cm: 'Bhagwant Mann' },
  { name: 'Rajasthan', capital: 'Jaipur', cm: 'Bhajan Lal Sharma' },
  { name: 'Sikkim', capital: 'Gangtok', cm: 'Prem Singh Tamang' },
  { name: 'Tamil Nadu', capital: 'Chennai', cm: 'M. K. Stalin' },
  { name: 'Telangana', capital: 'Hyderabad', cm: 'Anumula Revanth Reddy' },
  { name: 'Tripura', capital: 'Agartala', cm: 'Manik Saha' },
  { name: 'Uttar Pradesh', capital: 'Lucknow', cm: 'Yogi Adityanath' },
  { name: 'Uttarakhand', capital: 'Dehradun', cm: 'Pushkar Singh Dhami' },
  { name: 'West Bengal', capital: 'Kolkata', cm: 'Mamata Banerjee' },
];

const StateAndCapitals = () => {
  return (
    <div className="state-capitals-container">
      <h1 className="page-title">States, Capitals, and Chief Ministers</h1>
      <table className="state-capitals-table">
        <thead>
          <tr>
            <th>State</th>
            <th>Capital</th>
            <th>Chief Minister</th>
          </tr>
        </thead>
        <tbody>
          {states.map((state, index) => (
            <tr key={index}>
              <td>{state.name}</td>
              <td>{state.capital}</td>
              <td>{state.cm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateAndCapitals;
