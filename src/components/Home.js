import React from 'react'
// import { useState } from 'react';
// import { fetchRepo } from '../../utils/fetchRepo';
import { Link } from 'react-router-dom'
// import Allrepo from './Allrepo';
import image from '../images/IMG_4630.jpg'



function Home() {
  // const [pageData, setPageData] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     setLoading(true);
  //     const username = e.target.username.value;
  //   Allrepo(username).then(data => {
  //       setPageData(data);
  //       setLoading(false);
  //     });
  //   };
  

  return (
    <>
    <div className="container">
  <div className="header">
    <h1>Welcome</h1>
    {/* <span id="toggledark">Light</span>
    <span id="togglelight" className="hidden">Dark</span> */}
  </div>
<div className="search">
  <input type="text" name="usersearch" id="usersearch" placeholder="Search GitHub Repositories"/> 
  <span id="usernotfound"></span>
  <button type="submit" className="inactive" >Search</button>

  <Link to="/repo" ><button type="submit" className="inactive">Repo</button></Link>
</div>
<div className="main">
  <img src={image} className="profilepicture" alt=''/>
  <div className="userhead">
    <img src="#" className="profilepicture" alt=''/>
    <div className="userinfo">
      <h2>Adenike</h2>
      
      <Link to="/repo/:github.com/nikky00"><h3>https://github.com/nikky00</h3></Link>
      <h4>this profile has no bio</h4>
    </div>
  </div>
  <div className="userdesc">
  </div>
  <div className="userstat">
    <div className="userstats">
      <div className="repos">
        Repos 27
        <span id="repos"></span>
      </div>
      <div className="followers">
        Followers 6
      </div>
      <div className="following">
        Following 5
        <span id="following"></span>
      </div>
    </div>
  </div>
  <div className="userlink">
    <ul>
      <li id="location">Nigeria</li>
      <li id="twitter">nikky_b</li>
      <li id="website">nnh.com</li>
      <li id="company">Alt school</li>
    </ul>
  </div>
</div>
</div>
{/* {isLoading ? "loading" : {pageData}} */}

    </>
  )
}

export default Home
