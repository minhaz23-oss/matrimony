
  import { Input } from "@/components/ui/input";
  import { CustomField } from "../formComponent/CustomField";

const DiplomaFields = ({form}:any) => {
  return (
    <>
      <CustomField
           render={({ field }: any) => (
             <Input placeholder="Diploma in textile engineering" className="mt-0" {...field} />
           )}
           name="diplomaSubject"
           formLabel="What is the subject of your Diploma?"
           className="w-full"
           control={form.control}
         />
          <CustomField
           render={({ field }: any) => (
             <Input placeholder="Dhaka polytechnic institute" className="mt-0" {...field} />
           )}
           name="diplomaInstitute"
           formLabel="Name of educational Institution"
           className="w-full"
           control={form.control}
         />
          <CustomField
           render={({ field }: any) => (
             <Input placeholder="e.g. 2012" className="mt-0" {...field} />
           )}
           name="diplomaPassYear"
           formLabel="In which year you are studying now?"
           className="w-full"
           control={form.control}
         />
    </>
  )
}

export default DiplomaFields
