import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import IpoDashboard from '../components/IpoDashboard';
import QuickLinks from '../components/QuickLinks';
import MainboardIpo from '../components/MainboardIpo';
import UpcomingIpo from './DashBoard';

const AdminDashboard = () => {
  return (
    <div className="flex">

      <div className="flex-1 bg-gray-50">
        {/* header.... */}
        <div className='flex flex-col lg:flex-row gap-4 w-full space-x-9'>
            <UpcomingIpo/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
