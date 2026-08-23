"use client";
import styles from "./home.module.sass";
import { links } from "./vals/values";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="self-start w-full flex flex-col gap-4">
        <h1 className={styles.Title}>Ayush Chadha</h1>
        <div className="w-full h-5 flex justify-around">
          {links.map((link, i) => (
            <a target="_blank" className={styles.link} href={link.link} key={i}>
              <Image src={link.icon} width={30} height={30} alt={link.name} />
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* <div className='grid place-items-center h-full'> */}

      {/* <MouseElement /> */}
      {/* </div> */}
    </div>
  );
}
