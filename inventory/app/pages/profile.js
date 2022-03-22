/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Container from '../primitives/Container';

import { useAuth } from "../lib/authentication";
import { LogOut } from "react-feather";
import {

  LogIn,
  
} from "react-feather";
import { colors } from "../theme";
const Profile =()=>{
    
  const { isAuthenticated, user, signout } = useAuth();

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

                <div css={{
                        color:'#5c5857',
                        borderBottom:'1px solid #a39e9d',
                        padding:'0',
                        textAlign:'center'
                }}><h3>Profile Informations</h3></div> 

                  <div css={{
                  color:'#5c5857',
                  borderBottom:'1px solid #a39e9d',
                  padding:'0',
                  textAlign:'center'
                    }}><h3>My Orders</h3></div>
                   
                <div css={{
                  color:'#5c5857',
                    borderBottom:'1px solid #a39e9d',
                    padding:'0',
                    textAlign:'center'
                    }}><h3>Payment</h3></div>    

                  <div css={{
                  color:'#5c5857',
                  borderBottom:'1px solid #a39e9d',
                  padding:'0',
                  textAlign:'center'
                     }}><h3>My chats</h3> </div>

                <div css={{
                            color:'#5c5857',
                          
                            padding:'0',
                            textAlign:'center',
                     }}><h3>Wishlist</h3></div>
                
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

              <div ><h4>Personel Information</h4></div>
              
               <div>
                  <form onSubmit={()=>{}} css = {css`width: 100%; position: relative; `}>
                         
                      <span css={{marginRight:'1rem'}}>
                          
                        <input  css={css`
                          border: 2px solid #e1e4e8;
                          padding: 0.6rem 1.3rem ;
                          padding-right: 2rem;
                          box-sizing: border-box;
                          background: whitesmoke;
                          width: 40%;
                           outline: none;
                          border-radius: 5px;
                          &:focus {
                            border: 2px solid ${colors.theme};
                          }
                        `}
                        type="text"
                        placeholder="Fisrt Name"
                        
                        />
                      </span>
                         

                      <span>
                        <input  css={css`
                        border: 2px solid #e1e4e8;
                        padding: 0.6rem 1.3rem;
                        padding-right: 2rem;
                        box-sizing: border-box;
                        background: whitesmoke;
                        width: 40%;
                         outline: none;
                        border-radius: 5px;
                        &:focus {
                          border: 2px solid ${colors.theme};
                        }
                      `}
                      type="text"
                      placeholder="Fisrt Name"
                      
                      />

                      </span>
                      <div>
                          <h4>Your Gender</h4>
                          
                          <input id='male' type="radio" name="over" value=""/><label css={css`margin-left: 1rem; margin-right:1rem`} for="male" >Male</label>
                          
                          <input id='female' type="radio" name="over" value=""/><label css={css`margin-left: 1rem`} for="female">Female</label>

                      </div>

                      <div>
                        <h4>Email Address</h4>
                        <input  css={css`
                        border: 2px solid #e1e4e8;
                        padding: 0.6rem 1.3rem;
                        padding-right: 2rem;
                        box-sizing: border-box;
                        background: whitesmoke;
                        width: 40%;
                         outline: none;
                        border-radius: 5px;
                        &:focus {
                          border: 2px solid ${colors.theme};
                        }
                      `}
                      type="email"
                      placeholder="Email"
                      
                      />
                        
                      </div>

                      
                      <div>
                        <h4>Mobile Number</h4>
                        <input  css={css`
                        border: 2px solid #e1e4e8;
                        padding: 0.6rem 1.3rem;
                        padding-right: 2rem;
                        box-sizing: border-box;
                        background: whitesmoke;
                        width: 40%;
                         outline: none;
                        border-radius: 5px;
                        &:focus {
                          border: 2px solid ${colors.theme};
                        }
                      `}
                      type="tel"
                      placeholder="Mobile Number"
                      
                      />
                        
                      </div>
                        
                      <div css={{margin:'2rem',}}>
                      <button type="submit" value="submit" css={css`padding: 0.7rem ;
                      padding-right: 0.9rem ;
                      padding-left: 0.9rem ;
                       width: 15%; cursor:pointer;
                       background-color:#e85d04;
                       border:none;
                       border-radius: 8px;
                       color:white;
                       `} 
                       >
                       
                        Save
                       </button>
                      </div>
                    
                        
                        
                  </form>
      
                </div>
                
            
           
           
           
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
