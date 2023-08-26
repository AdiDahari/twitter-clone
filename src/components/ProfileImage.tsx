import Image from "next/image";
import { VscAccount } from "react-icons/vsc";

type ProfileImageProps = {
  src?: string | null;
  className?: string;
};

function ProfileImage({ src, className = "" }: ProfileImageProps) {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src ? (
        <Image src={src} alt="profile image" quality={100} fill />
      ) : (
        <VscAccount className="h-full w-full" />
      )}
    </div>
  );
}

export default ProfileImage;
