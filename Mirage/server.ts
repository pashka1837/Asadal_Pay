import { createServer } from "miragejs";
import data from "./data";

export default function makeServer() {
  let server = createServer({
    seeds(server) {
      server.db.loadData({
        tasks: data,
      });
    },
    routes() {
      this.namespace = "api";
      this.get(
        "/tasks",
        (schema, request) => {
          const data = schema.db.tasks;
          return data;
        },
        { timing: 1000 }
      );
      this.post(
        "/tasks",
        (schema, request) => {
          const newTask = JSON.parse(request.requestBody);
          return schema.db.tasks.insert(newTask);
        },
        { timing: 5000 }
      );
      this.delete(
        "/tasks",
        (schema, request) => {
          const id = request.requestBody;
          schema.db.tasks.remove(id);
          return null;
        },
        { timing: 500 }
      );
      this.patch(
        "/tasks",
        (schema, request) => {
          const updTask = JSON.parse(request.requestBody);
          schema.db.tasks.update(updTask.id, updTask);
          return null;
        },
        { timing: 500 }
      );
    },
  });

  return server;
}
