import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
console.log("Running certDetails")

const CertDetail = () => {
    console.log("Running certDetails")
    let params = useParams();
    console.log("Attempting to do something")
    const [fullDetails, setFullDetails] = useState(null);
    useEffect(() => {
        const fetchAllCoinData = async () => {
          const response = await fetch(
            // how do we call an API using fetch? 
            'https://data.cityofnewyork.us/resource/a9md-ynri.json?cert_issue_no='+params.ino
          
          );
          console.log("RUN ME")
          const json = await response.json();
          console.log(json[0])
          setFullDetails({"total":json.length,"l":json[0].cert_issue_no,"certAgency":json[0].list_agency_desc,"list_title_desc":json[0].list_title_desc});
          console.log(fullDetails)
          console.log("Full details for certDetails")
        };
        fetchAllCoinData().catch(console.error);
    
      }, []);
    return (
     <div>
        <h1>Issue No: {fullDetails? fullDetails.l +"Total: "+ fullDetails.total: "Hello World"} </h1>
        <p>{fullDetails? fullDetails.certAgency: "Hello World"}</p>
        <p>{fullDetails? fullDetails.list_title_desc: "End of report"}</p>
     </div>
    );
  };
  
  export default CertDetail;