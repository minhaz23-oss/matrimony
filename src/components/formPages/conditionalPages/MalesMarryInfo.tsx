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
  wifeInVeil: z.string().min(1),
  wifeStudyAfterMarriage: z.string().min(1),
  wifeJobAfterMarriage: z.string().min(1),
  afterMarriageLiving: z.string().min(1),
  giftFromBrides: z.string().min(1),
  whyGettingMarried: z.string().min(1),
  
});

const MalesMarryInfo = ({ activeIndex, setActiveIndex,setFormData,
  formData,biodata  }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gurdiansAgreement: formData?.marriageRelatedInfo?.gurdiansAgreement ?? biodata?.marriageRelatedInfo?.gurdiansAgreement ?? '',
      wifeInVeil: formData?.marriageRelatedInfo?.wifeInVeil ?? biodata?.marriageRelatedInfo?.wifeInVeil ?? '',
      wifeStudyAfterMarriage: formData?.marriageRelatedInfo?.wifeStudyAfterMarriage ?? biodata?.marriageRelatedInfo?.wifeStudyAfterMarriage ?? '',
      wifeJobAfterMarriage: formData?.marriageRelatedInfo?.wifeJobAfterMarriage ?? biodata?.marriageRelatedInfo?.wifeJobAfterMarriage ?? '',
      afterMarriageLiving: formData?.marriageRelatedInfo?.afterMarriageLiving ?? biodata?.marriageRelatedInfo?.afterMarriageLiving ?? '',
      giftFromBrides: formData?.marriageRelatedInfo?.giftFromBrides ?? biodata?.marriageRelatedInfo?.giftFromBrides ?? '',
      whyGettingMarried: formData?.marriageRelatedInfo?.whyGettingMarried ?? biodata?.marriageRelatedInfo?.whyGettingMarried ?? ''
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
     setFormData((prev:any) => ({
         ...prev,
         marriageRelatedInfo: values
     }))

     setActiveIndex(Math.max(activeIndex + 1, 0));
  }

  return (
    <section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
    <h1 className="text-blue  text-[35px] mb-3">Mrriage related Information</h1>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
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
            name="wifeInVeil"
            formLabel="Will you be able to keep your wife in veil after marriage?"
            className="w-full"
            control={form.control}
          />
        <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="wifeStudyAfterMarriage"
            formLabel="Would you like to allow your wife to study after marriage?"
            className="w-full"
            control={form.control}
          />
        <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="wifeJobAfterMarriage"
            formLabel="Would you like to allow your wife to do any job after marriage?"
            className="w-full"
            control={form.control}
          />
        <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="afterMarriageLiving"
            formLabel="Where will you live with your wife after marriage?"
            className="w-full"
            control={form.control}
          />
        <CustomField
            render={({ field }: any) => (
              <Input placeholder="" className="mt-0" {...field} />
            )}
            name="giftFromBrides"
            formLabel="Would you or your family expect any gift from the brides?"
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

export default MalesMarryInfo;
