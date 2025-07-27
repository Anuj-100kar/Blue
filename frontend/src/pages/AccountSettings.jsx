import React from 'react'
import AccountHeader from '../components/AccountHeader'
import InfoSection from '../components/InfoSection'
import { assets } from '../assets/assets'

const AccountSettings = () => {
  return (
    <div className="flex bg-[#0F172A] min-h-screen">
      
      <div className="flex-1 flex flex-col">
        <AccountHeader />

        <div className="p-6 space-y-6">
          {/* Profile Info */}
          <div className="flex items-center gap-4 text-white">
            <img
              src={assets.prof}
              className="w-16 h-16 rounded-full object-cover"
              alt="Profile"
            />
            <div>
              <p>Account Number: <span className="font-semibold">4453728992</span></p>
              <button className="text-red-500 text-sm mt-1 hover:underline">Deactivate Account</button>
            </div>
          </div>

          <InfoSection
            title="Personal Information"
            fields={[
              { label: 'First Name', value: 'Pratik' },
              { label: 'Last Name', value: 'Patil' },
              { label: 'Date of Birth', value: 'December 17, 1990' },
              { label: 'Email Address', value: 'pratikpatil@hotmail.com' },
              { label: 'Phone Number', value: '(123) 456-7890' },
              { label: 'Username', value: 'wittrtradebotrain' },
            ]}
          />

          <InfoSection
            title="Address"
            fields={[
              { label: 'Country', value: 'India' },
              { label: 'City/State', value: 'Pune, MH' },
              { label: 'Street Address', value: '4517 Kothrud' },
            ]}
          />

          <InfoSection
            title="Employer"
            fields={[
              { label: 'Company Name', value: 'Designer Inc.' },
              { label: 'City/State', value: 'Chicago, Illinois' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
