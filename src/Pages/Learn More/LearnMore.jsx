import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { universities } from '../../Constants/index';
import Spinner from '../../components/Spinner/Spinner';


const LearnMore = () => {

    const { id } = useParams();

    const [university, setUniversity] = useState(null);

    useEffect(() => {
        const filteredUniversity = universities.find((univ) => univ.id === id);
        setUniversity(filteredUniversity);
    }, [id]);

    if (!university) {
        return <Spinner />
    }

    return (
        <>
            <div>
                <div >
                    <img
                        className=" w-full h-[521px] bg-cover bg-center mt-[104px]"
                        src={university.image}
                        alt={university.alt}
                    />
                </div>

                <div className="ml-5">

                    <div>
                        <h2 className="text-[#240F6E] font-[Merriweather] w-[1325px] h-[78px] text-[26px] ml-[48px] mt-12">
                            {university.titleLearn1}
                        </h2>
                    </div>

                    {university.t1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-[70px]">
                                {university.t1}
                            </h1>
                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.g1}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.g2}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.g3}
                                </li>
                                {university.g4 && (
                                    <li className="font-[Merriweather] font-[400] text-[24px]">
                                        {university.g4}
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}

                    {university.lr1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-[70px]">
                                {university.lr1}
                            </h1>
                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.l1}
                                </li>
                            </ul>
                        </div>
                    )}

                    {university.apf1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-[70px]">
                                {university.apf1}
                            </h1>
                            <p className="font-[Merriweather] font-[400] text-[24px] ml-[48px] mt-5">
                                {university.ap1}
                            </p>
                        </div>
                    )}

                    {/*  phase 2  */}

                    {university.t2 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.t2}
                            </h1>

                            <ol className="ml-[85px] mt-5 list-decimal" >
                                <li className="font-[Merriweather] font-[400] text-[24px] mt-5">
                                    {university.d1}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.d2}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.d3}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.d4}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.d5}
                                </li>
                                {university.d6 && (
                                    <li className="font-[Merriweather] font-[400] text-[24px]">
                                        {university.d6}
                                    </li>
                                )}
                                {university.d7 && (
                                    <li className="font-[Merriweather] font-[400] text-[24px]">
                                        {university.d7}
                                    </li>
                                )}
                            </ol>
                        </div>
                    )}

                    {university.fd1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.fd1}
                            </h1>
                            <p className="font-[Merriweather] font-[400] text-[24px] ml-[48px] mt-5 ">
                                {university.d1}
                            </p>

                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.d2}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.d3}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.d4}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.d5}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.d5}
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* phase 3 */}

                    {university.t3 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.t3}
                            </h1>

                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.i1}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.i2}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.i3}
                                </li>
                                {university.i4 && (
                                    <li className="font-[Merriweather] font-[400] text-[24px]">
                                        {university.i4}
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}

                    {university.sl1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.sl1}
                            </h1>
                            <p className="font-[Merriweather] font-[400] text-[24px] ml-[48px] mt-5">
                                {university.s1}
                            </p>
                        </div> 
                    )}

                    {university.sli1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.sli1}
                            </h1>
                            <p className="font-[Merriweather] font-[400] text-[24px] ml-[48px] mt-5">
                                {university.s1}
                            </p>
                        </div> 
                    )}  

                    {/* phase 4 */}

                    {university.t4 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.t4}
                            </h1>
                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.s1}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.s2}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.s3}
                                </li>
                            </ul>
                        </div>
                    )}

                    {university.ar1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.ar1}
                            </h1>

                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.a1}
                                </li>
                            </ul>
                        </div> 
                    )}  

                    {university.ara1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.ara1}
                            </h1>

                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.a1}
                                </li>
                            </ul>
                        </div> 
                    )}  

                    {/* phase 5 */}

                    {university.t5 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.t5}
                            </h1>
                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.a1}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.a2}
                                </li>
                            </ul>
                        </div>
                    )}

                    {university.rd1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.rd1}
                            </h1>
                            <p className="font-[Merriweather] font-[400] text-[24px] ml-[48px] mt-5">
                                {university.r1}
                            </p>
                        </div> 
                    )}   

                    {/* phase 6 */}

                    {university.rc1 && (
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.rc1}
                            </h1>
                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.r1}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.r1}
                                </li>
                            </ul>
                        </div> 
                    )}  

                    {university.t6 && (    
                        <div>
                            <h1 className="font-[Merriweather] font-[700] text-[24px] ml-[48px] mt-10">
                                {university.t6}
                            </h1>

                            <ul className="ml-[85px] mt-5 list-disc">
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.c1}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.c2}
                                </li>
                                <li className="font-[Merriweather] font-[400] text-[24px]">
                                    {university.c3}
                                </li>
                            </ul>
                        </div>
                    )}

                </div>

                <div className="flex w-[240px] md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to={`/apply/${university.id}`}>
                    <button
                        type="button"
                        className="text-white bg-[#240F6E] font-[Merriweather] font-[700] text-[26px] rounded-lg text-sm px-[46px] py-[12px] text-center ml-[1120px] mt-[15px] hover:bg-blue-900"
                        >
                        Apply
                    </button>
                        </Link>
                </div>
            </div>

        </>
    )
}

export default LearnMore
