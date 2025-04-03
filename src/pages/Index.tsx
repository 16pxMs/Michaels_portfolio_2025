import { BackgroundImages } from "@/components/home/BackgroundImages";
import { Introduction } from "@/components/home/Introduction";
import { SelectedWorks } from "@/components/home/SelectedWorks";
import { SocialLinks } from "@/components/home/SocialLinks";

const Index = () => {
  return (
    <main className="w-full min-h-[screen] bg-[#383838] relative overflow-hidden">
      <BackgroundImages />
      <div className="max-w-[1440px] relative z-10 mx-auto px-6 py-16">
        <Introduction />
        <SelectedWorks />
        <SocialLinks />
      </div>
    </main>
  );
};

export default Index;
