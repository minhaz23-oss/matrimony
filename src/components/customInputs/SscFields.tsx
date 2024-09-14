import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Form, FormControl, FormItem } from "@/components/ui/form";
  import { groups,results } from "@/constraints/script";
  import { Input } from "@/components/ui/input";
  import { CustomField } from "../formComponent/CustomField";
const SscFields = ({form}:any) => {
  return (
    <>
      
            <CustomField
            render={({ field }: any) => (
              <Input placeholder="2012" className="mt-0" {...field} />
            )}
            name="sscPassYear"
            formLabel="SSC/Dakhil equivalent passing year"
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
                   {groups.map((val,index) => (
                   <SelectItem key={index} value={val}>{val}</SelectItem>

                   ))}
                 </SelectContent>
               </Select>
             </FormItem>
           )}
            name="sscGroup"
            formLabel="Group"
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
                   {results.map((val,index) => (
                   <SelectItem key={index} value={val}>{val}</SelectItem>

                   ))}
                 </SelectContent>
               </Select>
             </FormItem>
           )}
            name="sscResult"
            formLabel="Result"
            className="w-full"
            control={form.control}
          />
          
    </>
  )
}

export default SscFields
