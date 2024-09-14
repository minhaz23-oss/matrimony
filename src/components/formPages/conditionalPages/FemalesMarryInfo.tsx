"use client";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomField } from "@/components/formComponent/CustomField";

const formSchema = z.object({
  gurdiansAgreement: z.string().min(1),
  studyAfterMarriage: z.string().min(1),
  jobAfterMarriage: z.string().min(1),
  whyGettingMarried: z.string().min(1),
});

const FemalesMarryInfo = ({
  activeIndex,
  setActiveIndex,
  setFormData,
  formData,
  biodata,
}: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gurdiansAgreement:
        formData?.marriageRelatedInfo?.gurdiansAgreement ??
        biodata?.marriageRelatedInfo?.gurdiansAgreement ??
        "",

      studyAfterMarriage:
        formData?.marriageRelatedInfo?.wifeStudyAfterMarriage ??
        biodata?.marriageRelatedInfo?.wifeStudyAfterMarriage ??
        "",
      jobAfterMarriage:
        formData?.marriageRelatedInfo?.wifeJobAfterMarriage ??
        biodata?.marriageRelatedInfo?.wifeJobAfterMarriage ??
        "",

      whyGettingMarried:
        formData?.marriageRelatedInfo?.whyGettingMarried ??
        biodata?.marriageRelatedInfo?.whyGettingMarried ??
        "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFormData((prev: any) => ({
      ...prev,
      marriageRelatedInfo: values,
    }));

    setActiveIndex(Math.max(activeIndex + 1, 0));
  }

  return (
    <section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className="text-blue  text-[35px] mb-3">
        Mrriage related Information
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="gurdiansAgreement"
            formLabel="Do your gurdians agree to your marriage?"
            className="w-full"
            control={form.control}
          />

   <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="studyAfterMarriage"
            formLabel="Would you like to continue your study after marriage?"
            className="w-full"
            control={form.control}
          />

<CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="jobAfterMarriage"
            formLabel="Would you like to do any job after marriage?"
            className="w-full"
            control={form.control}
          />

<CustomField
            render={({ field }: any) => (
              <Textarea placeholder="Type your description here." {...field} />
            )}
            name="whyGettingMarried"
            formLabel="Why are you getting married ? What are your thoughts on marriage?"
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

export default FemalesMarryInfo;
