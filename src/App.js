import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from './components/Contact';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Dne from './components/Dne';
// import PopBlogsFunc from './components/PopBlogsFunc';
import PopularBlogs from './components/PopularBlogs';
import Services from './components/Services';
import LoadingBar from 'react-top-loading-bar';
const App = () => {
const pageSize=5;
const apiKey=process.env.REACT_APP_NEWS_API
const [progress, setProgress] = useState(0)


    return (
      <>
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Navbar setProgress={setProgress} />
          
          <div className="App grid place-items-center" id="App">
            <Routes>
              <Route path="/dne" element={<Dne />} />
              <Route path="/general" element={<Home setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="general" category="general" country="in"/>} />
              {/* start categories */}
              <Route path="/business" element={<Home setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="business"category="business" country="in"/>} />
              <Route path="/sports" element={<Home setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="sports" category="sports" country="in"/>} />
              <Route path="/technology" element={<Home setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} category="technology" key="technology" country="in"/>} />
              <Route path="/health" element={<Home setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="health" key="health" country="in"/>} />
              <Route path="/science" element={<Home setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="science" category="science" country="in"/>} />
              <Route path="/entertainment" element={<Home setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="entertainment" category="entertainment" country="in"/>} />
               {/* end categories */}
              <Route path="/about" element={<About setProgress={setProgress} />}/>
              <Route path="/contact" element={<Contact setProgress={setProgress}/>}/>
              <Route path="/services" element={<Services setProgress={setProgress}/>}/>
              <Route path="/" element={<PopularBlogs setProgress={setProgress} per_page={5}/>}/>
            </Routes>
          </div>
        </Router>
      </div>
      </>
    )
  }

export default App;