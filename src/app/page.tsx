import ButtonComponent from '@/components/ButtonComponent'
import BadgeComponent from '@/components/BadgeComponent'
import InfoCardComponent from '@/components/InfoCardComponent'
import ServiceCardComponent from '@/components/ServiceCardComponent'
import ProjectCardComponent from '@/components/ProjectCardComponent'
import React from 'react'
import Image from 'next/image'
import {
  AppWindow,
  Briefcase,
  ChartSpline,
  CheckCircle2Icon,
  DraftingCompass,
  Earth,
  Eye,
  GraduationCap,
  Layers,
  Map,
  Target,
  UsersRound,
} from 'lucide-react'

export default function LandingPage() {
  return (
    <main className='mb-20'>
      <section id="home" className="h-dvh bg-gray-200 flex items-center justify-center">
        <div className='flex flex-col items-center max-w-2xl text-center'>
          <h1 className='font-semibold text-5xl'>Smart Geospatial Solutions for Every Industry</h1>
          <p className='text-base mt-4'>Delivering innovative Geographic Information Systems (GIS) and geospatial solutions that enable governments, businesses, and communities to transform spatial data into decisions that matter.</p>
          <ButtonComponent
            label='Contact Us'
            className='mt-6'
          />
        </div>
      </section>
      <section id='about' className='max-w-7xl mx-auto mt-20 grid grid-cols-2 gap-10'>
        <div className=''>
          <h2 className='uppercase font-semibold text-gray-500'>About Us</h2>
          <h1 className='font-semibold text-5xl mt-2'>Pioneers in Geospatial Precision</h1>
          <p className='mt-5 text-gray-600 text-base'>Founded in 2005, our company specializes in geospatial data acquisition and       management. With extensive experience and expertise, we are committed to providing the best solutions for planning and engineering implementation across various fields. As a large company dedicated to the geospatial sector, we continuously
            develop the latest technologies and innovations to ensure accurate, reliable, and useful data for a wide range of applications.
          </p>
          <div className='grid grid-cols-2 gap-5 mt-5'>
            <BadgeComponent icon={<CheckCircle2Icon />} label='Verified Precision' />
            <BadgeComponent icon={<UsersRound />} label='Expert Engineers' />
            <BadgeComponent icon={<ChartSpline />} label='Data Analytics' />
            <BadgeComponent icon={<Earth />} label='National Coverage' />
          </div>
        </div>
        <div>
          <Image
            src="/images/site-survey.jpg"
            height={500}
            width={1000}
            alt='Site Survey Image'
            className='rounded-3xl'
          />
          <InfoCardComponent
            icon={<Eye />}
            title='Vision'
            description='To be the leading global partner in geospatial intelligence, driving sustainable development and innovation through precise spatial data and advanced digital solutions.'
            className='mt-5'
          />
          <InfoCardComponent
            icon={<Target />}
            title='Mission'
            description={[
              'High-precision geospatial services for decision-making.',
              'Continuous innovation in urban planning technology.'
            ]}
            className='mt-5'
          />
        </div>
      </section>
      <section id='services' className='bg-gray-50 py-20 mt-20'>
        <div className='max-w-7xl mx-auto flex flex-col items-center '>
          <h2 className='uppercase font-semibold text-gray-500'>Expertise</h2>
          <h1 className='font-semibold text-5xl mt-2'>Our Core Services</h1>
          <p className='max-w-2xl mt-5 text-center text-gray-600'>We deliver integrated geospatial, engineering, digital, and consulting solutions tailored to meet the evolving needs of governments, businesses, and industries.</p>
          <div className='grid grid-cols-3 gap-5 mt-10'>
            <ServiceCardComponent
              icon={<Map />}
              title='Geospatial Data Provision'
              description='Data compiled through terrestrial survey, hydrographic, photogrammetric, and remote sensing.'
            />
            <ServiceCardComponent
              icon={<AppWindow />}
              title='Smart Applications'
              description='Advanced application development and specialized information system solutions for enterprise needs.'
            />
            <ServiceCardComponent
              icon={<Layers />}
              title='Integrated Solutions'
              description='Customized geospatial solutions designed specifically for government agencies and industrial sectors.'
            />
            <ServiceCardComponent
              icon={<DraftingCompass />}
              title='Planning & Engineering'
              description='Expert engineering consultancy for infrastructure projects and large-scale urban planning.'
            />
            <ServiceCardComponent
              icon={<Briefcase />}
              title='Business Consultant'
              description='Strategic management consultancy leveraging spatial data for commercial and operational excellence.'
            />
            <ServiceCardComponent
              icon={<GraduationCap />}
              title='HR Development'
              description='Empowering your team through specialized training programs in geospatial technology and data management.'
            />
          </div>
        </div>
      </section>
      <section id='partners' className='max-w-7xl mx-auto mt-20 grid grid-cols-3 gap-10 items-center'>
        <div className=''>
          <h2 className='uppercase font-semibold text-gray-500'>Partners</h2>
          <h1 className='font-semibold text-5xl mt-2'>Trusted by Leading Organizations</h1>
          <p className='mt-5 text-gray-600 text-base'>PT EFORT Digital Multisolution fosters strategic partnerships with government agencies, corporations, and industry leaders to drive innovation and sustainable development.
          </p>
        </div>
        <div className='col-span-2 grid grid-cols-4 gap-5 h-fit'>
          <div className='p-4 bg-gray-200 flex items-center justify-center'>
            Logo 1
          </div>
          <div className='p-4 bg-gray-200 flex items-center justify-center'>
            Logo 2
          </div>
          <div className='p-4 bg-gray-200 flex items-center justify-center'>
            Logo 3
          </div>
          <div className='p-4 bg-gray-200 flex items-center justify-center'>
            Logo 4
          </div>
          <div className='p-4 bg-gray-200 flex items-center justify-center'>
            Logo 5
          </div>
          <div className='p-4 bg-gray-200 flex items-center justify-center'>
            Logo 6
          </div>
          <div className='p-4 bg-gray-200 flex items-center justify-center'>
            Logo 7
          </div>
          <div className='p-4 bg-gray-200 flex items-center justify-center'>
            Logo 8
          </div>
        </div>
      </section>
      <section id='experience' className='bg-gray-50 py-20 mt-20'>
        <div className='max-w-7xl mx-auto flex flex-col items-center '>
          <h2 className='uppercase font-semibold text-gray-500'>Experience</h2>
          <h1 className='font-semibold text-5xl mt-2'>Featured Projects</h1>
          <p className='max-w-2xl mt-5 text-center text-gray-600'>Explore our selected projects that showcase how we combine geospatial expertise, engineering, and digital solutions to address real-world challenges.</p>
          <div className='grid grid-cols-3 gap-5 mt-10 w-full'>
            <ProjectCardComponent
              image={{
                src: '/images/site-survey.jpg',
                alt: 'Site Survey Image'
              }}
              category='Government'
              name='Project Name'
              description={[
                'The tematic Data Visualization of the Ministry of Home Affairs',
                'E-Kios Village Information System',
                'Administrative Region Code Application'
              ]}
            />
            <ProjectCardComponent
              image={{
                src: '/images/site-survey.jpg',
                alt: 'Site Survey Image'
              }}
              category='Government'
              name='Project Name'
              description={[
                'The tematic Data Visualization of the Ministry of Home Affairs',
                'E-Kios Village Information System',
                'Administrative Region Code Application'
              ]}
            />
            <ProjectCardComponent
              image={{
                src: '/images/site-survey.jpg',
                alt: 'Site Survey Image'
              }}
              category='Government'
              name='Project Name'
              description={[
                'The tematic Data Visualization of the Ministry of Home Affairs',
                'E-Kios Village Information System',
                'Administrative Region Code Application'
              ]}
            />
            <ProjectCardComponent
              image={{
                src: '/images/site-survey.jpg',
                alt: 'Site Survey Image'
              }}
              category='Government'
              name='Project Name'
              description={[
                'The tematic Data Visualization of the Ministry of Home Affairs',
                'E-Kios Village Information System',
                'Administrative Region Code Application'
              ]}
            />
            <ProjectCardComponent
              image={{
                src: '/images/site-survey.jpg',
                alt: 'Site Survey Image'
              }}
              category='Government'
              name='Project Name'
              description={[
                'The tematic Data Visualization of the Ministry of Home Affairs',
                'E-Kios Village Information System',
                'Administrative Region Code Application'
              ]}
            />
            <ProjectCardComponent
              image={{
                src: '/images/site-survey.jpg',
                alt: 'Site Survey Image'
              }}
              category='Government'
              name='Project Name'
              description={[
                'The tematic Data Visualization of the Ministry of Home Affairs',
                'E-Kios Village Information System',
                'Administrative Region Code Application'
              ]}
            />
          </div>
        </div>
      </section>
      <section id='contact' className='mx-auto mt-20 max-w-7xl'>
        <div className="p-8 space-y-8 rounded-3xl bg-white border border-gray-200">
          <div>
            <h1 className='text-5xl'>Connect With Us</h1>
            <p className='mt-2 text-gray-500'>Have a project, business challenge, or collaboration in mind?</p>
            <ButtonComponent
              label='WhatsApp'
              className='mt-4'
            />
          </div>
          <hr className='text-gray-200' />
          <div className='space-y-4'>
            <div>
              <h3 className='uppercase text-gray-500 text-sm font-semibold'>Office</h3>
              <p>Jl. Kalijati Indah Raya No. 29, Antapani, Bandung 40292, Indonesia</p>
            </div>
            <div>
              <h3 className='uppercase text-gray-500 text-sm font-semibold'>Email</h3>
              <p>admin@efortconsultant.com</p>
            </div>
            <div>
              <h3 className='uppercase text-gray-500 text-sm font-semibold'>WhatsApp</h3>
              <p>+62 81322878461</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
