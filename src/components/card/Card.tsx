import './card.css'
import { MdDelete } from "react-icons/md";
// Interface for card
interface userLink{
 id: number,
    title: string,
    link: string,
    description: string,
    tags?: string
    
}
// Card component props
interface cardProps{
  userlink:userLink,
  onUpdateUserLink:(index: number, updatedLink: userLink) => void,
  onDelete:(index: number) => void
}
// Card component props
const Card = ({userlink, onUpdateUserLink, onDelete} :cardProps) => {
  return (
    <article >
                {/* Card section styling  */}
        <section className='card_section' >
            {/* Creating a card using text, button and image */}
<div className='card_content' >
        <h1>{userlink.title}</h1>
        <p>{userlink.description}</p>
        <p>{userlink.tags}</p>
       <div className='card-button'>
    {/* Passing the userlink to the onUpdateUserLink function which is on createlink */}
        <button className='update-button'onClick={() => onUpdateUserLink(userlink)} >Update </button>
          <span className='delete-icon' onClick={() => onDelete(userlink.id)}><MdDelete style={{fontSize:'1rem'}}/></span>
       </div>
       
      </div>


          
      
     

        </section>

    </article>
  )
}

export default Card