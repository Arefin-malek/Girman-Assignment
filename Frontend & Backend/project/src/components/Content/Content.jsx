import React from "react";
import Logo from "../../assets/logo.png";
import Search from "../Search/Search";
import BasicCard from "../Card/BasicCard";
import NoData from "../../assets/NoData.png";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, OutlinedInput } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Prof from "../../assets/Prof.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Photo from "../../assets/Photo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import axios from "axios";
const Content = () => {
  const [data, setData] = useState([]);
  const [hasData, setHasData] = useState(false);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalCity, setModalCity] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pl: 2,
    pr: 5,
    pb: 3,
  };
  useEffect(() => {
    if (search.trim() !== "") {
      axios
        .get(
          `http://localhost:8090/api/users/search?first_name=${search}&last_name=${search}`
        )
        .then((response) => {
          setData(response.data);
          setHasData(response.data.length > 0);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    } else {
      axios
        .get("http://localhost:8090/api/users")
        .then((response) => {
          setData(response.data);
          setHasData(response.data.length > 0);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [search]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/users")
      .then((response) => {
        setData(response.data);
        setHasData(response.data.length > 0);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <>
      <div className="content-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Logo} alt="" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box width={"70vh"} margin={5}>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-amount"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Box>
        </div>
        {hasData ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 20px",
              rowGap: "20px",
              columnGap: "20px",
              justifyContent: "center",
            }}
          >
            {search &&
              data.map((item) => (
                <Card
                  key={item.contact_number}
                  sx={{
                    minWidth: 275,
                    maxWidth: 340,
                    border: "1px solid black",
                  }}
                >
                  <CardContent>
                    <img src={Photo} width={"62px"} alt="" />
                    <p style={{ margin: "1px" }} className="interCase">
                      {item.first_name} {item.last_name}
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <LocationOnIcon /> <p>{item.city}</p>
                    </div>
                    <hr />
                    <div className="flex-container">
                      <div className="item1">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <PhoneIcon />
                          {item.contact_number}
                        </div>
                        <div>Available on phone</div>
                      </div>
                      <div className="item2">
                        <button
                          className="fetchbtn"
                          onClick={() => {
                            setModalName(
                              `${item.first_name} ${item.last_name}`
                            );
                            setModalCity(item.city);
                            setModalPhone(item.contact_number);
                            handleOpen();
                          }}
                        >
                          Fetch Details
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={NoData} alt="" />
          </div>
        )}
        {open ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="fetch-det">Fetch Details</p>
              <p className="det-line">
                Here are the details of following employee
              </p>
              <p className="det-cls">Name : {modalName}</p>
              <p className="det-cls">Location : {modalCity}</p>
              <p className="det-cls">Contact : {modalPhone}</p>

              <p className="det-cls">Profile Image :</p>
              <img width={"207px"} src={Prof} alt="" />
              <br />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="closeBtn" onClick={handleClose}>
                  Close
                </button>
              </div>
            </Box>
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default Content;
