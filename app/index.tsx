// only used for redirecting to welcome screen

import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/match" />;
  // return <Redirect href="/profile-creator" />;
}
