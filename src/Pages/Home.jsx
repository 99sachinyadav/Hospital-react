import React from 'react'
import Header from '../Components/Header'
import SpecialityMemo from '../Components/SpecialityMemo'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'
function Home() {
  return (
    <div>
      <Header/>
      <SpecialityMemo/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home