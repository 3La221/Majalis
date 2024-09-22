import Image from "next/image";
import MajlisCard from "./_components/MajlisCard";
import Hero from "./_sections/Hero";

export default function Home() {
  return (
    <div>

      <Hero/>
      {/* <h1 className="text-8xl text-center font-bold" >مجالس</h1> */}
      {/* <MajlisCard
        title="شرح كتاب الموطأ"
        chikh="الشيخ احمد الحمود"
        date="2024-09-22"
        mosque="مسجدالفرقان"
        location="باب الزوار"
        time="بعد المغرب"
        isWomenAllowed={true} // Pass a boolean value
      /> */}
    </div>
  );
}
