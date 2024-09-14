"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomField } from "../formComponent/CustomField";

const formSchema = z.object({
  name: z.string().min(1),
  gurdiansMobileNum: z.string().min(11).max(11),
  relationWithGurdian: z.string().min(1),
  gurdiansEmail: z.string().min(1)
});

const FormPage10 = ({activeIndex,setActiveIndex,setFormData,
  formData ,biodata}: any) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: formData?.contact?.name ?? biodata?.contact?.name ?? '',
      gurdiansMobileNum: formData?.contact?.gurdiansMobileNum ?? biodata?.contact?.gurdiansMobileNum ?? '',
      relationWithGurdian: formData?.contact?.relationWithGurdian ?? biodata?.contact?.relationWithGurdian ?? '',
      gurdiansEmail: formData?.contact?.gurdiansEmail ?? biodata?.contact?.gurdiansEmail ?? ''
    },
    
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
     setFormData((prev:any) => ({
         ...prev,
         contact: values
     }))

     setActiveIndex(activeIndex+1);
    //  console.log(activeIndex)
  }

    return (
      <section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className="text-blue  text-[35px] mb-3">Contact</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="name"
            formLabel="Grooms Name"
            className="w-full"
            control={form.control}
          />
        <h1 className="text-blue">Enter full Name</h1>


        <CustomField
            render={({ field }: any) => (
              <Input placeholder="01xxxxxxxxx" className="mt-0" {...field} />
            )}
            name="gurdiansMobileNum"
            formLabel="Gurdians Mobile Number"
            className="w-full"
            control={form.control}
          />
         <p className='text-blue text-[14px]'> This number will be given if anyone wants to contact your gurdian , this number will be needed for verification , so dont give your cousins or friends number here , give you fathers or mothers number.</p>

         <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="relationWithGurdian"
            formLabel="Relation with Gurdian"
            className="w-full"
            control={form.control}
          />

         <CustomField
            render={({ field }: any) => (
              <Input placeholder="example@gmail.com" className="mt-0" {...field} />
            )}
            name="gurdiansEmail"
            formLabel="gurdians Email address"
            className="w-full"
            control={form.control}
          />


          <div className=" w-full flex justify-between mt-4">
            <button
             type="button"
              onClick={() => setActiveIndex(Math.max(activeIndex - 1, 0))}
              className="px-5 py-2 bg-blue text-white rounded-md"
            >
              Previous
            </button>

            <Button variant="blue" type="submit">
              Next
            </Button>
          </div>
          </form>
          </Form>
        
      </section>
    )
  }
  
  export default FormPage10
  