const { google } = require('googleapis');

//Section to create and authorise the app connecting to the google drive.
const CLIENT_ID = '659829259390-j3vo96da9ij9uiks5kcp76aiuihe7k77.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04RRgFCJ9ZrfzCgYIARAAGAQSNwF-L9IrBsvnT6iRpZApBAQMKo4z-gHw9NhR85NtkVCA5jINpp9pyc9nz4-64Ga04w1OENSIoPQ';



async function getAllScripts(){
    const oauth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

    //Setting up the google drive. Verfiried using the oauth2 setup above.
    const drive = google.drive({
        version: 'v3',
        auth: oauth2Client
    });

    //Logic.
    const result = await drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
    });

    const files = result.data.files;

    if (!files || files.length === 0) {
        console.log('No files found.');
        return;
    }

    console.log('Files:');
    // Print the name and ID of each file.
    files.forEach((file) => {
        console.log(`${file.name} (${file.id})`);
    });
}


async function getScriptByID(id){
    const oauth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

    //Setting up the google drive. Verfiried using the oauth2 setup above.
    const drive = google.drive({
        version: 'v3',
        auth: oauth2Client
    });

}



(async () => {
    await getAllScripts();
})();

