import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ContentSelector, ScrollDiv, Loader } from "./styles";
import Section from "../../layout/section";
import Wrapper from "../../layout/wrapper";
import GridComp from "../../layout/GridComp";

export const LaunchRocket = (props) => {
  const [data, setData] = useState({ callData: [] });
  const [loading, setLoading] = useState(true);
  const [paginationLimit, setPaginationLimit] = useState(10);
  const [showClear, setShowClear] = useState(false);
  const searchInput = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const onSearch = (event) => {
    setLoading(true);
    setShowClear(true);
    event.preventDefault();
    let flightNumber;
    let flightName = searchInput.current.value;
    if (props.endpoint === "/launches") {
      data.callData.map((resData) => {
        if (flightName === resData.mission_name) {
          flightNumber = resData.flight_number;
        }
      });
    } else {
      data.callData.map((resData) => {
        if (flightName === resData.rocket_name) {
          flightNumber = resData.rocket_id;
        }
      });
    }
    if (
      flightNumber != "" &&
      flightNumber != null &&
      flightNumber != undefined
    ) {
      fetchData(undefined, undefined, flightNumber);
    } else {
      setLoading(false);
      setShowClear(false);
    }
  };

  const clearSearch = () => {
    setLoading(true);
    searchInput.current.value = "";
    setShowClear(false);
    fetchData();
  };

  const fetchData = async (pagination = 10, offset = 0, flightNumber) => {
    let searchKey =
      props.endpoint === "/launches" ? `flightNumber` : `rocketId`;
    const result = await axios(
      flightNumber === undefined
        ? `${props.endpoint}?offset=${offset}&limit=${pagination}`
        : `${props.endpoint}?${searchKey}=${flightNumber}`
    );
    if (pagination > 10) {
      let newArray =
        flightNumber === undefined
          ? [...data.callData, ...result.data]
          : [result.data];
      setData({ callData: newArray });
    } else {
      setData({
        callData: flightNumber === undefined ? result.data : [result.data],
      });
    }
    setLoading(false);
  };

  const scrollEvent = (e) => {
    var bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
    if (bottom) {
      let pagination = paginationLimit + 10;
      let offset;
      if (paginationLimit === 10) {
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
            <input ref={searchInput} placeholder={`Search Launches`} />
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
            <GridComp data={data.callData} />
          </Wrapper>
        </ScrollDiv>
      </Section>
    </>
  );
};

export default LaunchRocket;
