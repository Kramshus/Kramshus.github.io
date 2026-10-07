import { DiscordSDK } from "@discord/embedded-app-sdk";
const CLIENT_ID = "COLLE_ICI_TON_APPLICATION_ID";
if (new URLSearchParams(location.search).has("frame_id")) {
  new DiscordSDK(CLIENT_ID).ready().catch(console.error);
}
