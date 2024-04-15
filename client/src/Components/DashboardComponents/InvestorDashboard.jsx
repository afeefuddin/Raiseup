import React, { useState, useEffect } from "react";
import InvestorCardInInvestor from "./InvestorCardInInvestor";
// import Filter from "../ui/Filter";
import axios from "axios";

const InvestorDashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://raiseup-api.vercel.app"
        : "http://localhost:5000";
    async function getData() {
      try {
        const data = await axios.get(baseUrl + "/api/startups/explore");
        console.log(data.data?.message);
        setData(data.data.message);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {/*Search Bar*/}

            {data &&
              data.map((val) => (
                // <StartupCardInStartup />
                <InvestorCardInInvestor
                  key={val._id}
                  name={val.name}
                  fundsReceived={val.fundsRecieved ? val.fundsRecieved : 0}
                  fundsReq={val.fundsRequired ? val.fundsRequired : 0}
                  username={val.username}
                  stocks={val.stocks}
                  _id={val._id}
                  logo = {val.logo}
                  founded={val.founded}
                />
              ))}
        </div>
  );
};

export default InvestorDashboard;