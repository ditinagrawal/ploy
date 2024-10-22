import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  if (userId != null) redirect("/");
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}
