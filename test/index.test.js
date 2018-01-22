
const AsyncJSON = require('../lib/index');
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const should = chai.should();
const {
    stringifyAsync,
    parseAsync} = AsyncJSON();



    const testJson = {
        "glossary": {
            "title": "example glossary",
            "GlossDiv": {
                "title": "S",
                "GlossList": {
                    "GlossEntry": {
                        "ID": "SGML",
                        "SortAs": "SGML",
                        "GlossTerm": "Standard Generalized Markup Language",
                        "Acronym": "SGML",
                        "Abbrev": "ISO 8879:1986",
                        "GlossDef": {
                            "para": "A meta-markup language, used to create markup languages such as DocBook.",
                            "GlossSeeAlso": [
                                "GML",
                                "XML"
                            ]
                        },
                        "GlossSee": "markup"
                    }
                }
            }
        }
    }    

describe('stringifyAsync',()=>{

    it('should return same string as JSON.stringify',(done) => {
        const strJson = JSON.stringify(testJson);

        stringifyAsync(testJson).should.eventually.equal(strJson).notify(done);
       
    })
});

/*
const asyncjson = AsyncJSON();

 }
}
const myjsonStr = JSON.stringify(myjson);

const iterations = 100000
console.time('sync: total time (blocking)');
let syncresultsPromises = []
for (let i = 0; i < iterations; i++) {

    let promise = new Promise((resolve, reject) => {
        //resolve(JSON.stringify(myjson));
        resolve(JSON.parse(myjsonStr));

    })
    syncresultsPromises.push(promise);

}
Promise.all(syncresultsPromises).then(results => {

    console.timeEnd('sync: total time (blocking)');
})







setInterval(() => console.log("hola"), 500);
let promises = []

console.time('async: blocking time');
console.time('async: total time');
(async () => {

    for (let i = 0; i < iterations; i++) {
       
        //promises.push(asyncjson.stringify(myjson))
        promises.push(asyncjson.parse( "asdasd" ) )
    }
    try{
        await Promise.all(promises)
    }catch(err){
        console.log('el error',err)
    }
   
    console.timeEnd('async: total time')
})();
*/