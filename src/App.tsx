import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DoneTasks, EditTask, HomeLayout, Landing, Task } from "./Pages";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/edit-task",
        element: <EditTask />,
      },
      {
        path: "/done-tasks",
        element: <DoneTasks />,
        children: [
          {
            path: "/done-tasks/task",
            element: <Task />,
          },
          {
            path: "/done-tasks/edit-task",
            element: <EditTask />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
