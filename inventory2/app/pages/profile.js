/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useQuery } from '@apollo/client';
import Container from '../primitives/Container';
import { useState, useEffect, useRef } from "react";
import { useMutation } from '@apollo/client';
import { useAuth } from "../lib/authentication";
import { LogOut } from "react-feather";
import { UPDATE_USER } from '../gql/users';
import { Button, Field, Label, Input } from '../primitives/forms';

import {

  LogIn,
  ArrowRight,
  
  
} from "react-feather";
import { colors } from "../theme";
import { GET_USERS } from '../gql/users';


const onChange = handler => e => handler(e.target.value);

const Profile =()=>{
  const [vertinav, setVertinav] = useState(1);
  const { isAuthenticated, user, signout } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);


    const { data, loading, error } = useQuery(GET_USERS, { skip: !user ,variables: { userId: user && user.id } });
    if(data!=null){
      console.log(data.allUsers);
    }
   
    const handleSubmit = UpdateUser => event => {
      event.preventDefault();
      UpdateUser({skip: !user, variables: {usersId: user && user.id , name, email, password,  mobile } });
    };


    const handleSignin = async () => {
      alert('profile updated');
    };
    
    const [UpdateUser, { error: mutationError }] = useMutation(UPDATE_USER, {
      onCompleted: handleSignin,
    });
    console.log(mutationError);
    return (
      <>
      
        <div css={{background:'#f1f3f6'}}>
        <Container  paddingTop = '2rem' css = {css`
        padding: 5rem;
        padding-top:1rem;
        @media(max-width: 500px) {
          width: 100%;
        }
        `}>

        <div css={css`
        width: 90%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
       ]
                 
        `}>

            <div css={{ padding:'1rem',paddingBottom:'0', margin:'1rem',marginBottom:'0',width:'25%'}}>


                <div css={{padding:'0.4rem', display:'flex',backgroundColor:'#d6d6d6', 
                background:'white',
                boxShadow: '0 1px 3px  rgba(0, 0, 0, 0.4), 0 -12px 15px 0 rgba(0, 0, 0, 0.1)',
                
                }}>
                    <div css={{paddingTop:'0rem'}}><img src="public/avatars/useravatar.png" width="60" height="60" ></img>
                            
                    </div>
                    <div css={{textAlign:'center' , paddingTop:'0.5rem', paddingLeft:'0.5rem',fontSize:'120%', marginBottom:'0'}}>
                        <div>   
                            Logged in as
                        </div>
                        {isAuthenticated ? (
                            <>
                        <div css={{fontSize:'150%',lineHeight:'1'}}>
                            {user.name.split(" ")[0]}
                        </div>
                        </>): (
                            <div css={{fontSize:'150%',lineHeight:'1'}}>
                            {" "}
                            Log In
                            <LogIn />
                        </div>
                        )}
                    </div>
                    
                </div>

                <div css={{display:'flex', flexDirection:'column',marginTop:'2rem' ,
                background:'white',
                boxShadow: '0 1px 3px  rgba(0, 0, 0, 0.4), 0 -12px 15px 0 rgba(0, 0, 0, 0.1)',
                cursor:'pointer',
                  }}>

                <div css={css`
                        color: #5c5857;
                        border-bottom: 1px solid #a39e9d;
                        padding : 1rem;
                        text-align:center;
                      
                `}
                onClick={() => setVertinav(1)}
                ><h3 css={{display: 'inline'}}>Profile Informations</h3> 
                <div css={{display:'inline' ,  marginLeft:'1rem'}}>
                  {vertinav==1?(<><ArrowRight/></>):(<></>)}  
                </div>
                </div> 

                  <div css={{
                  color:'#5c5857',
                  borderBottom:'1px solid #a39e9d',
                  padding:'1rem',
                  textAlign:'center',
                  
                    }}
                    onClick={() => setVertinav(2)}
                    ><h3 css={{display: 'inline',}}>My Orders</h3>
                    <div css={{display:'inline' , marginLeft:'1rem'}}>
                         {vertinav==2?(<><ArrowRight/></>):(<></>)}  
                    </div>
                    </div>
                   
                <div css={{
                  color:'#5c5857',
                    borderBottom:'1px solid #a39e9d',
                    padding:'1rem',
                    textAlign:'center'
                    }}
                    onClick={() => {
                      setVertinav(3);
                     
                    }}
                    >
                    <h3 css={{display:'inline'}}>Address</h3>
                    <div css={{display:'inline' , marginLeft:'1rem'}}>
                        { vertinav==3?(<><ArrowRight/></>):(<></>)}  
                     </div>
                    
                    </div>    

                  <div css={{
                  color:'#5c5857',
                  borderBottom:'1px solid #a39e9d',
                  padding:'1rem',
                  textAlign:'center'
                     }}
                     onClick={() => setVertinav(4)}
                     >
                     <h3 css={{display:'inline'}}>My chats</h3> 
                     <div css={{display:'inline' , marginLeft:'1rem'}}>
                        { vertinav==4?(<><ArrowRight/></>):(<></>)}  
                      </div>
                 

                     </div>

                <div css={{
                            color:'#5c5857',
                            padding:'1rem',                  
                            textAlign:'center',
                            borderBottom:'1px solid #a39e9d',
                     }}
                     onClick={() => setVertinav(5)}
                     
                     ><h3  css={{display:'inline' ,}}>Wishlist</h3>

                     <div css={{display:'inline' , marginLeft:'1rem'}}>
                        {vertinav==5?(<><ArrowRight/></>):(<></>)}  
                      </div>
                 
                </div>
                
                     
               
                      <div css={{
                        color:'#5c5857',
                        padding:'1rem',                  
                        textAlign:'center',
                        borderBottom:'1px solid #a39e9d',
                         }}
                        onClick={() => setVertinav(6)}
                        
                        ><h3  css={{display:'inline' ,}}>My Coupons</h3>

                        <div css={{display:'inline' , marginLeft:'1rem'}}>
                            {vertinav==6?(<><ArrowRight/></>):(<></>)}  
                          </div>
                    
                        </div>
    
                      <div css={{
                            color:'#5c5857',
                            padding:'1rem',                  
                            textAlign:'center',
                     }}
                     onClick={() => setVertinav(7)}
                     
                     ><h3  css={{display:'inline' ,}}>Contact Us</h3>

                     <div css={{display:'inline' , marginLeft:'1rem'}}>
                        {vertinav==7?(<><ArrowRight/></>):(<></>)}  
                      </div>
                 
                     </div>
                        
                     

                </div>
            </div>



            <div css={{flex:'2', 
            background:'white',
            boxShadow: '0 1px 3px  rgba(0, 0, 0, 0.4), 0 -12px 15px 0 rgba(0, 0, 0, 0.1)',
             width:"100%",
            height:'100%' ,
            padding:'1rem', paddingLeft:'2rem',     
            marginTop:'2rem',
            }}>

             {
                vertinav==1?(<> 
                  
                  <div ><h2>Personel Information</h2></div>
              
                  <div>
                  {mutationError && <p css={{ color: colors.red }}>The email provided is already in use </p>}
                  {errorState && <p css={{ color: colors.red }}>An unknown error has occurred</p>}
                    
                  <form css = {css`width: 100%; position: relative; `}  noValidate onSubmit={handleSubmit(UpdateUser)}>
                         
                         <Field>    
                        
                         <Label htmlFor="name">Name</Label>
                         <Input
                           autoComplete="name"
                           autoFocus
                           disabled={isLoading || !isAuthenticated}
                           id="name"
                           onChange={onChange(setName)}
                           placeholder="full name"
                           required
                           type="text"
                           value={name}
                         />
                         
                          
                        </Field>
                        
                        
   
                        
                         <Field>
                         <Label htmlFor="email">Email</Label>
                         <Input
                           autoComplete="email"
                           disabled={isLoading || !isAuthenticated}
                           id="email"
                           onChange={onChange(setEmail)}
                           placeholder="you@awesome.com"
                           required
                           type="text"
                           value={email}
                         />
                       </Field>

                     
                       <Field>    
                       <Label htmlFor="name">Password</Label>
                       <Input
                         autoComplete="password"
                        
                         disabled={isLoading || !isAuthenticated}
                         id="password"
                         onChange={onChange(setPassword)}
                         placeholder="new password"
                         required
                         type="text"
                         value={password}
                       />
                      </Field>
                     
                  

                         
                      
                         
                           
                         
                      <div>
                         <Field>
                          <Label htmlFor="mobile">Mobile</Label>
                         <Input
                           autoComplete="mobile"
                           disabled={isLoading || !isAuthenticated}
                           id="mobile"
                           onChange={onChange(setMobile)}
                           placeholder="Mobile No"
                           required
                           type="text"
                           value={mobile}
                         />
                       </Field>
                           
                      </div>
                           
                    
                     <div css={{margin:'2rem',}}>
                     {isLoading ? (
                      <Button disabled>Creating account...</Button>
                    ) : (
                      <Button type="submit" style={{backgroundColor:'#fc5e14'}}>Sign up</Button>
                    )}
                    
                      </div>
                       
                           
                           
                     </form>
         
                   </div>
                   
               
                  
                  </>) :
                  (<> 
                    <div></div>  
                    </>)
             }
             
           




             {
              vertinav==2?(<> 
                
                <div ><h2>My Orders</h2></div>
            
                <div>
                   
                 </div>
                 
             
                
                </>) :
                (<> 
                  <div></div>  
                  </>)
           }
           
           



           {
            vertinav==3?(<> 
              
              <div ><h2>Address</h2></div>
             
                {data!=null ? (
                  <>
                    {data.allUsers[0].address.map( (add)=>{
                      return(
                        <div key={add.id} css={css`
                          border: 1px solid rgb(0, 0, 0,0.3);
                          border-collapse: collapse;
                          margin-bottom: 5px;
                          padding: 2rem;
                          padding-top: 0.3rem;
                          padding-bottom:  0.3rem;
                        `}>
                        
                        <p css={css`
                         background-color:#8f8f8f; 
                         width: 7%;
                         text-align:center;
                         font-size: 90%;
                         border-radius: 8%;
                         color:white;
                        `}> {add.addressType}</p>

                       <p css={{display:'inline', marginRight:'1rem', fontSize:'110%', fontWeight:'bold'}} > {add.receiverName}</p> <p css={{display:'inline' , marginRight:'1rem'}}> {add.mobile}</p> <p  css={{display:'inline'}}>{add.alternatePhoneNum}</p> 
                       <p>{add.addresstext} </p> 
                       <p>{add.landmark} {add.locality} {add.district} <span css={{textTransform:'lowercase',textTransform:'capitalize'}}>{add.state} </span> - <span css={{fontWeight:'bold',}}>{add.Pincode}</span> </p>
                        
                       
                        
                        </div>
                      )
                     
                    })}
                   
                  </>

                ) :(
                  
                  <div>
                  </div>
                  
                  )}


                <div>
                  

                </div>
                

           
              
              </>) :
              (<> 
                <div></div>  
                </>)
         }
         
       
           

         {
          vertinav==4?(<> 
            
            <div ><h2>My Chats</h2></div>
        
            <div>
               
             </div>
             
         
            
            </>) :
            (<> 
              <div></div>  
              </>)
       }
       
      




                {
                  vertinav==5?(<> 
                    
                    <div ><h2>Wishlist</h2></div>
                
                    <div>
                    
          
                    </div>
                    
                
                    
                    </>) :
                    (<> 
                      <div></div>  
                      </>)
              }

              {
                vertinav==6?(<> 
                  
                  <div ><h2>My Coupons</h2></div>
                  <div><h3>Available Coupons</h3></div>
                  <div>
                  
        
                  </div>
                  
              
                  
                  </>) :
                  (<> 
                    <div></div>  
                    </>)
            }

            {
              vertinav==7?(<> 
                
                <div ><h2>Contact Us</h2></div>
            
                <div>
                
      
                </div>
                
            
                
                </>) :
                (<> 
                  <div></div>  
                  </>)
          }
              
            


           
          </div>  


        </div>

        </Container>
        <div css={{marginTop:"-4rem", padding:'0', width:'100%'}}>
        <img src="public/avatars/profilefooter.png" width="100%" />
        </div>
        
        </div>
        </>
    )
}



export default Profile;
