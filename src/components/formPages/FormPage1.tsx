'use client'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormItem,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { CustomField } from "../formComponent/CustomField"
import { heights } from "@/constraints/script"
import { complexions } from "@/constraints/script"
import { weights } from "@/constraints/script"
import { bloodGroups } from "@/constraints/script"
import { useEffect } from "react"

const formSchema = z.object({
  biodataType: z.string().min(1,{
    message: 'please select a biodata type!!'
  }),
  maritalStatus: z.string().min(1,{
    message: 'please select marital status!!'
  }),
  birthYear: z.string().date(),
  height: z.string().min(1,{
    message: 'please select your height!!'
  }),
  complexion: z.string().min(1,{
    message: 'please select one'
  }),
  weight: z.string().min(1,{
    message: 'please select your weight!!'
  }),
  bloodGroup: z.string().min(1,{
    message: 'please select your blood group!!'
  }),
  nationality: z.string().min(1,{
    message: 'please select your nationality!!'
  })
})
const FormPage1 = ({activeIndex,setActiveIndex,setFormData,formData,biodata}: any) => {
console.log(biodata?.generalInfo?.biodataType)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      biodataType: formData?.generalInfo?.biodataType || "",
      maritalStatus: formData?.generalInfo?.maritalStatus || "",
      birthYear: formData?.generalInfo?.birthYear || "",
      height: formData?.generalInfo?.height || "",
      complexion: formData?.generalInfo?.complexion || "",
      weight: formData?.generalInfo?.weight || "",
      bloodGroup: formData?.generalInfo?.bloodGroup || "",
      nationality: formData?.generalInfo?.nationality || ""
    }
  })
 
  useEffect(() => {
    if (biodata) {
      form.reset({
        biodataType: formData?.generalInfo?.biodataType || biodata?.generalInfo?.biodataType || "",
        maritalStatus: formData?.generalInfo?.maritalStatus || biodata?.generalInfo?.maritalStatus || "",
        birthYear: formData?.generalInfo?.birthYear || biodata?.generalInfo?.birthYear || "",
        height: formData?.generalInfo?.height || biodata?.generalInfo?.height || "",
        complexion: formData?.generalInfo?.complexion || biodata?.generalInfo?.complexion || "",
        weight: formData?.generalInfo?.weight || biodata?.generalInfo?.weight || "",
        bloodGroup: formData?.generalInfo?.bloodGroup || biodata?.generalInfo?.bloodGroup || "",
        nationality: formData?.generalInfo?.nationality || biodata?.generalInfo?.nationality || ""
      })
      
     
    }
  },[biodata,form.reset])
  
  async function  onSubmit(values: z.infer<typeof formSchema>) {
    setFormData((prev: any) => ({
      ...prev,
      generalInfo: values
    }))
    setActiveIndex(Math.max(activeIndex + 1, 0))
  }


  return (
    <section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className='text-blue  text-[35px] mb-3'>General info</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomField 
           render={({ field }) => (
            <FormItem>
              
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={formData?.generalInfo?.biodataType || biodata?.generalInfo?.biodataType || "Select"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Male's biodata">Male's biodata</SelectItem>
                  <SelectItem value="Female's biodata">Female's biodata</SelectItem>
                  
                </SelectContent>
              </Select>
             
              
            </FormItem>
          )}
          name="biodataType"
          formLabel="Biodata Type"
          className="w-full"
          control={form.control}
          />


          <CustomField 
           render={({ field }) => (
            <FormItem>
              
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={formData?.generalInfo?.maritalStatus || biodata?.generalInfo?.maritalStatus || "Select"} />
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
          formLabel="Marital Status"
          className="w-full"
          control={form.control}
          />

          <CustomField 
           render={({ field }: any) => (
            <Input placeholder="2024-07-14  ( use dash (-) between the digits)" className="mt-0" {...field} />
          )}
          name="birthYear"
          formLabel="Birth year"
          className="w-full"
          control={form.control}
          para='Please provide the actual date of birth. Falsifying or providing an inaccurate date of birth wont be acceptable'
          />

          <CustomField 
           render={({ field }) => (
            <FormItem>
              
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={formData?.generalInfo?.height || biodata?.generalInfo?.height || ""} />
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
          name="height"
          formLabel="Height"
          className="w-full"
          control={form.control}
          />

          <CustomField 
           render={({ field }) => (
            <FormItem>
              
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={formData?.generalInfo?.complexion || biodata?.generalInfo?.complexion || ""} />
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
          className="w-full"
          control={form.control}
          />

          <CustomField 
           render={({ field }) => (
            <FormItem>
              
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={formData?.generalInfo?.weight || biodata?.generalInfo?.weight || ""} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                 {weights.map((val,index) => (

                  <SelectItem key={index} value={val}>{val}</SelectItem>
                   
                 ))}
                  
                </SelectContent>
              </Select>
             
              
            </FormItem>
          )}
          name="weight"
          formLabel="Weight"
          className="w-full"
          control={form.control}
          />

          <CustomField 
           render={({ field }) => (
            <FormItem>
              
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={formData?.generalInfo?.bloodGroup || biodata?.generalInfo?.bloodGroup || ""} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                 {bloodGroups.map((val,index) => (

                  <SelectItem key={index} value={val}>{val}</SelectItem>
                   
                 ))}
                  
                </SelectContent>
              </Select>
             
              
            </FormItem>
          )}
          name="bloodGroup"
          formLabel="Blood group"
          className="w-full"
          control={form.control}
          />

<CustomField 
           render={({ field }) => (
            <FormItem>
              
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={ formData?.generalInfo?.nationality || biodata?.generalInfo?.nationality || ""} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                 

                  <SelectItem value="Bangladeshi" >Bangladeshi</SelectItem>
                   
                 
                  
                </SelectContent>
              </Select>
             
              
            </FormItem>
          )}
          name="nationality"
          formLabel="Nationality"
          className="w-full"
          control={form.control}
          />
          <div className=' w-full flex justify-between'>

          <button disabled = {true}  onClick={() => setActiveIndex(Math.max(activeIndex - 1, 0))} className="px-5 py-2 bg-blue text-white rounded-md">Previous</button>
          
        <Button variant='blue' type="submit">Next</Button>
          </div>
      </form>
    </Form>
    </section>
  )
}

export default FormPage1;
