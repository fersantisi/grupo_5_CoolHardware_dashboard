import { useState, useEffect } from 'react';
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { useTheme } from "@mui/material";

function Categories() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/apis/categories')
      .then((response) => {
        return response.json()
      })
      .then((categories) => {
        setCategories(categories)
      })
  }, [])

  return (
    <>
      <StatBox
        title={categories.length}
        subtitle="Categorías"
        icon={
          <CategoryOutlinedIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </>
  );

}

export default Categories