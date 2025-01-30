"use client"

import * as React from "react"

import {
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    url: string,
    logo: React.ElementType
  }
}) {

  const [activeUser] = React.useState(user)


  return (
    <SidebarMenuButton tooltip={user.name}
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <activeUser.logo className="size-4" />
      </div>
      
      <div className="grid flex-1 text-left text-sm leading-tight ">
        <a href={user.url}><span className="truncate font-semibold">{user.name}</span></a>
      </div>
    </SidebarMenuButton>
  )
}
