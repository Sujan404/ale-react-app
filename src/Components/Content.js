const Content = ({list, handleCheck, handleDelete}) =>{
    return(
        <main className="content">
            {list.length ? (
                <ul>
                    {list.map((item) => {
                        
                    })}
                </ul>
            )}
        </main>
    );
};