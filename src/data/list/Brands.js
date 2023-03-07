import { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function Brands() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/apis/brands/countProducts')
      .then((response) => {
        return response.json()
      })
      .then((brands) => {
        setBrands(brands)
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
          Marcas
        </Typography>
      </Box>
      {brands.map((brands, i) => (
        <Box
          key={`${brands.id}-${i}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Typography color={colors.grey[100]}>
            {brands.name}
          </Typography>
          <Box
            backgroundColor={colors.greenAccent[500]}
            p="5px 10px"
            borderRadius="4px"
            color={colors.grey[900]}
            fontWeight="bold"
          >
            {brands.productCount}
          </Box>
          
        </Box>
      ))}
    </>
  );

}

export default Brands