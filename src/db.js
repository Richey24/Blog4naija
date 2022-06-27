import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
  post: "++id, title, content, category, mainImage, userId", // Primary key and indexed props
});
