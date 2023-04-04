import { useState } from 'react'
import { useEffect } from 'react';
import viteLogo from '/vite.svg'
import CertInfo from './components/certifiedInfo';

import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null)
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
    
      
      const filteredData = Object.keys(list).filter((item) => 
     
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      console.log(filteredData)
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list));
    }
  };
  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        // how do we call an API using fetch? 
        'https://data.cityofnewyork.us/resource/a9md-ynri.json?exam_no=01149'
      
      );
      const json = await response.json();
      setList(json);
    };
    fetchAllCoinData().catch(console.error);

  }, []);

  console.log(list)


  return (
   <div>
    <div className="whole-page">
  <h1>Civil Service Exam List</h1>
  <input
    type="text"
    placeholder="Search..."
    onChange={(inputString) => searchItems(inputString.target.value)}
  />
      <ul>{searchInput.length > 0
      ? filteredResults.map((applicant) => 
      list[applicant].first_name!=null ? 
            <CertInfo
            exam_no={list[applicant].exam_no}
            last_name={list[applicant].last_name}
            list_no={list[applicant].list_no}
            first_name={list[applicant].first_name}
            list_title_desc={list[applicant].list_title_desc}
            certFor={list[applicant].list_agency_desc}
            certissueNo={list[applicant].cert_issue_no}
            />
            : null
        )
      :list && Object.entries(list).map(([applicant]) =>
  list[applicant].first_name!=null ? (
    <CertInfo
    exam_no={list[applicant].exam_no}
    last_name={list[applicant].last_name}
    list_no={list[applicant].list_no}
    first_name={list[applicant].first_name}
    list_title_desc={list[applicant].list_title_desc}
    certFor={list[applicant].list_agency_desc}
    certissueNo={list[applicant].cert_issue_no}
    />
      
    ) : null
)}
      </ul>
</div>
   </div>
  )
}

export default App
