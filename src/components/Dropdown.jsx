import { useDispatch, useSelector } from "react-redux";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { SlArrowDown } from "react-icons/sl";
import { FcHighPriority, FcAlarmClock, FcLandscape } from "react-icons/fc";

import { changeStatus } from "../store/todoSlice";

export default function Dropdown() {
   const status = useSelector((state) => state.todos.status);

   const dispatch = useDispatch();

   return (
      <Menu
         as="div"
         className="relative inline-block text-left"
         status={status}
      >
         <div>
            <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 p-2.5 text-lg font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
               {status ? status : "Set task status"}
               <SlArrowDown
                  aria-hidden="true"
                  className="-mr-0.5 h-7 w-5 text-gray-400"
               />
            </MenuButton>
         </div>

         <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1  ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
         >
            <div className="py-1">
               <MenuItem>
                  <span
                     id="Urgent"
                     className="flex align-middle px-4 py-2 text-sm text-gray-700 cursor-pointer"
                     onClick={() => dispatch(changeStatus("Urgent"))}
                  >
                     <FcHighPriority className="mr-1 h-[19px]" /> Urgent
                  </span>
               </MenuItem>
               <MenuItem>
                  <span
                     id="Deferred"
                     className="flex px-4 py-2 text-sm text-gray-700 cursor-pointer"
                     onClick={() => dispatch(changeStatus("Deferred"))}
                  >
                     <FcAlarmClock className="mr-1 h-[22px]" /> Deferred
                  </span>
               </MenuItem>
               <MenuItem>
                  <span
                     id="Not a task"
                     className="flex px-4 py-2 text-sm text-gray-700 cursor-pointer"
                     onClick={() => dispatch(changeStatus("Not a task"))}
                  >
                     <FcLandscape className="mr-1 h-[19px]" /> Not a task
                  </span>
               </MenuItem>
            </div>
         </MenuItems>
      </Menu>
   );
}
