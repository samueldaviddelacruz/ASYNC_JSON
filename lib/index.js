
const napa = require('napajs');

const zone1 = napa.zone.create('zone1', { workers: 4 });
const AsyncJSON = (options = { workers: 4 }) => {
    
    const stringifyAsync = (...params) => {

        // Execute an anonymous function in any worker thread in 'zone1'.
        let result_promise = zone1.execute(
            (obj) => {
                //console.log("test")
                return JSON.stringify(obj)
            },
            params);

        return result_promise.then(result => result.value);
    }

    const parseAsync = (...params) => {

        // Execute an anonymous function in any worker thread in 'zone1'.
        let result_promise = zone1.execute(
            (string) => {
                //console.log("test")
                return JSON.parse(string)
            },
            params);

        return result_promise.then(result => result.value);
    }

    return {
        stringifyAsync,
        parseAsync
    }
}






module.exports = AsyncJSON;





