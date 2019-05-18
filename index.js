const server = require('./server');
const postsRoutes = require('./postsRoutes/postsRoutes');

const server = express();
const parser = express.json();
server.use(parser);
server.use('/api/posts', postsRoutes);



server.listen(4000, () => {
  console.log("listening in port 4000... ");
});