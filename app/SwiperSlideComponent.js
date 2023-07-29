import { Container, Grid } from "@mui/material";
import Image from "next/image";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const SwiperSlideComponent = ({
  title,
  isRequired,
  description,
  Icon,
  idx,
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <SwiperSlide className="swiperSlide" key={idx}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{title}</h2>
            <span className="p-input-icon-left">
              <Icon />
              <InputText
                required
                placeholder="Search"
                onChange={(e) => {}}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                disabled={isRequired ? true : false}
                onClick={handleNextClick}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                onClick={handlePrevClick}
                label="Back"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </SwiperSlide>
  );
};

export default SwiperSlideComponent;
