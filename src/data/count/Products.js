import { useState, useEffect } from 'react';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

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
      <StatBox
        title={products.length}
        subtitle="Productos"
        icon={
          <ReceiptOutlinedIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </>
  );

}

export default Products