import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../../components/Nav'
import projects from '../../data/projects'
import Button from '../../components/Button';
import ProjectCol from '../../components/ProjectCol';
import ProjectSection from '../../components/ProjectSection';

function Project () {
    const router = useRouter()
    const { pid } = router.query
    console.log('PID')
    var projId = pid;
    projId = parseInt(pid);
    projId = projId - 2;

    var data = projects;
    var project = data[projId] || data[1];

    let projName = project.name; 

    var imgEl
    if (project.overviewImg.type == 'img') {
        imgEl = <Image 
                    src={project.overviewImg.src}
                    alt={project.overviewImg.alt}
                    width={project.overviewImg.width}
                    height={project.overviewImg.height}
                />        
    } else if (project.overviewImg.type == 'video') {
        imgEl = <video width={project.overviewImg.width} height={project.overviewImg.height} controls><source src={project.overviewImg.src} type="video/mp4"></source></video>
    }

    var bdrCl;
    var bgCl = project.bgCl;
    var btnClTxt;
    var txtCl; 
    if (project.id == 2) {
        bgCl = 'bg-project2';
        bdrCl = 'border-project2'
        btnClTxt = 'text-project2'
        txtCl = 'text-white'
    } else if (project.id == 3) {
        bgCl = 'bg-project3'
        bdrCl = 'border-project3'
        btnClTxt = 'text-project3'
        txtCl = 'text-white'
    } else if (project.id == 4) {
        bgCl = 'bg-project4'
        bdrCl = 'border-project4'
        btnClTxt = 'text-project4'
        txtCl = 'text-black'
    } else if (project.id == 5) {
        bgCl = 'bg-project5'
        bdrCl = 'border-project5'
        btnClTxt = 'text-black'
        txtCl = 'text-black'
    } else if (project.id == 6) {
        bgCl = 'bg-project6'
        bdrCl = 'border-project6'
        btnClTxt = 'text-black'
        txtCl = 'text-black'
    } else if (project.id == 7) {
        bgCl = 'bg-project7'
        bdrCl = 'border-project7'
        btnClTxt = 'text-black'
        txtCl = 'text-black'
    }
    
    var detailCols = 'grid gap-5 m-3 border-t-2 ' + bdrCl + ' border-dotted grid-cols-1 md:grid-cols-' + project.detailCols
    var colSpan = 'mt-5 md:col-span-' + project.detailCols;
    colSpan = colSpan;
    var projDetails = project.details;
    var projSections = project.sections;
    var clName = 'grid gap-2 grid-cols-1 md:grid-cols-4 ' + bgCl + ' items-center'

    var btnCl = bdrCl + ' ' + btnClTxt;
    var btnClName = 'mt-2 border border-2 border-solid ' + btnCl;

    txtCl = txtCl + ' col-span-3 font-bold pr-5';
    txtCl = txtCl;

    var detailsSection;
    if (project.img.type != 'desktop') {
        detailsSection = <div className={colSpan}><h2 className="text-3xl font-heading font-bold">Project Details</h2></div>
    } else {
        detailsSection = ''
    }
    
    return (
        <div>
        <Head>
            <title>Madelyn Vagle | Projects</title>
            <meta name="description" content="Projects" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="../../dist/output.css" />
        </Head>
        <main>
            <Nav />
            <section className={clName}>
                <div className="py-3 pl-2">
                    <Image 
                        src={project.img.src}
                        alt={project.img.alt}
                        width={project.img.width}
                        height={project.img.height}
                    />
                </div>
                <div className={txtCl}>
                    <h1 className="text-4xl font-heading">
                    {projName}
                    </h1>
                    <p className="text-l mt-2 font-light font-body">{project.description}</p>
                    <Button color={btnClName} isLink="true" dest={project.extDest} text="See It Online" />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 m-3">
                <div className="mt-5">
                    <h2 className="text-3xl font-heading font-bold">Project Overview</h2>
                    <p className="mt-3 font-body">{project.overviewText}</p>
                </div>
                <div className="justify-self-end pr-9">
                    {imgEl}
                </div>
            </section>
            <section className={detailCols}>
                {detailsSection}
                {projDetails.map(detail => (
                    <ProjectCol key={detail.id} id={detail.id} imgSrc={detail.img.src} imgW={detail.img.width} imgH={detail.img.height} imgAlt={detail.img.alt} text={detail.text} />
                ))}
            </section>
            {projSections.map(section => (
                <ProjectSection clName={bdrCl} key={section.id} id={section.id} name={section.title} description={section.desc} layout={section.layout} items={section.items} />
            ))}
        </main>
        <footer className="flex flex-auto py-5 justify-center h-full">
            <div>
                2022. Madelyn Vagle.
            </div>
      </footer>
    </div>

    )
}

  
export default Project