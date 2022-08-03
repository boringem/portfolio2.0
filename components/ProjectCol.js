import Image from 'next/image'; 

export default function ProjectCol(props) {
    var title = '';

    if (props.hasTitle == 'true') {
        title = <h3 className="font-heading font-bold text-xl mb-2">{props.title}</h3>
    }

    return (
        <div className="text-center font-body text-s">
            <Image 
                src={props.imgSrc}
                alt={props.imgAlt}
                width={props.imgW}
                height={props.imgH}
            />
            {title}
            <p>{props.text}</p>
        </div>
    )
}