import Head from 'next/head';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen my-24">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col gap-y-4 items-center w-full max-w-4xl flex-1 px-20">
				<h1 className="text-4xl font-bold text-center">
					Neo Geo Development Book
				</h1>
				<p>
					This is a book on developing for the Neo Geo. Very early days, very
					raw, lots more work needed. You can read it{' '}
					<a className="text-blue-600 underline" href="/book">
						here
					</a>{' '}
					or browse the repo{' '}
					<a
						className="text-blue-600 underline"
						href="https://github.com/city41/neo-geo-dev-book"
					>
						here
					</a>
					.
				</p>
				<p>
					Only an HTML version for now, but once the book is somewhat decent
					I'll have pdf, mobi and epub versions available here too.
				</p>
				<h2 className="text-2xl font-bold my-4">Book Structure</h2>
				<p>
					The main chapters of the book build out a simple game of breakout and
					cover the major aspects of the Neo Geo&apos;s hardware and coding for
					it. From there, the appendices dive into deeper subjects and are more
					standalone. Once you are comfortable with the basics of the Neo Geo,
					you can pick and choose to read appendices as they spark your
					interest. I realize that isn&apos;t normally how an "appendix" works,
					but that&apos;s what I&apos;m going with so far. Maybe I&apos;ll
					rename them "supplementals"?
				</p>
			</main>
		</div>
	);
}
