![Sendbird banner image](http://ww1.prweb.com/prfiles/2021/09/14/18371217/Sendbird_Logo_RGB_lg.png)

# [Sendbird Typescript Platform SDK](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)

[![link to docs](https://img.shields.io/badge/SDK-docs-green)](/docs)
[![NPM](https://img.shields.io/npm/v/sendbird-platform-sdk-typescript.svg)](https://www.npmjs.com/package/sendbird-platform-sdk-typescript)

This is a Node.js package written in Typescript  that makes talking to the [Sendbird Platform API](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api) easier.
With this library you can extend your Sendbird integration to include advanced features like message-, and channel automation, user management, create user authentication tokens, and create bots.

>__Note__: Platform API SDK v2 includes only the APIs that were actively used in v1. If you need help getting started with the new SDK, [contact us](https://dashboard.sendbird.com/settings/contact_us).

# 🔥 Quick start

```typescript
import {
  createConfiguration,
  ServerConfiguration,
  UserApi,
  UserApiCreateAUserRequest,
  UserApiListUsersRequest,
} from "@sendbird/sendbird-platform-sdk-typescript";

const APP_ID = "YOUR_APP_ID_FROM_DASHBOARD";
const API_TOKEN = "YOUR_MASTER_API_TOKEN_FROM_DASHBOARD";

const serverConfig = new ServerConfiguration(
  `https://api-${APP_ID}.sendbird.com`,
  { app_id: APP_ID }
);
const configuration = createConfiguration({
  baseServer: serverConfig,
});
const userApi = new UserApi(configuration);

const listUsersParams: UserApiListUsersRequest = {
  limit: 10,
  apiToken: API_TOKEN,
};

const users = await userApi.listUsers(listUsersParams);
console.log("Listing first 10 users:\n", users);

const createUserParams: UserApiCreateAUserRequest = {
  createAUserRequest: {
    userId: "bob_smith",
    nickname: "Bob",
    profileUrl: "https://cataas.com/c",
  },
  apiToken: API_TOKEN,
};

const user = await userApi.createAUser(createUserParams);
console.log("User created:\n", user);
```

# ⚠️ Warnings

 1. This library is intended for server to server requests. **Do not use in a browser environment**. This SDK uses the Master API Token, which should never be exposed to the outside world like in a webpage or app.

# ⚒️ Prerequisite

In order to make requests with this SDK you will need you master API token. This can be found through the [Sendbird dashboard](https://dashboard.sendbird.com/).  Each app you create in Sendbird has its own master api token. These tokens can be found in Settings > Application > General.
![how to find you api token](https://i.imgur.com/0YMKtpX.png)

# 💻 Requirements

You will need [Node.js](https://nodejs.org/en/download/) installed. This has been developed and tested with NodeJS 17+.

# 📦 Installation

You can install the SDK directly from npm:
```
# Using npm
npm install @sendbird/sendbird-platform-sdk-typescript

# Using yarn
yarn add @sendbird/sendbird-platform-sdk-typescript
```
> ⚠️ This SDK is intended for use in server-side environments only. Do not use it in browsers or frontend applications.

# 🤓 Local Development

 1. Clone the repository
 2. cd to the `sendbird-platform-sdk-typescript` directory
 3. run `npm install`
 4. cd to your project directory
 5. run `npm install /path/to/sendbird-platform-sdk-typescript --save`


# 🗃️ Documentation 
All the documentation for this project lives in the root directory of this repo. 

##### Helpful links

|       | Documentation |
| ----------- | ----------- |
| Announcement   | [AnnouncementApi.md](AnnouncementApi.md)|
| Bot | [BotApi.md](BotApi.md)  |
| GroupChannel | [GroupChannelApi.md](GroupChannelApi.md)  |
| Message | [MessageApi.md](MessageApi.md)  |
| OpenChannel | [OpenChannelApi.md ](OpenChannelApi.md)  |
| User | [UserApi.md](UserApi.md)  |

