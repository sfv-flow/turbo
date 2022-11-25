// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

import type { AppProps, AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const MyApp: AppType<{
	session: Session | null;
}> = ({
	Component,
	pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<SessionProvider
			session={session}
			refetchInterval={60 * 60}
			refetchOnWindowFocus={false}
		>
			{getLayout(<Component {...pageProps} />)}
		</SessionProvider>
	);
};

export default trpc.withTRPC(MyApp);
