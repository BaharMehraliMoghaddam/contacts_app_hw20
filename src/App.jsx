import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routers/Routers";
import { Provider } from "react-redux";
import  store  from "./Redux/Store.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer bodyClassName={"font-bold"}/>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;
