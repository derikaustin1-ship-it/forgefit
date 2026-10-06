import { useEffect } from 'react';

interface MetaTitleProps {
  title: string;
  description?: string;
}

export const MetaTitle: React.FC<MetaTitleProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};
