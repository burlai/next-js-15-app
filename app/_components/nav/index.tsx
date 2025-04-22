import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        position: "relative",
        top: 0,
        left: "40%",
        right: 0,
        float: "left",
      }}
      className="flex items-center justify-between p-4 bg-gray-800 text-white"
    >
      <ul className="pt-4">
        <li>
          <Link href="/" className="underline">
            Home
          </Link>
        </li>
        <li className="pt-2">
          <p>Development:</p>
          <ul className="pl-4">
            <li>
              <Link href="/development" className="underline">
                Index
              </Link>
            </li>
            <li>
              <Link href="/development/sample-app" className="underline">
                Sample App
              </Link>
            </li>
          </ul>
        </li>
        <li className="pt-2">
          <p>Design:</p>
          <ul className="pl-4">
            <li>
              <Link href="/design" className="underline">
                Index
              </Link>
            </li>
            <li>
              <Link href="/design/how-to" className="underline">
                How to
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
