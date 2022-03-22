/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useQuery } from '@apollo/client';
import Container from '../primitives/Container';
import { useState, useEffect, useRef } from "react";
import { initializeApollo } from '../lib/apolloClient';
import Category from '../components/Category'
import {GET_CATEGORIES} from '../gql/category';

import {

  LogIn,
  ArrowRight,
  
  
} from "react-feather";
import { colors } from "../theme";



const Categorypage =({categories})=>{

   
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
            
        <p css={css` 
        font-size:150%;
        
        
        `}>Category </p>
        <Category categories={categories}/>
       
        

       
      




               
           
         

      

        </Container>
        
        </div>
        </>
    )
}


export const getServerSideProps = async (context) => {
    const apolloClient = initializeApollo()
  
    const categories = await apolloClient.query({query: GET_CATEGORIES})
   
    return {
      props: {
        categories: categories.data.allCategories,
       
      }
    }
  }
  



export default Categorypage;
