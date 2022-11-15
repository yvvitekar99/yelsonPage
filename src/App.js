import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import { useState } from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
function App() {
  const id = 1;
  const [time, setTime] = useState(1);
  return (
    <Grid container>
      <Grid className="navbar" item lg={12}>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <WifiIcon sx={{ color: "RGB(35, 90, 152)" }} />
          <Typography sx={{ marginLeft: "5px", color: "RGB(234, 182, 136)" }}>
            Wifi Based Logger
          </Typography>
        </Stack>
        <Stack sx={{ width: "10em" }}>
          <img src="https://ik.imagekit.io/ngamedata/yelson_O16XOzXm2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668306970828" />
        </Stack>
      </Grid>
      <Grid
        item
        lg={12}
        className="grid-item"
        // sx={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        //   padding: "25px 25px",
        // }}
      >
        <Stack>
          <Typography>{`Device Id ${id}`}</Typography>
        </Stack>
        <Stack className="grid-stack" sx={{ flexDirection: "row" }}>
          <Typography sx={{ marginRight: "2em" }}>Step Time</Typography>
          <Select sx={{width:"5em"}} value={time} onChange={(e) => setTime(e.target.value)}>
            <MenuItem value={1}>1 s</MenuItem>
            <MenuItem value={5}>5 s</MenuItem>
            <MenuItem value={10}>10 s</MenuItem>
          </Select>
          <Button
            variant="contained"
            sx={{ textTransform: "none", width: "6em", marginLeft: "2em" }}
          >
            Start
          </Button>
        </Stack>
      </Grid>
      <Grid item lg={12} className="grid-item">
        <Card className="card" sx={{ borderRadius: "1em", boxShadow: 3 }}>
          <Typography
            sx={{ color: "RGB(35, 90, 152)", padding: "0.5em 0.5em 0 0.5em" }}
          >
            Time Stamp
          </Typography>
          <Typography sx={{ padding: "1em" }}>DD/MM/YYYY</Typography>
        </Card>
        <Card className="card" sx={{ borderRadius: "1em", boxShadow: 3 }}>
          <Typography
            sx={{ color: "RGB(35, 90, 152)", padding: "0.5em 0.5em 0 0.5em " }}
          >
            Counts
          </Typography>
          <Typography sx={{ padding: "1em" }}>5</Typography>
        </Card>
        <Card className="card" sx={{ borderRadius: "1em", boxShadow: 3 }}>
          <Typography
            sx={{ color: "RGB(35, 90, 152)", padding: "0.5em 0.5em 0 0.5em " }}
          >
            Battery
          </Typography>
          <Typography sx={{ padding: "1em" }}>20%</Typography>
        </Card>
        <Card className="card" sx={{ borderRadius: "1em", boxShadow: 3 }}>
          <Typography
            sx={{ color: "RGB(35, 90, 152)", padding: "0.5em 0.5em 0 0.5em " }}
          >
            Status
          </Typography>
          <Typography sx={{ padding: "1em" }}>
            <AdjustIcon sx={{ color: "green" }} />
          </Typography>
        </Card>
        <Card className="card" sx={{ borderRadius: "1em", boxShadow: 3 }}>
          <Typography
            sx={{ color: "RGB(35, 90, 152)", padding: "0.5em 0.5em 0 0.5em " }}
          >
            Wifi Name
          </Typography>
          <Typography sx={{ padding: "1em" }}>cohive-zone-2</Typography>
        </Card>
      </Grid>
      <Grid item className="grid-item" lg={12}>
        <Card className="card-graph" sx={{borderRadius:"2em"}} ><Typography>Graph</Typography></Card>
      </Grid>
      <Grid item className="grid-item" sx={{justifyContent:"center"}} lg={12}>
        <Stack direction={"row"}>        <Typography>All rights Reserved by</Typography>&nbsp;<a href="yelson.com"><Typography sx={{color:"blue"}}>Yelson India Private Limited</Typography></a>&nbsp;<Typography>@ 2022</Typography>
</Stack>
      </Grid>
    </Grid>
  );
}

export default App;
