import univImage1 from "../assets/Kabardino.jfif"
import univImage2 from '../assets/Ufa.jfif'
import univImage3 from '../assets/Ulyanovsk.jfif'
import univImage4 from '../assets/Saratov.jfif'
import univImage5 from '../assets/Astraxan.jfif'

import learnImage1 from '../assets/image 3.svg'
import learnImage2 from '../assets/image 3 (1).svg'
import learnImage3 from '../assets/image 3 (2).svg'
import learnImage4 from '../assets/image 3 (3).svg'
import learnImage5 from '../assets/image 3 (4).svg'
import { TbH6 } from "react-icons/tb"

export const countries = [
    {label: 'Russia' , value: "Russia"},
    {label: 'India' , value: "India"},
    {label: 'Pakistan' , value: "Pakistan"}
]

export const periodOfTime = [
    {label: 'Apr-June 2024' , value: "Apr-june 2024"},
    {label: 'June-Aug 2024' , value: "June-Aug 2024"},
    {label: 'Aug-Nov 2024' , value: "Aug-Nov 2024"},
    {label: 'Nov-Fep 2025' , value: "Nov-Fep 2025"},
]

export const budgetRanges = [
    {label: 'USD 2500-4000 per year' , value: "USD 2500-4000 per year"},
    {label: 'USD 3500-5000 per year' , value: "USD 3500-5000 per year"},
    {label: 'USD 4500-6000 per year' , value: "USD 4500-6000 per year"},
]


