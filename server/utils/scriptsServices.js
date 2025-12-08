const { google } = require('googleapis');
const mammoth = require('mammoth');
const {Credentials} = require('./oauthCreds');

//Section to create and authorise the app connecting to the google drive.
const CLIENT_ID = Credentials.CLIENT_ID;
const CLIENT_SECRET = Credentials.CLIENT_SECRET;
const REDIRECT_URI = Credentials.REDIRECT_URI;

const REFRESH_TOKEN = Credentials.REFRESH_TOKEN;



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
        q: "mimeType='application/vnd.openxmlformats-officedocument.wordprocessingml.document'",
        pageSize: 10,
        fields: 'nextPageToken, files(id, name, fileExtension)',
    });

    

    const files = result.data.files;

    if (!files || files.length === 0) {
        console.log('No files found.');
        return;
    }

    console.log('Files:');
    // Print the name and ID of each file.
    files.forEach((file) => {
        console.log(`${file.name} (${file.id}) and ${file.webViewLink} and content type ${file.fileExtension} and`);
    });

    return files;
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

    //Logic
    const response = await drive.files.get({
            fileId: id,
            alt: 'media',  // this tells the API to return the raw file content
        },
        {
            responseType: 'arraybuffer'
        }
    );


    try {
        const fileBuffer = response.data;

        // Use the 'mammoth' library to extract text.
        const result = await mammoth.convertToHtml({buffer: fileBuffer});

        console.log("Extracted Text Successfully" + result.value);
        return result.value;  // The text content of the document in html format.
    } catch (error) {
        console.error('Error extracting text from .docx file:', error);
    }
}