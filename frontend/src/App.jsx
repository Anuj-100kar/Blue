import React from 'react'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import AdminDashboard from './pages/AdminDashboard'
import UpcomingIpo from './pages/UpcomingIpo'
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
import UserLayout from './layout/Userlayout'
import AdminLayout from './layout/AdminLayout'
import IpoInformation from './pages/IpoInformation'
import Candlestick from './pages/Candlestick'
import ChartPatterns from './pages/ChartPatterns'
import TechnicalIndicator from './pages/TechnicalIndicator'
import MagicOfMovingAverage from './pages/MagicOfMovingAverage'
import Analytics from './pages/Analytics'
import IpoLayout from './layout/IpoLayout'

const App = () => {
  return (

    <>
      <Routes>
        <Route path='/bluestock' element={<UserLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path='home' element={<Home />} />
          <Route path='home/career' element={<Career />} />

          <Route path='community' element={<Community />} />
          <Route path='home/products' element={<Product />} />
          <Route path='home/contact-us' element={<Contact />} />
          <Route path='home/community' element={<Community />} />
          <Route path='home/about-us' element={<AboutUs />} />
          <Route path='home/blogs' element={<BlogPage />} />
          <Route path='home/sector' element={<SectorPage />} />
          <Route path='home/mutual-fund' element={<MutualFundPage />} />
          <Route path='home/analytics' element={<Analytics />} />
          <Route path='home/stock-school' element={<StockSchoolPage />} />
          <Route path='home/stock-school/technical-analysis' element={<Technical />} />
          <Route path='home/stock-school/technical-analysis/basics-technical-analysis' element={<BasicsTechnical />} />
          <Route path='home/stock-school/technical-analysis/candlestick-chart-and-patterns' element={<Candlestick />} />
          <Route path='home/stock-school/technical-analysis/chart-patterns' element={<ChartPatterns />} />
          <Route path='home/stock-school/technical-analysis/technical-indicators' element={<TechnicalIndicator />} />
          <Route path='home/stock-school/technical-analysis/magic-of-moving-average' element={<MagicOfMovingAverage />} />
          <Route path='brokers' element={<AllBrokers />} />
          <Route path='live-news' element={<News />} />
          <Route path='ipo'>
            <Route path='upcoming-ipo' element={<UpcomingIpo />} />
            <Route path='register' element={<IpoInformation />} />
          </Route>
        </Route>


        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='ipo' element={<IpoLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
          </Route>
          <Route path='upcoming-ipo' element={<UpcomingIpo />} />
          <Route path='register' element={<IpoInformation />} />

        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </>

  )
}

export default App
