import Link from 'next/link';

const Header = () => {
    return (
        <header className='text-gray-200 justify-between py-2'>
            <Link href="/">
                <h1 className="font-bold">Get Inspired App</h1>
            </Link>
        </header>
    );
}

export default Header;