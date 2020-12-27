function Tempo(props) {
    console.log('> Passando pelo FrontEnd;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático - com Delay)</div>
        </div>
    );
}

export async function getStaticProps() {
    console.log('> Passando pelo getStaticProps();');
    console.log('> Adicionando delay de 5 segundos;');
    
    await delay(5000);
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    return {
        props: {
            staticDateString
        }
    }
}

const delay = ms => Promise(resolve => setTimeout(resolve, ms));

export default Tempo;