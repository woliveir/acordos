import { RouterProvider } from 'react-router-dom';
import { CookieProvider } from './contexts';
import { router } from './routes';

import './styles/reset.css';

const App = () => {  
  return (
    <CookieProvider>
      <RouterProvider router={router} />
    </CookieProvider>
  )
};

export default App
