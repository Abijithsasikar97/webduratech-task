import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContentSelector, ScrollDiv, Loader } from "./styles";
import Section from "../../layout/section";
import Wrapper from "../../layout/wrapper";
import GridComp from "../../layout/GridComp";

export const Launches = () => {
  const [data, setData] = useState({ launches: [] });
  const [loading, setLoading] = useState(true);
  const [paginationLimit, setPaginationLimit] = useState(10);
  const [showClear, setShowClear] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const onSearch = (event) => {
    setLoading(true);
    setShowClear(true);
    event.preventDefault();
    let flightNumber;
    let flightName = event.target.search_input.value;
    data.launches.map((resData) => {
      if (flightName === resData.mission_name) {
        flightNumber = resData.flight_number;
      }
    });
    fetchData(undefined, undefined, flightNumber);
  };

  const clearSearch = () => {
    setLoading(true);
    let inputValue = document.getElementById("search_input");
    inputValue.value = "";
    setShowClear(false);
    fetchData();
  };

  const fetchData = async (pagination = 10, offset = 0, flightNumber = 0) => {
    const result = await axios(
      flightNumber === 0
        ? `http://localhost:8080/launches?offset=${offset}&limit=${pagination}`
        : `http://localhost:8080/launches?flightNumber=${flightNumber}`
    );
    if (pagination > 10) {
      let newArray =
        flightNumber === 0 ? [...data.launches, ...result.data] : [result.data];
      setData({ launches: newArray });
    } else {
      setData({ launches: flightNumber === 0 ? result.data : [result.data] });
    }
    setLoading(false);
  };


  const scrollEvent = (e) => {
    var bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
    if (bottom) {
      let pagination = paginationLimit + 10;
      let offset;
      if(paginationLimit === 10) {
          offset = 0;
      } else {
          offset = paginationLimit;
      }
      setPaginationLimit(pagination);
      setLoading(true);
      setTimeout(() => {
        fetchData(pagination, offset, undefined);
      }, 500);
    }
  };
  return (
    <>
      <Section>
        <ContentSelector>
          <form onSubmit={onSearch}>
            <input id="search_input" placeholder={`Search Launches`} />
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
        <ScrollDiv onScroll={scrollEvent}>
          <Wrapper>
            <GridComp data={data.launches} />
          </Wrapper>
        </ScrollDiv>
      </Section>
    </>
  );
};

export default Launches;
