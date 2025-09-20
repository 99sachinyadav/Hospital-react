 
import Header from '../Components/Header'
import SpecialityMemo from '../Components/SpecialityMemo'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'
 
 import Chatboticon from '../Components/Chatboticon'
function Home() {
  return (
    <div>
      <Header/>
      <Chatboticon  className="w-96" />
      <SpecialityMemo/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home