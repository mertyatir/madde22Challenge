import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Etkinlikler",
  description: `Eğlence dünyasında neler olup bittiğini takip etmek artık çok daha kolay! Yakındaki tüm konserler, tiyatrolar, stand-up gösterileri, sinema filmleri ve diğer etkinlikler hakkında bilgi edinebileceğiniz tek adres burası.

  Sitemiz, şehirlerdeki en popüler mekanların, en iyi sanatçıların ve en özel etkinliklerin tarihlerini bir araya getirir. Size en sevdiğiniz sanatçıları kaçırmamanız için hatırlatıcılar sunar. Ayrıca, etkinlikler hakkında detaylı bilgi, yer ve zaman gibi önemli detaylarla birlikte sunulur.
  
  Etkinlik arama seçenekleri, bölgenizdeki veya belirli bir sanatçının performansını aramanıza olanak tanır. Ayrıca, bilet satın alma işlemlerini de buradan gerçekleştirebilirsiniz.
  
  Sitemiz aynı zamanda özel fırsatlar sunar. Üyelerimize, sadece burada bulabilecekleri özel indirimler ve teklifler sunarız. Böylece favori sanatçılarınızı canlı performanslarında izlerken, bütçenizi de korumuş olursunuz.
  
  Eğlence hayatınızı en iyi şekilde yaşamak için, yakındaki tüm etkinlikler hakkında bilgi edinmek için bizi takip edin!`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
