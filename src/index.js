const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: '127.0.0.1',
  });

  await server.start();
};
