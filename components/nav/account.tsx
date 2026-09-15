import { UserRoundCheckIcon, UserRoundIcon } from "lucide-react";
import Link from "next/link";

import { isCustomerLoggedIn } from "@/lib/auth/server";

export async function NavAccount() {
  const loggedIn = await isCustomerLoggedIn();
  if (!loggedIn) {
    // Sign-in must be a full document navigation; the proxy auth route issues an OAuth redirect and must never be prefetched.
    return (
      // eslint-disable-next-line next/no-html-link-for-pages
      <a
        href="/account/login"
        className="flex items-center justify-center text-foreground transition-colors hover:text-primary"
      >
        <UserRoundIcon className="size-5" />
        <span className="sr-only">Sign in</span>
      </a>
    );
  }
  return (
    <Link
      href="/account"
      className="flex items-center justify-center text-foreground transition-colors hover:text-primary"
    >
      <UserRoundCheckIcon className="size-5" />
      <span className="sr-only">Account</span>
    </Link>
  );
}

export function NavAccountFallback() {
  return (
    <span className="flex items-center justify-center text-foreground">
      <UserRoundIcon className="size-5" />
    </span>
  );
}
