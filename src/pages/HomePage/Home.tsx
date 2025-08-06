import './home.css'
import CreateLink from '../AddLinkPage/CreateLink'

const Home = () => {
  return (
    // Container for the home page
    <div className='home-container'>
      // Heading
        <h1 className='heading'>Link Vaults</h1>
      <CreateLink/>
     
   

    </div>
  )
}

export default Home