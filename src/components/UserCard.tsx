import Image from 'next/image';

type UserCardProps = {
  imageSrc: string;
  name: string;
  description: string;
};

const UserCard: React.FC<UserCardProps> = ({ imageSrc, name, description }) => (
  <div className="flex items-center gap-4 m-2">
    <div className="flex flex-shrink-0 items-center justify-center w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
      <Image src={imageSrc} width={48} height={48} alt={`${name} profile`} />
    </div>
    <div>
      <p className="text-sm font-semibold text-text-textPrimary">{name}</p>
      <p className="text-xs text-dark-400">{description}</p>
    </div>
  </div>
);

export default UserCard;
