import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import FundingComponent from "../../Components/DashboardComponents/FundingComponent";

const Fundings = ({startup}) => {
  const { currentUser } = useAuth();
  const [fundings, setFundings] = useState(null);
  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    console.log(nodeEnv);
    const baseUrl =
      nodeEnv === "production"
        ? "https://raiseup-api.vercel.app"
        : "http://localhost:5000";
    const getUser = async () => {
      try {
        const response = await axios.get(
          baseUrl + "/api/payments/history/" + currentUser?.uid,
          {
            withCredentials: true,
          }
        );
        console.log(response.data?.data);
        console.log(currentUser)
        setFundings(response.data?.data);
        console.log(fundings);
      } catch (error) {
        console.error(error);
      }
    };
    if (currentUser) {
      getUser();
    }
  }, [currentUser]);

  return (
    <>
      <div className="p-4 pt-20 min-h-screen lg:ml-64">
        <div className="w-full flex flex-col">
          <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-orange-400  to-red-400 bg-clip-text text-transparent">
            {" "}
            {
              startup ===  true ? 
              <>
              See who funded in your startup{" "}
              </> : 
              <>
              See the startups you funded{" "}
              
              </>
            }

          </h1>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl text-left">
            {" "}
            {
              startup === true ? 
              <>
            Find out who funded in your startup and how much they funded{" "}
              </> : 
              <>
            Find out the statups that you funded till now and how much you funded{" "}
              </>
            }
          </p>
          <hr className="h-px my-5 mt-1 bg-gray-700 border-0" />

          <div className="flex flex-col pt-5 gap-10">
            {fundings ? (
              fundings.map((funding) => (
                <FundingComponent key={funding.paymentData._id}
                  name={startup === true ? funding.userData.name : funding.startupData.name}
                  email={startup === true ? funding.userData.email : funding.startupData.slogan}
                  amount={funding.paymentData.amount}
                  photo={startup===true ? funding.userData.photoUrl : funding.startupData.logo}
                />
              ))
            ) : (
              <p className="text-lg font-normal text-gray-500 lg:text-xl text-center">
                {" "}
                No fundings yet{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fundings;