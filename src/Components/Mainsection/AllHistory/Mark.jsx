

const Mark = ({ card, carddilet }) => {


    return (
        <div className="bg-[#d0cece] px-2 py-2 my-3" >
            <h1 className="my-4 text-3xl">BookMarked Bloks : {card?.length}</h1>
            <div>

                {
                    card?.map(cardloop => <div key={cardloop.id}>

                        <h1 className="bg-[#ffffffb7] py-3 px-6 mb-2">{cardloop.title}</h1>
                        <button onClick={() => carddilet(cardloop.id)}>Dilet Blog</button>


                    </div>)

                }
                



            </div>
        </div>
    );
};

export default Mark;