import Image from 'next/image'
import Apollo from '@/app/assets/apollo.jpg'

export const FullScreenSection = () => {
    return (
        <div className="col-start-1 col-span-full grid grid-cols-subgrid grid-rows-[2fr_1fr]">
            <h1 className="col-start-2 col-span-6 text-88 italic self-end z-1 text-gray-800">
                liste de naissance
            </h1>

            <nav className="col-start-2 col-span-7 row-start-2 pl-56">
                <ul className="font-heading text-48 text-gray-800">
                    <li>voir la liste</li>
                    <li>proposer un prénom</li>
                    <li>pronostics naissance</li>
                </ul>
            </nav>
            <Image
                className="sticky top-0 col-start-8 col-span-5 w-[46vw] z-0 row-span-full"
                style={{ height: 400, objectFit: 'contain' }}
                alt="couoco"
                src={Apollo}
                width={2268}
                height={4032}
            />
        </div>
    )
}
