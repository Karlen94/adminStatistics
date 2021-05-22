import React, { useState } from "react";
import {ProgressBar} from 'react-bootstrap'
import styles from "./dashboard.module.css";

export default function Dashboard() {


  return (
    <div className={styles.dashboardBox}>



    <ProgressBar  now={95} variant="success" />
    <ProgressBar  now={75}  variant="info"/>
    <ProgressBar  now={95} variant="warning" />
    <ProgressBar  now={55}  variant="danger"/>
    </div>
  );
}
