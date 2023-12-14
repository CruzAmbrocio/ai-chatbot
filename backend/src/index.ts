import app from "./app";
import { connectToDatabase } from "./db/connection";

connectToDatabase()
  .then(() => {
    app.set("port", process.env.PORT);
    app.listen(app.get("port"), () => {
      console.log(`Server open and and DB connected`);
    });
  })
  .catch((error) => console.log(error));
