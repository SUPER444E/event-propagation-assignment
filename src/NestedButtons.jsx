
const NestedButtons = () => {
    
    const handleOuterClick = () => {
        alert("Outer Container Clicked");
    };

 
    const handleInnerClick = (e) => {
        e.stopPropagation(); 
        alert("Inner Button Clicked!");
    };

    return (
        <div onClick={handleOuterClick}>
            <h2>Outer Container</h2>
            <button onClick={handleInnerClick}>
            Inner Button
            </button>
        </div>
  );
}

export default NestedButtons;