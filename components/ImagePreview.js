import Image from "next/image";
import Link from "next/link";

export default function ImagePreview({ thumbnailUrl, nasaId, nasaTitle }) {
    return <div>
            <Link as={`/photo/${nasaId}`} href="/photo/[id]">
                <a className="thumbnail">
                    <Image className="small-pic" width={250} height={125} src={thumbnailUrl} loading="lazy" alt="" />
                    <div className="pic-title">{nasaTitle}</div>
                </a>
            </Link>
        </div>;
}   