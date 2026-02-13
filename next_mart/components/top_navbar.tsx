"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { flag: string; currency: string; language: string }[] = [
    {
        flag: "/Deutsch.svg",
        currency: "EUR",
        language: "Deutsch",
    },
    {
        flag: "/Français.svg",
        currency: "EUR",
        language: "Français",
    },
    {
        flag: "/Pусский.svg",
        currency: "RUB",
        language: "Pусский",
    }

]

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
    flag?: string;
    languages?: string;
    currency?: string;
    href?: string;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
    ({ className, children, flag, languages, content, currency, href, ...props }, ref) => {
        return (
            <li ref={ref} {...props}>
                <NavigationMenuLink className={className}>
                    <Link href={'javascript:void(0)'} >
                        <div className="flex flex-row  items-center gap-1 text-sm w-fit">
                            <Image src={`/flags${flag}`} alt="flag" width={20} height={20} className="rounded-xl" />
                            <div className="text-muted-foreground w-20 line-clamp-2">
                                {children || languages}
                            </div>
                        </div>
                    </Link>
                </NavigationMenuLink>
            </li>
        )
    }
)



export default function Navbar() {
    return (
        <>
            {/* top-header */}
            <div className="top-header flex justify-around px-5 py-0.5 text-sm items-center border border-0 border-b-1">
                <div className="first-division flex justify-around gap-5">
                    <div className="">
                        About Us
                    </div>
                    <div>
                        My Account
                    </div>
                    <div>
                        Wishlist
                    </div>
                    <div>
                        Order Tracking
                    </div>
                </div>

                <div className="second-division">
                    <div>
                        Supper Value Deals - Save more with coupons
                    </div>
                    {/* <div>
                        100% Secure delivery without contacting the courier
                    </div> */}
                </div>

                <div className="third-division flex justify-around gap-5 items-center">
                    <div>
                        Need help? Call Us: + 1800 900
                    </div>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem className="hidden md:flex">
                                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                <NavigationMenuContent >
                                    <ul className=" flex justify-center flex-col items-center">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.language}
                                                flag={component.flag}
                                                languages={component.language}
                                            >
                                                {component.language}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>

                        <NavigationMenuList>
                            <NavigationMenuItem className="hidden md:flex relative">
                                <NavigationMenuTrigger>USD</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col gap-2">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.language}
                                                flag={component.flag}
                                                // languages={component.language}
                                                currency={component.currency}
                                            >
                                                {component.currency}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div >
        </>
    )
}