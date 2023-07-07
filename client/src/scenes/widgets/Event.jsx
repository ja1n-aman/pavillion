import { Typography, useTheme , Link , Box} from "@mui/material";
import FlexBetween from "components/FlexBetween";

const Event = ({
    eventName,
    organiser,
    picturePath,
    Description
  }) => {
  const { palette } = useTheme();
  const medium = palette.neutral.medium;

  return (
    <>
    <Box p="1rem 0">
        <FlexBetween>
          <Typography color={medium} variant="h5">{eventName}</Typography>
          <Typography color={medium} variant="h6">{organiser}</Typography>
        </FlexBetween>
        <img
          width="100%"
          height="auto"
          alt="event"
          src={picturePath}
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
        <FlexBetween>
          <Link href="#" underline='hover' color='#85B4EA'>Instagram</Link>
          <Link href="#" underline='hover' color='#85B4EA'>Participate</Link>
        </FlexBetween>
        <Typography color={medium} m="0.5rem 0">
        {Description}
        </Typography>

    </Box>
    </>
  );
};

export default Event;
