import Image from 'next/image';

export default function About() {

    return (
        <>
            {/* about */}
            <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    {/* division 1 */}
                    <div>
                        <Image src="/about/about-1.png" alt="About Us" width={400} height={300} />
                    </div>

                    {/* division 2 */}
                    <div>

                        {/* heading */}
                        <div>
                            <h2>Welcome to Nest</h2>
                        </div>

                        {/* para 1 */}
                        <div>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                            </p>
                            <p>
                                Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                            </p>
                        </div>

                        {/* crous */}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
