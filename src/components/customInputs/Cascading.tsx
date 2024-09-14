// "use client";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { FormControl, FormItem } from "@/components/ui/form";
// import axios from "axios";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { CustomField } from "@/components/formComponent/CustomField";
// import { useEffect, useState } from "react";

// interface CascadingProps {
//   form: ReturnType<typeof useForm>;
// }

// const Cascading = ({ form }: any) => {
//   interface Division {
//     division: string;
//   }
//   interface District {
//     district: string;
//     upazilla: string[];
//   }

//   const [divisions, setDivisions] = useState<Division[]>([]);
//   const [districts, setDistricts] = useState<District[]>([]);
//   const [upazillas, setUpazillas] = useState<string[]>([]);

//   const [step, setStep] = useState<"division" | "district" | "upazilla">(
//     "division"
//   );
//   const [openSelect, setOpenSelect] = useState(false);

//   useEffect(() => {
//     const getDivisions = async () => {
//       try {
//         const res = await axios.get("https://bdapis.com/api/v1.2/divisions");
//         setDivisions(res.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getDivisions();
//   }, []);

//   useEffect(() => {
//     if (form.watch("division")) {
//       const getDistricts = async () => {
//         try {
//           const res = await axios.get(
//             `https://bdapis.com/api/v1.2/division/${form.watch("division")}`
//           );
//           setDistricts(res.data.data);
//           form.setValue("district", ""); // Reset district when division changes
//           form.setValue("upazilla", ""); // Reset upazilla when division changes
//           setUpazillas([]); // Clear upazilla options
//           setStep("district");
//           setOpenSelect(true); // Open the dropdown after division is selected
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       getDistricts();
//     }
//   }, [form.watch("division")]);

//   useEffect(() => {
//     if (form.watch("district")) {
//       const district = districts.find(
//         (d) => d.district === form.watch("district")
//       );
//       if (district) {
//         setUpazillas(district.upazilla);
//         form.setValue("upazilla", ""); // Reset upazilla when district changes
//         setStep("upazilla");
//         setOpenSelect(true); // Open the dropdown after district is selected
//       } else {
//         setUpazillas([]);
//       }
//     }
//   }, [form.watch("district"), districts]);

//   const renderOptions = () => {
//     switch (step) {
//       case "division":
//         return divisions.map((val, index) => (
//           <SelectItem key={index} value={val.division}>
//             {val.division}
//           </SelectItem>
//         ));
//       case "district":
//         return districts.map((val, index) => (
//           <SelectItem key={index} value={val.district}>
//             {val.district}
//           </SelectItem>
//         ));
//       case "upazilla":
//         return upazillas.map((val, index) => (
//           <SelectItem key={index} value={val}>
//             {val}
//           </SelectItem>
//         ));
//     }
//   };

//   return (
//     <div >
//       <CustomField
//         render={({ field }) => (
//           <FormItem>
//             <Select
//               onValueChange={(value) => {
//                 field.onChange(value);
//                 if (step === "upazilla") {
//                   setOpenSelect(false); // Close the dropdown after upazilla selection
//                 } else {
//                   if (step === "division") setStep("district");
//                   if (step === "district") setStep("upazilla");
//                   setOpenSelect(true); // Keep the dropdown open on selection
//                 }
//               }}
//               value={form.watch(step)}
//               open={openSelect} // Control the open state
//               onOpenChange={setOpenSelect} // Toggle the open state
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder={"Select"} />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>{renderOptions()}</SelectContent>
//             </Select>
//           </FormItem>
//         )}
//         name={step} // Use the step as the name for the CustomField
//         formLabel={`Select the ${step}`}
//         className="w-full"
//         control={form.control}
//       />
//     </div>
//   );
// };

// export default Cascading;


"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormControl, FormItem } from "@/components/ui/form";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CustomField } from "@/components/formComponent/CustomField";
import { useEffect, useState } from "react";

interface CascadingProps {
  form: ReturnType<typeof useForm>;
}

const Cascading = ({ form }: any) => {
  interface Division {
    division: string;
  }
  interface District {
    district: string;
    upazilla: string[];
  }

  const [divisions, setDivisions] = useState<Division[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [upazillas, setUpazillas] = useState<string[]>([]);

  const [step, setStep] = useState<"division" | "district" | "upazilla">(
    "division"
  );
  const [openSelect, setOpenSelect] = useState(false);

  useEffect(() => {
    const getDivisions = async () => {
      try {
        const res = await axios.get("https://bdapis.com/api/v1.2/divisions");
        setDivisions(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDivisions();
  }, []);

  useEffect(() => {
    if (form.watch("division")) {
      const getDistricts = async () => {
        try {
          const res = await axios.get(
            `https://bdapis.com/api/v1.2/division/${form.watch("division")}`
          );
          setDistricts(res.data.data);
          form.setValue("district", ""); // Reset district when division changes
          form.setValue("upazilla", ""); // Reset upazilla when division changes
          setUpazillas([]); // Clear upazilla options
          setStep("district");
          setOpenSelect(true); // Open the dropdown after division is selected
        } catch (error) {
          console.log(error);
        }
      };
      getDistricts();
    }
  }, [form.watch("division")]);

  useEffect(() => {
    if (form.watch("district")) {
      const district = districts.find(
        (d) => d.district === form.watch("district")
      );
      if (district) {
        setUpazillas(district.upazilla);
        form.setValue("upazilla", ""); // Reset upazilla when district changes
        setStep("upazilla");
        setOpenSelect(true); // Open the dropdown after district is selected
      } else {
        setUpazillas([]);
      }
    }
  }, [form.watch("district"), districts]);

  const backStep = () => {
    if (step === "district") {
      form.setValue("division", ""); // Reset division when going back
      setStep("division");
    } else if (step === "upazilla") {
      form.setValue("district", ""); // Reset district when going back
      setStep("district");
    }
    setOpenSelect(true); // Reopen the select dropdown
  };

  const renderOptions = () => {
    return (
      <>
        {step !== "division" && (
          <SelectItem onClick={backStep} value="back" key="back">
            {"← Back"}
          </SelectItem>
        )}
        {step === "division" &&
          divisions.map((val, index) => (
            <SelectItem key={index} value={val.division}>
              {val.division}
            </SelectItem>
          ))}
        {step === "district" &&
          districts.map((val, index) => (
            <SelectItem key={index} value={val.district}>
              {val.district}
            </SelectItem>
          ))}
        {step === "upazilla" &&
          upazillas.map((val, index) => (
            <SelectItem key={index} value={val}>
              {val}
            </SelectItem>
          ))}
      </>
    );
  };

  return (
    <div>
      <CustomField
        render={({ field }) => (
          <FormItem>
            <Select
              onValueChange={(value) => {
                if (value === "back") {
                  backStep();
                  return;
                }
                field.onChange(value);
                if (step === "upazilla") {
                  setOpenSelect(false); // Close the dropdown after upazilla selection
                } else {
                  if (step === "division") setStep("district");
                  if (step === "district") setStep("upazilla");
                  setOpenSelect(true); // Keep the dropdown open on selection
                }
              }}
              value={form.watch(step)}
              open={openSelect} // Control the open state
              onOpenChange={setOpenSelect} // Toggle the open state
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={"Select"} />
                </SelectTrigger>
              </FormControl>
              <SelectContent
               className="max-h-[300px]"
              >{renderOptions()}</SelectContent>
            </Select>
          </FormItem>
        )}
        name={step} // Use the step as the name for the CustomField
        formLabel={`Select the ${step}`}
        className="w-full"
        control={form.control}
      />
    </div>
  );
};

export default Cascading;