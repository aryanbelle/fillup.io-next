import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const user = await currentUser();
  
  // If user is not signed in, redirect to the main page
  if (!user) {
    redirect("/");
  }
  
  // If user is signed in, redirect to the dashboard
  redirect("/dashboard");
}
