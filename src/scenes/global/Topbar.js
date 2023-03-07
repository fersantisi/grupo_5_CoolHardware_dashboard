import { Box, IconButton, useTheme } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
import { tokens } from "../../theme";
import {InputBase} from "@mui/material";
// import LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon  from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon  from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import SearchIcon  from "@mui/icons-material/Search";
import logo from '../../assets/images/logo.svg'
import logoBk from '../../assets/images/logo-bk.svg'

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    // const colorMode = useContext(ColorModeContext)

    return(
        <Box display="flex" justifyContent="space-between" p={2}>
            
            {/* Searchbar */}
                <img
                    alt="profile-user"
                    width="200px"
                    src={theme.palette.mode === 'dark' ? (
                        logo
                    ) : (
                        logoBk
                    )}
                    style={{ cursor: "pointer", marginRight:'10px' }}
                />
                <Box display="flex" backgroundColor = {colors.primary[400]} borderRadius="10px" alignSelf="center" height="50px">
                    <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
                    <IconButton type="button" sx={{p: 1}}>
                        <SearchIcon />
                    </IconButton>
                </Box>


            {/* Icons */}
            {/* <Box display="flex">
                <IconButton style={{width: "72.78px"}}>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                </IconButton>   
                <IconButton style={{width: "72.78px"}}>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton style={{width: "72.78px"}}>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton style={{width: "72.78px"}}>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box> */}
        </Box>      
    )
}

export default Topbar;