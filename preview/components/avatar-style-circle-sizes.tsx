import { Avatar } from "@/packages/ui";

export default function AvatarStyleCircle() {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <Avatar.Image src="/images/avatar.jpeg" alt="Arif Logs" />
        <Avatar.Fallback>AH</Avatar.Fallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <Avatar.Image src="/images/avatar.jpeg" alt="Arif Logs" />
        <Avatar.Fallback>AH</Avatar.Fallback>
      </Avatar>
      <Avatar className="h-20 w-20">
        <Avatar.Image src="/images/avatar.jpeg" alt="Arif Logs" />
        <Avatar.Fallback>AH</Avatar.Fallback>
      </Avatar>
    </div>
  );
}
