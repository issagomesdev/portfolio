import { useEffect, useState } from 'react';
import { Project } from '../types/Project';
import { projectByName } from '../controllers/project.controller';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Box } from '@mui/material';

const ProjectPage = () => {
  const { name } = useParams<{ name: string }>();
  const [project, setProject] = useState<Project>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        if (!name) return;
        const data = await projectByName(name);
        setProject(data);
        console.log(data, project)
      } catch (error) {
        console.error('Erro ao carregar projeto:', error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [name]);

  return (
    <Box padding={2}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          Loading...
        </Box>
      ) : (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {project?.content || ''}
        </ReactMarkdown>
      )}
    </Box>
  );
};

export default ProjectPage;
