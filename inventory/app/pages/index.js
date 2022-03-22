/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { initializeApollo } from '../lib/apolloClient'
import {GET_CATEGORIES} from '../gql/category'
import {GET_FEATURED_OFFERS} from '../gql/offers'
import {GET_FEATURED_PRODUCTS} from '../gql/featuredProducts'
import Category from '../components/Category'
import Container from '../primitives/Container'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import TrendingProducts from '../components/TrendingProducts'
import { useState } from 'react';
import {ArrowLeft, X} from 'react-feather';
import Router from 'next/router';
import Topdropdown from '../components/Nav';

// import { GoogleLoginButton } from "react-social-login-buttons";

const Index = ({categories, featuredOffers, featuredProducts}) => {
  return (
   <>
{/* <GoogleLoginButton onClick={() => Router.push('/auth/google')} /> */}
    <div css = {css`
    background: #f5f5f5;
    `}>
    
    <div css={css` 
    @media (max-width: 1131px) {
      display: none;
    }`}>
    <Topdropdown categories= {categories}/>
    </div>
   
    
   
   
    <Hero offers = {featuredOffers} />
    <Container  paddingTop = '2rem' css = {css`
    @media(max-width: 500px) {
      width: 100%;
    }
    `}>
    
    <FeaturedProducts featured = {featuredProducts}/>
    <TrendingProducts trending = {featuredProducts}/>
    
    </Container>
    </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo()

  const categories = await apolloClient.query({query: GET_CATEGORIES})
  const featuredOffers = await apolloClient.query({query: GET_FEATURED_OFFERS})
  const featuredProducts = await apolloClient.query({
    query: GET_FEATURED_PRODUCTS
  })

  return {
    props: {
      categories: categories.data.allCategories,
      featuredOffers: featuredOffers.data.allOffers,
      featuredProducts: featuredProducts.data.allProducts
    }
  }
}

export default Index;
