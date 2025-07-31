import './card.css'
import { MdDelete } from "react-icons/md";
// Interface for card
interface CardProps{
    id:number,
    title:string,
    link:string,
    description:string,
    tags?:string,
    
}
// Card component props
const Card = ({id,title,link,description,tags} :CardProps) => {
  return (
    <article >
       
     
          {/* Card section styling  */}
        <section className='card_section' >
            {/* Creating a card using text, button and image */}
<div className='card_content' >
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{tags}</p>
       <div className='card_button'>

        <button className='update-button' >Update </button>
          <span className='delete-icon'><MdDelete /></span>
       </div>
       
      </div>


          
      
     

        </section>

    </article>
  )
}

export default Card