import "./styles.css";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Snackbar,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

export default function App() {
  return (
    <div>
      {/* Introduction to Material-UI */}
      {/* 1. Create a simple layout using Material-UI's Container, Grid, and Typography components. */}
      {/* 2. Add a Material-UI Button that changes color when hovered. */}
      {/* 3. Use the Box component to add some margin and padding to your layout. */}

      {/* Material-UI Typography */}
      {/* 4. Display different text styles (e.g., h1, h2, body1) using Material-UI's Typography component. */}
      {/* 5. Apply different text alignment and color using Typography's properties. */}

      {/* Material-UI Buttons */}
      {/* 6. Create a Material-UI Button with different variants (contained, outlined, text). */}
      {/* 7. Add an onClick handler to the Button that logs a message to the console. */}
      {/* 8. Implement a ButtonGroup to display multiple buttons side by side. */}

      {/* Material-UI Cards */}
      {/* 9. Create a Material-UI Card component with an image, title, and description. */}
      {/* 10. Add a button to the Card that triggers a Snackbar notification when clicked. */}

      {/* Material-UI Forms */}
      {/* 11. Design a form using Material-UI TextField components with labels and helper text. */}
      {/* 12. Implement form validation by displaying error messages when fields are empty. */}
      {/* 13. Use Material-UI's Select component to create a dropdown menu. */}

      {/* Material-UI Snackbar */}
      {/* 14. Add a Snackbar component that shows a success message when a Button is clicked. */}
      {/* 15. Include a Close button in the Snackbar to dismiss it. */}

      {/* Material-UI AppBar */}
      {/* 16. Create a responsive AppBar with a MenuIcon that opens a dropdown menu. */}
      {/* 17. Implement a menu with several MenuItems that navigate to different sections of the page. */}

      {/* Material-UI Grid */}
      {/* 18. Create a responsive grid layout with Material-UI Grid components that adjusts columns based on screen size. */}
      {/* 19. Use spacing and alignment properties to position grid items effectively. */}

      {/* Material-UI Dialog */}
      {/* 20. Add a Dialog component that opens when a Button is clicked, displaying some content. */}
      {/* 21. Implement actions (e.g., "Ok" and "Cancel") in the Dialog with appropriate handlers. */}

      {/* Material-UI Tabs */}
      {/* 22. Create a Tabs component with multiple Tab items and display content based on the selected Tab. */}
      {/* 23. Use the TabPanel component to show different content for each Tab. */}

      {/* Material-UI IconButtons */}
      {/* 24. Add IconButtons with Material-UI icons and handle their click events. */}
      {/* 25. Create a group of IconButtons aligned horizontally. */}

      {/* Material-UI Theme Customization */}
      {/* 26. Customize Material-UI's default theme by overriding primary and secondary colors. */}
      {/* 27. Apply the custom theme to your components using the ThemeProvider. */}

      {/* Material-UI Data Display */}
      {/* 28. Use the Material-UI Table component to display tabular data. */}
      {/* 29. Add sorting and filtering functionalities to the Table. */}

      {/* Material-UI Styling */}
      {/* 30. Style your components using Material-UI's `sx` prop for inline styling. */}
      {/* 31. Create a custom styled component using `styled` from Material-UI. */}

      {/* Responsive Design */}
      {/* 32. Use Material-UI's useMediaQuery hook to implement responsive design that adapts to different screen sizes. */}
      {/* 33. Create a responsive layout with hidden and visible components based on the viewport width. */}

      <Container>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">My App</Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={2} my={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt="Placeholder Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => alert("Card Button Clicked")}
                >
                  Click Me
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <TextField label="Name" variant="outlined" fullWidth margin="normal" />

        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("Button Clicked")}
        >
          Submit
        </Button>

        <Snackbar
          open={false} // set to true to show snackbar
          autoHideDuration={6000}
          onClose={() => {}}
          message="This is a success message"
          action={
            <IconButton color="inherit" onClick={() => {}}>
              <CloseIcon />
            </IconButton>
          }
        />
      </Container>
    </div>
  );
}
