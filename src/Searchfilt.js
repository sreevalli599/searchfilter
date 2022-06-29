import React,{useState} from 'react';
import JSONData from './MOCKJSON.json';
export default function Searchfilt(){
const[searchTerm,setSearchTerm]=useState("");
return(
    <div>
       <input type="text" id="search" name="Search" placeholder="Search..." onChange={event=>{setSearchTerm(event.target.value)}}/>
       {JSONData.filter((val)=>{
        if(searchTerm==""){
            return val;
        }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
        }
       }).map((val,key)=>{
        return (
       <div key={key}>
        <p>{val.first_name}</p>
        </div>
       );
       })}
    </div>
)
}