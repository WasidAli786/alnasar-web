import HeroBanner from "@/src/components/home/hero-banner";
import MembershipProgram from "../components/home/membership-program";
import TierPlans from "../components/home/tier-plans";
import { MembershipFaqs } from "../components/home/membership-faqs";
import ComparePlans from "../components/home/compare-plans";
import Login from "../components/auth/login-modal";
import VerifyOtp from "../components/auth/verify-otp-modal";
import UserDetails from "../components/auth/user-details-modal";
import RedirectionModal from "../components/auth/redirection-modal";
import ThanksModal from "../components/auth/thanks-modal";
import MembershipPointsModal from "../components/auth/membership-points-modal";

export default function Home() {
  return (
    <section>
      <HeroBanner />
      <MembershipProgram />
      <TierPlans />
      <ComparePlans />
      <MembershipFaqs />
      {/* <Login />
      <VerifyOtp />
      <UserDetails />
      <RedirectionModal />
      <ThanksModal />
      <MembershipPointsModal /> */}
    </section>
  );
}
