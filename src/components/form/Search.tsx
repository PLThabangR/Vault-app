import React, { useState } from 'react'
import { use } from 'react';
import Card from '../card/Card';


interface userLinkInterface{
  id: number,
    title: string,
    link: string,
    description: string,
    tags?: string
  
}

interface userlinkProps{
  userlink:userLinkInterface[]
}
const Search = (userlinks:userlinkProps) => {
    //declare a state to hold the search term
   const [search, setSearch] = useState("");
    //declare a array to hold the filtered userlinks
   //const filteredUserLinks :any = userlinks.userlink.filter((userlink) => userlink.title.toLowerCase().includes(search.toLowerCase()));

   
  return (
    <div>

<input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />

    <div>
      {/* {filteredUserLinks.map((userlink) => ( */}
      {/* {filteredUserLinks.map((ulink) => (
        <div key={ulink.id}>
        <h1>{ulink.title}</h1>
        <p>{ulink.description}</p>

        <p>{ulink.tags}</p>
        </div>
          
      ))} */}
    </div>

    </div>
  )
}

export default Search