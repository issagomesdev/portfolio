
import { Project } from '../../types/Project';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Box, Button } from '@mui/material';

type Props = {
  project?: Project
  closeProject: () => void;
};

const ProjectComponent = ({ project, closeProject }: Props) => {

  if (!project) return <div>Carregando...</div>;

  return (
    <Box sx={{
      color: 'white',
      fontWeight: 'font-thin',
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
      '& *': {
        color: 'white !important',
        fontWeight: 'font-thin',
        fontFamily: `inherit`,

      },
    }}>
      <Button onClick={closeProject} sx={{ color: 'white', marginBottom: 2 }}>
        Voltar
      </Button>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {project?.content ?? 'Nenhum conteúdo disponível.'}
      </ReactMarkdown>
    </Box>
  );
};

export default ProjectComponent;
