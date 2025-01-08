import siteMetadata from '@/data/siteMetadata'

const Footer = () => {
    return (
        <footer className='py-1 bg-secondary flex space-x-4'>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <div>{siteMetadata.title}</div>
            <div>{` • `}</div>
            <div>inspired by <a href='https://react.dev/reference/rsc/use-client' className='text-gray-400'>this</a></div>
        </footer>
    );
}

export default Footer;