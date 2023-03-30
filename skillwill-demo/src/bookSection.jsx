const GOT = (props) => {

    const ssrk = () => {
        props.shxlup(props.title, props.characters)
    }

    return (
        <div>
            <img src="https://rafubooks.com/media/bookimages/A_Game_of_Thrones_Book_1_by_George_R._R._Martin.jpg" alt="" width='200px' height="200px" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <br />
            {props.characters.map(vinme => {
                return (
                    <div>
                        <p>{vinme}</p>
                        
                    </div>
                )
            })}

            <button onClick={ssrk}>alucha</button>
            
        </div>
    )
}


export default GOT