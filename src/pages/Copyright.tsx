
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copyright as CopyrightIcon } from "lucide-react";

const Copyright = () => {
  return (
    <div className="min-h-screen flex flex-col bg-grey-100">
      <Navbar isLoggedIn={false} />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center gap-2">
            <CopyrightIcon className="h-6 w-6 text-teal-600" />
            <CardTitle className="text-3xl font-bold">Copyright Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-500 mb-4">Last updated: May 1, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Copyright Policy</h2>
            <p className="mb-4">
              Seothpics respects the intellectual property rights of others and expects its users to do the same. 
              We are committed to complying with copyright laws and expect all users of our platform to comply as well.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Content Ownership</h2>
            <p className="mb-4">
              All images and content uploaded to Seothpics remain the property of their respective owners. 
              When contributing to Seothpics, users grant us a license to use their content as outlined in our Terms of Service, 
              but they retain copyright ownership of their work.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Copyright Infringement</h2>
            <p className="mb-4">
              If you believe that your copyrighted work has been copied in a way that constitutes copyright 
              infringement and appears on our platform, please provide us with the following information:
            </p>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity</li>
              <li>Your contact information, including your address, telephone number, and email</li>
              <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law</li>
              <li>A statement, made under penalty of perjury, that the above information is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-6 mb-4">DMCA Notice & Takedown Procedure</h2>
            <p className="mb-4">
              Seothpics follows the notice and takedown procedures of the Digital Millennium Copyright Act (DMCA). 
              Upon receiving a valid DMCA notice, we will promptly remove or disable access to the allegedly infringing content 
              and notify the user who posted it.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Counter-Notice Procedure</h2>
            <p className="mb-4">
              If you believe that your content was removed due to a mistake or misidentification, you may submit a counter-notice. 
              Your counter-notice must include:
            </p>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li>Your physical or electronic signature</li>
              <li>Identification of the material that has been removed or to which access has been disabled</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification</li>
              <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the federal court for the judicial district in which your address is located</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Repeat Infringers</h2>
            <p className="mb-4">
              We maintain a policy to terminate the accounts of users who are repeat copyright infringers.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact for Copyright Issues</h2>
            <p className="mb-4">
              Please send all copyright notices and counter-notices to:
              copyright@seothpics.com
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Copyright;
