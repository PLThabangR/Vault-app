import Card from "../../components/card/Card"
import "./createLink.css"
import {  use, useEffect, useState } from 'react'


  interface userLinkInterface{
    id: number,
    title: string,
    link: string,
    description: string,
    tags?: string
}

interface CardProps{
    userLink:userLinkInterface,
    onUpdateUserLink:(index: number, updatedLink: userLinkInterface) => void,
    onDelete:(index: number) => void
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
     const newLink: userLinkInterface  = { 
      //Increase the id by 1 using the length of the userlinks
      id: userlinks.length + 1,
       title, link, description, tags };
     //Add new link to userlinks using the spread operator
     setUserLinks(userlinks=>[...userlinks, newLink]);
     //Reset the form values after saving
     setTitle('');
     setLink('');
     setDescription('');
     setTags('');
   }; 
   
    const onUpdateUserLink = (id: number) => {
   //  event.preventDefault();
     //Map throught the list look for the userlink with the same id
     //Update the userlink
      console.log("Update",id)
     
    
     setUserLinks(previousState => previousState.map(userlink => userlink.id === id ? {...userlink, title, link, description, tags} : userlink) )

  //    //Reset the form values after saving
     setTitle('');
     setLink('');
     setDescription('');
     setTags('');
    }; 
   
   //Save userlinks to localstorage
  useEffect(()=>{
    //Save userlinks to localstorage and convert json to a string
     localStorage.setItem('userlinks', JSON.stringify(userlinks));

     console.log("User link values ",userlinks)

    
     //let the use effect run only when the userlinks change
  },[userlinks])

 //Update userlink



  //remove links
   const onDeleteUserLink = (id: number) => {
      console.log("Delete",id)
      //remove the userlink
      setUserLinks(previousState => previousState.filter(userlink => userlink.id !== id));
   };
  
  return (
    <div className="create-link-container">
        {/*submit form  */}
  <form onSubmit={handleSubmit}>
    {/* input fields */}
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


    {/* Display userlinks */}
   <div className="card-container"> { userlinks.map((userlink) => (
      
        <Card key={userlink.id} 
        userlink={userlink}
        onUpdateUserLink={onUpdateUserLink}
        onDelete={onDeleteUserLink}
        
        />
      ))}
      </div>
d
    </div>
  )
}

export default CreateLink