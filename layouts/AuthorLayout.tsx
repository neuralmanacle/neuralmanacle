import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="md:space-y-15·space-x-2·pb-8·pt-6">
          <p className=" pl-6 pt-2 text-3xl leading-6 text-gray-700 dark:text-gray-300">
          * Hi!!👋  I'm Arjun a.k.a NeuralManacle.
          <br/>
          <br/>
          * A software engineer with a keen approach towards solving problems.<br/><br/>
          * Proficient in Python, JavaScript and C++. <br/><br/>
          * I like building scalable web applications. <br/><br/>
          * I'm actively looking for software development roles.<br/><br/>
          * I produce multi-genre music apart from code.<br/><br/>
          * Download My Resume &darr;
          </p>
        </div>
      </div>
      
          
        
      
    </>
  )
}
