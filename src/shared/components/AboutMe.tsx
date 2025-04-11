import { Box, Button, Typography, useTheme } from "@mui/material";
import { profilePhoto } from "../../styles/styles";

const AboutMeComponent = () => {

    const theme = useTheme();

    return (
        <Box display={'flex'} justifyContent={'center'} gap={theme.spacing(5)}>
            <Box width={'50%'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={theme.spacing(2)}>
                <Typography variant="sectionTitle"> About Me </Typography>
                <Typography variant="bodyText">Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc convallis elit tortor duis sem. Ut quisque consectetur feugiat dolor mollis massa porta praesent laoreet. Ridiculus ac ac nulla, lobortis rutrum vehicula ornare. Semper conubia venenatis, neque nullam nibh habitasse ultricies duis. Cursus nulla lectus nulla ultricies pretium diam sagittis ligula. Rhoncus id pretium gravida proin leo proin convallis nullam. Luctus non porta himenaeos risus vivamus.</Typography>
                <Button sx={{ backgroundColor: theme.palette.secondary.main, color: 'white', fontSize: theme.spacing(2.5), paddingX: theme.spacing(3) }}>Drop Me a Message</Button>
            </Box>
            <Box>
                <Box sx={(theme) => profilePhoto(theme)}>
                    <img src={`/images/profilePhoto.png`} style={{ width: '100%', height: 'auto' }} />
                </Box>
            </Box>
        </Box>
    )
}

export default AboutMeComponent;