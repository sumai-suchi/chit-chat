import { Avatar, AvatarFallback, AvatarImage }  from "@/components/ui/Avatar";

interface UserAvatarProps {
  src?: string;
  fallback: string;
  isOnline?: boolean;
  className?: string;
}

export function UserAvatar({ src, fallback, isOnline, className }: UserAvatarProps) {
  return (
    <div className="relative inline-block">
      <Avatar className={className}>
        <AvatarImage src={src} alt={fallback} />
        <AvatarFallback className="bg-slate-100 text-slate-600 font-medium">
          {fallback.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      {/* Online Status Dot */}
      {isOnline && (
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-teal-500 ring-2 ring-white" />
      )}
    </div>
  )
}