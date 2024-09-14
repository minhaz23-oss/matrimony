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
import { CustomField } from "../formComponent/CustomField";
import { educationMethods } from "@/constraints/script";
import { aliaAndGeneral } from "@/constraints/script";
import { qawmi } from "@/constraints/script";
import { classes } from "@/constraints/script";
import { useEffect, useState } from "react";
import SscFields from "../customInputs/SscFields";
import HscFields from "../customInputs/HscFields";
import DiplomaFields from "../customInputs/DiplomaFields";
import DiplomaRunFields from "../customInputs/DiplomaRunFields";
import QawmiFields from "../customInputs/QawmiFields";

const formSchema = z.object({
  educationMethod: z.string().min(1, {
    message: "Please select one",
  }),
  highestEducation: z.string().min(1, {
    message: "Please select one",
  }),
  studyUpTo: z.string().optional(),
  sscPassYear: z.string().optional(),
  sscGroup: z.string().optional(),
  sscResult: z.string().optional(),
  hscPassYear: z.string().optional(),
  hscGroup: z.string().optional(),
  hscResult: z.string().optional(),
  diplomaSubject: z.string().optional(),
  diplomaInstitute: z.string().optional(),
  diplomaPassYear: z.string().optional(),
  graduationSubject: z.string().optional(),
  graduationInstitute: z.string().optional(),
  graduationPassYear: z.string().optional(),
  doctorateSubject: z.string().optional(),
  doctorateInstitute: z.string().optional(),
  doctoratePassYear: z.string().optional(),
  qawmiInstitute: z.string().optional(),
  qawmiResult: z.string().optional(),
  qawmiPassYear: z.string().optional(),
  takhasusPassYear: z.string().optional(),
  takhasusResult: z.string().optional(),
  takhasusInstitute: z.string().optional(),
  takhassusSubject: z.string().optional(),
});

