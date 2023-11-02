import postsRouter from "./posts.rotue.js";
import usersRouter from "./users.route.js";

export function route(app) {
  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/posts", postsRouter);
}
