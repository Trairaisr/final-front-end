import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  Container,
  Stack,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux";
import {
  getAdminVacationsAction, selectVacations,
  // selectAdminVacations,
} from "../../redux/slices/AppSlice";
import { useEffect } from "react";
import moment from "moment";

export default function AdminPage() {
  const dispatch = useAppDispatch();

  const vacations = useAppSelector(selectVacations);
  useEffect(() => {
    const start = async () => {
      async function getData() {
        await dispatch(getAdminVacationsAction());
      }

      await getData();
    };

    start();
  }, []);

  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            welcome Admin
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            your next flight starts on this ground
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">סינון לפי לייקים</Button>
            <Button variant="outlined">סינון לפי תאריך</Button> 
            <Button variant="contained">Add New Vacation</Button> 
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {vacations.map((vacation) => (
            <Grid item key={vacation.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                
                    pt: "56.25%",
                  }}
                  image={vacation.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {vacation.destination}
                  </Typography>
                  <Typography sx={{ margin: "5px", bgcolor: "test.main" }}>
                    {moment(vacation.startDate).format("DD/MM/YYYY HH:mm")}
                  </Typography>
                  <Typography sx={{ margin: "5px" }}>
                    {moment(vacation.endDate).format("DD/MM/YYYY HH:mm")}
                  </Typography>
                  <Typography sx={{ height: "115px", overflow: "scroll" }}>
                    A little bit about: {vacation.destination}
                    {vacation.description}
                  </Typography>
                  <Typography sx={{ margin: "5px" }}>
                    {vacation.price}$
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium">Follow</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
