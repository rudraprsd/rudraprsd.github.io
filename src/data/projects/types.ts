import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content?: string; // Made optional since we can use component instead
  component?: () => ReactNode; // Custom component for rich, interactive layouts
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
}
