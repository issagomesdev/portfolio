import { Box, Typography, useTheme, Input, Button, useMediaQuery } from "@mui/material";
import LogoComponent from "./ui/components/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomTextarea } from "./ui/styles/CustomTextarea";
import { useForm } from "react-hook-form";
import { showToast } from "../utils/Toast";
import { receiveData } from "../../controllers/contact.controller";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const titleVar = {
    hidden: { opacity: 0, y: -28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const infoItemVar = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
};

const formVar = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay: 0.15 } },
};

const footerVar = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const ContactComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen2 = useMediaQuery(theme.breakpoints.between("md", "lg"));

    // Plain div ref — guaranteed to work with IntersectionObserver
    const sectionRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (hasAnimated.current) controls.set('hidden');
                controls.start('visible');
                hasAnimated.current = true;
            }
        }, { threshold: 0.05 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    type CardItem = {
        id: number
        text?: string
        icon: string
        link?: string
    };

    const SMData: CardItem[] = [
        { id: 1, text: 'Youtube', icon: 'line-md:youtube-twotone', link: 'https://www.youtube.com/@issagomesdev' },
        { id: 2, text: 'Instagram', icon: 'icon-park-twotone:instagram', link: 'https://www.instagram.com/issag.dev/' },
        { id: 3, text: 'GitHub', icon: 'uim:github', link: 'https://github.com/issagomesdev' },
        { id: 3, text: 'LinkedIn', icon: 'uim:linkedin', link: 'https://www.linkedin.com/in/issagomesdev/' },
    ];

    const SMComponent = ({ icon, link }: CardItem) => (
        <motion.div whileHover={{ scale: 1.12, y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Box
                    sx={{ background: `linear-gradient(to bottom, #9b9d8745 0%, #777865 75%, #7E7F6C 100%)` }}
                    boxShadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}
                    display={'flex'} alignItems={'center'} borderRadius={'4px'}
                    width={theme.spacing(7)} height={theme.spacing(7)} justifyContent={'center'}
                >
                    <Icon icon={icon} width={theme.spacing(5)} color={'white'} />
                </Box>
            </a>
        </motion.div>
    );

    const InfoData: CardItem[] = [
        { id: 1, text: '+55 81 991080086', icon: 'ic:baseline-whatsapp', link: 'https://wa.me/5581991080086' },
        { id: 2, text: 'issagomesdev@gmail.com', icon: 'ic:twotone-email', link: 'mailto:issagomesdev@gmail.com' },
        { id: 3, text: 'Paulista, Pernambuco - Brazil', icon: 'icon-park-twotone:local-two' },
    ];

    const InfoComponent = ({ text, icon, link }: CardItem) => (
        <a href={link} target="_blank" style={{ color: 'white', width: "fit-content" }} rel="noopener noreferrer">
            <Box display={'flex'} gap={theme.spacing(2)} color={'white'} alignItems={'center'}>
                <Box sx={{ background: `linear-gradient(to bottom, #9b9d8745 0%, #777865 75%, #7E7F6C 100%)` }} boxShadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'} display={'flex'} alignItems={'center'} borderRadius={'4px'} width={theme.spacing(7)} height={theme.spacing(7)} justifyContent={'center'}>
                    <Icon icon={icon} width={theme.spacing(5)} color={'white'} />
                </Box>
                <Typography fontFamily={'"Akatab", sans-serif'}>{text}</Typography>
            </Box>
        </a>
    );

    const createContactSchema = z.object({
        name: z.string().min(1, { message: 'Name is required' }),
        email: z.string().email({ message: 'Invalid email address' }),
        message: z.string().min(1, { message: 'Message is required' }),
    });

    type CreateContactSchema = z.infer<typeof createContactSchema>;

    const { register, handleSubmit, reset, formState: { } } = useForm<CreateContactSchema>({
        resolver: zodResolver(createContactSchema)
    });

    async function handleSubmitContact(data: any) {
        const promise = (async () => {
            await receiveData(data);
            return "Dados enviados";
        })();

        await showToast.promise(promise, {
            loading: "Enviando...",
            success: { message: "Formulário enviado com sucesso!", description: "Em breve retornarei o contato. Caso prefira, me avise pelo WhatsApp para agilizar o atendimento." },
            error: { message: "Erro ao enviar o formulário", description: "Tente novamente ou entre em contato comigo pelo WhatsApp." },
        });

        promise.then(() => reset()).catch((error) => console.error(error));
    }

    return (
        // Plain div wrapper so IntersectionObserver attaches reliably
        <div ref={sectionRef} style={{ width: '100%' }}>
            <Box
                bgcolor={theme.palette.secondary.main}
                width={'100%'}
                borderRadius={smallScreen ? '60px 60px 0px 0px' : '100px 100px 0px 0px'}
                display={'flex'} justifyContent={'center'} alignItems={'center'}
                paddingTop={theme.spacing(3)}
            >
                <Box width={smallScreen ? '90%' : '95%'} height={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(5)}>

                    <motion.div initial="hidden" animate={controls} variants={titleVar}>
                        <Typography variant="sectionTitle" color={'white'}> Contato </Typography>
                    </motion.div>

                    <Box display={'flex'} width={mediumScreen2 ? '95%' : '100%'} {...(mediumScreen || mediumScreen2 ? { flexWrap: 'wrap', gap: theme.spacing(4) } : null)}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(4) }}>
                            <motion.div custom={0} variants={infoItemVar} initial="hidden" animate={controls}>
                                <Box>
                                    <Typography color={'white'} fontFamily={'"Akatab", sans-serif'} fontSize={mediumScreen ? theme.spacing(3) : theme.spacing(4)} fontWeight={'500'}>Me envie uma mensagem</Typography>
                                    <Typography color={'white'} width={mediumScreen ? '100%' : '70%'} textAlign={'justify'} fontSize={theme.spacing(1.5)} fontWeight={'400'}>Se você quiser entrar em contato comigo, pode fazer isso por whatsapp, e-mail ou preenchendo o formulário a seguir. Caso escolha o formulário, lembre-se de deixar seu nome e sobrenome, um e-mail válido para que eu possa retornar o contato e, no corpo da mensagem, explique com o máximo de detalhes possível sobre o seu projeto e do que você precisa. Assim, consigo entender melhor suas necessidades e responder de forma mais precisa.</Typography>
                                </Box>
                            </motion.div>
                            <Box display={'flex'} flexDirection={'column'} gap={theme.spacing(2)}>
                                {InfoData.map((item, index) => (
                                    <motion.div key={item.id} custom={index + 1} variants={infoItemVar} initial="hidden" animate={controls}>
                                        <InfoComponent id={item.id} text={item.text} icon={item.icon} link={item.link} />
                                    </motion.div>
                                ))}
                            </Box>
                        </div>

                        <motion.div initial="hidden" animate={controls} variants={formVar} style={{ width: '100%' }}>
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
                        </motion.div>
                    </Box>

                    <motion.div initial="hidden" animate={controls} variants={footerVar} style={{ width: '100%' }}>
                        <Box paddingY={theme.spacing(4)} borderTop={`2px solid white`} width={'100%'} display={'flex'} alignItems={'center'} {...(mediumScreen ? { flexDirection: 'column-reverse' } : { justifyContent: 'space-between' })} gap={theme.spacing(2)}>
                            <LogoComponent color={'white'} />
                            <Typography color={'white'}>2025 - Issa Gomes, All rights reserved</Typography>
                            <Box display={'flex'} gap={theme.spacing(2)}>
                                {SMData.map((item) => (
                                    <SMComponent key={item.id} id={item.id} text={item.text} icon={item.icon} link={item.link} />
                                ))}
                            </Box>
                        </Box>
                    </motion.div>

                </Box>
            </Box>
        </div>
    );
};

export default ContactComponent;
