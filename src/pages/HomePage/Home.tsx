import './home.css'
import CreateLink from '../AddLinkPage/CreateLink'

const Home = () => {
  return (
    <div className='home-container'>
        <h1 className='heading'>Save your links</h1>
      <CreateLink/>
     

    </div>
  )
}

export default Home