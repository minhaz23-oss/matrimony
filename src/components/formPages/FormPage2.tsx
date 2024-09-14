"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormItem } from "@/components/ui/form";
import axios from 'axios';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CustomField } from "../formComponent/CustomField";
import { useEffect, useState } from "react";

const formSchema = z.object({
  country: z.string().min(1,{
    message: 'please select a country'
  }),
  division: z.string().min(1,{
    message: 'please select a division'
  }),
  district: z.string().min(1,{
    message: 'please select a district'
  }),
  upazilla: z.string().min(1,{
    message: 'please select a upazilla'
  }),
  grewUpAt: z.string().min(1,{
    message: 'please write the place where you have grown up'
  })
});
const FormPage2 = ({
  activeIndex,
  setActiveIndex,
  setFormData,
  formData,
  biodata
}: any) => {

  interface Division {
    division: string;
  }
  interface District {
    district: string;
    upazilla: []
  }
  
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [upazilla, setUpazilla] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState<string>(formData?.address?.division || biodata?.address?.division || '');
  const [selectedDistrict, setSelectedDistrict] = useState<string>(formData?.address?.district || biodata?.address?.district || '');
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: formData?.address?.country ?? biodata?.address?.country ?? "",
      division: formData?.address?.division ?? biodata?.address?.division ?? "",
      district: formData?.address?.district ?? biodata?.address?.district ?? "",
      upazilla: formData?.address?.upazilla ?? biodata?.address?.upazilla ?? "",
      grewUpAt: formData?.address?.grewUpAt ?? biodata?.address?.grewUpAt ?? ""
    },
  });


  //get divisions from api
  useEffect(() => {
    const getDivisions = async () => {
      try {
        const res = await axios.get('https://bdapis.com/api/v1.2/divisions');
        setDivisions(res.data.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getDivisions();
  },[])
 //get upazilla 
  useEffect(() => {
    if (selectedDistrict) {
      const district = districts.find(d => d.district === selectedDistrict);
      if (district) {
        setUpazilla(district.upazilla);
        console.log(district.upazilla)
      } else {
        setUpazilla([]);
      }
    }
  },[selectedDistrict,districts,biodata])
 //get district from api
  useEffect(() => {
    const getDistrict = async () => {
      try {
        const res = await axios.get(`https://bdapis.com/api/v1.2/division/${selectedDivision}`);
        setDistricts(res.data.data)
        console.log(res.data.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getDistrict();
  },[selectedDivision,biodata])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const address = values.upazilla +',' + values.district +',' + values.division +',' + values.country ;
    setFormData((prev:any) => ({
      ...prev,
      address: values

    }))
    
    setActiveIndex(Math.max(activeIndex + 1, 0))
  }
  return (
<section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className='text-blue  text-[35px] mb-3'>Address</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">


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
                    <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="country"
            formLabel="Country"
            className="w-full"
            control={form.control}
          />


          <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                 onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedDivision(value);
                }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                  
                    {divisions && divisions.map((val,index) => (
                      <SelectItem key={index} value={val.division}>{val.division}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="division"
            formLabel="Division"
            className="w-full"
            control={form.control}
          />
          <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setSelectedDistrict(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                 
                    {districts && districts.map((val,index) => (
                      <SelectItem key={index} value={val.district.toString()}>{val.district}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="district"
            formLabel="District"
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
                    {/* <SelectItem value="Bangladesh">Bangladesh</SelectItem> */}
                    {upazilla && upazilla.map((val,index) => (
                      <SelectItem key={index} value={val}>{val}</SelectItem> 
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="upazilla"
            formLabel="Upazilla"
            className="w-full"
            control={form.control}
          />
           <CustomField
            render={({ field }: any) => (
              <Input placeholder="write the location" className="mt-0" {...field} />
            )}
            name="grewUpAt"
            formLabel="Where did you grow up ?"
            className="w-full"
            control={form.control}
          />


          <div className=" w-full flex justify-between">
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

export default FormPage2;
