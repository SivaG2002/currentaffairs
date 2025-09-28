
import React from 'react';

const president = {
  name: "Droupadi Murmu",
  role: "Head of State, Supreme Commander of the Armed Forces"
};

const primeMinister = {
  name: "Narendra Modi",
  portfolios: [
    "Personnel, Public Grievances and Pensions",
    "Department of Atomic Energy",
    "Department of Space",
    "All important policy issues",
    "All other portfolios not allocated to any Minister"
  ]
};

const cabinetMinisters = [
    {
      name: "Raj Nath Singh",
      ministries: ["Defence"]
    },
    {
      name: "Amit Shah",
      ministries: ["Home Affairs", "Cooperation"]
    },
    {
      name: "Nitin Jairam Gadkari",
      ministries: ["Road Transport and Highways"]
    },
    {
      name: "Nirmala Sitharaman",
      ministries: ["Finance", "Corporate Affairs"]
    },
    {
      name: "Shivraj Singh Chouhan",
      ministries: ["Agriculture & Farmers Welfare", "Rural Development"]
    },
    {
      name: "Subrahmanyam Jaishankar",
      ministries: ["External Affairs"]
    },
    {
      name: "Jagat Prakash Nadda",
      ministries: ["Health & Family Welfare", "Chemicals & Fertilizers"]
    },
    {
      name: "Manohar Lal",
      ministries: ["Housing & Urban Affairs", "Power"]
    },
    {
      name: "H. D. Kumaraswamy",
      ministries: ["Heavy Industries", "Steel"]
    },
    {
      name: "Piyush Goyal",
      ministries: ["Commerce & Industry"]
    },
    {
      name: "Dharmendra Pradhan",
      ministries: ["Education"]
    },
    {
      name: "Jitan Ram Manjhi",
      ministries: ["Micro, Small and Medium Enterprises"]
    },
    {
      name: "Rajiv Ranjan Singh (Lalan Singh)",
      ministries: ["Panchayati Raj", "Fisheries, Animal Husbandry & Dairying"]
    },
    {
      name: "Sarbananda Sonowal",
      ministries: ["Ports, Shipping & Waterways"]
    },
    {
      name: "Virendra Kumar",
      ministries: ["Social Justice & Empowerment"]
    },
    {
      name: "K. Rammohan Naidu",
      ministries: ["Civil Aviation"]
    },
    {
      name: "Pralhad Joshi",
      ministries: ["Consumer Affairs, Food & Public Distribution", "New & Renewable Energy"]
    },
    {
      name: "Jual Oram",
      ministries: ["Tribal Affairs"]
    },
    {
      name: "Giriraj Singh",
      ministries: ["Textiles"]
    },
    {
      name: "Ashwini Vaishnaw",
      ministries: ["Railways", "Information & Broadcasting", "Electronics & Information Technology"]
    },
    {
      name: "Jyotiraditya M. Scindia",
      ministries: ["Communications", "Development of North Eastern Region"]
    },
    {
      name: "Bhupender Yadav",
      ministries: ["Environment, Forest & Climate Change"]
    },
    {
      name: "Gajendra Singh Shekhawat",
      ministries: ["Culture", "Tourism"]
    },
    {
      name: "Annpurna Devi",
      ministries: ["Women & Child Development"]
    },
    {
      name: "Kiren Rijiju",
      ministries: ["Parliamentary Affairs", "Minority Affairs"]
    },
    {
      name: "Hardeep Singh Puri",
      ministries: ["Petroleum & Natural Gas"]
    },
    {
      name: "Mansukh L. Mandaviya",
      ministries: ["Labour & Employment", "Youth Affairs & Sports"]
    },
    {
      name: "G. Kishan Reddy",
      ministries: ["Coal", "Mines"]
    },
    {
      name: "Chirag Paswan",
      ministries: ["Food Processing Industries"]
    },
    {
      name: "C. R. Patil",
      ministries: ["Jal Shakti"]
    }
  ];

const ministersOfStateIndependent = [
    {
      name: "Rao Inderjit Singh",
      ministries: ["Statistics & Programme Implementation", "Planning", "Culture"]
    },
    {
      name: "Dr. Jitendra Singh",
      ministries: ["Science & Technology", "Earth Sciences"]
    },
    {
      name: "Arjun Ram Meghwal",
      ministries: ["Law & Justice"]
    },
    {
      name: "Jadhav Prataprao Ganpatrao",
      ministries: ["AYUSH"]
    },
    {
      name: "Jayant Chaudhary",
      ministries: ["Skill Development & Entrepreneurship"]
    }
  ];

