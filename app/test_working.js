"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { InputText } from "primereact/inputtext";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import { Button } from "primereact/button";
import SwiperSlideComponent from "./SwiperSlideComponent";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";

const Slide1 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your First Name"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Search"
                value={request.clientFirstName}
                onChange={(e) => {
                  setRequest({ ...request, clientFirstName: e.target.value });
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (request.clientFirstName.length == 0) {
                    toast.current.show({
                      severity: "info",
                      summary: "Info",
                      detail: "Please Enter Your First Name",
                      life: 3000,
                    });
                  } else {
                    handleNextClick();
                  }
                }}
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
    </>
  );
};
const Slide2 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your Last Name"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Search"
                value={request.clientLastName}
                onChange={(e) => {
                  setRequest({ ...request, clientLastName: e.target.value });
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (request.clientLastName.length == 0) {
                    toast.current.show({
                      severity: "info",
                      summary: "Info",
                      detail: "Please Enter Your Last Name",
                      life: 3000,
                    });
                  } else {
                    handleNextClick();
                  }
                }}
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
    </>
  );
};
const Slide3 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your Phone Number"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Search"
                value={request.clientPhone}
                onChange={(e) => {
                  setRequest({ ...request, clientPhone: e.target.value });
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (request.clientPhone.length == 0) {
                    toast.current.show({
                      severity: "info",
                      summary: "Info",
                      detail: "Please Enter Your Phone Number",
                      life: 3000,
                    });
                  } else {
                    handleNextClick();
                  }
                }}
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
    </>
  );
};
const Slide4 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const [clientFirstName, setClientFirstName] = useState("");
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your Event Name"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Type Your Event Name"
                value={request.eventName}
                onChange={(e) => {
                  setRequest({ ...request, eventName: e.target.value });
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (request.eventName.length == 0) {
                    toast.current.show({
                      severity: "info",
                      summary: "Info",
                      detail: "Please Enter Your Event Name",
                      life: 3000,
                    });
                  } else {
                    handleNextClick();
                  }
                }}
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
    </>
  );
};
const Slide5 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const [clientFirstName, setClientFirstName] = useState("");
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your Budget"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Enter Your Estimated Budget"
                value={request.budget}
                onChange={(e) => {
                  setRequest({ ...request, budget: e.target.value });
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  handleNextClick();
                }}
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
    </>
  );
};
const Slide6 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const [clientFirstName, setClientFirstName] = useState("");
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"When is Your Event ?"}</h2>
            <span
              className="p-input-icon-left"
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Calendar
                style={{ width: "100% !important" }}
                value={request.eventTime}
                onChange={(e) => setRequest({ ...request, eventTime: e.value })}
                showTime
                hourFormat="12"
                showIcon
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (request.eventTime.length == 0) {
                    toast.current.show({
                      severity: "info",
                      summary: "Info",
                      detail: "Please Enter Your Event Time",
                      life: 3000,
                    });
                  } else {
                    handleNextClick();
                  }
                }}
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
    </>
  );
};
const Slide7 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const [clientFirstName, setClientFirstName] = useState("");
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your First Name"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Search"
                value={clientFirstName}
                onChange={(e) => {
                  setClientFirstName(e.target.value);
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (clientFirstName.length == 0) {
                    toast.current.show({
                      severity: "info",
                      summary: "Info",
                      detail: "Please Enter Your First Name",
                      life: 3000,
                    });
                  } else {
                    handleNextClick();
                  }
                }}
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
    </>
  );
};
const Slide8 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const [clientFirstName, setClientFirstName] = useState("");
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your First Name"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Search"
                value={clientFirstName}
                onChange={(e) => {
                  setClientFirstName(e.target.value);
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (clientFirstName.length == 0) {
                    toast.current.show({
                      severity: "info",
                      summary: "Info",
                      detail: "Please Enter Your First Name",
                      life: 3000,
                    });
                  } else {
                    handleNextClick();
                  }
                }}
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
    </>
  );
};
const Slide9 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const [clientFirstName, setClientFirstName] = useState("");
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your First Name"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Search"
                value={clientFirstName}
                onChange={(e) => {
                  setClientFirstName(e.target.value);
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (clientFirstName.length == 0) {
                    toast.current.show({
                      severity: "info",
                      summary: "Info",
                      detail: "Please Enter Your First Name",
                      life: 3000,
                    });
                  } else {
                    handleNextClick();
                  }
                }}
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
    </>
  );
};
const Slide10 = ({ request, setRequest, handlePrevClick, handleNextClick }) => {
  const [clientFirstName, setClientFirstName] = useState("");
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src="/big.png" width={300} height={300} alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your First Name"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Search"
                value={clientFirstName}
                onChange={(e) => {
                  setClientFirstName(e.target.value);
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (clientFirstName.length == 0) {
                    toast.current.show({
                      severity: "info",
                      summary: "Info",
                      detail: "Please Enter Your First Name",
                      life: 3000,
                    });
                  } else {
                    handleNextClick();
                  }
                }}
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
    </>
  );
};

export default function App() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };
  const slidesData = [
    {
      title: "Your First Name",
      isRequired: false,
      placeholder: "Enter FirstName",
      icon: MdOutlineDriveFileRenameOutline,
    },
    {
      title: "Your Last Name",
      isRequired: true,
      icon: MdOutlineDriveFileRenameOutline,
    },
    {
      title: "Your Phone Number",
      isRequired: true,
      icon: MdOutlineDriveFileRenameOutline,
    },
    {
      title: "Your Event Title",
      isRequired: true,
      icon: MdOutlineDriveFileRenameOutline,
    },
    {
      title: "Your Budget ",
      isRequired: false,
      icon: MdOutlineDriveFileRenameOutline,
    },
  ];

  const [request, setRequest] = useState({
    clientFirstName: "",
    clientLastName: "",
    clientPhone: "",
    eventName: "",
    budget: "",
    eventTime: "",
    artiestName: "",
    eventLocation: "",
    descreptionEvent: "",
    companyName: "",
    duration: "",
    status: "",
    soundProviderBudget: "",
    markUp: "",
  });

  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlide">
          <Slide1
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Slide2
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Slide3
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Slide5
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Slide6
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Slide7
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Slide8
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Slide9
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Slide10
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Slide4
            request={request}
            setRequest={setRequest}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
