'use client'
import Nav from "@/components/Nav"
import Dashboard from "@/components/profile/Dashboard"
import EditBiodata from "@/components/profile/EditBiodata"
import IgnoreList from "@/components/profile/IgnoreList"
import PreviewBiodata from "@/components/profile/PreviewBiodata"
import Purchase from "@/components/profile/Purchase"
import ShortList from "@/components/profile/ShortList"
import Slidebar from '@/components/profile/Slidebar'
import { useState } from "react"
const page = () => {
  const [currentPage,setCurrentPage] = useState('dashboard')
   
  return (
    <main className=" w-full min-h-screen">
      <Nav /> 
      <div className=" w-full flex min-h-[calc(100vh-60px)] ">
        <Slidebar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        <div className=" w-full sm:flex-1 min-h-[calc(100vh-60px)]">
          {currentPage === 'dashboard' && <Dashboard/>}
          {currentPage === 'editBiodata' && <EditBiodata setCurrentPage={setCurrentPage}/>}
          {currentPage === 'shortList' && <ShortList/>}
          {currentPage === 'ignoreList' && <IgnoreList/>}
          {currentPage === 'purchase' && <Purchase/>}
          {currentPage === 'previewBiodata' && <PreviewBiodata setCurrentPage={setCurrentPage}/>}
        </div>
      </div>
    </main>
  )
}

export default page;
