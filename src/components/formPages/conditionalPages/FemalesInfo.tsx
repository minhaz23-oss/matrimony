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
import { CustomField } from "@/components/formComponent/CustomField";
import { fiqhs } from "@/constraints/script";


const formSchema = z.object({
  clothes: z.string().min(10, {
    message: "please explain more...",
  }),
  niqab: z.string().min(5, {
    message: "write the year when you got beard",
  }),
  prayers: z.string().min(5, {
    message: "write the year when you started to pray regularlry",
  }),
  complyingMahram: z.string().min(1, {
    message: "this field is required",
  }),
  quranRecite: z.string().min(1, {
    message: "this feld is required",
  }),
  fiqh: z.string().min(1),
  mazarBelief: z.string().min(1),
  favouriteScholars: z.string().min(5),
  hobbies: z.string().min(10),
  mobileNumber: z.string().min(11),
});
const FemalesInfo = ({
  setActiveIndex,
  activeIndex,
  setFormData,
  formData,
  setCurrentPage,
  biodata,
}: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clothes:
        formData?.personalInfo?.clothes ?? biodata?.personalInfo?.clothes ?? "",
      niqab:
        formData?.personalInfo?.niqab ?? biodata?.personalInfo?.niqab ?? "",
      prayers:
        formData?.personalInfo?.prayers ?? biodata?.personalInfo?.prayers ?? "",
      complyingMahram:
        formData?.personalInfo?.complyingMahram ??
        biodata?.personalInfo?.complyingMahram ??
        "",
      quranRecite:
        formData?.personalInfo?.quranRecite ??
        biodata?.personalInfo?.quranRecite ??
        "",
      fiqh: formData?.personalInfo?.fiqh ?? biodata?.personalInfo?.fiqh ?? "",
      mazarBelief:
        formData?.personalInfo?.mazarBelief ??
        biodata?.personalInfo?.mazarBelief ??
        "",
      favouriteScholars:
        formData?.personalInfo?.favouriteScholars ??
        biodata?.personalInfo?.favouriteScholars ??
        "",
      hobbies:
        formData?.personalInfo?.hobbies ?? biodata?.personalInfo?.hobbies ?? "",
      mobileNumber:
        formData?.personalInfo?.mobileNumber ??
        biodata?.personalInfo?.mobileNumber ??
        "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData((prev: any) => ({
      ...prev,
      personalInfo: values,
    }));

    setActiveIndex(Math.max(activeIndex + 1, 0));
  }

  return (
    <section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className="text-blue  text-[35px] mb-3">Personal Information</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="clothes"
            formLabel="What kinds of clothes do you usually wear outside or in home?"
            className="w-full"
            control={form.control}
          />
          <p className=" text-blue font-normal">
            write about your daily wearing styles and if you are a bride then
            write if you wear niqab or not , if you wear hijab or not etc.
          </p>

          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="niqab"
            formLabel="Do you wear niqab according to sunnah?"
            className="w-full"
            control={form.control}
          />
          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="prayers"
            formLabel="Do you pray five times a day? since when ?"
            className="w-full"
            control={form.control}
          />
          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="complyingMahram"
            formLabel="Do you comply with mahram/non-mahram"
            className="w-full"
            control={form.control}
          />
          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="quranRecite"
            formLabel="Are you able to recite quran correctly?"
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
                    {fiqhs.map((val, index) => (
                      <SelectItem key={index} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="fiqh"
            formLabel="Which Fiqh do you follow? "
            className="w-full"
            control={form.control}
          />
          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="mazarBelief"
            formLabel="Do you believe in Mazar?"
            className="w-full"
            control={form.control}
          />

          <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="favouriteScholars"
            formLabel="Write at least 2 of you favourite scholars name."
            className="w-full"
            control={form.control}
          />

          <CustomField
            render={({ field }: any) => (
              <Textarea placeholder="Type your description here." {...field} />
            )}
            name="hobbies"
            formLabel="Write about your hobbies, likes and dislikes , tastes etc"
            className="w-full"
            control={form.control}
          />

          <CustomField
            render={({ field }: any) => (
              <Input placeholder="01xxxxxxxxx" className="mt-0" {...field} />
            )}
            name="mobileNumber"
            formLabel="Write your mobile number"
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

export default FemalesInfo;
