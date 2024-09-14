import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
import {  useState } from "react";
import { complexions, educationMethods, fiqhs, heights, partnersAge } from "@/constraints/script";
import Cascading from "../customInputs/Cascading";



const formSchema = z.object({
  biodataType: z.string().min(1),
  maritalStatus: z.string().min(1),
  minAge: z.string(),
  maxAge: z.string(),
  division: z.string(),
  district: z.string(),
  upazilla: z.string(),
  education: z.string(),
  minHeight: z.string(),
  maxHeight: z.string(),
  complexion: z.string(),
  fiqh: z.string(),
});
const SearchSlideBar = ({setFilterData}: any) => {
  const [accordionValue, setAccordionValue] = useState<string | undefined>(undefined);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      biodataType:'',
      maritalStatus:'',
      minAge:'',
      maxAge:'',
      division:'',
      district:'',
      upazilla:'',
      education:'',
      minHeight:'',
      maxHeight:'',
      complexion:'',
      fiqh:''
    },
  });

  const handleSearchClick = async () => {
    const result = await form.trigger();
    if (!result) {
      // Form is invalid, open the accordion
      setAccordionValue('item-1');
    } else {
      // Form is valid, submit it
      form.handleSubmit(onSubmit)();
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    setFilterData(values)
  }

  return (
    <section className=' w-[300px] border-r-2 border-blue min-h-full p-4'>
      <h1 className="text-[22px] font-semibold text-center text-blue">Filters</h1>
     <Form {...form}>
     <form  className="space-y-4 ">
       <Accordion  value={accordionValue}
  onValueChange={setAccordionValue} type="single" collapsible className="w-full min-h-full mt-3" >
      <AccordionItem className=" bg-blue/[20%] p-2 rounded-md" value="item-1">
        <AccordionTrigger className=" text-[18px] text-blue font-semibold">General</AccordionTrigger>
        <AccordionContent>
        <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male's Biodata">Male's Biodata</SelectItem>
                    <SelectItem value="Female's Biodata">Female's Biodata</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="biodataType"
            formLabel="Looking for"
            className="w-full"
            control={form.control}
          />
        <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                  <SelectItem value="Never married">Never married</SelectItem>
                  <SelectItem value="Married">Married</SelectItem>
                  <SelectItem value="Divorced">Divorced</SelectItem>
                  <SelectItem value="Widow">Widow</SelectItem>
                  <SelectItem value="Widower">Widower</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="maritalStatus"
            formLabel="Marital status"
            className="w-full mt-2"
            control={form.control}
          />
          <div className="flex w-full gap-3 mt-2">
          <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {partnersAge.map((val,index) => (
                      <SelectItem key={index} value={val.toString()}>{val}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="minAge"
            formLabel="Minimum Age"
            className="w-full"
            control={form.control}
          />

<CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {partnersAge.map((val,index) => (
                      <SelectItem key={index} value={val.toString()}>{val}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="maxAge"
            formLabel="Maximum Age"
            className="w-full "
            control={form.control}
          />
          </div>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem className=' bg-blue/[20%] p-2 rounded-md mt-3' value="item-2">
        <AccordionTrigger className=" text-[18px] text-blue font-semibold">Address</AccordionTrigger>
        <AccordionContent>
          <Cascading form={form}/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className=' bg-blue/[20%] p-2 rounded-md mt-3' value="item-3">
        <AccordionTrigger className=" text-[18px] text-blue font-semibold">Education</AccordionTrigger>
        <AccordionContent>
        <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {educationMethods.map((val,index) => (

                    <SelectItem key={index} value={val}>{val}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="education"
            formLabel="Education Method"
            className="w-full"
            control={form.control}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className=' bg-blue/[20%] p-2 rounded-md mt-3' value="item-4">
        <AccordionTrigger className=" text-[18px] text-blue font-semibold">Personal</AccordionTrigger>
        <AccordionContent>
          <div className=" w-full flex gap-2">
          <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                   {heights.map((val,index) => (
                    <SelectItem key={index} value={val}>{val}</SelectItem>

                   ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="minHeight"
            formLabel="Minimum Height"
            className="w-full"
            control={form.control}
          />
          <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                   {heights.map((val,index) => (
                    <SelectItem key={index} value={val}>{val}</SelectItem>

                   ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="maxHeight"
            formLabel="Maximum Height"
            className="w-full"
            control={form.control}
          />
          </div>
          <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                   {complexions.map((val,index) => (
                    <SelectItem key={index} value={val}>{val}</SelectItem>

                   ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="complexion"
            formLabel="Complexion"
            className="w-full mt-2"
            control={form.control}
          />
          <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                   {fiqhs.map((val,index) => (
                    <SelectItem key={index} value={val}>{val}</SelectItem>

                   ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="fiqh"
            formLabel="Fiqh Follow"
            className="w-full mt-2"
            control={form.control}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>

      <Button className='w-full' type='button' onClick={handleSearchClick}  variant='blue'>Search</Button>
    </form>
    </Form>
    </section>
  )
}

export default SearchSlideBar;
