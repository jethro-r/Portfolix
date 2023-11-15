import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "HOME", href: "#", current: true },
  { name: "DASHBOARD", href: "#", current: false },
  { name: "TEMPLATES", href: "#", current: false },
  { name: "LOGOUT", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto shadow-md bg-white   px-2 min-[1100px]:px-6 lg:px-4 z-40" >
            <div className="relative flex h-28 items-center justify-between">
              <div className="flex flex-1 items-center justify-center min-[1100px]:items-stretch min-[1100px]:justify-between">
                <div class="flex flex-shrink-0 items-center w-auto sm:ml-8 py-4 px-4 sm:px-8 sm:py-6 bg-gradient-to-r from-cyan-900 to-green-600">
                  <div class="text-center text-white text-md sm:text-4xl font-bold font-condensed">
                    PORTFOLIX
                  </div>
                </div>

                <div className="hidden min-[1100px]:ml-6 min-[1100px]:flex">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-black hover:bg-gray-700 text-white"
                            : "text-black hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-2xl font-bold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
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
