const envLog = process.env.NODE_ENV || 'prod';

const varDump = (val) => {
    if(env === 'dev') {
        console.log(val);
    }
}

const log = (msg,env='dev') => {
    if(env === envLog) {
        console.log(msg);
    }
}

const error = (msg,env='dev') => {
    if(env === envLog) {
        console.error(msg);
    }
}

module.exports = {
    log,
    error,
    varDump
}