import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from '../../assets/images/logo.svg'
import logoBk from '../../assets/images/logo-bk.svg'

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
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
                style={{ cursor: "pointer", marginRight: '10px' }}
            />
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="10px" alignSelf="center" height="50px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;