import { Box, Typography } from "@mui/material"

const BmiHeading = () => {

    return(
        <Box sx={{
            weight: "100%",
            backgroundColor: "white",
            border: "5px solid black"
        }}>
            <Typography variant="h2">Welcome to your BMI calculator!</Typography>
        </Box>
    )
}

export default BmiHeading