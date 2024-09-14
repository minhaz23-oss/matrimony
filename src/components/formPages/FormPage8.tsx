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
import { Textarea } from "@/components/ui/textarea";
import { CustomField } from "../formComponent/CustomField";
import { complexions, financialStatus, heights, partnersAge } from "@/constraints/script";

const formSchema = z.object({
  partnersMinAge: z.string().min(1),
  partnersMaxAge: z.string().min(1),
  partnersComplexion: z.string().min(1),
  partnersHeight: z.string().min(1),
  partnersEducation: z.string().min(1),
  partnersDistrict: z.string().min(1),
  partnersMaritalStatus: z.string().min(1),
  partnersProfession: z.string().min(1),
  partnersQualities: z.string().min(1),
  partnersFinancialStatus: z.string().min(1)
});

const FormPage8 = ({ activeIndex, setActiveIndex,setFormData,
  formData,biodata }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      partnersMinAge: formData?.expectedPartnersInfo?.partnersMinAge ?? biodata?.expectedPartnersInfo?.partnersMinAge ?? '',
      partnersMaxAge: formData?.expectedPartnersInfo?.partnersMaxAge ?? biodata?.expectedPartnersInfo?.partnersMaxAge ?? '',
      partnersComplexion: formData?.expectedPartnersInfo?.partnersComplexion ?? biodata?.expectedPartnersInfo?.partnersComplexion ?? '',
      partnersHeight: formData?.expectedPartnersInfo?.partnersHeight ?? biodata?.expectedPartnersInfo?.partnersHeight ?? '',
      partnersEducation: formData?.expectedPartnersInfo?.partnersEducation ?? biodata?.expectedPartnersInfo?.partnersEducation ?? '',
      partnersDistrict: formData?.expectedPartnersInfo?.partnersDistrict ?? biodata?.expectedPartnersInfo?.partnersDistrict ?? '',
      partnersProfession: formData?.expectedPartnersInfo?.partnersProfession ?? biodata?.expectedPartnersInfo?.partnersProfession ?? '',
      partnersQualities: formData?.expectedPartnersInfo?.partnersQualities ?? biodata?.expectedPartnersInfo?.partnersQualities ?? '',
      partnersMaritalStatus: formData?.expectedPartnersInfo?.partnersMaritalStatus ?? biodata?.expectedPartnersInfo?.partnersMaritalStatus ?? '',
      partnersFinancialStatus: formData?.expectedPartnersInfo?.partnersFinancialStatus ?? biodata?.expectedPartnersInfo?.partnersFinancialStatus ?? ''
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
     setFormData((prev:any) => ({
         ...prev,
         expectedPartnersInfo: values
     }))

     setActiveIndex(Math.max(activeIndex + 1, 0));
  }

  return (
    <section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className="text-blue  text-[35px] mb-3">Expected Life Partner</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <h1 className='text-blue'>Select your partner's age range</h1>
          <div className=" flex gap-4">
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
                      {partnersAge.map((val, index) => (
                        <SelectItem key={index} value={val.toString()}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
              name="partnersMinAge"
              formLabel="Minimum Age"
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
                      {partnersAge.map((val, index) => (
                        <SelectItem key={index} value={val.toString()}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
              name="partnersMaxAge"
              formLabel="Maximum age"
              className="w-full"
              control={form.control}
            />
          </div>

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
                      {complexions.map((val, index) => (
                        <SelectItem key={index} value={val.toString()}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
              name="partnersComplexion"
              formLabel="Complexion"
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
                      {heights.map((val, index) => (
                        <SelectItem key={index} value={val.toString()}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
              name="partnersHeight"
              formLabel="Height"
              className="w-full"
              control={form.control}
            />

<CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="partnersEducation"
            formLabel="Educational Qualification"
            className="w-full"
            control={form.control}
          />
          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="partnersDistrict"
            formLabel="District"
            className="w-full"
            control={form.control}
          />

          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="partnersMaritalStatus"
            formLabel="Marital Status"
            className="w-full"
            control={form.control}
          />
          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="partnersProfession"
            formLabel="Profession"
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
                      {financialStatus.map((val, index) => (
                        <SelectItem key={index} value={val.toString()}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
              name="partnersFinancialStatus"
              formLabel="Financial Condition"
              className="w-full"
              control={form.control}
            />

<CustomField
            render={({ field }: any) => (
              <Textarea placeholder="Type your description here." {...field} />
            )}
            name="partnersQualities"
            formLabel="Expected qualities of your life partner"
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

export default FormPage8;
