import { Container, Typography, Box, Paper, BottomNavigation } from "@mui/material";
import CustomizedAccordions from "../components/Accordion";
import ImageCollage from "../components/imageCollage";
import BasicModal from "../components/Modal";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the World
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="http://placekitten.com/200/300"
        alt=""
        width={300}
        height={325}
      />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        perspiciatis, ipsum nostrum nobis, facilis voluptatem soluta quibusdam
        nulla iure vel nemo blanditiis tenetur quam molestias fugiat, magnam
        praesentium accusantium quo!
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3}>
        Frequently Asked Questions
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        <CustomizedAccordions />
      </Typography>
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
       <BasicModal />
        </BottomNavigation>
      </Paper>

  </Container>
);
export default Tour;
