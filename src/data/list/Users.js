import { useState, useEffect } from 'react';
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function User() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/apis/users/lastUser')
      .then((response) => {
        return response.json()
      })
      .then((user) => {
        setUser(user)
      })
  }, [])

  return (
    <>
      <div
          style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: `4px solid ${colors.primary[500]}`}}
          // borderBottom={`4px solid ${colors.primary[500]}`}
        >
        {/* display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        colors={colors.grey[100]}
        p="15px"
      > */}
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          Último usuario creado
        </Typography>
      </div>


        <div
          style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '15px', height: '80%'}}
          // borderBottom={`4px solid ${colors.primary[500]}`}
        >

          

          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            {user.id}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {user.nickname}
          </Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {user.email}
          </Typography>

          <img src={user.image} alt='' height='80%'></img>

          
        </div>
    </>
  );

}

export default User