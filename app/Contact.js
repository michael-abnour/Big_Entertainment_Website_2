"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { InputText } from "primereact/inputtext";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Container, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Button } from "primereact/button";
import SwiperSlideComponent from "./SwiperSlideComponent";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import { toast } from "react-hot-toast";

const Slide1 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your First Name"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Enter First Name"
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
                    toast.error("Please Enter Your First Name");
                  } else {
                    handleNextClick();
                  }
                }}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Slide2 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  // const toast = useRef(null);
  return (
    <>
      {/* <Toast ref={toast} /> */}

      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your Last Name"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Enter Last Name"
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
                    toast.error("Please Enter Your Last Name");
                  } else {
                    handleNextClick();
                  }
                }}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Slide3 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your Phone Number"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Enter Phone Number"
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
                    toast.error("Please Enter Your Phone Number");
                  } else {
                    handleNextClick();
                  }
                }}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Slide4 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  const [clientFirstName, setClientFirstName] = useState("");
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
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
                    toast.error("Please Enter Event Name");
                  } else {
                    handleNextClick();
                  }
                }}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Slide5 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  const [clientFirstName, setClientFirstName] = useState("");
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
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
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Slide6 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  const [clientFirstName, setClientFirstName] = useState("");

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
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
                    toast.error("Please Enter Event Time");
                  } else {
                    handleNextClick();
                  }
                }}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Slide7 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  const [clientFirstName, setClientFirstName] = useState("");

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"The Artist You Want ?"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Enter The Artist You Want"
                value={request.artiestName}
                onChange={(e) =>
                  setRequest({ ...request, artiestName: e.target.value })
                }
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
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const Slide8 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your Event Location"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Enter Event Location"
                value={request.eventLocation}
                onChange={(e) =>
                  setRequest({ ...request, eventLocation: e.target.value })
                }
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (request.eventLocation.length == 0) {
                    toast.error("Please Enter Event Location");
                  } else {
                    handleNextClick();
                  }
                }}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Slide9 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Any Comments ?"}</h2>

            <InputTextarea
              id="username"
              value={request.descreptionEvent}
              onChange={(e) =>
                setRequest({ ...request, descreptionEvent: e.target.value })
              }
              rows={5}
              cols={25}
              style={{ width: "90%" }}
            />
            <div
              style={{
                display: "flex",
                gap: "10px",
                width: "100%",
              }}
            >
              <Button
                onClick={(e) => {
                  handleNextClick();
                }}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Slide10 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  const toast = useRef(null);

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your Company Name ?"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Enter Company Name"
                value={request.companyName}
                onChange={(e) => {
                  setRequest({ ...request, companyName: e.target.value });
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (request.companyName.length == 0) {
                    toast.error("Please Enter Company Name");
                  } else {
                    handleNextClick();
                  }
                }}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
