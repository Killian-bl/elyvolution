import { Box, Container, Typography} from "@mui/material";
import Form from "../components/Form.tsx";
import fond from "../assets/images/fond.png";
import Comment from "../components/Comment.tsx"

const Home = () => {

    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${fond})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "70vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
                    Elyvolution
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Sublimez votre beauté naturelle
                </Typography>
                <Form>
                </Form>
            </Box>

            <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
                    À propos
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify", maxWidth: 800, mx: "auto" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed metus vel lacus euismod dapibus. Praesent sit amet mollis risus. Cras augue ipsum, fermentum gravida volutpat eget, vestibulum vitae libero. Nullam nec nibh non dui cursus scelerisque vestibulum pellentesque neque. Ut eros nisi, dapibus sed lobortis at, sollicitudin vel risus. Maecenas semper felis in commodo dapibus. Etiam tincidunt turpis metus. Curabitur pharetra lectus facilisis lacus facilisis, interdum commodo justo ornare. Praesent eu consequat ipsum. Donec eu dui tristique, bibendum enim a, ornare velit. Fusce varius ultrices purus, porta cursus nisl mattis ac. Donec vel magna eget elit pellentesque congue. Proin cursus in tortor sed tempor. Integer ullamcorper libero non enim vehicula feugiat. Integer hendrerit ut felis ac volutpat.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify", maxWidth: 800, mx: "auto" }}>
                    Ut sed nisi eget felis gravida tristique in eu mi. Donec augue lacus, varius sed tincidunt et, commodo vel sem. Suspendisse sed odio in ex ultrices blandit. Nulla magna nunc, vehicula a ligula fringilla, condimentum ornare ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis ipsum, dictum ac mollis et, bibendum quis justo. Sed eget pharetra dui, non imperdiet metus. Suspendisse vestibulum mauris eget nisl bibendum ultrices. Nunc ullamcorper nulla in lacus pulvinar, non congue libero ultrices.
                </Typography>
            </Container>

            <Box sx={{ backgroundColor: "#9d0303", py: 10, textAlign: "center" }}>
                <Comment></Comment>
            </Box>
        </Box>
    );
};

export default Home;
