import { redirectUser } from "@/lib/auth/redirectUser";
import { ReactNode } from "react";

export default async function DashboardPage() {
    await redirectUser();
    return null
}