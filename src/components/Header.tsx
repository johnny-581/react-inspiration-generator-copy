import Link from 'next/link';
import Image from 'next/image';
import logo from '@/data/get-inspired-logo.png';

const Header = () => {
    return (
        <header className='flex justify-between text-foreground p-5'>
            <Link href="/">
                <Image
                    src={logo}
                    alt='get-inspired-logo'
                    width={170}
                    priority
                />
            </Link>
        </header>
    );
}

export default Header;