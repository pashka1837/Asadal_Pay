import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import * as router from "react-router";
import { MemoryRouter } from "react-router-dom";

import { store } from "../../store/store";
import TaskEl from "../TaskEl";

import fetchMock from "jest-fetch-mock";

afterEach(() => {
  cleanup();
});

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  fetchMock.resetMocks();
});
beforeEach((): void => {
  fetchMock.resetMocks();
});

test("should first", () => {
  const prop = {
    id: "FAF76QRW2IZ",
    date: "08/20/23",
    title: "ante lectus convallis est, vitae",
    desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
    isDone: true,
  };
  render(
    <Provider store={store}>
      <MemoryRouter>
        <TaskEl task={prop} />
      </MemoryRouter>
    </Provider>
  );
  const taskEl = screen.getByTestId("test1");
  expect(taskEl).toBeInTheDocument();
});

test("should first", () => {
  const prop = {
    id: "2",
    date: "08/20/23",
    title: "ante lectus convallis est, vitae",
    desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
    isDone: false,
  };
  render(
    <Provider store={store}>
      <MemoryRouter>
        <TaskEl task={prop} />
      </MemoryRouter>
    </Provider>
  );
  const taskEl = screen.getByTestId("test1");
  const checkBoxEl = taskEl.querySelector("input");
  expect(checkBoxEl).not.toBeChecked();
});

test("edit-task navigation", async () => {
  const prop = {
    id: "2",
    date: "08/20/23",
    title: "ante lectus convallis est, vitae",
    desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
    isDone: false,
  };
  const optionsToPass = {
    state: {
      task: {
        id: "2",
        date: "08/20/23",
        title: "ante lectus convallis est, vitae",
        desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
        isDone: false,
      },
      pathname: "/done",
    },
  };

  const user = userEvent.setup();
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/done"]}>
        <TaskEl task={prop} />
      </MemoryRouter>
    </Provider>
  );

  const btnHandleEditTask = screen.getByTestId("handleEditTask");
  await user.click(btnHandleEditTask);
  expect(navigate).toHaveBeenCalledWith("/edit-task", optionsToPass);
});

test("open-task navigation", async () => {
  const prop = {
    id: "2",
    date: "08/20/23",
    title: "ante lectus convallis est, vitae",
    desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
    isDone: false,
  };
  const optionsToPass = {
    state: {
      task: {
        id: "2",
        date: "08/20/23",
        title: "ante lectus convallis est, vitae",
        desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
        isDone: false,
      },
      pathname: "/done",
    },
  };

  const user = userEvent.setup();
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/done"]}>
        <TaskEl task={prop} />
      </MemoryRouter>
    </Provider>
  );
  const btnOpenTask = screen.getByTestId("test1");
  await user.click(btnOpenTask);
  expect(navigate).toHaveBeenCalledWith("/task", optionsToPass);
});

// test("update task", async () => {
//   const prop = {
//     id: "2",
//     date: "08/20/23",
//     title: "ante lectus convallis est, vitae",
//     desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
//     isDone: false,
//   };

//   const user = userEvent.setup();
//   render(
//     <Provider store={store}>
//       <MemoryRouter initialEntries={["/done"]}>
//         <TaskEl task={prop} />
//       </MemoryRouter>
//     </Provider>
//   );
//   // const { result, waitForNextUpdate } = renderHook(
//   //   () => useDeleteTaskMutation(prop.id),
//   //   { wrapper }
//   // );
//   // const [initialResponse] = result.current;
//   const btnHandleDeletetTask = screen.getByTestId("handleDeleteTask");
//   const [deleteTask] = useDeleteTaskMutation();

//   await user.click(btnHandleDeletetTask);

//   expect(deleteTask).toHaveBeenCalled();

//   // const taskEl = screen.getByTestId(test1);
//   // await user.click(btnHandleDeletetTask);
//   // await waitFor(() => expect(taskEl.textContent).toBe("fulfilled"));
// });
