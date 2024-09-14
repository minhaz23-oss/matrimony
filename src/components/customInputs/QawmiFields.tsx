import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Form, FormControl, FormItem } from "@/components/ui/form";
  import { qawmiResults } from "@/constraints/script";
  import { Input } from "@/components/ui/input";
  import { CustomField } from "../formComponent/CustomField";

const QawmiFields = ({form,label,name,name1,name2,subject}:any) => {
  return (
    <>
      <CustomField
           render={({ field }: any) => (
             <Input placeholder="" className="mt-0" {...field} />
           )}
           name={name ? name : 'qawmiInstitute'}
           formLabel={label}
           className="w-full"
           control={form.control}
         />
         {subject && <CustomField
           render={({ field }: any) => (
             <Input placeholder="" className="mt-0" {...field} />
           )}
           name='takhassusSubject'
           formLabel='What is the subject of your Takhassus?'
           className="w-full"
           control={form.control}
         />}
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
                   {qawmiResults.map((val,index) => (
                   <SelectItem key={index} value={val}>{val}</SelectItem>

                   ))}
                 </SelectContent>
               </Select>
             </FormItem>
           )}
           name={name1 ? name1 : "qawmiResult"}
           formLabel="Result"
           className="w-full"
           control={form.control}
         /> 
         <CustomField
           render={({ field }: any) => (
             <Input placeholder="2020" className="mt-0" {...field} />
           )}
           name={name2 ? name2 : 'qawmiPassYear'}
           formLabel='Passing Year'
           className="w-full"
           control={form.control}
         />
    </>
  )
}

export default QawmiFields;
