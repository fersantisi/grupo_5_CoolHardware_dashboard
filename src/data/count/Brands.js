import { useState, useEffect } from 'react';
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { useTheme } from "@mui/material";

function Brands() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/apis/brands')
      .then((response) => {
        return response.json()
      })
      .then((brands) => {
        setBrands(brands)
      })
  }, [])

  return (
    <>
      <StatBox
        title={brands.length}
        subtitle="Marcas"
        icon={
          <GridViewOutlinedIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </>
  );

}

export default Brands