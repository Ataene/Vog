import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUniversity, countryDropDown } from "../redux/ActionCreators";

const Universities = () => {
  const universityData = useSelector((state) => state.getUniversity);
  const countryData = useSelector((state) => state.countrySelect);

  const dispatch = useDispatch();

  //   const allState = useSelector((state) => state);

  // const [country, setCountry] = useState("");

  useEffect(() => {
    dispatch(fetchUniversity());
    dispatch(countryDropDown());
  }, []);

  useEffect(() => {
    console.log(universityData);
  }, [universityData]);

  useEffect(() => {
    console.log(countryData);
  }, [countryData]);
  return (
    <div>
      <div>
        <h1>Limit of five items</h1>
        {universityData &&
          universityData.slice(0, 5).map((item) => (
            <div key={item.id}>
              <h1 className="university-list">{item.country}</h1>
              <p>{item.name}</p>
            </div>
          ))}
      </div>
      <hr />
      <h1 style={{ color: "green" }}>Post begins here</h1>
      <div className="university-post"></div>
      <h1 htmlFor="Country">Select a Country </h1>
      <select style={{marginBottom: 100}}>
        <option>Select your country</option>
        {countryData.map((item) => (
          <option>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Universities;
