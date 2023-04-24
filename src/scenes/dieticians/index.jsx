import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { useGetDieticiansQuery } from "../../state/api";

const Dietician = (props) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  console.log("name", props.name);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {/*  {category} */}
          {props.name.ID}
        </Typography>
        <Typography variant="h5" component="div">
          {/*  {name} */} {props.name.FirstName}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(11).toFixed(2)}
        </Typography>
        <Rating value={3} readOnly />

        <Typography variant="body2">
          {/* {description} */}
          {props.name.ID}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {props.name.ID}</Typography>
          <Typography>Supply Left: {/* {supply} */}</Typography>
          <Typography>
            Yearly Sales This Year: {props.name.Address}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {props.name.Contact}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Dieticians = () => {
  const { data, isLoading } = useGetDieticiansQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />

      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map((item) => (
            <Dietician name={item} />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Dieticians;
