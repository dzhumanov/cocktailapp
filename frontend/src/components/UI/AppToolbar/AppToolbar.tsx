import { NavLink } from "react-router-dom";
import { AppBar, Grid, styled, Toolbar, Typography } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../../features/users/usersSlice";
import UserMenu from "./UserMenu";
import AnonymousMenu from "./AnonymousMenu";

const Link = styled(NavLink)({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: "inherit",
  },
});

const AppToolbar = () => {
  const user = useAppSelector(selectUser);
  return (
    <AppBar
      position="sticky"
      sx={{
        mb: 2,
        bgcolor: "#F86060",
        maxWidth: "80%",
        mx: "auto",
        borderBottomRightRadius: "30px",
        borderBottomLeftRadius: "30px",
      }}
    >
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
            <Link to="/">Cocktail app</Link>
          </Typography>
          <Grid item>
            {user ? <UserMenu user={user} /> : <AnonymousMenu />}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
