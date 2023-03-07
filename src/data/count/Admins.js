import { useState, useEffect } from 'react';
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import { useTheme } from "@mui/material";

function Admins() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [admins, setAdmins] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/apis/admins')
            .then((response) => {
                return response.json()
            })
            .then((admins) => {
                setAdmins(admins)
            })
    }, [])

    return (
        <>
            <StatBox
                title={admins.length}
                subtitle="Administradores"
                icon={
                    <SupervisorAccountOutlinedIcon
                        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                }
            />
        </>
    );

}

export default Admins