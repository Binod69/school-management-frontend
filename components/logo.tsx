import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

const Logo = () => {
  return (
    <>
      <Link href={'/'} className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-full p-1">
          <span className="text-white font-bold text-xl">
            <GraduationCap />
          </span>
        </div>
        <span className="font-bold text-xl">School</span>
      </Link>
    </>
  );
};

export default Logo;
