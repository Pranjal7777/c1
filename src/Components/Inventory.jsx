
import {useState} from "react"

function Inventory(props){

    const [book, setBook] = useState(props.books)

    const [pen, setPen] = useState(props.pens)
    // console.log(pen)

    const [noteBook, setNotebooks] = useState(props.notebooks)



    const [ink, setInk] = useState(props.inkpens)


    // const [subtotal,setTotal] = useState()
    // console.log(ink)


    const addItem = ()=>{
        setBook(book + 1)
    }
    const removeItem= () =>{
        setBook(book - 1)
    }

    const addPen = ()=>{
        setPen(pen + 1)
    }
    const removePen= () =>{
        setPen(pen - 1)
    }

    const addNote = ()=>{
        setNotebooks(noteBook + 1)
    }
    const removeNote= () =>{
        setNotebooks(noteBook - 1)
    }

    
    const addInk = ()=>{
        setInk(ink + 1)
    }
    const removeInk= () =>{
        setInk(ink - 1)
    }


// const total= ()=>{
//    (book + noteBook + ink + pen)


//     }

    return (
        <>
        <div className="items">
            <>
            <span>Books:</span> 
            <button onClick={()=> addItem(1)}  className="addBook" >+</button>
            <button onClick={()=> removeItem(-1)} className="remBook">-</button>
            <span className="totalBooks">{book}</span>
            </>
            <br />
            <>
            <span>pens:</span> 
            <button onClick={()=> addPen(1)}  className="addPen" >+</button>
            <button onClick={()=> removePen(-1)} className="remPen">-</button>
            <span className="totalPens">{pen}</span>
            </>
<br />
            <>
            <span>notebooks:</span> 
            <button onClick={()=> addNote(1)}  className="addNotebook" >+</button>
            <button onClick={()=> removeNote(-1)} className="remNotebook">-</button>
            <span className="totalNotebooks">{noteBook}</span>
            </>

            <br />

            <>
            <span>inkpens:</span> 
            <button onClick={()=> addInk(1)}  className="addInkpen" >+</button>
            <button onClick={()=> removeInk(-1)} className="remInkpen">-</button>
            <span className="totalInkpens">{ink}</span>
            </>

       
  
            </div>
            <div className="total">

        
            </div>

            </>
    )
}



export { Inventory}