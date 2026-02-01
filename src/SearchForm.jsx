
export default function SearchForm({handleAnswer}) {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        console.log(form.answerInput.value);
        const answer = form.answerInput.value;
        handleAnswer(answer);
        form.reset();
    }

    return(
        <form className="search-form-container" onSubmit={handleSubmit}>
            <input name = "answerInput" type="text" placeholder="Думка..."></input>
            <button type= "submit" className="open-search-form-btn" >Search</button>
        </form>
    )
}
