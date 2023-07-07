import { Typography, useTheme , Divider } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import Event from "./Event";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  return (
    <>
    <WidgetWrapper>
        <Typography color={dark} variant="h4" fontWeight="300">
          Events
        </Typography>
        <Event 
        eventName={"Flash"}
        organiser={"AMS"}
        picturePath={"http://localhost:3001/assets/Flash.png"}
        Description={"Participate in our exciting photo contest by submitting your entries on any of the four themes: 1. Sunrise/Sunsets 2. Wide Angle 3. Statues 4. Festive vibes"}
        />
        <Divider />
        <Event 
        eventName={"Flash"}
        organiser={"AMS"}
        picturePath={"http://localhost:3001/assets/Flash.png"}
        Description={"Participate in our exciting photo contest by submitting your entries on any of the four themes: 1. Sunrise/Sunsets 2. Wide Angle 3. Statues 4. Festive vibes"}
        />
    </WidgetWrapper>
    
    </>
  );
};

export default AdvertWidget;
