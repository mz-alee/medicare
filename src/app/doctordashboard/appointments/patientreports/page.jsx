"use client";
import React, { useState } from "react";
import Header from "../../components/Header";
import PatientDetailCard from "./components/patientDetailCard";
import PatientReport from "./patientReport";
import PatientHistory from './PatientHistory';

const PatientReports = () => {
  const [pageNum, setPageNum] = useState(0);
  return (
    <div>
      <Header
        pageNum={pageNum}
        setPageNum={setPageNum}
        name="Patient Prescription"
        links={["diagnosis detail", "lab reports", "history"]}
      />
      {pageNum === 0 && (
        <div>
          <PatientDetailCard />
        </div>
      )}
      {pageNum === 1 && <PatientReport />}
      {pageNum === 2 && <PatientHistory />}
    </div>
  );
};

export default PatientReports;
