import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CountProducts from "../../data/count/Products";
import CountCategories from "../../data/count/Categories";
import CountBrands from "../../data/count/Brands";
import CountUsers from "../../data/count/Users";
import CountAdmins from "../../data/count/Admins";
import ProductsList from "../../data/list/Products";
import CategoriesList from "../../data/list/Categories";
import LastUser from "../../data/list/Users";
import BrandsList from "../../data/list/Brands";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(10, 1fr)"
        gridAutoRows="150px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CountProducts />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CountCategories />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CountBrands />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CountUsers />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CountAdmins />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <ProductsList />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <CategoriesList />
        </Box>

        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <BrandsList />
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          // overflow="auto"
        >
          <LastUser />
        </Box>



      </Box>
    </Box>
  );
};

export default Dashboard;