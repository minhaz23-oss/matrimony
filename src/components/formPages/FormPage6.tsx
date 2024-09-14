"use client";
import { number, z } from "zod";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomField } from "../formComponent/CustomField";
import { occupations } from "@/constraints/script";

const formSchema = z.object({
  occupation: z.string().min(1,{
    message: 'please select one'
  }),
  professionDesc: z.string().min(10,{
    message: 'too short!'
  }),
  monthlyIncome: z.string()
});

const FormPage6 = ({ activeIndex, setActiveIndex,setFormData,
  formData,biodata }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      occupation: formData?.occupationalInfo?.occupation ?? biodata?.occupationalInfo?.occupation ?? '',
      professionDesc: formData?.occupationalInfo?.professionDesc ?? biodata?.occupationalInfo?.professionDesc ?? '',
      monthlyIncome: formData?.occupationalInfo?.monthlyIncome ?? biodata?.occupationalInfo?.monthlyIncome ?? ''
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
     setFormData((prev:any) => ({
         ...prev,
         occupationalInfo: values
     }))

     setActiveIndex(Math.max(activeIndex + 1, 0));
  }

  return (
    <section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className="text-blue  text-[35px] mb-3">Occupational Information</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
        <CustomField
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        
                        {occupations.map((val,index) => (

                        <SelectItem key={index}  value={val}>{val}</SelectItem>
                        
                        ))}
                       
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                  name="occupation"
                  formLabel="Occupation"
                  className="w-full"
                  control={form.control}
                />


           <CustomField
            render={({ field }: any) => (
              <Textarea placeholder="Type your description here." {...field} />
            )}
            name="professionDesc"
            formLabel="Give description of your profession."
            className="w-full"
            control={form.control}
          />

          <CustomField
            render={({ field }: any) => (
              <Input placeholder="20000 TK" className="mt-0" {...field} />
            )}
            name="monthlyIncome"
            formLabel="Write your Monthly Income"
            className="w-full"
            control={form.control}
          />
           <div className=" w-full flex justify-between mt-4">
        <button
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
  );
};

export default FormPage6;
