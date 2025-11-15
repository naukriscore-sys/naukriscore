"use client";

import Link from "next/link";
import { CustomBtn } from "@/core";
import Logo from "./Logo";
import { useAppSelector } from "@/redux/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch } from "@/redux/hooks";
import { resetUserdata } from "@/redux/slice/user";
import { useRouter } from "next/navigation";
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const navigate = useRouter();
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  return (
    <div className="flex shadow-md z-10 my-5 items-center bg-white max-w-7xl mx-auto px-6 py-2 rounded-4xl justify-between sticky top-5">
      <Logo isAuth={userData?.isAuth} />

      {userData?.isAuth === false && (
        <div className="w-6/10 hidden md:flex text-sm font-medium gap-6 justify-center">
          <Link href={"#about"}>About</Link>
          <Link href={"#features"}>Features</Link>
          <Link href={"#pricing"}>Pricing</Link>
          <Link href={"#faqs"}>FAQs</Link>
        </div>
      )}

      {userData?.isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 border rounded-full px-3 py-2 hover:bg-gray-100 transition focus:outline-none data-[state=open]:bg-gray-100">
            <FontAwesomeIcon
              className="text-(--primary-cards-color)"
              icon={faUser}
            />
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-gray-500 text-sm transition-transform duration-300 ease-in-out data-[state=open]:rotate-180"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-40 mt-2">
            <DropdownMenuItem onClick={() => navigate.push("/profile")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate.push("/score-overview")}>
              Score overview
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate.push("/dashboard")}>
              Dashboard
            </DropdownMenuItem>
            {/* <DropdownMenuItem>Setting</DropdownMenuItem> */}
            <DropdownMenuItem
              className="text-red-500 hover:bg-red-100"
              onClick={() => {
                localStorage.setItem("isAuth", "false");
                localStorage.removeItem("token");
                dispatch(resetUserdata());
                navigate.push("/");
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="hidden md:flex gap-2">
          <CustomBtn
            addClass="ml-auto bg-white border-1 border-[var(--primary-cards-color)] text-[var(--primary-cards-color)]"
            link={"/login"}
            label={"Login"}
          />
          <CustomBtn
            addClass="ml-auto bg-[var(--primary-cards-color)] text-white"
            link={"/register/employee"}
            label={"Join now"}
          />
        </div>
      )}

      {/* <div className="">
        <FontAwesomeIcon className="w-6 h-6 md:hidden" icon={faBarsStaggered} />
      </div> */}
    </div>
  );
};
