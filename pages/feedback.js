import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 

 
const FeedbackPage = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Feedback or Testimonials" />


            <Footer />
        </>
    )
}

export default FeedbackPage;