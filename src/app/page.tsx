import NavBar from "@/components/NavBar";
import AuthoreCard from "@/components/AuthorCard";
import React from "react";
import Mega from "@/components/Mega";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";

export default function Home() {
  return(
    <div>
      
      <NavBar/>
      <Feature/>
      <Mega/>
      <AuthoreCard/>
      <Footer/>

  
    </div>
  );
}