const Slide11 = ({
  request,
  setRequest,
  handlePrevClick,
  handleNextClick,
  swiperInstance,
}) => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" />
          </Grid>
          <Grid className={"input_grid"} item xs={12} md={6} sx={{ pl: 5 }}>
            <h2>{"Your Event Duration ?"}</h2>
            <span className="p-input-icon-left">
              <MdOutlineDriveFileRenameOutline />
              <InputText
                required
                placeholder="Enter Event Duration"
                value={request.duration}
                onChange={(e) => {
                  setRequest({ ...request, duration: e.target.value });
                }}
                style={{ width: "100%" }}
              />
            </span>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Button
                onClick={(e) => {
                  if (request.duration.length == 0) {
                    toast.error("Please Enter Event Duration");
                  } else {
                    handleNextClick();
                  }
                }}
                label="Next"
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const FinalSlide = ({
  request,
  handleNextClick,
  handlePrevClick,
  done,
  setIsDone,
}) => {
  const max600 = useMediaQuery("(max-width:600px)");
  const currentDate = request.eventTime;
  const [loading, setLoading] = useState(false);
  const formattedDate = currentDate.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    const response = await axios
      .post("https://bigapi.abnourgroup.com/api/request/AddRequest", request)
      .then((res) => {
        setLoading(false);
        setIsDone(true);
        console.log(res);
      })
      .catch((er) => {
        setLoading(false);
        console.log(er);
      });
  };
  return (
    <>
      <Container
        sx={{
          maxHeight: "100%",
          padding: "10px",
        }}
        className="request_data_container"
      >
        <Grid container rowGap={"32px"}>
          <Grid item xs={12} md={6}>
            <img src="/big.png" alt="big ent" className="big_logo" />
          </Grid>
          <Grid
            className={"input_grid"}
            style={{ paddingLeft: "0px" }}
            paddingLeft={{
              sm: 0,
              md: 3,
            }}
            item
            xs={12}
            md={6}
            sx={{ pl: 5 }}
          >
            <h2 style={{ paddingLeft: max600 ? "0px" : "40px" }}>
              Your Request Data:
            </h2>
            <div
              className="request_data"
              style={{ paddingLeft: max600 ? "0px" : "40px" }}
            >
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                First Name: <span>{request.clientFirstName}</span>
              </div>
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                Last Name: <span>{request.clientLastName}</span>
              </div>
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                Phone Number: <span>{request.clientPhone}</span>
              </div>
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                Estimated Budget: <span>{request.budget}</span>
              </div>
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                Event Name: <span>{request.eventName}</span>
              </div>
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                {/* {console.log(request.eventTime)} */}
                Event Time: <span>{formattedDate}</span>
              </div>
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                Artist Name: <span>{request.artiestName}</span>
              </div>
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                Event Location: <span>{request.eventLocation}</span>
              </div>
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                Company Name: <span>{request.companyName}</span>
              </div>
              <div
                className="data-item"
                style={{
                  width: max600 ? "100%" : "90%",
                  fontSize: max600 ? "17px" : "24px",
                }}
              >
                Event Duration: <span>{request.duration}</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                width: "100%",
                justifyContent: max600 ? "center" : "flex-start",
              }}
            >
              <Button
                label="Submit"
                icon="pi pi-check"
                loading={loading}
                // onClick={load}
                onClick={(e) => {
                  handleSubmit();
                }}
                style={{ width: "45%" }}
              />
              <Button
                label="Back"
                onClick={handlePrevClick}
                severity="danger"
                style={{ width: "45%" }}
              />
            </div>{" "}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default function App() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [done, setIsDone] = useState(false);

  const initializeAOS = () => {
    AOS.init({
      // Customize your AOS configuration here
      duration: 800,
      easing: "ease-in-out",
    });
  };

  useEffect(() => {
    initializeAOS();
  }, []);

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

  const [request, setRequest] = useState({
    clientFirstName: "",
    clientLastName: "",
    clientPhone: "",
    eventName: "",
    budget: 0,
    eventTime: "",
    artiestName: "N/A",
    eventLocation: "",
    descreptionEvent: "",
    companyName: "",
    duration: "",
    status: "NewRequest",
    soundProviderBudget: 0,
    markUp: 0,
  });

  const swiperOptions = {
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping", // add this class to elements that should not be swiped
  };

  return (
    <>
      {done ? (
        <div className="done_message" data-aos="fade-up">
          <img
            style={{
              maxWidth: "350px",
            }}
            src="/done.svg"
            alt="done"
          />

          <h2>
            Thanks For Submitting, Your Request Have Been Submitted And We will
            Contact You Soon
          </h2>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="resubmitBtn"
          >
            Create Another Request
          </button>
        </div>
      ) : (
        <Swiper
          direction={"vertical"}
          {...swiperOptions}
          pagination={{
            clickable: false,
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
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide1
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide2
              swiperInstance={swiperInstance}
              request={request}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide3
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide4
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide5
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide6
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide7
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide8
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide9
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide10
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <Slide11
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide swiper-no-swiping">
            <FinalSlide
              done={done}
              setIsDone={setIsDone}
              request={request}
              swiperInstance={swiperInstance}
              setRequest={setRequest}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            />
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
}
