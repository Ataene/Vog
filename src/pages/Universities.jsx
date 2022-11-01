import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUniversity, countryDropDown } from "../redux/ActionCreators";

const Universities = () => {
  const universityData = useSelector((state) => state.getUniversity);
  const countryData = useSelector((state) => state.countrySelect);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUniversity());
    dispatch(countryDropDown());
  });

  return (
    <div>
      <div>
        <h1>Limit of five items</h1>
        {universityData &&
          universityData.slice(0, 5).map((item, index) => (
            <div key={index}>
              <h2 className="university-list">{item.domains[0]}</h2>
              <h3 className="university-list">{item.domains[1]}</h3>
              <h1 className="university-list">{item["alpha_two_code"]}</h1>
              <h1 className="university-list">{item["web_pages"][0]}</h1>
              <h1 className="university-list">{item["web_pages"][1]}</h1>
              <h1 className="university-list">{item["web_pages"][2]}</h1>
              <h1 className="university-list">{item.country}</h1>
              <h1 className="university-list">{item["state-province"]}</h1>
              <p>{item.name}</p>
            </div>
          ))}
      </div>
      <hr />
      <h3 style={{ color: "green" }}>Country Dropdown Menu</h3>
      <div className="university-post"></div>
      <h1 htmlFor="Country">Select a Country </h1>
      <select style={{ marginBottom: 100 }}>
        <option>Select your country</option>
        {countryData.map((item, index) => (
          <option key={index}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Universities;
