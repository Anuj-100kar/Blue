import React from 'react'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import AdminDashboard from './pages/AdminDashboard'
import DashBoard from './pages/DashBoard'
import Home from './pages/Home'
import Career from './pages/Career'
import Product from './pages/Product'
import News from './pages/News';
import Contact from './pages/Contact'
import Community from './pages/Community'
import AboutUs from './pages/AboutUs'
import BlogPage from './pages/BlogPage'
import SectorPage from './pages/SectorPage'
import MutualFundPage from './pages/MutualFundPage'
import StockSchoolPage from './pages/StockSchoolPage'
import Technical from './pages/Technical'
import BasicsTechnical from './pages/BasicsTechnical'
import Error from './pages/Error'
import HomeScreen from './pages/HomeScreen';
import AllBrokers from './pages/AllBrokers'
import SharkInvestor from './pages/SharkInvestor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './layout/UserLayout'
import AdminLayout from './layout/AdminLayout'
import IpoInformation from './pages/IpoInformation'
import Candlestick from './pages/Candlestick'
import ChartPatterns from './pages/ChartPatterns'
import TechnicalIndicator from './pages/TechnicalIndicator'
import MagicOfMovingAverage from './pages/MagicOfMovingAverage'
import Analytics from './pages/Analytics'
import IpoLayout from './layout/IpoLayout.jsx'
import UpcomingIpos from './pages/UpcomingIpos'
import OngoingIpos from './pages/OngoingIpos'
import ListedIpos from './pages/ListedIpos'
import BrokersCompare from './pages/BrokersCompare'
import UserSignUp from './pages/UserSignUp'
import UserDashboard from './pages/UserDashboard'
import MarketOverview from './pages/MarketOverview'
import AccountSettings from './pages/AccountSettings'
import DashboardLayout from './layout/DashboardLayout'
import ScrollTop from './components/ScrollTop'


const App = () => {
  return (

    <>
      <ScrollTop/>
      <Routes>
        <Route path='/user' element={<DashboardLayout/>}>

        
        <Route path='sign-up' element={<UserSignUp />} />
        <Route path='dashboard' element={<UserDashboard />} />
        <Route path='market-overview' element={<MarketOverview />} />
        <Route path='account-setting' element={<AccountSettings />} />
        </Route>

        <Route path='/' element={<UserLayout />}>
          <Route index element={<HomeScreen />} />


          <Route path='home' element={<Home />} />
          <Route path='career' element={<Career />} />

          <Route path='community' element={<Community />} />
          <Route path='products' element={<Product />} />
          <Route path='contact-us' element={<Contact />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='blogs' element={<BlogPage />} />
          <Route path='sector' element={<SectorPage />} />
          <Route path='mutual-fund' element={<MutualFundPage />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='compare-brokers' element={<BrokersCompare />} />
          <Route path='brokers' element={<AllBrokers />} />
          <Route path='live-news' element={<News />} />
          <Route path='shark-investor' element={<SharkInvestor />} />

          <Route path='stock-school' element={<StockSchoolPage />} />
          <Route path='stock-school/technical-analysis' element={<Technical />} />
          <Route path='stock-school/technical-analysis/basics-technical-analysis' element={<BasicsTechnical />} />
          <Route path='stock-school/technical-analysis/candlestick-chart-and-patterns' element={<Candlestick />} />
          <Route path='stock-school/technical-analysis/chart-patterns' element={<ChartPatterns />} />
          <Route path='stock-school/technical-analysis/technical-indicators' element={<TechnicalIndicator />} />
          <Route path='stock-school/technical-analysis/magic-of-moving-average' element={<MagicOfMovingAverage />} />

          <Route path='ipo' element={<IpoLayout />}>
            
            <Route path='upcoming-ipo' element={<UpcomingIpos/>} />
            <Route path='ongoing-ipo' element={<OngoingIpos />} />
            <Route path='listed-ipo' element={<ListedIpos />} />

          </Route>

        </Route>

        <Route path='login' element={<Login />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='forgot-password' element={<ForgotPassword />} />

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='dashboard' element={<DashBoard />} />
          <Route path='register' element={<IpoInformation />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </>

  )
}

export default App
