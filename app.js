import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./connect.js";
import Tag from "./models/tags.js";
import User from "./models/user.js";
import BookedEvents from "./models/bookedEvents.js";
import userRouter from "./routes/users.js";
import bookEventsRouter from "./routes/bookedEvents.js";
import organizerRouter from "./routes/organizer.js";
import eventsRouter from "./routes/events.js";
import Organizer from "./models/organiser.js";
import Event from "./models/event.js";
import Producer from "./producer.js";

const app = express();
const PORT = 3000;
const producer = new Producer();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router mounts
app.use("/user", userRouter);
app.use("/bookedEvents", bookEventsRouter);
app.use("/organizer", organizerRouter);
app.use("/events", eventsRouter);

initialize();

async function initialize() {
  await initDB();
  app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
  });
}

async function initDB() {
  await sequelize
    .authenticate()
    .then(async () => {
      await User.sync();
      await Tag.sync();
      await Organizer.sync();
      await Event.sync();
      await BookedEvents.sync();

      console.log("Model synced");
    })
    .catch((err) => {
      console.error(err);
      process.exit();
    });
}
