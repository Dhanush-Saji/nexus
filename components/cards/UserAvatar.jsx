import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { cn } from "@/lib/utils";

const UserAvatar = ({name,image,classname}) => {
  return (
    <Avatar className={cn("bg-white text-black",classname)}>
        {
            image && (
                <Image src={image || ''} alt={name || ''} width={40} height={40} className="rounded-full" />
            )
        }
      <AvatarFallback delayMs={1000} className="dark:bg-white dark:text-black text-lg">
        {
            name?.split(" ").map((n) =>n[0]).join("")
        }
        </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
