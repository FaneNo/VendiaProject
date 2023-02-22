const { default: Box } = require("@mui/material/Box");
const { default: Typography } = require("@mui/material/Typography");
const { useTheme, useMediaQuery } = require("@mui/material");
const Form = require("./Form");

function Login() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    Box(
      null,
      Box({
        width: "100%",
        backgroundColor: theme.palette.background.alt,
        p: "1rem 6%",
        textAlign: "center"
      },
        Typography({
          fontWeight: "bold",
          fontSize: "32px",
          color: "primary"
        },
          "Vendia Care"
        )
      ),

      Box({
        width: isNonMobileScreens ? "50%" : "93%",
        p: "2rem",
        m: "2rem auto",
        borderRadius: "1.5rem",
        backgroundColor: theme.palette.background.alt
      },
        Typography({
          fontWeight: "500",
          variant: "h5",
          sx: { mb: "1.5rem" }
        },
          "Welcome to Vendia Care, where your health matters!"
        ),
        Form(null)
      )
    )
  );
}

module.exports = Login;

