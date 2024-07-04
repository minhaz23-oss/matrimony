import { SignIn } from "@clerk/nextjs"
const page = () => {
  return (
<main className=" w-full h-screen flex justify-center items-center">
      <SignIn />
    </main>
  )
}

export default page
