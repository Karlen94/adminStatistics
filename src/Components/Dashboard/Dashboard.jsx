import React, { useState } from "react";
// import {ProgressBar} from 'react-bootstrap';
// import ProgressBar from "../ProgressBar/ProgressBar";
import PercentForm from "../PercentForm/PercentForm";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboardBox}>
      <PercentForm />

      {/*
        iPhone
      <br />
      <ProgressBar done={70} />

        <ProgressBar  now={95} variant="success" />
    <ProgressBar  now={75}  variant="info"/>
    <ProgressBar  now={95} variant="warning" />
  <ProgressBar  now={55}  variant="danger"/>*/}
    </div>
  );
}
