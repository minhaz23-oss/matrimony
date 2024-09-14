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
import { CustomField } from "../formComponent/CustomField";

const formSchema = z.object({
 parentsAgreementInSubmitting: z.string().min(1),
 testifyInformation: z.string().min(1),
 informationResponsibility: z.string().min(1)
});

const FormPage9 = ({activeIndex,setActiveIndex,setFormData,
  formData , biodata}: any) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentsAgreementInSubmitting: formData?.pledge?.parentsAgreementInSubmitting ?? biodata?.pledge?.parentsAgreementInSubmitting ?? '',
      testifyInformation: formData?.pledge?.testifyInformation ?? biodata?.pledge?.testifyInformation ?? '',
      informationResponsibility: formData?.pledge?.informationResponsibility ?? biodata?.pledge?.informationResponsibility ?? ''
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
     setFormData((prev:any) => ({
         ...prev,
         pledge: values
     }))

     setActiveIndex(activeIndex + 1);
  }

    return (
      <section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className="text-blue  text-[35px] mb-3">Pledge</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      
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
                      
                        <SelectItem  value='Yes'>
                          Yes
                        </SelectItem>
                        <SelectItem  value='No'>
                          No
                        </SelectItem>
                     
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
              name="parentsAgreementInSubmitting"
              formLabel="Do your parents know that you are submitting biodata to our site?"
              className="w-full"
              control={form.control}
            />
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
                      
                        <SelectItem  value='Yes'>
                          Yes
                        </SelectItem>
                        <SelectItem  value='No'>
                          No
                        </SelectItem>
                     
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
              name="testifyInformation"
              formLabel="By Allah, testify that all the given information is true"
              className="w-full"
              control={form.control}
            />
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
                      
                        <SelectItem  value='Yes'>
                          Yes
                        </SelectItem>
                        <SelectItem  value='No'>
                          No
                        </SelectItem>
                     
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
              name="informationResponsibility"
              formLabel="If you give any false information , we will not take any responsibility of that hereafter , do you agree that?"
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
    )
  }
  
  export default FormPage9
  