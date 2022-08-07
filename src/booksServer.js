const Hapi = require('@hapi/hapi');
const routes = require('./booksRoutes');

const serverInit = async () => {
  const setUpServer = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  setUpServer.route(routes);

  await setUpServer.start();
  console.log(`Server Bookshelf API telah running`);
  console.log(`Pada ${setUpServer.info.uri}`);
};

serverInit();