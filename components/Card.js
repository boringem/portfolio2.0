import Button from '../components/Button';
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import Link from 'next/link'

function Card(props) {
    var bgString = 'bg-project' + props.id;
    var bgCl = bgString + 'cursor-pointer w-full border-solid border-2 hover:drop-shadow-card p-5 border-lightGray grid grid-cols-3 gap-4 content-center';
    var btnCl = 'mb-2 hover:border-project' + props.id; 
    var projUrl = '/projects/' + props.id;
    var imgSr =  props.imgSrc;
    var imgH = props.imgH
    var imgW = props.imgW

    var btns;
    
    if (props.imgType == 'tablet') {
        imgH = 250;
        imgW = 150;
        btns = <div className="mt-2"><Button color={btnCl} isLink="true" dest={props.extDest} text="See It Online" /><Button color={btnCl} dest={props.linkDest} text="Behind The Scenes" /></div>
    } else if (props.imgType == 'mobile') {
        imgH = 250;
        imgW = 175;
        btns = <div className="mt-2"><Button color={btnCl} dest={props.linkDest} text="Behind The Scenes" /></div>
    } else {
        imgH = 150;
        imgW = 250;
        btns = <div className="mt-2"><Button color={btnCl} isLink="true" dest={props.extDest} text="See It Online" /><Button color={btnCl} dest={props.linkDest} text="Behind The Scenes" /></div>
    }
    return (
            <div className={bgCl}>
                <div>
                    <Image 
                        src={imgSr}
                        alt="project thumbnail"
                        width={imgW}
                        height={imgH}
                    />
                </div>
                <div className="col-span-2">
                    <h3 className="text-2xl font-body">{props.name}</h3>
                    <p className="font-body">{props.description}</p>
                    {btns}
                </div>
            </div>
    )
}

export default Card