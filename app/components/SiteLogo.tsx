import Link from 'next/link';
import Image from 'next/image';

type SiteLogoProps = {
  size?: number;
  className?: string;
};

export default function SiteLogo({ size = 44, className = '' }: SiteLogoProps) {
  return (
    <Link href="/" aria-label="University of Huddersfield Housing and AI logo">
        <div
        className={`relative overflow-hidden rounded-2xl bg-white shadow-md shadow-[#0b6e6e]/20 ring-1 ring-[#d7e3de] ${className}`.trim()}
        style={{ width: size, height: size }}
        >
        <Image
            src="/images/logo.png"
            alt="University of Huddersfield Housing and AI logo"
            fill
            sizes={`${size}px`}
            className="object-contain p-1"
            priority
        />
        </div>
    </Link>
  );
}
