import React from 'react'
import styled from 'styled-components'
import { categories } from '../data.js'
import { mobile } from "../responsive";
import CategoryItem from './CategoryItem';

const Container = styled.div`
    ${'' /* they are gonna be horizontal */}
    display: flex;
    padding: 20px;
    ${'' /* seperate by the same space */}
    justify-content: space-between; 
    ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    <Container>
        {categories.map((item) => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories