import { Box, Typography, useTheme, Input, Button, useMediaQuery } from "@mui/material";
import LogoComponent from "./ui/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomTextarea } from "./ui/CustomTextarea";
import { useForm } from "react-hook-form";
import { showToast } from "../utils/Toast";

const ContactComponent = () => {
    const theme = useTheme();
    const miniScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

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

    const SMComponent = ({ icon }: CardItem) => {
        return (
            <Box sx={{ background: `linear-gradient(to bottom, #9b9d8745 0%, #777865 75%, #7E7F6C 100%)` }} boxShadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'} display={'flex'} alignItems={'center'} borderRadius={'4px'} width={theme.spacing(7)} height={theme.spacing(7)} justifyContent={'center'}>
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
            text: 'codedbyissa@gmail.com',
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
                <Box sx={{ background: `linear-gradient(to bottom, #9b9d8745 0%, #777865 75%, #7E7F6C 100%)` }} boxShadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'} display={'flex'} alignItems={'center'} borderRadius={'4px'} width={theme.spacing(7)} height={theme.spacing(7)} justifyContent={'center'}>
                    <Icon icon={icon} width={theme.spacing(5)} color={'white'} />
                </Box>
                <Typography fontFamily={'"Akatab", sans-serif'}>{text}</Typography>
            </Box>
        )
    }

    const createContactSchema = z.object({
        name: z.string().min(1, { message: 'Name is required' }),
        email: z.string().email({ message: 'Invalid email address' }),
        message: z.string().min(1, { message: 'Message is required' }),
    });

    type CreateContactSchema = z.infer<typeof createContactSchema>;

    const { register, handleSubmit, reset, formState: { } } = useForm<CreateContactSchema>({
        resolver: zodResolver(createContactSchema)
    });

    async function handleSubmitContact(data: CreateContactSchema) {
        console.log(data);
        const promise = new Promise<string>((resolver) => setTimeout(() => resolver("Dados carregados"), 2000));

        await showToast.promise(promise, {
            loading: "Enviando...",
            success: {
                message: "Formulario enviado com sucesso!",
                description: "Agora basta guardar que em breve retornarei o contato. Caso prefira, pode me avisar pelo WhatsApp sobre o envio do e-mail para agilizar o atendimento ou tirar dúvidas. Estou à disposição!"
            },
            error: {
                message: "Erro ao enviar o formulário",
                description: "Houve um problema ao tentar enviar o formulário. Tente novamente ou se preferir, entre em contato comigo pelo WhatsApp."
            },
        });

        promise
            .then(() => reset())
            .catch((error) => console.error(error));
    }

    return (
        <Box bgcolor={theme.palette.secondary.main} width={'100%'} borderRadius={miniScreen? '60px 60px 0px 0px' : '100px 100px 0px 0px'} display={'flex'} justifyContent={'center'} alignItems={'center'} paddingTop={theme.spacing(3)}>
            <Box width={'95%'} height={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(5)}>
                <Typography variant="sectionTitle" color={'white'}> Contato </Typography>
                <Box display={'flex'} width={'100%'} {...(smallScreen || mediumScreen ? { flexWrap: 'wrap', gap: theme.spacing(4) } : null)}>
                    <Box display={'flex'} flexDirection={'column'} gap={theme.spacing(4)}>
                        <Box>
                            <Typography color={'white'} fontFamily={'"Akatab", sans-serif'} fontSize={smallScreen ? theme.spacing(3) : theme.spacing(4)} fontWeight={'500'}>Me envie uma mensagem</Typography>
                            <Typography color={'white'} width={smallScreen ? '100%' : '70%'} textAlign={'justify'} fontSize={theme.spacing(1.5)} fontWeight={'400'}>Se você quiser entrar em contato comigo, pode fazer isso por telefone, e-mail ou preenchendo o formulário a seguir. Caso escolha o formulário, lembre-se de deixar seu nome e sobrenome, um e-mail válido para que eu possa retornar o contato e, no corpo da mensagem, explique com o máximo de detalhes possível sobre o seu projeto e do que você precisa. Assim, consigo entender melhor suas necessidades e responder de forma mais precisa.</Typography>
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
                    <Box width={'100%'} borderRadius={'4px'} boxShadow={'rgba(0, 0, 0, 0) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'} sx={{ background: `linear-gradient(to bottom, #9b9d8745 0%, #777865 75%, #7E7F6C 100%)` }} display={'flex'}>
                        <form onSubmit={handleSubmit(handleSubmitContact)} style={{ width: '100%' }}>
                            <Box width={'100%'} padding={theme.spacing(3)} display={'flex'} flexDirection={'column'} gap={theme.spacing(3)}>
                                <Box bgcolor={'#0000000f'} borderRadius={'4px'} padding={theme.spacing(2)} boxShadow={'rgba(0, 0, 0, 0) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}>
                                    <Input disableUnderline placeholder="Nome" sx={{ width: '100%', color: "white", fontWeight: '100' }} {...register('name')} />
                                </Box>
                                <Box bgcolor={'#0000000f'} borderRadius={'4px'} padding={theme.spacing(2)} boxShadow={'rgba(0, 0, 0, 0) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}>
                                    <Input type="email" disableUnderline placeholder="Email" sx={{ width: '100%', color: "white", fontWeight: '100' }} {...register('email')} />
                                </Box>
                                <Box bgcolor={'#0000000f'} borderRadius={'4px'} padding={theme.spacing(2)} boxShadow={'rgba(0, 0, 0, 0) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'} overflow={'hidden auto'} height={theme.spacing(35)}>
                                    <CustomTextarea minRows={10} placeholder="Mensagem" {...register('message')} />
                                </Box>
                                <Button type="submit" sx={{ boxShadow: 'rgba(0, 0, 0, 0) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', backgroundColor: '#0000000f', color: 'white', fontSize: theme.spacing(2.5), paddingX: theme.spacing(6), width: 'fit-content' }}>Enviar</Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
                <Box paddingY={theme.spacing(4)} borderTop={`2px solid white`} width={'100%'} display={'flex'} alignItems={'center'}  {...(smallScreen ? { flexDirection: 'column-reverse' } : { justifyContent: 'space-between' })} gap={theme.spacing(2)}>
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