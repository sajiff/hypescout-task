import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Moment from "react-moment";
import {
  faSquareFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card-main-container">
      <div className="card-profile-pic-container card-section">
        <img
          className="card-profile-pic"
          src={data.imageURL}
          alt="profile pic"
        />
      </div>
      <div className="card-name-container card-section">
        <span>{data.name}</span>
      </div>
      <div className="card-location-container card-section">
        <FontAwesomeIcon size="xl" className="nav-icons" icon={faLocationDot} />
        <span>{data.location}</span>
      </div>
      <div className="card-joined-on-container card-section">
        <FontAwesomeIcon size="xl" className="nav-icons" icon={faClock} />
        <span>
          Joined On: <Moment format="MMMM Do, YYYY">{data.joined_on}</Moment>
        </span>
      </div>
      <div className="card-socials-container card-section">
        <FontAwesomeIcon
          size="xl"
          className="card-icons"
          icon={faSquareFacebook}
        />
        <FontAwesomeIcon size="xl" className="card-icons" icon={faInstagram} />
        <FontAwesomeIcon size="xl" className="card-icons" icon={faLinkedin} />
        <FontAwesomeIcon size="xl" className="card-icons" icon={faTwitter} />
      </div>
      <div className="card-statistics-container card-section">
        <div className="card-statistics-box">
          <span className="card-statistics-count">{data.followers}</span>
          <span>Followers</span>
        </div>
        <div className="card-statistics-box">
          <span className="card-statistics-count">{data.categories}</span>
          <span>Categories</span>
        </div>
        <div className="card-statistics-box">
          <span className="card-statistics-count">{data.gender}</span>
          <span>Gender</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
