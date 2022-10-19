// 3rd party components
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

// Components
import CustomCard from "./CustomCard";

// Interfaces
import { CardTileInterface } from "./cardTile-interface";

function CustomCardTile(props: CardTileInterface) {
  const { description, img, imgAlt, title, onClick } = props;
  return (
    <CustomCard variant="outlined" onClick={onClick}>
      <CardMedia component="img" image={img} alt={imgAlt} />
      {description && <p className="card-title-description">{description}</p>}
      <Typography variant="h6" fontWeight="lg">
        {title}
      </Typography>
    </CustomCard>
  );
}

CustomCardTile.defaultProps = {
  imgAlt: "Card Tile",
  onClick: () => {},
  description: "sdf",
};

export default CustomCardTile;
