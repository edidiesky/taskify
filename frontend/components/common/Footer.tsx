import Link from 'next/link';
import React from 'react';
import AnimateTextWord from '@/components/common/AnimateTextWord';

const Footer = () => {
    return (
        <div
            className="relative"
        >
            <div className="h-full py-20 pb-12 flex flex-col gap-8 items-center justify-center w-full bg-[#fff]">
                <div className="w-full px-4 flex flex-col lg:items-center lg:justify-center gap-4">
                    <h2 className="text-7xl sm:text-[180px] text-[var(--dark-1)] lg:text-[250px] uppercase font-bold lg:text-center">
                        <AnimateTextWord type='bigtext'>
                            SellEasy
                        </AnimateTextWord>

                    </h2>
                    <div className="md:w-[90%] lg:mx-auto max-w-custom text-[var(--dark-1)] grid md:grid-cols-custom_2 gap-8">
                        <div className="w-[200px] flex flex-col gap-4">
                            <h4 className="text-base px-4 text-[#777] family2">Get started</h4>
                            <ul className="flex flex-col">
                                <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">Sign In</li>
                                <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">Sign Up</li>
                            </ul>
                        </div>

                        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-base px-4 text-[#777] family2">Product</h4>
                                <ul className="flex flex-col">
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">Overview</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">
                                        Startup Jobs</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">
                                        Web3 Jobs
                                    </li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">Customer success</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">
                                        Technical support</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">
                                        Internal support 
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-base px-4 text-[#777] family2">Company</h4>
                                <ul className="flex flex-col">
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">Overview</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]"> Curated</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">Pricing</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-base px-4 text-[#777] family2">Resources</h4>
                                <ul className="flex flex-col">
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">Read Our Blog</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]"> Help Center</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">  Security</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-base px-4 text-[#777] family2">Legal</h4>
                                <ul className="flex flex-col">
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]">Terms Of Use</li>
                                    <li className="text-sm p-2 cursor-pointer px-4 rounded-3xl hover:bg-[#3333]"> Privacy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Footer;


