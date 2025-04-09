import { Box, Divider, Typography, useTheme } from "@mui/material";
import LogoComponent from "./Logo";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactComponent = () => {
    const theme = useTheme();

    type CardItem = {
        id: number
        text?: string
        icon: string
    };

    const SMData: CardItem[] = [
        {
            id: 1,
            text: 'Youtube',
            icon: 'line-md:youtube-twotone'
        },
        {
            id: 2,
            text: 'Instagram',
            icon: 'icon-park-twotone:instagram'
        },
        {
            id: 3,
            text: 'GitHub',
            icon: 'uim:github'
        },
        {
            id: 3,
            text: 'LinkedIn',
            icon: 'uim:linkedin'
        }
    ];

    const SMComponent = ({ text, icon }: CardItem) => {
        return (
            <Box bgcolor={theme.palette.secondary.main} boxShadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'} display={'flex'} alignItems={'center'} borderRadius={'4px'} width={theme.spacing(7)} height={theme.spacing(7)} justifyContent={'center'}>
                <Icon icon={icon} width={theme.spacing(5)} color={'white'} />
            </Box>
        )
    }

    const InfoData: CardItem[] = [
        {
            id: 1,
            text: '+55 81 9 93852292',
            icon: 'icon-park-twotone:phone-telephone'
        },
        {
            id: 2,
            text: 'byissag@gmail.com',
            icon: 'ic:twotone-email'
        },
        {
            id: 3,
            text: 'Paulista, Pernambuco - Brazil',
            icon: 'icon-park-twotone:local-two'
        }
    ];

    const InfoComponent = ({ text, icon }: CardItem) => {
        return (
            <Box display={'flex'} gap={theme.spacing(2)} color={'white'} alignItems={'center'}>
                <Box bgcolor={theme.palette.secondary.main} boxShadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'} display={'flex'} alignItems={'center'} borderRadius={'4px'} width={theme.spacing(7)} height={theme.spacing(7)} justifyContent={'center'}>
                    <Icon icon={icon} width={theme.spacing(5)} color={'white'} />
                </Box>
                <Typography fontFamily={'"Akatab", sans-serif'}>{text}</Typography>
            </Box>
        )
    }


    return (
        <Box bgcolor={theme.palette.secondary.main} width={'100%'} borderRadius={'100px 100px 0px 0px'} display={'flex'} justifyContent={'center'} alignItems={'center'} paddingTop={theme.spacing(3)}>
            <Box width={'95%'} height={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(5)}>
                <Typography variant="sectionTitle" color={'white'}> Contact </Typography>
                <Box display={'flex'} width={'100%'}>
                    <Box display={'flex'} flexDirection={'column'} gap={theme.spacing(4)}>
                        <Box>
                            <Typography color={'white'} fontFamily={'"Akatab", sans-serif'} fontSize={theme.spacing(4)} fontWeight={'500'}>Drop Me a Message</Typography>
                            <Typography color={'white'} width={'50%'} textAlign={'justify'} fontSize={theme.spacing(1.5)} fontWeight={'400'}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dui dolor vestibulum cras, tristique vivamus enim eu. Dui amet pulvinar praesent cubilia lacus conubia per. Sociosqu proin hendrerit ullamcorper lectus semper integer.</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={theme.spacing(2)}>
                            {InfoData.map((item) => (
                                <InfoComponent
                                    id={item.id}
                                    text={item.text}
                                    icon={item.icon}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box width={'50%'} borderRadius={'4px'} boxShadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'} > 
                    </Box>
                </Box>
                <Box paddingY={theme.spacing(4)} borderTop={`2px solid white`} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <LogoComponent color={'white'} />
                    <Typography color={'white'}>2025 - Issa Gomes, All rights reserved</Typography>
                    <Box display={'flex'} gap={theme.spacing(2)}>
                        {SMData.map((item) => (
                            <SMComponent
                                id={item.id}
                                text={item.text}
                                icon={item.icon}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactComponent;