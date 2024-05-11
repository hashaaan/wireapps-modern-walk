import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Walk | 404 : Not Found",
  description: "The fashion retail store for the modern",
};

const NotFound = () => {
  return (
    <div className="container px-4 md:px-0 my-auto">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="bg-red-600/10 px-5 py-4 rounded-3xl shadow-xl">
          <h2 className="inline-block mr-5 pr-5 text-2xl font-medium align-top leading-10 border-r border-red-600 text-red-600">
            404
          </h2>

          <div className="inline-block">
            <h2 className="font-medium leading-10 m-0 text-red-600">
              This page could not be found. 🙁
            </h2>
          </div>
        </div>

        <Link
          className="text-blue-500 py-2 px-3 bg-white w-fit rounded-md shadow-lg"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
