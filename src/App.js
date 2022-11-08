import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App w-[1140px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
