
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-grey-100">
      <Navbar isLoggedIn={false} />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-500 mb-4">Last updated: May 1, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the Seothpics platform, you agree to be bound by these Terms of Service. 
              If you do not agree to all of these terms, you are not authorized to use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">2. User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate and complete information. 
              You are responsible for safeguarding your account and for all activities that occur under your account.
            </p>
            <p className="mb-4">
              We reserve the right to disable any user account at any time if, in our opinion, you have 
              failed to comply with any provision of these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Content</h2>
            <p className="mb-4">
              Our platform allows you to upload, submit, store, send, or receive content. You retain ownership 
              of any intellectual property rights that you hold in that content.
            </p>
            <p className="mb-4">
              When you upload, submit, store, send, or receive content on or through our platform, you give 
              Seothpics a worldwide license to use, host, store, reproduce, modify, create derivative works, 
              communicate, publish, publicly perform, publicly display and distribute such content.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Prohibited Conduct</h2>
            <p className="mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Use the platform for any illegal purpose or in violation of any laws</li>
              <li>Violate or infringe other people's intellectual property, privacy, publicity, or other legal rights</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Interfere with the proper working of the platform</li>
              <li>Attempt to hack or gain unauthorized access to our systems or user accounts</li>
              <li>Engage in automated use of the system, such as using scripts to send comments or messages</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access to our service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Disclaimer of Warranties</h2>
            <p className="mb-4">
              Our platform is provided "as is" and "as available" without any warranties of any kind, 
              either express or implied, including but not limited to the implied warranties of merchantability, 
              fitness for a particular purpose, or non-infringement.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Seothpics shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
              whether incurred directly or indirectly.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will provide notification of material 
              changes to these terms through our platform.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
              terms@seothpics.com
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
