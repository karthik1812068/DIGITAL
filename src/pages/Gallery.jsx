import { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import LazyGalleryImage from '../components/gallery/LazyGalleryImage.jsx'
import GalleryValidation from '../components/gallery/GalleryValidation.jsx'
import { ALL_GALLERY_IMAGE_URLS } from '../data/galleryManifest.js'

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | GSR Interiors'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#F8F4EF]">
      <GalleryValidation />

      <Navbar variant="glass" />

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-[12px] px-[14px] pb-[28px] pt-[calc(100px+env(safe-area-inset-top,0px))] sm:grid-cols-2 sm:gap-[14px] sm:px-[20px] sm:pb-[32px] sm:pt-[calc(104px+env(safe-area-inset-top,0px))] lg:grid-cols-3 lg:gap-[16px] lg:px-[32px] xl:grid-cols-4 xl:gap-[18px] xl:px-[40px]">
        {ALL_GALLERY_IMAGE_URLS.map((src) => (
          <div
            key={src}
            className="flex items-center justify-center overflow-hidden rounded-[12px] bg-[#EDE8E0] ring-1 ring-[rgba(30,27,24,0.06)]"
          >
            <LazyGalleryImage src={src} />
          </div>
        ))}
      </div>

      <Footer />
    </main>
  )
}
