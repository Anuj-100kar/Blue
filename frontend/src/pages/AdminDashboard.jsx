import React from 'react';
import IpoDashboard from '../components/IpoDashboard';
import QuickLinks from '../components/QuickLinks';
import MainboardIpo from '../components/MainboardIpo';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminDashboard = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    const token=localStorage.getItem('adminToken');
    if(!token)
      navigate('/admin/ipo/login');
  },[]);
  return (
    
    <div className="flex">

      <div className="flex-1 bg-gray-50">
        {/* header.... */}
        <div className='flex flex-col lg:flex-row gap-4 w-full '>
            <IpoDashboard/>
            <QuickLinks/>
            <MainboardIpo/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
