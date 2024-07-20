import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function TeamCard({teamMember} : any) {
  return (
    <Card className="w-full max-w-sm p-6 grid gap-6">
      <div className="flex items-center gap-4">
        <Image src={`/images/team/${teamMember.image}`} alt="Placeholder" width={80} height={80} className="rounded-full"/>
        <div className="grid gap-1">
          <div className="text-lg font-semibold">{teamMember?.name}</div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Link href={`${teamMember?.link}`} className="flex items-center gap-1" prefetch={false}>
              <LinkedinIcon className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href={`https://wa.me/${teamMember?.whatsapp}`} className="flex items-center gap-1" prefetch={false}>
              <PhoneIcon className="w-5 h-5" />
              <span className="text-sm">WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

function LinkedinIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function PhoneIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function XIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}