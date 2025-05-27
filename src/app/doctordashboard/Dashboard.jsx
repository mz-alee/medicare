import React from "react";
import Schedule from './components/Schedule';
import UpcomingEvent from './components/upcomingEvent';
import Chart from './components/Chart';
import Article from './components/Article';
import Appointment from './components/Appointments';

const Dashboard = () => {
  return (
    <div className=' flex-col md:flex-row gap-3 py-4 flex-wrap md:justify-between  flex items-center md:items-start'>
      
      <Schedule />
      <UpcomingEvent />
      <Appointment />
      <Chart />
      <Article />
    </div>
  );
};

export default Dashboard;
