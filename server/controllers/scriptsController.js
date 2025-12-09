const {dbGetAllScripts, dbGetScriptById} = require('../utils/scriptsServices');
//Logic for the api routes.

exports.getAllScripts = async (req, res) => {
    scriptsList = await dbGetAllScripts(); //Replace with a function call from utils file.
    console.log(scriptsList);
    return res.status(200).json(scriptsList);
}

exports.getScriptById = async (req, res) => {

    return res.status(200).json("Hi");
}