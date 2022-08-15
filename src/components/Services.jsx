import React, { useEffect } from 'react'

const Services = (props) =>{

  const serviceTopLoader = () => {
    window.scrollTo(0,0);
    props.setProgress(10);
    props.setProgress(40);
    props.setProgress(100);
  };
 useEffect(() => {
  serviceTopLoader(); 
  // eslint-disable-next-line
}, [])

    return (
      <div className="my-4 mx-3 container-lg">
       
        <h5 className="text-2xl my-2 font-bold tracking-tight text-gray-900 ">
        Services
        </h5>
            <p className="font-normal my-2 text-gray-700">
              Trappist News is a new site that will be showing articles from all
              around the world. Trappist News cover everything from technology
              to about new startups, and it's all completely free.
              Trappist News a news website, made using React Js class based & It shows the latest news from the different news platforms. It uses newsapi.org API to provide news just by fetching news data from an API endpoint.
              Trappist News have two versions, one of the version is GitHub OpenSource Version anyone can take the software from there and use it for their usage. And other version is Preview version which is used right now on this website to show the news. It fetches the news from API from <b>TechCrunch</b> website's WordPress Json API.   
            </p>
      </div>
    )  
  }
  export default Services;