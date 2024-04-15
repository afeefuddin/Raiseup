import React, { useEffect, useState } from "react";
import StartupPaymentCard from "../../Components/DashboardComponents/StartupPaymentCard.jsx";
import Tag from "../../Components/DashboardComponents/Tag.jsx";
import PaymentCard from '../../Components/Payment/PaymentCard.jsx'
import Markdown from "react-markdown";
import axios from "axios";

function Startup() {
  const [startupid, setStartupId] = useState(
    window.location.href.split("/").at(-1)
  );
  const [data,setData] = useState()
  useEffect(()=>{
    
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://raiseup-api.vercel.app"
        : "http://localhost:5000";
        const getData = async() =>{
          try {
            const data = await axios.get(baseUrl + "/api/startups/data/"+startupid);
            console.log(data.data.data);
            setData(data.data.data[0]);
          } catch (error) {
            console.log(error);
          }
        }
        getData()

  },[])
  return (
    <>
      <div className="p-4 pt-20 min-h-screen lg:ml-64">
        <div className=" h-full w-full flex justify-center p-4">
          <div className=" max-w-7xl w-full">
            <div className=" flex justify-center ">
              <div className=" flex flex-col-reverse lg:grid lg:grid-cols-3 w-full">
                <div className=" col-span-2 flex flex-col gap-4">
                  <div className="flex flex-row gap-8 items-center ">
                    <div>
                      <img
                        src={data?.logo}
                        alt=""
                        className=" rounded-full h-24 w-24"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="text-4xl">{data?.name}</div>
                      <div className="text-lg">
                        {data?.slogan}
                      </div>
                      <Tag data={data?.domain[0]} />
                    </div>
                  </div>
                  <div>
                    <Markdown>{data?.description}</Markdown>
                  </div>
                </div>
                <div className="col-span-1 ">
                
                  <div className="sticky top-4">
                    <StartupPaymentCard data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Startup;