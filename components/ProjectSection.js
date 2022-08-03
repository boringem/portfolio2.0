import ProjectCol from './ProjectCol'; 

export default function ProjectSection(props) {
    let items = props.items;
    let newItems;
    let itemsContent;
    if (props.layout == 'list') {
        newItems = items.map(item => (
            <li key={item.id}>{item}</li>
        ))
        itemsContent = <ul className="list-disc font-body list-inside mt-3">{newItems}</ul>
    } else if (props.layout == 'end-link') {
        newItems = items.map(item => (
            <a key={item.id} href={item.dest} className="underline font-bold font-body">{item.text}</a>
        ))
        itemsContent = newItems
    } else if (props.layout == 'text') {
        itemsContent = ''
    } else {
        var cls = 'grid gap-4 ' + props.layout
        cls = cls;
        newItems = items.map(item => (
            <ProjectCol key={item.id} id={item.id} imgSrc={item.img.src} imgAlt={item.img.alt} imgW={item.img.width} imgH={item.img.height} text={item.text} hasTitle="true" title={item.title} />
        ))
        itemsContent = <div className={cls}>{newItems}</div>
    }

    let newCl = 'm-3 border-t-2 ' + props.clName + ' border-dotted';

    return (
        <section className={newCl}>
            <h2 className="mt-5 text-3xl font-heading font-bold">{props.name}</h2>
            <p className="font-body mt-3">{props.description}</p>
            {itemsContent}
        </section>
    )
}