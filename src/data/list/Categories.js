import { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function Categories() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/apis/categories/countProducts')
      .then((response) => {
        return response.json()
      })
      .then((categories) => {
        console.log(categories);
        setCategories(categories)
      })
  }, [])

  useEffect(() => {
    
  }, [categories])

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
          Categorías
        </Typography>
      </Box>
      {categories.map((category, i) => (
        <Box
          key={`${category.id}-${i}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Typography color={colors.grey[100]}>
            {category.name}
          </Typography>
          <Box
            backgroundColor={colors.greenAccent[500]}
            p="5px 10px"
            borderRadius="4px"
            color={colors.grey[900]}
            fontWeight="bold"
          >
            {category.productCount}
          </Box>
          
        </Box>
      ))}
    </>
  );

}

export default Categories