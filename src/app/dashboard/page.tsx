export const dynamic = "force-dynamic";

import { redirectUser } from "@/lib/auth/redirectUser";

export default async function DashboardPage() {
    await redirectUser();
    return <div>Redirecting...</div>;
}