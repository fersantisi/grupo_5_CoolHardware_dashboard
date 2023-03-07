import { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function Products() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/apis/products')
      .then((response) => {
        return response.json()
      })
      .then((products) => {
        setProducts(products)
      })
  }, [])

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        colors={colors.grey[100]}
        p="15px"
      >
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          Productos
        </Typography>
      </Box>
      {products.map((product, i) => (
        <Box
          key={`${product.id}-${i}`}
          display="grid"
          gridTemplateColumns="repeat(10, 1fr)"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >

          <Typography
            gridColumn="span 1"
            display='flex'
            justifySelf='flex-start'
            alignSelf='center'
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            {product.id}
          </Typography>
          <Typography 
            gridColumn="span 4"
            display='flex'
            justifySelf='center'
            alignSelf='center'
            color={colors.grey[100]}
          >
            {product.brand.name} {product.name}
          </Typography>
          <Typography 
            gridColumn="span 3"
            display='flex'
            justifySelf='center'
            alignSelf='center'
            color={colors.grey[100]}
          >
            {product.category.name}
          </Typography>

          <Box
            gridColumn="span 2"
            display='flex'
            justifySelf='flex-end'
            alignSelf='center'
            backgroundColor={colors.greenAccent[500]}
            p="5px 10px"
            borderRadius="4px"
            color={colors.grey[900]}
            fontWeight="bold"
          >
            ${product.price}
          </Box>
        </Box>
      ))}
    </>
  );

}

export default Products