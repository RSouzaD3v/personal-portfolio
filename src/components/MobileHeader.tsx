interface MenuItem {
    id: number;
    title: string;
    icon: React.ElementType;
    link: string;
}

interface MobileHeaderProps {
    list: MenuItem[];
    isHidden: boolean;
}

const MobileHeader = ({list, isHidden}: MobileHeaderProps) => {
    return (
        <div>
            <div className={`${isHidden ? 'hidden' : 'flex'} md:hidden bg-white/10 backdrop-blur-sm p-3 flex-col justify-center
            items-center h-screen w-max fixed top-0 right-0`}>
                <ul>
                    {list.map((item: MenuItem) => (
                        <li className='hover:bg-white/10 p-2 
                        rounded-md' key={item.id}>
                            <a className='flex items-center gap-1' href="">
                                {<item.icon />}
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <button className='bg-blue-500 mt-10
                    text-white p-1 rounded-md'>Saiba Mais</button>
                </div>
            </div>
        </div>
    );
};

export default MobileHeader;