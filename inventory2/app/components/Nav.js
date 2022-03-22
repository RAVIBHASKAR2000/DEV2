/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {useState, useEffect, useRef } from 'react'
import Link from "next/link";

const Topdropdown = ({categories}) => {
 var sub_cat;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subid, setSubId] = useState();
  console.log(categories);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const drop = useRef();


  useEffect(() => {
    const dropdown = drop.current;
    if (dropdownOpen) {
      dropdown.style.visibility= "visible";
     
     
    } else {
      dropdown.style.transition="0.5s"
      dropdown.style.visibility= "hidden";
      
    }
  }, [dropdownOpen]);


  

 const onMouseEnter = (catid)=> {
  
  setDropdownOpen(true); 
  
  console.log(catid);
   setSubId(catid);
   console.log(subid);
//  sub_cat= categories.filter((cat)=> cat.parent_category!=null&& cat.parent_category.id==catid );
//   console.log(sub_cat);
  }  

 
 

  const subcategory = categories.map((category)=>{
    
      if(categories.parent_category!=null&&categories.parent_category.id==subid){
        return (
        <div>
        <ul
        css={css` list-style-type: none;
        
        `}>
  
         <style jsx>{`
         
               li {
                 padding: 8px 16px;
                 border-bottom: 1px solid #e5e5e5;
                 cursor:pointer;
                   }
               li:last-child {
                   border-bottom: none;
             }
               li:hover {
                   background-color: #e5e5e5;
                   color: white;
             }
           `}</style>
        
        <li><a  href="#Create Page">{categories.parent_category.title}</a></li>
       
         </ul>
       
        </div>
        )
      }
    
  });
    
    


  const onMouseLeave = ()=> {
    setDropdownOpen(false);
  }
  return (
      <div>
    
      <div css={css`
      
    
      display: flex;
      align-items: center;
      justify-content: center;
     
      flex-wrap	:nowrap;
      `}>

         
      {categories.map(cat => {
        return (
          <div>
            <div key={cat.id} onMouseOver= {() => onMouseEnter(cat.id)} onMouseLeave={onMouseLeave} isOpen={dropdownOpen} toggle={toggle} css={css`background:white;
             padding:0.4rem;
             font-size:100%;
              font-style:italic ;
              width: 100%;
              margin-right:3rem;
              border-bottom: 2px solid white;
              cursor:pointer;
              text-align:center;
              &:hover {
                color: #eb4034;
                border-bottom: 2px solid red;
                

              }
            `}> {cat.title}
            </div> 

          
        </div>
       
            );
          })}


          
          
        </div>

        
        
        
        
        <div  ref={drop} 
        css={
          css`
          margin:0;
          left:30%;
           background-color: white;     
           position: absolute;
           z-index:20; 
           display:flex;
           box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
           border-radius: 0 0  8px 8px;
           visibility:hidden;
            `
      } onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave}
       isOpen={dropdownOpen} toggle={toggle}>
      
      {subcategory} 
       
    
     


       
          <div>
          <ul
          css={css` list-style-type: none;
                  padding-right:4rem;
          
           `}>
 
           <style jsx>{`
           
                 li {
                   padding: 8px 16px;
                   border-bottom: 1px solid #e5e5e5;
                   cursor:pointer;
                     }
                 li:last-child {
                     border-bottom: none;
               }
                 li:hover {
                     background-color: #e5e5e5;
                     color: white;
               }
             `}</style>
 
          <li><a  href="#Create Page">Create Page</a></li>
          <li><a href="#Manage Pages">Manage Pages</a></li>
          <li><a href="#Create Ads">Create Ads</a></li>
          <li><a href="#Manage Ads">Manage Ads</a></li>
          <li><a href="#Activity Logs">Activity Logs</a></li>
          <li><a href="#Setting">Setting</a></li>
          <li><a href="#Log Out">Log Out</a></li>
           </ul>
       
          </div>
          
        </div> 
        
        
</div>
  );
}

export default Topdropdown;