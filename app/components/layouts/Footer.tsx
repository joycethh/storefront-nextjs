
const Footer = () => {
    return(
        <footer className="z-10 py-10 text-red-500 bg-slate-700">
            <div className="container">
                <h5 className="text-lg">Bling Bling Bijoux</h5>
                <p className="mt-4 text-sm">created by 
                  <a 
                    className="text-sky-500" 
                    href="https://joycetang.me"  
                    rel='noreferrer'
                    target='_blank'>
                    <span> Joyce Tang </span>
                </a> 
                ©{new Date().getFullYear()}
                </p>
                
                <div className="py-5 text-voilet-900">
                
                <a
                 className="text-sky-500" 
                 href="https://joycetang.me"  
                 rel='noreferrer'
                 target='_blank'>
                <span>Technology Stack:
                <p>
                Next.js app with a&nbsp;<a href="<https://snipcart.com>" />Snipcart </p> 
                </span>
                </a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer;
