![Sendbird banner image](http://ww1.prweb.com/prfiles/2021/09/14/18371217/Sendbird_Logo_RGB_lg.png)

# [Sendbird Typescript Platform SDK](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)

[![link to docs](https://img.shields.io/badge/SDK-docs-green)](/docs)
This is a Node.js package written in Typescript  that makes talking to the [Sendbird Platform API](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api) easier.
With this library you can extend your Sendbird integration to include advanced features like message-, and channel automation, user management, create user authentication tokens, and create bots.

# 🔥 Quick start

```javascript  
import * as sendbird from 'sendbird-platform-sdk-typescript';
const APP_ID = "YOUR_APP_ID_FROM_DASHBOARD";
const API_TOKEN = "YOUR_MASTER_API_TOKEN_FROM_DASHBOARD";
const serverConfig = new sendbird.ServerConfiguration("https://api-{app_id}.sendbird.com", { "app_id": APP_ID })
const configuration = sendbird.createConfiguration({ baseServer : serverConfig });
const userAPI = new sendbird.UserApi(configuration);
// List users, use the next token in the response to get the next page of users in subsequent requests
userAPI.listUsers(API_TOKEN, '', 10).then((users) => {
    console.log("Listing first 10 users:\n")
    console.log(users)
}).catch((error) => {
    console.log("Error listing users")
    console.log(error)
})
// How to create a user
const userData: sendbird.CreateUserData = {
    userId: "bob_smith",
    nickname: "Bob",
    profileUrl: "https://cataas.com/c"
}
userAPI.createUser(API_TOKEN, userData).then((user) => {
    console.log("User created:\n")
    console.log(user)
}).catch((error) => {
    console.log("Error creating user:")
    console.log(error)
})
```

# ⚠️ Warnings

 1. This package is not currently in npm. Please see  the Local development section for installation instructions.
 2. This library is intended for server to server requests. **Do not use in a browser environment**. This SDK uses the Master API Token, which should never be exposed to the outside world like in a webpage or app.

# ⚒️ Prerequisite

In order to make requests with this SDK you will need you master API token. This can be found through the [Sendbird dashboard](https://dashboard.sendbird.com/).  Each app you create in Sendbird has its own master api token. These tokens can be found in Settings > Application > General.
![how to find you api token](https://i.imgur.com/0YMKtpX.png)

# 💻 Requirements

You will need [Node.js](https://nodejs.org/en/download/) installed. This has been developed and tested with NodeJS 17+.

# ⚙️ Installation

🚨 Package not yet in npm 🚨
```npm install sendbird-platform-sdk-typescript```

# 🤓 Local Development

 1. Clone the repository
 2. cd to the `sendbird-platform-sdk-typescript` directory
 3. run `npm install`
 4. cd to your project directory
 5. run `npm install /path/to/sendbird-platform-sdk-typescript --save`


# 🗃️ Documentation 
All the documentation for this project lives in the /docs directory of this repo. 

##### Helpful links

|       | Documentation |
| ----------- | ----------- |
| Announcement   | [docs/AnnouncementApi.md](AnnouncementApi.md)|
| Application | [docs/ApplicationApi.md](ApplicationApi.md)  |
| Bot | [docs/BotApi.md](BotApi.md)  |
| GroupChannel | [docs/GroupChannelApi.md](GroupChannelApi.md)  |
| Message | [docs/MessageApi.md](MessageApi.md)  |
| OpenChannel | [docs/OpenChannelApi.md ](OpenChannelApi.md)  |
| User | [docs/UserApi.md](UserApi.md)  |
| Webhooks | [docs/WebhooksApi.md](WebhooksApi.md)  |


