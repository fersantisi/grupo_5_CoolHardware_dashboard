import { useState, useEffect } from 'react';
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useTheme } from "@mui/material";

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
        <StatBox
            title={users.length}
            subtitle="Usuarios"
            icon={
              <PersonOutlineOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
    </>
  );

}

export default Users