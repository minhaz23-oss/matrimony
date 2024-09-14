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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { CustomField } from "../formComponent/CustomField";
import { financialStatus, numberCount } from "@/constraints/script";

const formSchema = z.object({
  fathersName: z.string().min(1,{
    message: 'Please write your fathers name'
  }),
  isFatherAlive: z.string().min(1,{
    message: 'Please select one'
  }),
  fathersProfession: z.string().min(10,{
    message: 'This field is required'
  }),
  mothersName: z.string().min(1,{
    message: 'Please write your mtohers name'
  }),
  isMotherAlive: z.string().min(1,{
    message: 'Please select one'
  }),
  mothersProfession: z.string().min(1,{
    message: 'This field is required'
  }),
  brotherCount: z.string().min(1,{
    message: 'This field is required'
  }),
  sisterCount: z.string().min(1,{
    message: 'This field is required'
  }),
  familyStatus: z.string().min(1,{
    message: 'This field is required'
  }),
  financialDesc: z.string().min(10,{
    message: 'This field is required'
  }),
  religiousStatus: z.string().optional()
});
const FormPage4 = ({ activeIndex, setActiveIndex,setFormData,
  formData,biodata }: any) => {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fathersName: formData?.familyInfo?.fathersName ?? biodata?.familyInfo?.fathersName ?? '',
      isFatherAlive: formData?.familyInfo?.isFatherAlive ?? biodata?.familyInfo?.isFatherAlive ?? '',
      fathersProfession: formData?.familyInfo?.fathersProfession ?? biodata?.familyInfo?.fathersProfession ?? '',
      mothersName: formData?.familyInfo?.mothersName ?? biodata?.familyInfo?.mothersName ?? '',
      isMotherAlive: formData?.familyInfo?.isMotherAlive ?? biodata?.familyInfo?.isMotherAlive ?? '',
      mothersProfession: formData?.familyInfo?.mothersProfession ?? biodata?.familyInfo?.mothersProfession ?? '',
      brotherCount: formData?.familyInfo?.brotherCount ?? biodata?.familyInfo?.brotherCount ?? '',
      sisterCount: formData?.familyInfo?.sisterCount ?? biodata?.familyInfo?.sisterCount ?? '',
      familyStatus: formData?.familyInfo?.familyStatus ?? biodata?.familyInfo?.familyStatus ?? '',
      financialDesc: formData?.familyInfo?.financialDesc ?? biodata?.familyInfo?.financialDesc ?? '',
      religiousStatus: formData?.familyInfo?.religiousStatus ?? biodata?.familyInfo?.religiousStatus ?? ''
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData((prev:any) => ({
        ...prev,
        familyInfo: values
    }))

    setActiveIndex(Math.max(activeIndex + 1, 0));
  }

  return (
<section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className="text-blue  text-[35px] mb-3">Family Information</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
           <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="fathersName"
            formLabel="Father's Name"
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
                        
                        <SelectItem value="Yes, alive">Yes, alive</SelectItem>
                        <SelectItem value="Not alive">Not alive</SelectItem>
                           
                          
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                  name="isFatherAlive"
                  formLabel="Is your father Alive?"
                  className="w-full"
                  control={form.control}
                />

          <CustomField
            render={({ field }: any) => (
              <Input placeholder="make it descriptive , ( not only businessman or anything )" className="mt-0" {...field} />
            )}
            name="fathersProfession"
            formLabel="Description of your father's profession"
            className="w-full"
            control={form.control}
          />

<CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="mothersName"
            formLabel="Mother's Name"
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
                        
                        <SelectItem value="Yes, alive">Yes, alive</SelectItem>
                        <SelectItem value="Not alive">Not alive</SelectItem>
                           
                          
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                  name="isMotherAlive"
                  formLabel="Is your mother Alive?"
                  className="w-full"
                  control={form.control}
                />

          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="mothersProfession"
            formLabel="Description of your mother's profession"
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
                        {numberCount.map((val,index) => (

                        <SelectItem key={index} value={val.toString()}>{val}</SelectItem>
                        ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                  name="brotherCount"
                  formLabel="How many brother's do you have ?"
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
                        {numberCount.map((val,index) => (

                        <SelectItem key={index} value={val.toString()}>{val.toString()}</SelectItem>
                        ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                  name="sisterCount"
                  formLabel="How many sister's do you have ?"
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
                        {financialStatus.map((val,index) => (

                        <SelectItem key={index} value={val}>{val}</SelectItem>
                        ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                  name="familyStatus"
                  formLabel="Family financial Status "
                  className="w-full"
                  control={form.control}
                />
          <CustomField
            render={({ field }: any) => (
              <Textarea placeholder="Type your description here." {...field} />
            )}
            name="financialDesc"
            formLabel="Your family's Financial Descirption"
            className="w-full"
            control={form.control}
          />
          <p className=" text-blue font-normal">Mention the details such as residential home (reneted or owned ) , family business and other</p>
          <CustomField
            render={({ field }: any) => (
              <Textarea placeholder="Type your description here." {...field} />
            )}
            name="religiousStatus"
            formLabel="Your family's Religious Condition"
            className="w-full"
            control={form.control}
          />
           <p className=" text-blue font-normal">Write about your family's religious condition such as, if they do their prayer properly or maintain other islamic rules</p>
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

export default FormPage4;
