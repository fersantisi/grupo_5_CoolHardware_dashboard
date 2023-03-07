import { useState, useEffect } from 'react';
import { Box, useTheme } from "@mui/material";
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
            <Box m="20px">
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(10, 1fr)"
                    gridAutoRows="50px"
                    gap="10px"

                >
                    <Box
                        gridColumn="span 10"
                        gridRow="span 9"
                        display="grid"
                        gridTemplateColumns="repeat(10, 1fr)"
                        gridAutoRows="50px"
                        gap="10px"
                        overflow="auto"
                        p="0 10px"
                    >
                        <div style={{
                            position: "sticky",
                            top: "0",
                            gridColumn: "span 10",
                            display: "grid",
                            gridTemplateColumns: "repeat(10, 1fr)",
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
                                gridColumn="span 3"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Nombre
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Categoría
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Stock
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Precio
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Descuento
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Oferta
                            </Box>
                        </div>
                        {products.map((product, i) => (
                            <>
                                <Box
                                    gridColumn="span 1"
                                    backgroundColor={colors.primary[200]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {product.id}
                                </Box>
                                <Box
                                    gridColumn="span 1"
                                    backgroundColor={colors.primary[200]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {product.brand.name}
                                </Box>
                                <Box
                                    gridColumn="span 3"
                                    backgroundColor={colors.primary[200]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {product.name}
                                </Box>
                                <Box
                                    gridColumn="span 1"
                                    backgroundColor={colors.primary[200]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {product.category.name}
                                </Box>
                                <Box
                                    gridColumn="span 1"
                                    backgroundColor={colors.primary[200]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {product.stock}
                                </Box>
                                <Box
                                    gridColumn="span 1"
                                    backgroundColor={colors.primary[200]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {product.price}
                                </Box>
                                <Box
                                    gridColumn="span 1"
                                    backgroundColor={colors.primary[200]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {product.discount}
                                </Box>
                                <Box
                                    gridColumn="span 1"
                                    backgroundColor={colors.primary[200]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {product.price - product.price * product.discount / 100}
                                </Box>
                            </>
                        ))}
                    </Box>


                </Box>
            </Box>
        </>
    );

}

export default Products