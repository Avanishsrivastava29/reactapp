import { Box, styled, Typography } from "@mui/material";
import AddEventButton from "./bookbutton";
import displaySummary from "./summary";
 







const Grid = styled(Box)`
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

const Profile = styled(Box)`
marginTop:10px;
 background: #ADD8E6;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const UserName = styled(Typography)`
  font-weight: bold;
`;

const Score = styled(Typography)`
  font-size: 16px;
`;






const UserData = ({ users }) => {
  return (
    <Grid>
      {users.map((curUser) => {
        const { id, name, summary, image } = curUser.show;
        const { score } = curUser;



        return (
          <Profile key={id}>
            <img src={image} alt={name} style={{ borderRadius: 10 }} />
            <UserName>  {name}</UserName>
            <Score> score = {score}</Score>
              <a href={<displaySummary users={users}/>}>summary</a>
              <AddEventButton/>
             





          </Profile>
        );
      })}
    </Grid>
  );
};

export default UserData;
