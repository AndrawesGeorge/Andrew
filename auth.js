const Amplify = require('aws-amplify').default; // Use .default for compatibility
const Auth = require('aws-amplify').Auth;
const awsconfig = require('./aws-exports'); // Your Amplify configuration

Amplify.configure(awsconfig);

// Sign in function
async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log('User signed in:', user);
    } catch (error) {
        console.error('Error signing in:', error);
    }
}

// Sign out function
async function signOut() {
    try {
        await Auth.signOut();
        console.log('User signed out');
    } catch (error) {
        console.error('Error signing out:', error);
    }
}
