import Image from 'next/image'

interface MusicCardProps {
  `·albumArt,
  ·songTitle,
  ·artistName,
  ·spotifyLink·`
}

const MusicCard: React.FC<MusicCardProps> = ({
  albumArt,
  songTitle,
  artistName,
  spotifyLink,
}) => {
  return (
    <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
      <div className="overflow-hidden·rounded-lg·bg-gray-800">
        <Image src={albumArt} alt={songTitle} width={300} height={300} />
        <div className="p-4">
          <h3 className="text-lg font-bold text-white">{songTitle}</h3>
          <p className="text-gray-400">{artistName}</p>
        </div>
      </div>
    </a>
  )
}
