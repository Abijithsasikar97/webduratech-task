import React from "react";
import styled from "styled-components";
import LaunchCard from "../components/lauch-card";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GridComp = (props) => {
  const { data } = props;
  
  return (
    <Grid>
      {data.map((item, index) => (
        <LaunchCard
          key={index.toString()}
          image={
            item.links === undefined
              ? item.flickr_images[0]
              : item.links.mission_patch_small
          }
          title={item.mission_name || item.rocket_name}
          description={item.details || item.description}
        />
      ))}
    </Grid>
  );
};

export default GridComp;
