import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className='font-work-sans bg-white px-5 py-3 shadow-sm'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={144} height={30} />
        </Link>
      </nav>
    </div>
  );
}
