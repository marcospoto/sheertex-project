import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sheetex Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center justify-center w-full sm:h-24 border-b">
        <h1 className="text-4xl sm:text-6xl font-bold">sheertex</h1>
      </header>

      <main className="flex items-center justify-center w-full flex-1 sm:px-20 text-center bg-[#f6f5fa]">
        <div className="flex flex-col sm:flex-row items-center justify-around max-w-4xl mt-6 ">
          <a className="flex items-center flex-col p-6 m-6 mt-6 w-full hover:text-blue-600 focus:text-blue-600">
            <img src="icon1.jpeg" width="100" height="100" />
            <h3 className="text-lg font-bold">Free Shipping &rarr;</h3>
            <p className="mt-4 text-sm">
              Find in-depth information about Next.js features.
            </p>
          </a>

          <a className="flex items-center flex-col p-6 m-6 mt-6 w-full hover:text-blue-600 focus:text-blue-600">
            <img src="icon2.jpeg" width="100" height="100" />
            <h3 className="text-lg font-bold">30-day Guarantee</h3>
            <p className="mt-4 text-sm">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a className="flex items-center flex-col p-6 m-6 mt-6 w-full hover:text-blue-600 focus:text-blue-600">
            <img src="icon3.jpeg" width="100" height="100" />
            <h3 className="text-lg font-bold">Strength Tested</h3>
            <p className="mt-4 text-sm">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center flex-col sm:flex-row w-full min-h-[200px] sm:p-10">
        <div className="flex flex-col justify-between bg-[#defe99] w-full max-w-[400px] h-[200px] p-6">
          <h1 className="text-2xl">Get 15% off-- Join our mailing list</h1>
          <p>
            Be the first to get updates on special offers, product launches, and
            insider exclusives.
          </p>
          <input
            placeholder="YOUR EMAIL"
            className="bg-[#defe99] border-b w-full"
          ></input>
        </div>

        <div className="sm:flex w-full p-3">
          <div className="flex w-full flex-wrap">
            <div className="w-[50%] sm:w-64 p-3">
              <div className="w-full py-3">About</div>
              <div className="flex flex-col w-full">
                <a>Our Story</a>
                <a>Our Knit</a>
                <a>Our Revies</a>
              </div>
            </div>
            <div className="w-[50%] sm:w-64 p-3">
              {" "}
              <div className="w-full py-3">Shop</div>
              <div className="flex flex-col w-full">
                <a>Our Story</a>
                <a>Our Knit</a>
                <a>Our Revies</a>
              </div>
            </div>
            <div className="w-[50%] sm:w-64 p-3">
              {" "}
              <div className="w-full py-3">Contact</div>
              <div className="flex flex-col w-full">
                <a>Our Story</a>
                <a>Our Knit</a>
                <a>Our Revies</a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-24 flex items-center justify-center border-t sm:border-none p-10">
            Flower Image
          </div>
        </div>
      </footer>
    </div>
  );
}
