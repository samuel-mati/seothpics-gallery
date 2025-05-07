
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-grey-100">
      <Navbar isLoggedIn={false} />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-500 mb-4">Last updated: May 1, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              Seothpics collects information that you provide directly to us when you create an account, 
              upload content, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Personal information such as name, email address, and profile information</li>
              <li>User content including images, comments, and collections you create</li>
              <li>Usage information and browsing activity on our platform</li>
              <li>Device information including IP address, browser type, and operating system</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience on our platform</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">3. Sharing of Information</h2>
            <p className="mb-4">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Service providers who perform services on our behalf</li>
              <li>Other users when you share content publicly on our platform</li>
              <li>In response to legal process or when required by law</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Retention</h2>
            <p className="mb-4">
              We store the information we collect about you for as long as is necessary for the purpose(s) 
              for which we originally collected it. We may retain certain information for legitimate business 
              purposes or as required by law.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@seothpics.com
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
