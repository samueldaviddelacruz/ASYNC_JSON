
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

describe('parseAsync',()=>{

    it('should return same object as JSON.parse',(done) => {
        const strJson = JSON.stringify(testJson);

        const parsedJson = JSON.parse(strJson);

        parseAsync(strJson).should.eventually.deep.equal(parsedJson).notify(done);
       
    });

    it('should reject on invalid string/input',(done) => {
        const strJson = JSON.stringify(testJson);

        const parsedJson = JSON.parse(strJson);

        parseAsync(undefined).should.be.rejected.notify(done);
       
    });
});
