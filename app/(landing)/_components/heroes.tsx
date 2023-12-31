import Image from "next/image"

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center gap-20">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/banner.png"
            fill
            className="object-contain dark:hidden"
            alt="Banner"
          />
          <Image
            src="/banner-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Banner dark"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden lg:block">
          <Image
            src="/paint.png"
            fill
            className="object-contain dark:hidden"
            alt="Paint"
          />
          <Image
            src="/paint-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Paint dark"
          />
        </div>
      </div>
    </div>
  )
}

export default Heroes
