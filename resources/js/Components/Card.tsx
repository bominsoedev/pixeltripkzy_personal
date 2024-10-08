//@ts-nocheck
import React from 'react';
import clsx from 'clsx';
import {Link} from "@inertiajs/react";
import ChevronRightIcon from "@/Components/ChevronRightIcon";

interface CardProps extends React.HTMLProps<HTMLElement> {
    as?: React.ElementType;
    className?: string;
}

export function Card({as: Component = 'div', className, children, ...props}: CardProps) {
    return (
        <Component
            className={clsx(className, 'group relative flex flex-col items-start px-2')}
            {...props}
        >
            {children}
        </Component>
    );
}

Card.Link = function CardLink({children, ...props}: React.ComponentProps<typeof Link>) {
    return (
        <>
            <div
                className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-100 transition dark:bg-gray-800/50 sm:-inset-x-6 sm:rounded"/>
            <Link {...props}>
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded"/>
                <span className="relative z-10">{children}</span>
            </Link>
        </>
    );
};

Card.Title = function CardTitle({
                                    as: Component = 'h2',
                                    href,
                                    children,
                                }: {
    as?: React.ElementType;
    href?: string;
    children: React.ReactNode;
}) {
    return (
        <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            {href ? <Card.Link href={href}>{children}</Card.Link> : children}
        </Component>
    );
};

Card.Description = function CardDescription({children}: { children: React.ReactNode }) {
    return (
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {children}
        </p>
    );
};

Card.Cta = function CardCta({children}: { children: React.ReactNode }) {
    return (
        <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
            {children}
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current"/>
        </div>
    );
};

Card.Eyebrow = function CardEyebrow({
                                        as: Component = 'p',
                                        decorate = false,
                                        className,
                                        children,
                                        ...props
                                    }: {
    as?: React.ElementType;
    decorate?: boolean;
    className?: string;
    children: React.ReactNode;
} & React.HTMLProps<HTMLElement>) {
    return (
        <Component
            className={clsx(
                className,
                'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
                decorate && 'pl-3.5'
            )}
            {...props}
        >
            {decorate && (
                <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                >
          <span className="h-4 w-0.5 rounded bg-zinc-200 dark:bg-zinc-500"/>
        </span>
            )}
            {children}
        </Component>
    );
};
