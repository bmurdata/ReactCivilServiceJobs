import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const CertInfo = ({ certissueNo, first_name, exam_no, last_name,list_no,list_title_desc,certFor }) => {
    const [applicant, setInfo] = useState(null);
    
    useEffect(() => {
        const getCertificationInfo=async ()=>{
            const response = await fetch(
                'https://data.cityofnewyork.us/resource/a9md-ynri.json?&last_name={MURPHY}&mi=P&exam_no={01149}'
                
              );
              const json = await response.json();
              setInfo(json);
            };
            getCertificationInfo()//.catch(console.error);
        
    }, [exam_no]);
    return (
        
        <div>
          Exam for: {list_title_desc}, {exam_no}
          {applicant ? ( // rendering only if API call actually returned us data
            <p className="main-list" key={exam_no +list_no }>
            {list_no}, {first_name}, {last_name}, For: {certFor} Issue No: <Link to={"/idet/"+certissueNo} key={certissueNo}>{certissueNo}</Link>
          </p>
          ) : 
          null
          }
        </div>
      );
  };
  
  export default CertInfo;