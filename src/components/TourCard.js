import Paper from "@mui/material/Paper";
import { Grid, Box, Typography, Rating, createTheme, ThemeProvider} from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme=createTheme({
    components: {
        muiTypography:{
            variants: [
                {
                    props:{
                        variant:"body2",
                    }, 
                    style:{
                        fontSize: 11, 
                    }
                },
                {
                    props: {
                        variant: "body3"
                    }, 
                    style:{
                        fontSize: 9,
                    },
                },
            ]
        },
    },
})

const TourCard = ({tour}) => {
  //variant is how it will look
  //component is what html element it will be <h2>
  return (
    <Grid item xs={3}>
        <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <img
          src={tour.image}
          alt="pic of cat"
          className="img"
        />
        <Box paddingX={1}>
          {/* adds padding to both x and y axis  */}
          <Typography variant="subtitle1" component="h2" >
          {tour.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.duration} hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Rating name="read-only" value={tour.rating} readOnly precision={0.5} size="small" />
            <Typography variant="body2" component="p" marginLeft={0.5} >
                {tour.rating}
            </Typography>
            <Typography variant="body3" component="p" marginTop={0} marginLeft={1.5}>
              ({tour.numberOfReviews} Reviews)
            </Typography>
            </Box>
            <Box>
            <Typography variant="h6" component="h3" marginTop={0}>
             $ {tour.price}
            </Typography>
            
          </Box>
        </Box>
      </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
