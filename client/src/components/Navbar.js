import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const isLoggedIn = !!user; 

  const navigation = [
    { name: "HOME", href: "/", current: true },
    { name: "DASHBOARD", href: "/dashboard", current: false },
    { name: "TEMPLATES", href: "/templates", current: false },
    { name: isLoggedIn ? "LOGOUT" : "LOGIN", href: isLoggedIn ? "/#" : "/login", current: false },
  ];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto shadow-md bg-white   px-2 min-[1100px]:px-6 lg:px-4 z-40">
            <div className="relative flex h-28 items-center justify-between">
              <div className="flex flex-1 items-center justify-center min-[1100px]:items-stretch min-[1100px]:justify-between">
                <Logo />

                <div className="hidden min-[1100px]:ml-6 min-[1100px]:flex">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-black hover:bg-gray-700 text-white"
                            : "text-black hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-2xl font-bold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={item.name === "LOGOUT" ? handleLogout : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center min-[1100px]:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="min-[1100px]:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 w-[32rem] m-auto">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-black hover:bg-gray-700 text-white"
                      : "text-black hover:bg-gray-700 hover:text-white",
                    " block rounded-md px-3 py-2 text-2xl font-bold text-center"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
