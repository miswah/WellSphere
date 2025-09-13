import "../global.css";
import { Slot } from "expo-router";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { ClerkProvider } from '@clerk/clerk-expo'
import { verifyInstallation } from 'nativewind';

export default function Layout() {
  verifyInstallation()
  return (
      <ClerkProvider tokenCache={tokenCache}>
         <Slot />
      </ClerkProvider>
  );
}
