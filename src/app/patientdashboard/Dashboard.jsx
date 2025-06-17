import React from "react";
import Chart from "./components/Chart";
import BasicInformation from "./components/informationCard";
import ReminderCard from "./components/reminderCard";
import PhysicalCondition from './components/physicalConditionCard';
import DiagnosisHistoryCard from './components/diagnosisHistoryCard';
import ReportsCard from './components/reportsCard';

const Dashboard = () => {
  return (
    <div className="w-full   ">
      {/* <Header name="Dashboard" /> */}

      <div className=" flex-col md:flex-row gap-3 py-4 flex-wrap  justify-between  flex items-center md:items-start">

        <BasicInformation />
        <ReminderCard />
        <PhysicalCondition/>
        <Chart />
        <DiagnosisHistoryCard/>
        <ReportsCard/>
      </div>
    </div>
  );
};

export default Dashboard;
