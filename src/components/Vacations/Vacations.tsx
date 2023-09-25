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
  getVacationsAction,
  selectVacations,
} from "../../redux/slices/AppSlice";
import { useEffect } from "react";
import moment from "moment";

export default function Vacations() {
  const dispatch = useAppDispatch();

  const vacations = useAppSelector(selectVacations);
  useEffect(() => {
    const start = async () => {
      async function getData() {
        await dispatch(getVacationsAction());
      }

      await getData();
    };

    start();
  }, []);

  return (
    <main>
      <Box
        sx={{
          backgroundImage:
            "url(/images/pexels-asad-photo-maldives-1024989.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
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
              Welcome to travel IL
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
              <Button variant="outlined">Sort by followed</Button>
              <Button variant="outlined">Sort by date</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 1 }} maxWidth="xl">
          <Grid container spacing={8}>
            {vacations.map((vacation) => (
              <Grid item key={vacation.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "0.5px solid black",
                    bgcolor: "test.main",
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
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: "bold" }}
                    >
                      {vacation.destination}
                    </Typography>
                    <Typography sx={{ border: "5px solid lightblue" }}>
                      <Typography sx={{ margin: "5px", fontWeight: "bold" }}>
                        {moment(vacation.startDate).format("DD.MM.YYYY")} -{" "}
                        {moment(vacation.endDate).format("DD.MM.YYYY ")}
                      </Typography>
                    </Typography>
                    <Typography
                      marginTop={"10px"}
                      padding={"5px"}
                      sx={{
                        height: "115px",
                        overflow: "scroll",
                        border: "5px solid lightblue",
                      }}
                    >
                      A little bit about: {vacation.destination} -{" "}
                      {vacation.description}
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "45px",
                        color: "test.secondary",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      Only: {vacation.price}$
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
      </Box>
    </main>
  );
}
