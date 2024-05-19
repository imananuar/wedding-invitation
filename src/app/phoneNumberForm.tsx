'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const PhoneNumberForm = ({ action }: { action: any }) => {
    return (
        <form action={action}>
        <div className="z-10 w-full max-w-5xl font-mono text-sm flex items-center justify-center">
          <Input placeholder="Phone Number" name="phoneNumber" />
          <Button className="ml-2">RSVP</Button>
        </div>
      </form>
    )
}