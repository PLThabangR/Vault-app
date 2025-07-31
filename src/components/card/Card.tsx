import './card.css'
// Interface for card
interface CardProps{
    title:string,
    link:string,
    description:string,
    tags?:string,
    
}
// Card component props
const Card = ({title,link,description,tags} :CardProps) => {
  return (
    <article>
       
     
          {/* Card section styling  */}
        <section className='card_section' >
            {/* Creating a card using text, button and image */}
<div className='card_content' >
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Read more</button>
       
      </div>


          
      
     

        </section>

    </article>
  )
}

export default Card