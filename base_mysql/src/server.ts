import app from './App'

const server = app.listen(app.get('port'), () => {
    console.log(
        'App is running in port %d', app.get('port'),
    );
    console.log('   Press CTRL-C to stop\n');
});

export default server;