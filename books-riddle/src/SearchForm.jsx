
export default function SearchForm({handleAnswer}) {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const answer = form.elements.answer;

        handleAnswer(answer.value);
        form.reset();
    }

    return(
        <form className="search-form-container" onSubmit={handleSubmit}>
            <input name = "answer" type="text" placeholder="Думка..."></input>
            <button type= "submit" className="open-search-form-btn" >Search</button>
        </form>
    )
}
