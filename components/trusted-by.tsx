import Image from "next/image"

export default function TrustedBy() {
  return (
    <div className="mt-20">
      <h2 className="text-center text-xl font-medium mb-8">Trusted by Leading Businesses</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="grayscale hover:grayscale-0 transition-all">
            <Image
              src={`/placeholder.svg?height=40&width=120`}
              alt={`Company logo ${i}`}
              width={120}
              height={40}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
