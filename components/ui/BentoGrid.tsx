import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  headerImageUrl,
  header,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  headerImageUrl?: string;
  header?: React.ReactNode;
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2] bg-white-100 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <a href={link} target="_blank" className="no-underline">
        {headerImageUrl ? (
          <img src={headerImageUrl} alt="Header Image" className="header-image w-full h-auto rounded-t-xl" />
        ) : (
          header
        )}

        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </a>
    </div>
  );
};
