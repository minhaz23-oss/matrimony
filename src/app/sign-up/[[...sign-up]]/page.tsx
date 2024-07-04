import { SignUp } from "@clerk/nextjs"
const page = () => {
  return (
    <main className=" w-full h-screen flex justify-center items-center">
      <SignUp />
    </main>
  )
}

export default page;
