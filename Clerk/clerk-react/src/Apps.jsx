import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Aopp() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}