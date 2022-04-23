// Styles
import { PacmanLoader } from 'react-spinners';

export const fetchify = (isLoading, content, color = '#f471b5') => {
  if (isLoading) {
    return (
      <section className="flex items-center w-full justify-center">
        <PacmanLoader color={color} />
      </section>
    );
  }
  return content;
};
