import { SignIn } from "@clerk/nextjs";

export default function Page() {
    //return <SignIn />;
    return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
}