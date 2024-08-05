'use client'

import {
  IconHeart,
  IconPlus,
  IconSettings,
  IconUserBolt,
} from '@tabler/icons-react'
import React, { useState } from 'react'

import { MusicPlayer } from '@/components/ui/AudioPlayer'
import { Logo } from '@/components/ui/Logo'
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/Sidebar'
import { cn } from '@/lib/utils'

export function ClientSidebar() {
  const links = [
    {
      label: 'Profile',
      href: '#',
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: 'Add sound',
      href: '#',
      icon: (
        <IconPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: 'Likes',
      href: '#',
      icon: (
        <IconHeart className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ]

  const [open, setOpen] = useState(false)

  return (
    <div className={cn('h-screen flex flex-col')}>
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              className="mb-6"
              link={{
                label: 'Settings',
                href: '/',
                icon: (
                  <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <MusicPlayer />
    </div>
  )
}
