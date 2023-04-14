import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes.jsx";

import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
