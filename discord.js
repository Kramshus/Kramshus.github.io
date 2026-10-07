import { DiscordSDK } from "@discord/embedded-app-sdk";
const CLIENT_ID = "1557368685969154119";
if (new URLSearchParams(location.search).has("frame_id")) {
  new DiscordSDK(CLIENT_ID).ready().catch(console.error);
}
