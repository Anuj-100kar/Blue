import React from 'react';
import { assets } from '../assets/assets';

const SupportSection = () => {
    return (
        <section className="px-8 py-12 bg-white flex flex-col text-center items-center">
            <h3 className="text-xl font-bold mb-2">Team Bluestock Cares</h3>
            <p className="text-gray-600 mb-6">Interact with our members to engage, <br />clarify and contribute</p>

            <div className='flex flex-col md:flex-row gap-8 items-center justify-center text-base text-left'>
                <div>
                    <p className="font-semibold mb-2 text-xl text-center text-left">Interact With Our Experts</p>
                    <ul className="list-none space-y-1">
                        <li>✔ Get quick responses</li>
                        <li>✔ Talk with our veterans</li>
                        <li>✔ Ask your questions</li>
                    </ul>
                </div>

                <div>
                    <img src={assets.community3} alt="Community Chat" className="w-full max-w-md object-contain" />
                </div>
            </div>
        </section>
    );
}

export default SupportSection;

