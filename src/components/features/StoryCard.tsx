import Image from "next/image";

interface StoryCardProps {
  id: number;
  title: string;
  genre: string;
  coverImage?: string;
  rank?: number;
  progress?: number;
  showProgress?: boolean;
  showRank?: boolean;
  cardInfo?: boolean;
  size?: "small" | "medium" | "large";
}

export default function StoryCard({
  title,
  genre,
  coverImage = "/public/assets/reding-preference/scott-piligrim.png",
  rank,
  progress,
  showProgress = false,
  showRank = false,
  cardInfo = true,
  size = "medium",
}: StoryCardProps) {
  // Size configurations
  const sizeClasses = {
    small: {
      container: "min-w-[140px] sm:min-w-[160px] md:min-w-[180px]",
      title: "text-sm",
      genre: "text-xs",
      rank: "text-6xl",
    },
    medium: {
      container: "min-w-[180px] sm:min-w-[200px] md:min-w-[240px]",
      title: "text-lg sm:text-xl",
      genre: "text-sm sm:text-base",
      rank: "text-7xl sm:text-8xl",
    },
    large: {
      container: "min-w-[220px] sm:min-w-[260px] md:min-w-[300px]",
      title: "text-xl sm:text-2xl",
      genre: "text-base sm:text-lg",
      rank: "text-8xl sm:text-9xl",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`group cursor-pointer ${currentSize.container}`}>
      <div className="relative mb-2 aspect-[2/3] rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-shadow">
        {/* Cover Image */}
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
      </div>

      {/* Rank Badge */}
      {showRank && rank && (
        <div className="flex -mb-5 justify-end mr-4 -mt-15 z-20">
          <div
            className={`w-fit rounded-full font-benrock text-black ${currentSize.rank} px-2 pt-1 bg-background relative`}
          >
            {rank}
          </div>
        </div>
      )}

      {/* Card Info */}
      {cardInfo && (
        <div className=" px-1">
          <h3
            className={`font-bold relative ${currentSize.title} text-black truncate`}
          >
            {title}
          </h3>
          <p className={`${currentSize.genre} text-primary font-medium`}>
            {genre}
          </p>
        </div>
      )}

      {/* Progress Bar - Only for Continue Reading */}
      {showProgress && progress !== undefined && (
        <div className="mt-4 mx-auto w-1/2 h-1.5 bg-[#606060]">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
