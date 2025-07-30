import React from 'react'
import ComparisonSection from '../components/ComparisonSection'
import RatingSection from '../components/RatingSection'
import FinancialCharts from '../components/FinancialCharts'
import ChargesTable from '../components/ChargesTable'
import ComplaintsShareHolding from '../components/ComplaintsShareHolding'

const BrokersCompare = () => {
  return (
   <div className="max-w-6xl mx-auto px-4 py-6">
    <RatingSection />
      <ComparisonSection />
      <ChargesTable />
      <ComplaintsShareHolding />
      <FinancialCharts  />
      
      
    </div>
  )
}

export default BrokersCompare
