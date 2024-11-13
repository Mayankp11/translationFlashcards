import React from 'react';
import { IconButton, CircularProgress } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh'; // Import Material-UI's refresh icon

interface RefreshProps {
  onRefresh: () => void;
  isLoading: boolean;
}

const RefreshButton: React.FC<RefreshProps> = ({ onRefresh, isLoading }) => {
  return (
    <IconButton
      aria-label="refresh"
      onClick={onRefresh}
      disabled={isLoading} // Disable button while loading
      color="primary"
    >
      {isLoading ? <CircularProgress size={24} /> : <RefreshIcon />}
    </IconButton>
  );
};

export default RefreshButton;
