import React, { useState } from 'react'
import useConversation from '../../zutand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch] =useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error('Search term must be atleast 3 characters long')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else toast.error("No such user found");
  }
  return (
    <form>
<label className=" mx-2 input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>    
    
    </form>
  )
}

export default  SearchInput;