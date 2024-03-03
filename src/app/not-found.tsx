import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <>
      <div className="flex flex-col content-center justify-center">
        <div className="flex flex-col content-center justify-center">
          <section className="text-center">
            <Image
              src="/assets/images/404.png"
              alt="empty distribution"
              className="w-[168px] h-auto object-contain mb-2 mx-auto"
              width={168}
              height={168}
            />
            <h2 className="mb-2 font-semibold text-lg">Oops! 404 Error</h2>
            <p className="mb-8 text-sm ">
              {" "}
              Looks like the page you&apos;re searching for has taken a detour.
              Let&apos;s get you back on track!
            </p>
            <div>
              <Link
                className="inline-flex items-center justify-center space-x-2 rounded text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white select-none text-center font-medium bg-blue-700 text-text-light hover:bg-primary-hover h-10 px-4"
                href="/"
              >
                <span className="text-white">Go Back</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default NotFound;
