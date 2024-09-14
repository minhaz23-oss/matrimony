import MalesInfo from "@/components/formPages/conditionalPages/MalesInfo";
import FemalesInfo from "./conditionalPages/FemalesInfo";
const FormPage5 = ({
  setActiveIndex,
  activeIndex,
  setFormData,
  formData,
  setCurrentPage,
  biodata,
}: any) => {
  return (
    <>
    {((formData?.generalInfo?.biodataType || biodata?.generalInfo?.biodataType) === "Male's biodata") && (
  <MalesInfo
    setActiveIndex={setActiveIndex}
    activeIndex={activeIndex}
    setFormData={setFormData}
    formData={formData}
    setCurrentPage={setCurrentPage}
    biodata={biodata}
  />
)}
    {((formData?.generalInfo?.biodataType  || biodata?.generalInfo?.biodataType) === "Female's biodata") && (
  <FemalesInfo
    setActiveIndex={setActiveIndex}
    activeIndex={activeIndex}
    setFormData={setFormData}
    formData={formData}
    setCurrentPage={setCurrentPage}
    biodata={biodata}
  />
)}
    </>
  );
};

export default FormPage5;
