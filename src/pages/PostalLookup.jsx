import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPostal } from "../redux/ActionCreators";

const PostalLookup = () => {
  const postalData = useSelector((state) => state.postalInfo);

  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  console.log("111", searchPostal);

  const handleSubmit = async (event) => {
    if (event.key === "Enter") {
      dispatch(searchPostal(code));
    }
  };

  return (
    <>
      <div className="postal">
        <h1>Please Enter a Postal Code to begin Search</h1>
      </div>
      <input
        className="postal-input"
        type="text"
        placeholder="Enter Code"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
        onKeyUp={handleSubmit}
      />
      <div>
        {postalData && (
          <>
            <p>Country: {postalData["post code"]}</p>
            <p>Country: {postalData.country}</p>
            <p>Abbreviation: {postalData["country abbreviation"]}</p>
            <p>Place: {postalData.places[0]["place name"]}</p>
            <p>Longitude: {postalData.places[0].longitude}</p>
            <p>State: {postalData.places[0].state}</p>
            <p>Latitude{postalData.places[0]["state abbreviation"]}</p>
            <p>Latitude{postalData.places[0].latitude}</p>
          </>
        )}
      </div>
    </>
  );
};

export default PostalLookup;
