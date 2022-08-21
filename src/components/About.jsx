import React, {useEffect} from "react";
import { Helmet } from "react-helmet";
const About = (props) => {
  const aboutTopLoader = () => {
    window.scrollTo(0,0);
    props.setProgress(10);
    props.setProgress(40);
    props.setProgress(100);
  };
useEffect(() => {
  aboutTopLoader();
  // eslint-disable-next-line
}, [])
    return (
      <>
        <Helmet>
          <title>About - Trappist News</title>
        </Helmet>
        <div>
          <div className="my-4 mx-3 container-lg">
            <h3 className="text-3xl text-center my-2 font-medium tracking-tight text-gray-900 ">
              About - Trappist News
            </h3>
          </div>
          <div className="my-4 mx-3 container-lg">
            <h5 className="text-2xl my-2 font-bold tracking-tight text-gray-900 ">
              Trappist News is the ultimate source for news
            </h5>
            <p className="font-normal my-2 text-gray-700">
              Trappist News is a new site that will be showing articles from all
              around the world. Trappist News cover everything from technology
              to about new startups, and it's all completely free.
            </p>
            <p className="font-normal my-2 text-gray-700">
              Trappist News is a great source for news. It has everything you
              need to know, and it's updated regularly. You can trust that the
              information you're getting is accurate and up-to-date. Plus, it's
              free!
            </p>
          </div>
          <div className="my-4 mx-3 container-lg">
            <h5 className="text-2xl my-2 font-bold tracking-tight text-gray-900 ">
              Why should I care about the news?
            </h5>
            <p className="font-normal my-2 text-gray-700">
              News is important for a variety of reasons. It keeps us informed
              about what is happening in the world around us. It helps us
              understand current events and make informed decisions about the
              future. News also helps us connect with others who share our
              interests and values.
            </p>
          </div>
          
            <span style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://github.com/TheSGJ/Trappist-News-React-Functional">
              <svg
                style={{ height: "30px", width: "30px" }}
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M181.5,389.9c0,1.8-2.1,3.3-4.7,3.3c-3,0.3-5.1-1.2-5.1-3.3c0-1.8,2.1-3.3,4.7-3.3C179.2,386.4,181.5,387.8,181.5,389.9z
M153.3,385.8c-0.6,1.8,1.2,3.9,3.9,4.4c2.4,0.9,5.1,0,5.6-1.8s-1.2-3.9-3.9-4.7C156.6,383.1,153.9,384,153.3,385.8L153.3,385.8z
M193.4,384.3c-2.6,0.6-4.4,2.4-4.2,4.4c0.3,1.8,2.6,3,5.4,2.4c2.6-0.6,4.4-2.4,4.2-4.2C198.5,385.2,196,384,193.4,384.3z
M253.1,36.6C127.3,36.6,31,132.2,31,258c0,100.6,63.3,186.7,153.8,217c11.6,2.1,15.7-5.1,15.7-11c0-5.6-0.3-36.7-0.3-55.7
c0,0-63.5,13.6-76.8-27c0,0-10.3-26.4-25.2-33.2c0,0-20.8-14.2,1.5-14c0,0,22.6,1.8,35,23.4c19.9,35,53.2,24.9,66.1,19
c2.1-14.5,8-24.6,14.5-30.6c-50.7-5.6-101.9-13-101.9-100.3c0-24.9,6.9-37.5,21.4-53.4c-2.4-5.9-10.1-30.2,2.4-61.6
c19-5.9,62.6,24.5,62.6,24.5c18.1-5.1,37.7-7.7,57-7.7c19.3,0,38.8,2.6,57,7.7c0,0,43.6-30.5,62.6-24.5
c12.4,31.5,4.7,55.7,2.4,61.6c14.5,16.1,23.4,28.6,23.4,53.4c0,87.6-53.4,94.5-104.2,100.3c8.3,7.2,15.4,20.8,15.4,42.1
c0,30.6-0.3,68.4-0.3,75.8c0,5.9,4.2,13.1,15.7,11C419.5,444.7,481,358.6,481,258C481,132.2,378.9,36.6,253.1,36.6z M119.2,349.5
c-1.2,0.9-0.9,3,0.6,4.7c1.5,1.5,3.5,2.1,4.7,0.9c1.2-0.9,0.9-3-0.6-4.7C122.5,349,120.4,348.4,119.2,349.5z M109.4,342.2
c-0.6,1.2,0.3,2.6,2.1,3.5c1.5,0.9,3.3,0.6,3.9-0.6c0.6-1.2-0.3-2.6-2.1-3.5C111.5,341,110,341.3,109.4,342.2z M138.8,374.5
c-1.5,1.2-0.9,3.9,1.2,5.6c2.1,2.1,4.7,2.4,5.9,0.9c1.2-1.2,0.6-3.9-1.2-5.6C142.7,373.3,140,373,138.8,374.5z M128.4,361.1
 c-1.5,0.9-1.5,3.3,0,5.4c1.5,2.1,3.9,3,5.1,2.1c1.5-1.2,1.5-3.5,0-5.6C132.2,360.9,129.9,360,128.4,361.1L128.4,361.1z"/>
                </g>
              </svg>
              View Source Code on Github
          </a>
            </span>
        </div>
      </>
    );
  }
export default About;
