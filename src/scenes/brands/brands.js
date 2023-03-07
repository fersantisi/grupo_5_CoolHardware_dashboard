import { useState, useEffect } from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PieChart from '../../components/PieChart'


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
            <Box m="20px">
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(6, 1fr)"
                    gridAutoRows="50px"
                    gap="10px"
                    textAlign="center"

                >
                    <Box
                        gridColumn="span 3"
                        gridRow="span 9"
                        display="grid"
                        gridTemplateColumns="repeat(3, 1fr)"
                        gridAutoRows="50px"
                        gap="10px"
                        overflow="auto"
                        p="0 10px"
                    >
                        <div style={{
                            position: "sticky",
                            top: "0",
                            gridColumn: "span 3",
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gridAutoRows: "50px",
                            gap: "10px",
                        }}>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                ID
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Marca
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                textAlign="center"
                            >
                                Cantidad de productos
                            </Box>
                        </div>

                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[200]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                ID
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[200]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Marca
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[200]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                textAlign="center"
                            >
                                Cantidad de productos
                            </Box>
                            
                    </Box>


            <Box 
                gridColumn="span 3"
            >
                <Box height="70vh">
                    <PieChart />
                </Box>
            </Box>
                </Box>
            </Box>
        </>
    );

}

export default Brands