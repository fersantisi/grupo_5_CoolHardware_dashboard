import { useState, useEffect } from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";


function Users() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/apis/users')
            .then((response) => {
                return response.json()
            })
            .then((users) => {
                setUsers(users)
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
                    textAlign="center"
                    fontWeight="400"
                >
                    <Box
                        gridColumn="span 10"
                        gridRow="span 13"
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
                            fontSize: "20px"
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
                                gridColumn="span 2"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Nombre
                            </Box>
                            <Box
                                gridColumn="span 2"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Apellido
                            </Box>
                            <Box
                                gridColumn="span 2"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Nombre de usuario
                            </Box>
                            <Box
                                gridColumn="span 2"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                E-Mail
                            </Box>
                            <Box
                                gridColumn="span 1"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Admin
                            </Box>

                        </div>
                        {users.map((user, i) => (
                            <>
                                <Box
                                    gridColumn="span 1"
                                    backgroundColor={colors.primary[300]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {user.id}
                                </Box>
                                <Box
                                    gridColumn="span 2"
                                    backgroundColor={colors.primary[300]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {user.first_name}
                                </Box>
                                <Box
                                    gridColumn="span 2"
                                    backgroundColor={colors.primary[300]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {user.last_name}
                                </Box>
                                <Box
                                    gridColumn="span 2"
                                    backgroundColor={colors.primary[300]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {user.nickname}
                                </Box>
                                <Box
                                    gridColumn="span 2"
                                    backgroundColor={colors.primary[300]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {user.email}
                                </Box>
                                <Box
                                    gridColumn="span 1"
                                    backgroundColor={colors.primary[300]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {user.admin}
                                </Box>
                            </>
                        ))}

                    </Box>


                </Box>
            </Box>
        </>
    );

}

export default Users