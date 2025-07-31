import './card.css'
import { MdDelete } from "react-icons/md";
// Interface for card
interface userLinkProps{
  id:number,
  title:string,
  link:string,
  desc:string,
  tags:string
    
}

interface cardProps{
  userlink:userLinkProps,
  onUpdateUserLink:(index: number, updatedLink: userLinkProps) => void,
  onDelete:(index: number) => void
}
// Card component props
const Card = ({userLink, onUpdateUserLink, onDelete} :cardProps) => {
  return (
    <article >
       
     
          {/* Card section styling  */}
        <section className='card_section' >
            {/* Creating a card using text, button and image */}
<div className='card_content' >
        <h1>{userLink.title}</h1>
        <p>{userLink.description}</p>
        <p>{userLink.tags}</p>
       <div className='card-button'>

        <button className='update-button'onClick={() => onUpdateUserLink(userLink.id, userLink)} >Update </button>
          <span className='delete-icon' onClick={() => onDelete(userLink.id)}><MdDelete style={{fontSize:'1rem'}}/></span>
       </div>
       
      </div>


          
      
     

        </section>

    </article>
  )
}

export default Card