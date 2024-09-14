import FemalesMarryInfo from "./conditionalPages/FemalesMarryInfo";
import MalesMarryInfo from "./conditionalPages/MalesMarryInfo";

const FormPage7 = ({
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
  
  <MalesMarryInfo 
  setActiveIndex={setActiveIndex}
    activeIndex={activeIndex}
    setFormData={setFormData}
    formData={formData}
    setCurrentPage={setCurrentPage}
    biodata={biodata}
  />
)}
    {((formData?.generalInfo?.biodataType  || biodata?.generalInfo?.biodataType) === "Female's biodata") && (
  <FemalesMarryInfo
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

export default FormPage7;
