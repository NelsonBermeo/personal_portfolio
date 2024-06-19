import React from 'react'
//He deletes react from react
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

import { gridItems } from '@/data'

const Grid = () => {
    
  return (
    <section id="about">
        {/* <BentoGrid>
            {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img=(img)
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid> */}
        <BentoGrid className="w-full pb-10">
            {gridItems.map((item, i) => (
            <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
                // remove icon prop
                // remove original classname condition
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
            />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid