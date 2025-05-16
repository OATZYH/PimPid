import { TypeFixer } from "@/components/type-fixer";
import { jsonLdScript } from "../components/JsonLd";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {jsonLdScript({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "พิมพ์ผิด - แก้ไขข้อความไทย/อังกฤษ",
        "description": "เปลี่ยนประโยคหรือข้อความที่พิมพ์ผิดจากภาษาอังกฤษให้เป็นภาษาไทยเวลาลืมกดเปลี่ยนภาษา แก้ไขข้อความภาษาไทย/อังกฤษที่พิมพ์ผิดจากคีย์บอร์ดที่ไม่ถูกต้อง",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "THB"
        },
        "url": "https://pimpid.vercel.app/",
      })}
      <main className="flex-1">
        <TypeFixer />
      </main>
    </div>
  );
}
