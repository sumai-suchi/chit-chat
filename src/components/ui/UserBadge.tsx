import { Badge } from "@/components/ui/badge"

export function StatusBadges() {
  return (
    <div className="flex gap-2">
      {/* For "3 Unread" (Teal/Cyan) */}
      <Badge className="bg-[#a5f3f0] text-[#1e293b] hover:bg-[#a5f3f0]/80 border-none px-4 py-1">
        3 Unread
      </Badge>

      {/* For "System" (Rose/Red) */}
      <Badge variant="destructive" className="bg-[#ffe4e6] text-[#e11d48] hover:bg-[#ffe4e6] border-none px-3">
        SYSTEM
      </Badge>
      
      {/* Standard Shadcn Outline */}
      <Badge variant="outline" className="border-slate-200 text-slate-500">
        Active Now: 12
      </Badge>
    </div>
  )
}