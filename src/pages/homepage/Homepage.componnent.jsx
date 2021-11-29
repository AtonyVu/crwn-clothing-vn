import React from "react";
import { useParams } from "react-router-dom";
import "./Homepage.style.scss";
import Directory from "../../Components/Directory/Directory.component.jsx";
export default function Homepage() {
  const id = useParams();
  console.log(id);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}
