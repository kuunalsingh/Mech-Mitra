import { Link } from "@material-ui/core";
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://firebasestorage.googleapis.com/v0/b/mech-mitra-38a35.appspot.com/o/WhatsApp%20Image%202021-07-18%20at%2014.55.02.jpeg?alt=media&token=3b901b92-946e-4bf6-b05c-b6762d5359f3"
          alt=""
        />
        <div className="home_row">
            <Product
              id="1"
              title="Online Bike service Booking"
              price={"500₹"}
              image="https://firebasestorage.googleapis.com/v0/b/mech-mitra-38a35.appspot.com/o/WhatsApp%20Image%202021-07-18%20at%2014.55.02%20(1).jpeg?alt=media&token=deae07ff-64f1-422d-940d-2e8b7960b03d"
            />
          <Product
            id="2"
            title="Online Car service Booking"
            price={"1000₹"}
            image="https://firebasestorage.googleapis.com/v0/b/mech-mitra-38a35.appspot.com/o/WhatsApp%20Image%202021-07-18%20at%2014.55.02%20(2).jpeg?alt=media&token=c2818a66-056f-4ee6-8847-4320afaae74f"
          />
          <Product
            id="3"
            title="Online Electric vehical service Booking"
            price={"comming soon"}
            image="https://firebasestorage.googleapis.com/v0/b/mech-mitra-38a35.appspot.com/o/WhatsApp%20Image%202021-07-18%20at%2014.55.02%20(3).jpeg?alt=media&token=4246bef3-8d77-4cbb-8942-bfee07016e8a"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
