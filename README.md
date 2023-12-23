# Damage Inc App Scripts typescript template
This repository contains a template for writing Apps Scripts in typescript using the `@dmgincs/api-types` library for type-safe API calls.

## Prerequisites
1. You need NodeJS installed
1.1. Download it from the website https://nodejs.org/en/download
1.2. Or use nvm to install any node version https://github.com/nvm-sh/nvm
2. You need Yarn installed
2.1. You can use npm to install yarn: `npm i --global yarn`

## Getting started

1. Fork this repository

2. Run `yarn install`

3. Run `npx clasp login`. You will then be redirected to your browser, sign in with your google account.

4. Open the file `.clasp.json` and replace the `scriptId` value with the script id from your Apps Script.

5. If you have an API key for the DamageInc API, place this in `src/fetcher.ts` at the top as mentioned.

```
{"scriptId":"<put your scirpt id here>","rootDir":"./src"}

https://script.google.com/u/0/home/projects/<this is the script id>/edit
```

## Publishing your script
Once you have made changes to your code, you can push your code to Apps Scripts by running `npx clasp push`.

! Be aware, this will overwrite all changes made directly on Apps Scripts, so be sure you are not losing anything before running this command !

## API types
API types can be found in this repository: https://github.com/dmgincs/api-types. 
A full spec of DamageInc's API and it's endpoints can be found on https://api.dmginc.gg/docs.

If you need any help with endpoints, please reach out to DEV in the [#dev-support](https://discord.com/channels/402229461682094080/1060977720756027502) channel on our Discord server.