//@ts-nocheck
import {Link} from "@inertiajs/react";

const Breadcrumb = ({menu, className = ''}: { menu: any, className: any }) => {
    return (
        <div className={`${className}`}>
            <ol className="flex text-gray-500 font-semibold dark:text-white-dark">
                <li>
                    <Link href={route('dashboard')} className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path
                                opacity="0.5"
                                d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path d="M12 15L12 18" stroke="currentColor" strokeWidth="1.5"
                                  strokeLinecap="round"/>
                        </svg>
                    </Link>
                </li>
                {
                    menu.map((data: any, index: any) => {
                        return (
                            <li key={index} className="before:content-['/'] before:px-1.5">
                                <Link
                                    href={data.link}
                                    className={data.link ? 'uppercase text-black dark:text-white-light hover:text-primary dark:hover:text-primary' : 'uppercase text-primary'}>
                                    {data.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
export default Breadcrumb;
