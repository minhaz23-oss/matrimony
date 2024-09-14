
"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomField } from "@/components/formComponent/CustomField";
import  Cascading  from '@/components/customInputs/Cascading'
import { useRouter } from "next/navigation";



const formSchema = z.object({
  biodataType: z.string().min(1),
  maritalStatus: z.string().min(1),
  division: z.string().min(1, {
    message: "Please select a division",
  }),
  district: z.string().min(1, {
    message: "Please select a district",
  }),
  upazilla: z.string().min(1, {
    message: "Please select an upazilla",
  }),

});


const SearchBar = () => {
  const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      biodataType: '',
      maritalStatus: '',
      division:'',
      district:'',
      upazilla:'',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {

    localStorage.setItem('searchKey', JSON.stringify(values));
    
    router.push(`/search`);
  }


  return (
    <div className=" w-[80%]  bg-blue/[30%] min-h-[150px] rounded-lg mt-10 p-4 ">
      <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full flex-col    ">
       <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male's Biodata">Male's Biodata</SelectItem>
                    <SelectItem value="Female's Biodata">Female's Biodata</SelectItem>
                   
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="biodataType"
            formLabel="I'm looking for"
            className="w-full "
            control={form.control}
          />

          <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Never married">Never married</SelectItem>
                    <SelectItem value="Married">Married</SelectItem>
                    <SelectItem value="Divorced">Divorced</SelectItem>
                    <SelectItem value="Widow">Widower</SelectItem>
                   
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="maritalStatus"
            formLabel="Marital Status"
            className="w-full "
            control={form.control}
          />

           <Cascading form={form} />
          <div className="mt-7 w-full ">

          <Button variant={'blue'} className="px-5 w-full" type="submit">Search</Button>
          </div>
       </form>
      </Form>
    </div>
  )
}

export default SearchBar
