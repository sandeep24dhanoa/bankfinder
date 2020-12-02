import { Input } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [cityName, setCityName] = useState("");
  const [bankData, setBankData] = useState([]);
  const [bankCount, setBankCount] = useState(10);

  const list = [
    {
      Fav: "star",
      Bank_Name: "ALLAHABAD BANK",
      IFSC_Code: "ALLA0210172",
      Branch: "LUDHIANA CLOCK TOWER",
      City: "LUDHIANA",
      District: "LUDHIANA",
      State: "PUNJAB",
      Address: "5,ATTAR SINGH STREET, NEAR CLOCK TOWER LUDHIANA-141 001",
    },
    {
      Fav: "star",
      Bank_Name: "ALLAHABAD BANK",
      IFSC_Code: "ALLA0210321",
      Branch: "LUDHIANA LINK ROAD",
      City: "LUDHIANA",
      District: "LUDHIANA",
      State: "PUNJAB",
      Address: "818, LINK ROAD, LUDHIANA - 141003",
    },
    {
      Fav: "star",
      Bank_Name: "ALLAHABAD BANK",
      IFSC_Code: "ALLA0210365",
      Branch: "LUDHIANA CHAURA BAZAR",
      City: "LUDHIANA",
      District: "LUDHIANA",
      State: "PUNJAB",
      Address:
        "BEAT NO.37, CHAURA BAZAR LUDHIANA - 141 008 PUNJAB LUDHIANA PUNJAB 141008",
    },
  ];
  const bankFinder = (city) => {
    Axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`).then(
      (res) => {
        console.log(res.data);
        setBankData(res.data);
      }
    );
  };

  return (
    <div className="App">
      <div className="Search">Search Banks</div>
      <div className="abc">
        Enter City:
        <Input
          placeholder="Mumbai"
          value={cityName}
          onChange={(e) => setCityName(e.target.value.toUpperCase())}
          label="Enter City"
          style={{
            background: "white",
            padding: 10,
            borderRadius: 10,
            marginRight: 10,
            marginLeft: 10,

            borderColor: "#fff",
            fontSize: 10,
          }}
        />
        <button
          onDragEnter
          onClick={() => {
            bankFinder(cityName);
          }}
          className="searh_button"
        >
          Search
        </button>
      </div>
      <div className="title">Banks List</div>
      <div className="xyz">No. of Bank: {bankData?.length}</div>

      <div className="word">Favourites</div>
      <div className="tuv">
        Result display:
        <select
          style={{
            fontSize: "15px",
            borderRadius: "5px",
            backgroundColor: "lightgrey",
            width: "10%",
          }}
          onChange={(e) => setBankCount(e.target.value)}
        >
          <option value={20}>20</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={60}>60</option>
          <option value={80}>80</option>
        </select>
      </div>
      <table>
        <tr>
          <th>S.No.</th>
          <th>Bank Name</th>
          <th>IFSC Code</th>
          <th>Bank ID</th>
          <th>Branch</th>
          <th>City</th>
          <th>District</th>
          <th>State</th>
          <th>Address</th>
        </tr>

        {bankData.slice(0, bankCount).map((value, index) => (
          <tr>
            <th>{index + 1}</th>
            <th>{value?.bank_name}</th>
            <th>{value?.ifsc}</th>
            <th>{value?.bank_id}</th>
            <th>{value?.branch}</th>
            <th>{value?.city}</th>
            <th>{value?.district}</th>
            <th>{value?.state}</th>
            <th>{value?.address}</th>
          </tr>
        ))}
      </table>
    </div>
  );
}
