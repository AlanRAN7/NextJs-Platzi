import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from '@components/Card/Card';
import { Grid, Box } from '@mui/material';
import styles from "./index.module.css";
const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(()=>{
    window
    .fetch("/api/avo/")
    .then(response => response.json())
    .then(({data, length}) =>{
      setProductList(data)
    })
  },[])
  return (
    <>
    {/* <Navbar /> */}
     <h1>Hola Platzi!</h1> 
{productList.map((product) => (
  <div>{product.name}
  <Card propertyItem = {product}/>
  </div>
))}
  <Grid container className = {styles.backgroundGrid}>
  <Grid Item>
    <Box bgcolor="primary.light" p={2}>Item 1</Box>
  </Grid>
  <Grid Item>
    <Box bgcolor="primary.light" p={2}>Item 2</Box>
  </Grid>
  <Grid Item>
    <Box bgcolor="primary.light" p={2}>Item 3</Box>
  </Grid>
  <Grid Item>
    <Box bgcolor="primary.light" p={2}>Item 4</Box>
  </Grid>
  </Grid>
    </>
  );
};

export default Home;