const FormPage3 = ({
  activeIndex,
  setActiveIndex,
  setFormData,
  formData,
  biodata
}: any) => {
  const [selectedMethod, setSelectedMethod] = useState<string>();
  const [highestEducation, setHighestEducation] = useState<string[]>([]);
  const [selectedHighestEducation, setSelectedHighestEducation] =
    useState<string>();

  useEffect(() => {
    if (formData?.education?.educationMethod || biodata?.education?.educationMethod) {
      setSelectedMethod(formData?.education?.educationMethod || biodata?.education?.educationMethod);
      if (
        (formData?.education?.educationMethod  === "Alia" ||
        formData?.education?.educationMethod === "General") || (biodata?.education?.educationMethod  === "Alia" ||
          biodata?.education?.educationMethod === "General")
      ) {
        setHighestEducation(aliaAndGeneral);
      } else {
        setHighestEducation(qawmi);
      }
    } else if(selectedMethod === "Alia" || selectedMethod === "General" ) {
      setHighestEducation(aliaAndGeneral);
    } else {
      setHighestEducation(qawmi);
    }
    if (formData?.education?.highestEducation || biodata?.education?.highestEducation) {
      setSelectedHighestEducation(formData?.education?.highestEducation || biodata?.education?.highestEducation);
    }
  }, [formData,selectedMethod]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      educationMethod: formData?.education?.educationMethod ?? biodata?.education?.educationMethod ?? "",
      highestEducation: formData?.education?.highestEducation ?? biodata?.education?.highestEducation ?? "",
      studyUpTo: formData?.education?.studyUpTo ?? biodata?.education?.studyUpTo ?? "",
      sscPassYear: formData?.education?.sscPassYear ?? biodata?.education?.sscPassYear ?? "",
      sscGroup: formData?.education?.group ?? biodata?.education?.group ?? "",
      sscResult: formData?.education?.result ?? biodata?.education?.result ?? "",
      hscPassYear: formData?.education?.sscPassYear ?? biodata?.education?.sscPassYear ?? "",
      hscGroup: formData?.education?.group ?? biodata?.education?.group ?? "",
      hscResult: formData?.education?.result ?? biodata?.education?.result ?? "",
      diplomaSubject: formData?.education?.diplomaSubject ?? biodata?.education?.diplomaSubject ?? "",
      diplomaInstitute: formData?.education?.diplomaInstitute ?? biodata?.education?.diplomaInstitute ?? "",
      diplomaPassYear: formData?.education?.diplomaPassYear ?? biodata?.education?.diplomaPassYear ?? "",
      graduationSubject: formData?.education?.graduationSubject ?? biodata?.education?.graduationSubject ?? "",
      graduationInstitute: formData?.education?.graduationInstitute ?? biodata?.education?.graduationInstitute ?? "",
      graduationPassYear: formData?.education?.graduationPassYear ?? biodata?.education?.graduationPassYear ?? "",
      doctorateSubject: formData?.education?.doctorateSubject ?? biodata?.education?.doctorateSubject ?? "",
      doctorateInstitute: formData?.education?.doctorateInstitute ?? biodata?.education?.doctorateInstitute ?? "",
      doctoratePassYear: formData?.education?.doctoratePassYear ?? biodata?.education?.doctoratePassYear ?? "",
      qawmiInstitute: formData?.education?.qawmiInstitute ?? biodata?.education?.qawmiInstitute ?? "",
      qawmiResult: formData?.education?.qawmiResult ?? biodata?.education?.qawmiResult ?? "",
      qawmiPassYear: formData?.education?.qawmiPassYear ?? biodata?.education?.qawmiPassYear ?? "",
      takhasusPassYear: formData?.education?.takhasusPassYear ?? biodata?.education?.takhasusPassYear ?? "",
      takhasusResult: formData?.education?.takhasusResult ?? biodata?.education?.takhasusResult ?? "",
      takhasusInstitute: formData?.education?.takhasusInstitute ?? biodata?.education?.takhasusInstitute ?? "",
      takhassusSubject: formData?.education?.takhassusSubject ?? biodata?.education?.takhassusSubject ?? "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== "")
    );

    setFormData((prev: any) => ({
      ...prev,
      education: filteredValues,
    }));

    setActiveIndex(Math.max(activeIndex + 1, 0));
  }
  return (
    <section className=" ml-1 sm:ml-20 w-full px-5 pb-[80px] sm:pb-0">
      <h1 className="text-blue  text-[35px] mb-3">Educational Qualification</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomField
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setSelectedMethod(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {educationMethods.map((val, index) => (
                      <SelectItem key={index} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            name="educationMethod"
            formLabel="Your Education method"
            className="w-full"
            control={form.control}
          />
          {selectedMethod && (
            <>
              <CustomField
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setSelectedHighestEducation(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {highestEducation.map((val, index) => (
                          <SelectItem key={index} value={val}>
                            {val}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
                name="highestEducation"
                formLabel="Highest Educational Qualification"
                className="w-full"
                control={form.control}
              />

              {selectedHighestEducation === "Below SSC" && (
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
                          {classes.map((val, index) => (
                            <SelectItem key={index} value={val}>
                              {val}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                  name="studyUpTo"
                  formLabel="Which class did you study up to?"
                  className="w-full"
                  control={form.control}
                />
              )}

              {selectedHighestEducation === "SSC" && <SscFields form={form} />}

              {selectedHighestEducation === "HSC" && <HscFields form={form} />}

              {selectedHighestEducation === "Diploma Running" && (
                <>
                  <SscFields form={form} />
                  <DiplomaFields form={form} />
                </>
              )}

              {selectedHighestEducation === "Diploma" && (
                <>
                  <SscFields form={form} />
                  <DiplomaRunFields form={form} />
                </>
              )}

              {selectedHighestEducation === "Graduate" && (
                <>
                  <HscFields form={form} />
                  <CustomField
                    render={({ field }: any) => (
                      <Input
                        placeholder="B.Sc in Textile Engineering"
                        className="mt-0"
                        {...field}
                      />
                    )}
                    name="graduationSubject"
                    formLabel="Graduation study subject"
                    className="w-full"
                    control={form.control}
                  />
                  <CustomField
                    render={({ field }: any) => (
                      <Input
                        placeholder="Bangladesh University of Textile"
                        className="mt-0"
                        {...field}
                      />
                    )}
                    name="graduationInstitute"
                    formLabel="Name of Educational Institute"
                    className="w-full"
                    control={form.control}
                  />
                  <CustomField
                    render={({ field }: any) => (
                      <Input placeholder="2018" className="mt-0" {...field} />
                    )}
                    name="graduationPassYear"
                    formLabel="Passing Year"
                    className="w-full"
                    control={form.control}
                  />
                </>
              )}
              {selectedHighestEducation === "Doctorate" && (
                <>
                  <HscFields form={form} />

                  <CustomField
                    render={({ field }: any) => (
                      <Input
                        placeholder="B.Sc in Textile Engineering"
                        className="mt-0"
                        {...field}
                      />
                    )}
                    name="graduationSubject"
                    formLabel="Graduation study subject"
                    className="w-full"
                    control={form.control}
                  />
                  <CustomField
                    render={({ field }: any) => (
                      <Input
                        placeholder="Bangladesh University of Textile"
                        className="mt-0"
                        {...field}
                      />
                    )}
                    name="graduationInstitute"
                    formLabel="Name of Educational Institute"
                    className="w-full"
                    control={form.control}
                  />
                  <CustomField
                    render={({ field }: any) => (
                      <Input placeholder="2018" className="mt-0" {...field} />
                    )}
                    name="graduationPassYear"
                    formLabel="Passing Year"
                    className="w-full"
                    control={form.control}
                  />

                  <CustomField
                    render={({ field }: any) => (
                      <Input placeholder="" className="mt-0" {...field} />
                    )}
                    name="doctorateSubject"
                    formLabel="Doctorate study subject"
                    className="w-full"
                    control={form.control}
                  />
                  <CustomField
                    render={({ field }: any) => (
                      <Input placeholder="" className="mt-0" {...field} />
                    )}
                    name="doctorateInstitute"
                    formLabel="Name of Educational Institute"
                    className="w-full"
                    control={form.control}
                  />
                  <CustomField
                    render={({ field }: any) => (
                      <Input placeholder="" className="mt-0" {...field} />
                    )}
                    name="doctoratePassYear"
                    formLabel="Passing Year"
                    className="w-full"
                    control={form.control}
                  />
                </>
              )}

              {selectedHighestEducation === "Ibtidaiyah" && (
                <>
                  <QawmiFields
                    form={form}
                    label="From which madrasa did you study Ibtidaiyah? "
                  />
                </>
              )}
              {selectedHighestEducation === "Mutawassitah" && (
                <>
                  <QawmiFields
                    form={form}
                    label="From which madrasa did you study Mutawassitah? "
                  />
                </>
              )}
              {selectedHighestEducation === "Sanabia Uliya" && (
                <>
                  <QawmiFields
                    form={form}
                    label="From which madrasa did you study Sanabia Uliya? "
                  />
                </>
              )}
              {selectedHighestEducation === "Fazilat" && (
                <>
                  <QawmiFields
                    form={form}
                    label="From which madrasa did you study Fazilat? "
                  />
                </>
              )}
              {selectedHighestEducation === "Takmil" && (
                <>
                  <QawmiFields
                    form={form}
                    label="From which madrasa did you study Takmil? "
                  />
                </>
              )}
              {selectedHighestEducation === "Takhassus" && (
                <>
                  <QawmiFields
                    form={form}
                    label="From which madrasa did you study Takmil? "
                  />
                  <QawmiFields
                    subject={true}
                    name="takhasusInstitute"
                    name1="takhasusResult"
                    name2="takhasusPassYear"
                    form={form}
                    label="From which madrasa did you study Takhassus? "
                  />
                </>
              )}
            </>
          )}

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

export default FormPage3;
