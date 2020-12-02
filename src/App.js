import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ProjectView from "./components/ProjectView";
import ProjectOne from "./components/ProjectOne";

function App() {
  //   const val=" <> ? ?;; ;;   <> <./."
  // const num=10;
  //   const arr=[ 'Hello', 'world' ]
  //   console.log(arr,val,num, 'ARRY');
  //   const str='50';
  //   const num1= Number(str)
  //   const jsn={
  //     employee: "Sandeep"
  //   }
  //   console.log(num1,str,jsn, 'ARRY');

  return (
    <>
      <div className="body">
        <div className="heading">Office UI Fabric</div>
        <div className="secondline formating">
          The Office front-end framwork for building experiences
        </div>
        <div className="secondline formating">
          that fit seamlessly into Office and Office 365
        </div>
        <div className="table">
          <div>
            <div button className="button">
              {" "}
              Get Started
            </div>
          </div>
        </div>
        <div className="secondline formating">Fabric Core</div>
      </div>
      {/* <ProfileCard />
      <ProjectView /> */}
      <ProjectOne />
    </>
  );
}

export default App;