export const universities = [
    {
        id:'1',
        imageUniv: univImage1 , alt: 'Kabardino' , 
        titleUniv : 'Kabardino Balkaria State Medical University' , 
        location: 'Ulitsa Chernyshevskogo, 173, Nalchik, Kabardino-Balkarian Republic, Russia, 360004' , 

        image: learnImage1 , alt: 'image 3' ,
        titleLearn1 :'Kabardino-Balkarian State Medical University is one of the prestigious medical universities in Russia, located in Nalchik, the capital of the Kabardino-Balkarian Republic.',
        t1: 'General Information about the University:',
        t2: 'Faculties and Departments:',
        t3: 'Facilities and Infrastructure:',
        t4: 'Student Life:',
        t5: 'Admission:',
        t6: 'Contact:',
        g1: 'Establishment: The university was established in 1932.',
        g2: 'Academic Accreditation: It is recognized by the Russian Ministry of Health and Higher Education and various international bodies.',
        g3: 'Academic Programs: The university offers a wide range of academic programs in general medicine, dentistry, pharmacy, nursing, and continuous medical education.',
        g4: 'Language of Instruction: The main languages of instruction are Russian and English.',
        department:[
         'Faculty of General Medicine: Provides comprehensive medical education covering clinical and basic medicine.',
         'Faculty of Dentistry: Trains specialists in dentistry with a focus on practical skills.',
         'Faculty of Pharmacy: Offers comprehensive education in pharmacy and pharmaceutical sciences.',
         'Faculty of Nursing: Trains qualified nurses to provide comprehensive healthcare.',
         'Faculty of Continuous Medical Education: Offers professional development programs for doctors and healthcare practitioners.',
                
          ],
        d1: 'Faculty of General Medicine: Provides comprehensive medical education covering clinical and basic medicine.',
        d2: 'Faculty of Dentistry: Trains specialists in dentistry with a focus on practical skills.',
        d3: 'Faculty of Pharmacy: Offers comprehensive education in pharmacy and pharmaceutical sciences.',
        d4: '    of Nursing: Trains qualified nurses to provide comprehensive healthcare.',
        d5: 'Faculty of Continuous Medical Education: Offers professional development programs for doctors and healthcare practitioners.',
        i1: 'Teaching Hospitals: The university has well-equipped teaching hospitals where students receive practical training.',
        i2: 'Libraries: Contains a wide range of medical and scientific books and references.',
        i3: 'Modern Laboratories: Equipped with the latest technologies for scientific research and practical training.',
        s1: 'University Dormitories: The university provides comfortable accommodation for international students.',
        s2: 'Student Activities: There are numerous clubs and student associations that organize cultural and sports events.',
        s3: "Academic Support: The university provides academic support and counseling to ensure students' academic excellence.",
        a1: 'Admission Requirements: The university requires a high school diploma and entrance exam results.',
        a2: 'International Students: The university welcomes students from all over the world and provides them with the necessary support to adapt to academic life in Russia.',
        c1: 'Address: 360004, Nalchik, Kabardino-Balkarian Republic, Russia.',
        c2: 'Email: [Provide specific email]',
        c3: 'Phone: [Provide specific phone number]'
    },
    {
        id:'2',
        imageUniv: univImage2 , alt: 'Ufa' , 
        titleUniv : 'Ufa state medical university' , 
        location: 'Ulitsa Lenina, 3, Ufa, Republic of Bashkortostan, Russia, 450008' , 

        image: learnImage2 , alt: 'image 3 (1)' ,
        titleLearn1 : 'Ufa State Medical University (USMU) is a well-regarded medical institution in Russia, located in Ufa, the capital city of the Republic of Bashkortostan.',
        t1: 'General Information about the University:',
        t2: 'Faculties and Departments:',
        t3: 'Facilities and Infrastructure:',
        t4: 'Student Life:',
        t5: 'Admission:',
        rc1: 'Research and Collaboration:',
        t6: 'Contact:',
        g1: 'Establishment: USMU was established in 1932.',
        g2: 'Accreditation: The university is accredited by the Russian Ministry of Health and various international medical bodies.',
        g3: 'Language of Instruction: The primary languages of instruction are Russian and English.',
        department:[
         'Faculty of General Medicine: Offers comprehensive education in clinical and theoretical medicine.',
         'Faculty of Dentistry: Provides training in all aspects of dental medicine.',
         'Faculty of Pediatrics: Specializes in medical education focused on child healthcare.',
         'Faculty of Pharmacy: Focuses on pharmaceutical sciences and pharmacy practice.',
         'Faculty of Preventive Medicine: Concentrates on public health and preventive healthcare measures.',
         'Faculty of Nursing: Trains nurses with a focus on practical and theoretical nursing skills.',
         'Faculty of Continuous Medical Education: Offers professional development and specialization programs for healthcare professionals.',
             ],
        d1: 'Faculty of General Medicine: Offers comprehensive education in clinical and theoretical medicine.',
        d2: 'Faculty of Dentistry: Provides training in all aspects of dental medicine.',
        d3: 'Faculty of Pediatrics: Specializes in medical education focused on child healthcare.',
        d4: 'Faculty of Pharmacy: Focuses on pharmaceutical sciences and pharmacy practice.',
        d5: 'Faculty of Preventive Medicine: Concentrates on public health and preventive healthcare measures.',
        d6: 'Faculty of Nursing: Trains nurses with a focus on practical and theoretical nursing skills.',
        d7: 'Faculty of Continuous Medical Education: Offers professional development and specialization programs for healthcare professionals.',
        i1: 'Teaching Hospitals: USMU is affiliated with several well-equipped teaching hospitals for clinical training.',
        i2: 'Research Laboratories: Equipped with modern technology for cutting-edge medical research.',
        i3: 'Libraries: Extensive collections of medical and scientific literature to support students and faculty.',
        i4: 'Simulation Centers: Advanced simulation centers for practical skill development.',
        s1: "Accommodation: USMU provides dormitory facilities for international and local students.",
        s2: 'Student Organizations: Numerous clubs and societies for cultural, sports, and academic activities.',
        s3: 'Support Services: Academic advising, career counseling, and psychological support services for students.',
        a1: 'Requirements: High school diploma, entrance exams, and proficiency in the language of instruction (Russian or English).',
        a2: 'International Students: USMU has a diverse international student body and provides support for their integration and academic success.',
        r1: 'Research Opportunities: Students and faculty are encouraged to participate in research projects.',
        r2: 'International Collaboration: USMU has partnerships with various international universities and medical institutions.',
        c1: 'Address: Ufa, Republic of Bashkortostan, Russia.',
        c2: 'Email: [Provide specific email]',
        c3: 'Phone: [Provide specific phone number]',
    },
    {
        id:'3',
        imageUniv: univImage3  , alt: 'Ulyanovsk' , 
        titleUniv : 'Ulyanovsk state medical university' , 
        location: 'Medical College, Ulitsa Ablukova, 31, Ulyanovsk, Ulyanovsk Oblast, Russia, 432005' , 

        image: learnImage3 , alt: 'image 3 (2)' ,
        titleLearn1 : 'Ulyanovsk State Medical University (USMU) is a prominent medical institution located in Ulyanovsk, Russia. Known for its commitment to medical education and research, USMU attracts students from various parts of the world.',
        t1: 'General Information about the University:',
        t2: 'Faculties and Departments:',
        t3: 'Facilities and Infrastructure:',
        t4: 'Student Life:',
        t5: 'Admission:',
        rc1: 'Research and Collaboration:',
        t6: 'Contact:',
        g1: 'Establishment: USMU was established in 1988.',
        g2: 'Accreditation: The university is accredited by the Russian Ministry of Health and recognized by several international medical bodies.',
        g3: 'Language of Instruction: The primary languages of instruction are Russian and English.',
        department:[
         'Faculty of General Medicine: Provides comprehensive education in clinical and theoretical medicine, preparing students for various medical careers.',
         'Faculty of Pediatrics: Focuses on medical education related to child healthcare and pediatrics.',
         'Faculty of Dentistry: Offers specialized training in dental medicine, including practical and theoretical aspects.',
         'Faculty of Pharmacy: Emphasizesnazca science, covering both theoretical knowledge and practical skills.',
         'Faculty of Nursing: Trains nurses with a balanced approach to practical and theoretical nursing education.',
         'Faculty of Preventive Medicine: Concentrates on public health, epidemiology, and preventive healthcare measures.',
         'Faculty of Postgraduate Education: Provides opportunities for professional development and specialization for healthcare practitioners.',
        ], 
        d1: 'Faculty of General Medicine: Provides comprehensive education in clinical and theoretical medicine, preparing students for various medical careers.',
        d2: 'Faculty of Pediatrics: Focuses on medical education related to child healthcare and pediatrics.',
        d3: 'Faculty of Dentistry: Offers specialized training in dental medicine, including practical and theoretical aspects.',
        d4: 'Faculty of Pharmacy: Emphasizes pharmaceutical sciences, covering both theoretical knowledge and practical skills.',
        d5: 'Faculty of Nursing: Trains nurses with a balanced approach to practical and theoretical nursing education.',
        d6: 'Faculty of Preventive Medicine: Concentrates on public health, epidemiology, and preventive healthcare measures.',
        d7: 'Faculty of Postgraduate Education: Provides opportunities for professional development and specialization for healthcare practitioners.',
        i1: 'Teaching Hospitals: USMU has affiliations with several well-equipped teaching hospitals where students receive hands-on clinical training.',
        i2: 'Research Laboratories: Modern laboratories equipped with advanced technology for medical research and innovation.',
        i3: 'Libraries: Extensive collections of medical and scientific literature, supporting both students and faculty in their studies and research.',
        i4: 'Simulation Centers: State-of-the-art simulation centers for practical skill development and training.',
        s1: "Accommodation: The university provides dormitory facilities for international and local students, ensuring a comfortable living environment.",
        s2: 'Student Organizations: A variety of clubs and societies for cultural, sports, and academic activities, promoting a vibrant campus life.',
        s3: 'Support Services: Academic advising, career counseling, and psychological support services are available to assist students.',
        a1: 'Requirements: High school diploma, entrance exams, and proficiency in the language of instruction (Russian or English).',
        a2: 'International Students: USMU welcomes international students and provides support for their integration, including language courses and cultural orientation.',
        r1: 'Requirements: High school diploma, entrance exams, and proficiency in the language of instruction (Russian or English).',
        r2: 'International Students: USMU welcomes international students and provides support for their integration, including language courses and cultural orientation.',
        c1: 'Address: 432025, Ulyanovsk, Russia.',
        c2: 'Email: [Provide specific email]',
        c3: 'Phone: [Provide specific phone number]',
    },
    {
        id:'4',
        imageUniv: univImage4 , alt: 'Saratov' , 
        titleUniv : 'Saratov state medical university' , 
        location: "Bol'shaya Sadovaya Ulitsa, 137, Saratov, Saratov Oblast, Russia, 410000" , 

        image: learnImage4 , alt: 'image 3 (4)' ,
        titleLearn1 : 'Saratov State Medical University, named after V.I. Razumovsky, is one of the oldest and most prestigious medical universities in Russia. Established in 1909 by Emperor Nicholas II, it has grown to become a significant center for medical education and research.',
        lr1: 'Location and Recognition',
        fd1: 'Faculties and Departments:',
        sl1: 'Student Life:',
        ar1: 'Admission Requirements :',
        rd1: 'Research and Development:',
        t6: 'Contact:',
        l1: "Located in Saratov, Russia, the university is recognized by the World Health Organization (WHO) and is listed in Forbes' top 10 best Russian higher educational institutions. It is also ranked in the RAEX-100 and Times Higher Education (THE) World University Rankings",
        department:[
            'General Medicine',
            'Pediatrics',
            'Dentistry',
            'Pharmacy',
            'Clinical Residency',
        ],
        d1: 'The university offers a variety of medical programs, including:',
        d2: 'General Medicine',
        d3: 'Pediatrics',
        d4: 'Dentistry',
        d5: 'Pharmacy',
        d6: 'Clinical Residency',
        s1: 'The university provides a vibrant student life with numerous clubs and activities, including sports clubs, theatre groups, and cultural studios. International students are accommodated in well-equipped hostels with facilities like Wi-Fi, gyms, and libraries​.',
        a1: 'For international students, admission requirements include passing the NEET exam for Indian students and being at least 17 years old by December 31 of the admission year. Applicants must have completed their secondary education with at least 50% marks .',
        r1: 'Saratov State Medical University conducts extensive research through its various institutes and laboratories, such as the Research Institute of Basic and Clinical Uro-Nephrology and the Central Research Laboratory. These institutions focus on both fundamental and applied scientific research​',
        c1: "Address: Bol'shaya Sadovaya Ulitsa, 137, Saratov, Saratov Oblast, Russia, 410000.",
        c2: 'Email: [Provide specific email]',
        c3: 'Phone: [Provide specific phone number]',
    },
    {
        id:'5',
        imageUniv: univImage5 , alt: 'Astraxan' , 
        titleUniv : 'Astraxan state medical university' , 
        location: 'Ulitsa Bakinskaya, 121, Astrakhan, Astrakhan Oblast, Russia, 414000' , 

        image: learnImage5 , alt: 'image 3 (4)' ,
        titleLearn1 : 'Astrakhan State Medical University (ASMU), established in 1918, is one of the oldest and most prestigious medical universities in Russia. It is located in the city of Astrakhan, which lies in the southeast of European Russia near the banks of the Volga River.',
        apf1: 'Academic Programs and Facilities',
        fd1: 'Faculties and Departments:',
        sli1: 'Student Life and International Cooperation :',
        ara1: 'Admission Requirements and Advantages :',
        rd1: 'Research and Development:',
        t6: 'Contact:',
        ap1: 'ASMU offers a variety of medical programs including General Medicine, Dentistry, and Pharmacy, with instruction available in Russian, English, and French. This diversity in language makes it accessible to a broad range of international students. The university emphasizes a blend of theoretical and practical training, with students starting their practical sessions from the early months of their studies. This hands-on approach is facilitated through partnerships with several medical centers, such as the Federal Center of Cardiovascular Surgery and the Regional Hospital for Infectious Diseases​ ',
        department:[
            'General Medicine',
            'Pediatrics',
            'Dentistry',
            'Pharmacy',
            'Clinical Residency',
        ],
        d1: 'The university offers a variety of medical programs, including:',
        d2: 'General Medicine',
        d3: 'Pediatrics',
        d4: 'Dentistry',
        d5: 'Pharmacy',
        d6: 'Clinical Residency',
        s1: 'With over 7,000 students from more than 60 countries, ASMU provides a multicultural and supportive environment. The campus includes well-equipped hostels, modern classrooms, and multimedia resources. Students have opportunities to participate in various cultural exchange programs, international competitions, and research projects. The university also has partnerships with leading institutions around the world, which allow students to engage in diverse educational experiences .​',
        a1: "Admission to ASMU's medical programs typically requires a minimum of 50% aggregate marks in Physics, Chemistry, and Biology in secondary education, as well as qualifying marks in the National Eligibility cum Entrance Test (NEET) for Indian students. Notably, the university does not require IELTS or TOEFL scores for admission, although proficiency in English is necessary. Tuition and accommodation fees are comparatively reasonable, making it an affordable option for many international students .",
        r1: 'ASMU is equipped with state-of-the-art laboratories and research facilities. It hosts 20 leading scientific schools in various fields including pharmacology, microbiology, and immunology. The university is recognized for its innovative projects, such as a patented COVID-19 identification system that has been included in the list of "100 best Russian inventions". The institution is also actively involved in international collaborations and exchange programs, enhancing its research capabilities and providing students with global exposure​',
        c1: 'Address:Ulitsa Bakinskaya, 121, Astrakhan, Astrakhan Oblast, Russia, 414000.',
        c2: 'Email: [Provide specific email]',
        c3: 'Phone: [Provide specific phone number]',
    },
]

export const contactTitles = [
    {title : 'for students and parents'},
    {title : 'parternship and advertising'}
]

export const contactTypes = [
    {label: 'opinion' , value: 'opinion'},
    {label: 'complain' , value: 'complain'},
    {label: 'inquiry' , value: 'inquiry'},
    {label: 'other' , value: 'other'},
]

