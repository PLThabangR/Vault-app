import Card from "../../components/card/Card"
import "./createLink.css"
import {  useEffect, useState } from 'react'


  interface userLinkInterface{
    id: number,
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
    //Array to hold filtered userlinks
      const [filteredLinkArray, setFilteredLinkArray] = useState<userLinkInterface[]>([]);
      //search state
      const [search, setSearch] = useState('');
   //title state
   const [title, setTitle] = useState('');
   //link state
   const [link, setLink] = useState('');
   //description state
   const [description, setDescription] = useState('');
   //tags state
   const [tags, setTags] = useState('');


 


//displaysearrh card using link 
const DisplaySearchCard = () =>{
   //search array
    return (
      filteredLinkArray.map((userlink) => (
        //passing the filtered userlink to the card
        <Card key={userlink.id} 
        userlink={userlink}
        onUpdateUserLink={onUpdateUserLink}
        onDelete={onDeleteUserLink}
        
        />
      ))
    )
}

 const DisplayLink=()=>{
    return (
      userlinks.map((userlink) => (
      
        <Card key={userlink.id} 
        userlink={userlink}
        onUpdateUserLink={onUpdateUserLink}
        onDelete={onDeleteUserLink}
        
        />
      ))
    )
 }



//Handle form changes
   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Convert the first letter of the title to uppercase
    const title = event.target.value;
    //Set the title\
     //Convert the first letter of the link to uppercase and join the string
     
    const titleToUppercase = title.charAt(0).toUpperCase() + title.slice(1);  
    setTitle(titleToUppercase);
   };
   const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const link = event.target.value;
   setLink(link);
   };
   const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const description = event.target.value;
    const descriptionToUppercase = description.charAt(0).toUpperCase() + description.slice(1)
     setDescription(descriptionToUppercase);
   };
   const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tags = event.target.value;
    const tagsToUppercase = tags.charAt(0).toUpperCase() + tags.slice(1)

     setTags(tagsToUppercase);
   };

   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTearm = event.target.value;
    setSearch(searchTearm);
   };

   
 
   //Handle form submission when the user clicks the submit button
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     //Do nothing if title, link or description is empty
     if(!title || !link || !description) return alert('Please fill in all fields');
     //create new link object
     const newLink: userLinkInterface  = { 
      //Increase the id by 1 using the length of the userlinks
      id: Math.floor(Math.random() * 1000),
       title, link, description, tags };
     //Add new link to userlinks using the spread operator
     setUserLinks(userlinks=>[...userlinks, newLink]);

     //Save userlinks to localstorage and convert json to a string
     localStorage.setItem('userlinks', JSON.stringify(userlinks));
     //Reset the form values after saving
     setTitle('');
     setLink('');
     setDescription('');
     setTags('');
   }; 
    //Update userlink
    const onUpdateUserLink = (id: number, updatedLink: userLinkInterface) => {

      if(!updatedLink.title || !updatedLink.link || !updatedLink.description) return alert('Please fill in all fields')

   //  event.preventDefault();
     //Map throught the list look for the userlink with the same id
     //Update the userlink   
      //looping thrpugh the userlinks and update the userlink with the same id
     setUserLinks(previousState => previousState.map(userlink => userlink.id === id ? updatedLink : userlink) )
      
    //Reset the form values after saving
     setTitle('');
     setLink('');
     setDescription('');
     setTags('');
    }; 

    //Save userlinks to localstorage
   useEffect(()=>{
     //Save userlinks to localstorage and convert json to a string
     localStorage.setItem('userlinks', JSON.stringify(userlinks));
   },[userlinks])


   //well call this function when the search term changes
   //the use effect changes the ui dynamically as input is typed
  useEffect(()=>{
  //  handleSearchFunction()
  //check if the search is empty or not
    if(search.length > 0){
     // filteredLinkArray =userlinks.filter((userlink) => userlink.tags?.toLowerCase().includes(search.toLowerCase()))
     const filteredLinks = userlinks.filter((userlink) => userlink.tags?.toLowerCase().includes(search.toLowerCase()));
   
     //Set the filtered userlinks to the array
     setFilteredLinkArray(filteredLinks);

    }else{
      setFilteredLinkArray([]);
     }

  },[search.length>0])




  //remove links
   const onDeleteUserLink = (id: number) => {
      //remove the userlink
      setUserLinks(previousState => previousState.filter(userlink => userlink.id !== id));
   };
  
  return (
    <div className="create-container">
        
      {/* Search component */}
         {/* <Search  userlinks={userlinks}/> */}

         <div className="navbar">
          <h1 className='heading'>Link Vaults</h1>
          <div className="search-container">
          <input 
        type="text"
        placeholder="Search url by tag..."
        value={search}
        onChange={(e) => handleSearchChange(e)}
        style={{ padding: "8px", width: "60%" }}
      />
    
       </div>

         </div>
       
  
        {/*submit form  */}
  <form onSubmit={handleSubmit}>
    {/* input fields */}
     <div>
        <input type="text" value={title} onChange={(e)=>handleTitleChange(e)} placeholder='Enter url Title'/>
    </div>

    <div>
        <input type="text" value={link} onChange={(e)=>handleLinkChange(e)} placeholder='Enter url'/>
    </div>
    <div>
        <input type="text" value={description} onChange={(e)=> handleDescriptionChange(e)} placeholder='Enter description'/>
    </div>
    <div>
        <input type="text" value={tags} onChange={(e)=> handleTagsChange(e)} placeholder='Enter tags'/>
    </div>
  
    <button type="submit" value="Submit">Add link</button> 
  </form>

 

    {/* Display userlinks */}

    <div>

      {/* Display userlinks */}
      {userlinks.length>0?(<h2 className='heading-sub'>Links avalable</h2>):(<h2 className='heading-sub'>No links avalable</h2>)}
      
<div className="card-container"> 
  { 
  
        filteredLinkArray.length>0? DisplaySearchCard():DisplayLink()
      

  }
      </div>

    </div>
   

    </div>
  )
}

export default CreateLink