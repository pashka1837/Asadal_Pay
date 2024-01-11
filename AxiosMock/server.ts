import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import data from "./data";

var mock = new MockAdapter(axios);

mock.onGet("/tasks").reply(400, { users: [...data] });
