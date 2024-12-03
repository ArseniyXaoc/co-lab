import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className="flex items-center justify-end p-4">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton appearance={{ elements: { avatarBox: 'w-10 h-10' } }} />
      </SignedIn>
    </div>
  );
};

export default Header;
