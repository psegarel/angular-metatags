const functions = require("firebase-functions");
const mainJs = require(`${process.cwd()}/dist/angular-metatags/server/main`)

exports.universal = functions.https.onRequest(mainJs.app());