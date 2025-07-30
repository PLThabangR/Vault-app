import "./createLink.css"
import { use, useEffect, useState } from 'react'


  interface userLinkInterface{
    title: string,
    link: string,
    description: string,
    tags?: string
}
const CreateLink = () => {
  //State to handle user values
   const [userlinks, setUserLinks] = useState<userLinkInterface[]>((()=>{
    //Get userlinks from localstorage
    const userLinks = localStorage.getItem('userlinks');
    //Parse userlinks if they exist or return an empty array
    return userLinks ? JSON.parse(userLinks) : [];
   }))
  
   //title state
   const [title, setTitle] = useState('');
   //link state
   const [link, setLink] = useState('');
   //description state
   const [description, setDescription] = useState('');
   //tags state
   const [tags, setTags] = useState('');

//Handle form changes
   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setTitle(event.target.value);
   };
   const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setLink(event.target.value);
   };
   const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setDescription(event.target.value);
   };
   const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setTags(event.target.value);
   };
 
   //Handle form submission when the user clicks the submit button
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     //create new link object
     const newLink = { title, link, description, tags };
     //Add new link to userlinks using the spread operator
     setUserLinks([{...userlinks, newLink}]);
     //Reset the form values
     setTitle('');
     setLink('');
     setDescription('');
     setTags('');
   }; 
   
   //Save userlinks to localstorage
  useEffect(()=>{
    //Save userlinks to localstorage and convert json to a string
     localStorage.setItem('userlinks', JSON.stringify(userlinks));
     console.log(userlinks)
     //let the use effect run only when the userlinks change
  },userlinks)
  
  return (
    <div className="create-link-container">
        
  <form onSubmit={handleSubmit}>
  
     <div>
        <input type="text" value={title} onChange={(e)=>handleTitleChange(e)} placeholder='Enter Title'/>
    </div>

    <div>
        <input type="text" value={link} onChange={(e)=>handleLinkChange(e)} placeholder='Enter link'/>
    </div>
    <div>
        <input type="text" value={description} onChange={(e)=> handleDescriptionChange(e)} placeholder='Enter description'/>
    </div>
    <div>
        <input type="text" value={tags} onChange={(e)=> handleTagsChange(e)} placeholder='Enter tags'/>
    </div>
  
    <button type="submit" value="Submit">Save</button> 
  </form>


    </div>
  )
}

export default CreateLink