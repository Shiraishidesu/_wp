import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("test.db");
db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, time DATETIME DEFAULT CURRENT_TIMESTAMP, title TEXT, body TEXT)");

const posts = [{title:'no.1',body:'frist'},
              {title:'no.2',body:'second'},
              {title:'no.3',body:'third'}];

// Run a simple query
for (const post of posts)
  db.query("INSERT INTO posts (title,body) VALUES (?,?)", [post.title,post.body]);

// Print out data in table
for (const [id, time, title, body] of db.query("SELECT id, time, title, body FROM posts"))
  console.log(id, time, title, body);

// Close connection
db.close();
