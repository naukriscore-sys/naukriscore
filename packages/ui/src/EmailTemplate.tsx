import {
  Html,
  Head,
  Heading,
  Section,
  Text,
  Container,
  Body,
} from "@react-email/components";

interface EmailProps {
  userName: string;
  otp: string;
}

export const Email: React.FC<EmailProps> = ({ userName, otp }) => {
  return (
    <Html>
      <Head />
      <Body className="bg-black text-gray-300 p-5">
        <Container className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg">
          <Section className="text-center mb-5">
            <Heading className="text-green-400 capitalize text-2xl">
              🔐 Your Login OTP, {userName}
            </Heading>
          </Section>

          <Section className="p-4">
            <Text className="text-lg">Dear {userName},</Text>

            <Text className="text-lg">
              Here is your One-Time Password (OTP) to log in to{" "}
              <strong>Naukri Score</strong>:
            </Text>

            <Text className="text-3xl font-bold text-center text-white bg-green-600 p-4 rounded-md tracking-widest my-4">
              {otp}
            </Text>

            <Text className="text-lg">
              This OTP is valid for the next 3 minutes. Do not share it with
              anyone.
            </Text>

            <Text className="text-lg mt-6">Best Regards,</Text>
            <Text className="text-green-400 font-bold text-lg">
              The Naukri Score Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export const ResendOtpEmail: React.FC<EmailProps> = ({ userName, otp }) => {
  return (
    <Html>
      <Head />
      <Body className="bg-black text-gray-300 p-5">
        <Container className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg">
          <Section className="text-center mb-5">
            <Heading className="text-blue-400 capitalize text-2xl">
              🔄 Resend OTP Request, {userName}
            </Heading>
          </Section>

          <Section className="p-4">
            <Text className="text-lg">Hi {userName},</Text>

            <Text className="text-lg">
              We received a request to resend your One-Time Password (OTP) for{" "}
              <strong>Naukri Score</strong>. Your new OTP is:
            </Text>

            <Text className="text-3xl font-bold text-center text-white bg-blue-600 p-4 rounded-md tracking-widest my-4">
              {otp}
            </Text>

            <Text className="text-lg">
              This OTP is valid for the next 3 minutes. Please do not share it
              with anyone.
            </Text>

            <Text className="text-lg mt-6">
              If you did not request this OTP, please ignore this email.
            </Text>

            <Text className="text-lg mt-6">Best Regards,</Text>
            <Text className="text-blue-400 font-bold text-lg">
              The Naukri Score Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
