

const ComponenteMultiple=({tipo,dias})=>{
    const costeHotel=()=>{
        let coste=dias*85;
        if (dias>8) coste-=68;
        else if (dias>3)coste-=31;
        return <p>Coste estancia hotel: {coste}€</p>
    }
    
    const costeCoche=()=>{
        let coste=dias*55;
        if (dias>5) coste-=28;
        else if (dias>2)coste-=11;
        return <p>Coste alquilir coche: {coste}€</p>
    }

    return <div>{tipo===1 ? costeHotel() : costeCoche()}</div>
}

export default ComponenteMultiple;