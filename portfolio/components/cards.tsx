import Card from "./ui/card";

const Cards = () => {
    const projects = [
        {
            title: 'Aila Consulting',
            description: 'Description 1',
            image: '/images/ailaconsulting.webp',
            link: '/'
        },
        {
            title: 'Groupe BNSB',
            description: 'Description 2',
            image: '/images/groupebnsb.webp',
            link: '/'
        },
    ]
    return (
        <div>
            {projects.map((project, index) => {
                return <Card key={index} {...project} />
            })}
        </div>
    );
}
 
export default Cards;