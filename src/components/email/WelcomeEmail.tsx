import {Text} from "@react-email/components";
import BaseLayout from "./BaseLayout";

type WelcomeEmailProps = {
  name: string;
};

// Simple functional component for React Email
const WelcomeEmail = ({name}: WelcomeEmailProps) => {
  // Ensure name is a string
  const safeName = typeof name === "string" ? name : String(name || "friend");

  return (
    <BaseLayout title="Welcome to Astro Starter">
      <Text style={{marginBottom: "16px"}}>Hi, {safeName},</Text>
      <Text style={{marginBottom: "16px"}}>Welcome to Astro Starter!</Text>
      <Text>
        Thank you for joining us. We're excited to have you on board and look
        forward to helping you build amazing projects with Astro.
      </Text>
    </BaseLayout>
  );
};

export default WelcomeEmail;
