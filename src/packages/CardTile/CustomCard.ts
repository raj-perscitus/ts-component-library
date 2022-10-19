// 3rd party JS
import Card from "@mui/material/Card";
// CSS
import styled from "@mui/material/styles/styled";

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 150,
  height: 150,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  ".MuiCardHeader-root": {
    fontSize: theme.typography.htmlFontSize,
  },
  "&:hover": {
    ".MuiCardMedia-img": {
      transition: "5s",
      display: "none",
    },
    ".card-title-description": {
      display: "block",
      opacity: "1",
      animation: "showMe 1s forwards",
    },
  },
  ".MuiCardMedia-media": {
    width: "100px",
    margin: "0px auto",
  },
  ".card-title-description": {
    display: "none",
    opacity: "0",
    padding: "10px",
    width: "100%",
    background: "#ccc",
  },
  " @keyframes showMe": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export default CustomCard;