const ministersOfState = [
    {
      name: "Jitin Prasada",
      ministries: ["Commerce & Industry", "Electronics & Information Technology"]
    },
    {
      name: "Shripad Yesso Naik",
      ministries: ["Power", "New & Renewable Energy"]
    },
    {
      name: "Pankaj Chaudhary",
      ministries: ["Finance"]
    },
    {
      name: "Krishan Pal",
      ministries: ["Cooperation"]
    },
    {
      name: "Ramdas Athawale",
      ministries: ["Social Justice & Empowerment"]
    },
    {
      name: "Ram Nath Thakur",
      ministries: ["Agriculture & Farmers Welfare"]
    },
    {
      name: "Nityanand Rai",
      ministries: ["Home Affairs"]
    },
    {
      name: "Anupriya Patel",
      ministries: ["Health & Family Welfare", "Chemicals & Fertilizers"]
    },
    {
      name: "V. Somanna",
      ministries: ["Jal Shakti", "Railways"]
    },
    {
      name: "Chandra Sekhar Pemmasani",
      ministries: ["Rural Development", "Communications"]
    },
    {
      name: "S. P. Singh Baghel",
      ministries: ["Fisheries, Animal Husbandry & Dairying", "Panchayati Raj"]
    },
    {
      name: "Shobha Karandlaje",
      ministries: ["Micro, Small & Medium Enterprises", "Labour & Employment"]
    },
    {
      name: "Kirtivardhan Singh",
      ministries: ["Environment, Forest & Climate Change", "External Affairs"]
    },
    {
      name: "B. L. Verma",
      ministries: ["Consumer Affairs, Food & Public Distribution", "Social Justice & Empowerment"]
    },
    {
      name: "Shantanu Thakur",
      ministries: ["Ports, Shipping & Waterways"]
    },
    {
      name: "Suresh Gopi",
      ministries: ["Petroleum & Natural Gas", "Tourism"]
    },
    {
      name: "L. Murugan",
      ministries: ["Information & Broadcasting", "Parliamentary Affairs"]
    },
    {
      name: "Ajay Tamta",
      ministries: ["Road Transport & Highways"]
    },
    {
      name: "Bandi Sanjay Kumar",
      ministries: ["Home Affairs"]
    },
    {
      name: "Kamlesh Paswan",
      ministries: ["Rural Development"]
    },
    {
      name: "Bhagirath Choudhary",
      ministries: ["Agriculture & Farmers Welfare"]
    },
    {
      name: "Satish Chandra Dubey",
      ministries: ["Coal", "Mines"]
    },
    {
      name: "Sanjay Seth",
      ministries: ["Defence"]
    },
    {
      name: "Ravneet Singh",
      ministries: ["Food Processing Industries", "Railways"]
    },
    {
      name: "Durgadas Uikey",
      ministries: ["Tribal Affairs"]
    },
    {
      name: "Raksha Nikhil Khadse",
      ministries: ["Youth Affairs & Sports"]
    },
    {
      name: "Sukanta Majumdar",
      ministries: ["Education", "Development of North Eastern Region"]
    },
    {
      name: "Savitri Thakur",
      ministries: ["Women & Child Development"]
    },
    {
      name: "Tokhan Sahu",
      ministries: ["Housing & Urban Affairs"]
    },
    {
      name: "Raj Bhushan Choudhary",
      ministries: ["Jal Shakti"]
    },
    {
      name: "Bhupathi Raju Srinivasa Varma",
      ministries: ["Heavy Industries", "Steel"]
    },
    {
      name: "Harsh Malhotra",
      ministries: ["Corporate Affairs", "Road Transport & Highways"]
    },
    {
      name: "Nimuben Jayantibhai Bambhaniya",
      ministries: ["Consumer Affairs, Food & Public Distribution"]
    },
    {
      name: "Murlidhar Mohol",
      ministries: ["Cooperation", "Civil Aviation"]
    },
    {
      name: "George Kurian",
      ministries: ["Minority Affairs", "Fisheries, Animal Husbandry & Dairying"]
    },
    {
      name: "Pabitra Margherita",
      ministries: ["External Affairs", "Textiles"]
    }
  ];

const Ministers = () => {
  return (
    <div className="ministers-container">
      <h1 className="page-title">Ministers of India</h1>

      <div className="minister-card">
        <h2>President</h2>
        <p><strong>{president.name}</strong></p>
        <p>{president.role}</p>
      </div>

      <div className="minister-card">
        <h2>Prime Minister</h2>
        <p><strong>{primeMinister.name}</strong></p>
        <ul>
          {primeMinister.portfolios.map((portfolio, index) => (
            <li key={index}>{portfolio}</li>
          ))}
        </ul>
      </div>

      <h2>Cabinet Ministers</h2>
      <table className="ministers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ministries</th>
          </tr>
        </thead>
        <tbody>
          {cabinetMinisters.map((minister, index) => (
            <tr key={index}>
              <td>{minister.name}</td>
              <td>{minister.ministries.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Ministers of State (Independent Charge)</h2>
      <table className="ministers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ministries</th>
          </tr>
        </thead>
        <tbody>
          {ministersOfStateIndependent.map((minister, index) => (
            <tr key={index}>
              <td>{minister.name}</td>
              <td>{minister.ministries.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Ministers of State</h2>
      <table className="ministers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ministries</th>
          </tr>
        </thead>
        <tbody>
          {ministersOfState.map((minister, index) => (
            <tr key={index}>
              <td>{minister.name}</td>
              <td>{minister.ministries.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ministers;
