import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContentSelector, Loader } from "./styles";
import Section from "../../layout/section";
import Wrapper from "../../layout/wrapper";
import GridComp from "../../layout/GridComp";

export const Rockets = () => {
  const [data, setData] = useState({ rockets: [] });
  const [loading, setLoading] = useState(true);
  const [showClear, setShowClear] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const onSearch = (event) => {
    setShowClear(true);
    setLoading(true);
    event.preventDefault();
    let rocketId;
    let rocketName = event.target.search_input.value;
    data.rockets.map((resData) => {
      if (rocketName === resData.rocket_name) {
        rocketId = resData.rocket_id;
      }
    });
    fetchData(rocketId);
  };

  const clearSearch = () => {
    setLoading(true);
    let inputValue = document.getElementById("search_input");
    inputValue.value = "";
    setShowClear(false);
    fetchData();
  };

  const fetchData = async (rocketId) => {
    const result = await axios(
      rocketId === undefined
        ? `http://localhost:8080/rockets`
        : `http://localhost:8080/rockets?rocketId=${rocketId}`
    );
    setData({ rockets: rocketId === undefined ? result.data : [result.data] });

    setLoading(false);
  };

  return (
    <>
      <Section>
        <ContentSelector>
          <form onSubmit={onSearch}>
            <input id="search_input" placeholder={`Search rockets by name`} />
            {showClear && (
              <button onClick={() => clearSearch()} className="clear">
                X
              </button>
            )}
            <button type="submit">Submit</button>
          </form>
        </ContentSelector>
      </Section>
      <Section>
        {loading && <Loader>loading....</Loader>}
        <Wrapper>
          <GridComp data={data.rockets} />
        </Wrapper>
      </Section>
    </>
  );
};

export default Rockets;
