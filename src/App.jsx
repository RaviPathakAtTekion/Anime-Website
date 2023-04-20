import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
