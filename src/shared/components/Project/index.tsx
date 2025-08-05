
import { Project } from '../../../types/Project';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { ModalContainer, ProjectContainer, ProjectContent, Close } from './styles';
import { files } from '../../../services/api'
import { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";

type Props = {
  project?: Project
  closeProject: () => void;
};

const ProjectComponent = ({ project, closeProject }: Props) => {

  const [content, setContent] = useState('');

  useEffect(() => {
    async function getContent() {
      if (project?.content_file) {
        try {
          const res = await files.get(`/files/${project.content_file}`);
          setContent(res.data);
        } catch (error) {
          console.error('Erro ao carregar o conteúdo do projeto:', error);
          setContent('Erro ao carregar o conteúdo.');
        }
      }
    }

    getContent();
  }, [project]);

  if (!project) return <div>Carregando...</div>;

  return (
    <ModalContainer>
      <Close onClick={closeProject}>
         <Icon icon={`material-symbols:close-rounded`} width={20} />
      </Close>
    <ProjectContainer>
      <ProjectContent>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {content ?? 'Nenhum conteúdo disponível.'}
        </ReactMarkdown>
      </ProjectContent>
    </ProjectContainer>
    </ModalContainer>
  );
};

export default ProjectComponent;
