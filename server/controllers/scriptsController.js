
//Logic for the api routes.

exports.getAllScripts = async (req, res) => {
    scriptsList = ["script 1", "script 2", "script 3", "script 4"]; //Replace with a function call from utils file.
    console.log(scriptsList);
    return res.status(200).json(scriptsList);
}