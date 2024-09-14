import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Photo from "../../assets/Photo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 340, border: "1px solid black" }}>
      <CardContent>
        <img src={Photo} width={"62px"} alt="" />
        <p style={{ margin: "1px" }} className="interCase">
          {props.first} {props.last}
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon /> <p>{props.city}</p>
        </div>
        <hr />
        <div className="flex-container">
          <div className="item1">
            <div style={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon />
              {props.contact}
            </div>
            <div>Available on phone</div>
          </div>
          <div className="item2">
            <button className="fetchbtn">Fetch Details</button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
