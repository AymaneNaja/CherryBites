import Image from "next/image";
import Dashboard from "./components/Dashboard/Dashboard";
import recipe1 from '../Images/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg'
import recipe2 from '../Images/lily-banse--YHSwy6uqvk-unsplash.jpg'
import DashBox from "./components/Dashboard/DashBox";
import { MdDiversity1 } from "react-icons/md";

import { GiCook } from "react-icons/gi";
import { MdSoupKitchen } from "react-icons/md";
import Dashvids from "./components/Dashboard/Dashvids";
import Newsletter from "./components/Dashboard/Newsletter";
import { Dancing_Script, Great_Vibes, Pacifico } from "next/font/google";
import DashHero from "./components/Dashboard/DashHero";
const pacifico = Pacifico({
  weight: "400",
  subsets: ['latin'],
})
const great_Vibes = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
})

const dashboxInfo = [
  {
    title: 'Cherishing Diversity',
    description: 'Just like cherries come in different flavors and colors, our recipes span various cuisines and dietary preferences.',
    id: 1,
    Icon: MdDiversity1
  },
  {
    title: ' Easy to Follow',
    description: `We believe that cooking should be enjoyable, not daunting. That's why our recipes come with clear, step-by-step instructions .`,
    id: 2,
    Icon: GiCook

  },
  {
    title: 'Quality Ingredients',
    description: `We prioritize quality ingredients because we know they make a difference in the final dish. `,
    id: 3,
    Icon: MdSoupKitchen
  },
]

export default function Home() {
  return (
    <main className="min-h-screen grid  gap-10">
      <Dashboard />
      <div className="mt-6">
        <h1 className={`${pacifico.className} text-center  font-bold text-4xl text-black mb-10`}>Make dishes that are diverse and appetizing</h1>
        {/*  */}
        <div className="flex flex-col sm:flex-col  md:flex-row lg:flex-row xl:flex-row justify-between items-center mt-6 ">
          <div className="w-4/6 sm:w-3/6 md:w-2/6 lg:w-2/6 xl:w-2/6 -translate-x-6    relative mx-auto">
            <Image className="rounded-xl absolute   top-24 z-[100]" src={recipe1.src} alt="alt" width={1500} height={1500} />
            <Image className=" rounded-xl  rotate-12 translate-x-20 z-0" src={recipe2.src} alt="alt" width={1500} height={1500} />
          </div>
          <p className={`w-10/12  sm:w-10/12 md:w-5/12 lg:w-5/12 xl:w-5/12 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-10 pt-28 text-xl p-2 font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl  mx-auto 4 `}>{`Welcome to CherryBites, where every recipe is a bite of delicious inspiration! At CherryBites, we are passionate about bringing you a diverse array of recipes that cater to every palate and occasion. Whether you're a seasoned home chef or just starting your culinary journey, you'll find something to love among our curated collection.`}</p>

        </div>
      </div>
      {/* dash boces */}
      <div className={'flex items-start justify-center mt-40 w-full md:w-10/12 lg:w-10/12 xl:w-10/12 mx-auto gap-4 mb-10'}>
        {dashboxInfo.map(box => {
          return (<DashBox id={box.id} key={box.id} Icon={box.Icon} title={box.title} description={box.description}></DashBox>)
        })}
      </div>
      {/* frames */}
      <Dashvids />
      <Newsletter />
    </main>
  );
}
