import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUniversity, countryDropDown } from "../redux/ActionCreators";

const Universities = () => {
  const postalData = useSelector((state) => state.getUniversity);
  const countryData = useSelector((state) => state.countrySelect);

  const dispatch = useDispatch();

  //   const allState = useSelector((state) => state);

  // const [country, setCountry] = useState("");

  useEffect(() => {
    dispatch(fetchUniversity());
    dispatch(countryDropDown());
  }, []);

  useEffect(() => {
    console.log(postalData);
  }, [postalData]);

  useEffect(() => {
    console.log(countryData);
  }, [countryData]);
  return (
    <div>
      <div>
        <h1>Limit of two items</h1>
        {postalData &&
          postalData.slice(0, 2).map((item) => (
            <div key={item.id}>
              <h1 className="university-list">{item.country}</h1>
              <p>{item.name}</p>
            </div>
          ))}
      </div>
      <hr />
      <h1>Post begins here</h1>
      <div className="university-post"></div>
      <label htmlFor="Country">Select a Country </label>
      <div>
        <select name="counrty">
          {countryData &&
            countryData
              .slice(0, 2)
              .map((item) => <option key={item.id} value={item.name}></option>)}
        </select>
      </div>
    </div>
  );
};

export default Universities;
