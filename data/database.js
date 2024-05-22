import mongoose from "mongoose";

/**
 * Connects to the MongoDB database.
 * @returns {Promise<void>}  when the database is connected promise is resolved.
 */
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "server",
    })
    .then((connection) => {
      console.log(
        `Database connected successfully with ${connection.connection.host}`
      );
    })
    .catch((error) => {
      console.error(error);
    });
};
