import { Typography, Popover } from "@mui/material";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import InfoIcon from "@mui/icons-material/Info";
// eslint-disable-next-line react/prop-types
const PopperInfo = (cat) => {
 return (
  <>
   <PopupState variant='popover' popupId='demo-popup-popover'>
    {(popupState) => (
     <div>
      <InfoIcon {...bindTrigger(popupState)} />
      <Popover
       {...bindPopover(popupState)}
       anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
       }}
       transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
       }}
      >
       <Typography
        sx={{
         p: 1,
         width: 200,
        }}
       >
        {cat.category.description}
       </Typography>
      </Popover>
     </div>
    )}
   </PopupState>
  </>
 );
};

export default PopperInfo;
