import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import joinClassNames from "../utils/joinClassNames";

export default function DirectoriesMenu() {
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center px-1 py-2 rounded-md text-sm font-medium text-black cursor-pointer  hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <p className="text-center">Directories</p>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a
                href={`/members`}
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer  hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Member Directory
              </a>
            </Menu.Item>
            {/* <Menu.Item>       
              <a
                href={`/events`}
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer  hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                              Member Events
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <a
                              href={`/services`}
                              className="text-gray-700 block px-4 py-2 text-sm cursor-pointer  hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Member Services
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <a
                              href={`/products`}
                              className="text-gray-700 block px-4 py-2 text-sm cursor-pointer  hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Member Products
                            </a>
                          </Menu.Item> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
