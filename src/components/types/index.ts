export interface User {
    name: string;
    avatar: string;
  }
  
  export interface Folder {
    id: string;
    name: string;
    icon: string;
    size: string;
    color: string;
  }
  
  export interface StorageItem {
    category: string;
    size: string;
    color: string;
  }
  
  export interface FileItem {
    id: string;
    name: string;
    type: string;
    icon: string;
    date: string;
    collaborators: string[];
    extraCollaborators?: number;
  }
  
  export interface NavItem {
    icon: string;
    label: string;
    path: string;
    active?: boolean;
    children?: { label: string; color?: string }[];
  }