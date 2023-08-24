import SubHeader from '@/components/Subheader'
import TechStackCard from '@/components/TechStackCard'

import expoSvg from '../../../public/static/images/andeilson-ferreira-expo.png'
import figmaSvg from '../../../public/static/images/andeilson-ferreira-figma.png'
import gitHubSvg from '../../../public/static/images/andeilson-ferreira-github.png'
import reactHookFormSvg from '../../../public/static/images/andeilson-ferreira-react-hook-form.png'
import tailwindCssSvg from '../../../public/static/images/andeilson-ferreira-tailwind.png'
import typeScriptSvg from '../../../public/static/images/andeilson-ferreira-typescript.png'
import vercelSvg from '../../../public/static/images/andeilson-ferreira-vercel.png'
import vsCodeSvg from '../../../public/static/images/andeilson-ferreira-vs-code.png'
import nextjsSvg from '../../../public/static/images/andeilson-ferreira-nextjs.png'
import warpSvg from '../../../public/static/images/andeilson-ferreira-warp.png'
import reactQuerySvg from '../../../public/static/images/andeilson-ferreira-react-query.png'
import wordpressSvg from '../../../public/static/images/andeilson-ferreira-wordpress.png'

// Apps

import todoistSvg from '../../../public/static/images/andeilson-ferreira-todoist.png'
import notionSvg from '../../../public/static/images/andeilson-ferreira-notion.png'
import chatGptSvg from '../../../public/static/images/andeilson-ferreira-chatgpt.png'
import discordSvg from '../../../public/static/images/andeilson-ferreira-discord.png'
import booksSvg from '../../../public/static/images/andeilson-ferreira-books.png'
import chromeSvg from '../../../public/static/images/andeilson-ferreira-chrome.png'
import sparkSvg from '../../../public/static/images/andeilson-ferreira-spark.png'
import spotifySvg from '../../../public/static/images/andeilson-ferreira-spotify.png'
import slackSvg from '../../../public/static/images/andeilson-ferreira-slack.png'

// Hardware

import macbookSvg from '../../../public/static/images/andeilson-ferreira-macbook.png'
import keychronSvg from '../../../public/static/images/andeilson-ferreira-keychron-k2.png'
import monitorSvg from '../../../public/static/images/andeilson-ferreira-monitor.png'
import magicMouseSvg from '../../../public/static/images/andeilson-ferreira-magic-mouse.png'
import iphoneSvg from '../../../public/static/images/andeilson-ferreira-iphone.png'
import airpodsSvg from '../../../public/static/images/andeilson-ferreira-airpods.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TechStack | Andeilson Ferreira',
  description: 'Techstack that Andeilson Ferreira uses on his projects.',
}

export default function TechStack() {
  return (
    <main>
      <SubHeader
        title="Tech Stack"
        description="The dev tools, apps, devices, and games I use and play."
      />
      <div className="px-4 lg:px-0">
        <h2 className="mb-4 text-48 font-bold text-gray-100 dark:text-gray-300">
          Dev
        </h2>
        <div className="mb-20 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:px-0">
          <TechStackCard title="Figma" type="Design" image={figmaSvg.src} />
          <TechStackCard
            title="Next.js"
            type="Web Framework"
            image={nextjsSvg.src}
          />
          <TechStackCard
            title="TailwindCSS"
            type="CSS"
            image={tailwindCssSvg.src}
          />
          <TechStackCard
            title="Github"
            type="Version Control"
            image={gitHubSvg.src}
          />
          <TechStackCard
            title="Vercel"
            type="Deployment"
            image={vercelSvg.src}
          />
          <TechStackCard title="Warp" type="Terminal" image={warpSvg.src} />
          <TechStackCard title="VSCode" type="Editor" image={vsCodeSvg.src} />
          <TechStackCard
            title="TypeScript"
            type="Language"
            image={typeScriptSvg.src}
          />
          <TechStackCard
            title="React Hook Form"
            type="Library"
            image={reactHookFormSvg.src}
          />
          <TechStackCard
            title="React Query"
            type="Server State"
            image={reactQuerySvg.src}
          />
          <TechStackCard
            title="Expo"
            type="Mobile Framework"
            image={expoSvg.src}
          />
          <TechStackCard
            title="Wordpress"
            type="CMS"
            image={wordpressSvg.src}
          />
        </div>

        <h2 className="mb-4 text-48 font-bold text-gray-200 dark:text-gray-300">
          Apps
        </h2>
        <div className="mb-20 flex flex-col gap-4 lg:grid lg:grid-cols-3">
          <TechStackCard
            title="Todoist"
            type="Productivity"
            image={todoistSvg.src}
          />
          <TechStackCard title="Notion" type="Notes" image={notionSvg.src} />
          <TechStackCard
            title="Chat GPT"
            type="Productivity"
            image={chatGptSvg.src}
          />
          <TechStackCard
            title="Discord"
            type="Communication"
            image={discordSvg.src}
          />
          <TechStackCard title="Books" type="Education" image={booksSvg.src} />
          <TechStackCard title="Chrome" type="Browse" image={chromeSvg.src} />
          <TechStackCard title="Spark" type="Email" image={sparkSvg.src} />
          <TechStackCard title="Spotify" type="Music" image={spotifySvg.src} />
          <TechStackCard
            title="Slack"
            type="Communication"
            image={slackSvg.src}
          />
        </div>

        <h2 className="mb-4 text-48 font-bold text-gray-200 dark:text-gray-300">
          Hardware
        </h2>
        <div className="mb-20 flex flex-col gap-4 lg:grid lg:grid-cols-3">
          <TechStackCard
            title="Macbook Pro 2021 M1 Pro"
            image={macbookSvg.src}
          />
          <TechStackCard title="Keychron K2" image={keychronSvg.src} />
          <TechStackCard title="Aoc 27G2" image={monitorSvg.src} />
          <TechStackCard title="Magic Mouse 2" image={magicMouseSvg.src} />
          <TechStackCard title="iPhone 11" image={iphoneSvg.src} />
          <TechStackCard title="Airpods 3" image={airpodsSvg.src} />
        </div>
      </div>
    </main>
  )
}
