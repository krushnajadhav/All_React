

function InputComp({MyMethod}) {

    return (
    
        <div>
            <input type="text" id='inputItemName' onKeyDown={MyMethod} placeholder='Enter food name'/>
        </div>

    );

}

export default InputComp;