import Image from "next/image";
type ButtonType = 'submit' | 'button' | 'reset' | undefined;
type Icon = {
    image?: string;
    width?:  number | `${number}` | undefined;
    height?:  number | `${number}` | undefined;
    className?: string;
}
type Props = {
    title: string;
    type?: ButtonType;
    className?: string;
    loading?: boolean;
    icon?: Icon,
    onClick?: (React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLButtonElement>) | undefined;
  };
export const Button = ({title, type, className, loading, icon, onClick}: Props)=> {
    return (<button type={type} className={` flex items-center justify-center ${className} ${loading? ' cursor-not-allowed': ''}`} onClick={onClick}>
        {loading &&(
            <>
                {icon?.image?
                    <Image src={icon?.image || ''} alt="" width={icon?.width} height={icon?.height} className={` animate-spin h-3 w-3 mr-3 ${icon?.className}`} />
                    :(
                    <svg className="animate-spin -ml-1 mr-3 h-3 w-3 text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>)
                }
            
            <span>{title}</span>
            </>
            )
        }
        {
            !loading && <span>{title}</span>
        }
    </button>)
}