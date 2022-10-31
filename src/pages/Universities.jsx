import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUniversity } from "../redux/ActionCreators";

const Universities = () => {
  const postalData = useSelector((state) => state.getUniversity);
  const dispatch = useDispatch();

  const allState = useSelector((state) => state);

  // const [university, setUniversity] = useState([]);
  // const [country, setCountry] = useState("");

  useEffect(() => {
    dispatch(fetchUniversity());
  }, []);

  useEffect(() => {
    console.log(postalData);
  }, [postalData]);
  return (
    <div>
      <div>
        <h1 style={{ color: "orange" }}>Limit of two items</h1>
        {postalData &&
          postalData.slice(0, 2).map((item) => (
            <div key={item.id}>
              <hi
                style={{
                  color: "green",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {item.country}
              </hi>
              <p
                style={{
                  color: "red",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {item.name}
              </p>
            </div>
          ))}
      </div>
      <hr />
      <h1
        style={{
          color: "green",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Post begins here
      </h1>
      <div
        style={{
          color: "green",
          justifyContent: "center",
          display: "flex",
          marginBottom: 20,
        }}
      ></div>
      {/* <Postal /> */}
    </div>
  );
};

export default Universities;
